import type { ServicePageContent } from "@/components/ServicePageLayout";

export const learningDisabilitySupportContent: ServicePageContent = {
  serviceName: "Learning Disability Support",
  heroHeadline: "Support That Builds Independence, Not Dependence",
  heroSubtext:
    "Practical, empowering support for individuals with learning disabilities — helping build skills, confidence, and a fuller independent life.",
  eligibilityPoints: [
    "Support is needed to build daily living and independence skills",
    "Access to community activities and social opportunities would help quality of life",
    "Advocacy and representation are needed in appointments or decisions",
    "A family member needs age-appropriate, respectful support rather than generic care",
  ],
  includedItems: [
    "Independence and life skills coaching",
    "Community access support",
    "Social activity facilitation",
    "Advocacy and representation",
    "Person-centred, respectful support",
  ],
  relevantStat: { number: "1:1", label: "Consistent Carer Matching" },
  // UNFILLED PLACEHOLDER — blocking before launch. No real client testimonial
  // exists yet for this service. Do not invent one; replace with a real,
  // consented client quote before this page goes live.
  testimonial: {
    quote:
      "PLACEHOLDER — do not use invented testimonials for learning disability support without a real, consented client quote.",
    name: "TBD",
    location: "TBD",
  },
  ctaText: "Speak to Our Team",
};
