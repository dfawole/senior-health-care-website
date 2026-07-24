import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { dementiaCareContent } from "@/content/services/dementia-care";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: dementiaCareContent.serviceName,
  description: dementiaCareContent.heroSubtext,
  ogTitle: dementiaCareContent.heroHeadline,
});

export default function DementiaCarePage() {
  return <ServicePageLayout {...dementiaCareContent} />;
}
