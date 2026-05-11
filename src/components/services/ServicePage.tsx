'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { LeadForm } from '@/components/forms/LeadForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqJsonLd, buildServiceJsonLd } from '@/lib/seo';
import { buildDefaultWhatsAppUrl } from '@/lib/whatsapp';
import type { Service } from '@/lib/constants';

interface ServicePageProps {
  service: Service;
}

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-[#E8E0D8] last:border-0"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-[#1A1410] text-sm sm:text-base">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#C9A96E] transition-transform duration-300 mt-0.5 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-[#1A1410]/60 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export function ServicePage({ service }: ServicePageProps) {
  const waUrl = buildDefaultWhatsAppUrl();

  return (
    <>
      <JsonLd data={buildServiceJsonLd(service)} />
      <JsonLd data={buildFaqJsonLd(service.faqs)} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-44 pb-20 bg-[#FAF7F4] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 70% 40%, ${service.colorAccent}12, transparent)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-4"
          >
            {service.shortName} · Lagos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-light text-[#1A1410] max-w-3xl mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}
          >
            {service.name}{' '}
            <em className="italic text-[#C9A96E]">in Lagos</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display italic text-xl sm:text-2xl text-[#1A1410]/50 font-light mb-8"
          >
            {service.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#1A1410]/60 leading-relaxed max-w-2xl mb-10"
          >
            {service.longDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A96E] text-[#FAF7F4] font-medium px-8 py-4 rounded-full hover:bg-[#A8834A] transition-colors text-sm"
            >
              Plan my {service.shortName}
              <ArrowRight size={16} />
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#C9A96E] text-[#C9A96E] font-medium px-8 py-4 rounded-full hover:bg-[#C9A96E]/8 transition-colors text-sm"
            >
              Chat on WhatsApp →
            </a>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 sm:py-28 bg-[#F2EDE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3"
              >
                Package details
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display font-light text-[#1A1410] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
              >
                What&rsquo;s{' '}
                <em className="italic text-[#C9A96E]">included.</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#1A1410]/60 leading-relaxed"
              >
                Every {service.shortName.toLowerCase()} package by Decor Adorne is tailored to
                your vision. Below is what our standard package covers — we can customise any
                element to suit your event.
              </motion.p>
            </div>
            <ul className="flex flex-col gap-4">
              {service.included.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4 bg-[#FAF7F4] border border-[#E8E0D8] rounded-xl px-5 py-4"
                >
                  <CheckCircle
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: service.colorAccent }}
                  />
                  <span className="text-sm text-[#1A1410]/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-[#FAF7F4]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3"
          >
            Common questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-light text-[#1A1410] mb-10"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Frequently asked questions
          </motion.h2>
          <div className="border-t border-[#E8E0D8]">
            {service.faqs.map((faq, i) => (
              <FaqItem key={faq.question} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section id="enquire" className="py-20 sm:py-28 bg-[#F2EDE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3"
              >
                Book your {service.shortName}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display font-light text-[#1A1410] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
              >
                Let&rsquo;s bring your{' '}
                <em className="italic text-[#C9A96E]">{service.shortName.toLowerCase()}</em>{' '}
                to life.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#1A1410]/60 leading-relaxed"
              >
                Tell us about your event and we&rsquo;ll reach out with a bespoke proposal within
                2 business hours. No commitment required.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="bg-[#FAF7F4] border border-[#E8E0D8] rounded-3xl p-8 sm:p-10"
            >
              <LeadForm defaultEventType={service.slug.split('-')[0]} compact />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
