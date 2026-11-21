"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, Mail, MapPin, GraduationCap, Award, Briefcase, Code, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
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

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0D1017] border border-[#1E2536] shadow-2xl overflow-hidden"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E2536] bg-[#10131B]/80 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#528BFF]" />
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                  Curriculum Vitae: Azhar Zuhro
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  aria-label="Print CV"
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors hidden sm:inline-flex"
                  title="Print CV"
                >
                  <Printer className="h-4 w-4" />
                </button>
                <a
                  href={personalInfo.cvPath}
                  download="Azhar_Zuhro_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#528BFF] hover:bg-[#3D78F5] text-white text-xs font-medium transition-colors shadow-sm"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content (CV Document Preview) */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0D1017] text-slate-300 print:bg-white print:text-black">
              {/* Document Header */}
              <div className="border-b border-[#1E2536] pb-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <span className="text-[#528BFF] text-sm sm:text-base font-medium">
                    {personalInfo.title}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-slate-500" />
                    {personalInfo.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-500" />
                    {personalInfo.location}
                  </span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#528BFF] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#528BFF] transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#528BFF] font-semibold flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5" /> Professional Summary
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-[#528BFF] font-semibold flex items-center gap-2">
                  <GraduationCap className="h-3.5 w-3.5" /> Education
                </h4>
                <div className="rounded-xl bg-[#121622] border border-[#1E2536] p-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-white text-sm">
                      {personalInfo.education.degree}
                    </span>
                    <span className="text-xs text-[#528BFF] font-medium bg-[#528BFF]/10 px-2 py-0.5 rounded border border-[#528BFF]/20 self-start sm:self-auto">
                      GPA: {personalInfo.education.gpa}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {personalInfo.education.institution}
                  </p>
                  <p className="text-xs text-slate-500 pt-1">
                    Focus: {personalInfo.education.focus}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-[#528BFF] font-semibold flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5" /> Professional Experience
                </h4>
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="rounded-xl bg-[#121622] border border-[#1E2536] p-4 space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h5 className="font-semibold text-white text-sm">
                            {exp.role}
                          </h5>
                          <span className="text-xs text-slate-400">
                            {exp.company} • {exp.location}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-1 pt-1 text-xs text-slate-300">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#528BFF] mt-1 shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 rounded bg-[#161B26] border border-[#232B3E] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Featured Projects */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-[#528BFF] font-semibold flex items-center gap-2">
                  <Code className="h-3.5 w-3.5" /> Featured Engineering Projects
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="rounded-xl bg-[#121622] border border-[#1E2536] p-4 flex flex-col justify-between space-y-2"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="font-semibold text-white text-sm">
                            {proj.title}
                          </h5>
                          <span className="text-[10px] text-[#528BFF] bg-[#528BFF]/10 px-1.5 py-0.5 rounded border border-[#528BFF]/20">
                            {proj.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {proj.shortDescription}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[#1E2536]/60">
                        <div className="flex flex-wrap gap-1">
                          {proj.technologies.slice(0, 5).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-[#161B26] text-slate-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-[#528BFF] font-semibold flex items-center gap-2">
                  <Award className="h-3.5 w-3.5" /> Certifications & Credentials
                </h4>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="rounded-xl bg-[#121622] border border-[#1E2536] p-3 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <h6 className="text-xs sm:text-sm font-medium text-white">
                            {cert.title}
                          </h6>
                        </div>
                        <p className="text-xs text-slate-400 pl-6">
                          {cert.issuer} • Issued {cert.issueDate}
                        </p>
                      </div>
                      {cert.credentialId && (
                        <span className="text-[11px] font-mono text-slate-400 shrink-0 bg-[#161B26] px-2 py-0.5 rounded border border-[#232B3E]">
                          {cert.credentialId}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#1E2536] bg-[#10131B] flex items-center justify-between text-xs text-slate-400">
              <span>Azhar Zuhro • Portfolio CV</span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] text-white transition-colors"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
