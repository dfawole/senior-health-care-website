import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { hospitalStepDownContent } from "@/content/services/hospital-step-down";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: hospitalStepDownContent.serviceName,
  description: hospitalStepDownContent.heroSubtext,
  ogTitle: hospitalStepDownContent.heroHeadline,
});

export default function HospitalStepDownCarePage() {
  return <ServicePageLayout {...hospitalStepDownContent} />;
}
