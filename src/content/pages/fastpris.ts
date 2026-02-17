import type { FaqItem } from "@/types/content";

export const fastprisPageContent = {
  eyebrow: "Fastpris",
  title: "Fastpris på regnskap for bedre kontroll og færre overraskelser",
  lead: "Du får en tydelig avtale med fast månedlig pris, klare leveranser og en rådgiver som følger opp. Målet er forutsigbar økonomistyring og trygg drift gjennom hele året.",
  includedTitle: "Dette får du med fastpris",
  points: [
    "Tydelig beskrevet leveranse med fast kontaktpunkt",
    "Faste frister og planlagt rapportering gjennom året",
    "Løpende faglig støtte på regnskap, lønn og skatt",
    "Proaktiv dialog ved endringer i drift eller omfang",
  ],
  explanationTitle: "Slik beregner vi fastpris",
  explanationBody:
    "Fastprisen vurderes ut fra virksomhetens kompleksitet, arbeidsmengde, rapporteringsbehov og ønsket oppfølging. Vi bruker en strukturert vurdering av bilagsflyt, lønnsomfang, systembruk og rådgivningsbehov. Resultatet er en avtale som er enkel å forstå og lett å styre etter.",
  onboardingTitle: "Slik foregår onboarding",
  onboardingBody:
    "Onboarding starter med en praktisk gjennomgang av dagens rutiner. Deretter setter vi opp ansvar, arbeidsflyt og frister, og sørger for trygg overføring av nødvendig informasjon. Målet er en smidig oppstart uten avbrudd i den daglige driften.",
  faq: [
    {
      question: "Hvorfor velger mange bedrifter fastpris?",
      answer:
        "Fastpris gir forutsigbarhet i budsjettarbeidet og tydeligere rammer for samarbeidet. Det gjør økonomistyringen enklere.",
    },
    {
      question: "Får vi fortsatt rådgivning med fastpris?",
      answer:
        "Ja. Rådgivning er en viktig del av leveransen, og vi følger opp løpende med konkrete anbefalinger.",
    },
    {
      question: "Hva skjer hvis bedriften endrer seg?",
      answer:
        "Ved større endringer justerer vi avtalen i dialog med deg, slik at omfang og leveranse fortsatt er riktig.",
    },
  ] satisfies FaqItem[],
  ctaAfterPoints: {
    title: "Vil du vite om fastpris passer for din bedrift?",
    text: "Ring oss for en rask gjennomgang av behov, omfang og anbefalt leveranse.",
  },
  ctaAfterFaq: {
    title: "Ønsker du et konkret forslag?",
    text: "Ta kontakt, så setter vi opp et tydelig fastpristilbud uten komplisert prosess.",
  },
} as const;
