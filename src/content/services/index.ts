import type { ServicePageData } from "@/types/seo";

// Tjenestedata for oversikt, detaljsider og SEO.
export const servicePages: ServicePageData[] = [
  {
    slug: "bokforing",
    seo: {
      title: "Bokføring for små og mellomstore bedrifter",
      description:
        "Bokføring med faste rutiner, løpende avstemming og oppdaterte rapporter som gir trygg styring.",
      canonicalPath: "/tjanster/bokforing",
      h1: "Bokføring",
    },
    summary:
      "Vi fører regnskapet løpende, avstemmer sentrale kontoer og sikrer at rapporteringen er korrekt og oppdatert.",
    intro:
      "Bokføring er grunnmuren i økonomistyringen. Når bokføringen er oppdatert og kontrollert, blir det enklere å ta riktige beslutninger og møte frister uten stress.",
    longDescription:
      "Vi etablerer en arbeidsflyt som passer virksomheten din, med tydelige frister for bilag, kontrollpunkter og rapportering. Vi følger opp avvik tidlig og sørger for at regnskapet gir et riktig bilde av drift, kostnader og lønnsomhet. Du får månedlige leveranser i et språk som er lett å bruke i ledelsen.",
    customerGets: [
      "Løpende bokføring av bilag og transaksjoner",
      "Avstemming av bank, reskontro og sentrale balansekontoer",
      "Månedsrapport med forklaringer på utvikling i tallene",
      "Varsling ved avvik eller forhold som bør følges opp",
    ],
    process: [
      "Vi kartlegger bilagsflyt, systemer og ansvarsfordeling",
      "Vi setter opp rutiner for levering, kontroll og bokføring",
      "Vi leverer faste månedsrapporter og følger opp avvik",
      "Vi justerer arbeidsflyten når virksomheten endrer seg",
    ],
    fitFor: [
      "Bedrifter som vil ha oppdaterte tall hver måned",
      "Selskaper som trenger trygg kontroll i grunnregnskapet",
      "Virksomheter som ønsker mindre intern administrasjon",
    ],
    bullets: [
      "Oppdatert regnskap med faste leveransepunkter",
      "Kontroll på frister, dokumentasjon og avstemming",
      "Bedre styringsgrunnlag for ledelsen",
    ],
    ctaText: "Ring oss nå for en vurdering av bokføringsbehovet i din bedrift.",
    faq: [
      {
        question: "Hvor ofte oppdaterer dere bokføringen?",
        answer:
          "Det avtales ut fra behov, men de fleste kunder får løpende oppdatering og fast månedsrapport.",
      },
      {
        question: "Kan dere bruke systemene vi allerede har?",
        answer:
          "Ja, i mange tilfeller viderefører vi dagens oppsett og forbedrer arbeidsflyten gradvis.",
      },
      {
        question: "Får vi hjelp hvis vi mangler bilagsrutiner?",
        answer:
          "Ja, vi etablerer en enkel og tydelig prosess for bilag, godkjenning og dokumentasjon.",
      },
      {
        question: "Hvordan får vi innsikt i tallene?",
        answer:
          "Du får rapporter med forklaring i klart språk, slik at tallene kan brukes direkte i beslutninger.",
      },
    ],
    relatedGuides: ["regnskapssystem-valg", "digital-bilagshandtering", "arsoppgjor-guide"],
  },
  {
    slug: "lonn",
    seo: {
      title: "Lønnstjenester med trygg gjennomføring",
      description:
        "Vi håndterer lønn med faste rutiner, kontroll på frister og tydelig oppfølging av ansatte og ledelse.",
      canonicalPath: "/tjanster/lonn",
      h1: "Lønn",
    },
    summary:
      "Trygg lønnskjøring med kontroll på variable tillegg, fravær, trekk, refusjoner og myndighetsrapportering.",
    intro:
      "Lønn må være korrekt hver gang. Vi sørger for en trygg lønnsprosess med tydelige rutiner, kontroll og tilgjengelig rådgivning.",
    longDescription:
      "Vi setter opp en fast lønnskalender med frister for grunnlag, kontroll og utbetaling. Variabler som overtid, bonus, fravær og refusjoner gjennomgås før kjøring. I tillegg bistår vi med spørsmål om personaldata, rapportering og praktisk håndtering av lønnsrelaterte avklaringer.",
    customerGets: [
      "Fast lønnskjøring med dokumentert kontroll",
      "Oppfølging av fravær, refusjoner og variable tillegg",
      "Myndighetsrapportering til rett tid",
      "Praktisk rådgivning i lønnsrelaterte spørsmål",
    ],
    process: [
      "Vi kartlegger dagens lønnsrutiner og frister",
      "Vi etablerer lønnskalender og innsendingsfrister",
      "Vi gjennomfører lønnskjøring med fast kontroll",
      "Vi følger opp avvik og forbedrer prosessen løpende",
    ],
    fitFor: [
      "Bedrifter med ansatte og faste lønnsperioder",
      "Selskaper som ønsker færre feil i lønnsgrunnlaget",
      "Virksomheter som vil ha trygg håndtering av frister",
    ],
    bullets: [
      "Korrekt lønn med faste rutiner",
      "Trygg håndtering av fravær og refusjoner",
      "Rask avklaring ved spørsmål fra ansatte og ledelse",
    ],
    ctaText: "Ring oss for en trygg plan for lønn i din bedrift.",
    faq: [
      {
        question: "Kan dere overta lønn fra nåværende leverandør?",
        answer:
          "Ja, vi planlegger overgangen slik at lønnskjøringen fortsetter uten avbrudd.",
      },
      {
        question: "Hva trenger dere fra oss før lønnskjøring?",
        answer:
          "Vi avklarer en fast sjekkliste med grunnlag, fravær og variabler for hver lønnsperiode.",
      },
      {
        question: "Håndterer dere også rapportering til myndigheter?",
        answer:
          "Ja, rapportering inngår i prosessen og følger faste frister.",
      },
      {
        question: "Kan vi få rådgivning rundt lønnsrutiner?",
        answer:
          "Ja, vi gir praktiske anbefalinger som reduserer feil og sparer tid i administrasjonen.",
      },
    ],
    relatedGuides: ["lonnsrutiner", "mva-feil-guide"],
  },
  {
    slug: "fakturering",
    seo: {
      title: "Fakturering og oppfølging av innbetalinger",
      description:
        "Fakturering med tydelige rutiner og bedre kontantstrøm gjennom strukturert oppfølging.",
      canonicalPath: "/tjanster/fakturering",
      h1: "Fakturering",
    },
    summary:
      "Vi hjelper deg med rutiner for fakturering, oppfølging av utestående og bedre forutsigbarhet i kontantstrømmen.",
    intro:
      "God fakturering handler både om tempo og kontroll. Når faktura sendes riktig og i tide, blir kontantstrømmen mer stabil.",
    longDescription:
      "Vi etablerer en faktureringsprosess med tydelig ansvarsfordeling, faste tidspunkter og kontroll av grunnlag. Videre setter vi opp oppfølging av forfall og avklaringer rundt kreditnota, korrigering og dokumentasjon. Målet er raskere innbetalinger og mindre administrativt arbeid.",
    customerGets: [
      "Strukturert faktureringsprosess med faste frister",
      "Kontroll av fakturagrunnlag før utsendelse",
      "Oppfølging av utestående og forfall",
      "Bedre oversikt over kontantstrøm og innbetalinger",
    ],
    process: [
      "Vi kartlegger dagens fakturarutiner og utfordringer",
      "Vi etablerer en tydelig flyt fra leveranse til faktura",
      "Vi følger opp forfall og avklarer avvik",
      "Vi rapporterer utvikling i innbetalinger over tid",
    ],
    fitFor: [
      "Bedrifter med høy fakturafrekvens",
      "Selskaper som ønsker bedre likviditetskontroll",
      "Virksomheter med behov for tydeligere fakturaprosesser",
    ],
    bullets: [
      "Raskere og mer presis fakturering",
      "Bedre oppfølging av utestående",
      "Mer forutsigbar kontantstrøm",
    ],
    ctaText: "Send e-post eller ring oss for å forbedre faktureringsflyten.",
    faq: [
      {
        question: "Kan dere hjelpe oss å redusere sen betaling?",
        answer:
          "Ja, vi etablerer rutiner for oppfølging av forfall og tydeligere fakturaflyt.",
      },
      {
        question: "Passer tjenesten for prosjektbaserte bedrifter?",
        answer:
          "Ja, vi tilpasser prosessen til del-fakturering, milepæler og avtalte leveranser.",
      },
      {
        question: "Kan fakturering kobles med bokføring?",
        answer:
          "Ja, vi sikrer at fakturaflyten henger sammen med regnskap og rapportering.",
      },
      {
        question: "Hvor raskt kan vi komme i gang?",
        answer:
          "Vi avtaler oppstart med en gang og setter opp en enkel plan for de første ukene.",
      },
    ],
    relatedGuides: ["regnskapssystem-valg", "digital-bilagshandtering"],
  },
  {
    slug: "arsoppgjor",
    seo: {
      title: "Årsoppgjør med tydelig fremdrift",
      description:
        "Vi gjennomfører årsoppgjør med tydelig fremdrift, struktur og trygg rapportering.",
      canonicalPath: "/tjanster/arsoppgjor",
      h1: "Årsoppgjør",
    },
    summary:
      "Vi planlegger og gjennomfører årsoppgjøret med tydelig fremdrift, kontroll av grunnlag og gode avklaringer underveis.",
    intro:
      "Årsoppgjør blir enklere når grunnarbeidet er godt. Vi sørger for plan, struktur og fremdrift som gir trygg levering.",
    longDescription:
      "Gjennom året følger vi opp avstemming og dokumentasjon slik at årsoppgjøret går smidig. I årsoppgjørsfasen gjennomgår vi regnskap, vurderinger og nødvendige avklaringer med deg før innsending. Du får tydelig status underveis og en prosess som er lett å forholde seg til.",
    customerGets: [
      "Planlagt fremdrift med tydelige milepæler",
      "Kontrollert grunnlag før innsending",
      "Avklaringer i forkant for å redusere risiko",
      "Trygg håndtering av skattemelding og årsavslutning",
    ],
    process: [
      "Vi starter med status på avstemming og dokumentasjon",
      "Vi gjennomfører kontroller og nødvendige avklaringer",
      "Vi ferdigstiller årsoppgjør med løpende dialog",
      "Vi oppsummerer læringspunkter for neste regnskapsår",
    ],
    fitFor: [
      "Bedrifter som ønsker trygg avslutning av regnskapsåret",
      "Selskaper som vil redusere tidsbruk i årsoppgjørsperioden",
      "Virksomheter som ønsker bedre kontroll på dokumentasjon",
    ],
    bullets: [
      "Tydelig plan og fremdrift",
      "God kontroll i grunnlaget",
      "Trygg og strukturert innsending",
    ],
    ctaText: "Ring oss for en trygg plan for neste årsoppgjør.",
    faq: [
      {
        question: "Når bør vi starte planlegging av årsoppgjør?",
        answer:
          "Jo tidligere vi får oversikt over avstemming og dokumentasjon, desto enklere blir prosessen.",
      },
      {
        question: "Kan dere bistå med avklaringer før innsending?",
        answer:
          "Ja, vi går gjennom nødvendige vurderinger og avklarer spørsmål før sluttføring.",
      },
      {
        question: "Får vi oversikt over hva som gjenstår?",
        answer:
          "Ja, du får tydelig status på fremdrift og neste steg gjennom hele prosessen.",
      },
      {
        question: "Kan dere bistå hvis vi ligger bakpå?",
        answer:
          "Ja, vi prioriterer det viktigste først og lager en konkret plan for å komme ajour.",
      },
    ],
    relatedGuides: ["arsoppgjor-guide", "skattefradrag-smabedrift"],
  },
  {
    slug: "radgivning",
    seo: {
      title: "Økonomisk rådgivning for bedre beslutninger",
      description:
        "Praktisk rådgivning på regnskap, lønnsomhet, likviditet og drift for små og mellomstore bedrifter.",
      canonicalPath: "/tjanster/radgivning",
      h1: "Rådgivning",
    },
    summary:
      "Vi kobler regnskapstall til praktiske beslutninger og hjelper deg prioritere tiltak som gir effekt.",
    intro:
      "Rådgivning gir størst verdi når den er konkret. Vi bruker oppdaterte tall til å foreslå tiltak du kan gjennomføre i praksis.",
    longDescription:
      "Sammen med deg analyserer vi utvikling i inntekter, kostnader, margin og likviditet. Vi ser på hvilke grep som kan forbedre drift, redusere risiko og styrke beslutningsgrunnlaget. Rådene tilpasses virksomhetens fase, slik at du får støtte både i stabil drift og i vekstperioder.",
    customerGets: [
      "Regelmessig gjennomgang av nøkkeltall",
      "Konkrete anbefalinger med tydelig prioritering",
      "Støtte i økonomiske valg knyttet til vekst og drift",
      "Tett dialog med rådgiver som kjenner virksomheten",
    ],
    process: [
      "Vi setter mål og prioriterte fokusområder",
      "Vi går gjennom tallgrunnlag og utvikling",
      "Vi foreslår konkrete tiltak og følger opp effekt",
      "Vi justerer planen når virksomheten endrer seg",
    ],
    fitFor: [
      "Ledere som ønsker bedre beslutningsstøtte",
      "Bedrifter i vekst eller omstilling",
      "Selskaper som vil jobbe mer aktivt med lønnsomhet",
    ],
    bullets: [
      "Rådgivning med utgangspunkt i oppdaterte tall",
      "Konkrete tiltak fremfor generelle råd",
      "Bedre styring av lønnsomhet og likviditet",
    ],
    ctaText: "Ring oss for en rådgivningssamtale om dine viktigste økonomiske prioriteringer.",
    faq: [
      {
        question: "Hva skiller rådgivning fra vanlig regnskapsleveranse?",
        answer:
          "Rådgivning handler om å bruke tallene aktivt til prioriteringer, tiltak og bedre beslutninger.",
      },
      {
        question: "Hvor ofte bør vi ha rådgivningsmøter?",
        answer:
          "Det avhenger av behov, men mange har god effekt av faste månedlige eller kvartalsvise gjennomganger.",
      },
      {
        question: "Kan rådgivning kombineres med fastprisavtale?",
        answer:
          "Ja, rådgivning kan inngå i en fastprisstruktur med tydelig omfang.",
      },
      {
        question: "Hva får vi etter et rådgivningsmøte?",
        answer:
          "Du får en kort oppsummering med prioriterte tiltak og hva som bør gjøres først.",
      },
    ],
    relatedGuides: ["hva-koster-regnskapsforer", "fastpris-regnskap-guide"],
  },
  {
    slug: "oppstart-og-bytte-regnskapsforer",
    seo: {
      title: "Oppstart og bytte av regnskapsfører",
      description:
        "Trygg oppstart for nye selskaper og strukturert bytte av regnskapsfører uten avbrudd i drift.",
      canonicalPath: "/tjanster/oppstart-og-bytte-regnskapsforer",
      h1: "Oppstart og bytte regnskapsfører",
    },
    summary:
      "Vi hjelper deg trygt i gang med ny virksomhet eller overgang fra eksisterende regnskapsfører.",
    intro:
      "Enten du starter selskap eller bytter leverandør, er målet det samme: en ryddig prosess uten driftsstans.",
    longDescription:
      "Vi lager en konkret oppstartsplan med ansvar og frister. Ved bytte innhenter vi nødvendige data, gjennomgår historikk og etablerer ny arbeidsflyt så raskt som mulig. Ved nyetablering hjelper vi med rutiner for bokføring, fakturering, lønn og rapportering fra første periode.",
    customerGets: [
      "Tydelig overgangsplan med ansvarspunkter",
      "Trygg overføring av historikk og dokumentasjon",
      "Etablering av rutiner for løpende drift",
      "Tett oppfølging i oppstartsfasen",
    ],
    process: [
      "Vi kartlegger nåsituasjon og mål",
      "Vi innhenter nødvendig informasjon og grunnlag",
      "Vi setter opp ny leveranse og faste rutiner",
      "Vi følger opp tett til driften er stabil",
    ],
    fitFor: [
      "Nyetablerte bedrifter som vil starte riktig",
      "Selskaper som ønsker å bytte regnskapsfører",
      "Virksomheter som trenger trygg overgang uten stans",
    ],
    bullets: [
      "Trygg oppstart med tydelig struktur",
      "Kontrollert bytteprosess uten unødige avbrudd",
      "Rask etablering av nye rutiner",
    ],
    ctaText: "Ta kontakt for en trygg plan for oppstart eller bytte av regnskapsfører.",
    faq: [
      {
        question: "Hvor lang tid tar et bytte av regnskapsfører?",
        answer:
          "Tidsbruk avhenger av kompleksitet, men vi legger opp til en smidig overgang med tydelig fremdrift.",
      },
      {
        question: "Mister vi historikk ved bytte?",
        answer:
          "Nei, vi henter inn og kontrollerer relevant historikk som del av overgangen.",
      },
      {
        question: "Kan dere hjelpe ved etablering av nytt AS?",
        answer:
          "Ja, vi bistår med rutiner, oppsett og oppfølging slik at økonomifunksjonen fungerer fra start.",
      },
      {
        question: "Hvordan sikrer dere at frister holdes i overgangsperioden?",
        answer:
          "Vi lager en konkret plan med ansvar og kontrollpunkter, og følger opp tett til alt er på plass.",
      },
    ],
    relatedGuides: ["bytte-regnskapsforer-guide", "enkeltpersonforetak-vs-as"],
  },
];
