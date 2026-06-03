/**
 * Global route-segment loading UI.
 *
 * Mirrors the shape used by most pages: PageHero (dark) → cream content grid.
 * Subtle pulse rather than aggressive shimmer to stay true to the editorial,
 * quiet brand voice.
 */
export default function Loading() {
  return (
    <>
      {/* Hero skeleton — mirrors PageHero */}
      <div className="relative w-full min-h-[72vh] bg-[#1A1410] overflow-hidden flex flex-col justify-end">
        {/* Soft ambient glow placeholder */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[300px] rounded-full bg-[#C9A96E]/5 blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-36 sm:pt-44 pb-16 sm:pb-22">
          <div className="animate-pulse">
            {/* Eyebrow */}
            <div className="h-3 w-32 bg-[#C9A96E]/30 rounded-full mb-6" />

            {/* Headline — two lines, asymmetric widths */}
            <div className="space-y-4 max-w-3xl">
              <div className="h-12 sm:h-16 w-4/5 bg-[#FAF7F4]/10 rounded-md" />
              <div className="h-12 sm:h-16 w-2/3 bg-[#FAF7F4]/10 rounded-md" />
            </div>

            {/* Description */}
            <div className="mt-8 space-y-3 max-w-xl">
              <div className="h-4 w-full bg-[#FAF7F4]/8 rounded" />
              <div className="h-4 w-5/6 bg-[#FAF7F4]/8 rounded" />
              <div className="h-4 w-3/4 bg-[#FAF7F4]/8 rounded" />
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="h-12 w-44 bg-[#C9A96E]/25 rounded-full" />
              <div className="h-12 w-44 bg-[#FAF7F4]/8 rounded-full border border-[#FAF7F4]/10" />
            </div>

            {/* Editorial rule */}
            <div
              aria-hidden="true"
              className="mt-12 sm:mt-16 h-px w-full max-w-2xl bg-gradient-to-r from-[#C9A96E]/25 via-[#C9A96E]/8 to-transparent"
            />
          </div>
        </div>
      </div>

      {/* Content section skeleton — cream card grid */}
      <section className="py-20 sm:py-28 bg-[#F2EDE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 animate-pulse">
          <div className="h-3 w-24 bg-[#C9A96E]/40 rounded-full mb-4" />
          <div className="h-8 sm:h-10 w-2/3 max-w-2xl bg-[#1A1410]/10 rounded-md mb-14" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#FAF7F4] border border-[#E8E0D8] rounded-2xl p-8 flex flex-col gap-4"
                style={{ marginTop: i % 2 === 1 ? '1.5rem' : 0 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/15" />
                <div className="h-5 w-2/3 bg-[#1A1410]/12 rounded-md" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-[#1A1410]/8 rounded" />
                  <div className="h-3 w-5/6 bg-[#1A1410]/8 rounded" />
                  <div className="h-3 w-4/6 bg-[#1A1410]/8 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
