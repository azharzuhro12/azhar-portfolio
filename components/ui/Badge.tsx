import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "subtle" | "success";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  icon
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#161B26] text-slate-300 border border-[#232B3E]",
    accent: "bg-[#528BFF]/10 text-[#528BFF] border border-[#528BFF]/30",
    outline: "bg-transparent text-slate-400 border border-white/10",
    subtle: "bg-white/[0.04] text-slate-300 border border-white/[0.06]",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-medium rounded-md gap-1.5",
    md: "px-2.5 py-1 text-xs font-medium rounded-lg gap-2"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

