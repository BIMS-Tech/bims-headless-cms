'use client';

import { useEffect, useRef } from 'react';
import { DotLottieReact, type DotLottie } from '@lottiefiles/dotlottie-react';

export const LottieHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const startShrink = window.innerHeight * 0.25;
      const endShrink = window.innerHeight * 0.85;
      const progress = Math.max(0, Math.min((scrollY - startShrink) / (endShrink - startShrink), 1));
      const scale = 1 - progress * 0.45;
      containerRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // dotlottie-web debounces its own resize by 100ms, so during a drag-resize the
  // canvas backing store lags its CSS box and the browser stretches a stale bitmap.
  // Drive resize() ourselves, throttled to one call per frame, to keep them in step.
  useEffect(() => {
    let frame = 0;

    const handleResize = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        dotLottieRef.current?.resize();
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '160vw',
          height: '160%',
          minHeight: '160%',
        }}
      >
        <div className="lottie-hero-wrap" style={{ width: '100%', height: '100%', transform: 'scaleY(-1)' }}>
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
    </>
  );
};
