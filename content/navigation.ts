export type NavLink = {
  label: string;
  href: string;
};

export const homeLink: NavLink = { label: "Home", href: "/" };

export const serviceLinks: NavLink[] = [
  { label: "Personal Care", href: "/personal-care" },
  { label: "Nursing Care", href: "/nursing-care" },
  { label: "Dementia Care", href: "/dementia-care" },
  { label: "Live-in Care", href: "/live-in-care" },
  { label: "Respite Care", href: "/respite-care" },
  { label: "Mental Health Support", href: "/mental-health-support" },
  {
    label: "Learning Disability Support",
    href: "/learning-disability-support",
  },
  { label: "Hospital Step-Down Care", href: "/hospital-step-down-care" },
];

export const secondaryNavLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Care Assessment", href: "/care-assessment" },
  { label: "Contact", href: "/contact" },
];

// Full flat list — used by the footer's sitemap-style column.
export const navLinks: NavLink[] = [
  homeLink,
  ...serviceLinks,
  ...secondaryNavLinks,
];
