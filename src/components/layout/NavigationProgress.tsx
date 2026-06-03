'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Thin gold progress bar at the top of the viewport.
 * Starts on internal link clicks, completes when the pathname changes.
 *
 * Gives instant feedback so navigations don't feel "dead" before
 * loading.tsx mounts — important on slower connections / mobile.
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  // Start: detect internal-link clicks anywhere in the document.
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (event.button !== 0) return;

      const link = (event.target as HTMLElement | null)?.closest?.('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;
      if (link.target === '_blank') return;
      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (url.pathname === window.location.pathname) return;
      } catch {
        return;
      }

      setActive(true);
      setProgress(18);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Trickle: ease toward ~82% so there's always headroom for the finishing snap.
  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 82 ? p : p + Math.max(0.6, (82 - p) * 0.08)));
    }, 180);
    return () => clearInterval(interval);
  }, [active]);

  // Complete when the pathname actually flips.
  useEffect(() => {
    if (!active) return;
    setProgress(100);
    const timer = setTimeout(() => {
      setActive(false);
      setProgress(0);
    }, 350);
    return () => clearTimeout(timer);
    // pathname is the trigger — `active` is read but should not re-fire this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-[2px] pointer-events-none"
    >
      <div
        className="h-full transition-[width,opacity] duration-300 ease-out"
        style={{
          width: `${progress}%`,
          opacity: active ? 1 : 0,
          background:
            'linear-gradient(90deg, #C9A96E 0%, #DEC48E 50%, #C9A96E 100%)',
          boxShadow:
            '0 0 10px rgba(201,169,110,0.65), 0 0 4px rgba(201,169,110,0.45)',
        }}
      />
    </div>
  );
}
