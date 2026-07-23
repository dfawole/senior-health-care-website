import Hero from "@/components/Hero";
import Section from "@/components/Section";
import DynamicForm from "@/components/DynamicForm";
import CarerMatchingForm from "@/components/CarerMatchingForm";
import { contactContent } from "@/content/contact";

export default function ContactPage() {
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
        >
          <CarerMatchingForm />
        </DynamicForm>
      </Section>
    </>
  );
}
