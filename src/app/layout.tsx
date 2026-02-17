import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCallButton } from "@/components/layout/mobile-call-button";
import { CookieConsentManager } from "@/components/layout/cookie-consent-manager";
import { GtmLoader } from "@/components/layout/gtm-loader";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Werner Klausen Regnskap AS | Regnskapsfører for bedrifter i hele Norge",
    template: "%s | Werner Klausen Regnskap AS",
  },
  description:
    "Autorisert regnskapsfører med fastpris, personlig rådgivning og høy tilgjengelighet i hele Norge.",
  openGraph: {
    type: "website",
    siteName: siteConfig.companyName,
    locale: "nb_NO",
    title: "Werner Klausen Regnskap AS | Regnskapsfører for bedrifter i hele Norge",
    description:
      "Autorisert regnskapsfører med fastpris, personlig rådgivning og høy tilgjengelighet i hele Norge.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: siteConfig.companyName,
  url: siteConfig.domain,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  image: `${siteConfig.domain}/logo.png`,
  // Uses centralized local SEO config to avoid duplicated location strings.
  areaServed: siteConfig.localSeo.country,
  ...(siteConfig.address
    ? {
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          postalCode: siteConfig.address.postalCode,
          addressLocality: siteConfig.address.city,
          addressCountry: siteConfig.address.country,
        },
      }
    : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {/* endret: GTM lastes i klientkomponent kun etter gyldig samtykke. */}
        <GtmLoader />
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentManager />
        <MobileCallButton />
      </body>
    </html>
  );
}
