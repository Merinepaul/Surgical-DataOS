import { forwardRef } from "react";

import { cn } from "@/lib";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  href: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-white/20 bg-white/[0.06] text-zinc-100 hover:border-white/30 hover:bg-white/[0.09]",
  secondary:
    "border border-white/10 bg-transparent text-zinc-400 hover:border-white/20 hover:text-zinc-200",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-normal tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant = "primary", children, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export function ButtonLink({
  className,
  variant = "primary",
  children,
  href,
  ...props
}: AnchorButtonProps) {
  return (
    <a
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}
