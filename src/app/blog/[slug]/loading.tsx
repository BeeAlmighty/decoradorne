/**
 * Loading skeleton for an individual blog article.
 * Mirrors BlogPostLayout: hero image, title block, prose body, related posts.
 */
export default function Loading() {
  return (
    <>
      {/* Article hero */}
      <div className="relative w-full min-h-[60vh] bg-[#1A1410] overflow-hidden flex flex-col justify-end">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-[#1A1410]/70 to-[#1A1410]/30"
        />
        <div className="relative z-10 max-w-3xl mx-auto w-full px-5 sm:px-8 pt-36 sm:pt-44 pb-16 animate-pulse">
          {/* Category + date */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-3 w-20 bg-[#C9A96E]/30 rounded-full" />
            <div className="h-1 w-1 rounded-full bg-[#FAF7F4]/30" />
            <div className="h-3 w-24 bg-[#FAF7F4]/15 rounded-full" />
          </div>
          {/* Title */}
          <div className="space-y-4">
            <div className="h-10 sm:h-14 w-full bg-[#FAF7F4]/10 rounded-md" />
            <div className="h-10 sm:h-14 w-4/5 bg-[#FAF7F4]/10 rounded-md" />
          </div>
        </div>
      </div>

      {/* Article body */}
      <section className="py-16 sm:py-24 bg-[#FAF7F4]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 animate-pulse">
          {/* Lede */}
          <div className="space-y-3 mb-12">
            <div className="h-5 w-full bg-[#1A1410]/12 rounded" />
            <div className="h-5 w-11/12 bg-[#1A1410]/12 rounded" />
            <div className="h-5 w-4/5 bg-[#1A1410]/12 rounded" />
          </div>

          {/* Section heading */}
          <div className="h-7 sm:h-8 w-2/3 bg-[#1A1410]/15 rounded-md mb-6" />

          {/* Paragraphs */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3 mb-10">
              <div className="h-4 w-full bg-[#1A1410]/8 rounded" />
              <div className="h-4 w-full bg-[#1A1410]/8 rounded" />
              <div className="h-4 w-11/12 bg-[#1A1410]/8 rounded" />
              <div className="h-4 w-5/6 bg-[#1A1410]/8 rounded" />
              <div className="h-4 w-3/4 bg-[#1A1410]/8 rounded" />
            </div>
          ))}

          {/* Pull quote */}
          <div className="my-12 border-l-2 border-[#C9A96E]/40 pl-6 space-y-3">
            <div className="h-5 w-5/6 bg-[#1A1410]/12 rounded" />
            <div className="h-5 w-2/3 bg-[#1A1410]/12 rounded" />
          </div>

          {/* More paragraphs */}
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-3 mb-10">
              <div className="h-4 w-full bg-[#1A1410]/8 rounded" />
              <div className="h-4 w-11/12 bg-[#1A1410]/8 rounded" />
              <div className="h-4 w-4/5 bg-[#1A1410]/8 rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 sm:py-20 bg-[#F2EDE8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 animate-pulse">
          <div className="h-3 w-28 bg-[#C9A96E]/40 rounded-full mb-3" />
          <div className="h-8 w-1/2 max-w-md bg-[#1A1410]/12 rounded-md mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#FAF7F4] border border-[#E8E0D8] rounded-2xl overflow-hidden"
              >
                <div className="aspect-[16/10] bg-[#1A1410]/8" />
                <div className="p-6 space-y-3">
                  <div className="h-3 w-20 bg-[#C9A96E]/30 rounded-full" />
                  <div className="h-6 w-5/6 bg-[#1A1410]/12 rounded-md" />
                  <div className="h-3 w-full bg-[#1A1410]/8 rounded" />
                  <div className="h-3 w-3/4 bg-[#1A1410]/8 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
