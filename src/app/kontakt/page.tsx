import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { ContactBand } from "@/components/sections/contact-band";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { kontaktPageContent } from "@/content/pages/kontakt";

export const metadata = createMetadata({
  title: "Kontakt",
  description:
    "Kontakt Werner Klausen Regnskap AS på telefon eller e-post. Be også om oppringing via kontaktskjema.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow={kontaktPageContent.eyebrow}
        title={kontaktPageContent.title}
        lead={kontaktPageContent.lead}
      />

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 md:grid-cols-2 lg:px-8">
        <ContactForm />
        <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Direkte kontakt</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            <p>
              Telefon:{" "}
              <TrackedAnchor
                href={siteConfig.phoneHref}
                eventName="phone_click"
                eventPayload={{ placement: "contact_page_phone" }}
                className="font-semibold text-slate-900"
              >
                {siteConfig.phoneDisplay}
              </TrackedAnchor>
            </p>
            <p>
              E-post:{" "}
              <TrackedAnchor
                href={`mailto:${siteConfig.email}`}
                eventName="email_click"
                eventPayload={{ placement: "contact_page_email" }}
                className="font-semibold text-slate-900"
              >
                {siteConfig.email}
              </TrackedAnchor>
            </p>
            {siteConfig.address ? (
              <p>
                Adresse: {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.city}
              </p>
            ) : null}
          </div>
        </aside>
      </section>

      <ContactBand
        title={kontaktPageContent.ctaOne.title}
        text={kontaktPageContent.ctaOne.text}
      />
      <ContactBand
        title={kontaktPageContent.ctaTwo.title}
        text={kontaktPageContent.ctaTwo.text}
      />
    </>
  );
}
