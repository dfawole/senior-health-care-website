import { FormField } from "@/components/DynamicForm";
import { carerMatchingContent } from "@/content/carer-matching";

export default function CarerMatchingForm() {
  return (
    <details className="border-primary/15 rounded-lg border bg-white p-6">
      <summary className="text-text marker:text-accent cursor-pointer text-base font-semibold">
        {carerMatchingContent.heading}
      </summary>
      <div className="mt-4 flex flex-col gap-4">
        <p className="text-text/70 text-sm">{carerMatchingContent.subtext}</p>
        {Object.entries(carerMatchingContent.fields).map(([name, field]) => (
          <FormField key={name} name={name} field={field} />
        ))}
        <p className="text-text/60 text-xs">
          {carerMatchingContent.disclaimer}
        </p>
      </div>
    </details>
  );
}
