// Generates the downloadable one-page PDF guide for each service, run as a
// "prebuild" step (see package.json) so guides are static build output in
// /public/guides/ rather than rendered per-request. @react-pdf/renderer's
// Node PDF pipeline (fontkit, canvas-adjacent libs) is heavy to run inside a
// serverless/edge request handler on every hit for content that only
// changes when a developer edits it — build-time generation avoids that
// cost entirely and keeps guide downloads a plain static-file request.
import fs from "node:fs";
import path from "node:path";
import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  renderToFile,
} from "@react-pdf/renderer";

import { siteContent } from "../content/site";
import type { ServicePageContent } from "../components/ServicePageLayout";
import { personalCareContent } from "../content/services/personal-care";
import { nursingCareContent } from "../content/services/nursing-care";
import { dementiaCareContent } from "../content/services/dementia-care";
import { liveInCareContent } from "../content/services/live-in-care";
import { respiteCareContent } from "../content/services/respite-care";
import { mentalHealthSupportContent } from "../content/services/mental-health-support";
import { learningDisabilitySupportContent } from "../content/services/learning-disability-support";
import { hospitalStepDownContent } from "../content/services/hospital-step-down";

// Reuses the same per-service content objects the pages themselves render,
// so a guide can never drift from what's on the corresponding web page.
const services: ServicePageContent[] = [
  personalCareContent,
  nursingCareContent,
  dementiaCareContent,
  liveInCareContent,
  respiteCareContent,
  mentalHealthSupportContent,
  learningDisabilitySupportContent,
  hospitalStepDownContent,
];

const COLORS = {
  primary: "#1b2130",
  accent: "#c1592e",
  text: "#1a1a1a",
};

// react-pdf's Node renderer ships only the base14 PDF fonts (Helvetica,
// Times-Roman, Courier) unless a font file is registered. Fraunces has no
// local .ttf in this repo (it's fetched by next/font/google at web-build
// time into an unlabelled cache, not a usable static asset) and registering
// a Google Fonts URL here would make PDF generation depend on network
// access at build time — too fragile for a build step. Times-Bold is used
// as the closest built-in serif fallback for headings, per the brief's own
// "clean serif fallback" allowance.
const styles = StyleSheet.create({
  page: {
    padding: 56,
    fontFamily: "Helvetica",
    fontSize: 11,
    color: COLORS.text,
  },
  logo: { width: 90, marginBottom: 28 },
  heading: {
    fontFamily: "Times-Bold",
    fontSize: 26,
    color: COLORS.primary,
    marginBottom: 14,
  },
  intro: {
    fontSize: 11.5,
    lineHeight: 1.6,
    marginBottom: 22,
    color: COLORS.text,
  },
  sectionTitle: {
    fontFamily: "Times-Bold",
    fontSize: 12,
    color: COLORS.accent,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 16,
    marginBottom: 10,
  },
  listItem: { flexDirection: "row", marginBottom: 7 },
  bullet: { width: 14, color: COLORS.primary, fontFamily: "Helvetica-Bold" },
  listText: { flex: 1, lineHeight: 1.5 },
  footer: {
    position: "absolute",
    bottom: 40,
    left: 56,
    right: 56,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#d8d3c8",
    fontSize: 9.5,
    color: COLORS.primary,
  },
  footerName: { fontFamily: "Helvetica-Bold", marginBottom: 3 },
});

function BulletList({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <View style={styles.listItem} key={item}>
          <Text style={styles.bullet}>{"•"}</Text>
          <Text style={styles.listText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

function ServiceGuideDocument({
  content,
  logoPath,
}: {
  content: ServicePageContent;
  logoPath: string;
}) {
  return (
    <Document
      title={`${content.serviceName} — Guide`}
      author={siteContent.name}
    >
      <Page size="A4" style={styles.page}>
        {/* @react-pdf/renderer's Image is a PDF drawing primitive, not an
            HTML img — jsx-a11y's alt-text rule doesn't apply here. */}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image src={logoPath} style={styles.logo} />
        <Text style={styles.heading}>{content.serviceName}</Text>
        <Text style={styles.intro}>{content.heroSubtext}</Text>

        <Text style={styles.sectionTitle}>
          Is {content.serviceName} Right for You?
        </Text>
        <BulletList items={content.eligibilityPoints} />

        <Text style={styles.sectionTitle}>What&apos;s Included</Text>
        <BulletList items={content.includedItems} />

        <View style={styles.footer} fixed>
          <Text style={styles.footerName}>{siteContent.name}</Text>
          <Text>
            {siteContent.phone.display} · {siteContent.email.display}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

async function main() {
  const outputDir = path.join(process.cwd(), "public", "guides");
  fs.mkdirSync(outputDir, { recursive: true });

  const logoPath = path.join(
    process.cwd(),
    "public",
    "logo",
    "shc_logo_full.png",
  );

  for (const content of services) {
    const outputPath = path.join(outputDir, `${content.slug}.pdf`);
    await renderToFile(
      <ServiceGuideDocument content={content} logoPath={logoPath} />,
      outputPath,
    );
    console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
  }
}

main().catch((error: unknown) => {
  console.error("PDF generation failed:", error);
  process.exit(1);
});
