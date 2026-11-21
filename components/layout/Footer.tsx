"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/personal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-[var(--surface-border)] bg-[var(--background)] relative z-10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-[var(--foreground-secondary)]">
              Designed &amp; Engineered by{" "}
              <span className="font-semibold text-[var(--foreground)]">
                {personalInfo.name}
              </span>
            </p>
            <p className="mt-1 text-xs text-[var(--foreground-muted)]">
              © 2026 All rights reserved • AI &amp; Machine Learning Engineer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 inline-flex h-10 items-center gap-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-4 text-xs font-medium text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              <ArrowUp className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
