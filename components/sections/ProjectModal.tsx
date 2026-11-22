"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Layers, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectItem } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--surface-border)] px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[var(--accent-subtle)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-[var(--foreground-muted)]">
                  {project.statusBadge}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="rounded-full p-2 text-[var(--foreground-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Screenshot Preview */}
              {project.image && (
                <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-xl border border-[var(--surface-border)] bg-[var(--background)] shadow-inner">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}

              <div>
                <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                  {project.fullDescription}
                </p>
              </div>

              {/* Metrics */}
              {project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[var(--surface-border)] bg-[var(--background)] p-3"
                    >
                      <span className="block text-base font-semibold text-[var(--foreground)]">
                        {metric.value}
                      </span>
                      <span className="block text-xs text-[var(--foreground-muted)]">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Highlights */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)]">
                  Key Highlights
                </h3>
                <ul className="space-y-2 text-sm text-[var(--foreground-secondary)]">
                  {project.solutionHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture */}
              {project.architecture && project.architecture.length > 0 && (
                <div className="space-y-2.5">
                  <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)]">
                    <Layers className="h-3.5 w-3.5 text-[var(--accent)]" />
                    <span>Architecture Layers</span>
                  </h3>
                  <div className="divide-y divide-[var(--surface-border)] rounded-xl border border-[var(--surface-border)] bg-[var(--background)]">
                    {project.architecture.map((layer, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 text-xs"
                      >
                        <div>
                          <span className="font-mono text-[10px] uppercase text-[var(--accent)] block">
                            {layer.layer}
                          </span>
                          <span className="font-medium text-[var(--foreground)]">
                            {layer.component}
                          </span>
                        </div>
                        <span className="text-[var(--foreground-secondary)] sm:text-right">
                          {layer.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)]">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--surface-border)] bg-[var(--background)] px-3 py-1 text-xs text-[var(--foreground-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--surface-border)] bg-[var(--background)] px-6 py-4">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-xs font-medium text-[var(--accent-fg)] hover:opacity-90 transition-opacity"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-5 py-2 text-xs font-medium text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-[var(--accent)]" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-5 py-2 text-xs font-medium text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
