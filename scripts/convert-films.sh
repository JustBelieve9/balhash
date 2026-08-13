#!/bin/bash
# Convert the two edited films into web-sized MP4s plus poster frames.
#
# The third file in the source folder is these two glued together. It is not
# converted: it would add ~340 MB of duplicate footage to the site.
#
# Encoding: software x264 rather than the hardware encoder. It is slower but
# noticeably more efficient per byte, which is what matters when the whole site
# has to fit a hosting quota.
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/Новая папка/фильмы"
OUT="$ROOT/public/media/films"

BITRATE=1600k
MAXRATE=2400k
BUFSIZE=3200k
POSTER_AT=30

mkdir -p "$OUT"

convert() {
  src="$1"
  slug="$2"
  if [ ! -f "$OUT/$slug.mp4" ]; then
    echo "converting $slug"
    ffmpeg -nostdin -y -loglevel error -i "$src" \
      -c:v libx264 -preset slow -b:v "$BITRATE" \
      -maxrate "$MAXRATE" -bufsize "$BUFSIZE" \
      -profile:v high -level 4.1 -pix_fmt yuv420p \
      -c:a aac -b:a 96k \
      -movflags +faststart "$OUT/$slug.mp4"
  fi
  if [ ! -f "$OUT/$slug.jpg" ]; then
    ffmpeg -nostdin -y -loglevel error -ss "$POSTER_AT" -i "$src" \
      -frames:v 1 -vf "scale=1080:-2" -q:v 4 "$OUT/$slug.jpg"
  fi
  echo "done $slug"
}

convert "$SRC/0813.mp4" "tuda"
convert "$SRC/copy_94FDA99F-722D-43DF-9CDA-3158B8DE16BE.MOV" "obratno"

du -sh "$OUT"
