"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

const stats = [
  { value: "10", label: "AI & ML Projects" },
  { value: "4", label: "Certifications" },
  { value: "16+", label: "Client Orders (5.0★)" },
  { value: "3.70", label: "GPA (4.00 Scale)" }
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-base text-[var(--foreground-secondary)] sm:text-lg">
            Passionate about building intelligent systems that make a difference.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-[var(--accent)]" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-[var(--foreground-secondary)]">
              I&apos;m an Informatics Engineering graduate from{" "}
              <span className="font-medium text-[var(--foreground)]">
                {personalInfo.education.institution}
              </span>{" "}
              with a cumulative GPA of{" "}
              <span className="font-medium text-[var(--foreground)]">
                {personalInfo.education.gpa}
              </span>
              . My journey in technology began with a deep curiosity about how data and algorithms can solve complex real-world problems.
            </p>

            <p className="text-base leading-relaxed text-[var(--foreground-secondary)]">
              I have served as an{" "}
              <span className="font-medium text-[var(--foreground)]">
                ML Engineer Intern at Rumah Digicraft
              </span>{" "}
              and a{" "}
              <span className="font-medium text-[var(--foreground)]">
                Freelance ML Engineer on Fastwork Technologies
              </span>
              , developing machine learning models, building data preprocessing pipelines, and conducting feature engineering for production applications.
            </p>

            <p className="text-base leading-relaxed text-[var(--foreground-secondary)]">
              My interests span{" "}
              <span className="font-medium text-[var(--foreground)]">
                Artificial Intelligence, Machine Learning, Generative AI (RAG), and Scalable Backend Systems
              </span>
              , focused on turning raw data into reliable, actionable software solutions.
            </p>
          </motion.div>

          {/* Right 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-lg"
              >
                <p className="text-3xl font-light tracking-tight text-[var(--foreground)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                  {stat.label}
                </p>
                <div
                  aria-hidden="true"
                  className="mt-3 h-px w-8 bg-[var(--accent)] transition-all group-hover:w-12"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
