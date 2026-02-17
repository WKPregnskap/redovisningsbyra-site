"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/tracking";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    trackEvent("form_submit", { form: "contact_page" });
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Send en forespørsel</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Beskriv hva du trenger hjelp med. Vi svarer raskt på telefon eller e-post.
      </p>

      {sent ? (
        <p className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm font-medium text-emerald-900">
          Takk for henvendelsen. Vi kontakter deg så snart som mulig.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Navn
            <input
              required
              name="name"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            E-post
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Melding
            <textarea
              required
              name="message"
              rows={5}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Send melding
          </button>
        </form>
      )}
    </section>
  );
}
