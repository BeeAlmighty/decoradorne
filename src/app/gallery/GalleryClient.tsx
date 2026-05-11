'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { id: 'all',        label: 'All Work'      },
  { id: 'engagement', label: 'Engagement'    },
  { id: 'kamu',       label: 'Kamu'          },
  { id: 'henna',      label: 'Henna Party'   },
  { id: 'arabian',    label: 'Arabian Night' },
  { id: 'nikkah',     label: 'Nikkah'        },
  { id: 'naming',     label: 'Naming'        },
  { id: 'picnic',     label: 'Picnic'        },
  { id: 'birthday',   label: 'Birthday'      },
  { id: 'durbar',     label: 'Durbar'        },
  { id: 'rentals',    label: 'Rentals'       },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

interface GalleryTile {
  id: string;
  category: Exclude<CategoryId, 'all'>;
  label: string;
  alt: string;
  src?: string;
  gradient: string;
  accent: string;
  span?: 'wide' | 'tall';
}

const GALLERY_TILES: GalleryTile[] = [
  // ── Engagement ──────────────────────────────────────────────────────────────
  {
    id: 'e1', category: 'engagement',
    label: 'Engagement Decor',
    alt: 'Engagement decoration Lagos — floral arch and candlelit setup',
    src: '/images/gallery/engagement-1.JPG',
    gradient: 'from-[#C9A96E]/30 to-[#F2EDE8]', accent: '#C9A96E',
    span: 'tall',
  },
  {
    id: 'e2', category: 'engagement',
    label: 'Engagement Setup',
    alt: 'Engagement party decoration Lagos — styled venue with florals and lighting',
    src: '/images/gallery/wedding-3.JPG',
    gradient: 'from-[#C9A96E]/20 to-[#FAF7F4]', accent: '#C9A96E',
  },

  // ── Kamu ────────────────────────────────────────────────────────────────────
  {
    id: 'k1', category: 'kamu',
    label: 'Kamu Ceremony',
    alt: 'Kamu decoration Lagos — vibrant throne area and cultural fabric draping',
    src: '/images/gallery/wedding-1.JPG',
    gradient: 'from-[#D4878A]/30 to-[#FAF7F4]', accent: '#D4878A',
  },
  {
    id: 'k2', category: 'kamu',
    label: 'Kamu Details',
    alt: 'Kamu ceremony Lagos — traditional lanterns and floral centrepieces',
    gradient: 'from-[#D4878A]/20 to-[#F2EDE8]', accent: '#D4878A',
  },

  // ── Henna ───────────────────────────────────────────────────────────────────
  {
    id: 'h1', category: 'henna',
    label: 'Henna Party',
    alt: 'Henna party decoration Lagos — jewel-toned cushions and Moroccan lanterns',
    src: '/images/gallery/henna-1.JPG',
    gradient: 'from-[#8BA888]/25 to-[#FAF7F4]', accent: '#8BA888',
    span: 'tall',
  },
  {
    id: 'h2', category: 'henna',
    label: 'Henna Details',
    alt: 'Henna night Lagos — close-up of styled table and floral centrepiece',
    src: '/images/gallery/henna-2.JPG',
    gradient: 'from-[#8BA888]/20 to-[#F2EDE8]', accent: '#8BA888',
  },
  {
    id: 'h3', category: 'henna',
    label: 'Henna Backdrop',
    alt: 'Henna party Lagos — flower wall backdrop for photography and portraits',
    src: '/images/gallery/henna-3.JPG',
    gradient: 'from-[#8BA888]/15 to-[#FAF7F4]', accent: '#8BA888',
  },
  {
    id: 'h4', category: 'henna',
    label: 'Henna Night Decor',
    alt: 'Henna night Lagos — intimate styled seating and lantern setup',
    src: '/images/gallery/henna-4.JPG',
    gradient: 'from-[#8BA888]/22 to-[#FAF7F4]', accent: '#8BA888',
  },
  {
    id: 'h5', category: 'henna',
    label: 'Henna Setup',
    alt: 'Henna party Lagos — full venue styling with jewel tones',
    src: '/images/gallery/henna-5.JPG',
    gradient: 'from-[#8BA888]/18 to-[#F2EDE8]', accent: '#8BA888',
    span: 'tall',
  },

  // ── Arabian Night ────────────────────────────────────────────────────────────
  {
    id: 'a1', category: 'arabian',
    label: 'Arabian Night',
    alt: 'Arabian Night decoration Lagos — dramatic ceiling draping and ornate lanterns',
    gradient: 'from-[#C9A96E]/25 to-[#1A1410]/8', accent: '#C9A96E',
    span: 'tall',
  },
  {
    id: 'a2', category: 'arabian',
    label: 'Arabian Details',
    alt: 'Arabian Night decoration Lagos — lantern cluster and floral arrangement',
    gradient: 'from-[#C9A96E]/18 to-[#FAF7F4]', accent: '#C9A96E',
  },

  // ── Nikkah ───────────────────────────────────────────────────────────────────
  {
    id: 'n1', category: 'nikkah',
    label: 'Nikkah Ceremony',
    alt: 'Nikkah decoration Lagos — elegant floral arch and soft ambient lighting',
    src: '/images/gallery/wedding-2.JPG',
    gradient: 'from-[#D4878A]/20 to-[#F2EDE8]', accent: '#D4878A',
  },

  // ── Naming ───────────────────────────────────────────────────────────────────
  {
    id: 'nm1', category: 'naming',
    label: 'Naming Ceremony',
    alt: 'Naming ceremony decoration Lagos — warm celebratory setup for a new arrival',
    src: '/images/gallery/naming-1.JPG',
    gradient: 'from-[#8BA888]/30 to-[#FAF7F4]', accent: '#8BA888',
    span: 'tall',
  },
  {
    id: 'nm2', category: 'naming',
    label: 'Naming Details',
    alt: 'Naming ceremony Lagos — pastel balloon columns and welcome arch',
    src: '/images/gallery/naming-2.JPG',
    gradient: 'from-[#8BA888]/20 to-[#F2EDE8]', accent: '#8BA888',
  },

  // ── Picnic ───────────────────────────────────────────────────────────────────
  {
    id: 'p1', category: 'picnic',
    label: 'Luxury Picnic',
    alt: 'Luxury picnic setup Lagos — styled low table with fresh florals and cushions',
    gradient: 'from-[#C9A96E]/20 to-[#FAF7F4]', accent: '#C9A96E',
    span: 'tall',
  },

  // ── Birthday ──────────────────────────────────────────────────────────────────
  {
    id: 'b1', category: 'birthday',
    label: 'Birthday Decor',
    alt: 'Birthday decoration Lagos — luxury styled celebration setup',
    src: '/images/gallery/birthday-1.JPG',
    gradient: 'from-[#C9A96E]/25 to-[#FAF7F4]', accent: '#C9A96E',
    span: 'tall',
  },
  {
    id: 'b2', category: 'birthday',
    label: 'Birthday Setup',
    alt: 'Birthday party decoration Lagos — elegant themed event styling',
    src: '/images/gallery/birthday-2.JPG',
    gradient: 'from-[#C9A96E]/18 to-[#F2EDE8]', accent: '#C9A96E',
  },

  // ── Durbar ───────────────────────────────────────────────────────────────────
  {
    id: 'd1', category: 'durbar',
    label: 'Durbar Decor',
    alt: 'Durbar decoration Lagos — royal grand venue styling with ornate draping and gold accents',
    src: '/images/gallery/durbar-decor-1.JPG',
    gradient: 'from-[#C9A96E]/30 to-[#F2EDE8]', accent: '#C9A96E',
    span: 'tall',
  },
  {
    id: 'd2', category: 'durbar',
    label: 'Durbar Setup',
    alt: 'Durbar ceremony Lagos — ceremonial stage with rich jewel-tone fabric and lantern clusters',
    src: '/images/gallery/durbar-decor-2.JPG',
    gradient: 'from-[#C9A96E]/22 to-[#FAF7F4]', accent: '#C9A96E',
  },
  {
    id: 'd3', category: 'durbar',
    label: 'Durbar Details',
    alt: 'Durbar decoration Lagos — cultural textile accents and ornate candelabra arrangement',
    src: '/images/gallery/durbar-decor-3.JPG',
    gradient: 'from-[#C9A96E]/18 to-[#FAF7F4]', accent: '#C9A96E',
  },

  // ── Rentals ──────────────────────────────────────────────────────────────────
  {
    id: 'r1', category: 'rentals',
    label: 'Event Rentals',
    alt: 'Event rental Lagos — Chiavari chairs and gold charger plate table setting',
    gradient: 'from-[#D4878A]/15 to-[#F2EDE8]', accent: '#D4878A',
  },
];

