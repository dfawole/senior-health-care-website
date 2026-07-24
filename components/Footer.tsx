import Link from "next/link";
import { navLinks } from "@/content/navigation";
import { siteContent } from "@/content/site";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-primary/10 bg-primary mt-auto border-t text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-2 text-sm text-white/80">{siteContent.tagline}</p>
            <a
              href={siteContent.phone.href}
              className="text-accent-light mt-3 inline-block text-sm font-semibold"
            >
              {siteContent.phone.display}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/70 uppercase">
              {siteContent.footer.navHeading}
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent-light text-sm text-white/90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white/70 uppercase">
              {siteContent.footer.regulationHeading}
            </p>
            <div className="mt-3 inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold">
              {siteContent.cqc.footerBadgeLabel}
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-white/60">
          &copy; {year} {siteContent.name}. {siteContent.footer.copyrightSuffix}
        </p>
      </div>
    </footer>
  );
}
