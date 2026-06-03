import type { Metadata } from 'next';
import { generatePageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageHero } from '@/components/ui/page-hero';
import { LeadSection } from '@/components/sections/LeadSection';
import { GalleryClient } from './GalleryClient';
import { SITE_URL, BUSINESS_NAME } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Gallery: Arabian-Inspired Event Decor Portfolio | Decor Adorne',
  description:
    "Browse Decor Adorne's portfolio: Henna Nights, Arabian Night transformations, Kamu, Nikkah, Durbar, Engagement, Naming, Picnic, and Rental setups. Lagos studio · Across Nigeria.",
  path: '/gallery',
});

const galleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: `${BUSINESS_NAME} Portfolio`,
  description: 'Arabian-inspired luxury event decoration portfolio: real Henna nights, Kamu, Nikkah, Durbar, and Arabian Night events styled across Nigeria, from the Lagos studio.',
  url: `${SITE_URL}/gallery`,
  image: [
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/engagement-1.JPG`,
      name: 'Engagement decoration Lagos',
      description: 'Luxury engagement decoration Lagos, floral arch and candlelit table setup by Decor Adorne',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/henna-1.JPG`,
      name: 'Henna party decoration Lagos',
      description: 'Henna party decoration Lagos, jewel-toned cushions and Moroccan lanterns by Decor Adorne',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/wedding-1.JPG`,
      name: 'Kamu ceremony decoration Lagos',
      description: 'Kamu ceremony decoration Lagos, vibrant throne area and cultural fabric draping by Decor Adorne',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/wedding-2.JPG`,
      name: 'Nikkah decoration Lagos',
      description: 'Nikkah decoration Lagos, elegant floral arch and soft ambient lighting by Decor Adorne',
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/gallery/naming-1.JPG`,
      name: 'Naming ceremony decoration Lagos',
      description: 'Naming ceremony decoration Lagos, warm celebratory setup for a new arrival by Decor Adorne',
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={galleryJsonLd} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', item: SITE_URL },
          { name: 'Gallery', item: `${SITE_URL}/gallery` },
        ])}
      />

      <PageHero
        eyebrow="Portfolio"
        headlineBefore="Beauty in every"
        headlineItalic="lantern-lit detail."
        description="A glimpse into the celebrations we've had the honour of styling, from Lagos ballrooms to Abuja gardens and Northern compounds. Real events, real moments, real beauty."
        photoUrl="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1920&q=80"
      />

      <GalleryClient />

      <LeadSection />
    </>
  );
}
