import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { IconChevronRight } from '@src/components/shared/icons/FigmaIcons';
import { findJob, jobs } from '@src/lib/careers';

interface CareerDetailProps {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  return jobs.map(job => ({ slug: job.slug }));
}

export function generateMetadata({ params }: CareerDetailProps): Metadata {
  const job = findJob(params.slug);
  if (!job) return { title: 'Careers | BIMS Technologies, Inc.' };

  return {
    title: `${job.title} | Careers | BIMS Technologies, Inc.`,
    description: job.summary,
  };
}

export default function CareerDetailPage({ params }: CareerDetailProps) {
  const job = findJob(params.slug);
  if (!job) notFound();

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
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-16 pt-32 sm:pt-36 lg:px-8 lg:pb-20 lg:pt-40">
          <Link
            href="/careers"
            className="font-inter text-sm font-medium text-primary transition-opacity hover:opacity-70"
          >
            ← Back to all positions
          </Link>

          <h1 className="max-w-[835px] font-montserrat text-[32px] font-bold leading-[1.15] text-black sm:text-5xl lg:text-[56px]">
            {job.title}
          </h1>
          <p className="max-w-[683px] font-inter text-base leading-[25px] text-black">
            {job.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {[job.department, job.location, job.rate, ...job.badges].map(label => (
              <span
                key={label}
                className="rounded-full bg-light-blue px-4 py-1.5 font-inter text-sm text-primary"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Job posting — published from Canva ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {job.canvaEmbedUrl ? (
          <div className="overflow-hidden rounded-[20px] bg-white shadow-card">
            {/* Canva's own responsive embed shape: a padding-top box with an absolute iframe. */}
            <div
              className="relative h-0 w-full"
              style={{ paddingTop: job.canvaAspect ?? '56.25%' }}
            >
              <iframe
                title={`${job.title} — job description`}
                src={job.canvaEmbedUrl}
                loading="lazy"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full border-0"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-[20px] bg-white px-6 py-16 text-center shadow-card">
            <h2 className="font-montserrat text-xl font-semibold text-text lg:text-2xl">
              Job description coming soon
            </h2>
            <p className="max-w-[520px] font-inter text-base leading-[25px] text-black">
              The full posting for this role has not been published yet. Get in touch and we will
              send you the details directly.
            </p>
          </div>
        )}
      </section>

      {/* ── Apply ── */}
      <section className="mx-auto max-w-7xl px-6 pb-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-[20px] bg-primary p-10 text-center text-white [&_p]:text-white lg:p-16">
          <h2 className="font-montserrat text-2xl font-semibold leading-tight text-white lg:text-[32px]">
            Interested in this role?
          </h2>
          <p className="max-w-[560px] font-inter text-base leading-[25px]">
            Send us a message with your CV and portfolio, and the team will get back to you.
          </p>
          <Link
            href="/contact"
            className="flex h-10 items-center justify-center gap-1.5 rounded-full border-[1.5px] border-white px-6 font-inter text-base leading-[22px] text-white transition-colors hover:bg-white hover:text-primary"
          >
            Apply for this role
            <IconChevronRight className="h-[15px] w-[10px]" />
          </Link>
        </div>
      </section>
    </>
  );
}
