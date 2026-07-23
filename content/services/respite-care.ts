import type { ServicePageContent } from "@/components/ServicePageLayout";

export const respiteCareContent: ServicePageContent = {
  serviceName: "Respite Care",
  heroHeadline: "A Break for You, Without a Break in Their Care",
  heroSubtext:
    "Short-term cover that lets family carers rest, travel, or simply breathe — while your loved one stays supported by carers they trust.",
  eligibilityPoints: [
    "You're the main carer and haven't had a proper break in longer than you'd like to admit",
    "A holiday, event, or personal commitment means you need cover for a few days or weeks",
    "You want to test home care before committing to something longer-term",
    "Recovery from illness or surgery means you need temporary extra support",
  ],
  includedItems: [
    "Flexible cover from a few hours to several weeks",
    "Overnight and weekend availability",
    "Holiday cover for family carers",
    "Familiar, consistent carer where possible",
    "Emergency respite where capacity allows",
  ],
  relevantStat: { number: "Same-Day", label: "Response to New Enquiries" },
  // DRAFT testimonial — placeholder for copy review. Swap for a real client
  // testimonial (with permission) before launch.
  testimonial: {
    quote:
      "I hadn't left the house alone in eight months. A week of respite gave me my sister's wedding back.",
    name: "Deborah",
    location: "Cardiff",
  },
  ctaText: "Speak to Our Team",
};
