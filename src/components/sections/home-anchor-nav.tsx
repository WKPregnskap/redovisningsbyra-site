import Link from "next/link";

type AnchorItem = {
  href: string;
  label: string;
};

type HomeAnchorNavProps = {
  items: AnchorItem[];
};

export function HomeAnchorNav({ items }: HomeAnchorNavProps) {
  return (
    <section className="border-y border-slate-200 bg-white">
      {/* On-page anchor navigation so users can scroll naturally without menu usage. */}
      <div className="section-wrap">
        <nav className="flex flex-wrap gap-2 py-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
