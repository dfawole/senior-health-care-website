export const siteContent = {
  name: "Senior Health Care",
  tagline: "Trusted domiciliary care across the UK.",
  phone: {
    display: "0800 123 4567",
    href: "tel:+448001234567",
  },
  cqc: {
    headerBadgeLabel: "CQC",
    headerBadgeAriaLabel: "CQC rated",
    footerBadgeLabel: "CQC Registered",
  },
  header: {
    menuToggleLabel: "Toggle menu",
    servicesLabel: "Services",
    servicesHref: "/#services",
  },
  footer: {
    navHeading: "Navigate",
    regulationHeading: "Regulation",
    copyrightSuffix: "All rights reserved.",
  },
  chatWidget: {
    heading: "Chat with us",
    placeholder: "Chat coming soon.",
    toggleLabel: "Toggle chat widget",
    closeLabel: "Close chat",
  },
  errorPage: {
    heading: "Something went wrong",
    body: "Please try again, or contact us if the problem continues.",
    retryLabel: "Try again",
  },
  form: {
    selectPlaceholder: "Select an option",
    submittingLabel: "Sending…",
    errorMessage:
      "Something went wrong — please try again or call us directly.",
  },
  servicePage: {
    defaultCtaText: "Speak to Our Team",
    heroSecondaryCtaLabel: "Call Us",
    eligibilityTitle: (serviceName: string) =>
      `Is ${serviceName} Right for You?`,
    includedTitle: (serviceName: string) => `What's Included in ${serviceName}`,
    closingCtaTitle: (serviceName: string) =>
      `Ready to Talk About ${serviceName}?`,
    closingCtaPrimaryLabel: "Call Now",
    closingCtaSecondaryLabel: "Request a Callback",
  },
} as const;
