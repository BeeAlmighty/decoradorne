/**
 * Loading skeleton for the rental catalogue.
 * Mirrors the page: PageHero, three-step band, filter bar, priced card grid.
 */

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full min-h-[60vh] bg-[#1A1410] overflow-hidden flex flex-col justify-end">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[300px] rounded-full bg-[#C9A96E]/5 blur-[120px] pointer-events-none"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-36 sm:pt-44 pb-16 animate-pulse">
          <div className="h-3 w-32 bg-[#C9A96E]/30 rounded-full mb-6" />
          <div className="space-y-4 max-w-3xl">
            <div className="h-12 sm:h-16 w-2/3 bg-[#FAF7F4]/10 rounded-md" />
            <div className="h-12 sm:h-16 w-1/2 bg-[#FAF7F4]/10 rounded-md" />
          </div>
          <div className="mt-8 space-y-3 max-w-xl">
            <div className="h-4 w-full bg-[#FAF7F4]/8 rounded" />
            <div className="h-4 w-4/5 bg-[#FAF7F4]/8 rounded" />
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="py-16 bg-[#F2EDE8] border-b border-[#E8E0D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-pulse">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-9 w-9 rounded-xl bg-[#C9A96E]/15" />
              <div className="h-3.5 w-32 bg-[#1A1410]/8 rounded" />
              <div className="h-3 w-full bg-[#1A1410]/6 rounded" />
              <div className="h-3 w-4/5 bg-[#1A1410]/6 rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* Filter bar + grid */}
      <section className="py-14 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 animate-pulse">
          <div className="h-8 w-48 bg-[#1A1410]/8 rounded mb-8" />
          <div className="flex gap-2 overflow-hidden pb-1 mb-8">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="shrink-0 h-8 rounded-full bg-[#F2EDE8]"
                style={{ width: 92 + (i % 3) * 28 }}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-[#F2EDE8] border border-[#E8E0D8]"
              >
                <div className="relative aspect-[4/5] bg-[#FAF7F4]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 50% 50%, rgba(201,169,110,0.12) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>
                <div className="p-5 space-y-2.5 border-t border-[#E8E0D8]">
                  <div className="h-3.5 w-3/4 bg-[#1A1410]/8 rounded" />
                  <div className="h-2.5 w-1/3 bg-[#C9A96E]/25 rounded" />
                  <div className="h-2.5 w-full bg-[#1A1410]/6 rounded" />
                  <div className="h-6 w-24 bg-[#1A1410]/8 rounded mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
