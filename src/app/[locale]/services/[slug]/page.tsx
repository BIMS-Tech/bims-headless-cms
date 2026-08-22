import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { IconChevronRight, IconTarget } from '@src/components/shared/icons/FigmaIcons';
import { findService, relatedServices, services } from '@src/lib/services';

interface ServiceDetailProps {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServiceDetailProps): Metadata {
  const service = findService(params.slug);
  if (!service) return { title: 'Services | BIMS Technologies, Inc.' };

  return {
    title: `${service.name} | BIMS Technologies, Inc.`,
    description: service.overview ?? service.description,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  const service = findService(params.slug);
  if (!service) notFound();

  const related = relatedServices(service);

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
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 pb-20 pt-32 text-center sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
          <Link
            href="/services"
            className="font-inter text-sm font-medium text-primary transition-opacity hover:opacity-70"
          >
            ← All services
          </Link>

          <div className="flex h-[86px] w-[86px] items-center justify-center rounded-full bg-primary shadow-control">
            <Image
              src={service.icon}
              alt=""
              width={48}
              height={48}
              aria-hidden
              className="h-12 w-12 object-contain"
            />
          </div>

          <span className="rounded-full bg-light-blue px-4 py-1.5 font-inter text-sm text-primary">
            {service.group}
          </span>

          <h1 className="max-w-[860px] font-montserrat text-[32px] font-bold leading-[1.15] text-black sm:text-5xl lg:text-[56px]">
            {service.name}
          </h1>
          <p className="max-w-[683px] font-inter text-base leading-[25px] text-black">
            {service.overview ?? service.description}
          </p>

          <Link
            href="/contact"
            className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
          >
            Talk to us about this
            <IconChevronRight className="h-[15px] w-[10px]" />
          </Link>
        </div>
      </section>

      {/* ── What's included — only when the copy exists ── */}
      {service.highlights && service.highlights.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <h2 className="text-center font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
            What&apos;s included
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {service.highlights.map(item => (
              <div key={item} className="flex gap-4 rounded-xl bg-white p-6 shadow-card">
                <IconTarget className="h-6 w-6 shrink-0 text-primary" />
                <p className="font-inter text-base leading-[25px] text-black">{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Related services in the same group ── */}
      {related.length > 0 && (
        <section className="w-screen bg-light-blue py-16 lg:py-24" style={{ marginLeft: 'calc(50% - 50vw)' }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-2">
              <p className="font-inter text-sm uppercase text-black">More in {service.group}</p>
              <h2 className="font-montserrat text-2xl font-semibold leading-tight text-black lg:text-[32px]">
                Related services
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map(other => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group flex flex-col items-center gap-6 rounded-xl bg-white px-8 py-10 text-center shadow-card outline-none transition-transform duration-200 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full bg-primary shadow-control">
                    <Image
                      src={other.icon}
                      alt=""
                      width={40}
                      height={40}
                      aria-hidden
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="font-montserrat text-xl font-semibold text-text group-hover:text-primary">
                      {other.name}
                    </p>
                    <p className="font-inter text-base leading-[22px] text-text">
                      {other.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
