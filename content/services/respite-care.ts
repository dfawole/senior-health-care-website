import type { ServicePageContent } from "@/components/ServicePageLayout";

export const respiteCareContent: ServicePageContent = {
  serviceName: "Respite Care",
  heroHeadline: "A Break for You, Without a Break in Their Care",
  heroSubtext:
    "Short-term cover that lets family carers rest, travel, or simply breathe — while your loved one stays supported by carers they trust.",
  whyChooseUs: [
    {
      icon: "calendarClock",
      title: "Flexible, From Days to Weeks",
      description:
        "Cover exactly as long as you need it — a weekend, a holiday, or an extended break.",
    },
    {
      icon: "phoneCall",
      title: "Same-Day Response",
      description:
        "Enquiries are assessed the same day, so respite cover can be arranged even at short notice.",
    },
    {
      icon: "heartHandshake",
      title: "Familiar Care, Not a Stranger",
      description:
        "Wherever possible we match a carer your loved one already knows, so respite doesn't feel disruptive.",
    },
  ],
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
  // DRAFT FAQ content — first-pass copy, review before launch.
  faqs: [
    {
      question: "How much notice do you need for respite care?",
      answer:
        "We aim to respond to new respite enquiries the same day, and can often arrange cover at short notice — call us to check availability.",
    },
    {
      question: "How long can respite care last?",
      answer:
        "From a few hours to several weeks, whatever suits your situation — there's no fixed minimum or maximum.",
    },
    {
      question: "Will it be a carer my relative already knows?",
      answer:
        "Where possible, yes — we prioritise a familiar, consistent carer for respite cover to minimise disruption.",
    },
    {
      question: "Can respite care be arranged for emergencies?",
      answer:
        "Yes, emergency respite is available where capacity allows — get in touch as early as possible.",
    },
    {
      question:
        "Is respite care a good way to try home care before committing?",
      answer:
        "Yes, many families use a short respite period to see how home care works in practice before deciding on longer-term support.",
    },
  ],
  ctaText: "Speak to Our Team",
};
