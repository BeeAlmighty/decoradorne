import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import type { BlogPost, ContentBlock } from '@/lib/blog';

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={i}
          className="font-display font-light text-[#1A1410] mt-10 mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.15 }}
        >
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3
          key={i}
          className="font-sans font-semibold text-[#1A1410] text-lg mt-7 mb-3"
        >
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p key={i} className="text-[#1A1410]/70 leading-relaxed text-base mb-5">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul key={i} className="mb-5 flex flex-col gap-2.5">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[#1A1410]/70 text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'cta':
      return (
        <div
          key={i}
          className="my-10 bg-[#1A1410] rounded-2xl px-7 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
        >
          <div>
            {block.sub && (
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-1">
                {block.sub}
              </p>
            )}
          </div>
          <Link
            href={block.href}
            className="shrink-0 inline-flex items-center gap-2 bg-[#C9A96E] text-[#1A1410] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#DEC48E] transition-colors"
          >
            {block.label}
            <ArrowRight size={14} />
          </Link>
        </div>
      );
    default:
      return null;
  }
}

interface BlogPostLayoutProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogPostLayout({ post, relatedPosts }: BlogPostLayoutProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[55vh] bg-[#1A1410] text-[#FAF7F4] overflow-hidden flex flex-col justify-end">
        {post.heroImage && (
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/60 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto w-full px-5 sm:px-8 pt-36 pb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.2em] uppercase text-[#C9A96E]">
              <Tag size={11} />
              {post.category}
            </span>
            <span className="text-[#FAF7F4]/25">·</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-[#FAF7F4]/45">
              <Clock size={11} />
              {post.readMins} min read
            </span>
          </div>
          <h1
            className="font-display font-light leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            {post.title}
          </h1>
          <p className="mt-4 text-[#FAF7F4]/50 text-sm">{formattedDate}</p>
        </div>
      </div>

      {/* Article body */}
      <article className="py-16 sm:py-20 bg-[#FAF7F4]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">

          {/* Lead excerpt */}
          <p className="font-display italic text-xl text-[#1A1410]/60 leading-relaxed mb-10 pb-10 border-b border-[#E8E0D8]">
            {post.excerpt}
          </p>

          {/* Body blocks */}
          {post.body.map((block, i) => renderBlock(block, i))}

          {/* Byline */}
          <div className="mt-14 pt-8 border-t border-[#E8E0D8] flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#C9A96E]/15 flex items-center justify-center">
              <span className="font-display italic text-[#C9A96E] text-lg font-light">D</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1A1410]">Decor Adorne Team</p>
              <p className="text-xs text-[#1A1410]/45">{formattedDate} · Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F2EDE8]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#C9A96E] mb-3">
              Keep reading
            </p>
            <h2
              className="font-display font-light text-[#1A1410] mb-10"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
            >
              More from the <em className="italic text-[#C9A96E]">studio.</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-[#FAF7F4] border border-[#E8E0D8] rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(26,20,16,0.10)] hover:-translate-y-1 transition-all duration-300"
                >
                  {related.heroImage && (
                    <div className="relative h-44 bg-[#1A1410]">
                      <Image
                        src={related.heroImage}
                        alt={related.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#C9A96E] mb-2">
                      {related.category}
                    </p>
                    <h3 className="font-sans font-semibold text-[#1A1410] text-base leading-snug mb-2 group-hover:text-[#C9A96E] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-[#1A1410]/50 line-clamp-2 leading-relaxed">
                      {related.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A96E]">
                      Read more <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA strip */}
      <section className="py-16 bg-[#1A1410]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#C9A96E] mb-2">
              Ready to start planning?
            </p>
            <p className="font-display text-2xl sm:text-3xl font-light text-[#FAF7F4]">
              Let&rsquo;s make your Lagos event{' '}
              <em className="italic text-[#C9A96E]">unforgettable.</em>
            </p>
          </div>
          <Link
            href="/#lead-form"
            className="shrink-0 inline-flex items-center gap-2 bg-[#C9A96E] text-[#1A1410] font-semibold px-7 py-3.5 rounded-full hover:bg-[#DEC48E] transition-colors text-sm"
          >
            Request a free quote
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
