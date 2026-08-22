/**
 * The service catalogue — the single source of truth for the Services page grid,
 * the Header mega-dropdown, and the Contact form's "Service interest" select.
 *
 * Order matches the Figma Services grid (588:4843). Copy and icons are taken from
 * that frame verbatim; several descriptions are repeated placeholders in the design.
 */
export const serviceGroupOrder = [
  'Plan',
  'Build',
  'Integrate',
  'Analyze',
  'Manage',
  'Train',
] as const;

export type ServiceGroup = (typeof serviceGroupOrder)[number];

export interface ServiceInput {
  name: string;
  description: string;
  icon: string;
  group: ServiceGroup;
  /** Longer intro shown on the detail page. Pending copy from the legacy site. */
  overview?: string;
  /** Bullet points shown as "What's included". Pending copy from the legacy site. */
  highlights?: string[];
}

export interface Service extends ServiceInput {
  slug: string;
}

const catalogue: ServiceInput[] = [
  {
    name: 'Digital Transformation Strategies',
    description: 'We assist businesses in navigating their digital transformation journey.',
    icon: '/services/digital-transformation.png',
    group: 'Plan',
  },
  {
    name: 'Website Development and Design',
    description:
      'We create visually appealing and functional websites that reflect your brand identity.',
    icon: '/services/website-development.png',
    group: 'Build',
  },
  {
    name: 'Mobile App Development',
    description:
      'We develop user-friendly mobile applications for both iOS and Android platforms.',
    icon: '/services/mobile-app.png',
    group: 'Build',
  },
  {
    name: 'Project Management',
    description: 'We build tailored solutions that match your unique business workflows.',
    icon: '/services/project-management.png',
    group: 'Manage',
  },
  {
    name: 'Custom Software Development',
    description: 'We build tailored solutions that match your unique business workflows.',
    icon: '/services/custom-software.png',
    group: 'Build',
  },
  {
    name: 'E-commerce Solutions',
    description: 'We build tailored solutions that match your unique business workflows.',
    icon: '/services/ecommerce.png',
    group: 'Integrate',
  },
  {
    name: 'Data Analytics and Business Intelligence',
    description: 'We build tailored solutions that match your unique business workflows.',
    icon: '/services/data-analytics.png',
    group: 'Analyze',
  },
  {
    name: 'Digitalization Consulting Services',
    description: 'We build tailored solutions that match your unique business workflows.',
    icon: '/services/digitalization-consulting.png',
    group: 'Plan',
  },
  {
    name: 'Training and Support Services',
    description: 'We build tailored solutions that match your unique business workflows.',
    icon: '/services/training-support.png',
    group: 'Train',
  },
  {
    name: 'Integration Solutions',
    description: 'We assist businesses in navigating their digital transformation journey.',
    icon: '/services/integration.png',
    group: 'Integrate',
  },
  {
    name: 'Managed Digital Workspace Services',
    description: 'We develop user-friendly mobile applications for both iOS and Android.',
    icon: '/services/managed-workspace.png',
    group: 'Manage',
  },
  {
    name: 'Product Management',
    description:
      'Our Product Management Solutions offer comprehensive tools and strategies designed.',
    icon: '/services/product-management.png',
    group: 'Manage',
  },
];

const toSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const services: Service[] = catalogue.map(service => ({
  ...service,
  slug: toSlug(service.name),
}));

export const findService = (slug: string): Service | undefined =>
  services.find(service => service.slug === slug);

/** Services in the same group, excluding the one being viewed. */
export const relatedServices = (service: Service): Service[] =>
  services.filter(other => other.group === service.group && other.slug !== service.slug);

/**
 * Shape consumed by the Header mega-dropdown. Items are full Service objects so the
 * dropdown can deep-link to each `/services/<slug>` page.
 */
export const serviceGroups = serviceGroupOrder.map(heading => ({
  heading,
  items: services.filter(service => service.group === heading),
}));

/** Flat list of names, used by the Contact form select. */
export const allServices = services.map(service => service.name);
