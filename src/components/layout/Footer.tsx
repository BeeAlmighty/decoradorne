'use client';

import { ArrowRight } from 'lucide-react';
import {
  SERVICES,
  BUSINESS_PHONE,
  BUSINESS_IG,
  BUSINESS_NAME,
  BUSINESS_EMAIL,
  NAV_LINKS,
  WA_PHONE,
} from '@/lib/constants';
import { buildDefaultWhatsAppUrl } from '@/lib/whatsapp';
import { FooterBrandColumn, FooterColumn, SOCIAL_ICONS } from '@/components/ui/footer-column';

const waUrl = buildDefaultWhatsAppUrl();

const socialLinks = [
  {
    label: 'Instagram',
    href: BUSINESS_IG,
    icon: SOCIAL_ICONS.instagram,
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${WA_PHONE}`,
    icon: SOCIAL_ICONS.whatsapp,
  },
];

const serviceLinks = SERVICES.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
}));

const navigateLinks = [
  ...NAV_LINKS.map((l) => ({ label: l.label, href: l.href })),
];

const contactLinks = [
  { label: BUSINESS_EMAIL, href: `mailto:${BUSINESS_EMAIL}`, external: true },
  { label: BUSINESS_PHONE, href: `tel:${BUSINESS_PHONE.replace(/\s/g, '')}`, external: true },
  { label: 'Chat on WhatsApp', href: waUrl, external: true },
  { label: 'Request a quote', href: '/#lead-form' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1410] text-[#FAF7F4]">
      {/* CTA banner */}
      <div
        className="border-b border-[#FAF7F4]/10 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1410 0%, #2D1B4E 60%, #1A1410 100%)' }}
      >
        {/* Mauve glow accent */}
        <div aria-hidden="true" className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-48 rounded-full bg-[#A878CD]/10 blur-[80px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3">
              Ready to begin?
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#FAF7F4] leading-tight">
              Let&rsquo;s make your event
              <br />
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #DEC48E 0%, #C49EE0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                unforgettable.
              </span>
            </h2>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-full text-[#FAF7F4] transition-all duration-300 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #A878CD 100%)', boxShadow: '0 4px 24px rgba(168,120,205,0.35)' }}
          >
            Chat on WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main footer grid — relative for the ambient column glows */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-14">
        {/* Soft ambient glows behind the grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 left-[8%] w-[280px] h-[200px] rounded-full bg-[#A878CD]/8 blur-[90px]" />
          <div className="absolute bottom-0 right-[12%] w-[260px] h-[180px] rounded-full bg-[#E2567A]/6 blur-[90px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[200px] h-[140px] rounded-full bg-[#4ECDC4]/5 blur-[80px]" />
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <FooterBrandColumn
            name={BUSINESS_NAME}
            description="Arabian-inspired luxury event decor — crafting lantern-lit celebrations across Nigeria since 2020."
            address="Lagos studio · Nationwide service"
            phone={BUSINESS_PHONE}
            socialLinks={socialLinks}
          />

          <FooterColumn heading="Services" links={serviceLinks.slice(0, 5)} accent="#D4AF37" />

          <FooterColumn heading="More Services" links={serviceLinks.slice(5)} accent="#A878CD" />

          <FooterColumn heading="Navigate" links={navigateLinks} accent="#E2567A" />
        </div>
      </div>

      {/* Colorful gradient hairline */}
      <div
        aria-hidden="true"
        className="h-px max-w-7xl mx-auto"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #D4AF37 25%, #A878CD 50%, #E2567A 75%, transparent 100%)',
          opacity: 0.5,
        }}
      />

      {/* Contact strip */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {contactLinks.map((link, i) => {
            const colors = ['#D4AF37', '#A878CD', '#25D366', '#E2567A'];
            const c = colors[i % colors.length];
            const baseClass = 'text-xs text-[#FAF7F4]/45 transition-colors';
            const onEnter = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.color = c; };
            const onLeave = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.color = ''; };
            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={baseClass}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                {link.label}
              </a>
            ) : (
              <a key={link.href} href={link.href} className={baseClass} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FAF7F4]/8 max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF7F4]/30">
        <p>
          &copy; {year} Decor{' '}
          <span
            className="italic font-medium"
            style={{
              background: 'linear-gradient(135deg, #DEC48E 0%, #C49EE0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Adorne
          </span>
          . All rights reserved.
        </p>
        <p>Arabian-Inspired Luxury Decor &middot; Lagos &middot; Nationwide</p>
      </div>
    </footer>
  );
}
