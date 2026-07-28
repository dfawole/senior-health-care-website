export const WHO_FOR_IDS = ["myself", "familyMember"] as const;
export type WhoForId = (typeof WHO_FOR_IDS)[number];

export const SUPPORT_NEED_IDS = [
  "washing",
  "dressing",
  "mealPreparation",
  "medicationSupport",
  "mobilitySupport",
  "companionship",
  "householdTasks",
  "overnightSupport",
] as const;
export type SupportNeedId = (typeof SUPPORT_NEED_IDS)[number];

export const SUPPORT_NEED_HOURS: Record<SupportNeedId, number> = {
  washing: 3,
  dressing: 2,
  mealPreparation: 5,
  medicationSupport: 2,
  mobilitySupport: 3,
  companionship: 3,
  householdTasks: 2,
  overnightSupport: 14,
};

export const INDEPENDENCE_LEVEL_IDS = [
  "mostlyIndependent",
  "regularSupport",
  "significantSupport",
] as const;
export type IndependenceLevelId = (typeof INDEPENDENCE_LEVEL_IDS)[number];

export const INDEPENDENCE_MULTIPLIERS: Record<IndependenceLevelId, number> = {
  mostlyIndependent: 0.7,
  regularSupport: 1.0,
  significantSupport: 1.4,
};

export const HEALTH_FLAG_IDS = [
  "memoryLoss",
  "recentHospitalStay",
  "complexCondition",
] as const;
export type HealthFlagId = (typeof HEALTH_FLAG_IDS)[number];

// Slugs match the route segment under app/<slug>/page.tsx for the
// corresponding service page.
export const HEALTH_FLAG_SERVICE_SLUGS: Record<HealthFlagId, string> = {
  memoryLoss: "dementia-care",
  recentHospitalStay: "hospital-step-down-care",
  complexCondition: "nursing-care",
};

export type HoursRange = {
  min: number;
  max: number;
};

const RANGE_SPREAD = 0.15;

export function estimateWeeklyHours(
  supportNeeds: readonly SupportNeedId[],
  independenceLevel: IndependenceLevelId,
): HoursRange {
  const baseline = supportNeeds.reduce(
    (sum, need) => sum + SUPPORT_NEED_HOURS[need],
    0,
  );

  if (baseline === 0) {
    return { min: 0, max: 0 };
  }

  const estimate = baseline * INDEPENDENCE_MULTIPLIERS[independenceLevel];
  const min = Math.max(1, Math.round(estimate * (1 - RANGE_SPREAD)));
  const max = Math.max(min + 1, Math.round(estimate * (1 + RANGE_SPREAD)));

  return { min, max };
}

export function getRecommendedServiceSlugs(
  healthFlags: readonly HealthFlagId[],
): string[] {
  const slugs = healthFlags.map((flag) => HEALTH_FLAG_SERVICE_SLUGS[flag]);
  return Array.from(new Set(slugs));
}
