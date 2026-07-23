import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CareAssessmentForm from "@/components/CareAssessmentForm";
import { careAssessmentContent } from "@/content/careAssessment";

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
