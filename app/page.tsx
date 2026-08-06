import { ClipboardList } from "lucide-react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import Section from "@/components/Section";
import ServicesCarousel from "@/components/ServicesCarousel";
import CTAButton from "@/components/CTAButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsRow from "@/components/StatsRow";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTABanner from "@/components/CTABanner";
import { homeContent } from "@/content/home";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

// The root layout's title.template doesn't apply to the root page itself
// (same route segment), so the site-name suffix is added explicitly here to
// match every other page's templated title.
export const metadata: Metadata = buildPageMetadata({
  title: `Trusted Domiciliary Care Across the UK | ${siteContent.name}`,
  description: homeContent.hero.subhead,
  ogTitle: homeContent.hero.title.replace(/\n/g, " "),
});

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
        <ServicesCarousel
          items={homeContent.services.items}
          scrollLeftLabel={homeContent.services.scrollLeftLabel}
          scrollRightLabel={homeContent.services.scrollRightLabel}
        />
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
