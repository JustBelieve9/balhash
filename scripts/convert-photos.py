#!/usr/bin/env python3
"""Convert the original photos into upright, web-sized JPEGs.

Two sources, two legs of the trip:

  Новая папка/Новая папка   part "lake"    4-7 August, the lake itself
  Новая папка/photos        part "astana"  8-11 August, Astana and the way back

sips is used only to decode (macOS handles Apple's colour profiles best);
Pillow then applies the EXIF rotation to the pixels, resizes, and writes a file
with no orientation tag left. Baking the rotation in matters because next/image
sizes its layout box from the stored pixel dimensions, so a photo relying on an
EXIF flag would reserve a landscape box for a portrait picture.

Also writes scripts/photo-times.json, the metadata scripts/build-manifest.mjs
groups into series.

Usage: python3 scripts/convert-photos.py [--force]
"""

import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "media" / "photos"
THUMBS = ROOT / "public" / "media" / "thumbs"

SOURCES = [
    ("lake", ROOT / "Новая папка" / "Новая папка"),
    ("astana", ROOT / "Новая папка" / "photos"),
]

# Новая папка/extra: пересохранённые файлы без EXIF. Часть поездки взята из
# содержимого кадра, времени у них нет вообще (см. extra-classification.json).
EXTRA_DIR = ROOT / "Новая папка" / "extra"
EXTRA_PARTS = json.loads(
    (ROOT / "scripts" / "extra-classification.json").read_text()
)["files"]

SUFFIXES = {".heic", ".png", ".jpg", ".jpeg"}
MAX_EDGE = 2560
QUALITY = 82
DECODE_QUALITY = 95

# Сетка плотная: три колонки на десктопе, то есть плитка примерно 340 px, на
# ретине 680. Превью на 900 px с запасом хватает и на обложки, и на оверлей.
# Полный кадр остаётся только для скачивания. Без этого на статическом хостинге
# (там нет оптимизатора картинок) телефон тянул бы кадры по 600 КБ в плитку.
THUMB_EDGE = 900
THUMB_QUALITY = 78

EXCLUDED = set(json.loads((ROOT / "scripts" / "excluded.json").read_text())["ids"])

# 2026-08-08_185201_IMG_2637_burst-1of8.HEIC
NAMED = re.compile(
    r"^(\d{4}-\d{2}-\d{2})_(\d{2})(\d{2})(\d{2})_(IMG_\d+)(?:_burst-(\d+)of(\d+))?",
    re.IGNORECASE,
)


def exif_creation(path: Path) -> str | None:
    """'2026:08:04 13:40:44' -> '2026-08-04T13:40:44'"""
    out = subprocess.run(
        ["sips", "-g", "creation", str(path)],
        capture_output=True,
        text=True,
    ).stdout
    match = re.search(r"creation:\s*(\d{4}):(\d{2}):(\d{2})\s+(\d{2}:\d{2}:\d{2})", out)
    if not match:
        return None
    year, month, day, clock = match.groups()
    return f"{year}-{month}-{day}T{clock}"


def describe(path: Path, part: str) -> dict | None:
    id_match = re.search(r"IMG_\d+", path.name)
    if not id_match:
        return None
    photo_id = id_match.group(0)

    named = NAMED.match(path.name)
    if named:
        date, hh, mm, ss, _, burst_index, burst_total = named.groups()
        taken_at = f"{date}T{hh}:{mm}:{ss}"
    else:
        taken_at = exif_creation(path)
        burst_index = burst_total = None
        if not taken_at:
            return None

    return {
        "id": photo_id,
        "part": part,
        "takenAt": taken_at,
        "burstIndex": int(burst_index) if burst_index else None,
        "burstTotal": int(burst_total) if burst_total else None,
    }


