import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import { ServicePage } from '@/components/services/ServicePage';
import { generatePageMetadata } from '@/lib/seo';

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
    description: `${service.description} Serving Lagos with ${service.name.toLowerCase()} packages tailored to your vision. Get a free quote today.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  return <ServicePage service={service} />;
}
