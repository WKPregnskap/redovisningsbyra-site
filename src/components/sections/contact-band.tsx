import { siteConfig } from "@/config/site";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { CallbackModal } from "@/components/sections/callback-modal";

type ContactBandProps = {
  id?: string;
  title: string;
  text: string;
  altBackground?: boolean;
  showCallback?: boolean;
};

export function ContactBand({
  id,
  title,
  text,
  altBackground = false,
  // endret: "Ring meg" vises som standard i alle CTA-blokker med knapper.
  showCallback = true,
}: ContactBandProps) {
  return (
    <section id={id} className={`section-pad-y ${altBackground ? "bg-slate-100/70" : "bg-white"}`}>
      {/* CTA band reused across service/pricing/end-of-page conversion points. */}
      <div className="section-wrap">
        <div className="surface-card p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <h2 className="section-title text-slate-900">{title}</h2>
            {/* endret: støtter manuelle linjeskift i CTA-tekst for bedre layoutbalanse. */}
            <p className="body-text mt-3 whitespace-pre-line text-slate-600">{text}</p>
          </div>
          {/* endret: holder CTA-knapper på én rad fra desktop (lg) for ryddig kontaktseksjon. */}
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:flex-nowrap lg:justify-end">
            <TrackedAnchor
              href={siteConfig.phoneHref}
              eventName="phone_click"
              eventPayload={{ placement: "contact_band_phone" }}
              className="btn-primary"
            >
              Ring oss nå
            </TrackedAnchor>
            {/* endret: valgfri callback-knapp for sider som trenger komplett CTA-hierarki. */}
            {showCallback ? <CallbackModal buttonLabel="Ring meg" buttonClassName="btn-secondary" /> : null}
            <TrackedAnchor
              href={`mailto:${siteConfig.email}`}
              eventName="email_click"
              eventPayload={{ placement: "contact_band_email" }}
              // endret: e-post beholder lavere visuell styrke enn primær ring-knapp.
              className="btn-tertiary"
            >
              Send e-post
            </TrackedAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
