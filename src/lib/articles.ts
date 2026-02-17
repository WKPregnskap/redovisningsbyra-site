import { promises as fs } from "node:fs";
import path from "node:path";
import { articleCategories, type Article, type ArticleCategory } from "@/types/content";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

function isCategory(value: string): value is ArticleCategory {
  return articleCategories.includes(value as ArticleCategory);
}

function normalizeArticle(input: Article): Article {
  return {
    ...input,
    category: isCategory(input.category) ? input.category : "Tips",
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const entries = await fs.readdir(ARTICLES_DIR);
  const files = entries.filter((item) => item.endsWith(".json"));

  const articles = await Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(ARTICLES_DIR, file);
      const raw = await fs.readFile(fullPath, "utf-8");
      return normalizeArticle(JSON.parse(raw) as Article);
    }),
  );

  return articles.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

export async function getPublishedArticles(): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((article) => article.status === "published");
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(ARTICLES_DIR, `${slug}.json`);
    const raw = await fs.readFile(fullPath, "utf-8");
    return normalizeArticle(JSON.parse(raw) as Article);
  } catch {
    return null;
  }
}

export function articleFilePath(slug: string): string {
  return path.join(ARTICLES_DIR, `${slug}.json`);
}

export function markdownToBlocks(content: string): Array<{ type: "h2" | "p"; value: string }> {
  const lines = content.split("\n").map((line) => line.trim());
  const blocks: Array<{ type: "h2" | "p"; value: string }> = [];
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      blocks.push({ type: "p", value: paragraphBuffer.join(" ") });
      paragraphBuffer = [];
    }
  };

  for (const line of lines) {
    if (!line) {
      flushParagraph();
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      blocks.push({ type: "h2", value: line.replace("## ", "") });
      continue;
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();
  return blocks;
}
