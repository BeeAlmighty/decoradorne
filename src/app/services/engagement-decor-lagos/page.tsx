import type { Metadata } from 'next';
import { SERVICES, SITE_URL } from '@/lib/constants';
import { ServicePage } from '@/components/services/ServicePage';
import { generatePageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';

const service = SERVICES.find((s) => s.slug === 'engagement-decor-lagos')!;

export const metadata: Metadata = generatePageMetadata({
  title: 'Engagement Decoration in Lagos | Decor Adorne',
  description:
    'Luxury engagement decoration in Lagos — from intimate proposals to grand parties. Decor Adorne serves Victoria Island, Lekki, Ikoyi and beyond. Free quote.',
  path: '/services/engagement-decor-lagos',
});

export default function EngagementDecorPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', item: SITE_URL },
          { name: 'Services', item: `${SITE_URL}/services` },
          { name: 'Engagement Decoration in Lagos', item: `${SITE_URL}/services/engagement-decor-lagos` },
        ])}
      />
      <ServicePage service={service} />
    </>
  );
}
