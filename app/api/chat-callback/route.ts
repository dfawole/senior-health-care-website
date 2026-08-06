import { NextResponse } from "next/server";
import { Resend } from "resend";

type ChatCallbackPayload = {
  name?: string;
  contact?: string;
  message?: string;
};

type ChatCallbackSuccessResponse = {
  message: string;
};

type ChatCallbackErrorResponse = {
  error: string;
};

const REQUIRED_FIELDS: (keyof ChatCallbackPayload)[] = ["name", "contact"];

const FIELD_LABELS: Record<keyof ChatCallbackPayload, string> = {
  name: "Name",
  contact: "Phone or email",
  message: "Message",
};

function buildCallbackEmailHtml(body: ChatCallbackPayload): string {
  const rows = (Object.keys(FIELD_LABELS) as (keyof ChatCallbackPayload)[])
    .filter((field) => body[field])
    .map(
      (field) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">${FIELD_LABELS[field]}</td><td style="padding:4px 0;">${body[field]}</td></tr>`,
    )
    .join("");

  return `<table>${rows}</table>`;
}

export async function POST(
  request: Request,
): Promise<
  NextResponse<ChatCallbackSuccessResponse | ChatCallbackErrorResponse>
> {
  try {
    const body = (await request.json()) as ChatCallbackPayload;

    const missingField = REQUIRED_FIELDS.find((field) => !body[field]);
    if (missingField) {
      return NextResponse.json(
        { error: `Missing required field: ${missingField}` },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.CHAT_NOTIFICATION_EMAIL;
    const fromEmail = process.env.CHAT_FROM_EMAIL;

    if (!apiKey || !notificationEmail || !fromEmail) {
      console.error(
        "Chat callback error: missing RESEND_API_KEY, CHAT_NOTIFICATION_EMAIL, or CHAT_FROM_EMAIL",
      );
      return NextResponse.json(
        { error: "Unable to process callback request." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      subject: `Chat Widget Callback Request — ${body.name}`,
      html: buildCallbackEmailHtml(body),
    });

    if (error) {
      console.error("Chat callback email error:", error);
      return NextResponse.json(
        { error: "Unable to process callback request." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Callback request received." });
  } catch (error) {
    console.error("Chat callback error:", error);
    return NextResponse.json(
      { error: "Unable to process callback request." },
      { status: 500 },
    );
  }
}
