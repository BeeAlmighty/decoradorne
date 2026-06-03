'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { SERVICES, BUSINESS_NAME, BUSINESS_TAGLINE, FOUNDED_YEAR } from '@/lib/constants';
import { buildDefaultWhatsAppUrl } from '@/lib/whatsapp';

const SECONDARY_NAV = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const;

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const WA_URL = buildDefaultWhatsAppUrl();

/**
 * All nav color tokens derived from a single boolean.
 * Never duplicates state — one source drives every appearance decision.
 */
function useNavTokens(scrolled: boolean) {
  return {
    wordmark:    scrolled ? 'text-[#1A1410]'      : 'text-[#FAF7F4]',
    wordmarkSub: scrolled ? 'text-[#1A1410]/30'   : 'text-[#FAF7F4]/40',
    link:        scrolled ? 'text-[#1A1410]/60'   : 'text-[#FAF7F4]/80',
    linkHover:   scrolled ? 'hover:text-[#1A1410] hover:bg-[#F2EDE8]/80'
                           : 'hover:text-[#FAF7F4] hover:bg-[#FAF7F4]/10',
    icon:        scrolled ? 'text-[#1A1410]'      : 'text-[#FAF7F4]',
    iconHover:   scrolled ? 'hover:bg-[#F2EDE8]'  : 'hover:bg-[#FAF7F4]/12',
    logoRing:    scrolled ? 'ring-black/10'        : 'ring-white/20',
  } as const;
}

