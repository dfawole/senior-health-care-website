import ContentBlock, {
  type ContentBlockContent,
} from "@/components/ContentBlock";

type TwoColumnBlocksProps = {
  items: ContentBlockContent[];
};

export default function TwoColumnBlocks({ items }: TwoColumnBlocksProps) {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2">
      {items.map((item) => (
        <ContentBlock
          key={item.heading}
          heading={item.heading}
          body={item.body}
        />
      ))}
    </div>
  );
}
