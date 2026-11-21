import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  highlight,
  description,
  align = "center",
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-14 md:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] text-xs font-medium tracking-wide uppercase mb-3">
          {badgeIcon && <span className="shrink-0">{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-[var(--foreground)] leading-tight">
        {title}{" "}
        {highlight && (
          <span className="font-semibold text-[var(--accent)]">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-[var(--foreground-secondary)] font-normal leading-relaxed">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-[2px] w-20 rounded-full bg-gradient-to-r from-[var(--accent)] to-transparent",
          align === "center" && "mx-auto via-[var(--accent)] from-transparent to-transparent w-24"
        )}
      />
    </div>
  );
}