export function Navbar() {
  const [scrolled, setScrolled]               = useState(false);
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [servicesOpen, setServicesOpen]       = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 40;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isServicesActive = pathname.startsWith('/services');
  const t = useNavTokens(scrolled);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">

        {/* ── Gradient veil ───────────────────────────────────────────
            Guarantees legibility over any hero image regardless of tone.
            Pure opacity transition — compositor-thread, zero jank. */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 via-black/20 to-transparent transition-opacity duration-500 ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* ── Floating pill ───────────────────────────────────────────
            Layout (mx, mt, rounded) is FIXED — never changes.
            Only compositor-thread properties animate:
              • backgroundColor  →  Framer Motion
              • borderColor      →  Framer Motion
              • boxShadow        →  Framer Motion
              • backdropFilter   →  CSS transition via style prop
                                    (needs explicit start value in style,
                                     not a class, so the browser has both
                                     endpoints and can interpolate smoothly) */}
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled
              ? 'rgba(250,247,244,0.93)'
              : 'rgba(250,247,244,0)',
            borderColor: scrolled
              ? 'rgba(232,224,216,0.70)'
              : 'rgba(232,224,216,0)',
            boxShadow: scrolled
              ? '0 8px 40px rgba(26,20,16,0.10), 0 1px 3px rgba(26,20,16,0.06)'
              : '0 0px 0px rgba(26,20,16,0), 0 0px 0px rgba(26,20,16,0)',
          }}
          transition={{ duration: 0.45, ease: EASE }}
          style={{
            backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
            transition: [
              'backdrop-filter 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
              '-webkit-backdrop-filter 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
            ].join(', '),
          }}
          className="relative pointer-events-auto mx-3 sm:mx-6 mt-3 rounded-2xl border"
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-7 h-16 sm:h-[70px] flex items-center justify-between">

            {/* ── Logo ──────────────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              aria-label={`${BUSINESS_NAME} home`}
            >
              <div className={`relative h-9 w-9 rounded-[10px] overflow-hidden bg-[#1A1410] shrink-0 ring-1 ${t.logoRing} group-hover:ring-[#C9A96E]/50 transition-all duration-300 shadow-[0_2px_10px_rgba(26,20,16,0.40)]`}>
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="Decor Adorné mark"
                  fill
                  className="object-cover object-[50%_55%]"
                  sizes="36px"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-display text-[19px] sm:text-[21px] font-light tracking-wide leading-none transition-colors duration-300 ${t.wordmark} group-hover:text-[#C9A96E]`}>
                  Decor{' '}
                  <span className="font-medium italic text-[#C9A96E]">Adorne</span>
                </span>
                <span className={`hidden sm:block text-[8px] font-medium tracking-[0.24em] uppercase leading-none mt-[5px] transition-colors duration-300 ${t.wordmarkSub}`}>
                  Since {FOUNDED_YEAR} · Nationwide
                </span>
              </div>
            </Link>

            {/* ── Desktop links ─────────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-0.5">

              {/* Services + dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium tracking-wide rounded-xl transition-all duration-200 ${
                    isServicesActive ? 'text-[#C9A96E]' : `${t.link} ${t.linkHover}`
                  }`}
                >
                  Services
                  <ChevronDown
                    size={13}
                    className={`mt-px transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.16, ease: EASE }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[560px]"
                    >
                      <div className="flex rounded-2xl overflow-hidden border border-[#E8E0D8] shadow-[0_20px_56px_rgba(26,20,16,0.14),0_4px_16px_rgba(26,20,16,0.07)]">
                        {/* Service grid */}
                        <div className="flex-1 bg-[#FAF7F4]">
                          <div className="px-5 py-3.5 border-b border-[#E8E0D8]">
                            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C9A96E]">Our Services</p>
                            <p className="text-[#1A1410]/45 text-[11px] mt-0.5">Arabian-inspired event styling</p>
                          </div>
                          <div className="grid grid-cols-2 gap-0 p-2 pt-2.5">
                            {SERVICES.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group/item flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-[#F2EDE8] transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#C9A96E] opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                                <span className="text-[13px] text-[#1A1410]/65 group-hover/item:text-[#1A1410] font-medium transition-colors leading-snug">
                                  {service.shortName}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="px-5 py-3 border-t border-[#E8E0D8] mt-1">
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#C9A96E] hover:text-[#A8834A] transition-colors"
                            >
                              Browse all services <ArrowRight size={11} />
                            </Link>
                          </div>
                        </div>
                        {/* Editorial panel */}
                        <div className="w-48 bg-[#1A1410] p-5 flex flex-col justify-between shrink-0">
                          <div>
                            <div className="relative h-8 w-8 rounded-lg overflow-hidden mb-4 ring-1 ring-[#C9A96E]/25">
                              <Image src="/images/logo/logo.jpeg" alt="" fill className="object-cover object-[50%_55%]" sizes="32px" />
                            </div>
                            <p className="font-display font-light text-[#FAF7F4]/90 text-xl leading-tight italic">
                              &ldquo;{BUSINESS_TAGLINE}&rdquo;
                            </p>
                            <p className="text-[#C9A96E]/60 text-[10px] tracking-[0.18em] uppercase mt-3">
                              Since {FOUNDED_YEAR} · Nationwide
                            </p>
                          </div>
                          <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#C9A96E] hover:text-[#FAF7F4] transition-colors mt-6"
                          >
                            Chat with us <ArrowRight size={11} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other links */}
              {SECONDARY_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium tracking-wide rounded-xl transition-all duration-200 ${
                    pathname === link.href ? 'text-[#C9A96E]' : `${t.link} ${t.linkHover}`
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A96E]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* ── Desktop CTA ───────────────────────────────────────── */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-[#FAF7F4] text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shrink-0 hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #A878CD 100%)', boxShadow: '0 4px 16px rgba(168,120,205,0.30)' }}
            >
              Style my event <ArrowRight size={14} />
            </a>

            {/* ── Mobile hamburger ──────────────────────────────────── */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ${t.icon} ${t.iconHover}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.14 }} className="flex">
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.14 }} className="flex">
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

          </nav>
        </motion.div>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Scrim */}
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[44] bg-[#1A1410]/60 backdrop-blur-[2px] md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.34, ease: EASE }}
              className="fixed top-0 right-0 bottom-0 z-[45] w-[84vw] max-w-[340px] flex flex-col bg-[#FAF7F4] shadow-[-20px_0_60px_rgba(26,20,16,0.22)] md:hidden"
            >
              {/* Drawer top bar */}
              <div className="flex items-center justify-between h-16 px-6 border-b border-[#E8E0D8]">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 group">
                  <div className="relative h-7 w-7 rounded-lg overflow-hidden bg-[#1A1410] shrink-0 ring-1 ring-black/8 group-hover:ring-[#C9A96E]/40 transition-all">
                    <Image src="/images/logo/logo.jpeg" alt="Decor Adorné" fill className="object-cover object-[50%_55%]" sizes="28px" />
                  </div>
                  <span className="font-display text-base font-light text-[#1A1410] group-hover:text-[#C9A96E] transition-colors leading-none">
                    Decor <span className="italic text-[#C9A96E] font-medium">Adorne</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#1A1410]/50 hover:text-[#1A1410] hover:bg-[#F2EDE8] transition-all"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-0">
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05, ease: 'easeOut' }}
                >
                  <button
                    onClick={() => setMobileServicesOpen((o) => !o)}
                    className={`w-full flex items-center justify-between py-4 border-b border-[#E8E0D8]/60 transition-colors ${isServicesActive ? 'text-[#C9A96E]' : 'text-[#1A1410] hover:text-[#C9A96E]'}`}
                  >
                    <span className="font-display text-[2.2rem] leading-none font-light">Services</span>
                    <ChevronDown size={18} className={`text-[#1A1410]/35 transition-transform duration-200 shrink-0 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2.5 pb-4 grid grid-cols-2 gap-x-3 gap-y-0.5">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="text-[13px] text-[#1A1410]/55 hover:text-[#C9A96E] py-1.5 transition-colors font-medium"
                            >
                              {s.shortName}
                            </Link>
                          ))}
                          <Link href="/services" onClick={() => setMobileOpen(false)} className="col-span-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A96E] mt-2.5">
                            All services <ArrowRight size={11} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {SECONDARY_NAV.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i + 1) * 0.055 + 0.05, ease: 'easeOut' }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-display text-[2.2rem] leading-none font-light block py-4 border-b border-[#E8E0D8]/60 transition-colors ${pathname === link.href ? 'text-[#C9A96E]' : 'text-[#1A1410] hover:text-[#C9A96E]'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="bg-[#1A1410] px-6 py-6">
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, ease: 'easeOut' }}
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[#FAF7F4] font-semibold px-6 py-3.5 rounded-full text-sm w-full"
                  style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #A878CD 100%)' }}
                >
                  Style my event <ArrowRight size={15} />
                </motion.a>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.32 }}
                  className="text-center text-[9px] font-medium tracking-[0.25em] uppercase text-[#FAF7F4]/25 mt-4"
                >
                  Since {FOUNDED_YEAR} · Lagos · Nationwide
                </motion.p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
