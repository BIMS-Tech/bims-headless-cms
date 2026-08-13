'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then(m => m.DotLottieReact),
  { ssr: false }
);

// Aspect ratio of the source animation (footer-cta.lottie is 4000x1000).
const LOTTIE_ASPECT_RATIO = '4 / 1';

export const CtaSection = () => {
  return (
    <div className="bg-white pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" style={{ marginBottom: '-80px' }}>
        <div
          className="relative rounded-2xl px-10 py-20 text-center text-white overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0b2545 0%, #0e3460 35%, #0f5a50 70%, #137a60 100%)',
          }}
        >
          {/* Lottie background. The wrap is the clipping box; the inner element takes a
              definite height from it and derives its width from the source aspect ratio,
              so the animation covers the card without being distorted. */}
          <div
            className="cta-lottie-wrap pointer-events-none absolute inset-0 overflow-hidden"
            style={{ opacity: 0.4 }}
          >
            <div
              className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2"
              style={{ aspectRatio: LOTTIE_ASPECT_RATIO, minWidth: '100%' }}
            >
              <DotLottieReact
                src="/footer-cta.lottie"
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
              />
            </div>
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
