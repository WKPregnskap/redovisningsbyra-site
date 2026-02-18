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
import { CallbackModal } from "@/components/sections/callback-modal";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";

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
  const processStepTitles = ["Oppstart", "Løpende arbeid", "Oppfølging", "Oversikt"] as const;
  const whyChooseUs = [
    "Du får svar innen 1 arbeidsdag.",
    "Du får fast kontaktperson som kjenner bedriften din.",
    "Du får månedlig oversikt med tydelige neste steg.",
    "Vi sier ifra tidlig når noe må følges opp.",
  ];

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

          {/* endret: kort hero med tydelig tjeneste-H1 + CTA direkte under. */}
          <h1 className="hero-title mt-5 text-slate-950">{service.seo.h1} uten stress og usikkerhet</h1>
          <p className="body-text mt-5 text-slate-600">{service.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <TrackedAnchor
              href={siteConfig.phoneHref}
              eventName="phone_click"
              eventPayload={{ placement: `service_hero_phone_${service.slug}` }}
              className="btn-primary"
            >
              Ring oss nå
            </TrackedAnchor>
            <CallbackModal buttonLabel="Ring meg" buttonClassName="btn-secondary" />
            <TrackedAnchor
              href={`mailto:${siteConfig.email}`}
              eventName="email_click"
              eventPayload={{ placement: `service_hero_email_${service.slug}` }}
              className="btn-tertiary"
            >
              Send e-post
            </TrackedAnchor>
          </div>
        </div>
      </section>

      <ContactBand
        title={`Trenger du hjelp med ${service.seo.h1.toLowerCase()}?`}
        text={service.ctaText}
        showCallback
      />

      <section className="section-pad-y bg-white">
        <div className="section-wrap">
          <h2 className="section-title text-slate-950">Hva du får hos oss</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {service.customerGets.map((item) => (
              <li key={item} className="surface-card p-5 text-sm text-slate-700">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="section-title mt-14 text-slate-950">Derfor velger bedrifter oss</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <li key={item} className="surface-card p-5 text-sm text-slate-700">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="section-title mt-14 text-slate-950">Slik fungerer samarbeidet</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {processStepTitles.map((title, index) => (
              <article key={title} className="surface-card p-6">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-700">{service.process[index] ?? ""}</p>
              </article>
            ))}
          </div>

          <h2 className="section-title mt-14 text-slate-950">Hvem passer tjenesten for</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {service.fitFor.map((item) => (
              <li key={item} className="surface-card p-5 text-sm text-slate-700">
                {item}
              </li>
            ))}
          </ul>

          {/* endret: naturlig lokal-SEO avsnitt med byfraser + nasjonal dekning. */}
          <div className="surface-card mt-12 p-6 text-sm text-slate-700">
            <p>
              Som regnskapsfører hjelper vi bedrifter med {service.seo.h1.toLowerCase()} i hele landet,
              inkludert søk som regnskapsfører oslo, regnskapsfører bergen, regnskapsfører stavanger og
              regnskapsfører trondheim.
            </p>
            <p className="mt-3">Vi jobber med kunder i hele Norge.</p>
          </div>
        </div>
      </section>

      <ContactBand
        altBackground
        title="Ønsker du en enklere økonomihverdag?"
        text={service.ctaText}
        showCallback
      />
      <FaqSection title={`Vanlige spørsmål om ${service.seo.h1.toLowerCase()}`} items={service.faq} />
      <ContactBand
        title="Ta kontakt – vi gir deg et uforpliktende tilbud"
        text="Vi svarer raskt og foreslår en løsning som passer bedriften din."
        showCallback
      />
      <RelatedPages title="Relaterte guider" links={relatedGuides} />
    </>
  );
}
