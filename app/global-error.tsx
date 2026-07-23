"use client";

import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import { siteContent } from "@/content/site";
import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center"
        suppressHydrationWarning
      >
        <h1 className="text-primary text-2xl font-bold">
          {siteContent.errorPage.heading}
        </h1>
        <p className="text-text/70">{siteContent.errorPage.body}</p>
        <CTAButton onClick={reset}>
          {siteContent.errorPage.retryLabel}
        </CTAButton>
      </body>
    </html>
  );
}
