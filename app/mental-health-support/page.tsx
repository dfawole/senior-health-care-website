import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { mentalHealthSupportContent } from "@/content/services/mental-health-support";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: mentalHealthSupportContent.serviceName,
  description: mentalHealthSupportContent.heroSubtext,
  ogTitle: mentalHealthSupportContent.heroHeadline,
});

export default function MentalHealthSupportPage() {
  return <ServicePageLayout {...mentalHealthSupportContent} />;
}
