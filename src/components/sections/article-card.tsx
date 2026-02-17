import Link from "next/link";
import type { Article } from "@/types/content";
import { formatDate } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
        {article.category}
      </p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
        <Link href={`/artikler/${article.slug}`} className="hover:text-slate-700">
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
      <p className="mt-4 text-xs text-slate-500">
        {formatDate(article.publishedAt)} • {article.readingMinutes} min lesetid
      </p>
    </article>
  );
}
