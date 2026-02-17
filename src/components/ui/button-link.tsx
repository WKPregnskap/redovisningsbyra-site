import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-500",
  ghost:
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100",
};

export function ButtonLink({ children, className = "", variant = "primary", ...props }: Props) {
  return (
    <Link className={`${variantClasses[variant]} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}
