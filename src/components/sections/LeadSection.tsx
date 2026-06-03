'use client';

import { motion } from 'framer-motion';
import { LeadForm } from '@/components/forms/LeadForm';

export function LeadSection() {
  return (
    <section
      id="lead-form"
      className="py-24 sm:py-32"
      style={{ background: 'linear-gradient(135deg, #F0E5FA 0%, #F2EDE8 50%, #FAF7F4 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3"
            >
              Get in touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-light text-[#1A1410] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Tell us about{' '}
              <em className="italic text-[#C9A96E]">your event.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#1A1410]/60 leading-relaxed mb-8 max-w-md"
            >
              Share your vision and we&rsquo;ll craft a decor concept that brings it to life.
              From Lagos to Abuja, Kano to Port Harcourt, every event we touch is treated as a canvas for beauty.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              {[
                { text: 'Free consultation, no commitment', color: '#C9A96E' },
                { text: 'Reply within 2 business hours', color: '#A878CD' },
                { text: 'Lagos studio · Nationwide service', color: '#E2567A' },
              ].map(({ text, color }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-[#1A1410]/70">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                  {text}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="bg-[#FAF7F4] rounded-3xl p-8 sm:p-10"
            style={{ border: '1px solid', borderColor: 'rgba(168,120,205,0.20)', boxShadow: '0 8px 40px rgba(168,120,205,0.08)' }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
