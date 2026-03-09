import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@src/components/shared/container/Container';

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const navColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services' },
      { label: 'Mobile Apps', href: '/services' },
      { label: 'Cloud Solutions', href: '/services' },
      { label: 'AI & Machine Learning', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Case Studies', href: '/blog' },
      { label: 'Support', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];

export const Footer = () => {
  return (
    <>
      {/* CTA Section — floats above footer */}
      <div className="bg-white">
        <Container>
          <div className="relative z-10 -mb-20">
            <div className="bg-[#f5f5f5] rounded-3xl px-10 py-14 text-center shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how we can turn your business challenges into opportunities. Our team is ready to help you build solutions that drive real results.
              </p>
              <Link
                href="/contact"
                className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a2233] pt-36 pb-0" style={{ color: '#ffffff' }}>
        <Container>
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-14" style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
            {/* Brand Column */}
            <div className="md:col-span-1 flex flex-col gap-5">
              <Image src="/logo1.png" alt="BIMS Logo" width={110} height={38} className="brightness-0 invert" />

              <div className="mt-1">
                <p className="text-sm font-semibold mb-3" style={{ color: '#ffffff' }}>Stay updated</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 rounded-l-full px-4 py-2.5 text-sm outline-none"
                    style={{ color: '#111827', backgroundColor: '#ffffff' }}
                  />
                  <button
                    className="text-sm font-medium px-4 py-2.5 rounded-r-full whitespace-nowrap transition-colors"
                    style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                We build technology solutions shaped around your goals. Your success is our only metric that matters.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mt-1">
                {[
                  { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
                  { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav Columns */}
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {navColumns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#64748b' }}>
                    {col.title}
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm transition-colors"
                          style={{ color: '#cbd5e1' }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 flex flex-col md:flex-row md:justify-between items-center gap-3 text-xs" style={{ color: '#475569' }}>
            <span>© 2026 BIMS Technologies, Inc. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="transition-colors" style={{ color: '#475569' }}>Privacy Policy</Link>
              <Link href="/terms-of-service" className="transition-colors" style={{ color: '#475569' }}>Terms of Service</Link>
              <Link href="/cookie-policy" className="transition-colors" style={{ color: '#475569' }}>Cookie Policy</Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
