'use client';

import { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const LottieHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <style>{`
        .lottie-hero-wrap,
        .lottie-hero-wrap > div,
        .lottie-hero-wrap canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
        }
      `}</style>
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
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </>
  );
};
