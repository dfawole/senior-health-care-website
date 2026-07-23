import type { ServicePageContent } from "@/components/ServicePageLayout";

export const nursingCareContent: ServicePageContent = {
  serviceName: "Nursing Care",
  heroHeadline: "Skilled Nursing Care, At Home",
  heroSubtext:
    "Clinical support for complex or long-term health needs, from carers trained to manage them properly — without leaving home.",
  eligibilityPoints: [
    "Ongoing health conditions need regular clinical monitoring",
    "Wound care, catheter care, or other clinical procedures are required",
    "A recent hospital stay means extra support is needed during recovery",
    "Medication is complex and needs a trained hand, not just a reminder",
  ],
  includedItems: [
    "Clinical health monitoring",
    "Wound care and management",
    "Complex medication administration",
    "Coordination with GPs and district nurses",
    "Support following hospital discharge",
  ],
  relevantStat: { number: "Same-Day", label: "Response to New Enquiries" },
  // DRAFT testimonial — placeholder for copy review. Swap for a real client
  // testimonial (with permission) before launch.
  testimonial: {
    quote:
      "After my husband's stroke, I didn't know where to start. The nursing team stepped in and just... handled it.",
    name: "Ruth",
    location: "Edinburgh",
  },
  ctaText: "Speak to Our Team",
};
