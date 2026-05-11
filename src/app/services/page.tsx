import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Heart, Star, Sparkles, Moon, Crown, Gift, Sun, Package } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL, BUSINESS_NAME } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Event Decoration Services in Lagos | Decor Adorne',
  description:
    "Explore Decor Adorne's full range of Lagos event decoration services — Engagement, Kamu, Henna Party, Arabian Night, Nikkah, Naming Ceremony, Picnic, and Rentals.",
  path: '/services',
});

const ICON_MAP: Record<string, React.ReactNode> = {
  Heart: <Heart size={28} strokeWidth={1.5} />,
  Star: <Star size={28} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={28} strokeWidth={1.5} />,
  Moon: <Moon size={28} strokeWidth={1.5} />,
  Crown: <Crown size={28} strokeWidth={1.5} />,
  Gift: <Gift size={28} strokeWidth={1.5} />,
  Sun: <Sun size={28} strokeWidth={1.5} />,
  Package: <Package size={28} strokeWidth={1.5} />,
};

const servicesListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${BUSINESS_NAME} Services`,
  description: 'Lagos luxury event decoration services',
  url: `${SITE_URL}/services`,
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `${SITE_URL}/services/${s.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesListJsonLd} />
      {/* Hero */}
      <section className="pt-36 sm:pt-48 pb-20 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-4">
            What we offer
          </p>
          <h1
            className="font-display font-light text-[#1A1410] max-w-2xl mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Every celebration,{' '}
            <em className="italic text-[#C9A96E]">expertly styled.</em>
          </h1>
          <p className="text-[#1A1410]/60 max-w-xl leading-relaxed">
            From your Kamu to your Nikkah, from intimate picnic setups to full Arabian Night
            transformations — Decor Adorne brings beauty to every Lagos celebration.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-32 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block"
              >
                <article className="h-full bg-[#F2EDE8] border border-[#E8E0D8] rounded-2xl p-8 flex flex-col gap-5 hover:shadow-[0_8px_40px_0_rgba(26,20,16,0.12)] hover:-translate-y-1.5 transition-all duration-300">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${service.colorAccent}15`,
                      color: service.colorAccent,
                    }}
                  >
                    {ICON_MAP[service.icon]}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-sans font-semibold text-[#1A1410] text-base mb-2 group-hover:text-[#C9A96E] transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-sm text-[#1A1410]/55 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#C9A96E]">
                    View package
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
