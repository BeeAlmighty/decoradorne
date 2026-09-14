/**
 * Rental catalogue — items, prices, and photography.
 *
 * Source of truth: the Decor Adorné props catalogue (44-page PDF, priced per
 * item in Naira). Photography is cropped from that catalogue into
 * /public/images/rentals. Prices here must match the catalogue exactly —
 * never estimate one.
 */

export type RentalCategorySlug =
  | 'backdrops'
  | 'rugs'
  | 'lighting'
  | 'seating'
  | 'tables'
  | 'props';

export interface RentalCategory {
  slug: RentalCategorySlug;
  label: string;
  /** Shown under the filter when the category is active. */
  blurb: string;
}

export interface RentalItem {
  slug: string;
  name: string;
  category: RentalCategorySlug;
  /** Naira, per item, per event. */
  price: number;
  /** Paths in /public. First image is the card thumbnail. */
  images: string[];
  /** Dimensions exactly as the catalogue states them. */
  size?: string;
  /** Colourways, set contents, or usage note from the catalogue. */
  note?: string;
  description: string;
}

export const RENTAL_CATEGORIES: RentalCategory[] = [
  {
    slug: 'backdrops',
    label: 'Backdrops & Stands',
    blurb: 'Carved Arabian panels, metal frames, and staging for the photo moment.',
  },
  {
    slug: 'rugs',
    label: 'Rugs & Mats',
    blurb: 'Persian rugs and woven raffia to ground a majlis or floor-seating setup.',
  },
  {
    slug: 'lighting',
    label: 'Lighting & Lanterns',
    blurb: 'Brass lanterns and ceiling lamps — the signature Decor Adorné glow.',
  },
  {
    slug: 'seating',
    label: 'Seating & Lounge',
    blurb: 'Couches, Moroccan floor puffs, benches, and velvet cushions.',
  },
  {
    slug: 'tables',
    label: 'Tables & Styling',
    blurb: 'Low picnic tables, centrepieces, and woven table mats.',
  },
  {
    slug: 'props',
    label: 'Props & Accents',
    blurb: 'Gold trunks, raffia vases, calabash, and cultural detail pieces.',
  },
];

