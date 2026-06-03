import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES, SITE_URL } from '@/lib/constants';
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
    </>
  );
}
