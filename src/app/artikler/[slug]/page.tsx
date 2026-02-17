import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactBand } from "@/components/sections/contact-band";
import { FaqSection } from "@/components/sections/faq-section";
import { getArticleBySlug, getPublishedArticles, markdownToBlocks } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const published = await getPublishedArticles();
  return published.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || article.status !== "published") {
    return {};
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/artikler/${article.slug}` },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      url: `${siteConfig.domain}/artikler/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || article.status !== "published") {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
    mainEntityOfPage: `${siteConfig.domain}/artikler/${article.slug}`,
  };

  const blocks = markdownToBlocks(article.content);

  return (
    <>
      <article className="mx-auto w-full max-w-3xl px-4 pt-16 pb-8 lg:px-8">
        <JsonLd data={articleSchema} />
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {article.category}
        </p>
        <h1 className="mt-3 text-4xl leading-tight font-semibold tracking-tight text-slate-950 md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          {formatDate(article.publishedAt)} • {article.readingMinutes} min lesetid
        </p>

        <div className="prose prose-slate mt-8 max-w-none">
          {blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={`${block.value}-${index}`}
                  className="mt-8 text-2xl font-semibold text-slate-900"
                >
                  {block.value}
                </h2>
              );
            }

            return (
              <p
                key={`${block.value}-${index}`}
                className="mt-4 text-base leading-8 text-slate-700"
              >
                {block.value}
              </p>
            );
          })}
        </div>
      </article>

      {article.faq && article.faq.length > 0 ? <FaqSection items={article.faq} /> : null}
      <ContactBand
        title="Vil du ha hjelp med dette i din bedrift?"
        text="Ring oss for en konkret vurdering av hva som gir best effekt nå."
      />
      <ContactBand
        title="Foretrekker du skriftlig dialog?"
        text="Send e-post, så følger vi opp med tydelige forslag til neste steg."
      />
    </>
  );
}
