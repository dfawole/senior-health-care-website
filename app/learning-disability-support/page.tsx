import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { learningDisabilitySupportContent } from "@/content/services/learning-disability-support";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: learningDisabilitySupportContent.serviceName,
  description: learningDisabilitySupportContent.heroSubtext,
  ogTitle: learningDisabilitySupportContent.heroHeadline,
});

export default function LearningDisabilitySupportPage() {
  return <ServicePageLayout {...learningDisabilitySupportContent} />;
}
