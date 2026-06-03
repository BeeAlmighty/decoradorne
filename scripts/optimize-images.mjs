// Optimises service photos in place: resizes + converts JPG/PNG to WebP,
// honours EXIF rotation, and deletes the heavy original.
//
// Workflow:
//   1. Paste phone photos into public/images/services/<service>/
//      naming the main one  hero.jpg  and the rest  01.jpg, 02.jpg, …
//   2. Run:  npm run images
//   3. Commit the resulting .webp files.
//
// sharp ships with Next.js — no extra install needed.

import sharp from 'sharp';
import { readdirSync, statSync, rmSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'public', 'images', 'services');
const HERO_WIDTH = 1920; // above-the-fold hero
const GALLERY_WIDTH = 1280; // collection tiles
const QUALITY = 72; // WebP quality — visually lossless for photos at this size

const SOURCE_RE = /\.(jpe?g|png)$/i;
const HERO_RE = /^hero\./i;

function serviceFolders() {
  try {
    return readdirSync(ROOT, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    return [];
  }
}

let processed = 0;
let savedBytes = 0;

for (const key of serviceFolders()) {
  const dir = path.join(ROOT, key);
  const sources = readdirSync(dir).filter((f) => SOURCE_RE.test(f));
  if (sources.length === 0) continue;

  console.log(`\n${key}/`);
  for (const file of sources) {
    const src = path.join(dir, file);
    const base = file.replace(SOURCE_RE, '');
    const out = path.join(dir, `${base}.webp`);
    const width = HERO_RE.test(file) ? HERO_WIDTH : GALLERY_WIDTH;

    const before = statSync(src).size;
    await sharp(src)
      .rotate() // apply EXIF orientation so portrait phone photos aren't sideways
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);
    const after = statSync(out).size;

    rmSync(src); // drop the heavy original; only the .webp is committed
    processed++;
    savedBytes += before - after;
    console.log(
      `  ${file}  ${(before / 1024).toFixed(0)}KB -> ${base}.webp ${(after / 1024).toFixed(0)}KB`,
    );
  }
}

console.log(
  processed
    ? `\nDone. Optimised ${processed} image(s), saved ${(savedBytes / 1024 / 1024).toFixed(1)}MB.`
    : 'No .jpg/.png files found. Paste photos into public/images/services/<service>/ first.',
);
