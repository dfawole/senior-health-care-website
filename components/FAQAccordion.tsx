"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="divide-primary/10 flex flex-col divide-y">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="text-text font-serif text-lg font-medium">
                {item.question}
              </span>
              <ChevronDown
                className={`text-primary h-5 w-5 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <p className="text-text/70 pb-6 text-base">{item.answer}</p>
            )}
          </div>
        );
      })}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
