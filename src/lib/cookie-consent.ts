export type CookieConsent = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
  version: 1;
  updatedAt: string;
};

export const COOKIE_CONSENT_STORAGE_KEY = "wk_cookie_consent_v1";

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as CookieConsent;

    if (parsed.version !== 1) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function saveCookieConsent(input: Omit<CookieConsent, "version" | "updatedAt" | "necessary">): CookieConsent {
  const value: CookieConsent = {
    necessary: true,
    statistics: input.statistics,
    marketing: input.marketing,
    version: 1,
    updatedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(value));
  }

  return value;
}

export function hasStatisticsConsent(): boolean {
  return readCookieConsent()?.statistics === true;
}
