import type { Metadata } from 'next';
import { generatePageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { LeadSection } from '@/components/sections/LeadSection';
import { STATS, BUSINESS_IG, SITE_URL } from '@/lib/constants';
import { ArrowRight, Award, Heart, MapPin, Users } from 'lucide-react';
import { buildDefaultWhatsAppUrl } from '@/lib/whatsapp';
import { PageHero } from '@/components/ui/page-hero';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Decor Adorne: Arabian-Inspired Luxury Event Decor Studio',
  description:
    'Arabian-inspired luxury event decor studio, founded in Lagos in 2016. 500+ celebrations styled with cultural fluency and editorial detail. Serving Nigeria nationwide.',
  path: '/about',
});

const VALUES = [
  {
    icon: Heart,
    title: 'Heritage, honoured.',
    body: 'A Kamu is not a party. It is a rite of passage with centuries of Hausa-Fulani lineage. A Nikkah is sacred. A Durbar is royal pageantry. We approach every ceremony with the cultural fluency it deserves.',
  },
  {
    icon: Award,
    title: 'Detail, considered.',
    body: 'We obsess over every brass lantern, every fold of brocade, every stem of marigold. Beauty lives in the detail, and we refuse to cut corners on any event we touch.',
  },
  {
    icon: Users,
    title: 'Families, not clients.',
    body: 'When you work with Decor Adorne, you gain a team that genuinely cares about your day. We remember names, preferences, and the stories behind every celebration.',
  },
  {
    icon: MapPin,
    title: 'Wherever you celebrate.',
    body: 'Lagos is home, but our work is national. Abuja, Kano, Kaduna, Sokoto, Port Harcourt. We travel with the lanterns, the fabrics, and the team. Distance never compromises the detail.',
  },
];

export default function AboutPage() {
  const waUrl = buildDefaultWhatsAppUrl();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', item: SITE_URL },
          { name: 'About', item: `${SITE_URL}/about` },
        ])}
      />

      <PageHero
        eyebrow="Our story"
        headlineBefore="An Arabian eye for"
        headlineItalic="Nigerian celebration."
        description="Since 2016, Decor Adorne has been Nigeria's studio for Arabian-inspired luxury event decor, bringing lantern-lit beauty, cultural fluency, and editorial detail to every ceremony we are honoured to be part of. Anchored in Lagos. Nationwide in reach."
        cta={{ label: 'Plan my event', href: '/#lead-form' }}
        ctaSecondary={{ label: 'See our work', href: BUSINESS_IG, external: true }}
        photoUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Founder story */}
      <section className="py-20 sm:py-28 bg-[#F2EDE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Placeholder portrait */}
            <div
              className="rounded-3xl bg-gradient-to-br from-[#C9A96E]/20 to-[#F2EDE8] border border-[#E8E0D8]"
              style={{ minHeight: '420px' }}
              role="img"
              aria-label="Decor Adorne founder portrait, Arabian-inspired event decoration studio, Lagos"
            >
              <div className="h-full flex flex-col items-center justify-end p-8">
                <span className="text-xs text-[#1A1410]/30 italic">(Founder portrait, coming soon)</span>
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
                Built around{' '}
                <em className="italic text-[#C9A96E]">Arabian-inspired beauty.</em>
              </h2>
              <div className="flex flex-col gap-5 text-[#1A1410]/65 leading-relaxed text-sm sm:text-base">
                <p>
                  Decor Adorne was founded in 2016 around a singular obsession: the Arabian
                  aesthetic (brass lanterns, sheer drapery, jewel-toned florals, majlis-style
                  low seating) translated for the Nigerian celebration. Henna nights, Kamu
                  ceremonies, Nikkahs, Durbars. The traditions of Hausa-Fulani and Muslim
                  Nigeria are already Arabian-influenced; we design to that lineage.
                </p>
                <p>
                  What started as a styling passion has become the studio Nigerian families
                  call when the aesthetic has to be exactly right. Over 500 celebrations
                  later (Lagos hotels, Abuja gardens, Kano private compounds, Port Harcourt
                  ballrooms) the obsession hasn&rsquo;t softened.
                </p>
                <p>
                  Every event teaches us something new. Every client brings us a vision we
                  haven&rsquo;t seen before. That is what keeps us passionate, and what drives
                  us to deliver perfection, every single time.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#FAF7F4] font-medium px-7 py-3.5 rounded-full hover:bg-[#A8834A] transition-colors text-sm"
                >
                  Style my event
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
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1410 0%, #2D1B4E 50%, #1A1410 100%)' }}
      >
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[200px] rounded-full bg-[#A878CD]/10 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#FAF7F4]/10">
            {STATS.map((stat, i) => {
              const colors = ['#D4AF37', '#C49EE0', '#E2567A'];
              return (
                <div key={stat.label} className="text-center py-6 sm:py-2 px-4">
                  <p
                    className="text-5xl sm:text-6xl font-normal mb-2"
                    style={{ fontFamily: 'var(--font-mono)', color: colors[i] }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-[#FAF7F4]/50 tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              );
            })}
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
            The four principles{' '}
            <em className="italic text-[#C9A96E]">behind every event.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              const cardAccents = [
                { bg: 'linear-gradient(135deg, #FFF8EE 0%, #F2EDE8 100%)', iconBg: 'rgba(212,175,55,0.12)', iconColor: '#D4AF37', border: 'rgba(212,175,55,0.15)' },
                { bg: 'linear-gradient(135deg, #F5EDF8 0%, #EDE4F8 100%)', iconBg: 'rgba(168,120,205,0.12)', iconColor: '#A878CD', border: 'rgba(168,120,205,0.15)' },
                { bg: 'linear-gradient(135deg, #FFF0F5 0%, #F8E5EE 100%)', iconBg: 'rgba(226,86,122,0.12)', iconColor: '#E2567A', border: 'rgba(226,86,122,0.15)' },
                { bg: 'linear-gradient(135deg, #EDFAF9 0%, #E4F4F2 100%)', iconBg: 'rgba(78,205,196,0.12)', iconColor: '#4ECDC4', border: 'rgba(78,205,196,0.15)' },
              ];
              const a = cardAccents[i];
              return (
                <div
                  key={v.title}
                  className="rounded-2xl p-8 flex flex-col gap-4 border"
                  style={{ marginTop: i % 2 === 1 ? '1.5rem' : 0, background: a.bg, borderColor: a.border }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: a.iconBg, color: a.iconColor }}>
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
