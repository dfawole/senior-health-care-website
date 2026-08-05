import type { ServicePageContent } from "@/components/ServicePageLayout";

export const nursingCareContent: ServicePageContent = {
  serviceName: "Nursing Care",
  heroHeadline: "Skilled Nursing Care, At Home",
  heroSubtext:
    "Clinical support for complex or long-term health needs, from carers trained to manage them properly — without leaving home.",
  whyChooseUs: [
    {
      icon: "stethoscope",
      title: "Clinically Trained Carers",
      description:
        "Wound care, catheter care and medication management delivered by carers trained for complex health needs.",
    },
    {
      icon: "clipboardCheck",
      title: "Coordinated With Your GP",
      description:
        "We liaise directly with GPs and district nurses, so your clinical care stays joined up, not fragmented.",
    },
    {
      icon: "alarmClock",
      title: "Same-Day Response",
      description:
        "New nursing care enquiries are assessed the same day — because complex needs don't wait.",
    },
  ],
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
  includedPhoto: {
    src: "/images/team/medication-2.jpeg",
    alt: "Senior Health Care carer organizing a client's weekly medication",
  },
  relevantStat: { number: "Same-Day", label: "Response to New Enquiries" },
  photo: {
    src: "/images/team/bedside-care.jpeg",
    alt: "Senior Health Care carers providing bedside support",
  },
  // DRAFT testimonial — placeholder for copy review. Swap for a real client
  // testimonial (with permission) before launch.
  testimonial: {
    quote:
      "After my husband's stroke, I didn't know where to start. The nursing team stepped in and just... handled it.",
    name: "Ruth",
    location: "Edinburgh",
  },
  // DRAFT FAQ content — first-pass copy, review before launch.
  faqs: [
    {
      question: "What clinical tasks can your carers perform?",
      answer:
        "Our nursing-trained carers can manage wound care, catheter care, and complex medication administration under agreed care plans.",
    },
    {
      question: "Can you support a hospital discharge?",
      answer:
        "Yes — we specialise in stepping in immediately after a hospital stay to support a safe, well-supported recovery at home.",
    },
    {
      question: "Do you communicate with our GP or district nurse?",
      answer:
        "Yes, coordination with existing clinical teams is built into every nursing care plan.",
    },
    {
      question: "Is nursing care available for a short recovery period only?",
      answer:
        "Yes, nursing care can be arranged short-term for recovery or long-term for ongoing conditions — whichever fits your situation.",
    },
    {
      question: "Who actually delivers the clinical care?",
      answer:
        "Carers with specific clinical training relevant to the tasks required, working within a structured, supervised care plan.",
    },
  ],
  ctaText: "Speak to Our Team",
};
