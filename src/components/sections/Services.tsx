'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, type Service } from '@/lib/constants';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const pad = (n: number) => String(n + 1).padStart(2, '0');

/** First two services that have imagery anchor the editorial spread. */
const FEATURED = SERVICES.filter((s) => s.heroImage).slice(0, 2);

export function Services() {
  return (
    <section className="relative bg-[#F2EDE8] py-24 sm:py-36 overflow-hidden">

      {/* ── Oversized italic watermark — paper-stamp decoration ── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute select-none font-display italic text-[#C9A96E]/[0.08]"
        style={{
          right: '-4rem',
          bottom: '-3rem',
          fontSize: 'clamp(14rem, 26vw, 26rem)',
          lineHeight: 0.85,
          fontWeight: 300,
          transform: 'rotate(-6deg)',
          letterSpacing: '-0.04em',
        }}
      >
        Services
      </span>

      {/* Top-left soft gold wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 600px 400px at 8% 0%, rgba(201,169,110,0.10), transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── HEADER — asymmetric: small mono left, big serif right ── */}
        <header className="grid grid-cols-12 gap-y-8 gap-x-6 items-end mb-16 sm:mb-24">
          <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
            <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-[#1A1410]/45 mb-4 flex items-center">
              <span className="inline-block w-6 h-px bg-[#C9A96E] mr-3" aria-hidden="true" />
              Vol. 01, The Services Index
            </p>
            <p className="text-sm text-[#1A1410]/55 leading-relaxed max-w-xs font-display italic">
              Ten ways we transform a venue, anywhere in Nigeria, into a lantern-lit setting your guests will not stop talking about.
            </p>
          </div>

          <h2
            className="col-span-12 lg:col-span-8 order-1 lg:order-2 font-display font-light text-[#1A1410]"
            style={{
              fontSize: 'clamp(2.6rem, 6.4vw, 5.5rem)',
              lineHeight: 0.94,
              letterSpacing: '-0.025em',
            }}
          >
            Every celebration,
            <br />
            <em
              className="italic"
              style={{
                background:
                  'linear-gradient(135deg, #C9A96E 0%, #DEC48E 45%, #A8834A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              lantern-lit by hand.
            </em>
          </h2>
        </header>

        {/* ── FEATURED PAIR — magazine-spread overlap on desktop ── */}
        {FEATURED.length === 2 && (
          <div className="grid grid-cols-12 gap-6 lg:gap-0 mb-20 sm:mb-28 relative">
            {FEATURED.map((service, i) => {
              const originalIndex = SERVICES.indexOf(service);
              const layout =
                i === 0
                  ? { className: 'col-span-12 lg:col-span-7 z-10', tilt: -1.2, delay: 0 }
                  : { className: 'col-span-12 lg:col-span-6 lg:col-start-7 lg:-mt-16', tilt: 1.6, delay: 0.18 };
              return (
                <FeatureCard
                  key={service.slug}
                  service={service}
                  indexLabel={pad(originalIndex)}
                  {...layout}
                />
              );
            })}
          </div>
        )}

        {/* ── INDEX LIST — typographic table-of-contents spread ── */}
        <div className="relative">
          <div className="flex items-end justify-between border-b border-[#1A1410]/15 pb-3">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#1A1410]/45">
              The Full Index
            </span>
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#1A1410]/45">
              {String(SERVICES.length).padStart(2, '0')} entries
            </span>
          </div>

          <ol>
            {SERVICES.map((service, i) => (
              <IndexRow key={service.slug} service={service} number={pad(i)} />
            ))}
          </ol>
        </div>

        {/* ── EDITORIAL SIGN-OFF ── */}
        <div className="mt-16 sm:mt-24 grid grid-cols-12 gap-6 items-end">
          <p
            className="col-span-12 sm:col-span-7 font-display italic font-light text-[#1A1410]/85 leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)' }}
          >
            Don&rsquo;t see your celebration?
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #A8834A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We style it anyway.
            </span>
          </p>
          <div className="col-span-12 sm:col-span-5 flex sm:justify-end">
            <Link
              href="/#lead-form"
              className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-[#1A1410] border-b border-[#1A1410]/30 hover:border-[#C9A96E] pb-1.5 transition-colors"
            >
              Begin a conversation
              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#C9A96E]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Featured Card — large photo panel with tilt and editorial overlay        */
/* ─────────────────────────────────────────────────────────────────────────── */

function FeatureCard({
  service,
  indexLabel,
  className,
  tilt,
  delay = 0,
}: {
  service: Service;
  indexLabel: string;
  className: string;
  tilt: number;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const lockedTilt = prefersReducedMotion ? 0 : tilt;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, rotate: lockedTilt }}
      whileInView={{ opacity: 1, y: 0, rotate: lockedTilt }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      className={`relative ${className}`}
    >
      <Link href={`/services/${service.slug}`} className="group block">
        <article className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden bg-[#1A1410] rounded-[2px] shadow-[0_30px_80px_-20px_rgba(26,20,16,0.35)]">
          {service.heroImage && (
            <Image
              src={service.heroImage}
              alt={`${service.name} by Decor Adorne, Arabian-inspired styling in Lagos & across Nigeria`}
              fill
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          )}

          {/* Editorial dark scrim — heaviest at bottom for legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(26,20,16,0.18) 0%, rgba(26,20,16,0) 35%, rgba(26,20,16,0.55) 75%, rgba(26,20,16,0.92) 100%)',
            }}
          />

          {/* "FEATURED" pill */}
          <div className="absolute top-5 left-5 flex items-center gap-2 backdrop-blur-md bg-[#FAF7F4]/12 border border-[#FAF7F4]/22 rounded-full px-3 py-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: service.colorAccent }}
              aria-hidden="true"
            />
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#FAF7F4]/95">
              Featured · No. {indexLabel}
            </span>
          </div>

          {/* Hairline corner brackets — editorial photography mark */}
          <Bracket position="tl" />
          <Bracket position="tr" />
          <Bracket position="br" />

          {/* Bottom title block */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p
              className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3"
              style={{ color: service.colorAccent }}
            >
              {service.shortName}
            </p>
            <h3
              className="font-display font-light text-[#FAF7F4] leading-[0.96] mb-3"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                letterSpacing: '-0.02em',
              }}
            >
              <em className="italic font-light">{service.tagline.replace(/\.$/, '')}</em>
            </h3>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#FAF7F4]/60 leading-relaxed line-clamp-2 max-w-sm">
                {service.description}
              </p>
              <span className="shrink-0 w-9 h-9 rounded-full border border-[#FAF7F4]/25 flex items-center justify-center text-[#FAF7F4]/85 group-hover:bg-[#FAF7F4] group-hover:text-[#1A1410] group-hover:border-[#FAF7F4] transition-all duration-300">
                <ArrowUpRight size={15} strokeWidth={1.6} />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

function Bracket({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const positions = {
    tl: 'top-3 left-3 border-t border-l',
    tr: 'top-3 right-3 border-t border-r',
    bl: 'bottom-3 left-3 border-b border-l',
    br: 'bottom-3 right-3 border-b border-r',
  } as const;
  return (
    <span
      aria-hidden="true"
      className={`absolute w-5 h-5 border-[#FAF7F4]/40 pointer-events-none ${positions[position]}`}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/* Index Row — a single typographic line in the magazine TOC                 */
/* ─────────────────────────────────────────────────────────────────────────── */

function IndexRow({ service, number }: { service: Service; number: string }) {
  const [hovered, setHovered] = useState(false);

  // Italicize the trailing word for editorial flair (e.g. "Henna *Party*").
  const parts = service.shortName.split(' ');
  const head = parts.slice(0, -1).join(' ');
  const tail = parts.slice(-1)[0];

  return (
    <li className="relative border-b border-[#1A1410]/12 last:border-b-0">
      <Link
        href={`/services/${service.slug}`}
        className="group relative grid grid-cols-12 items-center gap-3 sm:gap-6 py-5 sm:py-7"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hover sweep — soft accent tint from the left */}
        <motion.span
          aria-hidden="true"
          initial={false}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="absolute inset-y-0 left-0 right-0 origin-left pointer-events-none"
          style={{
            background: `linear-gradient(90deg, ${service.colorAccent}14 0%, transparent 70%)`,
          }}
        />

        {/* Number */}
        <span className="col-span-2 sm:col-span-1 font-mono text-xs sm:text-sm text-[#1A1410]/40 tabular-nums tracking-wider relative">
          {number}
        </span>

        {/* Swatch + name */}
        <div className="col-span-7 sm:col-span-7 lg:col-span-5 flex items-center gap-3 sm:gap-5 relative">
          <span
            className="relative shrink-0 transition-transform duration-300"
            style={{ transform: hovered ? 'scale(1.4)' : 'scale(1)' }}
          >
            <span
              className="block w-2.5 h-2.5 rounded-full transition-shadow duration-300"
              style={{
                background: service.colorAccent,
                boxShadow: hovered ? `0 0 0 5px ${service.colorAccent}25` : 'none',
              }}
            />
          </span>
          <h3
            className="font-display font-light text-[#1A1410] leading-none transition-transform duration-500 ease-out group-hover:translate-x-2"
            style={{
              fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
              letterSpacing: '-0.018em',
            }}
          >
            {head ? (
              <>
                {head}{' '}
                <em className="italic font-normal" style={{ color: service.colorAccent }}>
                  {tail}
                </em>
              </>
            ) : (
              <em className="italic font-normal" style={{ color: service.colorAccent }}>
                {tail}
              </em>
            )}
          </h3>
        </div>

        {/* Tagline — desktop only */}
        <p className="hidden lg:block lg:col-span-5 text-sm font-display italic text-[#1A1410]/55 leading-snug relative">
          {service.tagline}
        </p>

        {/* Arrow */}
        <span className="col-span-3 sm:col-span-4 lg:col-span-1 flex justify-end text-[#1A1410]/30 transition-all duration-300 group-hover:text-[#1A1410] group-hover:translate-x-1 relative">
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </span>
      </Link>
    </li>
  );
}
