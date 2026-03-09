'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ─────────── data ─────────── */
const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Business Clients' },
  { value: '100%', label: 'Client-Focused Approach' },
];

const products = [
  {
    id: 'glyapay',
    name: 'GlyaPay',
    tag: 'Seamless Payment Processing',
    description:
      'A comprehensive payment solution designed for modern businesses. Accelerate revenue and reach new channels with an enterprise-grade platform.',
    bullets: [
      'Multi-currency support for global operations',
      'Real-time analytics and financial reporting',
      'Seamlessly integrates with third-party tools',
      'Enterprise-grade security and PCI compliance',
    ],
    cta: 'Explore GlyaPay',
    flip: false,
  },
  {
    id: 'zenpos',
    name: 'Zenpos',
    tag: 'Built Any Kind of App',
    description:
      'Intuitive point-of-sale system that streamlines retail operations. From inventory management to channel insights, Zenpos transforms how you do business.',
    bullets: [
      'Intuitive interface for fast transactions',
      'Inventory management and analytics',
      'Supports multiple payment methods',
      'Works online and offline',
    ],
    cta: 'Explore Zenpos',
    flip: true,
  },
  {
    id: 'wrike',
    name: 'Wrike',
    tag: 'Project Management Excellence',
    description:
      'Powerful project management and collaboration platform that keeps teams aligned on projects at scale. Enterprise-ready with advanced workflows.',
    bullets: [
      'Custom workflow configuration',
      'Team sharing and real-time updates',
      'Advanced reporting and analytics',
      'Ongoing optimization and support',
    ],
    cta: 'Explore Wrike',
    flip: false,
  },
];

const serviceTabs = ['All', 'Plan', 'Build', 'Integrate'];
const services = [
  { title: 'Digital Strategy & Roadmap', tab: 'Plan', desc: 'Align technology with business goals through a clear, actionable roadmap.' },
  { title: 'Cloud Infrastructure', tab: 'Build', desc: 'Scalable, secure cloud architecture tailored to your workload.' },
  { title: 'API & Systems Integration', tab: 'Integrate', desc: 'Connect your tools and data sources into a unified ecosystem.' },
  { title: 'Product Development', tab: 'Build', desc: 'End-to-end software development from ideation to production.' },
  { title: 'Business Process Automation', tab: 'Integrate', desc: 'Eliminate repetitive work and accelerate operations with smart automation.' },
  { title: 'Technology Consulting', tab: 'Plan', desc: 'Expert advisory to help you make confident technology decisions.' },
];

const testimonials = [
  {
    quote:
      '"BIMS transformed our legacy systems into a modern, efficient platform. The ROI we\'ve seen in the first 12 months far exceeded our expectations."',
    name: 'Sarah Chen',
    title: 'CTO, Clearjet Logistics Inc.',
  },
  {
    quote:
      '"Their team understood our business deeply before writing a single line of code. That\'s rare and it shows in the product they delivered."',
    name: 'Marcus Williams',
    title: 'VP Engineering, FinBridge Corp.',
  },
  {
    quote:
      '"The GlyaPay integration cut our payment processing time by 60%. Exactly the kind of result we needed to scale internationally."',
    name: 'Priya Nair',
    title: 'COO, TradeAxis Ltd.',
  },
];

const blogPosts = [
  { title: 'The Business Leader\'s Guide to Digital Transformation in 2026', date: 'Feb 18, 2026', tag: 'Strategy' },
  { title: 'Why API-First Architecture Is the Future of Enterprise Software', date: 'Feb 10, 2026', tag: 'Technology' },
  { title: 'How Fintech Startups Are Winning With Embedded Finance', date: 'Jan 28, 2026', tag: 'Fintech' },
];

