import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import Section from "@/components/Section";
import CardGrid from "@/components/CardGrid";
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
