'use client';

import Link from 'next/link';

export const CtaSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="relative rounded-2xl px-10 py-20 text-center text-white overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0b2545 0%, #0e3460 35%, #0f5a50 70%, #137a60 100%)',
          }}
        >
          {/* Animated diagonal stripes overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -55deg,
                transparent 0px,
                transparent 28px,
                rgba(255,255,255,0.04) 28px,
                rgba(255,255,255,0.04) 56px,
                transparent 56px,
                transparent 84px,
                rgba(255,255,255,0.025) 84px,
                rgba(255,255,255,0.025) 112px
              )`,
              backgroundSize: '160px 160px',
              animation: 'diagonalStripes 8s linear infinite',
            }}
          />

          <style>{`
            @keyframes diagonalStripes {
              0% { background-position: 0 0; }
              100% { background-position: 160px 160px; }
            }
          `}</style>

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
