import Link from "next/link";
import type { RelatedLink } from "@/types/seo";

type RelatedPagesProps = {
  title: string;
  links: RelatedLink[];
};

export function RelatedPages({ title, links }: RelatedPagesProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="section-wrap section-pad-y">
      {/* Internal linking module for SEO depth between guides and services. */}
      <div className="surface-card p-8 md:p-10">
        <h2 className="section-title text-slate-950">{title}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
