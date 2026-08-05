import { iconMap } from "@/components/CardGrid";
import StaggerGroup from "@/components/StaggerGroup";
import StaggerItem from "@/components/StaggerItem";
import { siteContent } from "@/content/site";

/** Generic 3-step "what happens next" strip — identical on every service
 * page, so it reads content straight from site.ts rather than taking props.
 * Render it once per page; do not fork per-service copies. */
export default function ProcessSteps() {
  const { items } = siteContent.processSteps;

  return (
    <div className="relative mx-auto max-w-4xl">
      <div
        aria-hidden="true"
        className="border-primary/15 absolute top-7 right-[16.6667%] left-[16.6667%] hidden border-t sm:block"
      />
      <StaggerGroup className="relative grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6">
        {items.map((step, index) => {
          const Icon = iconMap[step.icon];
          return (
            <StaggerItem
              key={step.title}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="border-primary/10 relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white">
                <Icon
                  className="text-primary h-6 w-6"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <p className="text-accent text-xs font-semibold tracking-wide uppercase">
                Step {index + 1}
              </p>
              <h3 className="text-text font-serif text-lg font-medium">
                {step.title}
              </h3>
              <p className="text-text/70 max-w-[240px] text-sm">
                {step.description}
              </p>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </div>
  );
}
