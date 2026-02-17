import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Keep robots route deterministic for static export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}
