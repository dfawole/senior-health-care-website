import type {
  WhoForId,
  SupportNeedId,
  IndependenceLevelId,
  HealthFlagId,
} from "@/lib/hoursEstimator";

export const careAssessmentContent = {
  eyebrow: "Free Tool",
  heading: "Care Needs Assessment",
  subtext:
    "Answer a few quick questions to get an indicative estimate of weekly care hours, a helpful starting point for your conversation with us.",

  disclaimer:
    "This is an estimate to help guide your conversation with us, not a clinical assessment. Your actual care plan will be confirmed through a free, no-obligation assessment with our team.",

  steps: {
    whoFor: {
      title: "Who is this for?",
      options: [
        { id: "myself", label: "Myself" },
        { id: "familyMember", label: "A family member" },
      ] satisfies { id: WhoForId; label: string }[],
    },
    supportNeeds: {
      title: "What support is needed?",
      description: "Select all that apply.",
      options: [
        { id: "washing", label: "Washing/bathing" },
        { id: "dressing", label: "Dressing" },
        { id: "mealPreparation", label: "Meal preparation" },
        { id: "medicationSupport", label: "Medication support" },
        { id: "mobilitySupport", label: "Mobility support" },
        { id: "companionship", label: "Companionship/social support" },
        { id: "householdTasks", label: "Household tasks/light cleaning" },
        { id: "overnightSupport", label: "Overnight support needed" },
      ] satisfies { id: SupportNeedId; label: string }[],
    },
    independenceLevel: {
      title: "How would you describe current independence level?",
      options: [
        {
          id: "mostlyIndependent",
          label: "Mostly independent, needs occasional help",
        },
        { id: "regularSupport", label: "Needs regular daily support" },
        {
          id: "significantSupport",
          label: "Needs significant support with most tasks",
        },
      ] satisfies { id: IndependenceLevelId; label: string }[],
    },
    healthFlags: {
      title: "Any of the following?",
      description:
        "Select all that apply, this doesn't affect your hours estimate, it just helps us point you to the most relevant service.",
      options: [
        { id: "memoryLoss", label: "Memory loss or confusion" },
        { id: "recentHospitalStay", label: "Recent hospital stay" },
        {
          id: "complexCondition",
          label: "Complex/ongoing health condition",
        },
      ] satisfies { id: HealthFlagId; label: string }[],
    },
  },

  navigation: {
    backLabel: "Back",
    nextLabel: "Next",
    seeResultsLabel: "See My Estimate",
    stepLabel: (step: number, total: number) => `Step ${step} of ${total}`,
  },

  results: {
    headingMyself: "Your Indicative Care Estimate",
    headingFamilyMember: "Their Indicative Care Estimate",
    hoursLabel: "Estimated weekly care hours",
    hoursSuffix: "hours/week",
    noNeedsMessage:
      "Based on your answers, we didn't identify specific regular support hours, but we're still happy to talk through what might help.",
    recommendedServicesHeading: "Services that may be relevant",
    ctaHeading: "Ready to talk it through?",
    ctaSubtext:
      "Book a free, no-obligation assessment with our team to confirm the right care plan.",
    ctaLabel: "Book Your Free Assessment",
    restartLabel: "Start Again",
  },
};
