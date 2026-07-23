import { Check } from "lucide-react";

type ChecklistProps = {
  items: string[];
};

export default function Checklist({ items }: ChecklistProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check
            className="text-primary mt-0.5 h-5 w-5 shrink-0"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="text-text text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}
