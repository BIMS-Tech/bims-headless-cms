'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@src/components/shared/container';
import React, { useEffect, useRef, useState } from 'react';

const servicesDropdown = [
  {
    heading: 'Plan',
    items: ['Digitalization Consulting Services', 'Digital Transformation Strategies'],
  },
  {
    heading: 'Build',
    items: ['Website Development and Design', 'Custom Software Development', 'Mobile App Development'],
  },
  {
    heading: 'Integrate',
    items: ['E-commerce Solutions', 'Integration Solutions'],
  },
  {
    heading: 'Analyze',
    items: ['Data Analytics and Business Intelligence'],
  },
  {
    heading: 'Manage',
    items: ['Managed Digital Workspace Services', 'Project Management', 'Product Management'],
  },
  {
    heading: 'Train',
    items: ['Training and Support Services'],
  },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

        {/* ── Rounded pill nav ── */}
        <div
          className="flex items-center gap-11 rounded-[20px] border border-[#F5F7FA] bg-white px-8 h-[59px]"
          style={{ boxShadow: '0 0 15px 0 rgba(5,80,148,0.05)' }}
        >
          <Link
            href="/"
            className="font-inter text-base font-semibold text-[#055094] whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            Home
          </Link>

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              type="button"
              className="flex items-center gap-1 font-inter text-base font-medium text-black whitespace-nowrap cursor-pointer hover:text-[#055094] transition-colors"
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
            </button>

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
                      <p className="font-inter text-lg font-semibold text-[#051625]">{heading}</p>
                      <div className="flex flex-col gap-1.5">
                        {items.map((item) => (
                          <Link
                            key={item}
                            href="/services"
                            className="font-inter text-sm text-[#055094] hover:underline"
                          >
                            {item}
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
                      <p className="font-inter text-lg font-semibold text-[#051625]">{heading}</p>
                      <div className="flex flex-col gap-1.5">
                        {items.map((item) => (
                          <Link
                            key={item}
                            href="/services"
                            className="font-inter text-sm text-[#055094] hover:underline"
                          >
                            {item}
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
                      <p className="font-inter text-lg font-semibold text-[#051625]">{heading}</p>
                      <div className="flex flex-col gap-1.5">
                        {items.map((item) => (
                          <Link
                            key={item}
                            href="/services"
                            className="font-inter text-sm text-[#055094] hover:underline"
                          >
                            {item}
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
            className="font-inter text-base font-medium text-black whitespace-nowrap hover:text-[#055094] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about-us"
            className="font-inter text-base font-medium text-black whitespace-nowrap hover:text-[#055094] transition-colors"
          >
            About Us
          </Link>
        </div>

        {/* Contact Us */}
        <Link
          href="/contact"
          className="shrink-0 bg-black text-white px-8 py-3 rounded-full font-inter text-base font-medium hover:bg-gray-900 transition-colors"
        >
          Contact Us
        </Link>
      </Container>
    </header>
  );
};
