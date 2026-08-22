/**
 * Job openings for the Careers page.
 *
 * There are no open positions right now — `jobs` is intentionally empty, and the
 * Careers page renders its empty state. To post a role, add an entry below; the
 * listing, the filters and the `/careers/<slug>` detail page all derive from it.
 *
 * Job descriptions are published as Canva designs rather than authored here: set
 * `canvaEmbedUrl` to the design's share URL and the detail page embeds it. In Canva,
 * use Share → More → Embed and copy the `https://www.canva.com/design/.../view?embed`
 * URL (the "Smart embed" link), not the plain view link.
 *
 * Longer term this is a candidate for a `pageCareer` Contentful type, modelled the
 * same way as `PageBlogPost`; this module is shaped to make that swap mechanical.
 */
export const departments = [
  'Design',
  'Engineering',
  'Finance',
  'Operations',
  'Data',
] as const;

export type Department = (typeof departments)[number];

export interface Job {
  slug: string;
  title: string;
  summary: string;
  department: Department;
  location: string;
  rate: string;
  /** Short labels shown as pills on the card — employment type, work mode. */
  badges: string[];
  /**
   * Canva "Smart embed" URL for the full job posting, e.g.
   * https://www.canva.com/design/DAFxxxxxxxx/view?embed
   */
  canvaEmbedUrl?: string;
  /**
   * Aspect ratio of the Canva design as a CSS padding-top percentage.
   * 56.25% = 16:9 landscape (default). Use 141.4% for an A4/portrait poster.
   */
  canvaAspect?: string;
}

export const jobs: Job[] = [];

export const jobLocations = Array.from(new Set(jobs.map(job => job.location))).sort();

export const findJob = (slug: string): Job | undefined => jobs.find(job => job.slug === slug);
