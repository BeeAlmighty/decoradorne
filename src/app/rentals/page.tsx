import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown, Truck, CalendarCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { SITE_URL, BUSINESS_NAME, SERVICES } from '@/lib/constants';
import {
  RENTAL_CATEGORIES,
  RENTAL_ITEMS,
  RENTAL_MINIMUM_ORDER,
  RENTAL_PRICE_MIN,
  RENTAL_PRICE_MAX,
  formatNaira,
  rentalFullName,
} from '@/lib/rentals';
import { generatePageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageHero } from '@/components/ui/page-hero';
import { RentalCatalogue } from '@/components/rentals/RentalCatalogue';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const RENTALS_SERVICE = SERVICES.find((s) => s.slug === 'event-rentals-lagos');

export const metadata: Metadata = generatePageMetadata({
  title: 'Event Rental Catalogue & Prices in Lagos | Decor Adorne',
  description:
    `${RENTAL_ITEMS.length} rental pieces with the price on every item: carved Arabian backdrops, Persian rugs, brass lanterns, Moroccan floor puffs, couches, raffia. Studio pick-up or delivery quoted to your location. Lagos · Nationwide.`,
  path: '/rentals',
  image: '/images/rentals/carved-backdrop-16x8.jpg',
});

const HOW_IT_WORKS = [
  {
    icon: CalendarCheck,
    title: 'Pick your pieces',
    body: 'Browse the catalogue, tick everything you want, and send the list straight to WhatsApp. We confirm availability for your date.',
  },
  {
    icon: ShieldCheck,
    title: 'Reserve with a deposit',
    body: `Minimum rental order is ${formatNaira(RENTAL_MINIMUM_ORDER)}. A refundable damage deposit of 20% of the rental value holds your booking.`,
  },
  {
    icon: Truck,
    title: 'Collect it, or we deliver',
    body: 'Pick up from our Lagos studio at no extra cost, or have it delivered. Delivery is priced by your location, so message us the venue address and we will quote it.',
  },
];

const CATALOGUE_FAQS = [
  {
    question: 'How much does it cost to rent event decor items in Lagos?',
    answer:
      `Individual pieces in the Decor Adorné catalogue run from ${formatNaira(RENTAL_PRICE_MIN)} for a small raffia table mat up to ${formatNaira(RENTAL_PRICE_MAX)} for a 16ft × 8ft carved Arabian backdrop. Every price on this page is per item. The minimum rental order is ${formatNaira(RENTAL_MINIMUM_ORDER)}.`,
  },
  {
    question: 'Are the rental prices per day or per event?',
    answer:
      'Prices are quoted per item for a standard event hire. They cover the piece itself: pick-up from our Lagos studio costs nothing extra, and delivery is quoted separately. Multi-day events and extended hires are quoted on request, so send your dates with your item list.',
  },
  {
    question: 'Can I pick up rental items myself?',
    answer:
      'Yes. Studio pick-up is one of the two options on this page. Collect the pieces from our Lagos studio at an agreed time, then return them after your event. There is nothing extra to pay on top of the item prices.',
  },
  {
    question: 'How much is delivery for rental items in Lagos?',
    answer:
      'Delivery is priced by location, so it is not listed against each item. Message us on WhatsApp with your venue address alongside your item list and we will quote the delivery cost. Selecting "Delivery to your venue" on this page puts that request straight into your message.',
  },
  {
    question: 'Can I rent items without booking a full decoration package?',
    answer:
      'Yes. The rental catalogue is available on its own, whether you are styling the event yourself or working with another planner. Many clients rent our backdrops, rugs, and lanterns and handle the rest in-house.',
  },
  ...(RENTALS_SERVICE?.faqs ?? []),
];

const catalogueJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${BUSINESS_NAME} Event Rental Catalogue`,
  description:
    'Event decor pieces available for rental in Lagos and nationwide: Arabian backdrops, Persian rugs, brass lanterns, Moroccan floor puffs, couches, raffia, and cultural props.',
  url: `${SITE_URL}/rentals`,
  numberOfItems: RENTAL_ITEMS.length,
  itemListElement: RENTAL_ITEMS.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: rentalFullName(item),
      description: item.description,
      image: `${SITE_URL}${item.images[0]}`,
      url: `${SITE_URL}/rentals#${item.slug}`,
      category: RENTAL_CATEGORIES.find((c) => c.slug === item.category)?.label,
      brand: { '@type': 'Brand', name: BUSINESS_NAME },
      offers: {
        '@type': 'Offer',
        price: item.price,
        priceCurrency: 'NGN',
        availability: 'https://schema.org/InStock',
        businessFunction: 'https://purl.org/goodrelations/v1#LeaseOut',
        seller: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'Country', name: 'Nigeria' },
      },
    },
  })),
};

export default function RentalsPage() {
  return (
    <>
      <JsonLd data={catalogueJsonLd} />
      <JsonLd data={buildFaqJsonLd(CATALOGUE_FAQS)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', item: SITE_URL },
          { name: 'Rental Catalogue', item: `${SITE_URL}/rentals` },
        ])}
      />

      <PageHero
        eyebrow={`${RENTAL_ITEMS.length} pieces · Priced`}
        headlineBefore="Rent the pieces."
        headlineItalic="Own nothing."
        description={`Our full rental catalogue with the price on every item: carved Arabian backdrops, Persian rugs, brass lanterns, Moroccan floor puffs, velvet couches, and hand-woven raffia. Minimum order ${formatNaira(RENTAL_MINIMUM_ORDER)}. Pick up at our Lagos studio, or message us for a delivery quote to your venue.`}
        cta={{
          label: 'Ask about availability',
          href: buildWhatsAppUrl(
            "Hi Decor Adorné! 👋 I'm looking through the rental catalogue and would like to check availability for my event date, plus the delivery cost to my location.",
          ),
          external: true,
        }}
        ctaSecondary={{ label: 'See the full service', href: '/services/event-rentals-lagos' }}
        photoUrl="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
      />

      {/* ── How rentals work ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F2EDE8] border-b border-[#E8E0D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#C9A96E]/12 text-[#C9A96E] flex items-center justify-center shrink-0">
                    <step.icon size={17} strokeWidth={1.6} />
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#1A1410]/30">
                    Step {i + 1}
                  </span>
                </div>
                <h2 className="font-sans font-semibold text-[#1A1410] text-sm">{step.title}</h2>
                <p className="text-sm text-[#1A1410]/55 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The catalogue ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#C9A96E] mb-3">
              The catalogue
            </p>
            <h2
              className="font-display font-light text-[#1A1410]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Every piece, <em className="italic text-[#C9A96E]">every price.</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#1A1410]/55 leading-relaxed">
              Prices are per item and cover the piece itself. Choose studio pick-up or delivery,
              tick the pieces you want, and send the whole list to us on WhatsApp in one message.
              Delivery is quoted to your location.
            </p>
          </div>

          <RentalCatalogue />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#F2EDE8]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#C9A96E] mb-3">
            Rental questions
          </p>
          <h2
            className="font-display font-light text-[#1A1410] mb-10"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Before you <em className="italic text-[#C9A96E]">book.</em>
          </h2>
          <div className="border-t border-[#E8E0D8]">
            {CATALOGUE_FAQS.map((faq) => (
              <details key={faq.question} className="group border-b border-[#E8E0D8]">
                <summary className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer list-none">
                  <span className="font-medium text-[#1A1410] text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-[#C9A96E] transition-transform duration-300 mt-0.5 group-open:rotate-180"
                  />
                </summary>
                <p className="pb-5 text-sm text-[#1A1410]/60 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#1A1410]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="font-display font-light text-[#FAF7F4]"
            style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.6rem)' }}
          >
            Want it styled, <em className="italic text-[#C9A96E]">not just delivered?</em>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#FAF7F4]/50 leading-relaxed max-w-xl mx-auto">
            Every piece here also appears in our full decoration packages, installed by our team
            with florals, drapery, and lighting composed around it.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 text-[#FAF7F4] text-sm font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #A878CD 100%)' }}
          >
            Browse decoration packages
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
