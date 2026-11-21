"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 text-base text-[var(--foreground-secondary)] sm:text-lg">
            Professional certifications validating my expertise and knowledge.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-[var(--accent)]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, idx) => (
            <motion.a
              key={cert.id}
              href={cert.pdfUrl || cert.verificationUrl || "#certifications"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group block rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-fg)]">
                <Award className="h-6 w-6" />
              </div>

              <h3 className="text-base font-medium text-[var(--foreground)]">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--accent)]">
                {cert.issuer}
              </p>
              <p className="mt-1 text-xs text-[var(--foreground-muted)]">
                {cert.issueDate}
              </p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                {cert.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
