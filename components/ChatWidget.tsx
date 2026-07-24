"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, AlertCircle } from "lucide-react";
import { siteContent } from "@/content/site";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [open, messages, loading]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = (await response.json()) as { message: string };
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      console.error("Chat widget error:", error);
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: siteContent.chatWidget.errorFallback(
            siteContent.phone.display,
          ),
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {open && (
        <div className="border-primary/10 mb-3 flex h-[28rem] w-80 max-w-[calc(100vw-2rem)] flex-col rounded-lg border bg-white shadow-lg">
          <div className="bg-primary flex flex-col gap-1 rounded-t-lg px-4 py-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">
                {siteContent.chatWidget.heading}
              </p>
              <button
                type="button"
                aria-label={siteContent.chatWidget.closeLabel}
                onClick={() => setOpen(false)}
                className="text-white/80 transition-colors hover:text-white"
              >
                ✕
              </button>
            </div>
            <a
              href={siteContent.phone.href}
              className="text-xs font-medium text-white/85 transition-colors hover:text-white"
            >
              Call us: {siteContent.phone.display}
            </a>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            <div className="bg-background text-text max-w-[85%] rounded-lg px-3 py-2 text-sm">
              {siteContent.chatWidget.greeting}
            </div>

            {messages.map((message, index) =>
              message.isError ? (
                <div
                  key={index}
                  className="flex max-w-[85%] items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900"
                >
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span>{message.content}</span>
                </div>
              ) : (
                <div
                  key={index}
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    message.role === "user"
                      ? "bg-primary ml-auto text-white"
                      : "bg-background text-text"
                  }`}
                >
                  {message.content}
                </div>
              ),
            )}

            {loading && (
              <div
                className="bg-background flex w-fit max-w-[85%] flex-col gap-2 rounded-lg px-3 py-3"
                role="status"
                aria-label={siteContent.chatWidget.thinkingLabel}
              >
                <div className="bg-text/15 h-2.5 w-32 animate-pulse rounded-full" />
                <div className="bg-text/15 h-2.5 w-20 animate-pulse rounded-full [animation-delay:150ms]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-primary/10 flex items-center gap-2 border-t p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={siteContent.chatWidget.inputPlaceholder}
              aria-label={siteContent.chatWidget.inputPlaceholder}
              disabled={loading}
              className="border-primary/20 focus:border-primary text-text flex-1 rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-accent rounded-md px-3 py-2 text-sm font-semibold text-white transition duration-200 ease-out hover:opacity-90 disabled:opacity-60"
            >
              {siteContent.chatWidget.sendLabel}
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={siteContent.chatWidget.toggleLabel}
        className="bg-accent text-text flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition duration-200 ease-out hover:scale-105 hover:opacity-90"
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
