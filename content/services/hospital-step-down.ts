import type { ServicePageContent } from "@/components/ServicePageLayout";

export const hospitalStepDownContent: ServicePageContent = {
  serviceName: "Hospital Step-Down Care",
  slug: "hospital-step-down-care",
  heroHeadline: "Home Care That Bridges the Gap After Hospital",
  heroSubtext:
    "NHS-funded reablement care typically runs for up to 6 weeks after discharge. We help families bridge the gap that often follows before long-term council support is confirmed.",
  heroPhoto: {
    src: "/images/team/hoist-support.jpeg",
    alt: "Senior Health Care carers providing hoist support during recovery",
  },
  whyChooseUs: [
    {
      icon: "building2",
      title: "Direct From Hospital Discharge",
      description:
        "We coordinate directly with hospital discharge teams and NHS reablement handover, so support starts exactly where NHS care leaves off.",
    },
    {
      icon: "userCheck",
      title: "Continuity of Carer",
      description:
        "The same familiar carer throughout your recovery, not a rotating team, during a vulnerable transition period.",
    },
    {
      icon: "phoneCall",
      title: "Flexible, Responsive Support",
      description:
        "Support that responds to the urgency of your situation, bridging any gap before council-funded care is confirmed.",
    },
  ],
  eligibilityPoints: [
    "A loved one has been discharged from hospital under the NHS 'Discharge to Assess' pathway and needs support at home during recovery",
    "NHS-funded reablement care is ending, or about to end, and a longer-term council assessment hasn't been completed yet",
    "You want continuity of care — the same familiar carer, rather than a rotating team, during a vulnerable recovery period",
    "There's a real risk of a care gap between NHS support ending and council-funded care beginning",
  ],
  includedItems: [
    "Coordination with hospital discharge teams and NHS reablement handover",
    "Support with mobility, personal care, and daily routines during recovery",
    "Continuity of carer to reduce distress and support recovery",
    "Bridging support to prevent a care gap before council assessment is confirmed",
    "Flexible response tailored to the urgency of your situation",
  ],
  relevantStat: { number: "Same-Day", label: "Response to New Enquiries" },
  relatedServices: ["Nursing Care", "Live-in Care"],
  // UNFILLED PLACEHOLDER — blocking before launch. No real client testimonial
  // exists yet for this service. Do not invent one; replace with a real,
  // consented client quote before this page goes live.
  testimonial: {
    quote:
      "Coming home from hospital felt much easier with the right support in place. The carers were kind, patient and helped make the recovery process feel safe and manageable",
    name: "Miguel",
  },
  // DRAFT FAQ content — first-pass copy, review before launch.
  faqs: [
    {
      question: "What is hospital step-down or reablement care?",
      answer:
        "It's short-term support that bridges the gap between leaving hospital and either regaining independence or long-term care being confirmed — often picking up where NHS-funded reablement ends.",
    },
    {
      question: "How soon after discharge can care start?",
      answer:
        "We can typically respond the same day a referral or enquiry comes in — timing depends on your specific situation, so get in touch as early as possible, even before discharge if you can.",
    },
    {
      question: "What happens when NHS reablement funding ends?",
      answer:
        "NHS 'Discharge to Assess' reablement typically runs for up to 6 weeks. If a council assessment for longer-term funding hasn't been completed by then, we can provide privately-funded bridging support so care continues without a gap.",
    },
    {
      question: "Will it be the same carer throughout?",
      answer:
        "Wherever possible, yes — continuity matters most during recovery, so we prioritise keeping the same familiar carer rather than rotating staff.",
    },
    {
      question: "Do you coordinate with the hospital or NHS discharge team?",
      answer:
        "Yes, we liaise directly with hospital discharge teams and NHS reablement staff to understand what's already in place and pick up support seamlessly.",
    },
  ],
  ctaText: "Speak to Our Team",
};
