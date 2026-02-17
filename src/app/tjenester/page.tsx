import { createMetadata } from "@/lib/metadata";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FaqSection } from "@/components/sections/faq-section";
import { homeFlow } from "@/content/home-flow";
import { tjenesterPageContent } from "@/content/pages/tjenester";

export const metadata = createMetadata({
  title: "Tjenester innen regnskap, lønn og skatt",
  description:
    "Se våre tjenester for løpende regnskap, lønn, skattemessig oppfølging, årsoppgjør og rådgivning.",
  path: "/tjenester",
});

export default function TjenesterPage() {
  return (
    <>
      <PageHero
        eyebrow={tjenesterPageContent.eyebrow}
        title={tjenesterPageContent.title}
        lead={tjenesterPageContent.lead}
      />
      <ServicesGrid
        services={homeFlow.sections.services.items.map((item) => ({
          title: item.title,
          text: item.body,
          href: item.href,
        }))}
      />
      <ContactBand
        title={tjenesterPageContent.ctaOne.title}
        text={tjenesterPageContent.ctaOne.text}
      />
      <FaqSection items={tjenesterPageContent.faq} />
      <ContactBand
        title={tjenesterPageContent.ctaTwo.title}
        text={tjenesterPageContent.ctaTwo.text}
      />
    </>
  );
}
