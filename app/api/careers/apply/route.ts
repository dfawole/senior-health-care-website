import { NextResponse } from "next/server";
import { Resend } from "resend";

type CareersApplicationPayload = {
  name?: string;
  phone?: string;
  email?: string;
  roleType?: string;
  experience?: string;
  availability?: string;
  message?: string;
};

type CareersApplicationSuccessResponse = {
  message: string;
};

type CareersApplicationErrorResponse = {
  error: string;
};

const REQUIRED_FIELDS: (keyof CareersApplicationPayload)[] = [
  "name",
  "phone",
  "email",
  "roleType",
  "experience",
];

const FIELD_LABELS: Record<keyof CareersApplicationPayload, string> = {
  name: "Full name",
  phone: "Phone",
  email: "Email",
  roleType: "Interested in",
  experience: "Care experience",
  availability: "Availability",
  message: "Message",
};

function buildApplicationEmailHtml(body: CareersApplicationPayload): string {
  const rows = (
    Object.keys(FIELD_LABELS) as (keyof CareersApplicationPayload)[]
  )
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
  NextResponse<
    CareersApplicationSuccessResponse | CareersApplicationErrorResponse
  >
> {
  try {
    const body = (await request.json()) as CareersApplicationPayload;

    const missingField = REQUIRED_FIELDS.find((field) => !body[field]);
    if (missingField) {
      return NextResponse.json(
        { error: `Missing required field: ${missingField}` },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.CAREERS_NOTIFICATION_EMAIL;
    const fromEmail = process.env.CAREERS_FROM_EMAIL;

    if (!apiKey || !notificationEmail || !fromEmail) {
      console.error(
        "Careers application error: missing RESEND_API_KEY, CAREERS_NOTIFICATION_EMAIL, or CAREERS_FROM_EMAIL",
      );
      return NextResponse.json(
        { error: "Unable to process application." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: body.email,
      subject: `New careers application: ${body.name}`,
      html: buildApplicationEmailHtml(body),
    });

    if (error) {
      console.error("Careers application email error:", error);
      return NextResponse.json(
        { error: "Unable to process application." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Application received." });
  } catch (error) {
    console.error("Careers application error:", error);
    return NextResponse.json(
      { error: "Unable to process application." },
      { status: 500 },
    );
  }
}
