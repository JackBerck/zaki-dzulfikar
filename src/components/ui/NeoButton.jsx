"use client";

import Link from "next/link";

/**
 * NeoButton - Neo-Brutalism styled button with press effect
 * @param {string} variant - "primary" | "secondary" | "outline" | "ghost"
 * @param {string} href - If provided, renders as <Link>
 * @param {string} size - "sm" | "md" | "lg"
 * @param {string} className - Additional classes
 */
export default function NeoButton({
  variant = "primary",
  href,
  size = "md",
  className = "",
  children,
  onClick,
  target,
  rel,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold font-[var(--font-space)] cursor-pointer transition-all duration-100 select-none relative";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-[var(--accent-yellow)] text-black border-2 border-[var(--border-color)] shadow-[4px_4px_0px_0px_#f0f0f0] hover:shadow-[2px_2px_0px_0px_#f0f0f0] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    secondary:
      "bg-[var(--bg-card)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_0px_#f0f0f0] hover:shadow-[2px_2px_0px_0px_#f0f0f0] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    outline:
      "bg-transparent text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_0px_#f0f0f0] hover:bg-[var(--bg-card)] hover:shadow-[2px_2px_0px_0px_#f0f0f0] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    ghost:
      "bg-transparent text-[var(--accent-yellow)] border-2 border-[var(--accent-yellow)] shadow-[4px_4px_0px_0px_#ffe600] hover:bg-[var(--accent-yellow)] hover:text-black hover:shadow-[2px_2px_0px_0px_#ffe600] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
