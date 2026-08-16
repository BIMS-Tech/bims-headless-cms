import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ContactForm } from './ContactForm';

import {
  IconChevronRight,
  IconClock,
  IconHouse,
  IconUsers,
} from '@src/components/shared/icons/FigmaIcons';

/**
 * Page copy, kept in one place so it can be lifted into Contentful later without
 * unpicking the markup. There is no Contentful content type for this page yet.
 */
const content = {
  hero: {
    title: "Let's Talk About Your Business Goals",
    body: 'Have a project in mind or need expert guidance? Our team is ready to help you turn challenges into opportunities.',
    cta: 'Schedule a Free Consultation',
  },
  form: {
    title: 'Send Us a Message',
    body: "Tell us about your project and we'll get back to you within one business day.",
  },
  office: {
    title: 'Our Office',
    body: 'Visit our office or schedule a virtual consultation — whichever works best for you.',
    name: 'BIMS Headquarters',
    tagline: 'Visit us in person or connect virtually',
    cta: 'Schedule a Free Consultation',
    details: [
      {
        Icon: IconHouse,
        title: 'Office Address',
        lines: ['123 Innovation Drive, Suite 400', 'San Francisco, CA 94105', 'United States'],
      },
      {
        Icon: IconClock,
        title: 'Office Hours',
        lines: ['Monday – Friday: 9:00 AM – 6:00 PM EST', 'Saturday – Sunday: Closed'],
      },
      {
        Icon: IconUsers,
        title: 'Virtual Consultations',
        lines: ['Available by appointment — schedule below'],
      },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Contact Us | BIMS Technologies, Inc.',
  description: content.hero.body,
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate w-screen overflow-hidden" style={{ marginLeft: 'calc(50% - 50vw)' }}>
        <Image
          src="/contact/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 pb-16 pt-32 text-center sm:pt-36 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-40">
          <h1 className="max-w-[790px] font-montserrat text-[32px] font-bold leading-[1.15] text-black sm:text-5xl lg:text-[64px]">
            {content.hero.title}
          </h1>
          <p className="max-w-[683px] font-inter text-base leading-[22px] text-black">
            {content.hero.body}
          </p>
          <Link
            href="#send-us-a-message"
            className="flex h-10 items-center justify-center rounded-full bg-primary px-5 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
          >
            {content.hero.cta}
          </Link>
        </div>
      </section>

      {/* ── Send Us a Message ── */}
      <section id="send-us-a-message" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-16 rounded-3xl bg-white p-6 shadow-control sm:p-10 lg:mt-24 lg:p-16">
          <div className="flex flex-col gap-6 lg:gap-12">
            <div className="flex max-w-[586px] flex-col gap-4 lg:gap-6">
              <h2 className="font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
                {content.form.title}
              </h2>
              <p className="font-inter text-base leading-[22px] text-black">{content.form.body}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Our Office ── */}
      <section className="mx-auto mt-20 max-w-7xl px-6 pb-4 lg:mt-28 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center lg:gap-6">
          <h2 className="font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
            {content.office.title}
          </h2>
          <p className="max-w-[617px] font-inter text-base leading-[22px] text-black">
            {content.office.body}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 lg:mt-16 lg:flex-row lg:items-stretch">
          {/* Map */}
          <div className="relative aspect-[753/500] w-full overflow-hidden rounded-[20px] sm:aspect-[753/460] lg:aspect-auto lg:h-[639px] lg:w-[61%]">
            <Image
              src="/contact/office-map.png"
              alt="Map showing the BIMS Technologies office location"
              fill
              sizes="(min-width: 1024px) 61vw, 100vw"
              className="object-cover object-left"
            />
          </div>

          {/* Details panel. `[&_p]:text-white` is required, not stylistic: globals.css sets
              `p { @apply text-gray600 }` in the base layer, and a direct element selector beats
              a colour inherited from this container — every <p> here would render grey. */}
          <div className="flex w-full flex-col justify-center rounded-[20px] bg-primary p-8 text-white [&_p]:text-white lg:flex-1 lg:p-11">
            <div className="flex flex-col gap-8">
              <div className="flex h-[71px] w-[73px] shrink-0 items-center justify-center rounded-[10px] bg-white shadow-control">
                <Image
                  src="/contact/bims-mark.png"
                  alt="BIMS Technologies"
                  width={49}
                  height={46}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-8">
                <div className="font-inter">
                  <p className="text-2xl font-medium leading-[1.3]">{content.office.name}</p>
                  <p className="mt-1 text-base leading-[25px]">{content.office.tagline}</p>
                </div>

                <div className="flex flex-col gap-8">
                  {content.office.details.map(({ Icon, ...detail }) => (
                    <div key={detail.title} className="flex gap-4">
                      <Icon className="mt-[5px] h-[18px] w-[18px] shrink-0 text-white" />
                      <div className="font-inter text-base leading-[25px]">
                        <p>{detail.title}</p>
                        {detail.lines.map(line => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="#send-us-a-message"
                className="flex h-10 w-full max-w-[285px] items-center justify-center gap-1.5 rounded-[10px] border-[1.5px] border-white font-inter text-base leading-[22px] text-white transition-colors hover:bg-white hover:text-primary"
              >
                {content.office.cta}
                <IconChevronRight className="h-[15px] w-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
