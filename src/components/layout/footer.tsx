import { siteConfig } from "@/config/site";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";
import { CookieSettingsButton } from "@/components/ui/cookie-settings-button";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{siteConfig.companyName}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Autorisert regnskapsfører for små og mellomstore bedrifter i hele Norge.
          </p>
          {siteConfig.organizationNumber ? (
            <p className="mt-3 text-sm text-slate-600">Org.nr: {siteConfig.organizationNumber}</p>
          ) : null}
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">Kontakt</h3>
          <ul className="mt-3 space-y-3 text-sm text-slate-600">
            <li>
              <TrackedAnchor
                href={siteConfig.phoneHref}
                eventName="phone_click"
                eventPayload={{ placement: "footer_phone" }}
                className="font-semibold text-slate-900"
              >
                {siteConfig.phoneDisplay}
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                href={`mailto:${siteConfig.email}`}
                eventName="email_click"
                eventPayload={{ placement: "footer_email" }}
                className="font-semibold text-slate-900"
              >
                {siteConfig.email}
              </TrackedAnchor>
            </li>
            {siteConfig.address ? (
              <li>
                {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.city}
              </li>
            ) : null}
            {siteConfig.openingHours ? <li>{siteConfig.openingHours}</li> : null}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">Kart</h3>
          <div className="mt-3 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500">
            Google Maps plassholder
          </div>
          <div className="mt-4">
            {/* endret: gjør det mulig å endre samtykke i ettertid fra footer. */}
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
