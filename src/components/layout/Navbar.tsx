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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const waUrl = buildDefaultWhatsAppUrl();
  const isServicesActive = pathname.startsWith('/services');

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        {/* Floating pill wrapper — transitions from full-width transparent to an elevated island */}
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            scrolled
              ? 'mx-3 sm:mx-6 mt-3 rounded-2xl bg-[#FAF7F4]/92 backdrop-blur-xl border border-[#E8E0D8]/70 shadow-[0_8px_32px_rgba(26,20,16,0.09),0_1px_3px_rgba(26,20,16,0.05)]'
              : ''
          }`}
        >
          <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between">

            {/* Logo mark + wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              aria-label={`${BUSINESS_NAME} — home`}
            >
              <div className="relative h-9 w-9 rounded-[10px] overflow-hidden bg-[#1A1410] shrink-0 ring-1 ring-white/8 group-hover:ring-[#C9A96E]/40 transition-all duration-300 shadow-[0_2px_8px_rgba(26,20,16,0.25)]">
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
                <span className="font-display text-[19px] sm:text-[21px] font-light tracking-wide text-[#1A1410] group-hover:text-[#C9A96E] transition-colors leading-none">
                  Decor{' '}
                  <span className="font-medium italic text-[#C9A96E]">Adorne</span>
                </span>
                <span className="hidden sm:block text-[8.5px] font-medium tracking-[0.22em] uppercase text-[#1A1410]/30 leading-none mt-[5px]">
                  Lagos · Since {FOUNDED_YEAR}
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-xl ${
                    isServicesActive
                      ? 'text-[#C9A96E]'
                      : 'text-[#1A1410]/60 hover:text-[#1A1410] hover:bg-[#F2EDE8]/70'
                  }`}
                >
                  Services
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 mt-px ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[560px]"
                    >
                      <div className="flex rounded-2xl overflow-hidden border border-[#E8E0D8] shadow-[0_20px_56px_rgba(26,20,16,0.14),0_4px_16px_rgba(26,20,16,0.07)]">

                        {/* Service grid */}
                        <div className="flex-1 bg-[#FAF7F4]">
                          <div className="px-5 py-3.5 border-b border-[#E8E0D8]">
                            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C9A96E]">
                              Our Services
                            </p>
                            <p className="text-[#1A1410]/45 text-[11px] mt-0.5">
                              Lagos event decoration & styling
                            </p>
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
                              Browse all services
                              <ArrowRight size={11} />
                            </Link>
                          </div>
                        </div>

                        {/* Editorial panel */}
                        <div className="w-48 bg-[#1A1410] p-5 flex flex-col justify-between shrink-0">
                          <div>
                            <div className="relative h-8 w-8 rounded-lg overflow-hidden mb-4 ring-1 ring-[#C9A96E]/25">
                              <Image
                                src="/images/logo/logo.jpeg"
                                alt=""
                                fill
                                className="object-cover object-[50%_55%]"
                                sizes="32px"
                              />
                            </div>
                            <p className="font-display font-light text-[#FAF7F4]/90 text-xl leading-tight italic">
                              &ldquo;{BUSINESS_TAGLINE}&rdquo;
                            </p>
                            <p className="text-[#C9A96E]/60 text-[10px] tracking-[0.18em] uppercase mt-3">
                              Lagos · Since {FOUNDED_YEAR}
                            </p>
                          </div>
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#C9A96E] hover:text-[#FAF7F4] transition-colors mt-6"
                          >
                            Chat with us
                            <ArrowRight size={11} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other nav links */}
              {SECONDARY_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-xl ${
                    pathname === link.href
                      ? 'text-[#C9A96E]'
                      : 'text-[#1A1410]/60 hover:text-[#1A1410] hover:bg-[#F2EDE8]/70'
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

            {/* Desktop CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#C9A96E] text-[#FAF7F4] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#A8834A] hover:shadow-[0_4px_16px_rgba(201,169,110,0.35)] transition-all duration-300 shrink-0"
            >
              Plan my event
              <ArrowRight size={14} />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#F2EDE8] text-[#1A1410] transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

          </nav>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-30 bg-[#FAF7F4] flex flex-col pt-24 px-8 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-0">
              {/* Services expandable */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 }}
              >
                <button
                  onClick={() => setMobileServicesOpen((o) => !o)}
                  className={`flex items-center justify-between w-full font-display text-4xl font-light py-4 border-b border-[#E8E0D8] transition-colors ${
                    isServicesActive ? 'text-[#C9A96E]' : 'text-[#1A1410] hover:text-[#C9A96E]'
                  }`}
                >
                  Services
                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-4 grid grid-cols-2 gap-x-4 gap-y-1">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm text-[#1A1410]/60 hover:text-[#C9A96E] py-1.5 transition-colors font-medium"
                          >
                            {s.shortName}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setMobileOpen(false)}
                          className="col-span-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A96E] mt-2"
                        >
                          All services <ArrowRight size={11} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Other links */}
              {SECONDARY_NAV.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 1) * 0.07 + 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-display text-4xl font-light block py-4 border-b border-[#E8E0D8] transition-colors ${
                      pathname === link.href
                        ? 'text-[#C9A96E]'
                        : 'text-[#1A1410] hover:text-[#C9A96E]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              className="mt-10"
            >
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#FAF7F4] font-medium px-7 py-3.5 rounded-full text-lg hover:bg-[#A8834A] transition-colors"
              >
                Plan my event
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Drawer footer with logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.48 }}
              className="mt-auto mb-10 flex items-center gap-3.5"
            >
              <div className="relative h-11 w-11 rounded-xl overflow-hidden shrink-0 shadow-[0_2px_8px_rgba(26,20,16,0.15)]">
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="Decor Adorné"
                  fill
                  className="object-cover object-[50%_55%]"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="font-display text-base font-light text-[#1A1410]/70">
                  Decor <span className="italic text-[#C9A96E] font-medium">Adorne</span>
                </p>
                <p className="text-[10px] font-medium tracking-widest uppercase text-[#1A1410]/30 mt-0.5">
                  Lagos &middot; Nigeria
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
