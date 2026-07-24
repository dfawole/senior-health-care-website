import Link from "next/link";
import { iconMap } from "@/components/CardGrid";
import { homeContent } from "@/content/home";

export default function ServicesMegaMenu() {
  return (
    <div className="border-primary/10 grid w-[640px] grid-cols-3 gap-1 rounded-lg border bg-white p-4 shadow-lg">
      {homeContent.services.items.map((item) => {
        const Icon = item.icon ? iconMap[item.icon] : null;
        return (
          <Link
            key={item.title}
            href={item.href ?? "#"}
            className="hover:bg-accent/5 flex flex-col gap-2 rounded-md p-3 transition-colors"
          >
            {Icon && (
              <Icon
                className="text-accent h-5 w-5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}
            <p className="text-text text-sm font-semibold">{item.title}</p>
            <p className="text-text/70 text-xs">{item.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
