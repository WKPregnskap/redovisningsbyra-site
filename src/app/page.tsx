import { createMetadata } from "@/lib/metadata";
import { homeFlow } from "@/content/pages/home";
import { Hero } from "@/components/sections/hero";
import { SectionCards } from "@/components/sections/section-cards";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ContactBand } from "@/components/sections/contact-band";
import { ReferencesGrid } from "@/components/sections/references-grid";
import { TeamCards } from "@/components/sections/team-cards";
import { omOssPageContent } from "@/content/pages/om-oss";

export const metadata = createMetadata({
  title: "Regnskapsfører med fastpris og tydelig arbeidsflyt",
  description:
    "Strukturert forside med naturlig scrollflyt, tydelige kontaktpunkter og SEO-klare seksjoner.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1) Hero: visible next section + concise value framing. */}
      <Hero data={homeFlow.hero} />

      {/* 2) Why choose us */}
      <SectionCards
        id={homeFlow.sections.why.id}
        title={homeFlow.sections.why.title}
        items={homeFlow.sections.why.items}
        altBackground
      />

      {/* 3) Services */}
      <ServicesGrid
        id={homeFlow.sections.services.id}
        title={homeFlow.sections.services.title}
        services={homeFlow.sections.services.items.map((item) => ({
          title: item.title,
          text: item.body,
          href: item.href,
        }))}
      />

      {/* Conversion block directly after services. */}
      <ContactBand
        title="Vil du vite hvilke tjenester som passer best?"
        text="Ring oss nå for en kort avklaring av behov, omfang og anbefalt oppsett."
        altBackground
      />

      {/* 4) Process */}
      <SectionCards
        id={homeFlow.sections.process.id}
        title={homeFlow.sections.process.title}
        items={homeFlow.sections.process.items}
      />

      {/* 5) About */}
      <TeamCards
        id={homeFlow.sections.about.id}
        title={homeFlow.sections.about.title}
        lead={homeFlow.sections.about.body}
        people={omOssPageContent.team}
        altBackground
      />

      {/* 6) References in the same scroll flow as all other home sections. */}
      <ReferencesGrid
        id={homeFlow.sections.references.id}
        title={homeFlow.sections.references.title}
        lead={homeFlow.sections.references.lead}
      />

      {/* 7) Contact after references in the same one-page flow. */}
      <ContactBand
        id={homeFlow.sections.contact.id}
        title={homeFlow.sections.contact.title}
        text={homeFlow.sections.contact.body}
      />
    </>
  );
}
