type SimpleSectionProps = {
  id?: string;
  title: string;
  body: string;
  altBackground?: boolean;
};

export function SimpleSection({ id, title, body, altBackground = false }: SimpleSectionProps) {
  return (
    <section id={id} className={`section-pad-y ${altBackground ? "bg-slate-100/70" : "bg-white"}`}>
      {/* Simple reusable section for pricing/about blocks with controlled text width. */}
      <div className="section-wrap">
        <div className="surface-card p-8 md:p-10">
          <h2 className="section-title text-slate-950">{title}</h2>
          <p className="body-text mt-4 text-slate-600">{body}</p>
        </div>
      </div>
    </section>
  );
}
