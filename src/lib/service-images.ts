import fs from 'node:fs';
import path from 'node:path';

export interface ServiceImages {
  /** The file named hero.* in the service folder, if present. */
  hero?: string;
  /** Every other image in the folder, sorted by filename (01, 02, …). */
  gallery: string[];
}

/**
 * Short, paste-friendly folder name for each service, under
 * public/images/services/<key>. Slugs are long for SEO; folders stay short.
 */
const FOLDER_BY_SLUG: Record<string, string> = {
  'engagement-decor-lagos': 'engagement',
  'kamu-decoration-lagos': 'kamu',
  'henna-party-decor-lagos': 'henna',
  'arabian-night-decoration-lagos': 'arabian-night',
  'nikkah-decoration-lagos': 'nikkah',
  'naming-ceremony-decor-lagos': 'naming',
  'picnic-setup-lagos': 'picnic',
  'event-rentals-lagos': 'rentals',
  'durbar-decoration-lagos': 'durbar',
  'birthday-decoration-lagos': 'birthday',
};

const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;
const HERO_RE = /^hero\./i;

/**
 * Reads public/images/services/<key> at build time and returns the hero
 * (file named hero.*) plus the rest of the collection, sorted by filename.
 *
 * Service pages are statically generated, so this runs during `next build`.
 * A missing folder returns empty — unphotographed services render cleanly
 * with no broken tiles.
 */
export function getServiceImages(slug: string): ServiceImages {
  const key = FOLDER_BY_SLUG[slug];
  if (!key) return { gallery: [] };

  const dir = path.join(process.cwd(), 'public', 'images', 'services', key);
  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return { gallery: [] };
  }

  const images = files.filter((f) => IMAGE_RE.test(f)).sort();
  const heroFile = images.find((f) => HERO_RE.test(f));
  const gallery = images
    .filter((f) => !HERO_RE.test(f))
    .map((f) => `/images/services/${key}/${f}`);

  return {
    hero: heroFile ? `/images/services/${key}/${heroFile}` : undefined,
    gallery,
  };
}
