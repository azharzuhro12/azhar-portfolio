"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  CornerDownLeft,
  Briefcase,
  Layers,
  Award,
  Mail,
  Download,
  User,
  Home,
  X,
  Copy,
  Check,
  Cpu,
  Trophy,
  Terminal
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCvModal?: () => void;
  onSelectProject?: (projectId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  icon: React.ReactNode;
  hint?: string;
  perform: () => void;
}

function CommandPaletteDialog({
  onClose,
  onSelectProject
}: Omit<CommandPaletteProps, "isOpen">) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Navigate to element smoothly
  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 800);
  };

  // Define command items
  const items: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: <Home className="h-4 w-4" />,
      perform: () => scrollTo("home")
    },
    {
      id: "nav-about",
      title: "Go to About",
      category: "Navigation",
      icon: <User className="h-4 w-4" />,
      perform: () => scrollTo("about")
    },
    {
      id: "nav-skills",
      title: "Go to Skills",
      category: "Navigation",
      icon: <Layers className="h-4 w-4" />,
      perform: () => scrollTo("skills")
    },
    {
      id: "nav-experience",
      title: "Go to Experience",
      category: "Navigation",
      icon: <Briefcase className="h-4 w-4" />,
      perform: () => scrollTo("experience")
    },
    {
      id: "nav-achievements",
      title: "Go to Achievements & Impact",
      category: "Navigation",
      icon: <Trophy className="h-4 w-4" />,
      perform: () => scrollTo("achievements")
    },
    {
      id: "nav-projects",
      title: "Go to Featured Projects",
      category: "Navigation",
      icon: <Cpu className="h-4 w-4" />,
      perform: () => scrollTo("projects")
    },
    {
      id: "nav-sandbox",
      title: "Go to Live AI Pipeline Sandbox",
      category: "Navigation",
      icon: <Terminal className="h-4 w-4" />,
      perform: () => scrollTo("sandbox")
    },
    {
      id: "nav-certifications",
      title: "Go to Certifications",
      category: "Navigation",
      icon: <Award className="h-4 w-4" />,
      perform: () => scrollTo("certifications")
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      category: "Navigation",
      icon: <Mail className="h-4 w-4" />,
      perform: () => scrollTo("contact")
    },

    // Actions
    {
      id: "action-resume",
      title: "Direct Download Curriculum Vitae (PDF)",
      category: "Actions",
      hint: "PDF",
      icon: <Download className="h-4 w-4 text-[#528BFF]" />,
      perform: () => {
        window.open("/cv/Azhar_Zuhro_CV.pdf", "_blank", "noopener,noreferrer");
        onClose();
      }
    },
    {
      id: "action-email",
      title: copiedEmail ? "Email Copied!" : `Copy Email (${personalInfo.email})`,
      category: "Actions",
      hint: copiedEmail ? "Copied" : "Clipboard",
      icon: copiedEmail ? (
        <Check className="h-4 w-4 text-emerald-400" />
      ) : (
        <Copy className="h-4 w-4 text-emerald-400" />
      ),
      perform: copyEmail
    },

    // Projects
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      title: `Project: ${p.title}`,
      category: "Projects" as const,
      hint: p.category,
      icon: <Cpu className="h-4 w-4 text-cyan-400" />,
      perform: () => {
        onClose();
        if (onSelectProject) {
          onSelectProject(p.id);
        } else {
          scrollTo("projects");
        }
      }
    })),

    // Social
    {
      id: "social-github",
      title: "Open GitHub Profile",
      category: "Social",
      hint: "External",
      icon: <GithubIcon className="h-4 w-4" />,
      perform: () => {
        window.open(personalInfo.github, "_blank", "noopener,noreferrer");
        onClose();
      }
    },
    {
      id: "social-linkedin",
      title: "Open LinkedIn Profile",
      category: "Social",
      hint: "External",
      icon: <LinkedinIcon className="h-4 w-4" />,
      perform: () => {
        window.open(personalInfo.linkedin, "_blank", "noopener,noreferrer");
        onClose();
      }
    }
  ];

  // Filter items by query
  const filteredItems = items.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.hint && item.hint.toLowerCase().includes(q))
    );
  });

  // Handle keyboard list navigation
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(filteredItems.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? Math.max(filteredItems.length - 1, 0) : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].perform();
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#10131B] border border-[#1E2536] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command Menu"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#1E2536] gap-3 bg-[#0C0F15]">
          <Search className="h-4 w-4 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Type a command, project, or section..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-[#1E2536] transition-colors"
            aria-label="Close command palette"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching commands or projects found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.perform}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm transition-all ${
                    isSelected
                      ? "bg-[#1E2536] text-white shadow-sm"
                      : "text-slate-300 hover:bg-[#161B26]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`p-1.5 rounded-lg ${
                        isSelected
                          ? "bg-[#252E42] text-[#528BFF]"
                          : "bg-[#121622] text-slate-400"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium truncate">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.hint && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#121622] text-slate-400 border border-[#1E2536]">
                        {item.hint}
                      </span>
                    )}
                    {isSelected && (
                      <CornerDownLeft className="h-3 w-3 text-slate-400" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-[#1E2536] bg-[#0C0F15] flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#161B26] border border-[#1E2536] text-[10px] text-slate-300">
                ↑↓
              </kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#161B26] border border-[#1E2536] text-[10px] text-slate-300">
                ↵
              </kbd>
              <span>to select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#161B26] border border-[#1E2536] text-[10px] text-slate-300">
                esc
              </kbd>
              <span>to close</span>
            </span>
          </div>
          <span className="text-slate-400">Azhar Zuhro Portfolio</span>
        </div>
      </div>
    </div>
  );
}

export function CommandPalette({ isOpen, ...props }: CommandPaletteProps) {
  if (!isOpen) return null;
  return <CommandPaletteDialog {...props} />;
}
