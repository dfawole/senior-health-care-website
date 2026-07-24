"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { siteContent } from "@/content/site";
import Select from "@/components/Select";

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
  defaultValues?: Record<string, string>;
  children?: ReactNode;
};

type SubmitStatus = "idle" | "submitting" | "submitted" | "error";

const MULTILINE_FIELDS = new Set(["message", "availability"]);
const INPUT_TYPE_OVERRIDES: Record<string, string> = {
  email: "email",
  phone: "tel",
};

const fieldClasses =
  "border-primary/20 focus:border-primary rounded-md border bg-white px-4 py-2 text-base text-text transition-colors duration-200 focus:outline-none";

type FormFieldProps = {
  name: string;
  field: FormFieldConfig;
  defaultValue?: string;
};

export function FormField({ name, field, defaultValue }: FormFieldProps) {
  return (
    <label className="text-text flex flex-col gap-1 text-sm font-medium">
      {field.label}
      {field.options ? (
        <Select
          name={name}
          required={field.required}
          defaultValue={defaultValue}
          placeholder={siteContent.form.selectPlaceholder}
          options={field.options}
        />
      ) : MULTILINE_FIELDS.has(name) || field.freeText ? (
        <textarea
          name={name}
          required={field.required}
          rows={4}
          defaultValue={defaultValue}
          className={fieldClasses}
        />
      ) : (
        <input
          type={INPUT_TYPE_OVERRIDES[name] ?? "text"}
          name={name}
          required={field.required}
          defaultValue={defaultValue}
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
  defaultValues,
  children,
}: DynamicFormProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
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
      <div
        className="border-accent/30 bg-accent/5 animate-fade-in mx-auto flex max-w-xl flex-col items-center gap-3 rounded-lg border p-8 text-center"
        role="status"
      >
        <CheckCircle2
          className="text-accent h-8 w-8"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <p className="text-text text-base">{successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-xl flex-col gap-4"
    >
      {Object.entries(fields).map(([name, field]) => (
        <FormField
          key={name}
          name={name}
          field={field}
          defaultValue={defaultValues?.[name]}
        />
      ))}

      {children}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-accent inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold text-white transition duration-200 ease-out hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" && (
          <Loader2
            className="h-4 w-4 animate-spin"
            strokeWidth={2}
            aria-hidden="true"
          />
        )}
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
