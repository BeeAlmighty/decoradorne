'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, ArrowRight, X, Store, Truck } from 'lucide-react';
import {
  RENTAL_CATEGORIES,
  RENTAL_ITEMS,
  formatNaira,
  rentalFullName,
  rentalImageAlt,
  type RentalCategorySlug,
  type RentalItem,
} from '@/lib/rentals';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

type Filter = RentalCategorySlug | 'all';
type Sort = 'featured' | 'price-asc' | 'price-desc';
type Fulfilment = 'pickup' | 'delivery';

const SORTS: { value: Sort; label: string }[] = [
  { value: 'featured', label: 'Catalogue order' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
];

const FULFILMENT_OPTIONS = [
  {
    value: 'pickup' as const,
    icon: Store,
    label: 'Pick up at the studio',
    body: 'Collect the pieces from our Lagos studio yourself and return them after your event. Nothing extra to pay.',
  },
  {
    value: 'delivery' as const,
    icon: Truck,
    label: 'Delivery to your venue',
    body: 'We bring everything to you. Delivery is priced by your location, so message us with the address and we will quote it.',
  },
];

/**
 * The WhatsApp message carries the item list, the subtotal, and how the client
 * wants to receive the pieces — delivery quotes depend on their location, so
 * that request has to reach us in the first message.
 */
function buildEnquiryUrl(items: RentalItem[], fulfilment: Fulfilment): string {
  const closing =
    fulfilment === 'pickup'
      ? ['*Collection:* I will pick up from the studio', '', 'Please confirm availability for my event date.']
      : [
          '*Delivery:* Please quote delivery to my location',
          '*Delivering to:* ',
          '',
          'Please confirm availability for my event date.',
        ];

  const lines = [
    'Hi Decor Adorné! 👋',
    '',
    items.length === 1
      ? "I'd like to rent this piece:"
      : `I'd like to rent these ${items.length} pieces:`,
    '',
    ...items.map((i) => `• ${rentalFullName(i)} — ${formatNaira(i.price)}`),
    '',
    `*Items subtotal:* ${formatNaira(items.reduce((sum, i) => sum + i.price, 0))}`,
    ...closing,
  ];
  return buildWhatsAppUrl(lines.join('\n'));
}

export function RentalCatalogue() {
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('featured');
  const [selected, setSelected] = useState<string[]>([]);
  const [fulfilment, setFulfilment] = useState<Fulfilment>('pickup');

  const visible = useMemo(() => {
    const items =
      filter === 'all' ? RENTAL_ITEMS : RENTAL_ITEMS.filter((i) => i.category === filter);
    if (sort === 'featured') return items;
    const dir = sort === 'price-asc' ? 1 : -1;
    return [...items].sort((a, b) => (a.price - b.price) * dir);
  }, [filter, sort]);

  const selectedItems = useMemo(
    () => RENTAL_ITEMS.filter((i) => selected.includes(i.slug)),
    [selected],
  );
  const subtotal = selectedItems.reduce((sum, i) => sum + i.price, 0);

  const activeCategory = RENTAL_CATEGORIES.find((c) => c.slug === filter);

  function toggle(slug: string) {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }

  return (
    <>
      {/* ── Pick-up or delivery ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto mb-10">
        <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#1A1410]/35 mb-4">
          How would you like to receive them?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {FULFILMENT_OPTIONS.map((option) => {
            const active = fulfilment === option.value;
            return (
              <button
                key={option.value}
                onClick={() => setFulfilment(option.value)}
                aria-pressed={active}
                className={`text-left flex gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                  active
                    ? 'bg-[#1A1410] border-[#1A1410] text-[#FAF7F4]'
                    : 'bg-[#F2EDE8] border-[#E8E0D8] text-[#1A1410] hover:border-[#C9A96E]'
                }`}
              >
                <span
                  className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                    active ? 'bg-[#C9A96E]/20 text-[#C9A96E]' : 'bg-[#C9A96E]/12 text-[#C9A96E]'
                  }`}
                >
                  <option.icon size={18} strokeWidth={1.6} />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="font-sans font-semibold text-sm">{option.label}</span>
                    {active && <Check size={13} className="text-[#C9A96E] shrink-0" />}
                  </span>
                  <span
                    className={`block mt-1.5 text-xs leading-relaxed ${
                      active ? 'text-[#FAF7F4]/55' : 'text-[#1A1410]/50'
                    }`}
                  >
                    {option.body}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Filter + sort ─────────────────────────────────────────────── */}
      <div className="sticky top-[76px] sm:top-[86px] z-30 -mx-5 sm:-mx-8 px-5 sm:px-8 py-4 bg-[#FAF7F4]/92 backdrop-blur-md border-b border-[#E8E0D8]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
          {/* Scrolls on narrow screens, wraps on wide ones so no chip is ever clipped. */}
          <div className="flex flex-nowrap lg:flex-wrap gap-2 overflow-x-auto lg:overflow-visible -mx-1 px-1 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <FilterChip active={filter === 'all'} onClick={() => setFilter('all')}>
              Everything
              <span className="ml-1.5 text-[10px] opacity-50">{RENTAL_ITEMS.length}</span>
            </FilterChip>
            {RENTAL_CATEGORIES.map((c) => (
              <FilterChip
                key={c.slug}
                active={filter === c.slug}
                onClick={() => setFilter(c.slug)}
              >
                {c.label}
                <span className="ml-1.5 text-[10px] opacity-50">
                  {RENTAL_ITEMS.filter((i) => i.category === c.slug).length}
                </span>
              </FilterChip>
            ))}
          </div>

          <label className="shrink-0 flex items-center gap-2 text-xs text-[#1A1410]/45 lg:ml-auto">
            <span className="hidden sm:inline">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="bg-[#F2EDE8] border border-[#E8E0D8] rounded-full px-3.5 py-1.5 text-xs font-medium text-[#1A1410]/70 focus:outline-none focus:border-[#C9A96E] cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {activeCategory && (
        <p className="max-w-7xl mx-auto mt-6 text-sm text-[#1A1410]/50 italic">
          {activeCategory.blurb}
        </p>
      )}

      {/* ── Grid ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 pb-28">
        {visible.map((item) => (
          <RentalCard
            key={item.slug}
            item={item}
            fulfilment={fulfilment}
            selected={selected.includes(item.slug)}
            onToggle={() => toggle(item.slug)}
          />
        ))}
      </div>

      {/* ── Selection tray ────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.div
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            exit={{ y: 90 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-[#1A1410] border-t border-[#C9A96E]/20 shadow-[0_-8px_40px_rgba(26,20,16,0.28)]"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 pr-20 sm:pr-24 flex items-center gap-4">
              <button
                onClick={() => setSelected([])}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-[#FAF7F4]/40 hover:text-[#FAF7F4] hover:bg-[#FAF7F4]/10 transition-colors"
                aria-label="Clear selection"
              >
                <X size={15} />
              </button>

              <div className="min-w-0 flex-1">
                <p className="text-[#FAF7F4] text-sm font-medium truncate">
                  {selectedItems.length} {selectedItems.length === 1 ? 'piece' : 'pieces'} selected
                  <span className="text-[#C9A96E]"> · {formatNaira(subtotal)}</span>
                </p>
                <button
                  onClick={() =>
                    setFulfilment((f) => (f === 'pickup' ? 'delivery' : 'pickup'))
                  }
                  className="mt-0.5 inline-flex items-center gap-1.5 text-[11px] text-[#FAF7F4]/50 hover:text-[#FAF7F4] transition-colors"
                >
                  {fulfilment === 'pickup' ? (
                    <>
                      <Store size={11} /> Studio pick-up
                    </>
                  ) : (
                    <>
                      <Truck size={11} /> Delivery — we&rsquo;ll quote it
                    </>
                  )}
                  <span className="underline underline-offset-2 opacity-70">change</span>
                </button>
              </div>

              <a
                href={buildEnquiryUrl(selectedItems, fulfilment)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 text-[#FAF7F4] text-xs sm:text-sm font-semibold px-4 sm:px-6 py-3 rounded-full transition-transform hover:scale-[1.03]"
                style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #A878CD 100%)' }}
              >
                <span className="hidden sm:inline">Send list on WhatsApp</span>
                <span className="sm:hidden">Send list</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium tracking-wide border transition-all duration-200 ${
        active
          ? 'bg-[#1A1410] text-[#FAF7F4] border-[#1A1410]'
          : 'bg-[#F2EDE8] text-[#1A1410]/60 border-[#E8E0D8] hover:border-[#C9A96E] hover:text-[#1A1410]'
      }`}
    >
      {children}
    </button>
  );
}

function RentalCard({
  item,
  fulfilment,
  selected,
  onToggle,
}: {
  item: RentalItem;
  fulfilment: Fulfilment;
  selected: boolean;
  onToggle: () => void;
}) {
  const detail = item.size ?? item.note;

  return (
    <article
      id={item.slug}
      className={`group scroll-mt-40 flex flex-col bg-[#F2EDE8] border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(26,20,16,0.12)] hover:-translate-y-1 ${
        selected ? 'border-[#C9A96E] ring-1 ring-[#C9A96E]/40' : 'border-[#E8E0D8]'
      }`}
    >
      <div className="relative aspect-[4/5] bg-[#FAF7F4] overflow-hidden">
        <Image
          src={item.images[0]}
          alt={rentalImageAlt(item)}
          fill
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        {/* Second colourway fades in on hover where the catalogue has one. */}
        {item.images[1] && (
          <Image
            src={item.images[1]}
            alt=""
            fill
            aria-hidden="true"
            className="object-contain p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        )}

        <button
          onClick={onToggle}
          aria-pressed={selected}
          aria-label={selected ? `Remove ${item.name} from list` : `Add ${item.name} to list`}
          className={`absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200 ${
            selected
              ? 'bg-[#C9A96E] border-[#C9A96E] text-[#FAF7F4]'
              : 'bg-[#FAF7F4]/90 border-[#E8E0D8] text-[#1A1410]/50 hover:text-[#1A1410] hover:border-[#C9A96E] backdrop-blur-sm'
          }`}
        >
          {selected ? <Check size={15} /> : <Plus size={15} />}
        </button>
      </div>

      <div className="flex-1 flex flex-col p-4 sm:p-5 border-t border-[#E8E0D8]">
        <h3 className="font-sans font-semibold text-sm text-[#1A1410] leading-snug">
          {item.name}
        </h3>
        {detail && (
          <p className="mt-1 text-[11px] tracking-wide uppercase text-[#C9A96E]">{detail}</p>
        )}
        <p className="mt-2 text-xs text-[#1A1410]/50 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        <div className="mt-4 pt-3 border-t border-[#E8E0D8]/70 flex items-baseline justify-between gap-2">
          <span className="font-display text-xl text-[#1A1410]">{formatNaira(item.price)}</span>
          <a
            href={buildEnquiryUrl([item], fulfilment)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-[#C9A96E] hover:text-[#A8834A] transition-colors inline-flex items-center gap-1"
          >
            Reserve
            <ArrowRight size={11} />
          </a>
        </div>
      </div>
    </article>
  );
}
