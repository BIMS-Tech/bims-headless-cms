'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import { jobLocations, jobs, type Job } from '@src/lib/careers';

const fieldBase =
  'h-12 w-full rounded-md bg-white px-3 text-[13px] leading-5 text-[#18181b] ' +
  'shadow-[0_1px_2px_0_rgba(0,0,0,0.12)] ring-1 ring-black/[0.08] ' +
  'placeholder:text-[#71717a] focus:outline-none focus:ring-2 focus:ring-primary';

const ChevronDown = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden
    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#71717a]"
  >
    <path
      d="M1.55554 4.22223L5.99999 8.66667L10.4444 4.22223"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    aria-hidden
    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a]"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

/**
 * Placeholder role icon. The design gives each card a distinct glyph (Pen, Calculator,
 * Hand With Pen, Commercial, Database) but those assets could not be exported, so one
 * neutral mark stands in for all six until they can be pulled from Figma.
 */
const IconRole = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden className="text-primary">
    <rect
      x="2.5"
      y="7"
      width="19"
      height="13"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M2.5 12.5h19" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const JobCard = ({ job }: { job: Job }) => (
  <article className="flex flex-col rounded-xl bg-white p-6 shadow-card lg:p-8">
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex h-[73px] w-[73px] shrink-0 items-center justify-center rounded-xl bg-light-blue">
        <IconRole />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-montserrat text-xl font-semibold text-text">{job.title}</h3>
        <p className="font-inter text-base leading-[25px] text-black">{job.summary}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {job.badges.map(badge => (
          <span
            key={badge}
            className="rounded-full bg-light-blue px-4 py-1.5 font-inter text-sm text-primary"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>

    <hr className="my-6 border-t border-background" />

    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-inter text-sm font-semibold text-text">{job.rate}</p>
        <p className="font-inter text-base leading-[22px] text-black">{job.location}</p>
      </div>
      <Link
        href={`/careers/${job.slug}`}
        className="flex h-10 shrink-0 items-center justify-center rounded-full bg-primary px-5 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
      >
        View role
      </Link>
    </div>
  </article>
);

/** Shown when nothing is posted at all — distinct from "your filters matched nothing". */
const NoOpenings = () => (
  <div className="mt-10 flex flex-col items-center gap-4 rounded-xl bg-white px-6 py-16 text-center shadow-card lg:mt-12">
    <h3 className="font-montserrat text-xl font-semibold text-text lg:text-2xl">
      No open positions right now
    </h3>
    <p className="max-w-[480px] font-inter text-base leading-[25px] text-black">
      We are not hiring for any roles at the moment. Do check back — and if you think you would
      be a good fit for the team, we are always glad to hear from you.
    </p>
    <Link
      href="/contact"
      className="mt-2 flex h-10 items-center justify-center rounded-full bg-primary px-5 font-inter text-base leading-[22px] text-white shadow-control transition-colors hover:bg-primary-dark"
    >
      Get in touch
    </Link>
  </div>
);

export const JobBrowser = () => {
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const dept = department.trim().toLowerCase();
    const term = query.trim().toLowerCase();

    return jobs.filter(job => {
      if (dept && !job.department.toLowerCase().includes(dept)) return false;
      if (location && job.location !== location) return false;
      if (term && !`${job.title} ${job.summary}`.toLowerCase().includes(term)) return false;
      return true;
    });
  }, [department, location, query]);

  // With nothing posted, the filter row would be a control with nothing to control.
  if (jobs.length === 0) return <NoOpenings />;

  return (
    <>
      {/* ── Filters ── */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-[302px_302px_1fr] lg:gap-8">
        <div className="flex flex-col gap-3">
          <label htmlFor="department" className="font-inter text-sm font-medium text-black/40">
            Department
          </label>
          <input
            id="department"
            type="text"
            value={department}
            onChange={event => setDepartment(event.target.value)}
            placeholder="Any department..."
            className={fieldBase}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="location" className="font-inter text-sm font-medium text-black/40">
            Location
          </label>
          <div className="relative">
            <select
              id="location"
              value={location}
              onChange={event => setLocation(event.target.value)}
              className={`${fieldBase} appearance-none pr-10 ${
                location ? 'text-[#18181b]' : 'text-[#71717a]'
              }`}
            >
              <option value="">Choose location...</option>
              {jobLocations.map(place => (
                <option key={place} value={place} className="text-[#18181b]">
                  {place}
                </option>
              ))}
            </select>
            <ChevronDown />
          </div>
        </div>

        <div className="flex flex-col justify-end gap-3">
          <label htmlFor="job-search" className="sr-only">
            Search open positions
          </label>
          <div className="relative">
            <input
              id="job-search"
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search positions..."
              className={`${fieldBase} pl-10`}
            />
            <SearchIcon />
          </div>
        </div>
      </div>

      {/* ── Job grid ── */}
      {visible.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {visible.map(job => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      ) : (
        <p className="mt-12 rounded-xl bg-white p-10 text-center font-inter text-base text-black shadow-card">
          No open positions match those filters right now.
        </p>
      )}
    </>
  );
};
