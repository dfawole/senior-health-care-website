"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-primary/10 bg-background/95 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />

        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          <Link
            href={homeLink.href}
            className="text-text hover:text-primary text-sm font-medium"
          >
            {homeLink.label}
          </Link>

          <div className="group relative">
            <Link
              href={siteContent.header.servicesHref}
              className="text-text hover:text-primary flex items-center gap-1 text-sm font-medium"
            >
              {siteContent.header.servicesLabel}
              <ChevronDown
                className="h-4 w-4"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
            <div className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ServicesMegaMenu />
            </div>
          </div>

          {secondaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text hover:text-primary text-sm font-medium"
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
            className="bg-primary rounded-md px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
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

      {menuOpen && (
        <nav className="border-primary/10 bg-background border-t lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            <Link
              href={homeLink.href}
              className="text-text hover:bg-primary/5 hover:text-primary rounded-md px-2 py-2 text-sm font-medium"
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
                className="text-text hover:bg-primary/5 hover:text-primary rounded-md px-2 py-2 text-sm font-medium"
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
                className="text-text hover:bg-primary/5 hover:text-primary rounded-md px-2 py-2 text-sm font-medium"
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
