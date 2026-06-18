import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps & {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#d8a194] text-white hover:bg-[#c88f82] focus-visible:ring-[#d8a194]",
  secondary:
    "bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",
  outline:
    "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 focus-visible:ring-zinc-400 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-900",
  ghost:
    "text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-300 dark:text-zinc-100 dark:hover:bg-zinc-900",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "ring-offset-white dark:ring-offset-zinc-950",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
