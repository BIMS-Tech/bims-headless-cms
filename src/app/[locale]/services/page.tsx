import type { Metadata } from 'next';
import Link from 'next/link';

import { ServicesGrid } from './ServicesGrid';

import { IconChevronRight } from '@src/components/shared/icons/FigmaIcons';

/**
 * Page copy, kept in one place so it can be lifted into Contentful later without
 * unpicking the markup. The service cards themselves come from src/lib/services.ts.
 */
const content = {
  hero: {
    title: 'Services Designed Around Your Needs',
    body: 'BIMS Technologies delivers solutions that cut costs, save time, and drive growth. From strategy to implementation, we build the digital foundation your business needs to compete and win.',
    cta: 'View Our Services',
  },
  grid: {
    eyebrow: 'Our Services',
    title: 'Services Designed Around Your Needs',
    body: 'Comprehensive technology services that address every aspect of your digital journey.',
  },
};

export const metadata: Metadata = {
  title: 'Services | BIMS Technologies, Inc.',
  description: content.hero.body,
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── pale gradient with the design's faint grid overlay ── */}
      <section
        className="relative isolate w-screen overflow-hidden"
        style={{
          marginLeft: 'calc(50% - 50vw)',
          background: 'linear-gradient(180deg, #f2f8fc 0%, #f9fcfe 55%, #ffffff 100%)',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(5,80,148,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(5,80,148,0.04) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 pb-20 pt-32 text-center sm:pt-36 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-40">
          <h1 className="max-w-[728px] font-montserrat text-[32px] font-bold leading-[1.15] text-black sm:text-5xl lg:text-[64px]">
            {content.hero.title}
          </h1>
          <p className="max-w-[728px] font-inter text-base leading-[22px] text-black">
            {content.hero.body}
          </p>
          <Link
            href="#our-services"
            className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
          >
            {content.hero.cta}
            <IconChevronRight className="h-[15px] w-[10px]" />
          </Link>
        </div>
      </section>

      {/* ── Service catalogue ── */}
      <section id="our-services" className="mx-auto mt-16 max-w-7xl px-6 pb-4 lg:mt-24 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-2 lg:max-w-[438px]">
            <p className="font-inter text-sm uppercase text-black">{content.grid.eyebrow}</p>
            <h2 className="font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
              {content.grid.title}
            </h2>
          </div>
          <p className="font-inter text-base leading-[22px] text-black lg:max-w-[434px] lg:pt-7">
            {content.grid.body}
          </p>
        </div>

        <ServicesGrid />
      </section>
    </>
  );
}
