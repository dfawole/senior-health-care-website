"use client";

import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import { siteContent } from "@/content/site";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center">
      <h1 className="text-primary text-2xl font-bold">
        {siteContent.errorPage.heading}
      </h1>
      <p className="text-text/70">{siteContent.errorPage.body}</p>
      <CTAButton onClick={reset}>{siteContent.errorPage.retryLabel}</CTAButton>
    </div>
  );
}
