import type { FaqItem } from "@/types/content";

export const tjenesterPageContent = {
  eyebrow: "Tjenester",
  title: "Regnskapstjenester med tydelig leveranse og personlig oppfølging",
  lead: "Vi leverer bokføring, lønn, fakturering, årsoppgjør og rådgivning i en struktur som gir deg oppdaterte tall og bedre beslutningsgrunnlag.",
  ctaOne: {
    title: "Usikker på hva du trenger?",
    text: "Vi går raskt gjennom behovet og anbefaler en tjenestepakke med tydelig omfang.",
  },
  faq: [
    {
      question: "Kan vi kombinere flere tjenester i én avtale?",
      answer:
        "Ja, vi setter sammen en løsning som passer bedriftens størrelse, kompleksitet og ambisjoner.",
    },
    {
      question: "Hvordan følger dere opp oss i det daglige?",
      answer:
        "Du får faste leveranser, løpende avklaringer og en rådgiver som følger opp både drift og frister.",
    },
    {
      question: "Passer dette for bedrifter i hele Norge?",
      answer:
        "Ja, vi jobber digitalt og leverer med samme kvalitet uavhengig av hvor bedriften holder til.",
    },
  ] satisfies FaqItem[],
  ctaTwo: {
    title: "Ring oss for en konkret anbefaling",
    text: "Vi forklarer hva som passer best for din bedrift, uten kompliserte prosesser.",
  },
} as const;
