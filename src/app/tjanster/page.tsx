import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { servicePages } from "@/content/services";

export const metadata = createMetadata({
  title: "Tjenester for regnskap, lønn og rådgivning",
  description: "Oversikt over våre tjenester med tydelig leveranse, fastpris og personlig oppfølging.",
  path: "/tjanster",
});

export default function TjansterIndexPage() {
  return (
    <section className="section-pad-y bg-white">
      <div className="section-wrap">
        {/* Index page helps crawlers discover all service templates. */}
        <h1 className="section-title text-slate-950">Tjenester</h1>
        <p className="body-text mt-4 text-slate-600">
          Utforsk tjenestene våre og se hvordan vi jobber med bokføring, lønn, fakturering, årsoppgjør og rådgivning.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {servicePages.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/tjanster/${service.slug}`}
                className="inline-flex w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                {service.seo.h1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
