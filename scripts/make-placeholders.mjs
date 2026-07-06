/**
 * Generates on-brand placeholder tiles for services that don't yet have real
 * photography (currently Kamu & Nikkah). Output lands in each service's image
 * folder and is picked up automatically by getServiceImages() at build time.
 *
 * Swap in real photos later and delete the matching *.svg files — no code change.
 *
 *   node scripts/make-placeholders.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

// Brand tokens (mirror brand/brand-guidelines.md)
const CREAM = '#FAF7F4';
const ESPRESSO = '#1A1410';
const GOLD = '#C9A96E';

/** Services needing placeholders: folder key, accent, and per-tile labels. */
const TARGETS = [
  { key: 'kamu', name: 'Kamu', accent: '#A878CD', tiles: ['Throne styling', 'Cultural textiles', 'Lantern detail'] },
  { key: 'nikkah', name: 'Nikkah', accent: '#8BAFD4', tiles: ['Floral arch', 'Ceremony seating', 'Arabic signage'] },
];

/**
 * An editorial placeholder card, accent-tinted, clearly marked "coming soon".
 * Layout scales to any aspect ratio so the same design works for portrait
 * service tiles and wide homepage gallery tiles alike.
 */
function placeholderSvg({ name, accent, label, w, h }) {
  const cx = w / 2;
  const cy = h / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${name} — photography coming soon">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${CREAM}"/>
      <stop offset="1" stop-color="#F2EDE8"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.32" r="0.7">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <rect x="28" y="28" width="${w - 56}" height="${h - 56}" rx="20" fill="none" stroke="${accent}" stroke-opacity="0.35" stroke-width="1.5"/>

  <g text-anchor="middle" font-family="'Cormorant Garamond', Georgia, 'Times New Roman', serif">
    <line x1="${cx - 40}" y1="${cy - 108}" x2="${cx + 40}" y2="${cy - 108}" stroke="${GOLD}" stroke-width="1.5"/>
    <text x="${cx}" y="${cy - 60}" font-family="system-ui, sans-serif" font-size="20" letter-spacing="6" fill="${GOLD}" font-weight="500">DECOR ADORNE</text>
    <text x="${cx}" y="${cy + 60}" font-size="104" font-style="italic" font-weight="500" fill="${ESPRESSO}">${name}</text>
    <text x="${cx}" y="${cy + 120}" font-family="system-ui, sans-serif" font-size="22" letter-spacing="2" fill="${ESPRESSO}" fill-opacity="0.55">${label}</text>
    <line x1="${cx - 40}" y1="${cy + 168}" x2="${cx + 40}" y2="${cy + 168}" stroke="${GOLD}" stroke-width="1.5"/>
  </g>

  <text x="${cx}" y="${h - 60}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" letter-spacing="4" fill="${ESPRESSO}" fill-opacity="0.4">PHOTOGRAPHY COMING SOON</text>
</svg>
`;
}

const servicesRoot = path.join(process.cwd(), 'public', 'images', 'services');
const galleryRoot = path.join(process.cwd(), 'public', 'images', 'gallery');

for (const { key, name, accent, tiles } of TARGETS) {
  // Portrait tiles for the service page's "collection" grid.
  const dir = path.join(servicesRoot, key);
  fs.mkdirSync(dir, { recursive: true });
  tiles.forEach((label, i) => {
    const file = path.join(dir, `${String(i + 1).padStart(2, '0')}.svg`);
    fs.writeFileSync(file, placeholderSvg({ name, accent, label, w: 800, h: 1000 }));
    console.log(`wrote ${path.relative(process.cwd(), file)}`);
  });

  // Landscape tile for the homepage portfolio grid.
  const galleryFile = path.join(galleryRoot, `${key}-placeholder.svg`);
  fs.writeFileSync(
    galleryFile,
    placeholderSvg({ name, accent, label: tiles[0], w: 1200, h: 900 }),
  );
  console.log(`wrote ${path.relative(process.cwd(), galleryFile)}`);
}
