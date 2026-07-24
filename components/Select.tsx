"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

type SelectProps = {
  name: string;
  required?: boolean;
  defaultValue?: string;
  placeholder: string;
  options: string[];
};

export default function Select({
  name,
  required,
  defaultValue,
  placeholder,
  options,
}: SelectProps) {
  return (
    <SelectPrimitive.Root
      name={name}
      required={required}
      defaultValue={defaultValue}
    >
      <SelectPrimitive.Trigger className="border-primary/20 hover:border-accent/50 focus:border-accent data-[state=open]:border-accent data-[placeholder]:text-text/50 text-text flex w-full items-center justify-between rounded-md border bg-white px-4 py-2 text-base transition-colors duration-200 focus:outline-none">
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown
            className="text-primary h-4 w-4"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={6}
          className="border-primary/10 z-50 max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border bg-white shadow-lg"
        >
          <SelectPrimitive.ScrollUpButton className="text-primary flex items-center justify-center py-1">
            <ChevronUp
              className="h-4 w-4"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="p-1">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option}
                value={option}
                className="data-[highlighted]:bg-accent/10 data-[highlighted]:text-accent data-[state=checked]:text-accent text-text relative flex cursor-pointer items-center rounded-md py-2 pr-8 pl-3 text-sm outline-none select-none"
              >
                <SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-2 inline-flex items-center">
                  <Check
                    className="h-4 w-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="text-primary flex items-center justify-center py-1">
            <ChevronDown
              className="h-4 w-4"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
