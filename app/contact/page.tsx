import type { Metadata } from "next";
import { MapPin, PhoneCall, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import DynamicForm from "@/components/DynamicForm";
import CarerMatchingForm from "@/components/CarerMatchingForm";
import { contactContent } from "@/content/contact";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  siteContent.address.display,
)}&output=embed`;

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: contactContent.subtext,
  ogTitle: contactContent.heading,
});

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

      <Section title={contactContent.office.sectionTitle}>
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin
                className="text-primary mt-0.5 h-5 w-5 shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="text-text text-base">
                {siteContent.address.display}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <PhoneCall
                className="text-primary mt-0.5 h-5 w-5 shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <a
                href={siteContent.phone.href}
                className="text-text text-base hover:underline"
              >
                {siteContent.phone.display}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock
                className="text-primary mt-0.5 h-5 w-5 shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="text-text text-base">{siteContent.hours.display}</p>
            </div>
          </div>
          <div className="border-primary/10 overflow-hidden rounded-lg border">
            <iframe
              src={mapSrc}
              title={contactContent.office.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
