'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { STATS } from '@/lib/constants';
import { buildDefaultWhatsAppUrl } from '@/lib/whatsapp';

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function Hero() {
  const waUrl = buildDefaultWhatsAppUrl();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#FAF7F4]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(201,169,110,0.10),transparent)]" />
        <span className="absolute right-[-2rem] top-[15%] font-display text-[20vw] font-light text-[#E8E0D8]/60 leading-none select-none hidden lg:block">
          &ldquo;
        </span>
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full border border-[#E8E0D8] opacity-50" />
        <div className="absolute bottom-32 right-[5%] w-40 h-40 rounded-full bg-[#C9A96E]/5" />
        <div className="absolute top-1/2 left-[45%] w-2 h-2 rounded-full bg-[#C9A96E] opacity-60" />
        <div className="absolute top-[35%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#D4878A] opacity-40" />
      </div>

      <div className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-5 sm:px-8 pt-32 sm:pt-44 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-[#C9A96E] mb-6"
          >
            Lagos Luxury Event Decoration
          </motion.p>

          {/* Headline */}
          <motion.h1
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="font-display font-light text-[#1A1410] mb-8"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', lineHeight: 1.0 }}
          >
            Moments,{' '}
            <br className="hidden sm:block" />
            <em className="italic text-[#C9A96E]">beautifully</em>
            <br />
            adorned.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="text-base sm:text-lg text-[#1A1410]/60 leading-relaxed max-w-lg mb-10"
          >
            From intimate Nikkah ceremonies to grand engagement parties,
            we transform Lagos venues into breathtaking celebrations that
            your guests will never forget.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.45}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A96E] text-[#FAF7F4] font-medium px-8 py-4 rounded-full hover:bg-[#A8834A] transition-colors text-sm sm:text-base"
            >
              Plan my event
              <ArrowRight size={16} />
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#C9A96E] text-[#C9A96E] font-medium px-8 py-4 rounded-full hover:bg-[#C9A96E]/8 transition-colors text-sm sm:text-base"
            >
              Chat on WhatsApp
              <MessageCircle size={16} />
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-auto pt-16 grid grid-cols-3 gap-4 sm:gap-8 border-t border-[#E8E0D8]"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p
                className="text-2xl sm:text-4xl font-normal text-[#C9A96E] mb-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-[#1A1410]/50 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF7F4] to-transparent pointer-events-none" />
    </section>
  );
}
