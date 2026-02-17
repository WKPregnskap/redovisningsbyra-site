import type { GuidePageData } from "@/types/seo";

// Gjenbrukbare guidesider for SEO-skala og internlenking.
export const guidePages: GuidePageData[] = [
  {
    slug: "bytte-regnskapsforer-guide",
    seo: {
      title: "Bytte regnskapsfører: komplett guide for bedrifter",
      description:
        "Praktisk guide til trygg overgang når du skal bytte regnskapsfører, uten avbrudd i drift.",
      canonicalPath: "/guider/bytte-regnskapsforer-guide",
      h1: "Bytte regnskapsfører: slik gjennomfører du en trygg overgang",
    },
    excerpt:
      "Med riktig plan kan du bytte regnskapsfører uten stans i drift, uten tap av oversikt og med bedre kvalitet fra første måned.",
    sections: [
      {
        heading: "Start med en tydelig overleveringsplan",
        body: "Definer hvem som gjør hva, hvilke data som skal overføres og hvilke frister som gjelder. En konkret plan reduserer risiko for feil i overgangsperioden.",
      },
      {
        heading: "Sikre historikk og dokumentasjon",
        body: "Be om oppdatert regnskapsgrunnlag, avstemminger, systemtilganger og nødvendig dokumentasjon. Gode forberedelser gir trygg oppstart hos ny regnskapsfører.",
      },
      {
        heading: "Prioriter kontinuitet i rapportering",
        body: "Målet er at rapportering og frister går som normalt. God koordinering mellom gammel og ny leverandør er avgjørende for en sømløs overgang.",
      },
    ],
    relatedServices: ["oppstart-og-bytte-regnskapsforer"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
  {
    slug: "fastpris-regnskap-guide",
    seo: {
      title: "Fastpris regnskap: hva bør avtalen inneholde?",
      description:
        "Guide til hvordan fastpris på regnskap fungerer, hva som bør avklares og hvordan du unngår overraskelser.",
      canonicalPath: "/guider/fastpris-regnskap-guide",
      h1: "Fastpris regnskap: slik får du en avtale som faktisk gir forutsigbarhet",
    },
    excerpt:
      "Fastpris fungerer best når leveransen er tydelig beskrevet og forventningene er avklart fra start.",
    sections: [
      {
        heading: "Definer hva som er inkludert",
        body: "Avtalen bør beskrive leveranser, frister, kontaktpunkter og hva som ligger utenfor omfang. Tydelig innhold gir trygghet for begge parter.",
      },
      {
        heading: "Avklar hvordan endringer håndteres",
        body: "Virksomheter utvikler seg. Avtal hvordan volumendringer, nye ansatte eller endret kompleksitet skal vurderes og oppdateres.",
      },
      {
        heading: "Bruk fastpris som styringsverktøy",
        body: "Når pris og leveranse er forutsigbar, blir det enklere å planlegge budsjett, prioriteringer og ressursbruk i virksomheten.",
      },
    ],
    relatedServices: ["radgivning", "bokforing"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
  {
    slug: "hva-koster-regnskapsforer",
    seo: {
      title: "Hva koster regnskapsfører? Dette påvirker prisen",
      description:
        "Oversikt over faktorene som påvirker regnskapskostnad, og hvordan du vurderer riktig leveranse for din bedrift.",
      canonicalPath: "/guider/hva-koster-regnskapsforer",
      h1: "Hva koster regnskapsfører?",
    },
    excerpt:
      "Prisen påvirkes av kompleksitet, volum og oppfølgingsbehov. En god avtale gir tydelig omfang og forutsigbarhet.",
    sections: [
      {
        heading: "Pris handler om omfang",
        body: "Antall bilag, lønnsomfang, rapporteringsbehov og rådgivning påvirker kostnadsbildet. Riktig omfang gir bedre verdi enn laveste pris.",
      },
      {
        heading: "Se etter tydelig ansvar",
        body: "Når ansvar og leveranser er tydelig definert, får du bedre kontroll på kvalitet, frister og forventninger.",
      },
      {
        heading: "Vurder total verdi, ikke bare månedskostnad",
        body: "Rask respons, færre feil og bedre beslutningsstøtte kan ha stor verdi for drift og lønnsomhet over tid.",
      },
    ],
    relatedServices: ["radgivning", "bokforing"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
  {
    slug: "skattefradrag-smabedrift",
    seo: {
      title: "Skattefradrag for småbedrifter: praktisk oversikt",
      description:
        "Guide til hvordan småbedrifter kan jobbe systematisk med fradrag og dokumentasjon.",
      canonicalPath: "/guider/skattefradrag-smabedrift",
      h1: "Skattefradrag for småbedrifter",
    },
    excerpt:
      "Gode rutiner for dokumentasjon og oppfølging gjør det enklere å håndtere fradrag korrekt.",
    sections: [
      {
        heading: "Bygg rutiner for dokumentasjon",
        body: "Fradrag forutsetter at dokumentasjonen er på plass. Sørg for en tydelig rutine for bilag og forklaringer.",
      },
      {
        heading: "Gjør vurderinger jevnlig",
        body: "Gjennomgå kostnadsbildet løpende for å fange opp forhold som bør avklares før perioder avsluttes.",
      },
      {
        heading: "Få faglig kvalitetssikring",
        body: "Ved tvil er det bedre å avklare tidlig enn å rette i etterkant. Det reduserer risiko og sparer tid.",
      },
    ],
    relatedServices: ["radgivning", "bokforing"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
  {
    slug: "enkeltpersonforetak-vs-as",
    seo: {
      title: "Enkeltpersonforetak vs AS: hva bør du velge?",
      description:
        "Praktisk guide til valg av selskapsform basert på risiko, vekstplaner og administrativt behov.",
      canonicalPath: "/guider/enkeltpersonforetak-vs-as",
      h1: "Enkeltpersonforetak eller AS?",
    },
    excerpt:
      "Riktig selskapsform avhenger av risiko, ambisjoner og hvordan du ønsker å organisere virksomheten.",
    sections: [
      {
        heading: "Vurder risiko og ansvar",
        body: "Forskjeller i ansvar og struktur er sentrale i valget. Se dette i sammenheng med bransje og planlagt aktivitet.",
      },
      {
        heading: "Tenk fremover, ikke bare på oppstart",
        body: "Selskapsformen bør støtte der virksomheten skal, ikke bare der den er i dag.",
      },
      {
        heading: "Planlegg økonomirutinene tidlig",
        body: "Uansett valg lønner det seg å etablere gode rutiner for bokføring, fakturering og rapportering fra start.",
      },
    ],
    relatedServices: ["oppstart-og-bytte-regnskapsforer"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
  {
    slug: "mva-feil-guide",
    seo: {
      title: "Vanlige MVA-feil og hvordan du unngår dem",
      description:
        "Guide til de vanligste MVA-feilene i små og mellomstore bedrifter, med praktiske forbedringstiltak.",
      canonicalPath: "/guider/mva-feil-guide",
      h1: "MVA-feil: de vanligste fallgruvene",
    },
    excerpt:
      "Mange MVA-feil skyldes uklare rutiner. Små forbedringer i arbeidsflyten gir stor effekt.",
    sections: [
      {
        heading: "Skap tydelige kontroller",
        body: "Fast kontroll av avgiftsbehandling reduserer risiko for feilføringer og korrigering i etterkant.",
      },
      {
        heading: "Dokumenter vurderinger fortløpende",
        body: "Når vurderinger dokumenteres løpende, blir både intern kontroll og senere gjennomganger enklere.",
      },
      {
        heading: "Avklar usikkerhet tidlig",
        body: "Ved tvil er tidlig avklaring avgjørende. Det minsker risiko og gir tryggere rapportering.",
      },
    ],
    relatedServices: ["radgivning"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
  {
    slug: "arsoppgjor-guide",
    seo: {
      title: "Årsoppgjør guide: steg for steg",
      description:
        "Strukturert guide til et effektivt årsoppgjør med god kvalitet og tydelig fremdrift.",
      canonicalPath: "/guider/arsoppgjor-guide",
      h1: "Årsoppgjør: steg for steg",
    },
    excerpt:
      "Med riktig forberedelse kan årsoppgjøret gjennomføres rolig, effektivt og med god kvalitet.",
    sections: [
      {
        heading: "Start med avstemming",
        body: "Avstemming av sentrale poster tidlig gir bedre kvalitet og mindre tidspress mot slutten av prosessen.",
      },
      {
        heading: "Lag fremdriftsplan",
        body: "Tydelige milepæler med ansvarspunkter sikrer at nødvendige avklaringer tas i rett tid.",
      },
      {
        heading: "Oppsummer forbedringer for neste år",
        body: "Bruk årsoppgjøret som læring for å forbedre rutiner og redusere risiko i neste regnskapsår.",
      },
    ],
    relatedServices: ["arsoppgjor", "bokforing"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
  {
    slug: "regnskapssystem-valg",
    seo: {
      title: "Valg av regnskapssystem: hva bør du se etter?",
      description:
        "Guide til valg av regnskapssystem basert på arbeidsflyt, integrasjoner og behov for innsikt.",
      canonicalPath: "/guider/regnskapssystem-valg",
      h1: "Hvordan velge riktig regnskapssystem",
    },
    excerpt:
      "Riktig systemvalg skal støtte arbeidsflyt, redusere manuelt arbeid og gi bedre kontroll.",
    sections: [
      {
        heading: "Kartlegg dagens prosess",
        body: "Start med å identifisere hvor tid går tapt i dagens flyt, og hvilke funksjoner som faktisk trengs.",
      },
      {
        heading: "Vurder integrasjoner",
        body: "Systemet bør fungere sammen med fakturering, bank, lønn og øvrige verktøy virksomheten bruker.",
      },
      {
        heading: "Tenk skalering",
        body: "Velg løsning som kan vokse med virksomheten, slik at du unngår unødige systembytter senere.",
      },
    ],
    relatedServices: ["bokforing", "fakturering"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
  {
    slug: "digital-bilagshandtering",
    seo: {
      title: "Digital bilagshåndtering: slik får du flyt",
      description:
        "Guide til digital bilagshåndtering som reduserer feil og sparer tid i økonomifunksjonen.",
      canonicalPath: "/guider/digital-bilagshandtering",
      h1: "Digital bilagshåndtering i praksis",
    },
    excerpt:
      "Digital bilagsflyt gir bedre kvalitet, raskere behandling og enklere dokumentasjon.",
    sections: [
      {
        heading: "Standardiser innsendingen",
        body: "En tydelig standard for bilag gjør behandling raskere og reduserer behovet for manuelle avklaringer.",
      },
      {
        heading: "Definer kontrollpunkter",
        body: "Faste kontrollpunkter før bokføring øker kvaliteten og reduserer feil i rapporteringen.",
      },
      {
        heading: "Koble bilag til styringsbehov",
        body: "Når bilagshåndtering fungerer, blir rapporter mer presise og lettere å bruke i ledelsen.",
      },
    ],
    relatedServices: ["bokforing", "fakturering"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
  {
    slug: "lonnsrutiner",
    seo: {
      title: "Lønnsrutiner som reduserer feil",
      description:
        "Praktisk guide til lønnsrutiner som gir trygg gjennomføring og bedre intern kontroll.",
      canonicalPath: "/guider/lonnsrutiner",
      h1: "Lønnsrutiner for trygg og effektiv lønnskjøring",
    },
    excerpt:
      "Gode lønnsrutiner handler om tydelig ansvar, faste frister og kvalitetssikring før utbetaling.",
    sections: [
      {
        heading: "Lag en fast lønnskalender",
        body: "Fast rytme for innhenting av grunnlag, kontroll og utbetaling reduserer stress og feil.",
      },
      {
        heading: "Avklar ansvar",
        body: "Definer hvem som registrerer, hvem som kontrollerer og hvem som godkjenner lønnsgrunnlaget.",
      },
      {
        heading: "Bruk sjekklister",
        body: "En enkel sjekkliste per lønnsperiode gir høyere kvalitet og bedre dokumentasjon.",
      },
    ],
    relatedServices: ["lonn"],
    publishedAt: "2026-02-10",
    author: "Werner Klausen Regnskap AS",
  },
];
