export type StatHighlightContent = {
  number: string;
  label: string;
};

type StatHighlightProps = StatHighlightContent;

export default function StatHighlight({ number, label }: StatHighlightProps) {
  return (
    <div className="text-center">
      <p className="text-primary font-serif text-4xl font-medium sm:text-5xl">
        {number}
      </p>
      <p className="text-text/65 mt-2 text-sm">{label}</p>
    </div>
  );
}
