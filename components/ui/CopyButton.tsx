"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  label?: string;
  successLabel?: string;
  className?: string;
  size?: "sm" | "md";
}

export function CopyButton({
  text,
  label = "Copy",
  successLabel = "Copied!",
  className,
  size = "md"
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? successLabel : label}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#528BFF]/40",
        copied
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
          : "border-[#1E2536] bg-[#10131B] text-slate-300 hover:border-[#2D374D] hover:bg-[#161B26] hover:text-white",
        size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-xs sm:text-sm",
        className
      )}
    >
      {copied ? (
        <Check className={cn("shrink-0 text-emerald-400", size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4")} />
      ) : (
        <Copy className={cn("shrink-0 text-slate-400", size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4")} />
      )}
      <span>{copied ? successLabel : label}</span>
    </button>
  );
}

