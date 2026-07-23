import type { ServicePageContent } from "@/components/ServicePageLayout";

export const personalCareContent: ServicePageContent = {
  serviceName: "Personal Care",
  heroHeadline: "Personal Care, With Dignity at the Centre",
  heroSubtext:
    "Support with the everyday routines that matter — washing, dressing, medication — delivered by carers who take the time to do it right.",
  eligibilityPoints: [
    "A loved one needs help with washing, dressing, or personal hygiene but wants to stay independent at home",
    "Medication needs to be managed reliably, every day",
    "Mobility has become harder, and daily tasks now carry real risk",
    "Family are trying to help but can no longer manage safely alone",
  ],
  includedItems: [
    "Washing, bathing and showering support",
    "Dressing and grooming assistance",
    "Medication prompts and administration",
    "Continence care, handled with dignity",
    "Mobility support around the home",
  ],
  relevantStat: { number: "100%", label: "DBS-Checked Care Staff" },
  // DRAFT testimonial — placeholder for copy review. Swap for a real client
  // testimonial (with permission) before launch.
  testimonial: {
    quote:
      "Mum was nervous about someone helping her get dressed. Within a week, she asked for her carer by name.",
    name: "Angela",
    location: "Manchester",
  },
  ctaText: "Speak to Our Team",
};
