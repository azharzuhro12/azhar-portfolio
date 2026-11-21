import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glow?: boolean;
  className?: string;
}

export function Card({
  children,
  hoverEffect = true,
  glow = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] p-6 transition-all duration-300",
        hoverEffect &&
          "hover:border-[var(--accent)]/40 hover:bg-[var(--surface-hover)] hover:-translate-y-0.5 hover:shadow-lg",
        glow &&
          "shadow-[0_4px_28px_var(--accent-glow)] hover:shadow-[0_8px_36px_var(--accent-glow)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
