import { createMetadata } from "@/lib/metadata";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { fastprisPageContent } from "@/content/pages/fastpris";

export const metadata = createMetadata({
  title: "Fastpris på regnskap uten overraskelser",
  description:
    "Forutsigbar fastpris med tydelig leveranse, fast kontaktperson og jevnlig rådgivning.",
  path: "/fastpris",
});

export default function FastprisPage() {
  return (
    <>
      <PageHero
        eyebrow={fastprisPageContent.eyebrow}
        title={fastprisPageContent.title}
        lead={fastprisPageContent.lead}
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">{fastprisPageContent.includedTitle}</h2>
          <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-600 md:grid-cols-2">
            {fastprisPageContent.points.map((point) => (
              <li key={point} className="rounded-xl bg-slate-50 px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-2 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">{fastprisPageContent.explanationTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{fastprisPageContent.explanationBody}</p>
          <h3 className="mt-6 text-lg font-semibold text-slate-900">{fastprisPageContent.onboardingTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{fastprisPageContent.onboardingBody}</p>
        </div>
      </section>

      <ContactBand
        title={fastprisPageContent.ctaAfterPoints.title}
        text={fastprisPageContent.ctaAfterPoints.text}
      />
      <FaqSection items={fastprisPageContent.faq} />
      <ContactBand
        title={fastprisPageContent.ctaAfterFaq.title}
        text={fastprisPageContent.ctaAfterFaq.text}
      />
    </>
  );
}
