const references = [
  {
    company: "Kundecase 1",
    result: "Resultatindikator",
    quote: "Plassholder for kundesitat eller verifisert referanse.",
  },
  {
    company: "Kundecase 2",
    result: "Resultatindikator",
    quote: "Plassholder for kundesitat eller verifisert referanse.",
  },
  {
    company: "Kundecase 3",
    result: "Resultatindikator",
    quote: "Plassholder for kundesitat eller verifisert referanse.",
  },
];

type ReferencesGridProps = {
  id?: string;
  title?: string;
  lead?: string;
};

export function ReferencesGrid({ id, title, lead }: ReferencesGridProps) {
  return (
    <section id={id} className="section-pad-y bg-white">
      {/* Reference grid keeps proof section reusable without hardcoded campaign copy. */}
      <div className="section-wrap">
        {title ? <h2 className="section-title text-slate-950">{title}</h2> : null}
        {lead ? <p className="body-text mt-3 text-slate-600">{lead}</p> : null}
        <div className={`${title || lead ? "mt-8" : ""} grid gap-4 md:grid-cols-3`}>
          {references.map((item) => (
            <article key={item.company} className="surface-card p-6">
              <p className="small-text font-semibold tracking-wide text-slate-500 uppercase">
                {item.result}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{item.company}</h2>
              <p className="body-text mt-3 text-slate-600">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
