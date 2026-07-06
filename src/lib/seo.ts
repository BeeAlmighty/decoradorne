import type { Metadata } from 'next';
import { BUSINESS_NAME, SITE_URL } from './constants';

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/opengraph-image',
  noIndex = false,
  ogType = 'website',
  publishedTime,
  modifiedTime,
}: GenerateMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(BUSINESS_NAME)
    ? title
    : `${title} | ${BUSINESS_NAME}`;

  const ogImages = [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: `${BUSINESS_NAME}: Arabian-inspired luxury event decor`,
    },
  ];

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    openGraph:
      ogType === 'article'
        ? {
            title: fullTitle,
            description,
            url,
            siteName: BUSINESS_NAME,
            images: ogImages,
            locale: 'en_NG',
            type: 'article',
            publishedTime,
            modifiedTime,
          }
        : {
            title: fullTitle,
            description,
            url,
            siteName: BUSINESS_NAME,
            images: ogImages,
            locale: 'en_NG',
            type: 'website',
          },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      site: '@decor_adorne',
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// Shared area served — used in both LocalBusiness and Service schemas.
// Lagos is the studio's home; nationwide coverage reflects actual service area.
const AREA_SERVED = [
  { '@type': 'Country', name: 'Nigeria' },
  { '@type': 'City', name: 'Lagos' },
  { '@type': 'City', name: 'Abuja' },
  { '@type': 'City', name: 'Kano' },
  { '@type': 'City', name: 'Kaduna' },
  { '@type': 'City', name: 'Sokoto' },
  { '@type': 'City', name: 'Ibadan' },
  { '@type': 'City', name: 'Port Harcourt' },
  { '@type': 'AdministrativeArea', name: 'Victoria Island' },
  { '@type': 'AdministrativeArea', name: 'Lekki' },
  { '@type': 'AdministrativeArea', name: 'Ikoyi' },
  { '@type': 'AdministrativeArea', name: 'Ikeja' },
];

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EventPlanner'],
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    description:
      'Arabian-inspired luxury event decor and rentals. Specialists in Henna Nights, Arabian Night transformations, Kamu, Nikkah, Durbar, Engagement, Naming, Picnic, and Birthday styling. Lagos studio, serving Nigeria nationwide.',
    url: SITE_URL,
    telephone: '+2348103349288',
    email: 'decoradorne@gmail.com',
    foundingDate: '2020',
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
    areaServed: AREA_SERVED,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+2348103349288',
      contactType: 'customer service',
      availableLanguage: ['English'],
      areaServed: 'NG',
    },
    sameAs: [
      'https://instagram.com/decor_adorne',
      'https://wa.me/2348103349288',
    ],
    priceRange: '₦₦₦',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Arabian-Inspired Luxury Event Decoration Services',
      itemListElement: [
        { '@type': 'Offer', url: `${SITE_URL}/services/engagement-decor-lagos`, itemOffered: { '@type': 'Service', name: 'Engagement Decoration Lagos' } },
        { '@type': 'Offer', url: `${SITE_URL}/services/kamu-decoration-lagos`, itemOffered: { '@type': 'Service', name: 'Kamu Ceremony Decoration Lagos' } },
        { '@type': 'Offer', url: `${SITE_URL}/services/henna-party-decor-lagos`, itemOffered: { '@type': 'Service', name: 'Henna Party Decoration Lagos' } },
        { '@type': 'Offer', url: `${SITE_URL}/services/arabian-night-decoration-lagos`, itemOffered: { '@type': 'Service', name: 'Arabian Night Decoration Lagos' } },
        { '@type': 'Offer', url: `${SITE_URL}/services/nikkah-decoration-lagos`, itemOffered: { '@type': 'Service', name: 'Nikkah Decoration Lagos' } },
        { '@type': 'Offer', url: `${SITE_URL}/services/naming-ceremony-decor-lagos`, itemOffered: { '@type': 'Service', name: 'Naming Ceremony Decoration Lagos' } },
        { '@type': 'Offer', url: `${SITE_URL}/services/picnic-setup-lagos`, itemOffered: { '@type': 'Service', name: 'Luxury Picnic Setup Lagos' } },
        { '@type': 'Offer', url: `${SITE_URL}/services/birthday-decoration-lagos`, itemOffered: { '@type': 'Service', name: 'Birthday Decoration Lagos' } },
        { '@type': 'Offer', url: `${SITE_URL}/services/durbar-decoration-lagos`, itemOffered: { '@type': 'Service', name: 'Durbar Decoration Lagos' } },
        {
          '@type': 'Offer',
          url: `${SITE_URL}/services/event-rentals-lagos`,
          name: 'Event Rentals Lagos',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: 50000, priceCurrency: 'NGN' },
          itemOffered: { '@type': 'Service', name: 'Event Furniture & Tableware Rentals Lagos' },
        },
      ],
    },
    image: `${SITE_URL}/opengraph-image`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: 200,
      bestRating: 5,
    },
  };
}

export function buildServiceJsonLd(service: {
  name: string;
  description: string;
  slug: string;
  heroImage?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    areaServed: AREA_SERVED,
    url: `${SITE_URL}/services/${service.slug}`,
    ...(service.heroImage && { image: `${SITE_URL}${service.heroImage}` }),
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

export function buildBreadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function buildReviewsJsonLd(
  reviews: ReadonlyArray<{ name: string; event: string; quote: string; rating: number }>,
) {
  return reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
    },
    name: r.event,
    author: { '@type': 'Person', name: r.name },
    reviewBody: r.quote,
    itemReviewed: { '@id': `${SITE_URL}/#business` },
  }));
}
