import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

type Crumb = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
};

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.domain}${crumb.href}`,
    })),
  };

  return (
    <>
      {/* Breadcrumbs improve internal navigation and rich-result eligibility. */}
      <JsonLd data={schema} />
      <nav aria-label="Brødsmuler" className="small-text text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden>/</span> : null}
              <Link href={crumb.href} className="hover:text-slate-700">
                {crumb.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
