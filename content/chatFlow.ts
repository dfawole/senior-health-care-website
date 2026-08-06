import type { FormFieldsConfig } from "@/components/DynamicForm";
import { siteContent } from "@/content/site";
import { contactContent } from "@/content/contact";

export type ChatMenuOption = {
  id: "services" | "get-started" | "urgent" | "other";
  label: string;
};

/** Rule-based decision tree for the Care Needs Navigator widget — every
 * string a visitor can see lives here or is pulled from an existing shared
 * content source (services, process steps), never invented at render time.
 * There is no free-text/AI path: every screen is a fixed set of buttons. */
export const chatFlow = {
  greeting: siteContent.chatWidget.greeting,
  backLabel: "← Back",
  requestCallbackLabel: siteContent.servicePage.closingCtaSecondaryLabel,

  mainMenu: [
    { id: "services", label: "What services do you offer?" },
    { id: "get-started", label: "How do I get started?" },
    { id: "urgent", label: "This is urgent" },
    { id: "other", label: "Something else" },
  ] satisfies ChatMenuOption[],

  services: {
    intro: "Here's what we offer — tap a service to learn more:",
    learnMoreLabel: "Learn More",
  },

  getStarted: {
    intro: "Here's what happens once you get in touch:",
    assessmentLabel: "Try the Care Needs Assessment",
    assessmentHref: "/care-assessment",
  },

  urgent: {
    message: "Please call us directly — our team is ready to help.",
    callLabel: `Call ${siteContent.phone.display}`,
  },

  other: {
    intro: "Leave your details and we'll get back to you.",
    successMessage: contactContent.cta.subtext,
    form: {
      name: { label: "Name", required: true },
      contact: { label: "Phone or Email", required: true },
      message: { label: "Message (optional)", required: false },
    } satisfies FormFieldsConfig,
  },
} as const;
