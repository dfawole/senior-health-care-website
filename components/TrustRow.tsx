export type TrustRowProps = {
  items: string[];
};

export default function TrustRow({ items }: TrustRowProps) {
  return (
    <div className="border-primary/10 border-b bg-white">
      <div className="text-text/60 mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-4 text-center text-sm font-medium">
        {items.map((item, index) => (
          <span key={item} className="flex items-center gap-3">
            {index > 0 && (
              <span aria-hidden="true" className="text-text/25">
                &middot;
              </span>
            )}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
