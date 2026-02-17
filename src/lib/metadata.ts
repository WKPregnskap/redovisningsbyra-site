import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path = "/",
  type = "website",
}: MetaInput): Metadata {
  // Centralized metadata builder ensures consistent canonical + OG across future page scale.
  const url = new URL(path, siteConfig.domain).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.companyName,
      locale: "nb_NO",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
