import { createMetadata } from "@/lib/metadata";
import { getPublishedArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/sections/article-card";
import { PageHero } from "@/components/sections/page-hero";
import { ContactBand } from "@/components/sections/contact-band";
import { blogIdeas } from "@/content/blog/ideas";

export const metadata = createMetadata({
  title: "Artikler om regnskap, lønn og skatt",
  description:
    "Les fagartikler med konkrete råd om regnskap, lønn, skatt, fastpris og oppstart av aksjeselskap.",
  path: "/artikler",
});

export default async function ArtiklerPage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <PageHero
        eyebrow="Artikler"
        title="Faglige råd skrevet for travle bedriftsledere"
        lead="Kort, praktisk og oppdatert innhold om regnskap, lønn, skatt og økonomistyring."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-2 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Kommende artikler</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            {blogIdeas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand
        title="Vil du ha hjelp med dette i praksis?"
        text="Ring oss for en rask vurdering av hva som passer bedriften din best."
      />
      <ContactBand
        title="Trenger du en rådgiver som følger opp løpende?"
        text="Vi tilbyr fastpris og tett dialog gjennom hele året."
      />
    </>
  );
}
