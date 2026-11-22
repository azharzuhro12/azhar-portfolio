"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects, ProjectItem } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenProjectModal = (e: Event) => {
      const customEvent = e as CustomEvent<{ projectId: string }>;
      const targetId = customEvent.detail?.projectId;
      if (targetId) {
        const found = projects.find((p) => p.id === targetId);
        if (found) {
          setSelectedProject(found);
          setIsModalOpen(true);
        }
      }
    };

    window.addEventListener("open-project-modal", handleOpenProjectModal);
    return () => window.removeEventListener("open-project-modal", handleOpenProjectModal);
  }, []);

  const handleOpenDetails = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="bg-[var(--surface-alt)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-base text-[var(--foreground-secondary)] sm:text-lg">
            A selection of my work in AI, ML, and software engineering.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-[var(--accent)]" />
        </div>

        {/* Uniform 3-Column Projects Grid with Screenshots and Live Links */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title} details`}
                  onClick={() => handleOpenDetails(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpenDetails(project);
                    }
                  }}
                  className="group flex h-full flex-col cursor-pointer overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] transition-all hover:border-[var(--accent)] hover:shadow-lg"
                >
                  {/* Top Screenshot Area */}
                  <div className="relative h-48 w-full overflow-hidden bg-[var(--surface-alt)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <div className="absolute left-3 top-3 rounded-full bg-[var(--surface)]/90 px-2.5 py-0.5 text-[11px] font-medium text-[var(--foreground-secondary)] shadow-sm backdrop-blur-sm">
                      {project.category}
                    </div>

                    {project.featured && (
                      <div className="absolute right-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-[var(--accent-fg)] shadow-md">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[var(--foreground-secondary)]">
                        {project.shortDescription}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[var(--surface-border)] bg-[var(--background)] px-2 py-0.5 text-[11px] text-[var(--foreground-secondary)]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="rounded-md border border-[var(--surface-border)] bg-[var(--background)] px-2 py-0.5 text-[11px] text-[var(--foreground-muted)]">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions Row */}
                    <div className="mt-4 flex items-center justify-between gap-2 border-t border-[var(--surface-border)] pt-3">
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title="Lihat Source Code di GitHub"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--surface-border)] bg-[var(--surface-hover)] px-2.5 py-1.5 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          >
                            <GithubIcon className="h-3.5 w-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title="Buka Live Demo Website"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-2.5 py-1.5 text-xs font-medium text-[var(--accent-fg)] shadow-sm transition-opacity hover:opacity-90"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenDetails(project)}
                        title="Lihat Detail & Arsitektur"
                        className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-[var(--foreground-secondary)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Detail</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detailed Project Modal on Click */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
