import { ContactBand } from "@/components/sections/contact-band";
import { FaqSection } from "@/components/sections/faq-section";
import { RelatedPages } from "@/components/sections/related-pages";
import type { CityLanding } from "@/types/content";

type Props = {
  landing: CityLanding;
};

export function CityLandingContent({ landing }: Props) {
  return (
    <>
      <section className="section-pad-y bg-white">
        {/* Justert for å speile hero-rytmen fra forsiden (Hjem). */}
        <div className="section-wrap">
          <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
            {landing.city}
          </p>
          <h1 className="hero-title mt-3 text-slate-950">{landing.hero}</h1>
          <p className="body-text mt-5 text-slate-600">{landing.lead}</p>
        </div>
      </section>

      <section className="section-pad-y bg-slate-100/70">
        {/* Samme kort-seksjonsuttrykk som øvrige sider for konsistent opplevelse. */}
        <div className="section-wrap">
          <h2 className="section-title text-slate-950">
            Regnskapsfører i {landing.city}: slik skaper vi verdi
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {landing.blocks.map((block) => (
              <article key={block.heading} className="surface-card p-6">
                <h3 className="text-xl font-semibold text-slate-900">{block.heading}</h3>
                <p className="body-text mt-3 text-slate-600">{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {landing.relatedLinks && landing.relatedLinks.length > 0 ? (
        <RelatedPages title={`Aktuelle tjenester for bedrifter i ${landing.city}`} links={landing.relatedLinks} />
      ) : null}

      <ContactBand
        title={`Trenger du regnskapsfører i ${landing.city}?`}
        text="Ring oss nå for en rask avklaring og en tydelig anbefaling tilpasset bedriften din."
      />
      <FaqSection
        title={`Ofte stilte spørsmål om regnskapsfører i ${landing.city}`}
        items={landing.faq}
      />
      <ContactBand
        title="Ønsker du et konkret fastpristilbud?"
        text="Vi setter opp forslag med tydelig omfang, leveranser og pris."
      />
    </>
  );
}
