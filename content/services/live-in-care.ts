import type { ServicePageContent } from "@/components/ServicePageLayout";

export const liveInCareContent: ServicePageContent = {
  serviceName: "Live-in Care",
  heroHeadline: "Round-the-Clock Care, Without Leaving Home",
  heroSubtext:
    "A dedicated carer living in your home, providing continuous support and companionship — the alternative to a care home that keeps you where you belong.",
  eligibilityPoints: [
    "Care needs have become too complex or frequent for scheduled visits",
    "A move to a care home is being considered, but staying home is preferred",
    "Overnight support and supervision are needed, not just daytime visits",
    "Consistency of one dedicated carer matters more than a rotating team",
  ],
  includedItems: [
    "24-hour presence in your home",
    "Personal care, meals, and daily support",
    "Companionship and social engagement",
    "Overnight supervision and support",
    "Regular carer rotation for continuity and rest",
  ],
  relevantStat: { number: "Free", label: "No-Obligation Care Assessment" },
  // DRAFT testimonial — placeholder for copy review. Swap for a real client
  // testimonial (with permission) before launch.
  testimonial: {
    quote:
      "We looked at care homes. This meant Dad kept his own bed, his own garden, his own life.",
    name: "Priya",
    location: "Birmingham",
  },
  ctaText: "Speak to Our Team",
};
