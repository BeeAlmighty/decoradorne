import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import { ServicePage } from '@/components/services/ServicePage';
import { generatePageMetadata } from '@/lib/seo';

const service = SERVICES.find((s) => s.slug === 'engagement-decor-lagos')!;

export const metadata: Metadata = generatePageMetadata({
  title: 'Engagement Decoration in Lagos | Decor Adorne',
  description:
    'Luxury engagement decoration in Lagos. From intimate proposals to grand engagement parties, Decor Adorne creates unforgettable setups across Victoria Island, Lekki, and beyond.',
  path: '/services/engagement-decor-lagos',
});

export default function EngagementDecorPage() {
  return <ServicePage service={service} />;
}
