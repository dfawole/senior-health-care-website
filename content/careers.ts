import type { ContentBlockContent } from "@/components/ContentBlock";
import type { FormFieldsConfig } from "@/components/DynamicForm";

export const careersContent = {
  eyebrow: "Careers",
  heading: "Build a Career That Actually Cares",
  subtext:
    "We're always looking for compassionate, reliable carers to join our team — whether you're looking for permanent hours or flexible bank shifts.",

  // Section headings, not covered by the original content spec — added so
  // each rendered section has a heading rather than hardcoding one in the
  // page file. Adjust the wording here if you want something different.
  sectionHeadings: {
    whyJoinUs: "Why Join Us",
    rolesTypes: "Ways to Work With Us",
    requirements: "What We're Looking For",
  },

  whyJoinUs: [
    {
      heading: "Flexible Working",
      body: "Choose from permanent employed roles or flexible bank shifts — mornings, afternoons, evenings, nights and weekends available.",
    },
    {
      heading: "Real Training",
      body: "Every carer completes our structured in-house training programme before placement, with ongoing support from a qualified supervisor.",
    },
    {
      heading: "Competitive Pay",
      body: "We offer competitive rates of pay, reviewed regularly, with opportunities to grow as you gain experience.",
    },
    {
      heading: "Work That Matters",
      body: "Join a team that genuinely values the people it supports — and the people who provide that support.",
    },
  ] satisfies ContentBlockContent[],

  rolesTypes: [
    {
      title: "Employed Carers",
      body: "Permanent positions with consistent hours, structured shift patterns, and full training and support.",
    },
    {
      title: "Bank Carers",
      body: "Flexible, as-needed shifts — ideal if you want to work around other commitments or provide emergency cover.",
    },
  ],

  requirements: [
    "Enhanced DBS check (we can guide you through this if you don't already have one)",
    "Right to work in the UK",
    "A genuine, compassionate approach to care",
    "Reliability — our clients depend on carers showing up when expected",
    "Previous care experience is a plus, but full training is provided",
  ],

  applicationForm: {
    name: { label: "Full Name", required: true },
    phone: { label: "Phone Number", required: true },
    email: { label: "Email Address", required: true },
    roleType: {
      label: "What are you interested in?",
      required: true,
      options: [
        "Employed / Permanent role",
        "Bank / Flexible shifts",
        "Not sure yet",
      ],
    },
    experience: {
      label: "Do you have previous care experience?",
      required: true,
      options: ["Yes", "No, but I'm willing to train", "Some, but not formal"],
    },
    availability: {
      label: "What days/shifts are you available for?",
      required: false,
    },
    message: { label: "Tell us a bit about yourself", required: false },
  } satisfies FormFieldsConfig,

  cta: {
    text: "Apply Now",
    subtext: "Fill out the form below and our team will be in touch.",
  },
};
