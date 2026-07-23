import type { FormFieldsConfig } from "@/components/DynamicForm";

export const carerMatchingContent = {
  heading: "Help Us Match You With the Right Carer",
  subtext:
    "Every family has different preferences. Tell us what matters most, and we'll do our best to match accordingly — though we can't always guarantee availability.",

  fields: {
    language: {
      label: "Preferred language(s)",
      required: false,
      options: [
        "English",
        "Welsh",
        "Polish",
        "Portuguese",
        "Yoruba",
        "Igbo",
        "Punjabi",
        "Urdu",
        "Other",
      ],
    },
    genderPreference: {
      label: "Carer gender preference",
      required: false,
      options: [
        "No preference",
        "Female carer preferred",
        "Male carer preferred",
      ],
    },
    culturalConsiderations: {
      label: "Cultural or religious considerations we should know about",
      required: false,
      freeText: true,
    },
    otherPreferences: {
      label: "Anything else that would help us match well?",
      required: false,
      freeText: true,
    },
  } satisfies FormFieldsConfig,

  disclaimer:
    "We'll always try to accommodate your preferences, but matching depends on carer availability in your area.",
};
