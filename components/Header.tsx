"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/content/navigation";
import { siteContent } from "@/content/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-primary/10 bg-background/95 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-primary text-lg font-bold">
          {siteContent.name}
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text hover:text-primary text-sm font-medium"
            >
              {link.shortLabel ?? link.label}
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
            {navLinks.map((link) => (
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
