import Link from "next/link";
import {
  Brain,
  Clock,
  Heart,
  Home,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

export type CardIconName =
  "heart" | "stethoscope" | "brain" | "home" | "clock" | "users";

export type CardItem = {
  icon: CardIconName;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
};

type CardGridProps = {
  items: CardItem[];
};

const iconMap: Record<CardIconName, LucideIcon> = {
  heart: Heart,
  stethoscope: Stethoscope,
  brain: Brain,
  home: Home,
  clock: Clock,
  users: Users,
};

export default function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <Link
            key={item.title}
            href={item.href}
            className="group border-primary/10 flex flex-col gap-4 rounded-lg border bg-white p-8 transition-shadow hover:shadow-md"
          >
            <Icon className="text-primary h-7 w-7" strokeWidth={1.5} />
            <h3 className="text-text font-serif text-xl font-medium">
              {item.title}
            </h3>
            <p className="text-text/70 text-sm">{item.description}</p>
            <span className="text-primary mt-auto text-sm font-semibold group-hover:underline">
              {item.linkLabel ?? "Learn More"} &rarr;
            </span>
          </Link>
        );
      })}
    </div>
  );
}
