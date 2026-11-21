import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  external?: boolean;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  isLoading,
  href,
  external,
  target,
  rel,
  download,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#528BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A0F] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#528BFF] text-white hover:bg-[#3D78F5] shadow-[0_0_20px_rgba(82,139,255,0.25)] hover:shadow-[0_0_25px_rgba(82,139,255,0.4)] border border-[#6B9DFF]/40",
    secondary:
      "bg-[#131722] text-slate-200 hover:bg-[#1A202E] hover:text-white border border-[#1E2536] hover:border-[#2E384D] shadow-sm",
    outline:
      "bg-transparent text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/[0.03]",
    ghost:
      "bg-transparent text-slate-400 hover:text-white hover:bg-white/[0.05]"
  };

  const sizeStyles = {
    sm: "h-9 px-3.5 text-xs rounded-lg gap-2",
    md: "h-11 px-5 text-sm rounded-xl gap-2.5",
    lg: "h-12 px-6 text-sm md:text-base rounded-xl gap-3"
  };

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target || (external ? "_blank" : undefined)}
        rel={rel || (external || target === "_blank" ? "noopener noreferrer" : undefined)}
        download={download ? (typeof download === "string" ? download : true) : undefined}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {content}
    </button>
  );
}

