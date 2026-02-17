"use client";

import { hasStatisticsConsent } from "@/lib/cookie-consent";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: string, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") {
    return;
  }

  // endret: blokkerer event-sporing inntil bruker har gitt samtykke til statistikk.
  if (!hasStatisticsConsent()) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}
