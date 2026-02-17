type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="section-pad-y bg-white">
      {/* Shared hero for subpages keeps text size within the global clamp system. */}
      <div className="section-wrap">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="hero-title mt-3 text-slate-950">{title}</h1>
        <p className="body-text mt-5 text-slate-600">{lead}</p>
      </div>
    </section>
  );
}
