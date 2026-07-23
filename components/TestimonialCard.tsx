type TestimonialCardProps = {
  quote: string;
  author: string;
  role?: string;
};

export default function TestimonialCard({
  quote,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <blockquote className="border-primary/10 rounded-lg border bg-white p-6 shadow-sm">
      <p className="text-text text-base">&ldquo;{quote}&rdquo;</p>
      <footer className="text-primary mt-4 text-sm font-semibold">
        {author}
        {role && <span className="text-text/70 font-normal"> — {role}</span>}
      </footer>
    </blockquote>
  );
}
