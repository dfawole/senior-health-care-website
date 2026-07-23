"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { siteContent } from "@/content/site";

export type FormFieldConfig = {
  label: string;
  required: boolean;
  options?: string[];
  freeText?: boolean;
};

export type FormFieldsConfig = Record<string, FormFieldConfig>;

type DynamicFormProps = {
  fields: FormFieldsConfig;
  action: string;
  submitLabel: string;
  successMessage: string;
  children?: ReactNode;
};

type SubmitStatus = "idle" | "submitting" | "submitted" | "error";

const MULTILINE_FIELDS = new Set(["message", "availability"]);
const INPUT_TYPE_OVERRIDES: Record<string, string> = {
  email: "email",
  phone: "tel",
};

const fieldClasses =
  "border-primary/20 focus:border-primary rounded-md border bg-white px-4 py-2 text-base text-text focus:outline-none";

type FormFieldProps = {
  name: string;
  field: FormFieldConfig;
};

export function FormField({ name, field }: FormFieldProps) {
  return (
    <label className="text-text flex flex-col gap-1 text-sm font-medium">
      {field.label}
      {field.options ? (
        <select
          name={name}
          required={field.required}
          defaultValue=""
          className={fieldClasses}
        >
          <option value="" disabled>
            {siteContent.form.selectPlaceholder}
          </option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : MULTILINE_FIELDS.has(name) || field.freeText ? (
        <textarea
          name={name}
          required={field.required}
          rows={4}
          className={fieldClasses}
        />
      ) : (
        <input
          type={INPUT_TYPE_OVERRIDES[name] ?? "text"}
          name={name}
          required={field.required}
          className={fieldClasses}
        />
      )}
    </label>
  );
}

export default function DynamicForm({
  fields,
  action,
  submitLabel,
  successMessage,
  children,
}: DynamicFormProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("submitted");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <p className="border-primary/10 text-text rounded-lg border bg-white p-6 text-center">
        {successMessage}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-xl flex-col gap-4"
    >
      {Object.entries(fields).map(([name, field]) => (
        <FormField key={name} name={name} field={field} />
      ))}

      {children}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-accent inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting"
          ? siteContent.form.submittingLabel
          : submitLabel}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">{siteContent.form.errorMessage}</p>
      )}
    </form>
  );
}
