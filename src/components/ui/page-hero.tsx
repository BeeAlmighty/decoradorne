'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const PARTICLES = [
  { id: 1, left: '8%',  top: '28%', size: 2,   dur: 24, delay: 0,  color: '#C9A96E' },
  { id: 2, left: '82%', top: '22%', size: 1.5, dur: 32, delay: 6,  color: '#A878CD' },
  { id: 3, left: '58%', top: '68%', size: 2,   dur: 21, delay: 11, color: '#E2567A' },
] as const;

interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

interface PageHeroProps {
  eyebrow: string;
  /** Text before the italic-gold word. Renders on its own line if provided. */
  headlineBefore?: string;
  /** The word or phrase rendered in italic Cormorant with gold-cream gradient. */
  headlineItalic: string;
  /** Optional continuation on a third line. */
  headlineAfter?: string;
  description: string;
  /** Optional primary CTA. Renders as a gold pill button. */
  cta?: CtaLink;
  /** Optional muted secondary CTA. */
  ctaSecondary?: CtaLink;
  /**
   * Unsplash (or other) photo URL. Defaults to the luxury event photo used on the homepage.
   * Pass a different URL per page for variety.
   */
  photoUrl?: string;
}

export function PageHero({
  eyebrow,
  headlineBefore,
  headlineItalic,
  headlineAfter,
  description,
  cta,
  ctaSecondary,
  photoUrl = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80',
}: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full min-h-[72vh] bg-[#1A1410] text-[#FAF7F4] overflow-hidden flex flex-col justify-end">

      {/* ── Background photo — Ken Burns slow zoom ── */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: prefersReducedMotion ? 1 : 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5.5, ease: EASE }}
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.16,
          maskImage:
            'linear-gradient(180deg, transparent 0%, black 20%, black 70%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(180deg, transparent 0%, black 20%, black 70%, transparent 100%)',
        }}
      >
        <Image
          src={photoUrl}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Ambient gold glow — slow breathing drift ── */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -14, 5, -8, 0], scale: [1, 1.04, 0.97, 1.02, 1] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[280px] rounded-full bg-[#C9A96E]/8 blur-[110px] pointer-events-none"
      />

      {/* ── Ambient mauve glow ── */}
      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, 12, -6, 9, 0], scale: [1, 0.96, 1.04, 0.98, 1] }
        }
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
        className="absolute top-1/3 right-[15%] w-[380px] h-[220px] rounded-full bg-[#A878CD]/7 blur-[100px] pointer-events-none"
      />

      {/* ── Dust particles ── */}
      {!prefersReducedMotion &&
        PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            aria-hidden="true"
            className="absolute rounded-full pointer-events-none"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: 0, backgroundColor: p.color }}
            animate={{ y: [0, -18, 6, -12, 0], opacity: [0, 0.15, 0.06, 0.12, 0] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

      {/* ── Page content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-36 sm:pt-44 pb-16 sm:pb-22">

        {/* Eyebrow */}
        <p className="da-fade da-d1 text-[10px] sm:text-xs font-medium tracking-[0.22em] uppercase text-[#C9A96E] mb-5">
          {eyebrow}
        </p>

        {/* Headline */}
        <h1
          className="da-fade da-d2 font-display font-light max-w-4xl"
          style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
          }}
        >
          {headlineBefore && (
            <>
              {headlineBefore}
              <br />
            </>
          )}
          <span
            className="italic"
            style={{
              background:
                'linear-gradient(135deg, #FAF7F4 0%, #DEC48E 45%, #A878CD 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {headlineItalic}
          </span>
          {headlineAfter && (
            <>
              <br />
              {headlineAfter}
            </>
          )}
        </h1>

        {/* Description */}
        <p className="da-fade da-d3 mt-6 max-w-xl text-base sm:text-lg text-[#FAF7F4]/50 leading-relaxed">
          {description}
        </p>

        {/* CTAs */}
        {(cta || ctaSecondary) && (
          <div className="da-fade da-d4 mt-8 flex flex-col sm:flex-row gap-4">
            {cta && (
              <CtaButton link={cta} variant="primary" />
            )}
            {ctaSecondary && (
              <CtaButton link={ctaSecondary} variant="ghost" />
            )}
          </div>
        )}

        {/* Decorative rule — editorial spacer */}
        <div className="da-fade da-d5 mt-12 sm:mt-16 h-px w-full max-w-2xl bg-gradient-to-r from-[#C9A96E]/40 via-[#A878CD]/20 to-transparent" />
      </div>
    </div>
  );
}

function CtaButton({ link, variant }: { link: CtaLink; variant: 'primary' | 'ghost' }) {
  const ghostClass =
    'inline-flex items-center gap-2 border border-[#FAF7F4]/15 bg-[#FAF7F4]/5 text-[#FAF7F4] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#FAF7F4]/10 hover:border-[#A878CD]/30 transition-all backdrop-blur-sm';
  const primaryStyle = {
    background: 'linear-gradient(135deg, #C9A96E 0%, #A878CD 100%)',
    boxShadow: '0 4px 20px rgba(168,120,205,0.30)',
  };
  const baseClass = variant === 'primary'
    ? 'inline-flex items-center gap-2 text-[#FAF7F4] text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-[1.02]'
    : ghostClass;

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        style={variant === 'primary' ? primaryStyle : undefined}
      >
        {link.label}
        <ArrowRight className="w-4 h-4" />
      </a>
    );
  }

  return (
    <Link href={link.href} className={baseClass} style={variant === 'primary' ? primaryStyle : undefined}>
      {link.label}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
