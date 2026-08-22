import type { Metadata } from 'next';
import Link from 'next/link';

import { IconChevronRight, IconTarget } from '@src/components/shared/icons/FigmaIcons';

/**
 * Wrike partner page. Deliberately styled to Wrike's own palette — bright green on
 * deep navy — rather than the BIMS blue used elsewhere, so it reads as a partner
 * page for their product. Tokens are local to this file for that reason.
 */
const WRIKE = {
  green: '#08CF65',
  navy: '#0B1A2E',
  navySoft: '#16283C',
};

const content = {
  hero: {
    badge: 'Official Wrike partner in the Philippines',
    title: 'Wrike, delivered and supported by BIMS',
    body: 'Wrike is the collaborative work management platform teams use to plan, run and report on work in one place. As Wrike’s official partner in the Philippines, BIMS handles licensing, rollout, and the training that makes it stick.',
    primaryCta: 'Talk to our Wrike team',
    secondaryCta: 'Visit wrike.com',
  },
  capabilities: {
    eyebrow: 'What Wrike does',
    title: 'One platform for the whole delivery cycle',
    body: 'From intake through to reporting, without the spreadsheet sprawl in between.',
    items: [
      {
        title: 'Plan and schedule',
        body: 'Gantt charts, custom item types and templates that mirror how your teams already work.',
      },
      {
        title: 'Intake and requests',
        body: 'Dynamic request forms route work to the right team with the right detail attached.',
      },
      {
        title: 'Resource management',
        body: 'See who is over-committed before the deadline slips, and rebalance the load.',
      },
      {
        title: 'Proofing and approvals',
        body: 'Review and sign off creative assets in-platform, with the feedback kept on the work item.',
      },
      {
        title: 'Dashboards and reporting',
        body: 'Advanced dashboards and time tracking give leadership a live view rather than a monthly deck.',
      },
      {
        title: 'Automation and integrations',
        body: 'Workflow automation plus 400+ integrations, so Wrike fits your existing stack.',
      },
    ],
  },
  partner: {
    eyebrow: 'Why go through BIMS',
    title: 'A partner on the ground, not a licence key in an inbox',
    body: 'Buying Wrike is the easy part. Getting a company to actually adopt it is the work — and that is what we do.',
    items: [
      {
        title: 'Licensing and procurement',
        body: 'Local billing and the right plan for your team size, handled by people in your timezone.',
      },
      {
        title: 'Configuration and rollout',
        body: 'We model your workflows, spaces and permissions in Wrike before anyone is asked to switch.',
      },
      {
        title: 'Migration',
        body: 'Bring across the projects, files and history you actually need from your current tools.',
      },
      {
        title: 'Training and adoption',
        body: 'Role-based onboarding for each team, so the platform is used rather than abandoned.',
      },
      {
        title: 'Ongoing support',
        body: 'A direct line to us for changes, new teams and troubleshooting after go-live.',
      },
      {
        title: 'Integration work',
        body: 'Where Wrike needs to talk to your other systems, our engineers build and maintain the join.',
      },
    ],
  },
  cta: {
    title: 'Considering Wrike for your team?',
    body: 'Tell us how your teams run today and we will show you what Wrike looks like configured for it — including a walkthrough with your own workflows.',
    button: 'Book a Wrike consultation',
  },
};

export const metadata: Metadata = {
  title: 'Wrike | Official Partner in the Philippines | BIMS Technologies, Inc.',
  description: content.hero.body,
};

export default function WrikePage() {
  return (
    <>
      {/* ── Hero — Wrike navy ── */}
      <section
        className="relative isolate w-screen overflow-hidden"
        style={{
          marginLeft: 'calc(50% - 50vw)',
          background: `linear-gradient(160deg, ${WRIKE.navy} 0%, ${WRIKE.navySoft} 60%, ${WRIKE.navy} 100%)`,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: `${WRIKE.green}22` }}
        />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 pb-20 pt-32 text-center sm:pt-36 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-40">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 font-inter text-sm font-medium"
            style={{ backgroundColor: `${WRIKE.green}1F`, color: WRIKE.green }}
          >
            {content.hero.badge}
          </span>

          <h1 className="max-w-[860px] font-montserrat text-[32px] font-bold leading-[1.15] text-white sm:text-5xl lg:text-[56px]">
            {content.hero.title}
          </h1>
          <p className="max-w-[700px] font-inter text-base leading-[25px] text-white/80 [&]:text-white/80">
            {content.hero.body}
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex h-11 items-center justify-center gap-1.5 rounded-full px-6 font-inter text-base font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: WRIKE.green, color: WRIKE.navy }}
            >
              {content.hero.primaryCta}
              <IconChevronRight className="h-[15px] w-[10px]" />
            </Link>
            <a
              href="https://www.wrike.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center justify-center rounded-full border-[1.5px] border-white/40 px-6 font-inter text-base font-medium text-white transition-colors hover:border-white"
            >
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* ── What Wrike does ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center">
          <p className="font-inter text-sm uppercase text-black">{content.capabilities.eyebrow}</p>
          <h2 className="font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
            {content.capabilities.title}
          </h2>
          <p className="font-inter text-base leading-[22px] text-black">{content.capabilities.body}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {content.capabilities.items.map(item => (
            <div key={item.title} className="flex flex-col gap-4 rounded-xl bg-white p-8 shadow-card">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ backgroundColor: `${WRIKE.green}1F`, color: WRIKE.green }}
              >
                <IconTarget className="h-6 w-6" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold text-text">{item.title}</h3>
              <p className="font-inter text-base leading-[25px] text-black">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why BIMS — tinted band ── */}
      <section
        className="w-screen py-16 lg:py-24"
        style={{ marginLeft: 'calc(50% - 50vw)', backgroundColor: '#F2FBF6' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center">
            <p className="font-inter text-sm uppercase text-black">{content.partner.eyebrow}</p>
            <h2 className="font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
              {content.partner.title}
            </h2>
            <p className="font-inter text-base leading-[22px] text-black">{content.partner.body}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {content.partner.items.map(item => (
              <div key={item.title} className="flex flex-col gap-3 rounded-xl bg-white p-8 shadow-card">
                <h3 className="font-montserrat text-xl font-semibold text-text">{item.title}</h3>
                <p className="font-inter text-base leading-[25px] text-black">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 pb-4 lg:px-8 lg:py-24">
        <div
          className="flex flex-col items-center gap-6 rounded-[24px] p-10 text-center lg:p-16"
          style={{ backgroundColor: WRIKE.navy }}
        >
          <h2 className="max-w-[620px] font-montserrat text-2xl font-semibold leading-tight text-white lg:text-[32px]">
            {content.cta.title}
          </h2>
          <p className="max-w-[620px] font-inter text-base leading-[25px] text-white/80 [&]:text-white/80">
            {content.cta.body}
          </p>
          <Link
            href="/contact"
            className="flex h-11 items-center justify-center gap-1.5 rounded-full px-6 font-inter text-base font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: WRIKE.green, color: WRIKE.navy }}
          >
            {content.cta.button}
            <IconChevronRight className="h-[15px] w-[10px]" />
          </Link>
        </div>
      </section>
    </>
  );
}
