import type { Metadata } from 'next';
import { GlassmorphismTrustHero } from '@/components/ui/glassmorphism-trust-hero';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { LeadSection } from '@/components/sections/LeadSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata, buildReviewsJsonLd } from '@/lib/seo';
import { SITE_URL, BUSINESS_NAME, TESTIMONIALS } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: `${BUSINESS_NAME}: Arabian-Inspired Luxury Event Decor`,
  description:
    'Arabian-inspired luxury event decor: Henna Nights, Arabian Night, Kamu, Nikkah, Durbar, Engagement, Naming, Picnic & Rentals. Lagos studio. Across Nigeria.',
  path: '/',
});

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS_NAME,
  url: SITE_URL,
  description:
    'Arabian-inspired luxury event decoration and rentals: Henna Nights, Arabian Night, Kamu, Nikkah, Durbar, Engagement, Naming, Picnic, Birthday, and Rentals. Lagos studio · serving Nigeria nationwide.',
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageJsonLd} />
      <JsonLd data={buildReviewsJsonLd(TESTIMONIALS)} />
      <GlassmorphismTrustHero />
      <Services />
      <Gallery />
      <Testimonials />
      <LeadSection />
    </>
  );
}
