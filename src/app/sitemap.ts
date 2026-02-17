import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getPublishedArticles } from "@/lib/articles";
import { cityLandings } from "@/content/city-landings";
import { servicePages } from "@/content/services";
import { guidePages } from "@/content/guides";

// Required for static export (`output: "export"`).
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const basePages = [
    "/",
    "/tjenester",
    "/fastpris",
    "/om-oss",
    "/referanser",
    "/artikler",
    "/tjanster",
    "/guider",
    "/kontakt",
    ...cityLandings.map((item) => `/${item.slug}`),
    ...servicePages.map((item) => item.seo.canonicalPath),
    ...guidePages.map((item) => item.seo.canonicalPath),
  ];

  const articles = await getPublishedArticles();

  const articlePages = articles.map((article) => ({
    url: `${siteConfig.domain}/artikler/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticPages = basePages.map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));

  return [...staticPages, ...articlePages];
}
