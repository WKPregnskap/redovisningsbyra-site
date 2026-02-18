// Innholdsfil for forsiden. Kun tekst og struktur, ingen UI-logikk.
export const homeFlow = {
  hero: {
    title: "Din regnskapsfører for bedrifter i hele Norge",
    summary: "Personlig rådgivning for bedrifter i hele Norge",
    trustPoints: [
      "Autorisert regnskapsfører",
      "Tydelig oppfølging",
      "Personlig rådgivning",
      "Tilgjengelig i hele Norge",
    ],
  },
  sections: {
    why: {
      id: "hvorfor-oss",
      title: "Hvorfor velge oss",
      items: [
        {
          title: "Forutsigbar oppfølging",
          body: "Du får faste rutiner, tydelige frister og en rådgiver som følger opp jevnlig. Det gir kontroll i hverdagen og færre overraskelser ved månedsslutt.",
        },
        {
          title: "Tall som er enkle å bruke",
          body: "Vi leverer oppdaterte rapporter med forklaringer i klart språk. Du ser hva som påvirker lønnsomhet og likviditet, og hva som bør gjøres videre.",
        },
        {
          title: "Tydelig leveranse",
          body: "Samarbeidet beskriver hva som er inkludert, hvordan arbeidsflyten fungerer og hvem som har ansvar for hva.",
        },
      ],
    },
    services: {
      id: "tjenester",
      title: "Våre tjenester",
      items: [
        {
          title: "Bokføring",
          body: "Løpende bokføring, avstemming og rapportering som gir deg oppdaterte tall gjennom hele året.",
          href: "/tjanster/bokforing",
        },
        {
          title: "Lønn",
          body: "Trygg lønnskjøring med kontroll på frister, trekk, refusjoner og myndighetsrapportering.",
          href: "/tjanster/lonn",
        },
        {
          title: "Fakturering",
          body: "Effektive rutiner for fakturering, oppfølging og bedre kontantstrøm i bedriften.",
          href: "/tjanster/fakturering",
        },
        {
          title: "Årsoppgjør",
          body: "Helhetlig årsoppgjør med kvalitetssikring, skattemelding og tydelig fremdriftsplan.",
          href: "/tjanster/arsoppgjor",
        },
        {
          title: "Rådgivning",
          body: "Praktisk økonomirådgivning knyttet til drift, vekst, skatt og bedre beslutningsgrunnlag.",
          href: "/tjanster/radgivning",
        },
        {
          title: "Oppstart / bytte regnskapsfører",
          body: "Trygg oppstart av ny virksomhet eller strukturert overgang fra eksisterende regnskapsfører.",
          href: "/tjanster/oppstart-og-bytte-regnskapsforer",
        },
      ],
    },
    process: {
      id: "arbeidsprosess",
      title: "Hvordan vi jobber",
      items: [
        {
          title: "1. Kartlegging",
          body: "Vi går gjennom dagens situasjon, behov og mål. Deretter får du et tydelig forslag til leveranse.",
        },
        {
          title: "2. Onboarding",
          body: "Vi setter opp arbeidsflyt, ansvar og frister. Overgangen planlegges slik at drift og rapportering fortsetter uten avbrudd.",
        },
        {
          title: "3. Løpende samarbeid",
          body: "Du får faste leveranser, tilgjengelig rådgiver og konkrete anbefalinger basert på oppdaterte tall.",
        },
      ],
    },
    about: {
      id: "om-oss-scroll",
      title: "Om oss",
      body: "Vi er et autorisert regnskapsmiljø som kombinerer digital arbeidsflyt med personlig rådgivning. Målet er å gjøre økonomifunksjonen trygg, effektiv og verdiskapende for ledelsen.",
    },
    references: {
      id: "referanser",
      title: "Referanser",
      lead: "Se hvordan kundene våre opplever samarbeidet med strukturert oppfølging og tydelig rådgivning.",
    },
    contact: {
      id: "kontakt",
      title: "Klar for en tryggere økonomihverdag?",
      // endret: kortere CTA-tekst slik at knapperekken får bedre plass på én linje.
      body: "Ring oss nå, be om oppringing eller send e-post. Vi svarer raskt med et konkret forslag.",
    },
  },
} as const;
