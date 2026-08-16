import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { IconChevronRight, IconTarget } from '@src/components/shared/icons/FigmaIcons';

/**
 * Page copy, kept in one place so it can be lifted into Contentful later without
 * unpicking the markup. There is no Contentful content type for this page yet.
 */
const content = {
  hero: {
    titleLead: 'Technology Solutions ',
    titleAccent: 'Built Around Your Business',
    body: 'Have a project in mind or need expert guidance? Our team is ready to help you turn challenges into opportunities.',
    cta: 'Schedule a Free Consultation',
  },
  stats: [
    { value: '50+', label: 'Projects Delivered', accent: true },
    { value: '30+', label: 'Business Clients', accent: false },
    { value: '100%', label: 'Client-Focused Approach', accent: false },
  ],
  about: {
    title: 'About Us',
    body: 'BIMS Technologies, Inc. was established in 2019 in response to the national government’s initiative to address one of the country’s most significant environmental risks in tourism.',
    cta: 'View Our Services',
  },
  help: {
    eyebrow: 'What we do',
    title: 'How We Help Your Business',
    body: 'A high-level view of the outcomes we deliver — from first engagement to long-term partnership.',
    // The Figma frame repeats one placeholder card four times; its copy matches the
    // homepage's first "How We Put You First" card exactly, so the remaining three
    // are taken from that same set rather than shipping four identical cards.
    cards: [
      {
        title: 'Your Goals Drive Every Decision',
        body: 'We focus on what matters to your business. Just real solutions that move you forward.',
      },
      {
        title: 'Professionalism & Effectiveness',
        body: 'We understand your business, speak your language, and stay available when you need us.',
      },
      {
        title: 'Built for Your Growth',
        body: 'Your software scales with you—flexible, future-proof, and always under your control.',
      },
      {
        title: 'Works with Your Existing Systems',
        body: 'We integrate smoothly with your tools, keeping your operations running without disruption.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'What makes us stand out in the industry',
    body: 'Discover how our innovative strategies, data-driven approach, and commitment to results set us apart from the competition',
  },
  pillars: [
    {
      title: 'Our Mission',
      body: 'Our mission is to design, build, collaborate with existing technologies that will effectively and sustainably connect people, businesses, and government in our effort to contribute to establishing more cohesive communities.',
    },
    {
      title: 'Our Vision',
      body: 'Our vision is to be the top of mind data-driven, digital adoption consultancy and enablers in the Philippines that empower businesses and communities to transition to relevant, user-friendly, and sustainable solutions.',
    },
  ],
};

export const metadata: Metadata = {
  title: 'About Us | BIMS Technologies, Inc.',
  description: content.about.body,
};

export default function AboutUsPage() {
  return (
    <>
      {/* ── Hero ── the curved bottom edge is baked into the exported image ── */}
      <section
        className="relative isolate w-screen overflow-hidden"
        style={{ marginLeft: 'calc(50% - 50vw)' }}
      >
        <Image src="/about/hero.png" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 pb-24 pt-32 text-center sm:pt-36 lg:gap-8 lg:px-8 lg:pb-40 lg:pt-40">
          <h1 className="max-w-[918px] font-montserrat text-[32px] font-bold leading-[1.15] text-black sm:text-5xl lg:text-[64px]">
            {content.hero.titleLead}
            <span className="text-primary">{content.hero.titleAccent}</span>
          </h1>
          <p className="max-w-[683px] font-inter text-base leading-[22px] text-black">
            {content.hero.body}
          </p>
          <Link
            href="/contact"
            className="flex h-10 items-center justify-center rounded-full bg-primary px-5 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
          >
            {content.hero.cta}
          </Link>
        </div>
      </section>

      {/* ── Stats · photo · About Us ── */}
      <section className="mx-auto mt-16 max-w-7xl px-6 lg:mt-24 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-12">
          {/* Stats — a row on small screens, a column beside the photo on desktop */}
          <div className="order-3 flex w-full flex-row items-center justify-around gap-6 text-center sm:gap-10 lg:order-1 lg:w-auto lg:flex-col lg:gap-16">
            {content.stats.map(stat => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <p
                  className={`font-montserrat text-3xl font-bold lg:text-4xl ${
                    stat.accent ? 'text-primary' : 'text-black'
                  }`}
                >
                  {stat.value}
                </p>
                <p className="font-inter text-sm leading-[22px] text-black lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative order-2 aspect-[388/412] w-full max-w-[388px] shrink-0 overflow-hidden rounded-[10px]">
            <Image
              src="/about/team.png"
              alt="The BIMS Technologies team at work"
              fill
              sizes="(min-width: 1024px) 388px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 flex w-full flex-col items-start gap-6 lg:order-3 lg:w-[382px] lg:gap-8">
            <h2 className="font-montserrat text-3xl font-bold leading-tight text-black lg:text-5xl">
              {content.about.title}
            </h2>
            <p className="font-inter text-base leading-[22px] text-black">{content.about.body}</p>
            <Link
              href="/services"
              className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
            >
              {content.about.cta}
              <IconChevronRight className="h-[15px] w-[10px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How We Help Your Business — full-bleed gradient band ── */}
      <section
        className="mt-16 w-screen bg-gradient-to-r from-[#00adee] to-[#00a58e] py-16 lg:mt-24 lg:py-24"
        style={{ marginLeft: 'calc(50% - 50vw)' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* `[&_p]:text-white` is required: globals.css sets `p { @apply text-gray600 }` in the
              base layer, and that element selector beats a colour inherited from this container. */}
          <div className="mx-auto flex max-w-[673px] flex-col items-center gap-4 text-center [&_p]:text-white">
            <p className="font-inter text-sm uppercase">{content.help.eyebrow}</p>
            <h2 className="font-montserrat text-2xl font-semibold leading-tight text-white lg:text-[32px]">
              {content.help.title}
            </h2>
            <p className="font-inter text-base leading-[22px]">{content.help.body}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-2">
            {content.help.cards.map(card => (
              <div
                key={card.title}
                className="flex flex-col gap-4 rounded-xl bg-white px-6 py-6 shadow-card lg:min-h-[191px] lg:justify-center lg:px-11 lg:py-5"
              >
                <div className="flex items-center gap-4">
                  <IconTarget className="h-10 w-10 shrink-0 text-primary" />
                  <p className="font-montserrat text-lg font-semibold text-black lg:text-2xl">
                    {card.title}
                  </p>
                </div>
                <p className="font-inter text-base leading-[25px] text-black">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us · Mission & Vision ── */}
      <section className="mx-auto mt-16 max-w-7xl px-6 pb-4 lg:mt-24 lg:px-8">
        <div className="mx-auto flex max-w-[567px] flex-col items-center gap-4 text-center">
          <p className="font-inter text-sm uppercase text-black">{content.whyUs.eyebrow}</p>
          <h2 className="max-w-[439px] font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
            {content.whyUs.title}
          </h2>
          <p className="font-inter text-base leading-[22px] text-black">{content.whyUs.body}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[834px] grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16">
          {content.pillars.map(pillar => (
            <div
              key={pillar.title}
              className="flex flex-col items-center gap-6 rounded-xl border border-primary bg-white p-8 text-center shadow-card"
            >
              <div className="flex flex-col items-center gap-4">
                <IconTarget className="h-10 w-10 text-primary" />
                <p className="font-montserrat text-xl font-semibold text-black lg:text-2xl">
                  {pillar.title}
                </p>
              </div>
              <p className="font-inter text-base leading-[25px] text-black">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
