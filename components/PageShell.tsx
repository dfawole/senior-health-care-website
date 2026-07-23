import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  children?: ReactNode;
};

export default function PageShell({ title, children }: PageShellProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-primary text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
