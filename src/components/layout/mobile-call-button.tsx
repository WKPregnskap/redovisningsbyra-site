import { siteConfig } from "@/config/site";
import { TrackedAnchor } from "@/components/ui/tracked-anchor";

export function MobileCallButton() {
  return (
    <div className="fixed right-4 bottom-4 z-50 md:hidden">
      <TrackedAnchor
        href={siteConfig.phoneHref}
        eventName="phone_click"
        eventPayload={{ placement: "mobile_sticky" }}
        className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg"
      >
        Ring oss nå
      </TrackedAnchor>
    </div>
  );
}
