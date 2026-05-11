import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Event Decoration Tips & Inspiration | Lagos | Decor Adorne',
  description:
    'Event decoration ideas, Lagos venue guides, and styling inspiration from the Decor Adorne team. Helping you plan a beautiful celebration.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <section className="pt-36 sm:pt-48 pb-32 bg-[#FAF7F4]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-4">
          Inspiration
        </p>
        <h1
          className="font-display font-light text-[#1A1410] max-w-xl mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
        >
          Ideas for your{' '}
          <em className="italic text-[#C9A96E]">Lagos celebration.</em>
        </h1>
        <p className="text-[#1A1410]/60 max-w-lg leading-relaxed mb-16">
          Tips, trends, and real event inspiration from the Decor Adorne studio.
          New stories coming soon.
        </p>

        {/* Coming soon placeholder */}
        <div className="bg-[#F2EDE8] border border-[#E8E0D8] rounded-3xl p-12 sm:p-16 text-center max-w-xl mx-auto">
          <p className="font-display text-2xl font-light text-[#1A1410] mb-4">
            Stories <em className="italic text-[#C9A96E]">coming soon.</em>
          </p>
          <p className="text-sm text-[#1A1410]/50 mb-8">
            In the meantime, browse our services or chat with us directly about your event.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#FAF7F4] font-medium px-7 py-3.5 rounded-full hover:bg-[#A8834A] transition-colors text-sm"
          >
            Explore our services
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
