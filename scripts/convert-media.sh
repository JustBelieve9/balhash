#!/bin/bash
# Convert original trip media into web-safe assets.
#
#   HEIC -> JPEG   (public/media/photos)
#   MOV  -> MP4    (public/media/videos)  + poster frame (public/media/posters)
#
# Originals live in "Новая папка/" and are never modified.
# Output file names keep the IMG_XXXX id; all date/burst metadata is carried
# in the generated manifest instead (see scripts/build-manifest.mjs).
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/Новая папка"
OUT="$ROOT/public/media"

PHOTO_MAX=2560
PHOTO_QUALITY=82
VIDEO_BITRATE=4M
POSTER_WIDTH=1440

mkdir -p "$OUT/photos" "$OUT/videos" "$OUT/posters"

photo_total=$(find "$SRC/photos" -type f \( -iname "*.heic" \) | wc -l | tr -d ' ')
video_total=$(find "$SRC/videos" -type f -iname "*.mov" | wc -l | tr -d ' ')

echo "photos: $photo_total  videos: $video_total"

i=0
find "$SRC/photos" -type f -iname "*.heic" | sort | while read -r f; do
  i=$((i + 1))
  id=$(basename "$f" | grep -oE 'IMG_[0-9]+')
  dest="$OUT/photos/$id.jpg"
  if [ -f "$dest" ]; then
    echo "[photo $i/$photo_total] $id (skip)"
    continue
  fi
  sips -s format jpeg -s formatOptions "$PHOTO_QUALITY" -Z "$PHOTO_MAX" \
    "$f" --out "$dest" >/dev/null 2>&1
  echo "[photo $i/$photo_total] $id"
done

j=0
find "$SRC/videos" -type f -iname "*.mov" | sort | while read -r f; do
  j=$((j + 1))
  id=$(basename "$f" | grep -oE 'IMG_[0-9]+')
  dest="$OUT/videos/$id.mp4"
  poster="$OUT/posters/$id.jpg"

  if [ ! -f "$dest" ]; then
    # -nostdin: ffmpeg would otherwise eat the file list this loop reads from.
    ffmpeg -nostdin -y -loglevel error -i "$f" \
      -vf "scale=-2:1080" \
      -c:v h264_videotoolbox -b:v "$VIDEO_BITRATE" \
      -c:a aac -b:a 128k \
      -movflags +faststart "$dest"
  fi

  if [ ! -f "$poster" ]; then
    duration=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")
    seek=$(awk -v d="$duration" 'BEGIN { s = d * 0.2; if (s > 2) s = 2; printf "%.2f", s }')
    ffmpeg -nostdin -y -loglevel error -ss "$seek" -i "$f" -frames:v 1 \
      -vf "scale=$POSTER_WIDTH:-2" -q:v 4 "$poster"
  fi

  echo "[video $j/$video_total] $id"
done

echo "done"
du -sh "$OUT/photos" "$OUT/videos" "$OUT/posters"
