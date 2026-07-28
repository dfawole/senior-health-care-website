"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  homeLink,
  serviceLinks,
  secondaryNavLinks,
} from "@/content/navigation";
import { siteContent } from "@/content/site";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";
import Logo from "@/components/Logo";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Header persists across client-side navigations (it lives in the root
  // layout, not inside the page), so neither dropdown unmounts on route
  // change. Force both closed whenever the route actually changes —
  // without this, clicking a link without moving the mouse afterward
  // leaves :hover (and therefore the CSS-only version of this menu) true
  // on the new page, since the pointer never left the trigger's screen
  // position.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="border-primary/10 bg-background/95 sticky top-0 z-50 h-[var(--header-height)] border-b backdrop-blur">
      <div className="relative flex h-full w-full items-center">
        {/* Absolutely positioned so its placement at the true left edge is
            independent of the nav column's own max-width/centering below —
            it stays put at left-6 no matter how that column is adjusted. */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2">
          <Logo />
        </div>

        {/* Nav + right-cluster live inside the same mx-auto max-w-6xl
            column used everywhere else on the site (Section, Footer, etc.),
            centered in the true full viewport width and right-aligned
            (justify-end) within it — this is what keeps the group inset
            from the true right edge with sensible padding, matching how it
            was positioned before the header became a single full-width
            justify-between row, while staying independent of the Logo's
            own (now separate) position. */}
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-end px-6">
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex lg:items-center lg:gap-6">
              <Link
                href={homeLink.href}
                className="text-text hover:text-primary text-sm font-medium transition-colors"
              >
                {homeLink.label}
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onFocus={() => setServicesOpen(true)}
                onBlur={(event) => {
                  // Only close if focus is leaving the whole group — moving focus
                  // from the trigger to a menu item fires blur on the trigger too,
                  // but relatedTarget is still inside this div in that case.
                  if (
                    !event.currentTarget.contains(
                      event.relatedTarget as Node | null,
                    )
                  ) {
                    setServicesOpen(false);
                  }
                }}
              >
                <Link
                  href={siteContent.header.servicesHref}
                  className="text-text hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  {siteContent.header.servicesLabel}
                  <ChevronDown
                    className="h-4 w-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </Link>
                <div
                  className={`absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity ${
                    servicesOpen ? "visible opacity-100" : "invisible"
                  }`}
                >
                  <ServicesMegaMenu
                    onLinkClick={() => setServicesOpen(false)}
                  />
                </div>
              </div>

              {secondaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text hover:text-primary text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div
                className="border-primary/20 text-primary hidden items-center rounded-md border px-2 py-1 text-xs font-semibold sm:flex"
                aria-label={siteContent.cqc.headerBadgeAriaLabel}
              >
                {siteContent.cqc.headerBadgeLabel}
              </div>

              <a
                href={siteContent.phone.href}
                className="bg-primary rounded-md px-3 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                {siteContent.phone.display}
              </a>

              <button
                type="button"
                className="text-text inline-flex items-center justify-center rounded-md p-2 lg:hidden"
                aria-label={siteContent.header.menuToggleLabel}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="sr-only">
                  {siteContent.header.menuToggleLabel}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  {menuOpen ? (
                    <path d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-primary/10 bg-background border-t lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            <Link
              href={homeLink.href}
              className="text-text hover:bg-primary/5 hover:text-primary rounded-md px-2 py-2 text-sm font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {homeLink.label}
            </Link>

            <p className="text-text/65 mt-3 px-2 text-xs font-semibold tracking-wide uppercase">
              {siteContent.header.servicesLabel}
            </p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:bg-primary/5 hover:text-primary rounded-md px-2 py-2 text-sm font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-primary/10 my-2 border-t" />

            {secondaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:bg-primary/5 hover:text-primary rounded-md px-2 py-2 text-sm font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
