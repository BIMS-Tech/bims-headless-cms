/**
 * Job openings for the Careers page.
 *
 * ⚠️ PLACEHOLDER DATA. The Figma frame (598:5411) repeats one card six times, so the
 * roles below are stand-ins that exercise the layout — they are not real vacancies.
 * The intent is to move this to Contentful (a `pageCareer` content type, modelled the
 * same way as `PageBlogPost`); this module is shaped to make that swap mechanical.
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
}

export const jobs: Job[] = [
  {
    slug: 'graphic-designer',
    title: 'Graphic Designer',
    summary:
      'Shape the visual language of our products and campaigns, from brand systems through to production-ready assets.',
    department: 'Design',
    location: 'Philippines, Cebu',
    rate: '$85/hr',
    badges: ['Full-time', 'On-site'],
  },
  {
    slug: 'financial-analyst',
    title: 'Financial Analyst',
    summary:
      'Own reporting and forecasting across our product lines, and turn the numbers into decisions the team can act on.',
    department: 'Finance',
    location: 'Philippines, Cebu',
    rate: '$85/hr',
    badges: ['Full-time', 'Hybrid'],
  },
  {
    slug: 'ux-writer',
    title: 'UX Writer',
    summary:
      'Write the words that carry people through our products — interface copy, guidance, and documentation.',
    department: 'Design',
    location: 'Philippines, Cebu',
    rate: '$85/hr',
    badges: ['Contract', 'Remote'],
  },
  {
    slug: 'business-development-lead',
    title: 'Business Development Lead',
    summary:
      'Build partnerships that open new markets for our platforms, and help clients see the path from problem to solution.',
    department: 'Operations',
    location: 'Philippines, Manila',
    rate: '$85/hr',
    badges: ['Full-time', 'Hybrid'],
  },
  {
    slug: 'data-engineer',
    title: 'Data Engineer',
    summary:
      'Design the pipelines and models behind our analytics work, so insight arrives quickly and stays trustworthy.',
    department: 'Data',
    location: 'Philippines, Cebu',
    rate: '$85/hr',
    badges: ['Full-time', 'Remote'],
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    summary:
      'Take features from first sketch to shipped interface, working closely with engineering throughout.',
    department: 'Design',
    location: 'Philippines, Cebu',
    rate: '$85/hr',
    badges: ['Full-time', 'On-site'],
  },
];

export const jobLocations = Array.from(new Set(jobs.map(job => job.location))).sort();
