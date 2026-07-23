export type ContentBlockContent = {
  heading: string;
  body: string;
};

type ContentBlockProps = ContentBlockContent;

export default function ContentBlock({ heading, body }: ContentBlockProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-text font-serif text-2xl font-medium tracking-normal">
        {heading}
      </h3>
      <p className="text-text/70 text-base">{body}</p>
    </div>
  );
}
