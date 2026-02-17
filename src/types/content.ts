export const articleCategories = [
  "Regnskap",
  "Lønn",
  "Skatt",
  "Starte AS",
  "Fastpris",
  "Tips",
] as const;

export type ArticleCategory = (typeof articleCategories)[number];

export type ArticleStatus = "draft" | "published";

export type FaqItem = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  status: ArticleStatus;
  publishedAt: string;
  updatedAt?: string;
  seoTitle: string;
  seoDescription: string;
  readingMinutes: number;
  author: string;
  content: string;
  faq?: FaqItem[];
};

export type CityLanding = {
  slug: string;
  city: string;
  title: string;
  description: string;
  hero: string;
  lead: string;
  blocks: Array<{
    heading: string;
    text: string;
  }>;
  relatedLinks?: Array<{
    href: string;
    label: string;
  }>;
  faq: FaqItem[];
};
