import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { nursingCareContent } from "@/content/services/nursing-care";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: nursingCareContent.serviceName,
  description: nursingCareContent.heroSubtext,
  ogTitle: nursingCareContent.heroHeadline,
});

export default function NursingCarePage() {
  return <ServicePageLayout {...nursingCareContent} />;
}
