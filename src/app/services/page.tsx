import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Heart, Star, Sparkles, Moon, Crown, Gift, Sun, Package, Cake, Gem, ChevronDown } from 'lucide-react';
import { SERVICES, SITE_URL, BUSINESS_NAME } from '@/lib/constants';
import { generatePageMetadata, buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageHero } from '@/components/ui/page-hero';

export const metadata: Metadata = generatePageMetadata({
  title: 'Arabian-Inspired Event Decor Services | Decor Adorne',
  description:
    "Decor Adorne's full service range: Henna Nights, Arabian Night transformations, Kamu, Nikkah, Durbar, Engagement, Naming, Birthday, Picnic, and Rentals. Lagos studio · Across Nigeria.",
  path: '/services',
});

const ICON_MAP: Record<string, React.ReactNode> = {
  Heart:    <Heart    size={28} strokeWidth={1.5} />,
  Star:     <Star     size={28} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={28} strokeWidth={1.5} />,
  Moon:     <Moon     size={28} strokeWidth={1.5} />,
  Crown:    <Crown    size={28} strokeWidth={1.5} />,
  Gift:     <Gift     size={28} strokeWidth={1.5} />,
  Sun:      <Sun      size={28} strokeWidth={1.5} />,
  Package:  <Package  size={28} strokeWidth={1.5} />,
  Cake:     <Cake     size={28} strokeWidth={1.5} />,
  Gem:      <Gem      size={28} strokeWidth={1.5} />,
};

const GENERAL_FAQS = [
  {
    question: 'How much does event decoration cost?',
    answer:
      'Pricing varies by service type, venue size, and the complexity of styling. Intimate setups like luxury picnics and Henna nights start from ₦150,000. Full engagement, Kamu, or Durbar packages typically range from ₦350,000 upward. Full Arabian Night transformations scale to suit the venue. Contact us for a free bespoke quote.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking at least 4–6 weeks before your event. For peak season dates, November through February and June through August, 8–12 weeks is ideal to secure your preferred style, florals, and team. We accept urgent bookings (7–14 days) subject to availability.',
  },
  {
    question: 'Do you serve clients outside Lagos?',
    answer:
      'Yes. Lagos is our home, but our reach is national. We regularly style events in Abuja, Kano, Kaduna, Sokoto, Ibadan, and Port Harcourt, and travel anywhere in Nigeria for the right brief. Travel costs are quoted transparently with the package.',
  },
  {
    question: 'Can I combine multiple services, for example, a Nikkah and Walima?',
    answer:
      'Absolutely. We offer combination packages for multi-day or multi-event celebrations. Many of our clients book a Kamu, Nikkah, and Walima as a single bundle. Bundled bookings receive a preferential rate, contact us to discuss.',
  },
  {
    question: 'What is included in a standard decoration package?',
    answer:
      'Every package includes consultation, setup on the event day, and full breakdown after. Core elements depend on the service, brass lanterns, florals, backdrops, lighting, table settings, and fabric draping are typical. We also offer fully bespoke packages where every element is designed from scratch to your vision.',
  },
];

const servicesListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${BUSINESS_NAME} Services`,
  description: 'Arabian-inspired luxury event decoration services, Lagos studio, serving Nigeria nationwide',
  url: `${SITE_URL}/services`,
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `${SITE_URL}/services/${s.slug}`,
    image: s.heroImage ? `${SITE_URL}${s.heroImage}` : undefined,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesListJsonLd} />
      <JsonLd data={buildFaqJsonLd(GENERAL_FAQS)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', item: SITE_URL },
          { name: 'Services', item: `${SITE_URL}/services` },
        ])}
      />

      <PageHero
        eyebrow="The full repertoire"
        headlineBefore="From Henna nights to"
        headlineItalic="Arabian dreams."
        description="From your Kamu to your Nikkah, from intimate picnic setups to full Arabian Night transformations, Decor Adorne brings lantern-lit, jewel-toned beauty to every Nigerian celebration. Lagos studio · Nationwide service."
        photoUrl="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Services grid */}
      <section className="py-20 sm:py-28 bg-[#FAF7F4]">
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

      {/* General FAQ */}
      <section className="py-20 sm:py-28 bg-[#F2EDE8]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#C9A96E] mb-3">
            Common questions
          </p>
          <h2
            className="font-display font-light text-[#1A1410] mb-10"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            The questions{' '}
            <em className="italic text-[#C9A96E]">we hear most.</em>
          </h2>
          <div className="border-t border-[#E8E0D8]">
            {GENERAL_FAQS.map((faq) => (
              <details key={faq.question} className="group border-b border-[#E8E0D8]">
                <summary className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer list-none">
                  <span className="font-medium text-[#1A1410] text-sm sm:text-base">{faq.question}</span>
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
    </>
  );
}