export const RENTAL_ITEMS: RentalItem[] = [
  // ── Backdrops & Stands ──────────────────────────────────────────────
  {
    slug: 'carved-backdrop-16x8',
    name: 'Carved Arabian Backdrop',
    category: 'backdrops',
    price: 50000,
    size: '16ft × 8ft',
    images: ['/images/rentals/carved-backdrop-16x8.jpg'],
    description:
      'Full-width fretwork panels in an Arabian geometric motif, with a keyhole arch centre for drapery. Our largest ceremony backdrop.',
  },
  {
    slug: 'carved-backdrop-8x8',
    name: 'Carved Arabian Backdrop',
    category: 'backdrops',
    price: 20000,
    size: '8ft × 8ft',
    images: ['/images/rentals/carved-backdrop-8x8.jpg'],
    description:
      'Two carved panels in the same Arabian lattice pattern, sized for intimate home and garden setups.',
  },
  {
    slug: 'metal-rectangle-stand',
    name: 'Metal Rectangle Stand',
    category: 'backdrops',
    price: 12000,
    size: '8ft × 10ft',
    images: ['/images/rentals/metal-rectangle-stand.jpg'],
    description:
      'Wide gold-toned frame for fabric draping, floral runs, or a hanging backdrop behind the couple.',
  },
  {
    slug: 'metal-square-stand-7x8',
    name: 'Metal Square Stand',
    category: 'backdrops',
    price: 10000,
    size: '7ft × 8ft',
    images: ['/images/rentals/metal-square-stand-7x8.jpg'],
    description:
      'Ribbed antique-gold frame with a deep top rail — reads as an entrance arch or a signing-table backdrop.',
  },
  {
    slug: 'metal-square-stand-6x7',
    name: 'Metal Square Stand',
    category: 'backdrops',
    price: 8000,
    size: '6ft × 7ft',
    images: ['/images/rentals/metal-square-stand-6x7.jpg'],
    description:
      'Slim square frame on weighted feet. Our most-booked stand for florals and sheer fabric.',
  },
  {
    slug: 'metal-circle-stand',
    name: 'Metal Circle Stand',
    category: 'backdrops',
    price: 8000,
    size: '5.7ft × 6ft',
    images: ['/images/rentals/metal-circle-stand.jpg'],
    description:
      'Gold circle arch on a rectangular base — the classic portrait frame for Nikkah and engagement setups.',
  },
  {
    slug: 'stage-step',
    name: 'Stage Step',
    category: 'backdrops',
    price: 10000,
    size: '14in × 4ft',
    images: ['/images/rentals/stage-step.jpg'],
    description:
      'Three-tier black riser for a throne platform or raised dais. Stable enough for full bridal dress and train.',
  },

  // ── Rugs & Mats ─────────────────────────────────────────────────────
  {
    slug: 'persian-rug-green-large',
    name: 'Green Persian Rug',
    category: 'rugs',
    price: 35000,
    size: '8ft × 11.8ft',
    images: ['/images/rentals/persian-rug-green-large.jpg'],
    description:
      'Olive-green field with a rose medallion and ivory floral border. Our largest Persian, sized to anchor a full majlis.',
  },
  {
    slug: 'persian-rug-wine',
    name: 'Wine Persian Rug',
    category: 'rugs',
    price: 25000,
    size: '7ft × 10ft',
    images: ['/images/rentals/persian-rug-wine.jpg'],
    description:
      'Deep wine ground with a blue-and-ivory medallion and fringed edge. Pairs with the Arabian Night palette.',
  },
  {
    slug: 'persian-rug-beige',
    name: 'Beige Persian Rug',
    category: 'rugs',
    price: 25000,
    size: '7ft × 10ft',
    images: ['/images/rentals/persian-rug-beige.jpg'],
    description:
      'Cream and chocolate filigree on a soft beige field — the neutral choice for Nikkah and ivory schemes.',
  },
  {
    slug: 'persian-rug-maroon-large',
    name: 'Maroon Persian Rug',
    category: 'rugs',
    price: 15000,
    size: '7ft × 11.9ft',
    images: ['/images/rentals/persian-rug-maroon-large.jpg'],
    description:
      'Red field with a navy border and classical medallion. Long enough to run a full aisle or seating row.',
  },
  {
    slug: 'persian-rug-green',
    name: 'Green Persian Rug',
    category: 'rugs',
    price: 15000,
    size: '5ft × 7ft',
    images: ['/images/rentals/persian-rug-green.jpg'],
    description:
      'Forest-green Persian with a rose-and-ivory medallion and tasselled fringe.',
  },
  {
    slug: 'persian-rug-beige-chocolate',
    name: 'Beige & Chocolate Persian Rug',
    category: 'rugs',
    price: 15000,
    size: '5ft × 7ft',
    images: ['/images/rentals/persian-rug-beige-chocolate.jpg'],
    description:
      'Chocolate ground with cream cartouches and rose bouquets. Warm under candlelight.',
  },
  {
    slug: 'persian-rug-blue',
    name: 'Blue Persian Rug',
    category: 'rugs',
    price: 15000,
    size: '5ft × 7ft',
    images: ['/images/rentals/persian-rug-blue.jpg'],
    description:
      'Midnight-blue field with a layered medallion in slate and rose, finished with gold fringing.',
  },
  {
    slug: 'persian-rug-maroon',
    name: 'Maroon Persian Rug',
    category: 'rugs',
    price: 6000,
    size: '6ft × 9ft',
    images: ['/images/rentals/persian-rug-maroon.jpg'],
    description:
      'Velvet-finish maroon rug with blue panel motifs and a gold border. Our value option for large floor runs.',
  },
  {
    slug: 'persian-rug-blue-patterned',
    name: 'Blue Patterned Persian Rug',
    category: 'rugs',
    price: 6000,
    size: '6ft × 9ft',
    images: ['/images/rentals/persian-rug-blue-patterned.jpg'],
    description:
      'Navy rug with a geometric diamond and triangle pattern in gold and cream. Reads modern-tribal under lanterns.',
  },
  {
    slug: 'raffia-floor-mat',
    name: 'Raffia Floor Mat',
    category: 'rugs',
    price: 2000,
    size: '3.5ft',
    images: ['/images/rentals/raffia-floor-mat.jpg'],
    description:
      'Hand-coiled round raffia mat. Natural texture for picnic setups and floor-seating clusters.',
  },

  // ── Lighting & Lanterns ─────────────────────────────────────────────
  {
    slug: 'hanging-lanterns',
    name: 'Hanging Lanterns',
    category: 'lighting',
    price: 9000,
    note: 'For ceiling installations',
    images: ['/images/rentals/hanging-lanterns.jpg'],
    description:
      'Pierced brass lantern with a faceted teardrop silhouette. Hangs in clusters for ceiling work.',
  },
  {
    slug: 'hanging-lamps',
    name: 'Hanging Lamps',
    category: 'lighting',
    price: 6000,
    note: 'For ceiling installations',
    images: ['/images/rentals/hanging-lamps.jpg'],
    description:
      'Globe-shaped filigree lamps on gold chain, finished with crescent and star drops.',
  },
  {
    slug: 'arabian-lantern',
    name: 'Arabian Lantern',
    category: 'lighting',
    price: 4000,
    images: ['/images/rentals/arabian-lantern.jpg'],
    description:
      'Hexagonal brass lantern with jewel-toned glass panels and a domed fretwork top. Table or floor.',
  },

  // ── Seating & Lounge ────────────────────────────────────────────────
  {
    slug: 'couch-chocolate',
    name: 'Chocolate Brown Couch',
    category: 'seating',
    price: 20000,
    images: ['/images/rentals/couch-chocolate.jpg'],
    description:
      'Curved three-seat velvet couch in deep chocolate. The bridal seat for Kamu and Henna setups.',
  },
  {
    slug: 'couch-purple',
    name: 'Purple Couch',
    category: 'seating',
    price: 10000,
    images: ['/images/rentals/couch-purple.jpg'],
    description:
      'Scroll-arm chaise in purple velvet. Works as a feature seat or a photo-corner piece.',
  },
  {
    slug: 'floor-puff-gold',
    name: 'Gold Floor Puff',
    category: 'seating',
    price: 4000,
    images: ['/images/rentals/floor-puff-gold.jpg'],
    description:
      'Moroccan pouffe in metallic gold with hand-stitched panelling. Majlis seating that photographs well.',
  },
  {
    slug: 'floor-puff-black',
    name: 'Black Floor Puff',
    category: 'seating',
    price: 4000,
    images: ['/images/rentals/floor-puff-black.jpg'],
    description:
      'Dark tooled-leather pouffe with an inlaid rosette top. Ages into the room rather than shouting.',
  },
  {
    slug: 'floor-puff-brown',
    name: 'Brown Floor Puff',
    category: 'seating',
    price: 4000,
    images: ['/images/rentals/floor-puff-brown.jpg'],
    description:
      'Tan leather Moroccan pouffe with a cream petal motif and hand-stitched detail.',
  },
  {
    slug: 'floor-puff-green',
    name: 'Green Floor Puff',
    category: 'seating',
    price: 4000,
    images: ['/images/rentals/floor-puff-green.jpg'],
    description:
      'Green, ivory, and copper patchwork pouffe with beaded centre work. Jewel-tone floor seating.',
  },
  {
    slug: 'persian-throw-pillows',
    name: 'Persian Throw Pillows',
    category: 'seating',
    price: 3000,
    note: 'Available in wine and beige',
    images: [
      '/images/rentals/persian-throw-pillows.jpg',
      '/images/rentals/persian-throw-pillows-wine.jpg',
    ],
    description:
      'Damask-woven cushions with a floral medallion and pom-pom trim. Layer them across couches and floor puffs.',
  },
  {
    slug: 'throw-pillows',
    name: 'Velvet Throw Pillows',
    category: 'seating',
    price: 250,
    note: 'Wine, blue, green, purple, red, gold, and pink',
    images: ['/images/rentals/throw-pillows.jpg'],
    description:
      'Plain velvet cushions in seven colourways. The cheapest way to fill a majlis floor in your palette.',
  },
  {
    slug: 'picnic-bench',
    name: 'Picnic Bench',
    category: 'seating',
    price: 1000,
    images: ['/images/rentals/picnic-bench.jpg'],
    description:
      'Low timber bench built for floor-height dining. Pairs with the picnic table and bench cushions.',
  },
  {
    slug: 'bench-cushion',
    name: 'Bench Cushion',
    category: 'seating',
    price: 1000,
    images: ['/images/rentals/bench-cushion.jpg'],
    description:
      'Thick velvet seat pad sized to the picnic bench. Available to dress every bench in the setup.',
  },

  // ── Tables & Styling ────────────────────────────────────────────────
  {
    slug: 'picnic-table',
    name: 'Picnic Table',
    category: 'tables',
    price: 2000,
    images: ['/images/rentals/picnic-table.jpg'],
    description:
      'Two-tier low table in black and white. The base of every Decor Adorné luxury picnic.',
  },
  {
    slug: 'glass-centrepiece',
    name: 'Clear Glass Centre Piece',
    category: 'tables',
    price: 1500,
    images: ['/images/rentals/glass-centrepiece.jpg'],
    description:
      'Faceted crystal-cut vase with a scalloped rim. Holds tall florals without tipping.',
  },
  {
    slug: 'raffia-table-mat',
    name: 'Raffia Table Mat',
    category: 'tables',
    price: 300,
    size: '1.2ft',
    images: ['/images/rentals/raffia-table-mat.jpg'],
    description:
      'Natural hand-woven charger mat. Warms up a table setting without competing with the florals.',
  },
  {
    slug: 'raffia-table-mat-patterned',
    name: 'Patterned Raffia Table Mat',
    category: 'tables',
    price: 300,
    size: '1.2ft',
    images: ['/images/rentals/raffia-table-mat-patterned.jpg'],
    description:
      'Raffia mat woven in red, black, and cream with a traditional radiating pattern.',
  },
  {
    slug: 'raffia-table-mat-small',
    name: 'Raffia Table Mat',
    category: 'tables',
    price: 100,
    size: '8 inches',
    images: ['/images/rentals/raffia-table-mat-small.jpg'],
    description:
      'Small coiled raffia mat for side plates, glassware, and lantern bases.',
  },

  // ── Props & Accents ─────────────────────────────────────────────────
  {
    slug: 'gold-box-set',
    name: 'Gold Trunk Boxes',
    category: 'props',
    price: 45000,
    note: 'Set of three',
    images: ['/images/rentals/gold-box-set.jpg'],
    description:
      'Nested metal trunks in brushed gold with polished latches. Stack them for gift displays and stage dressing.',
  },
  {
    slug: 'giant-burner',
    name: 'Giant Burner',
    category: 'props',
    price: 20000,
    size: '4ft',
    images: ['/images/rentals/giant-burner.jpg'],
    description:
      'Floor-standing filigree burner in gold, four feet tall. Flanks an entrance or a bridal dais.',
  },
  {
    slug: 'raffia-vase-tall',
    name: 'Raffia Vase',
    category: 'props',
    price: 2000,
    size: '3ft',
    images: ['/images/rentals/raffia-vase-tall.jpg'],
    description:
      'Tall coiled raffia floor vase. Holds pampas, palm, or dried florals at entrance height.',
  },
  {
    slug: 'raffia-vase-medium',
    name: 'Raffia Vase',
    category: 'props',
    price: 1000,
    size: '2.5ft',
    images: ['/images/rentals/raffia-vase-medium.jpg'],
    description:
      'Slim woven raffia vase for floor corners and either side of a backdrop.',
  },
  {
    slug: 'raffia-vase-small',
    name: 'Raffia Vase',
    category: 'props',
    price: 500,
    size: '6 inches',
    images: ['/images/rentals/raffia-vase-small.jpg'],
    description:
      'Rose-toned woven table vase. Clusters beautifully down a long table.',
  },
  {
    slug: 'shantu',
    name: 'Shantu',
    category: 'props',
    price: 500,
    images: ['/images/rentals/shantu.jpg'],
    description:
      'Traditional carved shantu — the Hausa gourd rattle used in Kamu and Henna celebration. Styling or performance.',
  },
  {
    slug: 'calabash',
    name: 'Carved Calabash',
    category: 'props',
    price: 500,
    images: ['/images/rentals/calabash.jpg'],
    description:
      'Hand-carved lidded calabash in white and terracotta. Cultural detail for Kamu, Durbar, and naming ceremonies.',
  },
];

/** Every rental price is stated in Naira, per item, per event. */
export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`;
}

/** Display name including the size, so duplicate names stay distinguishable. */
export function rentalFullName(item: RentalItem): string {
  return item.size ? `${item.name} (${item.size})` : item.name;
}

export function rentalImageAlt(item: RentalItem): string {
  return `${rentalFullName(item)} available for event rental in Lagos from Decor Adorné`;
}

export function itemsInCategory(category: RentalCategorySlug): RentalItem[] {
  return RENTAL_ITEMS.filter((item) => item.category === category);
}

export const RENTAL_PRICE_MIN = Math.min(...RENTAL_ITEMS.map((i) => i.price));
export const RENTAL_PRICE_MAX = Math.max(...RENTAL_ITEMS.map((i) => i.price));

/** Minimum rental order, matching the Event Rentals service page. */
export const RENTAL_MINIMUM_ORDER = 50000;
