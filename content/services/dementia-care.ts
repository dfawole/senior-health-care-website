import type { ServicePageContent } from "@/components/ServicePageLayout";

export const dementiaCareContent: ServicePageContent = {
  serviceName: "Dementia Care",
  slug: "dementia-care",
  heroHeadline: "Dementia Care That Knows the Person, Not Just the Condition",
  heroSubtext:
    "Specialist support from carers trained to work with memory loss, confusion and changing behaviour, with patience, not just procedure.",
  whyChooseUs: [
    {
      icon: "brain",
      title: "Dementia-Trained Specialists",
      description:
        "Carers trained specifically in memory loss, confusion and behavioural changes, not generalist cover.",
    },
    {
      icon: "repeat",
      title: "Routine & Familiarity First",
      description:
        "We protect the routines and familiar faces that help keep confusion and agitation manageable.",
    },
    {
      icon: "users",
      title: "Guidance for the Whole Family",
      description:
        "Practical support and guidance for family members navigating a dementia diagnosis, not just the client.",
    },
  ],
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
  relatedServices: ["Nursing Care", "Mental Health Support"],
  // DRAFT testimonial — placeholder for copy review. Swap for a real client
  // testimonial (with permission) before launch.
  testimonial: {
    quote:
      "Same face, same voice, every visit. That consistency is the only thing that's kept Dad settled this year.",
    name: "Michael",
    location: "Glasgow",
  },
  // DRAFT FAQ content — first-pass copy, review before launch.
  faqs: [
    {
      question: "Do carers have specific dementia training?",
      answer:
        "Yes, all carers assigned to dementia care complete structured dementia-specific training, including de-escalation techniques.",
    },
    {
      question: "How do you handle confusion or agitation?",
      answer:
        "Carers are trained in de-escalation and behavioural support, prioritising calm, familiar routines over confrontation.",
    },
    {
      question: "Can carer continuity be guaranteed?",
      answer:
        "We prioritise 1:1 consistent carer matching for dementia clients specifically, because familiarity reduces distress.",
    },
    {
      question: "Do you support families, not just the person with dementia?",
      answer:
        "Yes — guidance and emotional support for family members is part of every dementia care plan.",
    },
    {
      question:
        "What if the diagnosis is recent and we're not sure what we need?",
      answer:
        "That's common — our free care needs assessment can help translate a recent diagnosis into a practical, right-sized care plan.",
    },
  ],
  ctaText: "Speak to Our Team",
};
