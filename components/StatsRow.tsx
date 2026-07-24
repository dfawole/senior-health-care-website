import StatHighlight from "@/components/StatHighlight";
import StaggerGroup from "@/components/StaggerGroup";
import StaggerItem from "@/components/StaggerItem";

export type StatItem = {
  value: string;
  label: string;
};

type StatsRowProps = {
  items: StatItem[];
};

export default function StatsRow({ items }: StatsRowProps) {
  return (
    <div className="border-primary/10 bg-background border-t border-b">
      <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-16 sm:py-20 lg:grid-cols-4">
        {items.map((item) => (
          <StaggerItem key={item.label}>
            <StatHighlight number={item.value} label={item.label} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
