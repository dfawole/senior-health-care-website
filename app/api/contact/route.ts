import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  language?: string;
  genderPreference?: string;
  culturalConsiderations?: string;
  otherPreferences?: string;
};

type ContactSuccessResponse = {
  message: string;
};

type ContactErrorResponse = {
  error: string;
};

const REQUIRED_FIELDS: (keyof ContactPayload)[] = [
  "name",
  "phone",
  "email",
  "message",
];

const ENQUIRY_FIELD_LABELS: Record<string, string> = {
  name: "Full name",
  phone: "Phone",
  email: "Email",
  message: "Message",
};

const CARER_MATCHING_FIELD_LABELS: Record<string, string> = {
  language: "Preferred language(s)",
  genderPreference: "Carer gender preference",
  culturalConsiderations: "Cultural or religious considerations",
  otherPreferences: "Other preferences",
};

function buildRowsHtml(
  payload: ContactPayload,
  labels: Record<string, string>,
): string {
  return Object.entries(labels)
    .filter(([field]) => payload[field as keyof ContactPayload])
    .map(
      ([field, label]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">${label}</td><td style="padding:4px 0;">${payload[field as keyof ContactPayload]}</td></tr>`,
    )
    .join("");
}

function buildEnquiryEmailHtml(payload: ContactPayload): string {
  const enquiryRows = buildRowsHtml(payload, ENQUIRY_FIELD_LABELS);
  const carerMatchingRows = buildRowsHtml(payload, CARER_MATCHING_FIELD_LABELS);

  const carerMatchingSection = carerMatchingRows
    ? `<h2 style="margin-top:24px;">Carer Matching Preferences</h2><table>${carerMatchingRows}</table>`
    : "";

  return `<table>${enquiryRows}</table>${carerMatchingSection}`;
}

export async function POST(
  request: Request,
): Promise<NextResponse<ContactSuccessResponse | ContactErrorResponse>> {
  try {
    const body = (await request.json()) as ContactPayload;

    const missingField = REQUIRED_FIELDS.find((field) => !body[field]);
    if (missingField) {
      return NextResponse.json(
        { error: `Missing required field: ${missingField}` },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !notificationEmail || !fromEmail) {
      console.error(
        "Contact enquiry error: missing RESEND_API_KEY, CONTACT_NOTIFICATION_EMAIL, or CONTACT_FROM_EMAIL",
      );
      return NextResponse.json(
        { error: "Unable to process enquiry." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: body.email,
      subject: `New enquiry: ${body.name}`,
      html: buildEnquiryEmailHtml(body),
    });

    if (error) {
      console.error("Contact enquiry email error:", error);
      return NextResponse.json(
        { error: "Unable to process enquiry." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Enquiry received." });
  } catch (error) {
    console.error("Contact enquiry error:", error);
    return NextResponse.json(
      { error: "Unable to process enquiry." },
      { status: 500 },
    );
  }
}
