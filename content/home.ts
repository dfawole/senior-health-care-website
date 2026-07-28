import type { HeroContent } from "@/components/Hero";
import type { CardItem } from "@/components/CardGrid";
import type { WhyChooseUsContent } from "@/components/WhyChooseUs";
import type { StatItem } from "@/components/StatsRow";
import type { TestimonialItem } from "@/components/TestimonialsCarousel";
import type { CTABannerContent } from "@/components/CTABanner";
import { siteContent } from "@/content/site";

export const homeContent = {
  hero: {
    eyebrow: "Domiciliary Care Across the UK",
    title: "Compassionate Care,\nat Home",
    subhead:
      "Trusted, person-centred home care — from a helping hand with daily routines to full-time live-in support.",
    primaryCta: { label: "Speak to Our Team", href: "/contact" },
    secondaryCta: { label: "View Our Services", href: "#services" },
    // TEMPORARY placeholder — mobility-support-2.jpeg is a close, intimate
    // crop from the team gallery, not a hero-composed shot. Swap for wider,
    // more environmental hero photography (more negative space for the
    // text to sit over) once it's available.
    photo: {
      src: "/images/team/mobility-support.jpeg",
      alt: "A carer providing mobility support to a client at home",
    },
  } satisfies HeroContent,

  trustRow: {
    items: ["CQC Registered", "DBS-Checked Staff", "Same Carer, Every Visit"],
  },

  services: {
    eyebrow: "Our Services",
    title: "Care Built Around You",
    description:
      "Whatever level of support your family needs, we're here to help — at home, on your terms.",
    items: [
      {
        icon: "heart",
        title: "Personal Care",
        description:
          "Help with washing, dressing and daily routines, delivered with dignity.",
        href: "/personal-care",
      },
      {
        icon: "stethoscope",
        title: "Nursing Care",
        description:
          "Skilled clinical support for complex or long-term health needs.",
        href: "/nursing-care",
      },
      {
        icon: "brain",
        title: "Dementia Care",
        description:
          "Specialist, patient support from carers trained in dementia care.",
        href: "/dementia-care",
      },
      {
        icon: "home",
        title: "Live-in Care",
        description:
          "Round-the-clock care from a dedicated carer in your home.",
        href: "/live-in-care",
      },
      {
        icon: "clock",
        title: "Respite Care",
        description:
          "Short-term cover that gives family carers a well-earned break.",
        href: "/respite-care",
      },
      {
        icon: "heartHandshake",
        title: "Mental Health Support",
        description:
          "Compassionate, person-centred support for depression, anxiety and low motivation.",
        href: "/mental-health-support",
      },
      {
        icon: "graduationCap",
        title: "Learning Disability Support",
        description:
          "Practical support that builds independence, skills and community access.",
        href: "/learning-disability-support",
      },
      {
        icon: "building2",
        title: "Hospital Step-Down Care",
        description:
          "Bridging support after hospital discharge, picking up where NHS reablement leaves off.",
        href: "/hospital-step-down-care",
      },
    ] satisfies CardItem[],
  },

  careAssessmentPrompt: {
    heading: "Not Sure What Level of Care You Need?",
    subtext:
      "Try our free Care Needs Assessment — answer a few quick questions to get an indicative estimate of weekly care hours.",
    ctaLabel: "Try the Care Needs Assessment",
  },

  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "A Different Kind of Home Care",
    paragraph:
      "We believe good care starts with really knowing someone — not just their needs, but their routines, their preferences and their family. That's the standard every visit is held to.",
    points: [
      "Fully trained, DBS-checked carers",
      "Consistent carer matching, visit after visit",
      "Personalised care plans, reviewed regularly",
      "Direct communication with you and your family",
      "Flexible support, from an hour a week to live-in care",
    ],
    accreditationsLabel: "Accredited & Regulated",
    accreditations: [
      "Care Quality Commission (CQC) Registered",
      "Enhanced DBS Checks for All Staff",
      "Skills for Care Endorsed Training",
    ],
  } satisfies WhyChooseUsContent,

  stats: {
    items: [
      { value: "Same-Day", label: "Response to New Enquiries" },
      { value: "100%", label: "DBS-Checked Care Staff" },
      { value: "1:1", label: "Consistent Carer Matching" },
      { value: "Free", label: "No-Obligation Care Assessment" },
    ] satisfies StatItem[],
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "What Families Say",
    items: [
      {
        quote:
          "The carers treat my mother with such patience and dignity. It's given our whole family peace of mind.",
        name: "Sarah",
        area: "Bromley",
        rating: 5,
      },
      {
        quote:
          "Having the same carer every visit has made such a difference — she knows exactly what Dad needs.",
        name: "James",
        area: "Leeds",
        rating: 5,
      },
      {
        quote:
          "Professional, warm and always on time. I couldn't ask for better support at home.",
        name: "Margaret",
        area: "Bristol",
        rating: 5,
      },
    ] satisfies TestimonialItem[],
  },

  ctaBanner: {
    title: "Let's Find the Right Care for Your Family",
    primaryCta: { label: "Call Now", href: siteContent.phone.href },
    secondaryCta: { label: "Request a Callback", href: "/contact" },
  } satisfies CTABannerContent,
};