def convert_one(src: Path, dest: Path, tmpdir: Path) -> None:
    """sips decodes, Pillow straightens and resizes."""
    decoded = tmpdir / f"{dest.stem}.jpg"
    subprocess.run(
        [
            "sips", "-s", "format", "jpeg",
            "-s", "formatOptions", str(DECODE_QUALITY),
            str(src), "--out", str(decoded),
        ],
        check=True,
        capture_output=True,
    )
    with Image.open(decoded) as image:
        upright = ImageOps.exif_transpose(image)
        upright.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
        upright = upright.convert("RGB")
        upright.save(dest, "JPEG", quality=QUALITY, optimize=True, progressive=True)

        upright.thumbnail((THUMB_EDGE, THUMB_EDGE), Image.LANCZOS)
        upright.save(
            THUMBS / dest.name,
            "JPEG",
            quality=THUMB_QUALITY,
            optimize=True,
            progressive=True,
        )
    decoded.unlink(missing_ok=True)


force = "--force" in sys.argv
OUT.mkdir(parents=True, exist_ok=True)
THUMBS.mkdir(parents=True, exist_ok=True)

entries: list[dict] = []
seen: set[str] = set()

with tempfile.TemporaryDirectory() as tmpdir:
    for part, src_dir in SOURCES:
        sources = sorted(
            p for p in src_dir.iterdir() if p.suffix.lower() in SUFFIXES
        )
        print(f"{part}: {len(sources)} files")

        for index, src in enumerate(sources, start=1):
            entry = describe(src, part)
            if entry is None:
                print(f"  [{index}/{len(sources)}] skip (no id or date): {src.name}")
                continue

            photo_id = entry["id"]
            if photo_id in EXCLUDED:
                print(f"  [{index}/{len(sources)}] {photo_id} (excluded)")
                continue
            if photo_id in seen:
                print(f"  [{index}/{len(sources)}] {photo_id} (duplicate id)")
                continue
            seen.add(photo_id)

            dest = OUT / f"{photo_id}.jpg"
            if not dest.exists() or not (THUMBS / dest.name).exists() or force:
                convert_one(src, dest, Path(tmpdir))

            with Image.open(dest) as final:
                entry["width"], entry["height"] = final.size

            entries.append(entry)
            print(f"  [{index}/{len(sources)}] {photo_id} {entry['width']}x{entry['height']}")

    # Кадры без даты: своя нумерация, часть поездки из классификации.
    extras = sorted(
        p for p in EXTRA_DIR.iterdir() if p.suffix.lower() in SUFFIXES
    ) if EXTRA_DIR.exists() else []
    print(f"extra: {len(extras)} files")

    for index, src in enumerate(extras, start=1):
        part = EXTRA_PARTS.get(src.name)
        if part is None:
            print(f"  [{index}/{len(extras)}] {src.name} (нет в классификации, пропуск)")
            continue

        photo_id = f"EXTRA_{index:02d}"
        dest = OUT / f"{photo_id}.jpg"
        if not dest.exists() or not (THUMBS / dest.name).exists() or force:
            convert_one(src, dest, Path(tmpdir))

        with Image.open(dest) as final:
            width, height = final.size

        entries.append(
            {
                "id": photo_id,
                "part": part,
                "takenAt": None,
                "burstIndex": None,
                "burstTotal": None,
                "width": width,
                "height": height,
            }
        )
        print(f"  [{index}/{len(extras)}] {photo_id} {part} {width}x{height}")

# public/media/photos is derived, not authored: anything without a source any
# more (a photo deleted from the folder, or a newly excluded id) goes too.
kept = {entry["id"] for entry in entries}
for stale in sorted(
    [p for p in OUT.glob("*.jpg") if p.stem not in kept]
    + [p for p in THUMBS.glob("*.jpg") if p.stem not in kept]
):
    stale.unlink()
    print(f"removed {stale.name} (no source)")

entries.sort(key=lambda e: (e["takenAt"] is None, e["takenAt"] or ""))
(ROOT / "scripts" / "photo-times.json").write_text(
    json.dumps(entries, indent=2, ensure_ascii=False)
)
print(f"done: {len(entries)} photos")
