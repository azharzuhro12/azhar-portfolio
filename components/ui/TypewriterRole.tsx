"use client";

import React, { useState, useEffect } from "react";

const roles = [
  "Machine Learning Engineer",
  "AI Engineer",
  "Generative AI & RAG Builder",
  "Deep Learning Practitioner"
];

export function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 350);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <div className="flex items-center justify-center gap-2 lg:justify-start">
      <span className="text-sm text-[var(--foreground-secondary)]">I&apos;m a</span>
      <span className="font-mono text-lg font-medium text-[var(--accent)]">
        {displayedText}
      </span>
      <span
        aria-hidden="true"
        className="inline-block h-5 w-[2px] bg-[var(--accent)] animate-pulse"
      />
    </div>
  );
}
