import type { ServicePageContent } from "@/components/ServicePageLayout";

export const liveInCareContent: ServicePageContent = {
  serviceName: "Live-in Care",
  slug: "live-in-care",
  heroHeadline: "Round-the-Clock Care, Without Leaving Home",
  heroSubtext:
    "A dedicated carer living in your home, providing continuous support and companionship — the alternative to a care home that keeps you where you belong.",
  heroPhoto: {
    src: "/images/team/bedside-care.jpeg",
    alt: "Senior Health Care carers providing dedicated live-in support at a client's bedside",
  },
  whyChooseUs: [
    {
      icon: "home",
      title: "Stay in Your Own Home",
      description:
        "A genuine alternative to a care home — the same bed, garden and daily life, with round-the-clock support.",
    },
    {
      icon: "moon",
      title: "Overnight Supervision Included",
      description:
        "Continuous presence means support is there at 3am as reliably as it is at 3pm.",
    },
    {
      icon: "usersRound",
      title: "Planned Carer Rotation",
      description:
        "Regular rotation keeps your live-in carer rested and consistent, so care quality never dips.",
    },
  ],
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
  relatedServices: ["Personal Care", "Nursing Care"],
  // DRAFT testimonial — placeholder for copy review. Swap for a real client
  // testimonial (with permission) before launch.
  testimonial: {
    quote:
      "We looked at care homes. This meant Dad kept his own bed, his own garden, his own life.",
    name: "Priya",
    location: "Birmingham",
  },
  // DRAFT FAQ content — first-pass copy, review before launch.
  faqs: [
    {
      question: "How is live-in care different from a care home?",
      answer:
        "You stay in your own home with a dedicated carer, keeping your own bed, routine and independence, rather than moving into a facility.",
    },
    {
      question: "Does the same carer stay the whole time?",
      answer:
        "One dedicated carer provides day-to-day care, with planned rotation for rest days so support never lapses.",
    },
    {
      question: "What happens overnight?",
      answer:
        "Your live-in carer provides overnight supervision and support as part of the placement, not as a separate add-on.",
    },
    {
      question: "Is live-in care more affordable than a care home?",
      answer:
        "It varies by need, but many families find live-in care compares favourably to residential care once one-to-one support is factored in — we can talk through costs directly.",
    },
    {
      question: "Can live-in care start on short notice?",
      answer:
        "We offer a free, no-obligation assessment and can often arrange live-in care quickly when a decision is time-sensitive, such as after a hospital discharge.",
    },
  ],
  ctaText: "Speak to Our Team",
};
