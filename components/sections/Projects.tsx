"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeXml } from "lucide-react";
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
        {/* Section Header matching reference site */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-base text-[var(--foreground-secondary)] sm:text-lg">
            A selection of my work in AI, ML, and software engineering.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-[var(--accent)]" />
        </div>

        {/* Uniform 3-Column Projects Grid matching reference site */}
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
                  className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] transition-shadow hover:shadow-lg"
                >
                  {/* Top Banner Area */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[var(--background)] to-[var(--surface)]">
                    <div className="flex h-full items-center justify-center">
                      <CodeXml
                        aria-hidden="true"
                        className="h-12 w-12 text-[var(--foreground-muted)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--accent)]"
                      />
                    </div>
                    {project.featured && (
                      <div className="absolute right-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-[var(--accent-fg)]">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-[var(--foreground-secondary)]">
                      {project.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--surface-border)] bg-[var(--background)] px-2.5 py-0.5 text-xs text-[var(--foreground-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="rounded-full border border-[var(--surface-border)] bg-[var(--background)] px-2.5 py-0.5 text-xs text-[var(--foreground-secondary)]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
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
