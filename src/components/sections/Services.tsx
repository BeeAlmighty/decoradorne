'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart,
  Star,
  Sparkles,
  Moon,
  Crown,
  Gift,
  Sun,
  Package,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import type { ReactNode } from 'react';

const ICON_MAP: Record<string, ReactNode> = {
  Heart: <Heart size={22} strokeWidth={1.5} />,
  Star: <Star size={22} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={22} strokeWidth={1.5} />,
  Moon: <Moon size={22} strokeWidth={1.5} />,
  Crown: <Crown size={22} strokeWidth={1.5} />,
  Gift: <Gift size={22} strokeWidth={1.5} />,
  Sun: <Sun size={22} strokeWidth={1.5} />,
  Package: <Package size={22} strokeWidth={1.5} />,
};

export function Services() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F4]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3"
            >
              What we do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-light text-[#1A1410]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Every celebration,{' '}
              <em className="italic text-[#C9A96E]">beautifully dressed.</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1410]/60 hover:text-[#C9A96E] transition-colors"
            >
              View all services
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-full bg-[#F2EDE8] border border-[#E8E0D8] rounded-2xl p-7 flex flex-col gap-4 hover:shadow-[0_8px_40px_0_rgba(26,20,16,0.12)] transition-shadow duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${service.colorAccent}18`,
                      color: service.colorAccent,
                    }}
                  >
                    {ICON_MAP[service.icon]}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-[#1A1410] text-sm mb-2 group-hover:text-[#C9A96E] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#1A1410]/55 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A96E] group-hover:gap-2.5 transition-all">
                    Learn more
                    <ArrowRight size={12} />
                  </span>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
