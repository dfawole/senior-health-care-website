import type { ServicePageContent } from "@/components/ServicePageLayout";

export const learningDisabilitySupportContent: ServicePageContent = {
  serviceName: "Learning Disability Support",
  slug: "learning-disability-support",
  heroHeadline: "Support That Builds Independence, Not Dependence",
  heroSubtext:
    "Practical, empowering support for individuals with learning disabilities, helping build skills, confidence, and a fuller independent life.",
  whyChooseUs: [
    {
      icon: "graduationCap",
      title: "Skills & Independence Focus",
      description:
        "Support structured around building daily living skills and confidence, not just providing supervision.",
    },
    {
      icon: "compass",
      title: "Community Access Support",
      description:
        "Help getting out into the community and social activities that matter, not just care within four walls.",
    },
    {
      icon: "bookOpenCheck",
      title: "Respectful Advocacy",
      description:
        "Support in appointments and decisions that respects the individual's voice and choices.",
    },
  ],
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
  relatedServices: ["Mental Health Support", "Respite Care"],
  // UNFILLED PLACEHOLDER — blocking before launch. No real client testimonial
  // exists yet for this service. Do not invent one; replace with a real,
  // consented client quote before this page goes live.
  testimonial: {
    quote:
      "PLACEHOLDER — do not use invented testimonials for learning disability support without a real, consented client quote.",
    name: "TBD",
    location: "TBD",
  },
  // DRAFT FAQ content — first-pass copy, review before launch.
  faqs: [
    {
      question: "What does 'independence-building' support actually look like?",
      answer:
        "Practical coaching on daily living skills — cooking, budgeting, using transport paced around what the individual wants to achieve.",
    },
    {
      question: "Can carers support community activities and outings?",
      answer:
        "Yes, community access and social activity support is a core part of this service, not an extra.",
    },
    {
      question: "Do carers act as an advocate in appointments?",
      answer:
        "Yes, where needed, carers can provide advocacy and representation to make sure the individual's voice is heard.",
    },
    {
      question: "Is support tailored to age and personality, not generic?",
      answer:
        "Yes — every plan is person-centred and age-appropriate rather than a standard template.",
    },
    {
      question:
        "Can this support work alongside a day service or college placement?",
      answer:
        "Yes, support is flexible and can be scheduled around existing commitments like college, work, or day services.",
    },
  ],
  ctaText: "Speak to Our Team",
};
