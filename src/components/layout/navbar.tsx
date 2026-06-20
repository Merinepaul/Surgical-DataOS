"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAV_LINKS, PAGE_MAX_WIDTH } from "@/lib/constants";
import { cn } from "@/lib";

const SECTION_IDS = NAV_LINKS.filter((link) => link.href.startsWith("#"))
  .map((link) => link.href.slice(1))
  .filter((id) => id !== "home");

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      if (window.scrollY < 120) {
        setActiveSection("home");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        style={{ maxWidth: PAGE_MAX_WIDTH }}
        className={cn(
          "mx-auto flex items-center justify-between px-6 py-5 transition-colors duration-300 lg:px-10",
          scrolled && "border-b border-border bg-background/90 backdrop-blur-sm",
        )}
      >
        <a
          href="#home"
          className="text-[11px] font-medium tracking-[0.22em] text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/50"
        >
          SURGICALDATAOS
        </a>

        <ul className="hidden items-center gap-6 xl:flex xl:gap-7">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "text-[12px] transition-colors duration-200 focus-visible:outline-none",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground/90",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center text-muted xl:hidden"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-background px-6 py-8 xl:hidden"
          >
            <ul className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
