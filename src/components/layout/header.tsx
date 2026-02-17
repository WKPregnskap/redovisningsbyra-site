"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "../../../public/wk-logo-header.svg";

type NavItem = {
  href: string;
  label: string;
  sectionId?: string;
};

const navItems: NavItem[] = [
  { href: "/#hero", label: "Hjem", sectionId: "hero" },
  { href: "/#tjenester", label: "Tjenester", sectionId: "tjenester" },
  { href: "/#fastpris", label: "Fastpris", sectionId: "fastpris" },
  // endret: Om oss skal hoppe til team-seksjonen på forsiden.
  { href: "/#om-oss-scroll", label: "Om oss", sectionId: "om-oss-scroll" },
  // endret: referanser og kontakt går inn i samme scrollflyt på forsiden.
  { href: "/#referanser", label: "Referanser", sectionId: "referanser" },
  { href: "/#kontakt", label: "Kontakt", sectionId: "kontakt" },
];

function unlockScrollState() {
  // Defensive cleanup: clear leftover scroll-lock from any modal/menu interaction.
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  document.body.classList.remove("no-scroll", "overflow-hidden");
  document.documentElement.classList.remove("no-scroll", "overflow-hidden");
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Deterministic initial state avoids SSR/client attribute drift during hydration.
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    unlockScrollState();
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const syncActiveSectionFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    };

    // Read hash on mount in a client-only phase to avoid render-time window branching.
    window.requestAnimationFrame(syncActiveSectionFromHash);
    window.addEventListener("hashchange", syncActiveSectionFromHash);

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const topEntry = visibleEntries[0];

        if (!topEntry) {
          return;
        }

        const id = topEntry.target.id;
        setActiveSection(id);

        // Keep URL hash synced with scroll position without page reload.
        window.history.replaceState(null, "", `#${id}`);
      },
      {
        root: null,
        // Activate around viewport middle to improve perceived section tracking.
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7, 0.9],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", syncActiveSectionFromHash);
      observer.disconnect();
    };
  }, [isHome]);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    // endret: steng mobilmeny ved alle menyklikk.
    setMobileMenuOpen(false);

    if (!sectionId || !isHome) {
      return;
    }

    event.preventDefault();
    unlockScrollState();

    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${sectionId}`);
    setActiveSection(sectionId);

    // Accessibility: move focus to heading in destination section after smooth scroll.
    window.setTimeout(() => {
      const heading = target.querySelector("h1, h2");
      if (heading instanceof HTMLElement) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    }, 450);
  };

  const isItemActive = (item: NavItem) => {
    if (isHome && item.sectionId) {
      return activeSection === item.sectionId;
    }

    // Deterministic pathname-based active state for non-anchor routes.
    const routeHref = item.href.split("#")[0];
    return routeHref !== "/" && pathname.startsWith(routeHref);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50">
      {/* Single-row header: logo + nav + optional utility (subpages) to remove duplicate menu rows. */}
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 lg:px-8">
        {/* Logo container uses transparent background and dedicated sizing class. */}
        <Link href="/" className="header-logo inline-flex shrink-0 items-center rounded-sm">
          <Image
            // endret: statisk import gjør logo-path robust på både GitHub Pages (basePath) og vanlig domene.
            src={logoImage}
            alt="Werner Klausen Regnskap"
            width={3117}
            height={421}
            priority
            className="header-logo__img"
          />
        </Link>

        {/* endret: desktop-nav skjules på mobil for bedre iPhone-opplevelse uten horisontal scroll. */}
        <nav aria-label="Hovedmeny" className="hidden min-w-0 flex-1 md:block">
          <ul className="flex min-w-max items-center gap-3 md:gap-6">
            {/* endret: vis samme komplette meny på alle sider for konsistent navigasjon */}
            {navItems.map((item) => {
              const isActive = isItemActive(item);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(event) => handleSectionClick(event, item.sectionId)}
                    aria-current={isActive ? "page" : undefined}
                    className={`small-text font-medium whitespace-nowrap transition ${
                      isActive ? "text-[#0e5f84]" : "text-slate-600 hover:text-[#0e5f84]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* endret: dedikert mobilmeny med tydelig åpne/lukke-kontroll. */}
        <button
          type="button"
          className="ml-auto inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          Meny
        </button>
        {/* endret: fjernet CTA-knapper fra menyraden etter ønske */}
      </div>

      {mobileMenuOpen ? (
        <nav id="mobile-menu" aria-label="Mobilmeny" className="border-t border-slate-200 bg-slate-50 md:hidden">
          <ul className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3">
            {navItems.map((item) => {
              const isActive = isItemActive(item);

              return (
                <li key={`mobile-${item.href}`}>
                  <Link
                    href={item.href}
                    onClick={(event) => handleSectionClick(event, item.sectionId)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-md px-2 py-2 text-sm font-medium transition ${
                      isActive ? "bg-slate-100 text-[#0e5f84]" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
