#!/bin/bash
# Convert the two edited films into web-sized MP4s, split into 3 parts each.
#
# Каждая часть должна влезать в лимит git на файл (100 МиБ), но бюджет байт на
# минуту считается от длины ЧАСТИ, а не всего фильма - поэтому дробление на
# части, а не единый файл, и есть способ поднять битрейт. При целых фильмах
# (13 и 17.5 минут) выходило 600-850 кбит/с на 720p - заметно ниже комфортного
# минимума. Разбитые на 3 части по 4-6 минут укладываются в тот же лимит на
# части, а сегменты - в 2000-2900 кбит/с, это уже прилично для 720p.
#
# GitHub Releases такой проблемы не имеет (лимит там 2 ГиБ), но отдаёт вложения
# как application/octet-stream, и Safari отказывается проигрывать это встроенным
# плеером. Поэтому фильмы обязаны раздаваться самим сайтом как video/mp4, и
# лимит git остаётся главным ограничением.
#
# Третий файл в исходной папке - это первые два, склеенные подряд, не
# конвертируется: те же полчаса видео во второй раз.
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/Новая папка/фильмы"
OUT="$ROOT/public/media/films"

PARTS=3
TARGET_MB=95
AUDIO_KBPS=96
HEIGHT=1280
PRESET=slow
TUNE=film

mkdir -p "$OUT"

convert_part() {
  src="$1" slug="$2" part="$3" start="$4" len="$5"

  dest="$OUT/${slug}-${part}.mp4"
  poster="$OUT/${slug}-${part}.jpg"

  if [ ! -f "$dest" ]; then
    video_kbps=$(awk -v mb="$TARGET_MB" -v d="$len" -v a="$AUDIO_KBPS" \
      'BEGIN { printf "%d", (mb * 8 * 1024) / d - a }')
    echo "  часть $part: ${len%.*}s -> ${video_kbps}k video"

    log="$(mktemp -t "${slug}${part}")"
    ffmpeg -nostdin -y -loglevel error -ss "$start" -i "$src" -t "$len" \
      -vf "scale=-2:$HEIGHT" \
      -c:v libx264 -preset "$PRESET" -tune "$TUNE" -b:v "${video_kbps}k" \
      -pass 1 -passlogfile "$log" -an -f null /dev/null
    ffmpeg -nostdin -y -loglevel error -ss "$start" -i "$src" -t "$len" \
      -vf "scale=-2:$HEIGHT" \
      -c:v libx264 -preset "$PRESET" -tune "$TUNE" -b:v "${video_kbps}k" \
      -pass 2 -passlogfile "$log" \
      -profile:v high -level 4.0 -pix_fmt yuv420p \
      -c:a aac -b:a "${AUDIO_KBPS}k" \
      -movflags +faststart "$dest"
    rm -f "$log"*
  fi

  if [ ! -f "$poster" ]; then
    poster_at=$(awk -v s="$start" -v l="$len" 'BEGIN { printf "%.2f", s + l * 0.3 }')
    ffmpeg -nostdin -y -loglevel error -ss "$poster_at" -i "$src" \
      -frames:v 1 -vf "scale=1080:-2" -q:v 4 "$poster"
  fi

  ls -lh "$dest" | awk '{print "  done " $9 " " $5}'
}

convert_film() {
  src="$1" slug="$2"
  duration=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$src")
  echo "$slug: ${duration%.*}s всего, режу на $PARTS части"

  part_len=$(awk -v d="$duration" -v n="$PARTS" 'BEGIN { printf "%.2f", d / n }')
  for i in $(seq 1 "$PARTS"); do
    start=$(awk -v pl="$part_len" -v i="$i" 'BEGIN { printf "%.2f", pl * (i - 1) }')
    # Последняя часть берёт остаток длины, чтобы не потерять хвост из-за округления.
    if [ "$i" -eq "$PARTS" ]; then
      len=$(awk -v d="$duration" -v s="$start" 'BEGIN { printf "%.2f", d - s }')
    else
      len="$part_len"
    fi
    convert_part "$src" "$slug" "$i" "$start" "$len"
  done
}

# Какой файл какая часть, видно по содержимому, а не по имени: 0813 начинается
# уже у воды и уезжает от неё, значит это дорога домой.
convert_film "$SRC/copy_94FDA99F-722D-43DF-9CDA-3158B8DE16BE.MOV" "tuda"
convert_film "$SRC/0813.mp4" "obratno"

echo "готово:"
ls -lh "$OUT"/*.mp4 | awk '{print $9, $5}'
