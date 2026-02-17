"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/tracking";

type CallbackModalProps = {
  buttonLabel?: string;
  buttonClassName?: string;
};

const defaultButtonClassName =
  "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-500";

export function CallbackModal({ buttonLabel = "Ring meg", buttonClassName }: CallbackModalProps) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    trackEvent("callback_submit", { form: "callback_modal" });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setSent(false);
        }}
        className={buttonClassName ?? defaultButtonClassName}
      >
        {buttonLabel}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-slate-900">Be om oppringing</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Lukk"
              >
                ✕
              </button>
            </div>

            {sent ? (
              <p className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm font-medium text-emerald-900">
                Vi ringer deg så snart som mulig
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <label className="block text-sm font-medium text-slate-700">
                  Navn
                  <input
                    required
                    name="name"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Telefonnummer
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Melding (valgfri)
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-500"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
                >
                  Send forespørsel
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
