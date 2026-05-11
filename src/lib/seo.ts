import type { Metadata } from 'next';
import { BUSINESS_NAME, SITE_URL } from './constants';

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(BUSINESS_NAME)
    ? title
    : `${title} | ${BUSINESS_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${BUSINESS_NAME} — Lagos luxury event decoration`,
        },
      ],
      locale: 'en_NG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    description:
      'Lagos luxury event decoration and rentals. Specialists in Engagement, Kamu, Henna Party, Arabian Night, Nikkah, Naming Ceremony, Picnic, and Rental decor.',
    url: SITE_URL,
    telephone: '+2348103349288',
    email: 'hello@decoradorne.com',
    foundingDate: '2016',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.5244,
      longitude: 3.3792,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: ['https://instagram.com/decoradorne'],
    priceRange: '₦₦₦',
    image: `${SITE_URL}/og-image.jpg`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5',
    },
  };
}

export function buildServiceJsonLd(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Lagos',
    },
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
