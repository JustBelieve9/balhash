// Groups the converted photos into series and writes content/media.generated.ts.
//
// The 71 raw clips are not part of the site: the edited film covers the same
// footage and they were half the total weight. Flip INCLUDE_RAW_CLIPS to bring
// them back (they also need scripts/convert-media.sh to have been run).
//
// Photo metadata comes from scripts/photo-times.json (written by
// scripts/convert-photos.py). Series are formed two ways:
//
//   * files that already carry a burst-NofM marker are grouped by that marker
//   * everything else is grouped by time: frames shot within SERIES_GAP
//     seconds of each other belong to the same moment
//
// Run: python3 scripts/convert-photos.py && node scripts/build-manifest.mjs

import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcVideos = join(root, "Новая папка", "videos");
const outVideos = join(root, "public", "media", "videos");
const outPosters = join(root, "public", "media", "posters");

const excluded = new Set(
  JSON.parse(readFileSync(join(root, "scripts", "excluded.json"), "utf8")).ids,
);

const photos = JSON.parse(
  readFileSync(join(root, "scripts", "photo-times.json"), "utf8"),
).filter((photo) => !excluded.has(photo.id));

const INCLUDE_RAW_CLIPS = false;

/** Seconds between two frames that still count as one moment. */
const SERIES_GAP = 120;

const VIDEO_NAME =
  /^(\d{4}-\d{2}-\d{2})_(\d{2})(\d{2})(\d{2})_(IMG_\d+)\.mov$/i;

const seconds = (iso) => new Date(iso).getTime() / 1000;
const dateOf = (iso) => iso.slice(0, 10);
const timeOf = (iso) => iso.slice(11, 16);

function timeOfDay(time) {
  const hour = Number(time.slice(0, 2));
  if (hour < 5) return "Ночь";
  if (hour < 11) return "Утро";
  if (hour < 17) return "День";
  if (hour < 22) return "Вечер";
  return "Ночь";
}

function probeVideo(path) {
  let out;
  try {
    out = execFileSync(
      "ffprobe",
      [
        "-v", "error",
        "-select_streams", "v:0",
        "-show_entries", "stream=width,height",
        "-show_entries", "format=duration",
        "-of", "json",
        path,
      ],
      { stdio: ["ignore", "pipe", "pipe"] },
    ).toString();
  } catch {
    return null;
  }
  const data = JSON.parse(out);
  const stream = data.streams?.[0] ?? {};
  return {
    width: stream.width ?? 1920,
    height: stream.height ?? 1080,
    duration: Number(data.format?.duration ?? 0),
  };
}

// --- photos into series -----------------------------------------------------

const groups = [];
let current = null;

// Кадры без EXIF (папка extra) времени не имеют, поэтому в хронологию не
// встраиваются: по одной группе на часть поездки, в конце своей части.
const dated = photos.filter((photo) => photo.takenAt);
const undated = photos.filter((photo) => !photo.takenAt);

for (const photo of dated) {
  const frame = {
    id: photo.id,
    src: `/media/photos/${photo.id}.jpg`,
    thumb: `/media/thumbs/${photo.id}.jpg`,
    width: photo.width,
    height: photo.height,
    takenAt: photo.takenAt,
    downloadName: `balkhash_${dateOf(photo.takenAt)}_${timeOf(photo.takenAt).replace(":", "")}_${photo.id}.jpg`,
  };

  const marked = photo.burstTotal != null;
  const continuesMarked =
    marked && current?.marked && photo.burstIndex !== 1;
  const withinGap =
    !marked &&
    current != null &&
    !current.marked &&
    current.part === photo.part &&
    seconds(photo.takenAt) - seconds(current.lastAt) <= SERIES_GAP;

  if (current && (continuesMarked || withinGap)) {
    current.frames.push(frame);
    current.lastAt = photo.takenAt;
    continue;
  }

  current = {
    id: `s-${photo.id}`,
    part: photo.part,
    marked,
    date: dateOf(photo.takenAt),
    time: timeOf(photo.takenAt),
    takenAt: photo.takenAt,
    lastAt: photo.takenAt,
    day: dateOf(photo.takenAt),
    partOfDay: timeOfDay(timeOf(photo.takenAt)),
    frames: [frame],
  };
  groups.push(current);
}

