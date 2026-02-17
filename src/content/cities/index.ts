import type { CityLanding } from "@/types/content";

const standardLinks = [
  { href: "/tjanster/bokforing", label: "Bokføring" },
  { href: "/tjanster/lonn", label: "Lønn" },
  { href: "/tjanster/radgivning", label: "Rådgivning" },
] as const;

export const cityLandings: CityLanding[] = [
  {
    slug: "regnskapsforer-oslo",
    city: "Oslo",
    title: "Regnskapsfører Oslo | Fastpris og personlig oppfølging",
    description:
      "Ser du etter regnskapsfører i Oslo? Vi hjelper bedrifter med bokføring, lønn, fakturering og rådgivning med fastpris.",
    hero: "Regnskapsfører i Oslo for bedrifter som vil ha kontroll og fremdrift",
    lead:
      "Som regnskapsfører i Oslo hjelper vi selskaper med høy aktivitet og raske beslutninger. Du får oppdaterte tall, tydelige rutiner og en rådgiver som er lett å nå.",
    blocks: [
      {
        heading: "Regnskapsfører Oslo: fra tallproduksjon til styringsverktøy",
        text:
          "Mange virksomheter i Oslo jobber i høyt tempo og trenger regnskap som gir beslutningskraft, ikke bare historikk. Vår leveranse starter med struktur i bilagsflyt, avstemming og rapportering, men målet er alltid å gjøre økonomien mer anvendelig i ledelsen. Vi følger opp faste kontrollpunkter gjennom måneden og leverer rapporter som forklarer utvikling i inntekt, kostnad og likviditet i klart språk. Når tallene er oppdaterte og forståelige, blir det enklere å styre margin, bemanning og investeringer. Derfor jobber vi som regnskapsfører i Oslo med både kvalitet i grunnarbeidet og tett faglig dialog, slik at du får en økonomipartner som bidrar i hverdagen.",
      },
      {
        heading: "Fastpris for bedrifter i Oslo som ønsker forutsigbarhet",
        text:
          "Fastpris er særlig nyttig for bedrifter som vil ha ro i budsjettet og tydelige forventninger i samarbeidet. Vi avklarer leveranseomfang i forkant, beskriver ansvar og frister, og følger opp med jevn rytme gjennom året. Når behovet endrer seg, justeres avtalen i dialog før endringen får konsekvenser i leveransen. Slik unngår du overraskelser og får bedre kontroll på økonomifunksjonen. For kunder i Oslo med vekst, ansettelser eller skiftende aktivitetsnivå er denne modellen effektiv: du vet hva som leveres, hvem du kontakter, og hvordan vi jobber sammen for å holde kvalitet og fremdrift.",
      },
      {
        heading: "Samarbeid som fungerer digitalt, men oppleves personlig",
        text:
          "Selv om arbeidsflyten er digital, er oppfølgingen personlig. Du får en rådgiver som kjenner virksomheten, forstår prioriteringene dine og svarer raskt når spørsmål oppstår. Vi bistår med bokføring, lønn, fakturering, årsoppgjør og rådgivning i én helhetlig struktur, slik at økonomifunksjonen ikke blir fragmentert. For bedrifter i Oslo betyr det mindre administrativ belastning internt og mer tid til kunder, leveranser og vekst. Når regnskapet fungerer som en stabil del av driften, reduseres risiko for feil, og ledelsen får bedre grunnlag for riktige valg. Det er dette vi mener med moderne regnskapsførsel i Oslo: tydelig, tilgjengelig og verdiskapende.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      {
        question: "Jobber dere med bedrifter i hele Oslo?",
        answer:
          "Ja, vi jobber med kunder i hele Oslo-området og leverer digitalt med personlig oppfølging.",
      },
      {
        question: "Kan vi bytte regnskapsfører uten avbrudd?",
        answer:
          "Ja. Vi lager en overgangsplan som sikrer kontinuitet i rapportering og frister.",
      },
      {
        question: "Tilbyr dere fastpris i Oslo?",
        answer:
          "Ja, vi tilbyr fastpris med tydelig omfang og forutsigbar månedlig kostnad.",
      },
      {
        question: "Hvilke tjenester leverer dere?",
        answer:
          "Vi leverer bokføring, lønn, fakturering, årsoppgjør og løpende økonomisk rådgivning.",
      },
    ],
  },
  {
    slug: "regnskapsforer-bergen",
    city: "Bergen",
    title: "Regnskapsfører Bergen | Fastpris for bedrifter",
    description:
      "Regnskapsfører i Bergen med fastpris, tydelige rutiner og personlig rådgivning for små og mellomstore bedrifter.",
    hero: "Regnskapsfører i Bergen med fokus på kvalitet, flyt og forutsigbarhet",
    lead:
      "Trenger du regnskapsfører i Bergen som er tilgjengelig og konkret? Vi kombinerer digital levering med tett oppfølging og faste leveranser gjennom året.",
    blocks: [
      {
        heading: "Regnskapsfører Bergen for bedrifter med sesong og variasjon",
        text:
          "Mange bedrifter i Bergen opplever perioder med ulik aktivitet. Da er det avgjørende med regnskap som gir jevn kontroll, også når tempoet endrer seg. Vi bygger rutiner for bilag, avstemming og rapportering som gjør at tallene holder høy kvalitet hver måned, ikke bare ved årsslutt. I praksis betyr det at du får tydelig status på drift, kostnader og likviditet før små utfordringer vokser seg store. Som regnskapsfører i Bergen jobber vi aktivt med å gjøre økonomien styrbar og forståelig, slik at ledelsen kan ta gode beslutninger i tide. Denne kombinasjonen av struktur og tilgjengelig rådgivning gir tryggere drift i både stabile og mer krevende perioder.",
      },
      {
        heading: "Fastpris med tydelig innhold og god oppfølging",
        text:
          "Vår fastprismodell er laget for bedrifter som ønsker forutsigbarhet. Vi beskriver leveransen tydelig: hva som inngår, hvilke frister som gjelder og hvordan samarbeidet gjennomføres i praksis. Du slipper usikkerhet rundt løpende timebruk og får en økonomifunksjon som er enklere å planlegge rundt. Hvis virksomheten i Bergen endrer omfang, justerer vi avtalen i forkant slik at leveransen fortsatt passer behovet. På den måten får du kontroll på både kvalitet og kostnad over tid. Fastpris handler ikke bare om prisform, men om tydelig forventningsstyring og bedre samspill mellom kunde og regnskapsfører.",
      },
      {
        heading: "Fra rapport til handling i hverdagen",
        text:
          "Vi leverer ikke bare tall, men innsikt du kan bruke. Rapporteringen forklares i klart språk, med fokus på hva som bør følges opp nå. For mange ledere i Bergen er det nettopp dette som skaper verdi: raskere avklaringer, bedre prioriteringer og færre økonomiske overraskelser. Med én fast kontaktperson får du kontinuitet i dialogen og en rådgiver som kjenner virksomheten. Resultatet er en mer effektiv økonomihverdag der regnskap, lønn og rådgivning henger sammen. Når økonomifunksjonen blir en støtte for drift og vekst, blir også beslutningene tryggere.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      {
        question: "Tilbyr dere regnskapstjenester i hele Bergen?",
        answer: "Ja, vi leverer til bedrifter i hele Bergen med samme struktur og responstid.",
      },
      {
        question: "Hvordan fungerer oppstart hos dere?",
        answer:
          "Vi starter med kartlegging av behov, setter plan for onboarding og etablerer faste leveransepunkter.",
      },
      {
        question: "Kan vi få både lønn og bokføring i samme avtale?",
        answer: "Ja, vi setter sammen en tjenestepakke som passer virksomheten din.",
      },
      {
        question: "Er fastpris mulig også ved vekst?",
        answer: "Ja, avtalen kan justeres når behovet endrer seg, med tydelig avklaring i forkant.",
      },
    ],
  },
  {
    slug: "regnskapsforer-trondheim",
    city: "Trondheim",
    title: "Regnskapsfører Trondheim | Tydelig leveranse på fastpris",
    description:
      "Regnskapsfører i Trondheim med bokføring, lønn, årsoppgjør og rådgivning for bedrifter som vil ha kontroll.",
    hero: "Regnskapsfører i Trondheim som gir struktur i drift og vekst",
    lead:
      "Vi hjelper bedrifter i Trondheim med regnskap som er oppdatert, forståelig og nyttig i ledelsen. Du får faste leveranser og personlig oppfølging.",
    blocks: [
      {
        heading: "Regnskapsfører Trondheim med fokus på tydelige prosesser",
        text:
          "Når prosessene er tydelige, blir regnskapet bedre. Vi starter med å kartlegge hvordan bilag, faktura, lønn og dokumentasjon håndteres i dag, og etablerer deretter en arbeidsflyt som er enkel å følge. For bedrifter i Trondheim gir dette mindre intern usikkerhet og færre stopp i hverdagen. Vi avstemmer sentrale områder løpende og leverer rapportering på faste tidspunkter, slik at du alltid vet hvor virksomheten står økonomisk. Som regnskapsfører i Trondheim er vårt mål å gjøre økonomifunksjonen robust og forutsigbar, ikke personavhengig. Da får ledelsen et bedre grunnlag for planlegging, investeringer og prioritering av ressurser.",
      },
      {
        heading: "Personlig rådgivning med praktisk nytte",
        text:
          "Rådgivning har verdi når den er konkret. Derfor kobler vi utviklingen i regnskapet direkte til tiltak i drift og økonomistyring. Vi ser på margin, kostnadsutvikling, likviditet og kapasitetsbehov, og diskuterer hvilke grep som bør tas først. For bedrifter i Trondheim med ambisjoner om vekst gir dette bedre beslutningshastighet og mindre risiko. Du får en rådgiver som kjenner virksomheten over tid, og som kan gi tydelige anbefalinger i stedet for generelle råd. Denne nærheten i samarbeidet gjør at økonomiarbeidet blir et aktivt verktøy, ikke bare en rapporteringsplikt.",
      },
      {
        heading: "Fastpris som støtter langsiktig samarbeid",
        text:
          "Med fastpris får du et tydelig rammeverk for leveransen. Vi beskriver hva som inngår, hvordan oppfølgingen skjer og hvilke kontaktpunkter du kan forvente. Det gir trygghet i budsjettet og enklere planlegging internt. Når bedriften i Trondheim får nye behov, justerer vi avtalen i dialog slik at omfang og leveranse fortsatt er riktig. Fastpris gir dermed både forutsigbar kostnad og bedre kvalitet i samarbeidet, fordi forventningene er avklart fra start. For mange kunder er dette en viktig grunn til at samarbeidet blir mer effektivt over tid.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      {
        question: "Passer tjenestene for teknologibedrifter i Trondheim?",
        answer: "Ja, vi jobber med flere kunnskapsbedrifter og tilpasser leveransen til deres behov.",
      },
      {
        question: "Kan vi få jevnlig rådgivning gjennom året?",
        answer: "Ja, rådgivning kan inngå som faste oppfølgingspunkter i avtalen.",
      },
      {
        question: "Hvor raskt kan vi starte samarbeidet?",
        answer: "Normalt kan vi starte raskt etter kartlegging og avklaringer rundt oppstart.",
      },
      {
        question: "Tilbyr dere fastpris i Trondheim?",
        answer: "Ja, vi tilbyr fastpris med tydelig omfang og avklart leveranseplan.",
      },
    ],
  },
  {
    slug: "regnskapsforer-stavanger",
    city: "Stavanger",
    title: "Regnskapsfører Stavanger | Effektiv økonomiflyt",
    description:
      "Regnskapsfører i Stavanger for bedrifter som ønsker forutsigbarhet, fastpris og tett rådgivning.",
    hero: "Regnskapsfører i Stavanger med rask respons og tydelig retning",
    lead:
      "Vi leverer regnskapstjenester til bedrifter i Stavanger som trenger høy kvalitet, tilgjengelig rådgiver og god kontroll i hverdagen.",
    blocks: [
      {
        heading: "Regnskapsfører Stavanger for virksomheter med høyt tempo",
        text:
          "I et marked med raske endringer er oppdatert økonomi avgjørende. Vi hjelper bedrifter i Stavanger med løpende bokføring, avstemming og rapportering som gir et tydelig bilde av status gjennom måneden. Når tallene er oppdaterte, blir det enklere å styre kostnader, følge opp likviditet og ta riktige beslutninger i tide. Vi legger vekt på en enkel arbeidsflyt der ansvar og frister er avklart, slik at økonomifunksjonen fungerer stabilt selv i perioder med høy aktivitet. Som regnskapsfører i Stavanger er vår rolle å redusere usikkerhet og skape mer forutsigbarhet i ledelsen.",
      },
      {
        heading: "Tett samarbeid og direkte kontakt",
        text:
          "Mange kunder ønsker en regnskapsfører som er tilgjengelig når det virkelig gjelder. Derfor prioriterer vi korte responstider og tydelig kommunikasjon på telefon og e-post. Du får én rådgiver som kjenner virksomheten og kan gi presise svar uten unødige runder. Vi følger opp praktiske spørsmål om lønn, fakturering, skattemessige avklaringer og rapportering, slik at du slipper å bruke tid på å koordinere mellom ulike leverandører. For bedrifter i Stavanger betyr dette en enklere hverdag med bedre flyt mellom drift og økonomi.",
      },
      {
        heading: "Fastpris som gir trygghet i budsjettet",
        text:
          "Vi tilbyr fastpris fordi det gir tydelighet i både kostnad og leveranse. Avtalen beskriver innholdet konkret, og vi gjennomfører samarbeidet med faste leveransepunkter gjennom året. Hvis virksomheten i Stavanger endrer omfang, avklarer vi justeringer i forkant. Dermed unngår du overraskelser og får en løsning som er lettere å styre etter. Fastpris kombinert med personlig oppfølging gir et samarbeid der du vet hva du får, når du får det og hvem du kontakter ved behov.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      { question: "Leverer dere regnskap i hele Stavanger-regionen?", answer: "Ja, vi jobber med kunder i hele regionen med digital leveranse og personlig oppfølging." },
      { question: "Kan dere hjelpe med både lønn og regnskap?", answer: "Ja, vi leverer helhetlig løsning med bokføring, lønn og rådgivning." },
      { question: "Hvordan avtales fastpris?", answer: "Vi kartlegger behov og setter en tydelig avtale med avklart omfang." },
      { question: "Får vi faste rapporter?", answer: "Ja, rapportering leveres på faste tidspunkter med tydelige forklaringer." },
    ],
  },
  {
    slug: "regnskapsforer-kristiansand",
    city: "Kristiansand",
    title: "Regnskapsfører Kristiansand | Trygg økonomi på fastpris",
    description:
      "Regnskapsfører i Kristiansand med fokus på forutsigbar leveranse, personlig rådgivning og oppdatert rapportering.",
    hero: "Regnskapsfører i Kristiansand for bedrifter som vil ha oversikt",
    lead:
      "Vi hjelper bedrifter i Kristiansand med å etablere en økonomiflyt som er enkel å følge, lett å bruke og trygg over tid.",
    blocks: [
      {
        heading: "Regnskapsfører Kristiansand med tydelig struktur",
        text:
          "God økonomistyring starter med gode rutiner. Vi setter opp en arbeidsflyt for bilag, bokføring og avstemming som gir stabile leveranser hver måned. For bedrifter i Kristiansand betyr dette færre avbrudd i hverdagen og bedre kontroll på økonomien. Vi følger opp frister aktivt og avklarer avvik tidlig, slik at rapporteringen holder høy kvalitet gjennom hele året. Når grunnlaget er ryddig, blir også beslutningsgrunnlaget bedre. Vår rolle som regnskapsfører i Kristiansand er å gjøre økonomifunksjonen til en støtte for drift, ikke en belastning.",
      },
      {
        heading: "Praktisk rådgivning tilpasset virksomheten",
        text:
          "Vi legger vekt på rådgivning som er konkret og relevant for ledergruppen. I stedet for generelle vurderinger går vi rett på hva tallene forteller om kontantstrøm, kostnadsutvikling og lønnsomhet. Deretter prioriterer vi tiltak som kan gjennomføres i praksis. For bedrifter i Kristiansand gir dette mer handlingskraft i hverdagen og tryggere beslutninger over tid. Du får en rådgiver som kjenner virksomheten og følger opp jevnlig, slik at anbefalingene blir treffsikre.",
      },
      {
        heading: "Fastpris som gjør planlegging enklere",
        text:
          "Fastpris gir forutsigbarhet i budsjettarbeidet og tydelig avklaring av leveransen. Vi beskriver hva som er inkludert, hvordan oppfølgingen gjennomføres og hvilke kontaktpunkter du kan forvente. Ved endringer i bedriften justeres avtalen i dialog, slik at du alltid har riktig omfang. Denne tydeligheten er spesielt verdifull for bedrifter i Kristiansand som ønsker en langsiktig samarbeidspartner på økonomi. Resultatet er et samarbeid med mindre usikkerhet og bedre flyt.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      { question: "Kan dere hjelpe nyetablerte bedrifter i Kristiansand?", answer: "Ja, vi bistår både oppstartsselskaper og etablerte virksomheter." },
      { question: "Får vi en fast kontaktperson?", answer: "Ja, du får en rådgiver som følger virksomheten over tid." },
      { question: "Tilbyr dere fastpris?", answer: "Ja, vi tilbyr fastpris med tydelig beskrivelse av leveransen." },
      { question: "Hvordan kommer vi i gang?", answer: "Vi starter med en kartlegging og setter deretter opp en konkret oppstartsplan." },
    ],
  },
  {
    slug: "regnskapsforer-tromso",
    city: "Tromsø",
    title: "Regnskapsfører Tromsø | Digital leveranse med personlig oppfølging",
    description:
      "Regnskapsfører i Tromsø med fastpris, strukturert leveranse og rådgivning for bedrifter i hele regionen.",
    hero: "Regnskapsfører i Tromsø som kombinerer nærhet og effektiv digital drift",
    lead:
      "Vi leverer regnskapstjenester til bedrifter i Tromsø med tydelige rutiner, rask respons og rådgivning som er lett å bruke.",
    blocks: [
      {
        heading: "Regnskapsfører Tromsø med fokus på tilgjengelighet",
        text:
          "Bedrifter i Tromsø trenger ofte en samarbeidspartner som er tilgjengelig og tydelig, særlig i perioder med høy aktivitet. Vi jobber digitalt med strukturert flyt for bilag, bokføring, avstemming og rapportering, men med personlig dialog i sentrum. Du får oppdaterte tall på faste tidspunkter og konkrete avklaringer når du trenger det. Dette gir tryggere drift og mindre administrativ belastning internt. Som regnskapsfører i Tromsø handler vårt arbeid om å gjøre økonomien praktisk anvendelig, ikke komplisert.",
      },
      {
        heading: "Forutsigbar økonomi gjennom hele året",
        text:
          "Mange virksomheter opplever sesongvariasjoner eller endringer i aktivitetsnivå. Derfor legger vi opp leveransen slik at økonomistyringen fungerer også når driften svinger. Vi følger opp likviditet, kostnadsutvikling og rapportering i en fast rytme, og gir tydelige råd om prioriteringer underveis. For bedrifter i Tromsø betyr dette bedre kontroll i planleggingen og færre overraskelser i økonomien. Med gode rutiner og jevn oppfølging blir også årsoppgjøret enklere.",
      },
      {
        heading: "Fastpris med klar avgrensning",
        text:
          "Vi tilbyr fastpris fordi det gir trygghet i både kostnad og leveranse. Avtalen beskriver innhold og ansvar på en måte som er enkel å forstå. Hvis virksomheten i Tromsø endrer seg, justerer vi omfanget i forkant slik at samarbeidet fortsatt passer behovet. Fastpris kombinert med personlig rådgiver gjør det enklere å planlegge, følge opp og utvikle økonomifunksjonen over tid. Du vet hva du får, og vi vet hva vi skal levere.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      { question: "Jobber dere kun med kunder i Tromsø sentrum?", answer: "Nei, vi leverer til bedrifter i hele regionen og ellers i Norge." },
      { question: "Kan vi ha dialog på telefon ved behov?", answer: "Ja, telefon er en sentral del av oppfølgingen vår." },
      { question: "Passer fastpris for mindre bedrifter?", answer: "Ja, fastpris passer godt for små og mellomstore virksomheter som vil ha forutsigbarhet." },
      { question: "Tilbyr dere rådgivning i tillegg til regnskap?", answer: "Ja, vi tilbyr løpende rådgivning knyttet til økonomiske prioriteringer." },
    ],
  },
  {
    slug: "regnskapsforer-drammen",
    city: "Drammen",
    title: "Regnskapsfører Drammen | Tydelig samarbeid og fastpris",
    description:
      "Regnskapsfører i Drammen for bedrifter som ønsker oppdaterte tall, personlig rådgiver og forutsigbar kostnad.",
    hero: "Regnskapsfører i Drammen som gjør økonomiarbeidet enklere",
    lead:
      "Vi hjelper bedrifter i Drammen med bokføring, lønn, fakturering og rådgivning i en struktur som gir kontroll og fremdrift.",
    blocks: [
      {
        heading: "Regnskapsfører Drammen med fokus på daglig flyt",
        text:
          "Økonomifunksjonen fungerer best når arbeidsflyten er enkel og tydelig. Vi etablerer faste rutiner for bilag, bokføring og avstemming som passer virksomhetens drift. For bedrifter i Drammen gir dette færre avklaringer i siste liten og bedre kontroll på frister. Vi leverer oppdaterte rapporter som viser utviklingen i virksomheten, og forklarer hva tallene betyr i praksis. På denne måten får ledelsen et mer robust grunnlag for beslutninger, samtidig som intern tidsbruk på økonomi reduseres.",
      },
      {
        heading: "Rådgivning som støtter beslutninger",
        text:
          "Vi bruker regnskapstall aktivt i dialog med ledelsen. Når kostnadsnivå, marginer eller kontantstrøm endrer seg, peker vi på hvilke tiltak som bør prioriteres først. Denne typen rådgivning er særlig verdifull for bedrifter i Drammen som ønsker jevn forbedring og tryggere styring. Du får én rådgiver som følger virksomheten over tid og kjenner konteksten bak tallene. Det gjør anbefalingene mer konkrete og enklere å gjennomføre.",
      },
      {
        heading: "Fastpris gir ro i budsjett og samarbeid",
        text:
          "Med fastpris vet du hva som er inkludert i leveransen og hva du kan forvente hver måned. Vi beskriver omfanget tydelig og følger opp med faste kontaktpunkter. Endrer bedriften i Drammen seg, justerer vi avtalen i dialog. Dermed opprettholdes både kvalitet og forutsigbarhet. Fastpris handler ikke bare om kostnad, men om et mer strukturert samarbeid der roller og ansvar er tydelige fra start.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      { question: "Passer dere for håndverks- og tjenestebedrifter?", answer: "Ja, vi jobber med flere slike virksomheter i Drammen og omegn." },
      { question: "Kan dere overta lønnskjøring også?", answer: "Ja, vi kan levere både lønn og regnskap i samme avtale." },
      { question: "Hvordan følger dere opp frister?", answer: "Vi bruker en fast leveranseplan med tydelige kontrollpunkter." },
      { question: "Er fastpris tilgjengelig for mindre selskaper?", answer: "Ja, fastpris kan tilpasses både små og mellomstore bedrifter." },
    ],
  },
  {
    slug: "regnskapsforer-bodo",
    city: "Bodø",
    title: "Regnskapsfører Bodø | Kontroll, kvalitet og tilgjengelig rådgiver",
    description:
      "Regnskapsfører i Bodø med fastpris og personlig oppfølging for bedrifter som vil ha bedre økonomisk kontroll.",
    hero: "Regnskapsfører i Bodø for bedrifter som vil jobbe mer effektivt",
    lead:
      "Vi hjelper virksomheter i Bodø med å bygge en økonomifunksjon som er trygg, effektiv og lett å bruke i den daglige driften.",
    blocks: [
      {
        heading: "Regnskapsfører Bodø med tydelig ansvar og høy kvalitet",
        text:
          "Et godt samarbeid starter med avklart ansvar. Vi tydeliggjør hva dere gjør internt og hva vi følger opp som regnskapsfører, slik at flyten blir stabil og forutsigbar. For bedrifter i Bodø betyr det færre misforståelser og høyere kvalitet i leveransene. Vi jobber løpende med bokføring, avstemming og rapportering, og fanger opp avvik tidlig. Når tallene er oppdaterte og kvalitetssikrede, blir det enklere å styre virksomheten med trygghet.",
      },
      {
        heading: "Fra regnskapstall til konkrete tiltak",
        text:
          "Vi mener regnskap skal bidra til bedre beslutninger. Derfor går vi gjennom nøkkeltall i en form som er enkel å bruke i ledelsen. Vi ser på utvikling i inntekter, kostnader og likviditet, og foreslår tiltak som faktisk kan gjennomføres. For bedrifter i Bodø gir dette en mer aktiv økonomistyring, der regnskapet blir en del av driftsarbeidet i stedet for en etterrapportering.",
      },
      {
        heading: "Fastpris med tydelig samarbeidsmodell",
        text:
          "Fastpris gjør økonomiarbeidet mer forutsigbart og samarbeidet mer effektivt. Vi avklarer leveransen tydelig fra start og følger opp med faste kontaktpunkter gjennom året. Når behovet endrer seg, justerer vi avtalen i forkant. For virksomheter i Bodø gir dette mindre usikkerhet, enklere budsjettstyring og et samarbeid som holder kvalitet over tid.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      { question: "Tilbyr dere full regnskapsleveranse i Bodø?", answer: "Ja, vi leverer bokføring, lønn, fakturering, årsoppgjør og rådgivning." },
      { question: "Kan dere samarbeide med systemene våre?", answer: "Ja, vi tilpasser oss ofte eksisterende systemer og forbedrer flyten der det trengs." },
      { question: "Hvor raskt svarer dere på henvendelser?", answer: "Vi prioriterer rask og tydelig respons på både telefon og e-post." },
      { question: "Har dere fastpris?", answer: "Ja, vi tilbyr fastpris med tydelig omfang og avklart oppfølging." },
    ],
  },
  {
    slug: "regnskapsforer-alesund",
    city: "Ålesund",
    title: "Regnskapsfører Ålesund | Personlig rådgivning og fastpris",
    description:
      "Regnskapsfører i Ålesund med strukturert leveranse, oppdaterte rapporter og tett samarbeid gjennom året.",
    hero: "Regnskapsfører i Ålesund som gir deg bedre økonomisk oversikt",
    lead:
      "Vi bistår bedrifter i Ålesund med regnskap, lønn og rådgivning i en leveransemodell som er enkel, tydelig og forutsigbar.",
    blocks: [
      {
        heading: "Regnskapsfører Ålesund med praktisk tilnærming",
        text:
          "Vi er opptatt av at økonomiarbeidet skal fungere i praksis. Derfor etablerer vi en arbeidsflyt som er enkel å følge i hverdagen, med tydelige frister og ansvarspunkter. For bedrifter i Ålesund gir dette mindre administrativ belastning og mer kontroll på regnskapet. Vi leverer oppdaterte tall med forklaringer som gjør rapportene nyttige for ledelsen, ikke bare for arkivet. Denne praktiske tilnærmingen skaper bedre flyt mellom drift og økonomi.",
      },
      {
        heading: "Tett dialog og tilgjengelig rådgiver",
        text:
          "God oppfølging krever mer enn standardleveranser. Vi jobber med løpende avklaringer og prioriterer tydelig kommunikasjon når spørsmål oppstår. Du får en rådgiver som kjenner virksomheten og kan gi raske, relevante svar. For kunder i Ålesund betyr dette tryggere beslutninger, færre misforståelser og et samarbeid som oppleves nært selv om mye av leveransen er digital.",
      },
      {
        heading: "Fastpris for bedrifter som vil planlegge trygt",
        text:
          "Fastpris gir ro i budsjettarbeidet og tydelige forventninger i samarbeidet. Vi beskriver hva som inngår, hvordan oppfølgingen skjer og når leveranser kommer. Endringer i virksomheten håndteres i dialog, slik at omfang og pris fortsatt er riktig. For bedrifter i Ålesund er dette en trygg modell som gjør det enklere å planlegge og styre økonomifunksjonen over tid.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      { question: "Jobber dere med bedrifter i hele Ålesund?", answer: "Ja, vi jobber med kunder i hele området med digital og personlig oppfølging." },
      { question: "Kan dere hjelpe ved oppstart av nytt selskap?", answer: "Ja, vi bistår med rutiner, oppsett og økonomisk struktur fra start." },
      { question: "Tilbyr dere både lønn og bokføring?", answer: "Ja, vi kan kombinere tjenestene i én tydelig leveranse." },
      { question: "Hvordan sikrer dere kvalitet?", answer: "Vi følger faste kontrollpunkter og løpende avstemming i leveransen." },
    ],
  },
  {
    slug: "regnskapsforer-sandnes",
    city: "Sandnes",
    title: "Regnskapsfører Sandnes | Fastpris for bedrifter i vekst",
    description:
      "Regnskapsfører i Sandnes med strukturert oppfølging, personlig rådgiver og tydelig leveranse på fastpris.",
    hero: "Regnskapsfører i Sandnes for bedrifter som vil ha fremdrift",
    lead:
      "Vi hjelper bedrifter i Sandnes med økonomi som støtter vekst: oppdaterte tall, god flyt og rådgivning som er lett å bruke.",
    blocks: [
      {
        heading: "Regnskapsfører Sandnes med fokus på vekst og kontroll",
        text:
          "Når virksomheten vokser, øker også behovet for struktur i økonomien. Vi setter opp rutiner for bokføring, fakturering og rapportering som skalerer med bedriften. For selskaper i Sandnes betyr dette at økonomifunksjonen holder tritt med utviklingen, uten at intern administrasjon vokser unødvendig. Vi leverer oppdaterte rapporter med tydelige forklaringer, slik at ledelsen kan prioritere tiltak basert på faktiske tall. Vår rolle som regnskapsfører i Sandnes er å kombinere kvalitet i grunnarbeidet med aktiv støtte i beslutningene.",
      },
      {
        heading: "Effektiv arbeidsflyt med rask respons",
        text:
          "Vi vet at beslutninger ofte må tas raskt. Derfor prioriterer vi tilgjengelighet og tydelig kommunikasjon gjennom hele samarbeidet. Du får én kontaktperson og faste leveransepunkter som gjør hverdagen enklere. Samtidig jobber vi kontinuerlig med forbedring av prosesser, slik at manuelt arbeid reduseres og kvaliteten styrkes. For bedrifter i Sandnes gir dette bedre flyt mellom økonomi og drift, og mer tid til kjernevirksomhet.",
      },
      {
        heading: "Fastpris som gjør samarbeid forutsigbart",
        text:
          "Fastpris gir trygghet fordi rammene er avklart på forhånd. Vi beskriver leveranse, ansvar og oppfølging tydelig, og justerer avtalen i dialog når virksomheten endrer seg. For kunder i Sandnes gir dette en stabil modell der økonomifunksjonen kan planlegges med god forutsigbarhet. Målet er et samarbeid som er enkelt å styre etter, både økonomisk og praktisk.",
      },
    ],
    relatedLinks: [...standardLinks],
    faq: [
      { question: "Passer dere for bedrifter i vekst?", answer: "Ja, leveransen vår er laget for virksomheter som trenger skalerbar økonomistøtte." },
      { question: "Kan dere bistå ved bytte av regnskapsfører?", answer: "Ja, vi planlegger overgangen slik at driften går videre uten stans." },
      { question: "Hvordan fungerer fastpris hos dere?", answer: "Vi avklarer leveranseomfang i forkant og følger opp med faste kontaktpunkter." },
      { question: "Er dere tilgjengelige på telefon?", answer: "Ja, telefon er en viktig del av kundeoppfølgingen vår." },
    ],
  },
];

export function getCityLandingBySlug(slug: string) {
  return cityLandings.find((item) => item.slug === slug);
}
