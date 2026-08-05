export const siteContent = {
  name: "Senior Health Care",
  tagline: "Trusted domiciliary care across the UK.",
  phone: {
    display: "0800 123 4567",
    href: "tel:+448001234567",
  },
  email: {
    display: "admin@seniorhealthcare.org.uk",
    href: "mailto:admin@seniorhealthcare.org.uk",
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
    inputPlaceholder: "Type your message…",
    toggleLabel: "Toggle chat widget",
    closeLabel: "Close chat",
    sendLabel: "Send",
    thinkingLabel: "Typing…",
    errorFallback: (phone: string) =>
      `Sorry, something went wrong on our end. Please call us directly on ${phone} and our team will be happy to help.`,
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
