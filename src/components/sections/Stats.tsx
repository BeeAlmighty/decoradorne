'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/constants';

export function Stats() {
  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A1410 0%, #2D1B4E 50%, #1A1410 100%)' }}
    >
      {/* Mauve glow */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[200px] rounded-full bg-[#A878CD]/10 blur-[100px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#FAF7F4]/10">
          {STATS.map((stat, i) => {
            const statColors = ['#D4AF37', '#C49EE0', '#E2567A'];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center py-6 sm:py-2 px-4"
              >
                <p
                  className="text-5xl sm:text-6xl font-normal mb-2"
                  style={{ fontFamily: 'var(--font-mono)', color: statColors[i] }}
                >
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-[#FAF7F4]/50 tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
