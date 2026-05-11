'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generatePageMetadata } from '@/lib/seo';
import { LeadSection } from '@/components/sections/LeadSection';

// Export metadata from server side note: this won't work in a 'use client' file.
// Moving metadata to a separate server component pattern.

const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'kamu', label: 'Kamu' },
  { id: 'henna', label: 'Henna Party' },
  { id: 'arabian', label: 'Arabian Night' },
  { id: 'nikkah', label: 'Nikkah' },
  { id: 'naming', label: 'Naming' },
  { id: 'picnic', label: 'Picnic' },
  { id: 'rentals', label: 'Rentals' },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

interface GalleryTile {
  id: string;
  category: Exclude<CategoryId, 'all'>;
  label: string;
  gradient: string;
  accent: string;
  alt: string;
  span?: 'wide' | 'tall';
}

const GALLERY_TILES: GalleryTile[] = [
  { id: 'e1', category: 'engagement', label: 'Engagement Decor', gradient: 'from-[#C9A96E]/30 to-[#F2EDE8]', accent: '#C9A96E', alt: 'Engagement decoration Lagos — romantic floral arch and candlelit table', span: 'tall' },
  { id: 'e2', category: 'engagement', label: 'Engagement Florals', gradient: 'from-[#C9A96E]/20 to-[#FAF7F4]', accent: '#C9A96E', alt: 'Engagement decoration Lagos — luxury petal pathway and gold monogram' },
  { id: 'k1', category: 'kamu', label: 'Kamu Setup', gradient: 'from-[#D4878A]/30 to-[#FAF7F4]', accent: '#D4878A', alt: 'Kamu decoration Lagos — vibrant throne area and cultural fabric draping' },
  { id: 'k2', category: 'kamu', label: 'Kamu Details', gradient: 'from-[#D4878A]/20 to-[#F2EDE8]', accent: '#D4878A', alt: 'Kamu ceremony Lagos — traditional lanterns and floral centrepieces' },
  { id: 'h1', category: 'henna', label: 'Henna Party', gradient: 'from-[#8BA888]/25 to-[#FAF7F4]', accent: '#8BA888', alt: 'Henna party decoration Lagos — jewel-toned cushions and Moroccan lanterns', span: 'wide' },
  { id: 'a1', category: 'arabian', label: 'Arabian Night', gradient: 'from-[#C9A96E]/25 to-[#1A1410]/8', accent: '#C9A96E', alt: 'Arabian Night decoration Lagos — dramatic ceiling draping and ornate lanterns' },
  { id: 'n1', category: 'nikkah', label: 'Nikkah Ceremony', gradient: 'from-[#D4878A]/20 to-[#F2EDE8]', accent: '#D4878A', alt: 'Nikkah decoration Lagos — elegant floral arch and soft ambient lighting' },
  { id: 'nm1', category: 'naming', label: 'Naming Ceremony', gradient: 'from-[#8BA888]/30 to-[#FAF7F4]', accent: '#8BA888', alt: 'Naming ceremony decoration Lagos — pastel balloon columns and welcome arch' },
  { id: 'p1', category: 'picnic', label: 'Luxury Picnic', gradient: 'from-[#C9A96E]/20 to-[#FAF7F4]', accent: '#C9A96E', alt: 'Luxury picnic setup Lagos — styled low table with fresh florals and cushions', span: 'tall' },
  { id: 'r1', category: 'rentals', label: 'Rental Items', gradient: 'from-[#D4878A]/15 to-[#F2EDE8]', accent: '#D4878A', alt: 'Event rental Lagos — Chiavari chairs and gold charger plates table setting' },
  { id: 'a2', category: 'arabian', label: 'Arabian Details', gradient: 'from-[#C9A96E]/18 to-[#FAF7F4]', accent: '#C9A96E', alt: 'Arabian Night decoration Lagos — close-up of lantern cluster and floral arrangement' },
  { id: 'h2', category: 'henna', label: 'Henna Backdrop', gradient: 'from-[#8BA888]/20 to-[#F2EDE8]', accent: '#8BA888', alt: 'Henna party Lagos — floral backdrop for photography and portrait shots' },
];

function PlaceholderTile({ tile, delay }: { tile: GalleryTile; delay: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay }}
      className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${tile.gradient} ${tile.span === 'tall' ? 'row-span-2' : ''} ${tile.span === 'wide' ? 'col-span-2 sm:col-span-1' : ''}`}
      style={{ minHeight: tile.span === 'tall' ? '420px' : '200px' }}
      role="img"
      aria-label={tile.alt}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${tile.accent} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span
          className="inline-flex text-xs font-medium px-3 py-1.5 rounded-full"
          style={{ backgroundColor: `${tile.accent}22`, color: tile.accent }}
        >
          {tile.label}
        </span>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<CategoryId>('all');

  const filtered = active === 'all'
    ? GALLERY_TILES
    : GALLERY_TILES.filter((t) => t.category === active);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 sm:pt-48 pb-16 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-4">
            Portfolio
          </p>
          <h1
            className="font-display font-light text-[#1A1410] max-w-2xl mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Beauty in every{' '}
            <em className="italic text-[#C9A96E]">detail.</em>
          </h1>
          <p className="text-[#1A1410]/60 max-w-xl leading-relaxed">
            A glimpse into the celebrations we&rsquo;ve had the honour of styling across Lagos.
            Real events, real moments, real beauty.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="pb-6 bg-[#FAF7F4] sticky top-20 z-20 shadow-[0_1px_0_0_#E8E0D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
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
                <PlaceholderTile key={tile.id} tile={tile} delay={i * 0.04} />
              ))}
            </AnimatePresence>
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#1A1410]/40">
              No items in this category yet.
            </div>
          )}
        </div>
      </section>

      <LeadSection />
    </>
  );
}
