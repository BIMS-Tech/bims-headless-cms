'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then(m => m.DotLottieReact),
  { ssr: false }
);

export const CtaSection = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let canvasObserver: MutationObserver | null = null;

    const forceCanvasSize = () => {
      const canvas = wrap.querySelector('canvas');
      if (!canvas) return;
      const { width, height } = wrap.getBoundingClientRect();
      if (!width || !height) return;
      canvas.style.setProperty('width', `${width}px`, 'important');
      canvas.style.setProperty('height', `${height}px`, 'important');
      canvas.style.setProperty('position', 'absolute', 'important');
      canvas.style.setProperty('top', '0', 'important');
      canvas.style.setProperty('left', '0', 'important');

      // Watch the canvas itself so we re-force if DotLottie overrides after insertion
      if (!canvasObserver) {
        canvasObserver = new MutationObserver(forceCanvasSize);
        canvasObserver.observe(canvas, { attributes: true });
      }
    };

    const observer = new MutationObserver(forceCanvasSize);
    observer.observe(wrap, { childList: true, subtree: true });

    // Retry on a schedule to catch DotLottie initialising after the first mutation
    const timers = [100, 300, 600, 1200].map(t => setTimeout(forceCanvasSize, t));

    window.addEventListener('resize', forceCanvasSize);

    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
      canvasObserver?.disconnect();
      window.removeEventListener('resize', forceCanvasSize);
    };
  }, []);

  return (
    <div className="bg-white pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" style={{ marginBottom: '-80px' }}>
        <div
          className="relative rounded-2xl px-10 py-20 text-center text-white overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0b2545 0%, #0e3460 35%, #0f5a50 70%, #137a60 100%)',
          }}
        >
          {/* Lottie background — canvas forced to fill via MutationObserver */}
          <div
            ref={wrapRef}
            className="cta-lottie-wrap pointer-events-none absolute inset-0 overflow-hidden"
            style={{ opacity: 0.4 }}
          >
            <DotLottieReact
              src="/footer-cta.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Ready to Get Started?
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-10"
              style={{ color: 'rgba(255,255,255,0.82)' }}
            >
              Let&apos;s discuss how we can turn your business challenges into opportunities. Our team is
              ready to help you build solutions that drive real results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200 hover:bg-white hover:text-gray-900"
            >
              Schedule a Free Consultation
              <span className="text-lg leading-none">›</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
