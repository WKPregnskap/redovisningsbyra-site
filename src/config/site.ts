import type { LocalSeoLocation } from "@/types/seo";

type SiteConfig = {
  companyName: string;
  domain: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  gtmId: string;
  organizationNumber: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  } | null;
  openingHours: string;
  localSeo: {
    country: string;
    regions: string[];
    defaultLocation: LocalSeoLocation;
  };
};

export const siteConfig: SiteConfig = {
  companyName: "Werner Klausen Regnskap AS",
  domain: "https://www.wernerklausen.no",
  phoneDisplay: "+47 461 30 021",
  phoneHref: "tel:+4746130021",
  email: "post@wernerklausen.no",
  gtmId: "GTM-KND63WSN",
  organizationNumber: "927 099 209",
  address: {
    street: "Apotekergata 10 A",
    postalCode: "0180",
    city: "Oslo",
    country: "Norge",
  },
  openingHours: "",
  // Reusable local SEO configuration for all current and future undersider.
  localSeo: {
    country: "Norge",
    regions: ["Oslo", "Vestland", "Trondelag", "Rogaland", "Agder", "Troms"],
    defaultLocation: {
      city: "Oslo",
      region: "Oslo",
      country: "Norge",
    } satisfies LocalSeoLocation,
  },
} as const;
