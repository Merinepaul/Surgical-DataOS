"use client";

import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <a
      href="#problem"
      className="group flex flex-col items-start gap-2 text-muted transition-colors duration-200 hover:text-foreground/80 focus-visible:outline-none focus-visible:text-foreground/80"
    >
      <ChevronDown
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
        strokeWidth={1.5}
        aria-hidden
      />
      <span className="max-w-[240px] text-[11px] leading-relaxed tracking-wide">
        Why Surgical Video Alone Is Not Enough
      </span>
    </a>
  );
}
