import { ClipboardList } from "lucide-react";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";
import CTAButton from "@/components/CTAButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsRow from "@/components/StatsRow";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTABanner from "@/components/CTABanner";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <Hero {...homeContent.hero} />
      <TrustRow items={homeContent.trustRow.items} />
      <Section
        id="services"
        eyebrow={homeContent.services.eyebrow}
        title={homeContent.services.title}
        description={homeContent.services.description}
      >
        <CardGrid items={homeContent.services.items} />
      </Section>
      <Section>
        <div className="border-primary/10 mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-lg border bg-white p-10 text-center">
          <ClipboardList
            className="text-accent h-8 w-8"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <h2 className="text-text font-serif text-2xl font-medium">
            {homeContent.careAssessmentPrompt.heading}
          </h2>
          <p className="text-text/70 max-w-xl text-base">
            {homeContent.careAssessmentPrompt.subtext}
          </p>
          <CTAButton href="/care-assessment">
            {homeContent.careAssessmentPrompt.ctaLabel}
          </CTAButton>
        </div>
      </Section>
      <WhyChooseUs {...homeContent.whyChooseUs} />
      <StatsRow items={homeContent.stats.items} />
      <Section
        eyebrow={homeContent.testimonials.eyebrow}
        title={homeContent.testimonials.title}
        tone="muted"
      >
        <TestimonialsCarousel testimonials={homeContent.testimonials.items} />
      </Section>
      <CTABanner {...homeContent.ctaBanner} />
    </>
  );
}
