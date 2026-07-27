import Image from "next/image";

export type PhotoContent = {
  src: string;
  alt: string;
  caption?: string;
};

type PhotoBlockProps = PhotoContent & {
  className?: string;
};

/** A single real photo in a bordered frame with an optional caption. Never
 * use for stock/placeholder imagery — see the imagery rule in CLAUDE.md. */
export default function PhotoBlock({
  src,
  alt,
  caption,
  className = "mx-auto max-w-3xl",
}: PhotoBlockProps) {
  return (
    <div className={className}>
      <div className="border-primary/10 overflow-hidden rounded-lg border">
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={1024}
          className="h-auto w-full object-cover"
        />
      </div>
      {caption && (
        <p className="text-text/60 mt-3 text-center text-sm">{caption}</p>
      )}
    </div>
  );
}
