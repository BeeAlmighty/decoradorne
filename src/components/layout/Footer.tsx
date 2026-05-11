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
  {
    label: 'Facebook',
    href: 'https://facebook.com/decoradorne',
    icon: SOCIAL_ICONS.facebook,
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
      <div className="border-b border-[#FAF7F4]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3">
              Ready to begin?
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-[#FAF7F4] leading-tight">
              Let&rsquo;s make your event
              <br />
              <span className="italic text-[#C9A96E]">unforgettable.</span>
            </h2>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 border border-[#C9A96E] text-[#C9A96E] font-medium px-7 py-3.5 rounded-full hover:bg-[#C9A96E] hover:text-[#1A1410] transition-all duration-300"
          >
            Chat on WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <FooterBrandColumn
          name={BUSINESS_NAME}
          description="Lagos luxury event decoration studio — crafting breathtaking settings since 2016."
          address="Lagos, Nigeria"
          phone={BUSINESS_PHONE}
          socialLinks={socialLinks}
        />

        <FooterColumn heading="Services" links={serviceLinks.slice(0, 5)} />

        <FooterColumn heading="More Services" links={serviceLinks.slice(5)} />

        <FooterColumn heading="Navigate" links={navigateLinks} />
      </div>

      {/* Divider + contact strip */}
      <div className="border-t border-[#FAF7F4]/8 max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {contactLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-xs text-[#FAF7F4]/40 hover:text-[#C9A96E] transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[#FAF7F4]/40 hover:text-[#C9A96E] transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FAF7F4]/8 max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF7F4]/25">
        <p>&copy; {year} Decor Adorne. All rights reserved.</p>
        <p>Luxury Event Decoration &middot; Lagos, Nigeria</p>
      </div>
    </footer>
  );
}
