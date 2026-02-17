import { siteConfig } from "@/config/site";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";

type ContactBandProps = {
  id?: string;
  title: string;
  text: string;
  altBackground?: boolean;
};

export function ContactBand({ id, title, text, altBackground = false }: ContactBandProps) {
  return (
    <section id={id} className={`section-pad-y ${altBackground ? "bg-slate-100/70" : "bg-white"}`}>
      {/* CTA band reused across service/pricing/end-of-page conversion points. */}
      <div className="section-wrap">
        <div className="surface-card p-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
          <div>
            <h2 className="section-title text-slate-900">{title}</h2>
            <p className="body-text mt-3 text-slate-600">{text}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
            <TrackedAnchor
              href={siteConfig.phoneHref}
              eventName="phone_click"
              eventPayload={{ placement: "contact_band_phone" }}
              className="btn-primary"
            >
              Ring oss
            </TrackedAnchor>
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
