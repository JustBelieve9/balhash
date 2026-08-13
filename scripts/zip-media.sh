#!/bin/sh
# Regenerate public/media/zip/all-photos.zip from current public/media/photos.
# Run after adding/replacing real photos.
set -e
cd "$(dirname "$0")/../public/media"
rm -f zip/all-photos.zip
zip -q -r zip/all-photos.zip photos -x ".*"
echo "wrote public/media/zip/all-photos.zip"
