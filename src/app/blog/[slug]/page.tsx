import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from '@/lib/blog';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { generatePageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.heroImage ?? '/opengraph-image',
    ogType: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 2);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Decor Adorne',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Decor Adorne',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo/logo.jpeg` },
    },
    image: post.heroImage ? `${SITE_URL}${post.heroImage}` : `${SITE_URL}/opengraph-image`,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', item: SITE_URL },
          { name: 'Blog', item: `${SITE_URL}/blog` },
          { name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ])}
      />
      <BlogPostLayout post={post} relatedPosts={relatedPosts} />
    </>
  );
}
