'use client';



import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@src/components/shared/container';
import React, { useEffect, useState } from 'react';

export const Header = () => {
  const [glass, setGlass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setGlass(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${glass ? 'bg-white/60 backdrop-blur-lg shadow-lg border-b border-white/30' : 'bg-white'} duration-300`}
    >
      <nav>
        <Container className="flex items-center justify-between py-5">
          <div className="flex items-center gap-8">
            <Link href="/" title="Homepage">
              <Image src="/logo1.png" alt="BIMS Logo" width={110} height={38} priority />
            </Link>
          </div>
          <div className="flex-1 flex justify-center gap-12">
            <Link href="/" className="text-lg font-medium hover:text-blue-600 transition">Home</Link>
            <Link href="/services" className="text-lg font-medium hover:text-blue-600 transition">Services</Link>
            <Link href="/blog" className="text-lg font-medium hover:text-blue-600 transition">Blog</Link>
            <Link href="/about-us" className="text-lg font-medium hover:text-blue-600 transition">About Us</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition">Contact Us</Link>
          </div>
        </Container>
      </nav>
    </header>
  );
};
