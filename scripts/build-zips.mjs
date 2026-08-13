// Builds the download archives:
//   public/media/zip/all-photos.zip   every photo
//   public/media/zip/<series-id>.zip  one archive per series
//
// Run after scripts/build-manifest.mjs. Videos are not zipped: they are large
// and are offered as individual downloads instead.

import { readFileSync, mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const photosDir = join(root, "public", "media", "photos");
const zipDir = join(root, "public", "media", "zip");

const { series } = JSON.parse(
  readFileSync(join(root, "scripts", "media-index.json"), "utf8"),
);

rmSync(zipDir, { recursive: true, force: true });
mkdirSync(zipDir, { recursive: true });

function zip(target, files) {
  execFileSync("zip", ["-q", "-j", target, ...files], { cwd: photosDir });
}

const all = series.flatMap((group) =>
  group.frames.map((frame) => basename(frame.src)),
);
zip(join(zipDir, "all-photos.zip"), all);
console.log(`all-photos.zip: ${all.length} files`);

for (const group of series) {
  if (group.frames.length < 2) continue;
  const files = group.frames.map((frame) => basename(frame.src));
  zip(join(zipDir, `${group.id}.zip`), files);
  console.log(`${group.id}.zip: ${files.length} files`);
}
