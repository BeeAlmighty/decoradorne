import type { MetadataRoute } from 'next';
import { SITE_URL, SERVICES } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog';

const SITE_UPDATED = '2025-05-19';

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(SITE_UPDATED),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(SITE_UPDATED),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(SITE_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceUrls,
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date(SITE_UPDATED),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(SITE_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(BLOG_POSTS[BLOG_POSTS.length - 1].publishedAt),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogUrls,
  ];
}
