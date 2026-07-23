"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteContent } from "@/content/site";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {open && (
        <div className="border-primary/10 mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-lg border bg-white shadow-lg">
          <div className="bg-primary flex items-center justify-between rounded-t-lg px-4 py-3">
            <p className="text-sm font-semibold text-white">
              {siteContent.chatWidget.heading}
            </p>
            <button
              type="button"
              aria-label={siteContent.chatWidget.closeLabel}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="text-text/70 p-4 text-sm">
            {siteContent.chatWidget.placeholder}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={siteContent.chatWidget.toggleLabel}
        className="bg-accent text-text flex h-14 w-14 items-center justify-center rounded-full shadow-lg hover:opacity-90"
      >
        <MessageCircle
          className="h-6 w-6"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
