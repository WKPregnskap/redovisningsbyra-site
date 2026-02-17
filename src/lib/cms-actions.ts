"use server";

import { promises as fs } from "node:fs";
import { revalidatePath } from "next/cache";
import { articleFilePath, getArticleBySlug } from "@/lib/articles";
import { slugify } from "@/lib/utils";
import { articleCategories, type Article, type ArticleStatus } from "@/types/content";

function toStatus(value: string): ArticleStatus {
  return value === "draft" ? "draft" : "published";
}

function normalizeCategory(value: string): Article["category"] {
  return articleCategories.includes(value as Article["category"])
    ? (value as Article["category"])
    : "Tips";
}

function getString(formData: FormData, key: string, fallback = ""): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : fallback;
}

export async function createArticleAction(formData: FormData) {
  const title = getString(formData, "title");
  const explicitSlug = getString(formData, "slug");
  const slug = slugify(explicitSlug || title);

  if (!title || !slug) {
    throw new Error("Tittel og slug er påkrevd");
  }

  const now = new Date().toISOString().slice(0, 10);
  const article: Article = {
    slug,
    title,
    excerpt: getString(formData, "excerpt"),
    category: normalizeCategory(getString(formData, "category", "Tips")),
    status: toStatus(getString(formData, "status", "draft")),
    publishedAt: getString(formData, "publishedAt", now),
    updatedAt: now,
    seoTitle: getString(formData, "seoTitle", title),
    seoDescription: getString(formData, "seoDescription"),
    readingMinutes: Number(getString(formData, "readingMinutes", "4")) || 4,
    author: getString(formData, "author", "Werner Klausen Regnskap AS"),
    content: getString(formData, "content"),
    faq: [],
  };

  await fs.writeFile(articleFilePath(slug), JSON.stringify(article, null, 2));

  revalidatePath("/artikler");
  revalidatePath(`/artikler/${slug}`);
  revalidatePath("/cms");
}

export async function updateArticleAction(originalSlug: string, formData: FormData) {
  const existing = await getArticleBySlug(originalSlug);

  if (!existing) {
    throw new Error("Artikkel finnes ikke");
  }

  const title = getString(formData, "title", existing.title);
  const requestedSlug = slugify(getString(formData, "slug", existing.slug));
  const nextSlug = requestedSlug || existing.slug;
  const now = new Date().toISOString().slice(0, 10);

  const updated: Article = {
    slug: nextSlug,
    title,
    excerpt: getString(formData, "excerpt", existing.excerpt),
    category: normalizeCategory(getString(formData, "category", existing.category)),
    status: toStatus(getString(formData, "status", existing.status)),
    publishedAt: getString(formData, "publishedAt", existing.publishedAt),
    updatedAt: now,
    seoTitle: getString(formData, "seoTitle", existing.seoTitle),
    seoDescription: getString(formData, "seoDescription", existing.seoDescription),
    readingMinutes:
      Number(getString(formData, "readingMinutes", String(existing.readingMinutes))) || 4,
    author: getString(formData, "author", existing.author),
    content: getString(formData, "content", existing.content),
    faq: existing.faq ?? [],
  };

  await fs.writeFile(articleFilePath(nextSlug), JSON.stringify(updated, null, 2));

  if (nextSlug !== originalSlug) {
    await fs.unlink(articleFilePath(originalSlug)).catch(() => undefined);
  }

  revalidatePath("/artikler");
  revalidatePath(`/artikler/${originalSlug}`);
  revalidatePath(`/artikler/${nextSlug}`);
  revalidatePath("/cms");
  revalidatePath(`/cms/${originalSlug}`);
  revalidatePath(`/cms/${nextSlug}`);
}
