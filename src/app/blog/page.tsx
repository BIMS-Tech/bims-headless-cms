'use client';

import { useState } from 'react';

const categories = ['All', 'Tech Skills', 'Fintech', 'Technology', 'Professional Services'];
const blogPosts = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Hero ── */}
        <section className="pt-16 pb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-5" style={{ color: '#111827' }}>
            Insights for Business<br /> &amp; Technology Leaders
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-10" style={{ color: '#6b7280' }}>
            Practical articles on digital transformation, software, data, and business growth.
          </p>

          {/* Featured thumbnails — full width, middle card taller */}
          <div className="flex items-end gap-4 mb-5">
            <div className="flex-1 rounded-2xl" style={{ height: '170px', backgroundColor: '#d1d5db' }} />
            <div className="flex-1 rounded-2xl" style={{ height: '220px', backgroundColor: '#d1d5db' }} />
            <div className="flex-1 rounded-2xl" style={{ height: '170px', backgroundColor: '#d1d5db' }} />
          </div>

          {/* Search bar — full width */}
          <div className="relative w-full">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2"
              style={{ color: '#9ca3af' }}
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search Resources"
              className="w-full pl-12 pr-6 py-4 rounded-full focus:outline-none"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                color: '#374151',
                fontSize: '0.9rem',
              }}
            />
          </div>
        </section>

        {/* ── Feature Article ── */}
        <section className="mb-20">
          {/* Label */}
          <p className="text-sm font-bold mb-6" style={{ color: '#111827' }}>
            <span style={{ color: '#f59e0b' }}>⭐</span> FEATURE
          </p>

          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Image */}
            <div
              className="w-full md:w-1/2 rounded-2xl flex-shrink-0"
              style={{ height: '300px', backgroundColor: '#d1d5db' }}
            />

            {/* Content */}
            <div className="w-full md:w-1/2 pt-1 flex flex-col justify-center">
              <span
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-5 self-start"
                style={{ backgroundColor: '#f3f4f6', color: '#6b7280' }}
              >
                Digital Transformation
              </span>

              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4" style={{ color: '#111827' }}>
                The Business Leader&apos;s Guide to Digital Transformation in 2026
              </h2>

              <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7280' }}>
                Technology is no longer optional — it&apos;s the foundation of competitive business. This comprehensive guide walks through the key frameworks, common pitfalls, and proven strategies that modern companies use to successfully navigate digital change.
              </p>

              <div className="flex items-center gap-5 mb-7" style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Feb 18, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  12 min read
                </span>
              </div>

              <button
                className="self-start text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
                style={{ backgroundColor: '#111827', color: '#ffffff' }}
              >
                Read Article →
              </button>
            </div>
          </div>
        </section>

        {/* ── Blog Grid ── */}
        <section className="mb-16">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-6">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#9ca3af' }}
              >
                OUR BLOG
              </p>
              <h3 className="text-3xl font-bold leading-tight" style={{ color: '#111827' }}>
                View All<br />Knowledge Posts
              </h3>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#6b7280' }}>
              Our client-centric approach ensures every solution is tailored to drive your business forward. Our client-centric approach ensures every solution is tailored to drive your business forward.
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap items-center gap-1 mb-8 p-1 rounded-full self-start"
            style={{ border: '1px solid #e5e7eb', display: 'inline-flex' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={
                  activeCategory === cat
                    ? { backgroundColor: '#111827', color: '#ffffff' }
                    : { backgroundColor: 'transparent', color: '#6b7280' }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards — 3×2 grid, tall cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {blogPosts.map(({ id }) => (
              <div
                key={id}
                className="rounded-2xl"
                style={{ height: '220px', backgroundColor: '#d1d5db' }}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="text-sm font-semibold px-7 py-2.5 rounded-full transition-colors"
              style={{ border: '1px solid #111827', color: '#111827', backgroundColor: 'transparent' }}
            >
              Load More Articles →
            </button>
          </div>
        </section>

        {/* ── Stay Updated ── */}
        <section className="mb-20">
          <div
            className="rounded-2xl px-8 py-12 max-w-2xl mx-auto text-center"
            style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}
          >
            <div
              className="w-10 h-10 rounded-xl mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: '#f3f4f6' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3" style={{ color: '#111827' }}>Stay Updated</h3>
            <p className="text-sm mb-8 max-w-sm mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
              Get insights on technology, strategy, and digital transformation delivered to your inbox.
            </p>
            <div className="flex gap-2 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-2/3 rounded-full px-5 py-3 text-sm focus:outline-none"
                style={{ border: '1px solid #e5e7eb', color: '#374151' }}
              />
              <button
                className="text-sm font-semibold px-6 py-3 rounded-full whitespace-nowrap transition-colors"
                style={{ backgroundColor: '#111827', color: '#ffffff' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
