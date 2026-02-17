import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { ContactBand } from "@/components/sections/contact-band";
import { PageHero } from "@/components/sections/page-hero";
import { omOssPageContent } from "@/content/pages/om-oss";

export const metadata = createMetadata({
  title: "Om oss",
  description:
    "Bli kjent med Werner Klausen Regnskap AS, vår arbeidsmetode og hvordan vi skaper verdi for kunder i hele Norge.",
  path: "/om-oss",
});

export default function OmOssPage() {
  return (
    <>
      <PageHero
        eyebrow={omOssPageContent.eyebrow}
        title={omOssPageContent.title}
        lead={omOssPageContent.lead}
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {omOssPageContent.cards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">{omOssPageContent.teamTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{omOssPageContent.teamLead}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {omOssPageContent.team.map((member) => (
              <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={720}
                  height={420}
                  className="h-40 w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBand title={omOssPageContent.ctaOne.title} text={omOssPageContent.ctaOne.text} />
      <ContactBand title={omOssPageContent.ctaTwo.title} text={omOssPageContent.ctaTwo.text} />
    </>
  );
}
