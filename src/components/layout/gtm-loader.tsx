"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { hasStatisticsConsent } from "@/lib/cookie-consent";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function loadGtmIfAllowed() {
  // endret: GTM lastes kun når bruker har samtykket til statistikk-cookies.
  if (!hasStatisticsConsent()) {
    return;
  }

  const gtmId = siteConfig.gtmId;

  if (!gtmId || gtmId === "GTM-XXXXXXX") {
    return;
  }

  if (document.getElementById("gtm-script")) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
}

export function GtmLoader() {
  useEffect(() => {
    loadGtmIfAllowed();

    const onConsentUpdated = () => {
      loadGtmIfAllowed();
    };

    window.addEventListener("cookie-consent-updated", onConsentUpdated);

    return () => {
      window.removeEventListener("cookie-consent-updated", onConsentUpdated);
    };
  }, []);

  return null;
}
