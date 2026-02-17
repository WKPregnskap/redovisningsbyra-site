import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { guidePages } from "@/content/guides";

export const metadata = createMetadata({
  title: "Guider om regnskap, fastpris og økonomistyring",
  description: "Les praktiske guider om bytte av regnskapsfører, fastpris, lønn, MVA og årsoppgjør.",
  path: "/guider",
});

export default function GuiderIndexPage() {
  return (
    <section className="section-pad-y bg-white">
      <div className="section-wrap">
        {/* Index page helps crawlers discover all guide templates. */}
        <h1 className="section-title text-slate-950">Guider</h1>
        <p className="body-text mt-4 text-slate-600">
          Praktiske fagguider skrevet for ledere som vil ta bedre økonomiske beslutninger.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {guidePages.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guider/${guide.slug}`}
                className="inline-flex w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                {guide.seo.h1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
