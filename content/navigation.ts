export type NavLink = {
  label: string;
  shortLabel?: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Personal Care", shortLabel: "Personal", href: "/personal-care" },
  { label: "Nursing Care", shortLabel: "Nursing", href: "/nursing-care" },
  { label: "Dementia Care", shortLabel: "Dementia", href: "/dementia-care" },
  { label: "Live-in Care", shortLabel: "Live-in", href: "/live-in-care" },
  { label: "Respite Care", shortLabel: "Respite", href: "/respite-care" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
