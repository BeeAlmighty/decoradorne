'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F4]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3"
          >
            What clients say
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-light text-[#1A1410]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Stories from families{' '}
            <em className="italic text-[#C9A96E]">across Nigeria.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => {
            const cardGradients = [
              'linear-gradient(135deg, #FFF8EE 0%, #F2EDE8 100%)',
              'linear-gradient(135deg, #F5EDF8 0%, #EDE4F8 100%)',
              'linear-gradient(135deg, #FFF0F5 0%, #F2EDE8 100%)',
            ];
            const starColors = ['#C9A96E', '#A878CD', '#E2567A'];
            return (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-2xl p-8 flex flex-col gap-6 border"
                style={{
                  marginTop: i === 1 ? '2rem' : 0,
                  background: cardGradients[i],
                  borderColor: 'rgba(168,120,205,0.12)',
                }}
              >
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      style={{ color: starColors[i], fill: starColors[i] }}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="flex-1">
                  <p className="font-display font-light text-xl text-[#1A1410] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <footer>
                  <p className="font-medium text-sm text-[#1A1410]">{t.name}</p>
                  <p className="text-xs text-[#1A1410]/50 mt-0.5">{t.event}</p>
                </footer>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 flex items-center gap-3 justify-center"
        >
          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => {
              const colors = ['#C9A96E','#C9A96E','#A878CD','#A878CD','#E2567A'];
              return <Star key={i} size={16} style={{ color: colors[i], fill: colors[i] }} />;
            })}
          </div>
          <p className="text-sm text-[#1A1410]/60">
            <span className="font-medium text-[#1A1410]">4.9</span> average across 200+ events nationwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
