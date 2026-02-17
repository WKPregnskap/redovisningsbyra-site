import { createMetadata } from "@/lib/metadata";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { ReferencesGrid } from "@/components/sections/references-grid";
import { referanserPageContent } from "@/content/pages/referanser";

export const metadata = createMetadata({
  title: "Referanser",
  description:
    "Se hvordan kundene våre opplever samarbeidet med Werner Klausen Regnskap AS, og hvilke resultater de har fått.",
  path: "/referanser",
});

export default function ReferanserPage() {
  return (
    <>
      <PageHero
        eyebrow={referanserPageContent.eyebrow}
        title={referanserPageContent.title}
        lead={referanserPageContent.lead}
      />
      <ReferencesGrid />
      <ContactBand title={referanserPageContent.ctaOne.title} text={referanserPageContent.ctaOne.text} />
      <ContactBand title={referanserPageContent.ctaTwo.title} text={referanserPageContent.ctaTwo.text} />
    </>
  );
}
