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
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-16 sm:py-20 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-primary font-serif text-4xl font-medium sm:text-5xl">
              {item.value}
            </p>
            <p className="text-text/60 mt-2 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
