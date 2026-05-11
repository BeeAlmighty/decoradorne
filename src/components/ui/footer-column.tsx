import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumnProps {
  heading: string;
  links: FooterLink[];
}

export function FooterColumn({ heading, links }: FooterColumnProps) {
  return (
    <div>
      <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#FAF7F4]/30 mb-5">
        {heading}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) =>
          link.external ? (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#FAF7F4]/55 hover:text-[#C9A96E] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ) : (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[#FAF7F4]/55 hover:text-[#C9A96E] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

interface FooterBrandColumnProps {
  name: string;
  description: string;
  address: string;
  phone: string;
  socialLinks: SocialLink[];
}

export function FooterBrandColumn({
  name,
  description,
  address,
  phone,
  socialLinks,
}: FooterBrandColumnProps) {
  return (
    <div className="lg:col-span-1">
      <Link href="/" className="group inline-flex items-center gap-3 mb-5" aria-label={name}>
        {/* Logo — mix-blend-mode:screen dissolves the black JPEG bg into the dark footer */}
        <div className="relative h-10 w-10 rounded-[10px] overflow-hidden shrink-0 ring-1 ring-[#FAF7F4]/8 group-hover:ring-[#C9A96E]/30 transition-all duration-300">
          <Image
            src="/images/logo/logo.jpeg"
            alt=""
            fill
            className="object-cover object-[50%_55%] [mix-blend-mode:screen]"
            sizes="40px"
          />
        </div>
        <span className="font-display text-2xl font-light text-[#FAF7F4] group-hover:text-[#C9A96E] transition-colors leading-none">
          {name.split(' ')[0]}{' '}
          <span className="italic text-[#C9A96E] font-medium">
            {name.split(' ').slice(1).join(' ')}
          </span>
        </span>
      </Link>

      <p className="text-sm text-[#FAF7F4]/45 leading-relaxed mb-6 max-w-[220px]">
        {description}
      </p>

      <div className="flex flex-col gap-2.5 text-sm text-[#FAF7F4]/55 mb-7">
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="flex items-center gap-2.5 hover:text-[#C9A96E] transition-colors"
        >
          <PhoneIcon />
          {phone}
        </a>
        <span className="flex items-center gap-2.5">
          <MapPinIcon />
          {address}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#FAF7F4]/12 bg-[#FAF7F4]/5 text-[#FAF7F4]/50 hover:border-[#C9A96E]/40 hover:text-[#C9A96E] hover:bg-[#C9A96E]/8 transition-all duration-200"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 2.84h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export const SOCIAL_ICONS = {
  instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  whatsapp: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  ),
  facebook: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
} as const;
