import Link from "next/link";

type ServicesGridProps = {
  id?: string;
  title?: string;
  services: Array<{ title: string; text: string; href?: string }>;
};

export function ServicesGrid({ id, title = "Tjenester", services }: ServicesGridProps) {
  return (
    <section id={id} className="section-pad-y bg-white">
      {/* Reused existing services component, now data-driven for scalable SEO page reuse. */}
      <div className="section-wrap">
        <h2 className="section-title text-slate-950">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="surface-card p-6">
              {service.href ? (
                <Link href={service.href} className="block">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="body-text mt-3 text-slate-600">{service.text}</p>
                </Link>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="body-text mt-3 text-slate-600">{service.text}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
