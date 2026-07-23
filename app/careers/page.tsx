import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";
import TwoColumnBlocks from "@/components/TwoColumnBlocks";
import Checklist from "@/components/Checklist";
import DynamicForm from "@/components/DynamicForm";
import { careersContent } from "@/content/careers";

export default function CareersPage() {
  const whyJoinUsCards = careersContent.whyJoinUs.map((item) => ({
    title: item.heading,
    description: item.body,
  }));

  const rolesTypeBlocks = careersContent.rolesTypes.map((role) => ({
    heading: role.title,
    body: role.body,
  }));

  return (
    <>
      <Hero
        eyebrow={careersContent.eyebrow}
        title={careersContent.heading}
        subhead={careersContent.subtext}
      />

      <Section title={careersContent.sectionHeadings.whyJoinUs}>
        <CardGrid items={whyJoinUsCards} />
      </Section>

      <Section title={careersContent.sectionHeadings.rolesTypes} tone="muted">
        <TwoColumnBlocks items={rolesTypeBlocks} />
      </Section>

      <Section title={careersContent.sectionHeadings.requirements}>
        <div className="mx-auto max-w-2xl">
          <Checklist items={careersContent.requirements} />
        </div>
      </Section>

      <Section
        title={careersContent.cta.text}
        description={careersContent.cta.subtext}
        tone="muted"
      >
        <DynamicForm
          fields={careersContent.applicationForm}
          action="/api/careers/apply"
          submitLabel={careersContent.cta.text}
          successMessage={careersContent.cta.subtext}
        />
      </Section>
    </>
  );
}
