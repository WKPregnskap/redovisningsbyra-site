import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { servicePages } from "@/content/services";
import { getServiceBySlug, getServiceRelatedGuides } from "@/lib/page-data";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { RelatedPages } from "@/components/sections/related-pages";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactBand } from "@/components/sections/contact-band";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: service.seo.canonicalPath,
  });
}

export default async function ServiceTemplatePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedGuides = getServiceRelatedGuides(slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.seo.h1,
    description: service.seo.description,
    areaServed: siteConfig.localSeo.country,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.companyName,
      url: siteConfig.domain,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
    },
  };

  return (
    <>
      <section className="section-pad-y bg-white">
        <div className="section-wrap">
          {/* Breadcrumb + schema establish page hierarchy for search engines. */}
          <JsonLd data={serviceSchema} />
          <Breadcrumbs
            crumbs={[
              { name: "Hjem", href: "/" },
              { name: "Tjenester", href: "/tjanster" },
              { name: service.seo.h1, href: service.seo.canonicalPath },
            ]}
          />

          <h1 className="hero-title mt-5 text-slate-950">{service.seo.h1}</h1>
          <p className="body-text mt-5 text-slate-600">{service.intro}</p>
          <p className="body-text mt-4 text-slate-600">{service.longDescription}</p>

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="surface-card p-5 text-sm text-slate-700">
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="surface-card p-6">
              <h2 className="text-lg font-semibold text-slate-900">Hva du får</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {service.customerGets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="surface-card p-6">
              <h2 className="text-lg font-semibold text-slate-900">Slik jobber vi</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {service.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="surface-card p-6">
              <h2 className="text-lg font-semibold text-slate-900">Passer for</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {service.fitFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <ContactBand title={`Trenger du hjelp med ${service.seo.h1.toLowerCase()}?`} text={service.ctaText} />
      <FaqSection title={`Vanlige spørsmål om ${service.seo.h1.toLowerCase()}`} items={service.faq} />
      <RelatedPages title="Relaterte guider" links={relatedGuides} />
    </>
  );
}
