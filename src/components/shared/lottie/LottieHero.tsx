'use client';

import { useCallback, useEffect, useRef } from 'react';
import { DotLottieReact, type DotLottie } from '@lottiefiles/dotlottie-react';

/** waves blue.lottie is 1080x500. */
const RATIO = 1080 / 500;
/** Desktop shows the wave at 160% of the viewport width; keep that look. */
const WIDTH_FACTOR = 1.6;

export const LottieHero = () => {
  const clipRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);
  const scaleRef = useRef(1);

  /**
   * Size the wave like `object-fit: cover`.
   *
   * The animation has an opaque background baked in, so any part of the hero it does
   * NOT cover shows as a hard-edged block against the section gradient. It also must
   * keep its 1080:500 ratio — sizing it as a % of hero height gave a portrait box on
   * phones, which the player letterboxed. Cover on both axes solves both problems.
   */
  const applySize = useCallback(() => {
    const clip = clipRef.current;
    const box = boxRef.current;
    if (!clip || !box) return;

    const { width, height } = clip.getBoundingClientRect();
    if (!width || !height) return;

    const boxWidth = Math.max(width * WIDTH_FACTOR, height * RATIO);
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxWidth / RATIO}px`;
  }, []);

  useEffect(() => {
    applySize();

    const handleScroll = () => {
      if (!boxRef.current) return;
      const scrollY = window.scrollY;
      const startShrink = window.innerHeight * 0.25;
      const endShrink = window.innerHeight * 0.85;
      const progress = Math.max(0, Math.min((scrollY - startShrink) / (endShrink - startShrink), 1));
      scaleRef.current = 1 - progress * 0.45;
      boxRef.current.style.transform = `translateX(-50%) scale(${scaleRef.current})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [applySize]);

  // dotlottie-web debounces its own resize by 100ms, so during a drag-resize the
  // canvas backing store lags its CSS box and the browser stretches a stale bitmap.
  // Re-measure and drive resize() ourselves, throttled to one call per frame.
  useEffect(() => {
    let frame = 0;

    const handleResize = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        applySize();
        dotLottieRef.current?.resize();
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [applySize]);

  return (
    <div ref={clipRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={boxRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          transformOrigin: 'bottom center',
        }}
      >
        <div
          className="lottie-hero-wrap"
          style={{ width: '100%', height: '100%', transform: 'scaleY(-1)' }}
        >
          <DotLottieReact
            src="/waves blue.lottie"
            loop
            autoplay
            dotLottieRefCallback={instance => {
              dotLottieRef.current = instance;
            }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};
