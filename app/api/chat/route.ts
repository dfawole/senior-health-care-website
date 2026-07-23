import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { chatSystemPrompt } from "@/content/chatSystemPrompt";
import { siteContent } from "@/content/site";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
};

type ChatResponse = {
  message: string;
};

type ChatErrorResponse = {
  error: string;
};

const MODEL = "claude-sonnet-5";
const MAX_TOKENS = 500;

function isValidMessages(messages: unknown): messages is ChatMessage[] {
  return (
    Array.isArray(messages) &&
    messages.length > 0 &&
    messages.every(
      (message) =>
        typeof message === "object" &&
        message !== null &&
        (message as ChatMessage).role !== undefined &&
        ["user", "assistant"].includes((message as ChatMessage).role) &&
        typeof (message as ChatMessage).content === "string",
    ) &&
    messages[0].role === "user"
  );
}

export async function POST(
  request: Request,
): Promise<NextResponse<ChatResponse | ChatErrorResponse>> {
  try {
    const body = (await request.json()) as ChatRequestBody;

    if (!isValidMessages(body.messages)) {
      return NextResponse.json(
        { error: "Missing or invalid messages array." },
        { status: 400 },
      );
    }

    try {
      const anthropic = new Anthropic();
      const response = await anthropic.messages.create({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: chatSystemPrompt,
        messages: body.messages,
      });

      const textBlock = response.content.find((block) => block.type === "text");

      return NextResponse.json({
        message:
          textBlock?.text ??
          siteContent.chatWidget.errorFallback(siteContent.phone.display),
      });
    } catch (anthropicError) {
      console.error("Chat API error (Anthropic request):", anthropicError);
      return NextResponse.json({
        message: siteContent.chatWidget.errorFallback(
          siteContent.phone.display,
        ),
      });
    }
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Unable to process chat request." },
      { status: 500 },
    );
  }
}
