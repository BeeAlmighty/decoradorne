'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart, Star, Sparkles, Moon, Crown,
  Gift, Sun, Package, Cake, Gem, ArrowRight,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import type { ReactNode } from 'react';

const ICON_MAP: Record<string, ReactNode> = {
  Heart:    <Heart    size={20} strokeWidth={1.5} />,
  Star:     <Star     size={20} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={20} strokeWidth={1.5} />,
  Moon:     <Moon     size={20} strokeWidth={1.5} />,
  Crown:    <Crown    size={20} strokeWidth={1.5} />,
  Gift:     <Gift     size={20} strokeWidth={1.5} />,
  Sun:      <Sun      size={20} strokeWidth={1.5} />,
  Package:  <Package  size={20} strokeWidth={1.5} />,
  Cake:     <Cake     size={20} strokeWidth={1.5} />,
  Gem:      <Gem      size={20} strokeWidth={1.5} />,
};

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function Services() {
  return (
    <BackgroundGradientAnimation
      bgStart="#FAF7F4"
      bgEnd="#F2EDE8"
      blendingValue="soft-light"
      size="65%"
      interactive={false}
      containerClassName="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-[0.22em] uppercase text-[#C9A96E] mb-3"
            >
              What we do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="font-display font-light text-[#1A1410]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
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
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1410]/50 hover:text-[#C9A96E] transition-colors"
            >
              View all services
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* ── Card grid — dark espresso cards on light animated background ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
            >
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.26, ease: EASE }}
                  className="relative h-full bg-[#1A1410] rounded-2xl p-6 flex flex-col gap-5 overflow-hidden border border-[#C9A96E]/15 hover:border-[#C9A96E]/40 transition-colors duration-300"
                >
                  {/* Subtle top-edge shimmer on hover */}
                  <div
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />

                  {/* Ambient inner glow — bottom right */}
                  <div
                    className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${service.colorAccent}18 0%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Icon badge */}
                  <div
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${service.colorAccent}20`,
                      color: service.colorAccent,
                    }}
                  >
                    {ICON_MAP[service.icon]}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-[#FAF7F4] text-sm mb-2 group-hover:text-[#C9A96E] transition-colors duration-200 leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#FAF7F4]/45 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA link */}
                  <span className="relative inline-flex items-center gap-1.5 text-[11px] font-medium text-[#C9A96E]/60 group-hover:text-[#C9A96E] group-hover:gap-2.5 transition-all duration-200">
                    Learn more
                    <ArrowRight size={11} />
                  </span>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom stat strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="mt-14 pt-10 border-t border-[#1A1410]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-8 sm:gap-10">
            {[
              { value: '8+',   label: 'Years in Lagos' },
              { value: '500+', label: 'Events styled'  },
              { value: '4.9',  label: 'Client rating'  },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span
                  className="text-2xl font-normal text-[#C9A96E]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#1A1410]/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/#lead-form"
            className="shrink-0 inline-flex items-center gap-2 bg-[#1A1410] text-[#FAF7F4] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#C9A96E] hover:text-[#1A1410] transition-all duration-300"
          >
            Plan my event
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </BackgroundGradientAnimation>
  );
}
