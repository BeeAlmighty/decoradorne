/**
 * Loading skeleton for the gallery page.
 * Mirrors GalleryClient: PageHero, sticky filter bar, asymmetric image grid.
 */

const TILE_PATTERN = ['tall', 'short', 'short', 'tall', 'short', 'short', 'tall', 'short'] as const;

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
          <div className="h-3 w-28 bg-[#C9A96E]/30 rounded-full mb-6" />
          <div className="space-y-4 max-w-3xl">
            <div className="h-12 sm:h-16 w-3/4 bg-[#FAF7F4]/10 rounded-md" />
            <div className="h-12 sm:h-16 w-1/2 bg-[#FAF7F4]/10 rounded-md" />
          </div>
          <div className="mt-8 space-y-3 max-w-xl">
            <div className="h-4 w-full bg-[#FAF7F4]/8 rounded" />
            <div className="h-4 w-4/5 bg-[#FAF7F4]/8 rounded" />
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <section className="bg-[#FAF7F4] sticky top-[76px] sm:top-[82px] z-20 border-b border-[#E8E0D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 animate-pulse">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="shrink-0 h-8 rounded-full bg-[#F2EDE8]"
                style={{ width: 80 + (i % 3) * 24 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 sm:py-14 bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 animate-pulse">
            {TILE_PATTERN.map((shape, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden bg-[#F2EDE8] ${
                  shape === 'tall' ? 'row-span-2' : ''
                }`}
                style={{ minHeight: shape === 'tall' ? '420px' : '200px' }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 50%, rgba(201,169,110,0.12) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="absolute bottom-3 left-3 h-6 w-24 rounded-full bg-[#1A1410]/8" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
