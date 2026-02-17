import { guidePages } from "@/content/guides";
import { servicePages } from "@/content/services";
import type { RelatedLink } from "@/types/seo";

// Data access helpers used by dynamic templates and internal link components.
export function getServiceBySlug(slug: string) {
  return servicePages.find((item) => item.slug === slug) ?? null;
}

export function getGuideBySlug(slug: string) {
  return guidePages.find((item) => item.slug === slug) ?? null;
}

export function getServiceRelatedGuides(serviceSlug: string): RelatedLink[] {
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return [];
  }

  return service.relatedGuides
    .map((guideSlug) => getGuideBySlug(guideSlug))
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .map((guide) => ({
      href: `/guider/${guide.slug}`,
      label: guide.seo.h1,
    }));
}

export function getGuideRelatedServices(guideSlug: string): RelatedLink[] {
  const guide = getGuideBySlug(guideSlug);

  if (!guide) {
    return [];
  }

  return guide.relatedServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .map((service) => ({
      href: `/tjanster/${service.slug}`,
      label: service.seo.h1,
    }));
}
