"use client";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="text-left text-sm text-slate-600 underline underline-offset-4 hover:text-slate-900"
      onClick={() => {
        // endret: lar bruker åpne cookie-innstillinger når som helst fra footer.
        window.dispatchEvent(new Event("open-cookie-settings"));
      }}
    >
      Endre cookie-innstillinger
    </button>
  );
}
