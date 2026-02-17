type SectionCardsProps = {
  id?: string;
  title: string;
  items: ReadonlyArray<{ title: string; body: string }>;
  altBackground?: boolean;
};

export function SectionCards({ id, title, items, altBackground = false }: SectionCardsProps) {
  return (
    <section id={id} className={`section-pad-y ${altBackground ? "bg-slate-100/70" : "bg-white"}`}>
      {/* Reusable card section used across storytelling order on the homepage. */}
      <div className="section-wrap">
        <h2 className="section-title text-slate-950">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="body-text mt-3 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
