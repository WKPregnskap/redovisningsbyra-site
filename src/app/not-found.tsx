import { ContactBand } from "@/components/sections/contact-band";

export default function NotFound() {
  return (
    <>
      <section className="mx-auto w-full max-w-3xl px-4 pt-20 pb-12 text-center lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
          Siden ble ikke funnet
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Beklager, vi finner ikke siden du leter etter. Gå tilbake til forsiden eller kontakt oss
          direkte.
        </p>
      </section>
      <ContactBand
        title="Trenger du hjelp med en gang?"
        text="Ring oss nå, så hjelper vi deg videre med riktig løsning."
      />
    </>
  );
}
