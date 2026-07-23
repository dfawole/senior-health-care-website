"use client";

import { useEffect, useState } from "react";
import { Volume2, Square } from "lucide-react";

type ListenButtonProps = {
  text: string;
  className?: string;
};

function pickUkVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.lang === "en-GB") ??
    voices.find((voice) => voice.lang.startsWith("en"))
  );
}

export default function ListenButton({
  text,
  className = "",
}: ListenButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function handleClick() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const ukVoice = pickUkVoice();
    if (ukVoice) {
      utterance.voice = ukVoice;
      utterance.lang = ukVoice.lang;
    } else {
      utterance.lang = "en-GB";
    }
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isSpeaking}
      aria-label={isSpeaking ? "Stop listening" : "Listen to this section"}
      className={`inline-flex shrink-0 items-center justify-center transition-colors ${className}`}
    >
      {isSpeaking ? (
        <Square
          className="h-4 w-4"
          strokeWidth={1.5}
          fill="currentColor"
          aria-hidden="true"
        />
      ) : (
        <Volume2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      )}
    </button>
  );
}
