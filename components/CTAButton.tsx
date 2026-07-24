import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

type CTAButtonVariant = "primary" | "secondary" | "outline";

const baseClasses =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition duration-200 ease-out";

const variantClasses: Record<CTAButtonVariant, string> = {
  primary: "bg-accent text-white hover:opacity-90 hover:scale-[1.02]",
  secondary: "bg-primary text-white hover:opacity-90",
  outline: "border border-white/70 text-white hover:bg-white/10",
};

type CTAButtonLinkProps = {
  variant?: CTAButtonVariant;
  href: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">;

type CTAButtonButtonProps = {
  variant?: CTAButtonVariant;
  href?: undefined;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type CTAButtonProps = CTAButtonLinkProps | CTAButtonButtonProps;

export default function CTAButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: CTAButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (props.href !== undefined) {
    const { href, ...linkProps } = props as CTAButtonLinkProps;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as CTAButtonButtonProps;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
