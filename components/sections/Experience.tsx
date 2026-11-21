"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CircleCheck } from "lucide-react";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Experience
          </h2>
          <p className="mt-4 text-base text-[var(--foreground-secondary)] sm:text-lg">
            My professional journey in AI and software development.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-[var(--accent)]" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-8 top-0 bottom-0 w-px bg-[var(--surface-border)] md:left-1/2"
          />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="absolute left-8 top-6 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--background)]">
                    <Briefcase className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                </div>

                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? "md:ml-auto" : ""
                  }`}
                >
                  <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-lg">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-[var(--accent-subtle)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium text-[var(--foreground)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--accent)]">
                      {exp.company}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                      {exp.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2 text-sm text-[var(--foreground-secondary)]"
                        >
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
