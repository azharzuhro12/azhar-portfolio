"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, Maximize2, X } from "lucide-react";
import { certifications, CertificationItem } from "@/data/certifications";

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 text-base text-[var(--foreground-secondary)] sm:text-lg">
            Professional certifications validating my expertise and knowledge.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-[var(--accent)]" />
        </div>

        {/* Certificate Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col"
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={`Lihat sertifikat ${cert.title}`}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                className="group flex h-full flex-col cursor-pointer overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] transition-all hover:border-[var(--accent)] hover:shadow-lg"
              >
                {/* Certificate Scan Thumbnail */}
                <div className="relative aspect-[1.414/1] w-full overflow-hidden bg-[var(--surface-alt)]">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white shadow-md backdrop-blur-sm">
                      <Maximize2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                      <span>Klik untuk Perbesar</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  {/* Concise Issuer and Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-[var(--accent-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--accent)]">
                      {cert.issuerShort}
                    </span>
                    <span className="text-[11px] text-[var(--foreground-muted)]">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-sm font-semibold leading-snug text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    {cert.title}
                  </h3>

                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--foreground-secondary)]">
                    {cert.description}
                  </p>

                  {/* Actions */}
                  <div className="mt-4 flex items-center justify-between gap-1.5 border-t border-[var(--surface-border)] pt-3 text-xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[var(--foreground-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] transition-colors"
                      title="Perbesar gambar sertifikat"
                    >
                      <Maximize2 className="h-3 w-3" />
                      <span>Perbesar</span>
                    </button>

                    <div className="flex items-center gap-1">
                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 rounded-md border border-[var(--surface-border)] px-2 py-1 font-medium text-[var(--foreground-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                          title="Buka dokumen PDF asli"
                        >
                          <FileText className="h-3 w-3" />
                          <span>PDF</span>
                        </a>
                      )}
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 rounded-md bg-[var(--accent-subtle)] px-2 py-1 font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
                          title="Verifikasi kredensial online"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>Verifikasi</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label={selectedCert.title}
              className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-[var(--surface-border)] px-5 py-3.5">
                <div>
                  <span className="rounded-md bg-[var(--accent-subtle)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
                    {selectedCert.issuerShort}
                  </span>
                  <span className="ml-2 text-xs font-mono text-[var(--foreground-muted)]">
                    {selectedCert.credentialId || selectedCert.issueDate}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Tutup tampilan sertifikat"
                  className="rounded-full p-1.5 text-[var(--foreground-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Image Viewer Area */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-xl border border-[var(--surface-border)] bg-black/5 shadow-inner">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-contain"
                  />
                </div>

                {/* Details */}
                <div className="mt-5 space-y-2">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] sm:text-xl">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-[var(--accent)] font-medium">
                    Penyelenggara: {selectedCert.issuer}
                  </p>
                  <p className="text-xs text-[var(--foreground-muted)]">
                    Tanggal Terbit: {selectedCert.issueDate}
                    {selectedCert.validThrough && ` | Berlaku Hingga: ${selectedCert.validThrough}`}
                    {selectedCert.credentialId && ` | ID Kredensial: ${selectedCert.credentialId}`}
                  </p>
                  <p className="pt-1 text-xs sm:text-sm leading-relaxed text-[var(--foreground-secondary)]">
                    {selectedCert.description}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--surface-border)] bg-[var(--background)] px-5 py-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Buka Dokumen PDF</span>
                    </a>
                  )}
                  {selectedCert.verificationUrl && (
                    <a
                      href={selectedCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3.5 py-1.5 text-xs font-medium text-[var(--accent-fg)] hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Verifikasi Kredensial Resmi</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-medium text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
