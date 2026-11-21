"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CodeXml, Brain, Wrench, Database, Search } from "lucide-react";

interface SkillGroup {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    icon: CodeXml,
    items: ["Python", "SQL", "TypeScript", "JavaScript"]
  },
  {
    title: "AI & ML",
    icon: Brain,
    items: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "CNN",
      "Computer Vision",
      "NLP",
      "RAG",
      "LLMs / SLMs",
      "LangChain",
      "LangGraph",
      "Time-Series Forecasting",
      "LightGBM",
      "XGBoost",
      "Librosa (Audio)",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "MLOps"
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      "FastAPI",
      "Docker",
      "Docker Compose",
      "Celery",
      "Firebase ML",
      "Streamlit",
      "Git / GitHub",
      "Linux"
    ]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "Redis", "ChromaDB", "Supabase"]
  }
];

export function Skills() {
  const [query, setQuery] = useState("");

  const filteredGroups = skillGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.toLowerCase().includes(query.trim().toLowerCase())
      )
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="bg-[var(--surface-alt)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-base text-[var(--foreground-secondary)] sm:text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-[var(--accent)]" />
        </div>

        {/* Search Input */}
        <div className="relative mx-auto mb-12 max-w-md">
          <Search
            aria-hidden="true"
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--foreground-muted)]"
          />
          <input
            aria-label="Search skills"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills..."
            className="h-11 w-full rounded-full border border-[var(--surface-border)] bg-[var(--surface)] pl-11 pr-4 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
        </div>

        {/* 4-Column Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-fg)]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mb-4 text-sm font-medium tracking-wide text-[var(--foreground)] uppercase">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--surface-border)] bg-[var(--background)] px-3 py-1 text-xs text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
