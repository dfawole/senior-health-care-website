import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CareAssessmentForm from "@/components/CareAssessmentForm";
import { careAssessmentContent } from "@/content/careAssessment";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: careAssessmentContent.heading,
  description: careAssessmentContent.subtext,
});

export default function CareAssessmentPage() {
  return (
    <>
      <Hero
        eyebrow={careAssessmentContent.eyebrow}
        title={careAssessmentContent.heading}
        subhead={careAssessmentContent.subtext}
      />

      <Section tone="muted">
        <CareAssessmentForm />
      </Section>
    </>
  );
}
