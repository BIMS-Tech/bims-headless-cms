import type { Metadata } from 'next';
import Link from 'next/link';

import { JobBrowser } from './JobBrowser';

import { IconChevronRight, IconTarget } from '@src/components/shared/icons/FigmaIcons';

/**
 * Page copy, kept in one place so it can be lifted into Contentful later without
 * unpicking the markup. Built from Figma 598:5411.
 *
 * ⚠️ The three "Why Work With Us" cards are placeholders — those nodes are component
 * instances whose text could not be read before the Figma export limit was reached.
 */
const content = {
  hero: {
    title: 'Join the BIMS Team',
    body: 'BIMS Technologies, Inc. is dedicated to creating a positive and inclusive work environment that fosters creativity, productivity, and job satisfaction.',
    cta: 'View Open Positions',
  },
  why: {
    eyebrow: 'What BIMS?',
    title: 'Why Work With Us',
    body: 'At BIMS, we focus on creating an environment where people can learn, collaborate, and contribute to innovative digital solutions.',
    cards: [
      {
        title: 'Learn continuously',
        body: 'Work across industries and technologies, with the time and support to grow past what you already know.',
      },
      {
        title: 'Collaborate closely',
        body: 'Small teams, direct access to decisions, and colleagues who share what they know rather than guard it.',
      },
      {
        title: 'Build things that matter',
        body: 'Ship digital solutions that real businesses and communities depend on every day.',
      },
    ],
  },
  openings: {
    eyebrow: 'Careers',
    title: 'Open Positions At BIMS',
    body: 'Explore current opportunities to join our team and contribute to exciting technology projects.',
  },
};

export const metadata: Metadata = {
  title: 'Careers | BIMS Technologies, Inc.',
  description: content.hero.body,
};

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ── */}
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
          <h1 className="max-w-[835px] font-montserrat text-[32px] font-bold leading-[1.15] text-black sm:text-5xl lg:text-[64px]">
            {content.hero.title}
          </h1>
          <p className="max-w-[835px] font-inter text-base leading-[22px] text-black">
            {content.hero.body}
          </p>
          <Link
            href="#open-positions"
            className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
          >
            {content.hero.cta}
            <IconChevronRight className="h-[15px] w-[10px]" />
          </Link>
        </div>
      </section>

      {/* ── Why Work With Us ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[764px] flex-col items-center gap-4 text-center">
          <p className="font-inter text-sm uppercase text-black">{content.why.eyebrow}</p>
          <h2 className="font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
            {content.why.title}
          </h2>
          <p className="max-w-[652px] font-inter text-base leading-[22px] text-black">
            {content.why.body}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {content.why.cards.map(card => (
            <div
              key={card.title}
              className="flex flex-col items-center gap-6 rounded-xl bg-white p-8 text-center shadow-card lg:min-h-[289px] lg:justify-center"
            >
              <IconTarget className="h-10 w-10 text-primary" />
              <div className="flex flex-col gap-4">
                <h3 className="font-montserrat text-xl font-semibold text-black lg:text-2xl">
                  {card.title}
                </h3>
                <p className="font-inter text-base leading-[25px] text-black">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Open positions — full-bleed tinted band, per Rectangle 26 ── */}
      <section
        id="open-positions"
        className="w-screen bg-light-blue py-16 lg:py-24"
        style={{ marginLeft: 'calc(50% - 50vw)' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="flex flex-col gap-2">
              <p className="font-inter text-sm uppercase text-black">
                {content.openings.eyebrow}
              </p>
              <h2 className="max-w-[251px] font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
                {content.openings.title}
              </h2>
            </div>
            <p className="max-w-[380px] font-inter text-base leading-[22px] text-black">
              {content.openings.body}
            </p>
          </div>

          <JobBrowser />
        </div>
      </section>
    </>
  );
}
