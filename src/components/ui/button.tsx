import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "stamp" | "dark" | "outline" | "danger" | "light";

const variants: Record<Variant, string> = {
  stamp:
    "bg-stamp text-cream shadow-[3px_3px_0_var(--color-ink)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_var(--color-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--color-ink)]",
  dark: "bg-ink text-cream hover:bg-stamp",
  outline: "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-lamp",
  danger: "border-2 border-string bg-string text-white hover:bg-[#e0353d]",
  light: "border-2 border-cream bg-transparent text-cream hover:bg-cream hover:text-ink",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  icon?: boolean;
};

export function Button({ variant = "dark", icon = false, className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 text-sm uppercase tracking-widest transition",
        icon ? "size-11 p-0" : "px-4",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
