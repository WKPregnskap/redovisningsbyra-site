import Image from "next/image";

type TeamCardsProps = {
  id?: string;
  title: string;
  lead: string;
  people: ReadonlyArray<{ image: string; name: string; role: string; bio: string }>;
  altBackground?: boolean;
};

export function TeamCards({ id, title, lead, people, altBackground = false }: TeamCardsProps) {
  return (
    <section id={id} className={`section-pad-y ${altBackground ? "bg-slate-100/70" : "bg-white"}`}>
      {/* endret: team-seksjon i samme kortstil som "Hvordan vi jobber", men med bilde per person */}
      <div className="section-wrap">
        <h2 className="section-title text-slate-950">{title}</h2>
        <p className="body-text mt-4 text-slate-600">{lead}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <article key={person.name} className="surface-card p-6">
              <Image
                src={person.image}
                alt={person.name}
                width={720}
                height={420}
                className="h-40 w-full rounded-xl object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">{person.role}</p>
              <p className="body-text mt-3 text-slate-600">{person.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
