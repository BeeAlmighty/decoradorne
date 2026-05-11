'use client';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

/**
 * Animated radial-gradient blobs with optional pointer-follow interactivity.
 * Colors default to Decor Adorne brand palette (gold, rose, sage on espresso).
 * All color props accept RGB triplets: "201, 169, 110"
 */
export function BackgroundGradientAnimation({
  firstColor     = '201, 169, 110',   // #C9A96E — primary gold
  secondColor    = '222, 196, 142',   // #DEC48E — gold light
  thirdColor     = '168, 131, 74',    // #A8834A — gold dark
  fourthColor    = '212, 135, 138',   // #D4878A — rose muted
  fifthColor     = '139, 168, 136',   // #8BA888 — sage
  pointerColor   = '201, 169, 110',   // #C9A96E — gold
  bgStart        = '#1A1410',         // espresso
  bgEnd          = '#211912',         // espresso lighter
  size           = '60%',
  blendingValue  = 'hard-light',
  children,
  className,
  interactive    = true,
  containerClassName,
}: {
  firstColor?:         string;
  secondColor?:        string;
  thirdColor?:         string;
  fourthColor?:        string;
  fifthColor?:         string;
  pointerColor?:       string;
  bgStart?:            string;
  bgEnd?:              string;
  size?:               string;
  blendingValue?:      string;
  children?:           React.ReactNode;
  className?:          string;
  interactive?:        boolean;
  containerClassName?: string;
}) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const interactiveRef = useRef<HTMLDivElement>(null);

  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const tgXRef  = useRef(0);
  const tgYRef  = useRef(0);
  const rafRef  = useRef<number | null>(null);

  const [isSafari, setIsSafari] = useState(false);

  // Apply CSS custom properties to the container (not body — scoped)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty('--da-bg-start',    bgStart);
    el.style.setProperty('--da-bg-end',      bgEnd);
    el.style.setProperty('--da-c1',          firstColor);
    el.style.setProperty('--da-c2',          secondColor);
    el.style.setProperty('--da-c3',          thirdColor);
    el.style.setProperty('--da-c4',          fourthColor);
    el.style.setProperty('--da-c5',          fifthColor);
    el.style.setProperty('--da-cp',          pointerColor);
    el.style.setProperty('--da-size',        size);
    el.style.setProperty('--da-blend',       blendingValue);
  }, [bgStart, bgEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!interactive) return;
    function tick() {
      if (!interactiveRef.current) { rafRef.current = requestAnimationFrame(tick); return; }
      curXRef.current += (tgXRef.current - curXRef.current) / 20;
      curYRef.current += (tgYRef.current - curYRef.current) / 20;
      interactiveRef.current.style.transform =
        `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`;
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [interactive]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    tgXRef.current = e.clientX - rect.left;
    tgYRef.current = e.clientY - rect.top;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      className={classNames(
        /* isolate creates a stacking context so z-0/z-10 are reliable within this element */
        'relative isolate overflow-hidden',
        'bg-[linear-gradient(40deg,var(--da-bg-start),var(--da-bg-end))]',
        containerClassName,
      )}
    >
      {/* SVG goo filter — hidden, just registers the filter for use below */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="da-blur-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Blob layer — FIRST in DOM, explicit z-0, always behind children */}
      <div
        aria-hidden="true"
        className={classNames(
          'absolute inset-0 z-0',
          isSafari ? 'blur-2xl' : '[filter:url(#da-blur-goo)_blur(40px)]',
        )}
      >
        <div className={classNames(
          'absolute [background:radial-gradient(circle_at_center,rgba(var(--da-c1),0.9)_0,rgba(var(--da-c1),0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--da-blend)] w-[var(--da-size)] h-[var(--da-size)]',
          'top-[calc(50%-var(--da-size)/2)] left-[calc(50%-var(--da-size)/2)]',
          '[transform-origin:center_center] animate-da-first opacity-100',
        )} />
        <div className={classNames(
          'absolute [background:radial-gradient(circle_at_center,rgba(var(--da-c2),0.8)_0,rgba(var(--da-c2),0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--da-blend)] w-[var(--da-size)] h-[var(--da-size)]',
          'top-[calc(50%-var(--da-size)/2)] left-[calc(50%-var(--da-size)/2)]',
          '[transform-origin:calc(50%-400px)] animate-da-second opacity-100',
        )} />
        <div className={classNames(
          'absolute [background:radial-gradient(circle_at_center,rgba(var(--da-c3),0.8)_0,rgba(var(--da-c3),0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--da-blend)] w-[var(--da-size)] h-[var(--da-size)]',
          'top-[calc(50%-var(--da-size)/2)] left-[calc(50%-var(--da-size)/2)]',
          '[transform-origin:calc(50%+400px)] animate-da-third opacity-100',
        )} />
        <div className={classNames(
          'absolute [background:radial-gradient(circle_at_center,rgba(var(--da-c4),0.7)_0,rgba(var(--da-c4),0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--da-blend)] w-[var(--da-size)] h-[var(--da-size)]',
          'top-[calc(50%-var(--da-size)/2)] left-[calc(50%-var(--da-size)/2)]',
          '[transform-origin:calc(50%-200px)] animate-da-fourth opacity-60',
        )} />
        <div className={classNames(
          'absolute [background:radial-gradient(circle_at_center,rgba(var(--da-c5),0.7)_0,rgba(var(--da-c5),0)_50%)_no-repeat]',
          '[mix-blend-mode:var(--da-blend)] w-[var(--da-size)] h-[var(--da-size)]',
          'top-[calc(50%-var(--da-size)/2)] left-[calc(50%-var(--da-size)/2)]',
          '[transform-origin:calc(50%-800px)_calc(50%+800px)] animate-da-fifth opacity-80',
        )} />

        {interactive && (
          <div
            ref={interactiveRef}
            className={classNames(
              'absolute [background:radial-gradient(circle_at_center,rgba(var(--da-cp),0.6)_0,rgba(var(--da-cp),0)_50%)_no-repeat]',
              '[mix-blend-mode:var(--da-blend)] w-full h-full -top-1/2 -left-1/2 opacity-60',
            )}
          />
        )}
      </div>

      {/* Children — z-10 guarantees paint above the z-0 blob layer */}
      <div className={classNames('relative z-10', className)}>
        {children}
      </div>
    </div>
  );
}
