"use client";

import React, { useState } from "react";
import { Terminal, Play, RotateCcw, Copy, Check, Cpu } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface PipelinePreset {
  id: string;
  name: string;
  command: string;
  model: string;
  latency: string;
  status: string;
  logs: string[];
}

const presets: PipelinePreset[] = [
  {
    id: "smartdist",
    name: "Demand Forecasting",
    command: "smartdist predict --stores 54 --horizon 14d --model lightgbm",
    model: "LightGBM + XGBoost",
    latency: "142ms",
    status: "13.09% WAPE",
    logs: [
      "[00:00.012] Loading 648,648 historical sales rows from PostgreSQL...",
      "[00:00.045] Feature pipeline: lag_7d, lag_14d, rolling_mean_30d, promo_flag generated.",
      "[00:00.088] Loading serialized LightGBM booster weights (v2.4-tuned)...",
      "[00:00.124] Executing multi-horizon inference for 54 regional retail branches...",
      "[00:00.142] Inference complete. Projected demand: 18,420 units. WAPE: 13.09% (+25.9% vs baseline)."
    ]
  },
  {
    id: "rag",
    name: "RAG Vector Search",
    command: "researchflow query --text \"gradient boosting convergence\" --k 3",
    model: "ChromaDB + Gemini 2.5",
    latency: "184ms",
    status: "Score 0.942",
    logs: [
      "[00:00.008] Embedding input text with text-embedding-004 (768 dimensions)...",
      "[00:00.052] ChromaDB vector index scan (HNSW cosine similarity)...",
      "[00:00.095] 3 nearest document chunks retrieved (top cosine similarity: 0.942).",
      "[00:00.140] Context injected into Gemini prompt template with source citation markers.",
      "[00:00.184] Grounded response generated with verified academic source: Paper_v2.pdf [p. 14, §3.1]."
    ]
  },
  {
    id: "face",
    name: "Facial Recognition",
    command: "facenet verify --feed webcam_0 --metric cosine --threshold 0.40",
    model: "MTCNN + FaceNet-128",
    latency: "33ms",
    status: "30 FPS",
    logs: [
      "[00:00.005] Ingesting OpenCV live video frame 1280x720 (30 FPS)...",
      "[00:00.014] MTCNN P-Net, R-Net, O-Net detection: 1 frontal face found (conf: 0.994).",
      "[00:00.022] Standardized face crop 160x160 with affine eye alignment.",
      "[00:00.030] FaceNet forward pass -> 128-D L2-normalized embedding vector.",
      "[00:00.033] Cosine distance to reference profile: 0.231 (< 0.40 threshold). Identity Verified."
    ]
  },
  {
    id: "audio",
    name: "Audio Deep Learning",
    command: "tahsin classify --wav sample_ghunnah.wav --model crnn_2d",
    model: "2D CNN + Qwen2.5-1.5B",
    latency: "210ms",
    status: "70.51% Acc",
    logs: [
      "[00:00.020] Audio load: 16 kHz mono sampling, 3.2s duration.",
      "[00:00.065] Short-Time Fourier Transform (STFT) computed: 128 Mel-frequency filterbanks.",
      "[00:00.115] 2D CNN feature extractor pass through temporal convolution layers...",
      "[00:00.160] Softmax output: Idgham Bighunnah Valid (confidence: 94.2%).",
      "[00:00.210] Qwen2.5-1.5B feedback: 'Panjang harakat makhraj nun tasydid tepat 2 harakat ghunnah.'"
    ]
  }
];

export function LiveTerminal() {
  const [activePreset, setActivePreset] = useState<PipelinePreset>(presets[0]);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(presets[0].logs.length);

  const handleSelect = (preset: PipelinePreset) => {
    setActivePreset(preset);
    setIsRunning(true);
    setVisibleLines(1);

    let line = 1;
    const interval = setInterval(() => {
      line++;
      setVisibleLines(line);
      if (line >= preset.logs.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 150);
  };

  const handleCopyLogs = async () => {
    const text = `$ ${activePreset.command}\n` + activePreset.logs.join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="Interactive Sandbox"
          badgeIcon={<Cpu className="h-3.5 w-3.5" />}
          title="Live AI Pipeline &"
          highlight="Inference Console"
          description="Click any pipeline below to inspect the execution trace and real-world metrics of my machine learning models."
        />

        <div className="mx-auto max-w-4xl">
          {/* Rounded-Full Preset Selector Pills */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            {presets.map((p) => {
              const isSelected = p.id === activePreset.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelect(p)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-sm"
                      : "border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* Terminal Window (Always dark code console for crisp readability) */}
          <div className="overflow-hidden rounded-2xl border border-[#1E2536] bg-[#0A0D14] font-mono text-xs shadow-xl">
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between border-b border-[#1E2536] bg-[#10141F] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 rounded-full bg-[#FF5F56]/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-[#27C93F]/80" />
                </div>
                <span className="ml-2 hidden text-[11px] text-slate-400 sm:inline">
                  azhar@ai-engine:~
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#161B28] border border-[#232B3E] px-2.5 py-0.5 text-[10px] text-slate-300">
                  {activePreset.model}
                </span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] text-emerald-400">
                  {activePreset.status}
                </span>
                <button
                  type="button"
                  onClick={handleCopyLogs}
                  className="rounded-md p-1 text-slate-400 hover:bg-[#1E2536] hover:text-white transition-colors"
                  title="Copy terminal output"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Terminal Output Area */}
            <div className="min-h-[210px] space-y-3 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <span className="font-bold text-emerald-400">$</span>
                <span className="font-semibold text-white">{activePreset.command}</span>
                {isRunning && (
                  <span className="inline-block h-4 w-1.5 bg-[#4F86F7] animate-pulse" />
                )}
              </div>

              <div className="space-y-1.5 pt-1 text-[11px] sm:text-xs">
                {activePreset.logs.slice(0, visibleLines).map((log, i) => {
                  const isHighlight =
                    log.includes("complete") ||
                    log.includes("Verified") ||
                    log.includes("Grounded") ||
                    log.includes("feedback");
                  return (
                    <div
                      key={i}
                      className={`leading-relaxed ${
                        isHighlight ? "font-medium text-emerald-300" : "text-slate-400"
                      }`}
                    >
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Terminal Bottom Bar */}
            <div className="flex items-center justify-between border-t border-[#1E2536] bg-[#10141F] px-4 py-2.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Pipeline Ready • Latency: {activePreset.latency}</span>
              </div>

              <button
                type="button"
                onClick={() => handleSelect(activePreset)}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4F86F7] hover:text-[#7CA9FF] disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RotateCcw className="h-3 w-3 animate-spin" />
                    <span>Running...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3 fill-current" />
                    <span>Run Pipeline</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
