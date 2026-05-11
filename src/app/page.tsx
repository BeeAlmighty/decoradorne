import type { Metadata } from 'next';
import { GlassmorphismTrustHero } from '@/components/ui/glassmorphism-trust-hero';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { LeadSection } from '@/components/sections/LeadSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/seo';
import { SITE_URL, BUSINESS_NAME } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: `${BUSINESS_NAME} — Lagos Luxury Event Decoration`,
  description:
    'Transform your Lagos event into an unforgettable celebration. Decor Adorne specialises in Engagement, Kamu, Henna Party, Arabian Night, Nikkah, Naming, Picnic, and Rentals.',
  path: '/',
});

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS_NAME,
  url: SITE_URL,
  description:
    'Lagos luxury event decoration and rentals — Engagement, Kamu, Henna Party, Arabian Night, Nikkah, Naming, Picnic, and Rentals.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/services?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageJsonLd} />
      <GlassmorphismTrustHero />
      <Services />
      <Gallery />
      <Testimonials />
      <LeadSection />
    </>
  );
}
