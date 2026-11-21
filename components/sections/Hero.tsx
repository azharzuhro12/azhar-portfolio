"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Download, Mail, ArrowDown } from "lucide-react";
import { TypewriterRole } from "@/components/ui/TypewriterRole";
import { personalInfo } from "@/data/personal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-24 pb-16 lg:grid-cols-2 lg:pt-0 lg:pb-0">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-[var(--accent)] uppercase">
            Welcome
          </p>

          <h1 className="text-4xl font-light tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl xl:text-7xl">
            {personalInfo.name}
          </h1>

          <p className="mt-4 text-lg text-[var(--foreground-secondary)] sm:text-xl">
            AI Engineer | Machine Learning Engineer
          </p>

          <div className="mt-6">
            <TypewriterRole />
          </div>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-[var(--foreground-secondary)] lg:mx-0">
            Building intelligent systems through AI, Machine Learning, and practical software engineering.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 text-base font-medium text-[var(--accent-fg)] transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              <span>View Projects</span>
            </a>

            <a
              href="/cv/Azhar_Zuhro_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Azhar_Zuhro_CV.pdf"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-8 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-alt)]"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-base font-medium text-[var(--foreground-secondary)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: 360x360 Circular Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[360px] lg:w-[360px]">
            <div
              aria-hidden="true"
              className="absolute inset-[-8px] rounded-full border border-dashed border-[var(--accent)]/30"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--surface-border)] bg-[var(--surface)] shadow-2xl">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                width={360}
                height={360}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute bottom-4 right-4 h-4 w-4 rounded-full border-2 border-[var(--background)] bg-[var(--accent)]"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        aria-hidden="true"
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--foreground-muted)]">Scroll</span>
        <ArrowDown className="h-4 w-4 text-[var(--foreground-muted)]" />
      </div>
    </section>
  );
}
