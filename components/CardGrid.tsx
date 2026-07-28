import Link from "next/link";
import {
  AlarmClock,
  Brain,
  BookOpenCheck,
  Building2,
  CalendarClock,
  Clock,
  Compass,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  Home,
  MessageCircle,
  Moon,
  PhoneCall,
  Repeat,
  ShieldCheck,
  Smile,
  Stethoscope,
  UserCheck,
  Users,
  UsersRound,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import StaggerGroup from "@/components/StaggerGroup";
import StaggerItem from "@/components/StaggerItem";

export type CardIconName =
  | "heart"
  | "stethoscope"
  | "brain"
  | "home"
  | "clock"
  | "heartHandshake"
  | "graduationCap"
  | "userCheck"
  | "shieldCheck"
  | "handHeart"
  | "clipboardCheck"
  | "alarmClock"
  | "repeat"
  | "users"
  | "usersRound"
  | "moon"
  | "calendarClock"
  | "phoneCall"
  | "smile"
  | "messageCircle"
  | "compass"
  | "bookOpenCheck"
  | "building2";

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
  userCheck: UserCheck,
  shieldCheck: ShieldCheck,
  handHeart: HandHeart,
  clipboardCheck: ClipboardCheck,
  alarmClock: AlarmClock,
  repeat: Repeat,
  users: Users,
  usersRound: UsersRound,
  moon: Moon,
  calendarClock: CalendarClock,
  phoneCall: PhoneCall,
  smile: Smile,
  messageCircle: MessageCircle,
  compass: Compass,
  bookOpenCheck: BookOpenCheck,
  building2: Building2,
};

export const cardClasses =
  "group border-primary/10 flex h-full flex-col gap-4 rounded-lg border bg-white p-8 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg";

type CardProps = {
  item: CardItem;
  tabIndex?: number;
};

/** A single service card — the shared visual used by both the grid layout
 * here and the homepage marquee. Keep card markup/styling in this one
 * place so the two never drift apart. */
export function Card({ item, tabIndex }: CardProps) {
  const Icon = item.icon ? iconMap[item.icon] : null;
  const content = (
    <>
      {Icon && <Icon className="text-primary h-7 w-7" strokeWidth={1.5} />}
      <h3 className="text-text font-serif text-xl font-medium">{item.title}</h3>
      <p className="text-text/70 text-sm">{item.description}</p>
      {item.href && (
        <span className="text-primary mt-auto text-sm font-semibold group-hover:underline">
          {item.linkLabel ?? "Learn More"} &rarr;
        </span>
      )}
    </>
  );

  return item.href ? (
    <Link href={item.href} className={cardClasses} tabIndex={tabIndex}>
      {content}
    </Link>
  ) : (
    <div className={cardClasses}>{content}</div>
  );
}

export default function CardGrid({ items }: CardGridProps) {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <StaggerItem key={item.title}>
          <Card item={item} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
