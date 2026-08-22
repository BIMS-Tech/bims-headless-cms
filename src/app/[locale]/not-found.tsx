import { headers } from 'next/headers';
import Link from 'next/link';

import { IconChevronRight } from '@src/components/shared/icons/FigmaIcons';
import initTranslations from '@src/i18n';
import { defaultLocale } from '@src/i18n/config';

/** Somewhere useful to go instead — mirrors the header's top-level nav. */
const suggestions = [
  { label: 'Services', href: '/services', body: 'Everything we build, run and support.' },
  { label: 'About Us', href: '/about-us', body: 'Who we are and how we work.' },
  { label: 'Careers', href: '/careers', body: 'Open roles and life at BIMS.' },
  { label: 'Blog', href: '/blog', body: 'Notes on technology and business.' },
];

export default async function NotFound() {
  const headersList = headers();
  const locale = headersList.get('x-next-i18n-router-locale') || defaultLocale;
  const { t } = await initTranslations({ locale });

  return (
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

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 pb-20 pt-32 text-center sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40">
        <p
          aria-hidden
          className="font-montserrat text-[96px] font-bold leading-none text-primary/15 sm:text-[140px] lg:text-[180px]"
        >
          404
        </p>

        <h1 className="-mt-4 font-montserrat text-[32px] font-bold leading-[1.15] text-black sm:text-5xl lg:-mt-8 lg:text-[56px]">
          {t('notFound.title')}
        </h1>

        <p className="max-w-[520px] font-inter text-base leading-[25px] text-black">
          The page you were looking for has moved, or never existed. Here are a few places worth
          trying instead.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
          >
            Back to home
            <IconChevronRight className="h-[15px] w-[10px]" />
          </Link>
          <Link
            href="/contact"
            className="flex h-10 items-center justify-center rounded-full border-[1.5px] border-primary px-5 font-inter text-base font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Contact us
          </Link>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {suggestions.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-2 rounded-xl bg-white p-6 shadow-card outline-none transition-transform duration-200 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary"
            >
              <p className="font-montserrat text-lg font-semibold text-text group-hover:text-primary">
                {item.label}
              </p>
              <p className="font-inter text-base leading-[22px] text-black">{item.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
