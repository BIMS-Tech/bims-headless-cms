'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@src/components/shared/container';
import React, { useEffect, useRef, useState } from 'react';

import { serviceGroups as servicesDropdown } from '@src/lib/services';

const mobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't leave the drawer open behind a resize into the desktop layout.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" title="Homepage" className="shrink-0">
          <Image src="/logo1.png" alt="BIMS Logo" width={110} height={38} priority />
        </Link>

        {/* ── Rounded pill nav — desktop only; below lg the drawer below takes over ── */}
        <div className="hidden lg:flex items-center gap-11 rounded-[20px] border border-background bg-white px-8 h-[59px] shadow-control">
          <Link
            href="/"
            className="font-inter text-base font-semibold text-primary whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            Home
          </Link>

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            {/* A Link, not a button: clicking "Services" navigates to the Services page.
                The dropdown still opens on hover, and on focus so keyboard users can reach it. */}
            <Link
              href="/services"
              aria-expanded={servicesOpen}
              onFocus={openServices}
              className="flex items-center gap-1 font-inter text-base font-medium text-black whitespace-nowrap cursor-pointer hover:text-primary transition-colors"
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              >
                <path
                  d="M1.55554 4.22223L5.99999 8.66667L10.4444 4.22223"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Transparent bridge — fills the gap between button and dropdown so mouseLeave doesn't fire mid-crossing */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 h-8 w-[860px]" />

            {/* Dropdown panel — offset accounts for remaining pill height + 8px visual gap */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+28px)] z-[100]
                         transition-all duration-200
                         ${servicesOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-1'}`}
            >
              {/* White card */}
              <div
                className="rounded-[10px] bg-white p-12 flex gap-12 w-max"
                style={{ boxShadow: '0 4px 24px 4px rgba(0,0,0,0.12)' }}
              >
                {/* Column 1: Plan + Build */}
                <div className="flex flex-col gap-8 w-52">
                  {servicesDropdown.slice(0, 2).map(({ heading, items }) => (
                    <div key={heading} className="flex flex-col gap-3">
                      <p className="font-inter text-lg font-semibold text-text">{heading}</p>
                      <div className="flex flex-col gap-1.5">
                        {items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            className="font-inter text-sm text-primary hover:underline"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2: Integrate + Analyze */}
                <div className="flex flex-col gap-8 w-56">
                  {servicesDropdown.slice(2, 4).map(({ heading, items }) => (
                    <div key={heading} className="flex flex-col gap-3">
                      <p className="font-inter text-lg font-semibold text-text">{heading}</p>
                      <div className="flex flex-col gap-1.5">
                        {items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            className="font-inter text-sm text-primary hover:underline"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 3: Manage + Train */}
                <div className="flex flex-col gap-8 w-52">
                  {servicesDropdown.slice(4, 6).map(({ heading, items }) => (
                    <div key={heading} className="flex flex-col gap-3">
                      <p className="font-inter text-lg font-semibold text-text">{heading}</p>
                      <div className="flex flex-col gap-1.5">
                        {items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            className="font-inter text-sm text-primary hover:underline"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/blog"
            className="font-inter text-base font-medium text-black whitespace-nowrap hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about-us"
            className="font-inter text-base font-medium text-black whitespace-nowrap hover:text-primary transition-colors"
          >
            About Us
          </Link>
        </div>

        {/* Contact Us — desktop only */}
        <Link
          href="/contact"
          className="hidden lg:block shrink-0 bg-black text-white px-8 py-3 rounded-full font-inter text-base font-medium hover:bg-gray-900 transition-colors"
        >
          Contact Us
        </Link>

        {/* Hamburger — below lg only */}
        <button
          type="button"
          onClick={() => setMobileOpen(open => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-control"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden bg-white transition-[max-height,opacity] duration-300 ${
          mobileOpen ? 'max-h-[420px] opacity-100 shadow-md' : 'max-h-0 opacity-0'
        }`}
      >
        <Container className="flex flex-col py-2">
          {mobileLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-background py-4 font-inter text-base font-medium text-black last:border-b-0 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
};