/* ─────────── page ─────────── */
export default function HomePage() {
  const [activeTab, setActiveTab] = useState('All');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const filteredServices =
    activeTab === 'All' ? services : services.filter((s) => s.tab === activeTab);

  const prev = () => setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[testimonialIndex];

  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>

      {/* ══════════════ HERO ══════════════ */}
      <section className="pt-20 pb-16 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: '#111827' }}
          >
            Solutions That Shape<br />Around Your Goals
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: '#6b7280' }}>
            Most software companies may build what they think you need. We build what you actually need.
            Our experience in design, analytics, application, and technology means we solve your challenges through your lens, not ours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full text-sm font-semibold transition-colors"
              style={{ backgroundColor: '#111827', color: '#ffffff' }}
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/services"
              className="px-7 py-3 rounded-full text-sm font-semibold transition-colors"
              style={{ border: '1.5px solid #111827', color: '#111827', backgroundColor: 'transparent' }}
            >
              View Our Services
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold mb-1" style={{ color: '#111827' }}>{value}</p>
                <p className="text-sm" style={{ color: '#9ca3af' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero visual strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="flex items-end gap-4">
          <div className="flex-1 rounded-2xl" style={{ height: '170px', backgroundColor: '#d1d5db' }} />
          <div className="flex-1 rounded-2xl" style={{ height: '220px', backgroundColor: '#c4c9d4' }} />
          <div className="flex-1 rounded-2xl" style={{ height: '170px', backgroundColor: '#d1d5db' }} />
        </div>
      </div>

      {/* ══════════════ WHAT WE DO ══════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>
              WHAT WE DO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#111827' }}>
              How We Put You First
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7280' }}>
              Our client-centric approach ensures every solution is tailored to drive your business forward.
              We immerse ourselves in your industry, challenges, and goals before proposing any technology path.
            </p>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: '#111827', color: '#ffffff' }}
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[200, 240, 200].map((h, i) => (
            <div
              key={i}
              className="rounded-2xl"
              style={{ height: `${h}px`, backgroundColor: '#d1d5db' }}
            />
          ))}
        </div>
      </section>

      {/* ══════════════ OUR PRODUCTS ══════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>
            OUR PRODUCTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#111827' }}>
            Solutions that Drive Business Impact
          </h2>
          <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: '#6b7280' }}>
            Discover products and partnerships that help you operate more efficiently and grow faster.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {products.map((p) => (
            <div
              key={p.id}
              className={`flex flex-col ${p.flip ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}
            >
              {/* Image placeholder */}
              <div
                className="w-full md:w-5/12 rounded-2xl flex-shrink-0"
                style={{ height: '280px', backgroundColor: '#d1d5db' }}
              />
              {/* Content */}
              <div className="flex-1">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                  style={{ backgroundColor: '#f3f4f6', color: '#6b7280' }}
                >
                  {p.tag}
                </span>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#111827' }}>{p.name}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#6b7280' }}>{p.description}</p>
                <ul className="space-y-2 mb-7">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm" style={{ color: '#374151' }}>
                      <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f3f4f6' }}>
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
                  style={{ border: '1.5px solid #111827', color: '#111827' }}
                >
                  {p.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ OUR SERVICES ══════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>
              OUR SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#111827' }}>
              Services Designed Around<br />Your Needs
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
              Comprehensive technology services that address every aspect of your digital journey.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 mt-4 text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: '#111827', color: '#ffffff' }}
            >
              Discover More →
            </Link>
          </div>
        </div>

        {/* Filter tabs */}
        <div
          className="inline-flex items-center gap-1 mb-8 p-1 rounded-full"
          style={{ border: '1px solid #e5e7eb' }}
        >
          {serviceTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
              style={
                activeTab === tab
                  ? { backgroundColor: '#111827', color: '#ffffff' }
                  : { backgroundColor: 'transparent', color: '#6b7280' }
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredServices.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="w-full rounded-xl mb-2" style={{ height: '140px', backgroundColor: '#f3f4f6' }} />
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full self-start"
                style={{ backgroundColor: '#f3f4f6', color: '#6b7280' }}
              >
                {s.tab}
              </span>
              <h4 className="text-base font-bold" style={{ color: '#111827' }}>{s.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#111827' }}>
            What Our Clients Say
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#6b7280' }}>
            Don&apos;t just take our word for it — hear from businesses we&apos;ve helped transform.
          </p>
        </div>

        <div className="rounded-2xl p-10 md:p-14 relative" style={{ backgroundColor: '#ffffff' }}>
          {/* Large quote mark */}
          <div className="text-8xl font-serif leading-none mb-4" style={{ color: '#e5e7eb' }}>"</div>

          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto text-center" style={{ color: '#374151' }}>
            {t.quote}
          </p>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ border: '1.5px solid #e5e7eb', color: '#9ca3af' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{ backgroundColor: i === testimonialIndex ? '#111827' : '#e5e7eb' }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ border: '1.5px solid #e5e7eb', color: '#9ca3af' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Client info */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#d1d5db' }} />
            <div>
              <p className="text-sm font-semibold" style={{ color: '#111827' }}>{t.name}</p>
              <p className="text-xs" style={{ color: '#9ca3af' }}>{t.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ BLOG ══════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>
            BLOGS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#111827' }}>
            Resources for Business Leaders
          </h2>
          <p className="text-sm max-w-sm mx-auto" style={{ color: '#6b7280' }}>
            Insights and tools to help you make informed technology decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              href="/blog"
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="w-full" style={{ height: '180px', backgroundColor: '#d1d5db' }} />
              <div className="p-5 flex flex-col gap-2 flex-1">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full self-start"
                  style={{ backgroundColor: '#fef3c7', color: '#d97706' }}
                >
                  {post.tag}
                </span>
                <p className="text-sm font-semibold leading-snug" style={{ color: '#111827' }}>{post.title}</p>
                <p className="text-xs mt-auto" style={{ color: '#9ca3af' }}>{post.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/blog"
            className="text-sm font-semibold px-7 py-2.5 rounded-full transition-colors"
            style={{ border: '1.5px solid #111827', color: '#111827' }}
          >
            View All Articles →
          </Link>
        </div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left */}
          <div className="md:w-5/12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9ca3af' }}>
              CONTACT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#111827' }}>
              Let&apos;s Talk About<br />Your Business Goals
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
              Have a project in mind? Reach out today. Our team is always ready to help you turn challenges into opportunities.
            </p>

            {/* Contact details */}
            <div className="mt-8 flex flex-col gap-3">
              {[
                { label: 'info@bims.tech' },
                { label: '+1 (800) 247-7676' },
              ].map(({ label }) => (
                <p key={label} className="text-sm font-medium" style={{ color: '#374151' }}>{label}</p>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 rounded-2xl p-8" style={{ backgroundColor: '#ffffff' }}>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none"
                  style={{ border: '1px solid #e5e7eb', color: '#374151' }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none"
                  style={{ border: '1px solid #e5e7eb', color: '#374151' }}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                style={{ border: '1px solid #e5e7eb', color: '#374151' }}
              />
              <input
                type="email"
                placeholder="Your Mail"
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                style={{ border: '1px solid #e5e7eb', color: '#374151' }}
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none"
                style={{ border: '1px solid #e5e7eb', color: '#374151' }}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-semibold transition-colors"
                style={{ backgroundColor: '#111827', color: '#ffffff' }}
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