function Tile({ tile, delay }: { tile: GalleryTile; delay: number }) {
  const spanClass = [
    tile.span === 'tall' ? 'row-span-2' : '',
    tile.span === 'wide' ? 'col-span-2 sm:col-span-1' : '',
  ].join(' ');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay }}
      className={`relative rounded-2xl overflow-hidden group ${spanClass} ${
        tile.src ? 'bg-[#1A1410]' : `bg-gradient-to-br ${tile.gradient}`
      }`}
      style={{ minHeight: tile.span === 'tall' ? '420px' : '200px' }}
    >
      {tile.src ? (
        <>
          <Image
            src={tile.src}
            alt={tile.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/65 via-transparent to-transparent" />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${tile.accent} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 p-3.5">
        <span
          className={`inline-flex text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm ${
            tile.src ? 'bg-[#FAF7F4]/15 text-[#FAF7F4]' : ''
          }`}
          style={tile.src ? undefined : { backgroundColor: `${tile.accent}22`, color: tile.accent }}
        >
          {tile.label}
        </span>
      </div>
    </motion.div>
  );
}

export function GalleryClient() {
  const [active, setActive] = useState<CategoryId>('all');

  const filtered =
    active === 'all' ? GALLERY_TILES : GALLERY_TILES.filter((t) => t.category === active);

  return (
    <>
      {/* Filter tabs */}
      <section className="bg-[#FAF7F4] sticky top-[76px] sm:top-[82px] z-20 border-b border-[#E8E0D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  active === cat.id
                    ? 'bg-[#C9A96E] text-[#FAF7F4]'
                    : 'bg-[#F2EDE8] text-[#1A1410]/60 hover:text-[#1A1410]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-10 sm:py-14 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((tile, i) => (
                <Tile key={tile.id} tile={tile} delay={i * 0.04} />
              ))}
            </AnimatePresence>
          </div>
          {filtered.length === 0 && (
            <p className="text-center py-20 text-[#1A1410]/40 text-sm">
              No items in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
