"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const milestones = [
  {
    icon: Briefcase,
    title: "16+ Commercial ML Projects (5.0★)",
    description:
      "Completed 16+ client orders on Fastwork Technologies and served as ML Engineer Intern at Rumah Digicraft building production OCR & ML pipelines."
  },
  {
    icon: Award,
    title: "4 Professional Certifications",
    description:
      "Certified at the Expert level by IDCamp AI Engineer, Lintasarta Cloudeka Digischool ML Developer, DCML TensorFlow, and IDCamp Data Scientist."
  },
  {
    icon: GraduationCap,
    title: "B.Sc. Informatics Engineering (GPA 3.70)",
    description:
      "Graduated from Universitas Darussalam Gontor specializing in AI & Machine Learning."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="bg-[var(--surface-alt)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Achievements
          </h2>
          <p className="mt-4 text-base text-[var(--foreground-secondary)] sm:text-lg">
            Milestones and recognitions along my journey.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-[var(--accent)]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex gap-5 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-fg)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
