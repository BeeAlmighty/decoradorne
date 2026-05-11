'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/constants';

export function Stats() {
  return (
    <section className="bg-[#1A1410] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#FAF7F4]/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center py-6 sm:py-2 px-4"
            >
              <p
                className="text-5xl sm:text-6xl font-normal text-[#C9A96E] mb-2"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium text-[#FAF7F4]/50 tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
