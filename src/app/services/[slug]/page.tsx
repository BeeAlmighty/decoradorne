import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SERVICES, SITE_URL } from '@/lib/constants';
import {
  RENTAL_ITEMS,
  RENTAL_MINIMUM_ORDER,
  formatNaira,
  rentalImageAlt,
  type RentalItem,
} from '@/lib/rentals';
import { ServicePage } from '@/components/services/ServicePage';
import { generatePageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import { getServiceImages } from '@/lib/service-images';
import { JsonLd } from '@/components/seo/JsonLd';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.name} in Lagos | Decor Adorne`,
    description: service.metaDescription ?? `${service.description} Based in Lagos. Free quote.`,
    path: `/services/${service.slug}`,
    image: getServiceImages(slug).hero ?? service.heroImage,
  });
}

export default async function ServiceSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  // A hero.* in the service folder overrides the default heroImage; the rest
  // becomes the collection grid. Both auto-update when photos are pasted.
  const images = getServiceImages(service.slug);
  const resolvedService = images.hero ? { ...service, heroImage: images.hero } : service;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', item: SITE_URL },
          { name: 'Services', item: `${SITE_URL}/services` },
          { name: `${service.name} in Lagos`, item: `${SITE_URL}/services/${service.slug}` },
        ])}
      />
      <ServicePage service={resolvedService} galleryImages={images.gallery} />
      {service.slug === 'event-rentals-lagos' && <CataloguePreview />}
    </>
  );
}

/** Priced catalogue teaser — only ever rendered on the Event Rentals page. */
function CataloguePreview() {
  const preview = [
    'carved-backdrop-16x8',
    'persian-rug-wine',
    'arabian-lantern',
    'floor-puff-gold',
    'gold-box-set',
    'raffia-vase-tall',
  ]
    .map((slug) => RENTAL_ITEMS.find((i) => i.slug === slug))
    .filter((item): item is RentalItem => item !== undefined);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F4] border-t border-[#E8E0D8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#C9A96E] mb-3">
            Priced catalogue
          </p>
          <h2
            className="font-display font-light text-[#1A1410]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            {RENTAL_ITEMS.length} pieces, <em className="italic text-[#C9A96E]">every price listed.</em>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#1A1410]/55 leading-relaxed">
            Carved Arabian backdrops, Persian rugs, brass lanterns, Moroccan floor puffs, velvet
            couches, and hand-woven raffia. Every item priced, minimum order{' '}
            {formatNaira(RENTAL_MINIMUM_ORDER)}. Browse the full catalogue and send us your list.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {preview.map((item) => (
            <Link
              key={item.slug}
              href={`/rentals#${item.slug}`}
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#FAF7F4] border border-[#E8E0D8] hover:border-[#C9A96E] transition-colors"
            >
              <Image
                src={item.images[0]}
                alt={rentalImageAlt(item)}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 33vw, 16vw"
              />
              <span className="absolute bottom-0 inset-x-0 bg-[#1A1410]/75 text-[#FAF7F4] text-[10px] font-medium px-2 py-1 text-center backdrop-blur-sm">
                {formatNaira(item.price)}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/rentals"
          className="mt-10 inline-flex items-center gap-2 text-[#FAF7F4] text-sm font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.02]"
          style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #A878CD 100%)' }}
        >
          View the full rental catalogue
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
