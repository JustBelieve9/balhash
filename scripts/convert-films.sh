#!/bin/bash
# Convert the two edited films into web-sized MP4s plus poster frames.
#
# Размер подобран так, чтобы файл влез в репозиторий: git жёстко блокирует всё
# тяжелее 100 МиБ. Это не прихоть - фильм обязан лежать на самом сайте, потому
# что GitHub Releases отдаёт вложения как application/octet-stream, и Safari
# такое встроенным плеером не проигрывает (Chrome догадывается, Safari нет).
#
# Отсюда 720x1280 и два прохода: при жёстком потолке по размеру двухпроходное
# кодирование распределяет биты заметно умнее однопроходного.
#
# Третий файл в исходной папке - это первые два, склеенные подряд. Он не
# конвертируется: те же полчаса видео во второй раз.
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/Новая папка/фильмы"
OUT="$ROOT/public/media/films"

TARGET_MB=90
AUDIO_KBPS=96
HEIGHT=1280
POSTER_AT=30

mkdir -p "$OUT"

convert() {
  src="$1"
  slug="$2"

  if [ ! -f "$OUT/$slug.mp4" ]; then
    duration=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$src")
    video_kbps=$(awk -v mb="$TARGET_MB" -v d="$duration" -v a="$AUDIO_KBPS" \
      'BEGIN { printf "%d", (mb * 8 * 1024) / d - a }')
    echo "converting $slug: ${duration%.*}s -> ${video_kbps}k video"

    log="$(mktemp -t "$slug")"
    ffmpeg -nostdin -y -loglevel error -i "$src" \
      -vf "scale=-2:$HEIGHT" \
      -c:v libx264 -preset slow -b:v "${video_kbps}k" \
      -pass 1 -passlogfile "$log" -an -f null /dev/null
    ffmpeg -nostdin -y -loglevel error -i "$src" \
      -vf "scale=-2:$HEIGHT" \
      -c:v libx264 -preset slow -b:v "${video_kbps}k" \
      -pass 2 -passlogfile "$log" \
      -profile:v high -level 4.0 -pix_fmt yuv420p \
      -c:a aac -b:a "${AUDIO_KBPS}k" \
      -movflags +faststart "$OUT/$slug.mp4"
    rm -f "$log"*
  fi

  if [ ! -f "$OUT/$slug.jpg" ]; then
    ffmpeg -nostdin -y -loglevel error -ss "$POSTER_AT" -i "$src" \
      -frames:v 1 -vf "scale=1080:-2" -q:v 4 "$OUT/$slug.jpg"
  fi

  ls -lh "$OUT/$slug.mp4" | awk '{print "done " $9 " " $5}'
}

# Какой файл какая часть, видно по содержимому, а не по имени: 0813 начинается
# уже у воды и уезжает от неё, значит это дорога домой.
convert "$SRC/copy_94FDA99F-722D-43DF-9CDA-3158B8DE16BE.MOV" "tuda"
convert "$SRC/0813.mp4" "obratno"
