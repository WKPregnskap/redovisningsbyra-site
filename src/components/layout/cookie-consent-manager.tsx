"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";
import { readCookieConsent, saveCookieConsent } from "@/lib/cookie-consent";

type DraftConsent = {
  statistics: boolean;
  marketing: boolean;
};

export function CookieConsentManager() {
  const [loaded, setLoaded] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<DraftConsent>({ statistics: false, marketing: false });

  useEffect(() => {
    const existing = readCookieConsent();

    if (existing) {
      setHasConsent(true);
      setDraft({ statistics: existing.statistics, marketing: existing.marketing });
    }

    setLoaded(true);

    const onOpenSettings = () => {
      const latest = readCookieConsent();

      if (latest) {
        setDraft({ statistics: latest.statistics, marketing: latest.marketing });
      }

      setSettingsOpen(true);
    };

    window.addEventListener("open-cookie-settings", onOpenSettings);

    return () => {
      window.removeEventListener("open-cookie-settings", onOpenSettings);
    };
  }, []);

  const commitConsent = (next: DraftConsent) => {
    saveCookieConsent(next);
    setHasConsent(true);
    setSettingsOpen(false);
    setDraft(next);

    // endret: sender event slik at GTM/annen sporing kan aktiveres etter gyldig samtykke.
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  if (!loaded) {
    return null;
  }

  return (
    <>
      {!hasConsent ? (
        <aside
          className="fixed inset-x-0 bottom-0 z-[70] border-t border-slate-200 bg-white/98 p-4 shadow-2xl backdrop-blur"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie-samtykke"
        >
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-base font-semibold text-slate-900">Vi bruker informasjonskapsler</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Vi bruker nødvendige cookies for at siden skal fungere. Med ditt samtykke bruker vi også statistikk- og
              markedsføringscookies for å forbedre nettsiden og måle effekt.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                className="btn-primary"
                onClick={() => commitConsent({ statistics: true, marketing: true })}
              >
                Godta alle
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => commitConsent({ statistics: false, marketing: false })}
              >
                Kun nødvendige
              </button>
              <button type="button" className="btn-tertiary" onClick={() => setSettingsOpen(true)}>
                Tilpass valg
              </button>
            </div>
          </div>
        </aside>
      ) : null}

      {settingsOpen ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-900/45 p-4">
          <section
            className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie-innstillinger"
          >
            <h2 className="text-xl font-semibold text-slate-900">Cookie-innstillinger</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Velg hvilke cookies du vil tillate. Nødvendige cookies er alltid aktivert.
            </p>

            <div className="mt-5 space-y-4">
              <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-3">
                <input type="checkbox" checked disabled className="mt-1" />
                <span>
                  <span className="block text-sm font-semibold text-slate-900">Nødvendige</span>
                  <span className="block text-sm text-slate-600">Brukes for grunnleggende funksjonalitet.</span>
                </span>
              </label>

              <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-3">
                <input
                  type="checkbox"
                  checked={draft.statistics}
                  onChange={(event) => setDraft((prev) => ({ ...prev, statistics: event.target.checked }))}
                  className="mt-1"
                />
                <span>
                  <span className="block text-sm font-semibold text-slate-900">Statistikk</span>
                  <span className="block text-sm text-slate-600">Hjelper oss å forstå bruk av nettsiden.</span>
                </span>
              </label>

              <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-3">
                <input
                  type="checkbox"
                  checked={draft.marketing}
                  onChange={(event) => setDraft((prev) => ({ ...prev, marketing: event.target.checked }))}
                  className="mt-1"
                />
                <span>
                  <span className="block text-sm font-semibold text-slate-900">Markedsføring</span>
                  <span className="block text-sm text-slate-600">Brukes for annonsering og kampanjemåling.</span>
                </span>
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button type="button" className="btn-primary" onClick={() => commitConsent(draft)}>
                Lagre valg
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setSettingsOpen(false);
                }}
              >
                Lukk
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
