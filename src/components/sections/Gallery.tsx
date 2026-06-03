'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface GalleryTile {
  id: string;
  label: string;
  alt: string;
  src: string;
  accent: string;
  tall?: boolean;
}

const GALLERY_ITEMS: GalleryTile[] = [
  {
    id: 'engagement-1',
    label: 'Engagement Decor',
    src: '/images/gallery/engagement-1.JPG',
    accent: '#C9A96E',
    alt: 'Luxury engagement decoration Lagos, floral arch and candlelit table setup',
    tall: true,
  },
  {
    id: 'henna-2',
    label: 'Henna Party',
    src: '/images/gallery/henna-2.JPG',
    accent: '#8BA888',
    alt: 'Henna party decoration Lagos, jewel-toned styling and floral details',
  },
  {
    id: 'naming-1',
    label: 'Naming Ceremony',
    src: '/images/gallery/naming-1.JPG',
    accent: '#8BA888',
    alt: 'Naming ceremony decoration Lagos, warm celebratory setup',
  },
  {
    id: 'wedding-1',
    label: 'Kamu Setup',
    src: '/images/gallery/wedding-1.JPG',
    accent: '#D4878A',
    alt: 'Kamu ceremony decoration Lagos, vibrant traditional styling',
  },
  {
    id: 'wedding-2',
    label: 'Nikkah Ceremony',
    src: '/images/gallery/wedding-2.JPG',
    accent: '#D4878A',
    alt: 'Nikkah decoration Lagos, elegant floral arch and ambient lighting',
  },
  {
    id: 'durbar-1',
    label: 'Durbar Decor',
    src: '/images/gallery/durbar-decor-1.JPG',
    accent: '#C9A96E',
    alt: 'Durbar decoration Lagos, royal grand venue styling with ornate draping and gold accents',
  },
];

function Tile({ tile, delay }: { tile: GalleryTile; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`relative rounded-2xl overflow-hidden bg-[#1A1410] group ${tile.tall ? 'row-span-2' : ''}`}
      style={{ minHeight: tile.tall ? '440px' : '210px' }}
    >
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/70 via-transparent to-transparent" />
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span
          className="inline-flex text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm bg-[#FAF7F4]/12 text-[#FAF7F4]"
        >
          {tile.label}
        </span>
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

        {/* Asymmetric 2-col / 3-col grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[210px] gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <Tile key={item.id} tile={item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
