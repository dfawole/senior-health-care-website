import { Check } from "lucide-react";
import ListenButton from "@/components/ListenButton";

type ChecklistProps = {
  items: string[];
  enableListen?: boolean;
};

export default function Checklist({
  items,
  enableListen = false,
}: ChecklistProps) {
  return (
    <div className="flex flex-col gap-3">
      {enableListen && (
        <div className="flex justify-end">
          <ListenButton
            text={items.join(". ")}
            className="text-primary/50 hover:text-primary"
          />
        </div>
      )}
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
    </div>
  );
}
