'use client';

import React from 'react';
import {
  ArrowRight,
  MessageCircle,
  Heart,
  Star,
  Sparkles,
  Moon,
  Crown,
  Gift,
  Sun,
  Package,
} from 'lucide-react';
import { buildDefaultWhatsAppUrl } from '@/lib/whatsapp';

// Decor Adorne services replace the generic "tech brand" marquee
const MARQUEE_ITEMS = [
  { name: 'Engagement Decor', icon: Heart },
  { name: 'Kamu Ceremony', icon: Star },
  { name: 'Henna Party', icon: Sparkles },
  { name: 'Arabian Night', icon: Moon },
  { name: 'Nikkah Ceremony', icon: Crown },
  { name: 'Naming Ceremony', icon: Gift },
  { name: 'Luxury Picnic', icon: Sun },
  { name: 'Event Rentals', icon: Package },
] as const;

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
      <span
        className="text-xl font-normal text-[#FAF7F4] sm:text-2xl"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-[#FAF7F4]/40 font-medium sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function GlassmorphismTrustHero() {
  const waUrl = buildDefaultWhatsAppUrl();

  return (
    <div className="relative w-full min-h-screen bg-[#1A1410] text-[#FAF7F4] overflow-hidden flex flex-col">
      {/* ── Decorative background photo ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80')",
          opacity: 0.18,
          maskImage:
            'linear-gradient(180deg, transparent 0%, black 18%, black 72%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(180deg, transparent 0%, black 18%, black 72%, transparent 100%)',
        }}
      />

      {/* ── Ambient gold glow ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[380px] rounded-full bg-[#C9A96E]/8 blur-[130px] pointer-events-none"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto w-full max-w-7xl px-5 sm:px-8 pt-32 sm:pt-44 pb-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

          {/* ── Left column ── */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Eyebrow badge */}
            <div className="da-fade da-d1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A96E]/25 bg-[#C9A96E]/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A96E] flex items-center gap-2">
                  Lagos Luxury Event Decoration
                  <Star className="w-3.5 h-3.5 fill-current" />
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="da-fade da-d2 font-light"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                maskImage:
                  'linear-gradient(180deg, black 0%, black 82%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(180deg, black 0%, black 82%, transparent 100%)',
              }}
            >
              Moments,
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #FAF7F4 0%, #FAF7F4 52%, #C9A96E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                beautifully
              </span>
              <br />
              adorned.
            </h1>

            {/* Sub-copy */}
            <p className="da-fade da-d3 max-w-xl text-base sm:text-lg text-[#FAF7F4]/55 leading-relaxed">
              From intimate Kamu celebrations to grand engagement parties —
              we transform Lagos venues into breathtaking settings your
              guests will never forget.
            </p>

            {/* CTAs */}
            <div className="da-fade da-d4 flex flex-col sm:flex-row gap-4">
              <a
                href="#lead-form"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A96E] px-8 py-4 text-sm font-semibold text-[#1A1410] transition-all hover:scale-[1.02] hover:bg-[#DEC48E] active:scale-[0.98]"
              >
                Plan my event
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#FAF7F4]/15 bg-[#FAF7F4]/5 px-8 py-4 text-sm font-semibold text-[#FAF7F4] backdrop-blur-sm transition-all hover:bg-[#FAF7F4]/10 hover:border-[#C9A96E]/30"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="lg:col-span-5 space-y-5 lg:mt-8">

            {/* Stats glass card */}
            <div className="da-fade da-d5 relative overflow-hidden rounded-3xl border border-[#FAF7F4]/10 bg-[#FAF7F4]/5 p-8 backdrop-blur-xl shadow-2xl">
              {/* Card glow */}
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#C9A96E]/6 blur-3xl pointer-events-none"
              />

              <div className="relative z-10">
                {/* Primary stat */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A96E]/15 ring-1 ring-[#C9A96E]/25">
                    <Heart className="h-6 w-6 text-[#C9A96E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      className="text-3xl font-normal tracking-tight text-[#FAF7F4]"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      500+
                    </div>
                    <div className="text-sm text-[#FAF7F4]/45">Events styled in Lagos</div>
                  </div>
                </div>

                {/* Happiness bar */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#FAF7F4]/45">Client happiness</span>
                    <span className="text-[#C9A96E] font-medium">4.9 / 5.0</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#FAF7F4]/10">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-[#C9A96E] to-[#DEC48E]" />
                  </div>
                </div>

                <div className="h-px w-full bg-[#FAF7F4]/10 mb-6" />

                {/* Mini stat grid — same structure as original */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="8+" label="Years" />
                  <div className="w-px bg-[#FAF7F4]/10 mx-auto" />
                  <StatItem value="200+" label="Reviews" />
                  <div className="w-px bg-[#FAF7F4]/10 mx-auto" />
                  <StatItem value="100%" label="Bespoke" />
                </div>

                {/* Status pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FAF7F4]/10 bg-[#FAF7F4]/5 px-3 py-1 text-[10px] font-medium tracking-wide text-[#FAF7F4]/55 uppercase">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8BA888] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8BA888]" />
                    </span>
                    Booking Now
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FAF7F4]/10 bg-[#FAF7F4]/5 px-3 py-1 text-[10px] font-medium tracking-wide text-[#FAF7F4]/55 uppercase">
                    <Crown className="w-3 h-3 text-[#C9A96E]" />
                    Lagos Luxury
                  </div>
                </div>
              </div>
            </div>

            {/* Services marquee card */}
            <div className="da-fade da-d5 relative overflow-hidden rounded-3xl border border-[#FAF7F4]/10 bg-[#FAF7F4]/5 py-8 backdrop-blur-xl">
              <p className="mb-6 px-8 text-[10px] font-medium text-[#FAF7F4]/35 uppercase tracking-[0.2em]">
                Our specialties
              </p>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent, black 18%, black 82%, transparent)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent, black 18%, black 82%, transparent)',
                }}
              >
                {/* Triple the list so the loop is seamless */}
                <div className="da-marquee flex gap-10 whitespace-nowrap px-4">
                  {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
                    (item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 opacity-40 transition-all hover:opacity-95 hover:scale-105 cursor-default"
                        >
                          <Icon
                            className="h-4 w-4 text-[#C9A96E]"
                            strokeWidth={1.5}
                          />
                          <span className="text-sm font-medium text-[#FAF7F4] tracking-tight">
                            {item.name}
                          </span>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
