"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Square } from "lucide-react";

export function SmartDistPreview() {
  return (
    <div className="relative rounded-xl bg-[#090C12] border border-[#1E2536] p-3 overflow-hidden text-xs font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-[#1E2536]/60 text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#528BFF]" />
          <span>Demand Forecast (7d / 14d / 30d)</span>
        </span>
        <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
          WAPE: 13.09% (+25.9%)
        </span>
      </div>

      {/* SVG Time-Series Chart */}
      <div className="py-2.5">
        <svg viewBox="0 0 320 64" className="w-full h-16 overflow-visible" preserveAspectRatio="none">
          <defs>
            <linearGradient id="forecastGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#528BFF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#528BFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="16" x2="320" y2="16" stroke="#1E2536" strokeDasharray="3 3" />
          <line x1="0" y1="36" x2="320" y2="36" stroke="#1E2536" strokeDasharray="3 3" />
          <line x1="0" y1="56" x2="320" y2="56" stroke="#1E2536" strokeDasharray="3 3" />

          {/* Historical Sales Curve */}
          <path
            d="M 0 46 Q 30 38, 60 48 T 120 32 T 180 40 T 220 28"
            fill="none"
            stroke="#64748B"
            strokeWidth="1.75"
            strokeDasharray="4 2"
          />

          {/* Forecast Horizon Area Fill */}
          <path
            d="M 220 28 Q 250 18, 280 22 T 320 14 L 320 64 L 220 64 Z"
            fill="url(#forecastGlow)"
          />

          {/* Forecast Horizon Projected Line */}
          <path
            d="M 220 28 Q 250 18, 280 22 T 320 14"
            fill="none"
            stroke="#528BFF"
            strokeWidth="2.25"
          />

          {/* Forecast Split Divider Node */}
          <circle cx="220" cy="28" r="3.5" fill="#528BFF" stroke="#080A0F" strokeWidth="1.5" />
          <line x1="220" y1="0" x2="220" y2="64" stroke="#528BFF" strokeOpacity="0.4" strokeDasharray="2 2" />
        </svg>

        <div className="flex justify-between text-[10px] text-slate-500 pt-1">
          <span>t - 30d</span>
          <span>t - 14d</span>
          <span className="text-[#528BFF]">Inference (t)</span>
          <span className="text-[#528BFF]">+7d</span>
          <span className="text-[#528BFF]">+30d</span>
        </div>
      </div>
    </div>
  );
}

export function FaceRecognitionPreview() {
  return (
    <div className="rounded-xl bg-[#090C12] border border-[#1E2536] p-3 text-xs font-mono space-y-2">
      <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-[#1E2536]/60">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>MTCNN + FaceNet (128-D)</span>
        </span>
        <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
          Match (Dist: 0.231)
        </span>
      </div>

      <div className="rounded bg-[#121622] p-2 space-y-1.5 text-[11px]">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>Face Crop: 160x160 Standardized</span>
          <span className="text-cyan-400">Cosine Threshold &lt; 0.40</span>
        </div>
        <div className="flex items-center justify-between rounded bg-[#080A0F] border border-[#1E2536] p-1.5 text-[10px] text-slate-300">
          <span>Detection Confidence: 99.4%</span>
          <span className="text-slate-500">Live OpenCV 30 FPS</span>
        </div>
      </div>
    </div>
  );
}

export function ResearchFlowPreview() {
  return (
    <div className="rounded-xl bg-[#090C12] border border-[#1E2536] p-3 text-xs font-mono space-y-2">
      <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-[#1E2536]/60">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          <span>ChromaDB Vector Retrieval</span>
        </span>
        <span className="text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">
          Cosine Sim: 0.942
        </span>
      </div>

      <div className="rounded bg-[#121622] p-2 text-[11px] text-slate-300 space-y-1">
        <span className="text-[10px] text-slate-500 block">Extracted Context Chunk:</span>
        <p className="line-clamp-2 italic text-slate-300">
          &quot;...gradient boosted decision trees with rolling statistics minimized prediction variance across regional store nodes...&quot;
        </p>
        <div className="flex items-center justify-between pt-1 text-[10px]">
          <span className="text-[#528BFF] bg-[#528BFF]/10 px-1.5 py-0.5 rounded border border-[#528BFF]/20">
            Citation: Paper_v2.pdf [p. 14, §3.1]
          </span>
          <span className="text-slate-500">Latency: 184ms</span>
        </div>
      </div>
    </div>
  );
}

export function BizAssistPreview() {
  return (
    <div className="rounded-xl bg-[#090C12] border border-[#1E2536] p-3 text-xs font-mono space-y-2">
      <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-[#1E2536]/60">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Gemini + Dify Agent Flow</span>
        </span>
        <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
          Resolved 85%+
        </span>
      </div>

      <div className="rounded bg-[#121622] p-2 space-y-1.5 text-[11px]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-slate-400">User Query: &quot;B2B SLA & Refund Policy&quot;</span>
          <span className="text-slate-500">FastAPI Async</span>
        </div>
        <div className="rounded bg-[#080A0F] border border-[#1E2536] p-1.5 text-slate-300">
          <span className="text-emerald-400">Agent Action: </span>
          <span>Matched FAQ Rule #14 &bull; Verified clause with knowledge base</span>
        </div>
      </div>
    </div>
  );
}

export function TahsinQiroahPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [barHeights, setBarHeights] = useState([
    40, 65, 85, 95, 75, 90, 60, 80, 70, 95, 85, 55, 45, 60, 30
  ]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlayback = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      setBarHeights([40, 65, 85, 95, 75, 90, 60, 80, 70, 95, 85, 55, 45, 60, 30]);
    } else {
      setIsPlaying(true);
      intervalRef.current = setInterval(() => {
        setBarHeights((prev) =>
          prev.map(() => Math.floor(25 + Math.random() * 72))
        );
      }, 120);

      // Auto stop after 4.5 seconds simulation
      setTimeout(() => {
        setIsPlaying(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
        setBarHeights([40, 65, 85, 95, 75, 90, 60, 80, 70, 95, 85, 55, 45, 60, 30]);
      }, 4500);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="rounded-xl bg-[#090C12] border border-[#1E2536] p-3 text-xs font-mono space-y-2">
      <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-[#1E2536]/60">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span>2D CNN (70.51% Acc) + Qwen2.5</span>
        </span>
        <button
          type="button"
          onClick={togglePlayback}
          className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#161B26] hover:bg-[#1E2536] border border-[#232B3E] text-[10px] text-[#528BFF] transition-colors"
          title="Simulate Mel-frequency feature extraction"
        >
          {isPlaying ? (
            <>
              <Square className="h-2.5 w-2.5 fill-current" />
              <span>Analyzing</span>
            </>
          ) : (
            <>
              <Play className="h-2.5 w-2.5 fill-current" />
              <span>Demo Audio</span>
            </>
          )}
        </button>
      </div>

      <div className="rounded bg-[#121622] p-2 space-y-1.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>790 Verified Audio Records</span>
          <span className={isPlaying ? "text-emerald-400 font-semibold" : "text-[#528BFF]"}>
            {isPlaying ? "Class: Ghunnah Valid (94.2%)" : "Qwen2.5-1.5B Feedback"}
          </span>
        </div>

        {/* Mel-filter bank bars */}
        <div className="flex items-end gap-1 h-6 pt-1">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t transition-all duration-100 ${
                isPlaying
                  ? "bg-[#528BFF] border-t border-cyan-300"
                  : "bg-[#528BFF]/40 border-t border-[#528BFF]"
              }`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
