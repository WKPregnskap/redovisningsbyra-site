import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default async function CmsPage() {
  const articles = await getAllArticles();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Innebygd CMS</h1>
      <p className="mt-3 text-sm text-slate-600">
        Denne visningen er gjort statisk for Netlify Drop. Redigering via server er deaktivert.
      </p>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Statisk modus</h2>
        <p className="mt-3 text-sm text-slate-600">
          For Netlify Drop må siden være 100% statisk. Oppretting og redigering må gjøres i
          innholdsfilene under <code>src/content/articles</code>.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Eksisterende artikler</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {articles.map((article) => (
            <li
              key={article.slug}
              className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3"
            >
              <span>
                {article.title} ({article.status})
              </span>
              <Link href={`/cms/${article.slug}`} className="font-semibold text-slate-900">
                Vis detaljer
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
