import Hero from "@/components/Hero";
import Section from "@/components/Section";
import DynamicForm from "@/components/DynamicForm";
import CarerMatchingForm from "@/components/CarerMatchingForm";
import { contactContent } from "@/content/contact";

type ContactPageProps = {
  searchParams: Promise<{ context?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { context } = await searchParams;

  return (
    <>
      <Hero
        eyebrow={contactContent.eyebrow}
        title={contactContent.heading}
        subhead={contactContent.subtext}
      />

      <Section title={contactContent.cta.text} tone="muted">
        <DynamicForm
          fields={contactContent.enquiryForm}
          action="/api/contact"
          submitLabel={contactContent.cta.text}
          successMessage={contactContent.cta.subtext}
          defaultValues={
            context ? { message: `Regarding: ${context}\n\n` } : undefined
          }
        >
          <CarerMatchingForm />
        </DynamicForm>
      </Section>
    </>
  );
}
