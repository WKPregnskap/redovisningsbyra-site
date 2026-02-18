import { siteConfig } from "@/config/site";
import { CallbackModal } from "@/components/sections/callback-modal";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";

type HeroData = {
  title: string;
  summary: string;
  trustPoints: readonly string[];
};

type HeroProps = {
  data: HeroData;
};

function TrustPointIcon({ label }: { label: string }) {
  // forbedret hero-badges: innebygde SVG-ikoner per etikett for visuell gjenkjenning.
  if (label === "Autorisert regnskapsfører") {
    return (
      <svg className="chip__icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="10" r="3" />
        <path d="M8 21l4-3 4 3" />
      </svg>
    );
  }

  if (label === "Fastpris") {
    return (
      <svg className="chip__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    );
  }

  if (label === "Personlig rådgivning") {
    return (
      <svg className="chip__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12v-1a9 9 0 0118 0v1" />
        <rect x="3" y="13" width="4" height="6" rx="2" />
        <rect x="17" y="13" width="4" height="6" rx="2" />
      </svg>
    );
  }

  return (
    <svg className="chip__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8 6 5 9 5 12a7 7 0 0014 0c0-3-3-6-7-10z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function Hero({ data }: HeroProps) {
  return (
    <section
      id="hero"
      // endret: mindre hero-høyde på mobil for bedre førsteinntrykk og scrollflyt på iPhone.
      className="relative flex min-h-[62vh] items-center overflow-hidden bg-[#0f6288] py-16 md:min-h-[70vh] md:py-20"
    >
      {/* Controlled background layer for visual depth without oversized hero dominance. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.10),transparent_42%)]" />

      <div className="section-wrap relative text-center">
        <h1 className="hero-title text-balance text-white">{data.title}</h1>

        <p className="body-text mx-auto mt-6 text-balance text-slate-100/95">{data.summary}</p>

        {/* Home has exactly three contact CTAs by requirement: Ring oss, Ring meg, Send e-post. */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <TrackedAnchor
            href={siteConfig.phoneHref}
            eventName="phone_click"
            eventPayload={{ placement: "hero_ring_oss" }}
            className="btn-primary"
          >
            Ring oss nå
          </TrackedAnchor>

          <CallbackModal buttonLabel="Ring meg" buttonClassName="btn-secondary-light" />

          <TrackedAnchor
            href={`mailto:${siteConfig.email}`}
            eventName="email_click"
            eventPayload={{ placement: "hero_send_epost" }}
            // endret: gjør også hero-varianten hvit for konsekvent "Send e-post"-stil.
            className="btn-secondary"
          >
            Send e-post
          </TrackedAnchor>
        </div>

        {/* forbedret hero-badges: sentrert inline-rad, dekorative chips med role=list/listitem. */}
        <div className="hero-badges" role="list" aria-label="Tillitspunkter">
          {data.trustPoints.map((point) => (
            <span key={point} className="chip" role="listitem">
              <TrustPointIcon label={point} />
              <span>{point}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
