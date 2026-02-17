import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { guidePages } from "@/content/guides";
import { getGuideBySlug, getGuideRelatedServices } from "@/lib/page-data";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { RelatedPages } from "@/components/sections/related-pages";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guidePages.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: guide.seo.title,
    description: guide.seo.description,
    path: guide.seo.canonicalPath,
    type: "article",
  });
}

export default async function GuideTemplatePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedServices = getGuideRelatedServices(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.seo.h1,
    description: guide.seo.description,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt ?? guide.publishedAt,
    author: {
      "@type": "Person",
      name: guide.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.domain,
    },
    mainEntityOfPage: `${siteConfig.domain}${guide.seo.canonicalPath}`,
  };

  return (
    <>
      <article className="section-pad-y bg-white">
        <div className="section-wrap">
          {/* Breadcrumb + Article schema for richer SERP eligibility. */}
          <JsonLd data={articleSchema} />
          <Breadcrumbs
            crumbs={[
              { name: "Hjem", href: "/" },
              { name: "Guider", href: "/guider" },
              { name: guide.seo.h1, href: guide.seo.canonicalPath },
            ]}
          />

          <h1 className="hero-title mt-5 text-slate-950">{guide.seo.h1}</h1>
          <p className="body-text mt-5 text-slate-600">{guide.excerpt}</p>

          <div className="mt-8 space-y-6">
            {guide.sections.map((section) => (
              <section key={section.heading} className="surface-card p-6">
                <h2 className="section-title text-slate-900">{section.heading}</h2>
                <p className="body-text mt-3 text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>

      <RelatedPages title="Relaterte tjenester" links={relatedServices} />
    </>
  );
}
