import type { FormFieldsConfig } from "@/components/DynamicForm";

export const contactContent = {
  eyebrow: "Contact",
  heading: "Let's Talk About Your Care Needs",
  subtext:
    "Tell us a little about what you're looking for, and a member of our team will get back to you to talk through the right next steps.",

  enquiryForm: {
    name: { label: "Full Name", required: true },
    phone: { label: "Phone Number", required: true },
    email: { label: "Email Address", required: true },
    message: { label: "How can we help?", required: true },
  } satisfies FormFieldsConfig,

  cta: {
    text: "Send Enquiry",
    subtext: "We'll be in touch as soon as we can.",
  },
};
