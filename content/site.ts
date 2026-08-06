export const siteContent = {
  name: "Senior Health Care",
  tagline: "Trusted domiciliary care across the UK.",
  url: "https://www.seniorhealthcare.org.uk",
  phone: {
    display: "020 8310 2077",
    href: "tel:+442083102077",
  },
  email: {
    display: "admin@seniorhealthcare.org.uk",
    href: "mailto:admin@seniorhealthcare.org.uk",
  },
  address: {
    line1: "Unit 6, 145 Nathan Way",
    city: "London",
    region: "England",
    postalCode: "SE28 0AB",
    country: "United Kingdom",
    countryCode: "GB",
    display: "Unit 6, 145 Nathan Way, London, England, SE28 0AB",
  },
  hours: {
    display: "Monday–Friday, 9:00am–5:00pm",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
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
    heading: "Care Needs Navigator",
    greeting:
      "Hi, I'm here to help you find the right care. What can I help with today?",
    toggleLabel: "Toggle chat widget",
    closeLabel: "Close chat",
    sendLabel: "Send",
  },
  errorPage: {
    heading: "Something went wrong",
    body: "Please try again, or contact us if the problem continues.",
    retryLabel: "Try again",
  },
  notFoundPage: {
    eyebrow: "404",
    heading: "We Can't Find That Page",
    body: "The page you're looking for doesn't exist or may have moved. Let's get you back on track.",
    homeLabel: "Back to Home",
    contactLabel: "Contact Us",
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
    whyChooseUsTitle: (serviceName: string) =>
      `Why Choose Us for ${serviceName}`,
    includedTitle: (serviceName: string) => `What's Included in ${serviceName}`,
    downloadGuideLabel: "Download Guide (PDF)",
    relatedServicesEyebrow: "Explore Further",
    relatedServicesTitle: "You Might Also Be Interested In",
    faqTitle: (serviceName: string) =>
      `${serviceName} — Frequently Asked Questions`,
    closingCtaTitle: (serviceName: string) =>
      `Ready to Talk About ${serviceName}?`,
    closingCtaPrimaryLabel: "Call Now",
    closingCtaSecondaryLabel: "Request a Callback",
  },
  processSteps: {
    eyebrow: "How It Works",
    title: "What Happens Next",
    items: [
      {
        icon: "phoneCall",
        title: "Get in Touch",
        description:
          "Call us or send an enquiry, and we'll talk through your situation.",
      },
      {
        icon: "clipboardCheck",
        title: "Free Assessment",
        description:
          "We visit to understand your needs and build a personalised care plan.",
      },
      {
        icon: "heartHandshake",
        title: "Care Begins",
        description:
          "Your carer starts, matched to your preferences and ready to help.",
      },
    ],
  },
} as const;
