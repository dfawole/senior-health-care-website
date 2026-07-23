"use client";

import { useState } from "react";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { careAssessmentContent } from "@/content/careAssessment";
import { serviceLinks } from "@/content/navigation";
import {
  estimateWeeklyHours,
  getRecommendedServiceSlugs,
  type WhoForId,
  type SupportNeedId,
  type IndependenceLevelId,
  type HealthFlagId,
} from "@/lib/hoursEstimator";

type Answers = {
  whoFor: WhoForId | null;
  supportNeeds: SupportNeedId[];
  independenceLevel: IndependenceLevelId | null;
  healthFlags: HealthFlagId[];
};

const INITIAL_ANSWERS: Answers = {
  whoFor: null,
  supportNeeds: [],
  independenceLevel: null,
  healthFlags: [],
};

const TOTAL_STEPS = 4;

const optionClasses =
  "border-primary/15 has-[:checked]:border-accent has-[:checked]:bg-accent/5 flex cursor-pointer items-center gap-3 rounded-md border bg-white px-4 py-3 text-sm text-text transition-colors";

function toggleInArray<T>(list: T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export default function CareAssessmentForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);

  const { disclaimer, navigation, results, steps } = careAssessmentContent;
  const isResults = step === TOTAL_STEPS;

  const canProceed =
    step === 0
      ? answers.whoFor !== null
      : step === 2
        ? answers.independenceLevel !== null
        : true;

  function goNext() {
    setStep((current) => Math.min(current + 1, TOTAL_STEPS));
  }

  function goBack() {
    setStep((current) => Math.max(current - 1, 0));
  }

  function restart() {
    setAnswers(INITIAL_ANSWERS);
    setStep(0);
  }

  if (isResults) {
    const range = estimateWeeklyHours(
      answers.supportNeeds,
      answers.independenceLevel ?? "regularSupport",
    );
    const recommendedServices = getRecommendedServiceSlugs(answers.healthFlags)
      .map((slug) => serviceLinks.find((link) => link.href === `/${slug}`))
      .filter((link): link is NonNullable<typeof link> => Boolean(link));

    const heading =
      answers.whoFor === "familyMember"
        ? results.headingFamilyMember
        : results.headingMyself;

    return (
      <div className="mx-auto flex max-w-xl flex-col gap-6">
        <h3 className="text-text font-serif text-2xl font-medium">{heading}</h3>

        <div className="border-accent/30 bg-accent/5 text-text rounded-lg border p-4 text-sm">
          {disclaimer}
        </div>

        <div className="border-primary/15 rounded-lg border bg-white p-8 text-center">
          <p className="text-text/70 text-sm">{results.hoursLabel}</p>
          {range.max === 0 ? (
            <p className="text-text mt-2 text-base">{results.noNeedsMessage}</p>
          ) : (
            <p className="text-primary font-serif text-4xl font-medium">
              {range.min}-{range.max}{" "}
              <span className="font-sans text-lg">{results.hoursSuffix}</span>
            </p>
          )}
        </div>

        {recommendedServices.length > 0 && (
          <div className="flex flex-col gap-3">
            <h4 className="text-text text-base font-semibold">
              {results.recommendedServicesHeading}
            </h4>
            <div className="flex flex-col gap-2">
              {recommendedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="border-primary/15 text-primary hover:bg-primary/5 rounded-md border bg-white px-4 py-3 text-sm font-semibold transition-colors"
                >
                  {service.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="border-primary/15 flex flex-col items-center gap-3 rounded-lg border bg-white p-8 text-center">
          <h4 className="text-text font-serif text-xl font-medium">
            {results.ctaHeading}
          </h4>
          <p className="text-text/70 text-sm">{results.ctaSubtext}</p>
          <CTAButton
            href={`/contact?context=${encodeURIComponent("Care Needs Assessment")}`}
          >
            {results.ctaLabel}
          </CTAButton>
        </div>

        <button
          type="button"
          onClick={restart}
          className="text-text/60 hover:text-text self-center text-sm underline"
        >
          {results.restartLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6">
      <div className="border-accent/30 bg-accent/5 text-text rounded-lg border p-4 text-sm">
        {disclaimer}
      </div>

      <p className="text-text/60 text-xs font-semibold tracking-wide uppercase">
        {navigation.stepLabel(step + 1, TOTAL_STEPS)}
      </p>

      {step === 0 && (
        <fieldset className="flex flex-col gap-3">
          <legend className="text-text mb-2 font-serif text-xl font-medium">
            {steps.whoFor.title}
          </legend>
          {steps.whoFor.options.map((option) => (
            <label key={option.id} className={optionClasses}>
              <input
                type="radio"
                name="whoFor"
                value={option.id}
                checked={answers.whoFor === option.id}
                onChange={() =>
                  setAnswers((current) => ({
                    ...current,
                    whoFor: option.id,
                  }))
                }
                className="accent-accent h-4 w-4"
              />
              {option.label}
            </label>
          ))}
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="flex flex-col gap-3">
          <legend className="text-text mb-1 font-serif text-xl font-medium">
            {steps.supportNeeds.title}
          </legend>
          <p className="text-text/60 -mt-1 mb-1 text-sm">
            {steps.supportNeeds.description}
          </p>
          {steps.supportNeeds.options.map((option) => (
            <label key={option.id} className={optionClasses}>
              <input
                type="checkbox"
                name="supportNeeds"
                value={option.id}
                checked={answers.supportNeeds.includes(option.id)}
                onChange={() =>
                  setAnswers((current) => ({
                    ...current,
                    supportNeeds: toggleInArray(
                      current.supportNeeds,
                      option.id,
                    ),
                  }))
                }
                className="accent-accent h-4 w-4"
              />
              {option.label}
            </label>
          ))}
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="flex flex-col gap-3">
          <legend className="text-text mb-2 font-serif text-xl font-medium">
            {steps.independenceLevel.title}
          </legend>
          {steps.independenceLevel.options.map((option) => (
            <label key={option.id} className={optionClasses}>
              <input
                type="radio"
                name="independenceLevel"
                value={option.id}
                checked={answers.independenceLevel === option.id}
                onChange={() =>
                  setAnswers((current) => ({
                    ...current,
                    independenceLevel: option.id,
                  }))
                }
                className="accent-accent h-4 w-4"
              />
              {option.label}
            </label>
          ))}
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="flex flex-col gap-3">
          <legend className="text-text mb-1 font-serif text-xl font-medium">
            {steps.healthFlags.title}
          </legend>
          <p className="text-text/60 -mt-1 mb-1 text-sm">
            {steps.healthFlags.description}
          </p>
          {steps.healthFlags.options.map((option) => (
            <label key={option.id} className={optionClasses}>
              <input
                type="checkbox"
                name="healthFlags"
                value={option.id}
                checked={answers.healthFlags.includes(option.id)}
                onChange={() =>
                  setAnswers((current) => ({
                    ...current,
                    healthFlags: toggleInArray(current.healthFlags, option.id),
                  }))
                }
                className="accent-accent h-4 w-4"
              />
              {option.label}
            </label>
          ))}
        </fieldset>
      )}

      <div className="mt-2 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="text-primary text-sm font-semibold hover:underline"
          >
            &larr; {navigation.backLabel}
          </button>
        ) : (
          <span />
        )}

        <CTAButton
          onClick={goNext}
          disabled={!canProceed}
          className="disabled:pointer-events-none disabled:opacity-50"
        >
          {step === TOTAL_STEPS - 1
            ? navigation.seeResultsLabel
            : navigation.nextLabel}
        </CTAButton>
      </div>
    </div>
  );
}