for (const part of ["lake", "astana"]) {
  const frames = undated
    .filter((photo) => photo.part === part)
    .map((photo) => ({
      id: photo.id,
      src: `/media/photos/${photo.id}.jpg`,
      thumb: `/media/thumbs/${photo.id}.jpg`,
      width: photo.width,
      height: photo.height,
      takenAt: null,
      downloadName: `balkhash_${part}_${photo.id}.jpg`,
    }));
  if (!frames.length) continue;

  groups.push({
    id: `s-extra-${part}`,
    part,
    marked: false,
    undated: true,
    date: "",
    time: "",
    takenAt: "",
    lastAt: "",
    day: "",
    partOfDay: "",
    frames,
  });
}

// `marked` and `lastAt` are bookkeeping for the loop above and do not belong in
// the shipped manifest.
const series = groups.map((group) => ({
  id: group.id,
  part: group.part,
  kind: group.frames.length > 1 ? "series" : "single",
  undated: group.undated === true,
  date: group.date,
  time: group.time,
  takenAt: group.takenAt,
  day: group.day,
  partOfDay: group.partOfDay,
  count: group.frames.length,
  frames: group.frames,
}));

// --- videos -----------------------------------------------------------------

const videos = !INCLUDE_RAW_CLIPS
  ? []
  : readdirSync(srcVideos)
  .map((file) => {
    const match = VIDEO_NAME.exec(file);
    if (!match) return null;
    const [, date, hh, mm, ss, id] = match;
    return { id, takenAt: `${date}T${hh}:${mm}:${ss}` };
  })
  .filter(Boolean)
  .filter((entry) => !excluded.has(entry.id))
  .sort((a, b) => a.takenAt.localeCompare(b.takenAt))
  .flatMap((entry) => {
    const mp4 = join(outVideos, `${entry.id}.mp4`);
    const poster = join(outPosters, `${entry.id}.jpg`);
    if (!existsSync(mp4)) {
      console.warn(`missing converted video: ${entry.id}.mp4`);
      return [];
    }
    const probed = probeVideo(mp4);
    if (!probed) {
      console.warn(`unreadable video: ${entry.id}.mp4`);
      return [];
    }
    const date = dateOf(entry.takenAt);
    const time = timeOf(entry.takenAt);
    return [
      {
        id: entry.id,
        src: `/media/videos/${entry.id}.mp4`,
        poster: existsSync(poster) ? `/media/posters/${entry.id}.jpg` : null,
        width: probed.width,
        height: probed.height,
        duration: Math.round(probed.duration * 10) / 10,
        part: "astana",
        date,
        time,
        takenAt: entry.takenAt,
        day: date,
        partOfDay: timeOfDay(time),
        downloadName: `balkhash_${date}_${time.replace(":", "")}_${entry.id}.mp4`,
      },
    ];
  });

// --- write ------------------------------------------------------------------

const header = `// GENERATED FILE - do not edit by hand.
// Run: python3 scripts/convert-photos.py && node scripts/build-manifest.mjs
// Human-written titles live in content/series-titles.ts.

export type Part = "lake" | "astana";

export type Frame = {
  id: string;
  /** Полный кадр: оверлей и скачивание. */
  src: string;
  /** 1200 px: обложки в сетке. Полный кадр туда слишком тяжёл. */
  thumb: string;
  width: number;
  height: number;
  takenAt: string | null;
  downloadName: string;
};

export type Series = {
  id: string;
  part: Part;
  kind: "series" | "single";
  /** Кадры из мессенджера: EXIF вырезан, времени съёмки нет. */
  undated: boolean;
  date: string;
  time: string;
  takenAt: string;
  day: string;
  partOfDay: string;
  count: number;
  frames: Frame[];
};

export type VideoClip = {
  id: string;
  src: string;
  poster: string | null;
  width: number;
  height: number;
  duration: number;
  part: Part;
  date: string;
  time: string;
  takenAt: string;
  day: string;
  partOfDay: string;
  downloadName: string;
};
`;

const body = `
export const series: Series[] = ${JSON.stringify(series, null, 2)};

export const videos: VideoClip[] = ${JSON.stringify(videos, null, 2)};
`;

writeFileSync(join(root, "content", "media.generated.ts"), header + body);

writeFileSync(
  join(root, "scripts", "media-index.json"),
  JSON.stringify({ series, videos }, null, 2),
);

const counts = (part) =>
  series.filter((group) => group.part === part).reduce((n, g) => n + g.count, 0);

console.log(
  `wrote content/media.generated.ts: ${series.length} groups ` +
    `(${counts("lake")} lake frames, ${counts("astana")} astana frames), ` +
    `${videos.length} videos`,
);
