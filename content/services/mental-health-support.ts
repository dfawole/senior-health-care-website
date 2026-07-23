import type { ServicePageContent } from "@/components/ServicePageLayout";

export const mentalHealthSupportContent: ServicePageContent = {
  serviceName: "Mental Health Support",
  heroHeadline: "Compassionate Support for Mental Health, at Home",
  heroSubtext:
    "Person-centred support for individuals managing depression, anxiety, or motivation difficulties — encouragement and routine, delivered with patience.",
  eligibilityPoints: [
    "Low mood, anxiety, or motivation are making daily routines difficult to sustain",
    "Isolation has become a real concern, not just an occasional feeling",
    "Structure and encouragement would help more than clinical intervention alone",
    "A family member wants support that complements existing mental health care, not replaces it",
  ],
  includedItems: [
    "Person-centred emotional support",
    "Encouragement with daily routines",
    "Support engaging with the community",
    "Motivation and companionship",
    "Coordination alongside existing mental health professionals",
  ],
  relevantStat: { number: "100%", label: "DBS-Checked Care Staff" },
  // UNFILLED PLACEHOLDER — blocking before launch. No real client testimonial
  // exists yet for this service. Do not invent one; replace with a real,
  // consented client quote before this page goes live.
  testimonial: {
    quote:
      "PLACEHOLDER — do not use invented testimonials for mental health support without a real, consented client quote.",
    name: "TBD",
    location: "TBD",
  },
  ctaText: "Speak to Our Team",
};
