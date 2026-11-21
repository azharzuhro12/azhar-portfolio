"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("azhar-theme") as "light" | "dark" | null;
    const initial = saved === "dark" ? "dark" : "light";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    localStorage.setItem("azhar-theme", next);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(scrollY / docHeight, 1));
      }

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top 2px Scroll Progress Bar */}
      <div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[var(--accent)]"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--background)]/85 backdrop-blur-md border-b border-[var(--surface-border)]"
            : "bg-transparent"
        )}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        >
          {/* Minimal Brand Name with Accent Dot */}
          <a
            href="#home"
            aria-label="Go to top"
            className="text-lg font-medium tracking-tight text-[var(--foreground)] focus-visible:outline-none"
          >
            Azhar<span className="text-[var(--accent)]">.</span>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden items-center gap-1 md:flex" role="menubar">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  role="menuitem"
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "text-[var(--foreground)] font-medium bg-[var(--surface)]"
                      : "text-[var(--foreground-secondary)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Actions: Theme Switcher & Contact */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-secondary)] transition-colors hover:text-[var(--foreground)]"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium text-[var(--foreground-secondary)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            >
              Contact
            </a>

            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:bg-[var(--surface-alt)] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-[var(--surface-border)] bg-[var(--background)] px-6 py-4 md:hidden">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-[var(--foreground-secondary)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
