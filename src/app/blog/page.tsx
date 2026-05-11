import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';
import { generatePageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { PageHero } from '@/components/ui/page-hero';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Event Decoration Tips & Inspiration Lagos | Decor Adorne',
  description:
    'Guides on Kamu, Nikkah, henna party, and engagement decoration in Lagos. Real advice from a team that has styled 500+ events across Lagos since 2016.',
  path: '/blog',
});

const blogListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Decor Adorne — Event Decoration Blog Lagos',
  url: `${SITE_URL}/blog`,
  description:
    'Event decoration guides, venue tips, and styling inspiration for Lagos celebrations.',
  blogPost: BLOG_POSTS.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.publishedAt,
    image: p.heroImage ? `${SITE_URL}${p.heroImage}` : `${SITE_URL}/opengraph-image`,
  })),
};

const CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))];

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <>
      <JsonLd data={blogListJsonLd} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', item: SITE_URL },
          { name: 'Blog', item: `${SITE_URL}/blog` },
        ])}
      />

      <PageHero
        eyebrow="Inspiration"
        headlineBefore="Ideas for your"
        headlineItalic="Lagos celebration."
        description="Guides, venue tips, and styling inspiration from a team that has styled over 500 events in Lagos since 2016."
        photoUrl="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 sm:py-20 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-12">
            <span className="text-xs font-medium px-4 py-1.5 rounded-full bg-[#C9A96E] text-[#FAF7F4]">
              All Posts
            </span>
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium px-4 py-1.5 rounded-full bg-[#F2EDE8] text-[#1A1410]/60 border border-[#E8E0D8]"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#E8E0D8] mb-10 hover:shadow-[0_12px_48px_rgba(26,20,16,0.10)] transition-all duration-300"
          >
            <div className="relative h-64 lg:h-auto bg-[#1A1410] lg:min-h-[420px]">
              {featured.heroImage ? (
                <Image
                  src={featured.heroImage}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/20 to-[#1A1410]" />
              )}
              <div className="absolute top-4 left-4 bg-[#C9A96E] text-[#1A1410] text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                Featured
              </div>
            </div>
            <div className="bg-[#FAF7F4] p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-3">
                {featured.category}
              </p>
              <h2
                className="font-display font-light text-[#1A1410] mb-4 group-hover:text-[#C9A96E] transition-colors leading-snug"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
              >
                {featured.title}
              </h2>
              <p className="text-sm text-[#1A1410]/55 leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#1A1410]/40">
                  <Clock size={12} />
                  {featured.readMins} min read
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A96E]">
                  Read the guide <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[#FAF7F4] border border-[#E8E0D8] rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(26,20,16,0.10)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 bg-[#1A1410]">
                  {post.heroImage ? (
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/25 to-[#1A1410]" />
                  )}
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#C9A96E] mb-2">
                    {post.category}
                  </p>
                  <h2 className="font-sans font-semibold text-[#1A1410] text-base leading-snug mb-2 group-hover:text-[#C9A96E] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#1A1410]/50 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#1A1410]/40">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={11} />
                      {post.readMins} min
                    </span>
                    <span className="text-[#C9A96E] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
