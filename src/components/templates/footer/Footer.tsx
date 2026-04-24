import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@src/components/shared/container/Container';
import { CtaSection } from './CtaSection';

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);


const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navColumns = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Giyapay', href: '/giyapay' },
      { label: 'Wrike', href: '/wrike' },
      { label: 'Zenpos', href: '/zenpos' },
      { label: 'Maretinda', href: '/maretinda' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Website Development and Design', href: '/services' },
      { label: 'Digitization Consulting Services', href: '/services' },
      { label: 'Digital Transformation Strategies', href: '/services' },
      { label: 'Training and Support Services', href: '/services' },
      { label: 'Integration Solutions', href: '/services' },
      { label: 'Product Management', href: '/services' },
    ],
  },
];

export const Footer = () => {
  return (
    <>
      <CtaSection />

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a3a6c', color: '#ffffff', paddingTop: '100px' }}>
        <Container>
          {/* Main Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-12 py-14"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}
          >
            {/* Brand Column */}
            <div className="flex flex-col gap-5">
              <Image
                src="/logo1.png"
                alt="BIMS Logo"
                width={130}
                height={44}
                className="brightness-0 invert"
              />

              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Stay informed with the latest news and updates by subscribing to our marketing emails.
              </p>

              {/* Email Subscribe */}
              <div className="flex rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Your Email..."
                  className="flex-1 min-w-0 px-4 py-2.5 text-sm outline-none"
                  style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}
                />
                <button
                  className="px-5 py-2.5 text-sm font-semibold whitespace-nowrap"
                  style={{ backgroundColor: '#1e3a7a', color: '#ffffff' }}
                >
                  Send
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-5 mt-1">
                {[
                  { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
                  { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition-opacity hover:opacity-70"
                    style={{ color: '#ffffff' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav Columns */}
            {navColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-base font-bold mb-5" style={{ color: '#ffffff' }}>
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-opacity hover:opacity-70"
                        style={{ color: 'rgba(255,255,255,0.8)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div
            className="py-5 flex flex-col md:flex-row md:justify-between items-center gap-3 text-sm"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            <span>©2026-2027 BIMS Technologies, Inc. All rights reserved.</span>
            <div className="flex gap-10">
              <Link
                href="/privacy-policy"
                className="hover:opacity-75 transition-opacity"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:opacity-75 transition-opacity"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
