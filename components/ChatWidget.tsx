"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, PhoneCall } from "lucide-react";
import { siteContent } from "@/content/site";
import { chatFlow, type ChatMenuOption } from "@/content/chatFlow";
import { homeContent } from "@/content/home";
import { iconMap, type CardItem } from "@/components/CardGrid";
import CTAButton from "@/components/CTAButton";
import DynamicForm from "@/components/DynamicForm";

type Screen =
  "menu" | "services" | "service-detail" | "get-started" | "urgent" | "other";

type ChatEntry =
  | { kind: "user"; id: number; text: string }
  | { kind: "assistant"; id: number; screen: Screen; service?: CardItem };

const services: CardItem[] = homeContent.services.items;

const listButtonClasses =
  "border-primary/15 hover:bg-primary/5 hover:border-primary/30 w-full rounded-md border bg-white px-3 py-2 text-left text-sm text-text transition-colors";

const backButtonClasses =
  "text-primary/70 hover:text-primary self-start text-xs font-semibold transition-colors";

let nextId = 1;

export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [entries, setEntries] = useState<ChatEntry[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [open, entries]);

  // No conversation state is persisted anywhere (no localStorage/
  // sessionStorage) — it's plain in-memory React state, so clearing it
  // here is a full reset. This is the single place that does that reset,
  // reacting to `open` becoming false however that happens (close button,
  // toggling the bubble while open, or the route-change effect below) —
  // so every close path resets the same way with no risk of one path
  // being missed.
  useEffect(() => {
    if (!open) {
      setEntries([]);
    }
  }, [open]);

  // ChatWidget lives in the root layout, so it doesn't unmount on
  // client-side navigation — without this, it would stay open (and keep
  // its conversation) across a route change. Same pattern Header.tsx uses
  // to close its own dropdowns on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function pushTurn(userText: string, screen: Screen, service?: CardItem) {
    setEntries((current) => [
      ...current,
      { kind: "user", id: nextId++, text: userText },
      { kind: "assistant", id: nextId++, screen, service },
    ]);
  }

  function handleMenuSelect(option: ChatMenuOption) {
    pushTurn(option.label, option.id);
  }

  function handleServiceSelect(service: CardItem) {
    pushTurn(service.title, "service-detail", service);
  }

  function handleBack() {
    pushTurn(chatFlow.backLabel, "menu");
  }

  function handleRequestCallback() {
    pushTurn(chatFlow.requestCallbackLabel, "other");
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
            <div className="bg-background text-text flex w-full max-w-[95%] flex-col gap-3 rounded-lg p-3 text-sm">
              <p>{chatFlow.greeting}</p>
              <MenuScreen onSelect={handleMenuSelect} />
              <RequestCallbackButton onClick={handleRequestCallback} />
            </div>

            {entries.map((entry) =>
              entry.kind === "user" ? (
                <div
                  key={entry.id}
                  className="bg-primary ml-auto max-w-[85%] rounded-lg px-3 py-2 text-sm text-white"
                >
                  {entry.text}
                </div>
              ) : (
                <div
                  key={entry.id}
                  className="bg-background text-text flex w-full max-w-[95%] flex-col gap-3 rounded-lg p-3 text-sm"
                >
                  <ScreenContent
                    screen={entry.screen}
                    service={entry.service}
                    onMenuSelect={handleMenuSelect}
                    onServiceSelect={handleServiceSelect}
                    onRequestCallback={handleRequestCallback}
                    onBack={handleBack}
                  />
                </div>
              ),
            )}

            <div ref={messagesEndRef} />
          </div>
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

function RequestCallbackButton({ onClick }: { onClick: () => void }) {
  return (
    <CTAButton variant="primary" onClick={onClick} className="w-full">
      {chatFlow.requestCallbackLabel}
    </CTAButton>
  );
}

function MenuScreen({
  onSelect,
}: {
  onSelect: (option: ChatMenuOption) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {chatFlow.mainMenu.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onSelect(option)}
          className={listButtonClasses}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

type ScreenContentProps = {
  screen: Screen;
  service?: CardItem;
  onMenuSelect: (option: ChatMenuOption) => void;
  onServiceSelect: (service: CardItem) => void;
  onRequestCallback: () => void;
  onBack: () => void;
};

function ScreenContent({
  screen,
  service,
  onMenuSelect,
  onServiceSelect,
  onRequestCallback,
  onBack,
}: ScreenContentProps) {
  switch (screen) {
    case "menu":
      return (
        <>
          <p>{chatFlow.greeting}</p>
          <MenuScreen onSelect={onMenuSelect} />
          <RequestCallbackButton onClick={onRequestCallback} />
        </>
      );

    case "services":
      return (
        <>
          <p>{chatFlow.services.intro}</p>
          <div className="flex flex-col gap-2">
            {services.map((item) => {
              const Icon = item.icon ? iconMap[item.icon] : null;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => onServiceSelect(item)}
                  className={`${listButtonClasses} flex items-center gap-2`}
                >
                  {Icon && (
                    <Icon
                      className="text-accent h-4 w-4 shrink-0"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                  {item.title}
                </button>
              );
            })}
          </div>
          <RequestCallbackButton onClick={onRequestCallback} />
          <button type="button" onClick={onBack} className={backButtonClasses}>
            {chatFlow.backLabel}
          </button>
        </>
      );

    case "service-detail":
      if (!service) return null;
      return (
        <>
          <p className="font-semibold">{service.title}</p>
          <p>{service.description}</p>
          {service.href && (
            <Link
              href={service.href}
              className="text-primary text-sm font-semibold hover:underline"
            >
              {chatFlow.services.learnMoreLabel} &rarr;
            </Link>
          )}
          <RequestCallbackButton onClick={onRequestCallback} />
          <button type="button" onClick={onBack} className={backButtonClasses}>
            {chatFlow.backLabel}
          </button>
        </>
      );

    case "get-started":
      return (
        <>
          <p>{chatFlow.getStarted.intro}</p>
          <ol className="flex flex-col gap-2">
            {siteContent.processSteps.items.map((step, index) => (
              <li key={step.title} className="flex gap-2">
                <span className="text-accent font-semibold">{index + 1}.</span>
                <span>
                  <span className="font-semibold">{step.title}</span>
                  {" — "}
                  {step.description}
                </span>
              </li>
            ))}
          </ol>
          <RequestCallbackButton onClick={onRequestCallback} />
          <CTAButton
            variant="secondary"
            href={chatFlow.getStarted.assessmentHref}
            className="w-full"
          >
            {chatFlow.getStarted.assessmentLabel}
          </CTAButton>
          <button type="button" onClick={onBack} className={backButtonClasses}>
            {chatFlow.backLabel}
          </button>
        </>
      );

    case "urgent":
      return (
        <>
          <p>{chatFlow.urgent.message}</p>
          <CTAButton
            variant="primary"
            href={siteContent.phone.href}
            className="flex w-full items-center justify-center gap-2"
          >
            <PhoneCall
              className="h-4 w-4"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            {chatFlow.urgent.callLabel}
          </CTAButton>
          <CTAButton
            variant="secondary"
            onClick={onRequestCallback}
            className="w-full"
          >
            {chatFlow.requestCallbackLabel}
          </CTAButton>
          <button type="button" onClick={onBack} className={backButtonClasses}>
            {chatFlow.backLabel}
          </button>
        </>
      );

    case "other":
      return (
        <>
          <p>{chatFlow.other.intro}</p>
          <DynamicForm
            fields={chatFlow.other.form}
            action="/api/chat-callback"
            submitLabel={siteContent.chatWidget.sendLabel}
            successMessage={chatFlow.other.successMessage}
          />
          <button type="button" onClick={onBack} className={backButtonClasses}>
            {chatFlow.backLabel}
          </button>
        </>
      );

    default:
      return null;
  }
}
