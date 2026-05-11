import type { Metadata } from 'next';
import { generatePageMetadata, buildLocalBusinessJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { LeadSection } from '@/components/sections/LeadSection';
import { STATS, BUSINESS_PHONE, BUSINESS_IG } from '@/lib/constants';
import { ArrowRight, Award, Heart, MapPin, Users } from 'lucide-react';
import { buildDefaultWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Decor Adorne — Lagos Luxury Event Decoration Studio',
  description:
    "Meet the team behind Lagos's most trusted event decoration studio. Decor Adorne has styled 500+ events across Lagos since 2016, blending cultural authenticity with editorial luxury.",
  path: '/about',
});

const VALUES = [
  {
    icon: Heart,
    title: 'Culture, celebrated.',
    body: 'We understand that a Kamu is not just a party — it is a rite of passage. A Nikkah is sacred. We approach every Lagos event with deep respect for its cultural meaning.',
  },
  {
    icon: Award,
    title: 'Detail, elevated.',
    body: 'We obsess over every stem, every candle, every fold of linen. Beauty is in the detail, and we refuse to cut corners on any Lagos event we touch.',
  },
  {
    icon: Users,
    title: 'Families, not clients.',
    body: 'When you work with Decor Adorne, you gain a team that genuinely cares about your day. We remember names, preferences, and the stories behind every celebration.',
  },
  {
    icon: MapPin,
    title: 'Lagos, through and through.',
    body: 'We know every corner of this city — from Ikoyi gardens to Lekki rooftops. Local knowledge means flawless execution, every time.',
  },
];

export default function AboutPage() {
  const waUrl = buildDefaultWhatsAppUrl();

  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />

      {/* Hero */}
      <section className="pt-36 sm:pt-48 pb-20 bg-[#FAF7F4] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_30%_40%,rgba(201,169,110,0.09),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-4">
            Our story
          </p>
          <h1
            className="font-display font-light text-[#1A1410] max-w-2xl mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Transforming spaces into{' '}
            <em className="italic text-[#C9A96E]">memories.</em>
          </h1>
          <p className="text-[#1A1410]/60 max-w-xl leading-relaxed">
            Since 2016, Decor Adorne has been Lagos&rsquo;s trusted name for luxury event
            decoration — bringing beauty, culture, and intentional detail to every celebration
            we are honoured to be part of.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-20 sm:py-28 bg-[#F2EDE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Placeholder portrait */}
            <div
              className="rounded-3xl bg-gradient-to-br from-[#C9A96E]/20 to-[#F2EDE8] border border-[#E8E0D8]"
              style={{ minHeight: '420px' }}
              role="img"
              aria-label="Decor Adorne founder portrait — Lagos event decoration studio"
            >
              <div className="h-full flex flex-col items-center justify-end p-8">
                <span className="text-xs text-[#1A1410]/30 italic">(Founder portrait — coming soon)</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-4">
                The founder
              </p>
              <h2
                className="font-display font-light text-[#1A1410] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.1 }}
              >
                Born from a love of beauty and{' '}
                <em className="italic text-[#C9A96E]">Lagos culture.</em>
              </h2>
              <div className="flex flex-col gap-5 text-[#1A1410]/65 leading-relaxed text-sm sm:text-base">
                <p>
                  Decor Adorne was founded in 2016 with a singular belief: that every Lagos family
                  deserves to celebrate their milestones in a setting that feels extraordinary.
                  Not just beautiful — extraordinary.
                </p>
                <p>
                  What started as a passion project born from styling family events grew into
                  Lagos&rsquo;s most trusted event decoration studio. We&rsquo;ve had the honour
                  of being part of over 500 celebrations — from quiet, intimate Nikkah ceremonies
                  to sprawling engagement parties that take over entire hotel ballrooms.
                </p>
                <p>
                  Every event teaches us something new. Every client brings us a vision we&rsquo;ve
                  never seen before. That is what keeps us passionate — and what drives us to
                  deliver perfection, every single time.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#FAF7F4] font-medium px-7 py-3.5 rounded-full hover:bg-[#A8834A] transition-colors text-sm"
                >
                  Plan my event
                  <ArrowRight size={14} />
                </a>
                <a
                  href={BUSINESS_IG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#E8E0D8] text-[#1A1410]/60 font-medium px-7 py-3.5 rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors text-sm"
                >
                  See our work on Instagram
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-[#1A1410]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#FAF7F4]/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center py-6 sm:py-2 px-4">
                <p
                  className="text-5xl sm:text-6xl font-normal text-[#C9A96E] mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-[#FAF7F4]/50 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A96E] mb-4">
            Our values
          </p>
          <h2
            className="font-display font-light text-[#1A1410] max-w-xl mb-14"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.1 }}
          >
            What drives us{' '}
            <em className="italic text-[#C9A96E]">every day.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-[#F2EDE8] border border-[#E8E0D8] rounded-2xl p-8 flex flex-col gap-4"
                  style={{ marginTop: i % 2 === 1 ? '1.5rem' : 0 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/12 flex items-center justify-center text-[#C9A96E]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-medium text-xl text-[#1A1410]">{v.title}</h3>
                  <p className="text-sm text-[#1A1410]/60 leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <LeadSection />
    </>
  );
}
