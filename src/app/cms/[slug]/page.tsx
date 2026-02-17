import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Required by Next static export for dynamic routes.
  const articles = await getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function CmsEditPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Artikkeldetaljer</h1>
      <p className="mt-2 text-sm text-slate-600">Slug: {slug}</p>
      <p className="mt-2 text-sm text-slate-600">
        Statisk modus: redigering via server actions er deaktivert for Netlify Drop.
      </p>

      <section className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <p className="text-sm text-slate-700">
          <strong>Tittel:</strong> {article.title}
        </p>
        <p className="text-sm text-slate-700">
          <strong>Forfatter:</strong> {article.author}
        </p>
        <p className="text-sm text-slate-700">
          <strong>Status:</strong> {article.status}
        </p>
        <p className="text-sm text-slate-700">
          <strong>Kategori:</strong> {article.category}
        </p>
        <p className="text-sm text-slate-700 md:col-span-2">
          <strong>SEO tittel:</strong> {article.seoTitle}
        </p>
        <p className="text-sm text-slate-700 md:col-span-2">
          <strong>SEO beskrivelse:</strong> {article.seoDescription}
        </p>
        <p className="text-sm text-slate-700 md:col-span-2">
          <strong>Ingress:</strong> {article.excerpt}
        </p>
        <pre className="overflow-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-100 md:col-span-2">
          {article.content}
        </pre>
      </section>
    </div>
  );
}
