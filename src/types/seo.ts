// Shared SEO and template types so new pages can scale to 50-150 undersider.
export type SeoFields = {
  title: string;
  description: string;
  canonicalPath: string;
  h1: string;
};

// Reusable location config for local SEO across all pages.
export type LocalSeoLocation = {
  city: string;
  region: string;
  country: string;
};

// Common link shape used for internal linking widgets.
export type RelatedLink = {
  href: string;
  label: string;
};

// Service template model for /tjanster/[slug].
export type ServicePageData = {
  slug: string;
  seo: SeoFields;
  summary: string;
  intro: string;
  longDescription: string;
  customerGets: string[];
  process: string[];
  fitFor: string[];
  bullets: string[];
  ctaText: string;
  faq: Array<{ question: string; answer: string }>;
  relatedGuides: string[];
};

// Guide template model for /guider/[slug].
export type GuidePageData = {
  slug: string;
  seo: SeoFields;
  excerpt: string;
  sections: Array<{ heading: string; body: string }>;
  relatedServices: string[];
  publishedAt: string;
  updatedAt?: string;
  author: string;
};
