import type { ServicePageContent } from "@/components/ServicePageLayout";

export const personalCareContent: ServicePageContent = {
  serviceName: "Personal Care",
  heroHeadline: "Personal Care, With Dignity at the Centre",
  heroSubtext:
    "Support with the everyday routines that matter — washing, dressing, medication — delivered by carers who take the time to do it right.",
  // TEMPORARY placeholder — bedside-care.jpeg is a close, intimate crop from
  // the team gallery, not a hero-composed shot. Swap for wider, more
  // environmental hero photography (more negative space for the text to sit
  // over) once it's available.
  heroPhoto: {
    src: "/images/team/bedside-care.jpeg",
    alt: "A Senior Health Care carer supporting a client at home",
  },
  whyChooseUs: [
    {
      icon: "userCheck",
      title: "Same Carer, Every Visit",
      description:
        "Consistent carer matching means no strangers, no re-explaining routines — just familiar, dependable support.",
    },
    {
      icon: "shieldCheck",
      title: "DBS-Checked & Trained",
      description:
        "Every carer completes an enhanced DBS check and structured training before working with any client.",
    },
    {
      icon: "handHeart",
      title: "Dignity-Led Approach",
      description:
        "Personal care delivered with patience and respect — never rushed, never routine.",
    },
  ],
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
  photo: {
    src: "/images/team/mobility-support.jpeg",
    alt: "A carer providing mobility support to a client at home",
  },
  // DRAFT testimonial — placeholder for copy review. Swap for a real client
  // testimonial (with permission) before launch.
  testimonial: {
    quote:
      "Mum was nervous about someone helping her get dressed. Within a week, she asked for her carer by name.",
    name: "Angela",
    location: "Manchester",
  },
  // DRAFT FAQ content — first-pass copy, review before launch.
  faqs: [
    {
      question: "How quickly can personal care start?",
      answer:
        "In most cases we can begin visits within a few days of your initial assessment, and sooner in urgent situations — call us to discuss timing.",
    },
    {
      question: "Will the same carer visit every time?",
      answer:
        "Yes — we match one consistent carer, with a trained backup for holidays or illness, so your routine and preferences stay familiar.",
    },
    {
      question: "Can visits be adjusted as needs change?",
      answer:
        "Absolutely. Care plans are reviewed regularly, and visit length or frequency can flex as circumstances change.",
    },
    {
      question: "Do carers help with medication?",
      answer:
        "Yes, personal care visits include medication prompts and administration where required, recorded at every visit.",
    },
    {
      question: "What if my relative needs help with mobility too?",
      answer:
        "Personal care includes mobility support around the home — carers are trained in safe moving and handling techniques.",
    },
  ],
  ctaText: "Speak to Our Team",
};
