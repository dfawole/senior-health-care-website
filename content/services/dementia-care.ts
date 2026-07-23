import type { ServicePageContent } from "@/components/ServicePageLayout";

export const dementiaCareContent: ServicePageContent = {
  serviceName: "Dementia Care",
  heroHeadline: "Dementia Care That Knows the Person, Not Just the Condition",
  heroSubtext:
    "Specialist support from carers trained to work with memory loss, confusion and changing behaviour — with patience, not just procedure.",
  eligibilityPoints: [
    "A diagnosis of dementia or Alzheimer's has changed what daily life looks like",
    "Confusion, wandering, or agitation are becoming harder to manage safely",
    "Routine and familiarity have become essential to keeping calm",
    "Family need support and guidance, not just extra hands",
  ],
  includedItems: [
    "Dementia-trained care staff",
    "Memory prompts and cognitive engagement",
    "Routine and familiarity maintenance",
    "De-escalation and behavioural support",
    "Family guidance and support",
  ],
  relevantStat: { number: "1:1", label: "Consistent Carer Matching" },
  // DRAFT testimonial — placeholder for copy review. Swap for a real client
  // testimonial (with permission) before launch.
  testimonial: {
    quote:
      "Same face, same voice, every visit. That consistency is the only thing that's kept Dad settled this year.",
    name: "Michael",
    location: "Glasgow",
  },
  ctaText: "Speak to Our Team",
};
