import type { ServicePageContent } from "@/components/ServicePageLayout";

export const mentalHealthSupportContent: ServicePageContent = {
  serviceName: "Mental Health Support",
  slug: "mental-health-support",
  heroHeadline: "Compassionate Support for Mental Health, at Home",
  heroSubtext:
    "Person-centred support for individuals managing depression, anxiety, or motivation difficulties, encouragement and routine, delivered with patience.",
  heroPhoto: {
    src: "/images/team/garden-conversation.jpeg",
    alt: "Senior Health Care carer in conversation with a client in the garden",
  },
  whyChooseUs: [
    {
      icon: "smile",
      title: "Encouragement, Not Judgement",
      description:
        "Support focused on gentle encouragement with daily routines. Patience first, always.",
    },
    {
      icon: "messageCircle",
      title: "Coordinated With Existing Care",
      description:
        "We work alongside your existing mental health professionals, not instead of them.",
    },
    {
      icon: "shieldCheck",
      title: "100% DBS-Checked Staff",
      description:
        "Every carer providing mental health support is enhanced DBS-checked and trained in person-centred support.",
    },
  ],
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
  relatedServices: ["Dementia Care", "Learning Disability Support"],
  // UNFILLED PLACEHOLDER — blocking before launch. No real client testimonial
  // exists yet for this service. Do not invent one; replace with a real,
  // consented client quote before this page goes live.
  testimonial: {
    quote:
      "PLACEHOLDER — do not use invented testimonials for mental health support without a real, consented client quote.",
    name: "TBD",
    location: "TBD",
  },
  // DRAFT FAQ content — first-pass copy, review before launch.
  faqs: [
    {
      question:
        "Is this a replacement for therapy or clinical mental health care?",
      answer:
        "No — our support complements existing mental health care, providing practical, day-to-day encouragement alongside clinical treatment, not instead of it.",
    },
    {
      question: "What kind of support is actually provided?",
      answer:
        "Person-centred emotional support, help sustaining daily routines, and encouragement to stay engaged with the community — tailored to what's genuinely useful for the individual.",
    },
    {
      question: "Can support be increased if things get harder?",
      answer:
        "Yes, care plans are reviewed regularly and visit frequency can flex if needs change.",
    },
    {
      question: "Do carers have specific mental health training?",
      answer:
        "Yes, carers providing this support are trained in person-centred approaches for depression, anxiety and low motivation.",
    },
    {
      question: "How do you coordinate with our psychiatrist or GP?",
      answer:
        "With consent, we can coordinate alongside existing mental health professionals to keep support joined up.",
    },
  ],
  ctaText: "Speak to Our Team",
};
