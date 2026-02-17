export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("nb-NO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
