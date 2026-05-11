import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildLocalBusinessJsonLd } from '@/lib/seo';
import { BUSINESS_NAME, SITE_URL } from '@/lib/constants';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_NAME} — Lagos Luxury Event Decoration`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    'Lagos luxury event decoration and rentals — Engagement, Kamu, Henna Party, Arabian Night, Nikkah, Naming Ceremony, Picnic setups, and Rentals.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${BUSINESS_NAME} — Lagos Luxury Event Decoration`,
    description:
      'Lagos luxury event decoration and rentals — Engagement, Kamu, Henna Party, Arabian Night, Nikkah, Naming Ceremony, Picnic setups, and Rentals.',
    siteName: BUSINESS_NAME,
    locale: 'en_NG',
    type: 'website',
    url: SITE_URL,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} — Lagos Luxury Event Decoration`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} — Lagos Luxury Event Decoration`,
    description:
      'Lagos luxury event decoration and rentals — Engagement, Kamu, Henna Party, Arabian Night, Nikkah, Naming Ceremony, Picnic setups, and Rentals.',
    images: ['/opengraph-image'],
    site: '@decor_adorne',
  },
  icons: {
    icon: '/icon.jpg',
    apple: [{ url: '/apple-icon', type: 'image/png', sizes: '180x180' }],
    shortcut: '/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      className={`${cormorant.variable} ${dmSans.variable} ${geistMono.variable}`}
    >
      <head>
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
