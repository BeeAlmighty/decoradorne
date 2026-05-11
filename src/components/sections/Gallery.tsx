'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface GalleryTile {
  id: string;
  label: string;
  gradient: string;
  accent: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryTile[] = [
  {
    id: 'engagement-1',
    label: 'Engagement Decor',
    gradient: 'from-[#C9A96E]/30 to-[#F2EDE8]',
    accent: '#C9A96E',
    alt: 'Luxury engagement decoration Lagos — floral arch with gold candle arrangement',
  },
  {
    id: 'kamu-1',
    label: 'Kamu Setup',
    gradient: 'from-[#D4878A]/25 to-[#FAF7F4]',
    accent: '#D4878A',
    alt: 'Kamu ceremony decoration Lagos — colourful throne and traditional fabric draping',
  },
  {
    id: 'nikkah-1',
    label: 'Nikkah Ceremony',
    gradient: 'from-[#8BA888]/25 to-[#F2EDE8]',
    accent: '#8BA888',
    alt: 'Nikkah decoration Lagos — elegant floral arch and soft ambient lighting',
  },
  {
    id: 'arabian-1',
    label: 'Arabian Night',
    gradient: 'from-[#C9A96E]/20 to-[#1A1410]/5',
    accent: '#C9A96E',
    alt: 'Arabian Night decoration Lagos — Moroccan lanterns and ceiling draping',
  },
  {
    id: 'picnic-1',
    label: 'Luxury Picnic',
    gradient: 'from-[#8BA888]/30 to-[#FAF7F4]',
    accent: '#8BA888',
    alt: 'Luxury picnic setup Lagos — styled low table with fresh florals and cushions',
  },
  {
    id: 'henna-1',
    label: 'Henna Party',
    gradient: 'from-[#D4878A]/20 to-[#F2EDE8]',
    accent: '#D4878A',
    alt: 'Henna party decoration Lagos — jewel-toned cushions and floral backdrop',
  },
];

function PlaceholderTile({
  tile,
  delay,
  tall,
}: {
  tile: GalleryTile;
  delay: number;
  tall?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${tile.gradient} ${tall ? 'row-span-2' : ''}`}
      style={{ minHeight: tall ? '440px' : '210px' }}
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
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div
          className="inline-flex self-start text-xs font-medium px-3 py-1.5 rounded-full mb-1"
          style={{ backgroundColor: `${tile.accent}22`, color: tile.accent }}
        >
          {tile.label}
        </div>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section className="py-24 sm:py-32 bg-[#F2EDE8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-light text-[#1A1410]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Beauty in every{' '}
              <em className="italic text-[#C9A96E]">detail.</em>
            </motion.h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1410]/60 hover:text-[#C9A96E] transition-colors"
          >
            View full gallery
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[210px] gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <PlaceholderTile
              key={item.id}
              tile={item}
              delay={i * 0.08}
              tall={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
