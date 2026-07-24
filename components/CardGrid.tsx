import Link from "next/link";
import {
  Brain,
  Clock,
  GraduationCap,
  Heart,
  HeartHandshake,
  Home,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type CardIconName =
  | "heart"
  | "stethoscope"
  | "brain"
  | "home"
  | "clock"
  | "heartHandshake"
  | "graduationCap";

export type CardItem = {
  icon?: CardIconName;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

type CardGridProps = {
  items: CardItem[];
};

export const iconMap: Record<CardIconName, LucideIcon> = {
  heart: Heart,
  stethoscope: Stethoscope,
  brain: Brain,
  home: Home,
  clock: Clock,
  heartHandshake: HeartHandshake,
  graduationCap: GraduationCap,
};

const cardClasses =
  "group border-primary/10 flex flex-col gap-4 rounded-lg border bg-white p-8 transition-shadow hover:shadow-md";

export default function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon ? iconMap[item.icon] : null;
        const content = (
          <>
            {Icon && (
              <Icon className="text-primary h-7 w-7" strokeWidth={1.5} />
            )}
            <h3 className="text-text font-serif text-xl font-medium">
              {item.title}
            </h3>
            <p className="text-text/70 text-sm">{item.description}</p>
            {item.href && (
              <span className="text-primary mt-auto text-sm font-semibold group-hover:underline">
                {item.linkLabel ?? "Learn More"} &rarr;
              </span>
            )}
          </>
        );

        if (item.href) {
          return (
            <Link key={item.title} href={item.href} className={cardClasses}>
              {content}
            </Link>
          );
        }

        return (
          <div key={item.title} className={cardClasses}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
