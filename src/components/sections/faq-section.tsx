import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import type { FaqItem } from "@/types/content";

type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
};

export function FaqSection({ title = "Ofte stilte spørsmål", items }: FaqSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.companyName,
      url: siteConfig.domain,
    },
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 lg:px-8">
      <JsonLd data={faqSchema} />
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <article
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
