"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { PROBLEM_COLUMNS } from "@/lib/constants";
import { cn } from "@/lib";

function ComparisonColumn({
  title,
  items,
  accent,
  index,
}: {
  title: string;
  items: readonly string[];
  accent: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(
        "relative flex flex-col border bg-background px-5 py-6 sm:px-6 sm:py-7",
        accent ? "border-blue-500/30" : "border-white/10",
      )}
    >
      <h3
        className={cn(
          "mb-5 text-[10px] font-medium tracking-[0.2em]",
          accent ? "text-blue-400" : "text-muted",
        )}
      >
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-[13px] leading-snug text-muted"
          >
            <span
              aria-hidden
              className={cn(
                "mt-[7px] h-px w-3 shrink-0",
                accent ? "bg-blue-500/50" : "bg-white/20",
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ConvergingLines({ active }: { active: boolean}) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      preserveAspectRatio="none"
      viewBox="0 0 1000 200"
    >
      <motion.path
        d="M 280 100 C 420 100, 520 80, 680 100"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          active
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.path
        d="M 580 100 L 680 100"
        fill="none"
        stroke="rgba(59,130,246,0.35)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          active
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.circle
        cx="680"
        cy="100"
        r="2.5"
        fill="rgba(59,130,246,0.6)"
        initial={{ opacity: 0, scale: 0 }}
        animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      />
    </svg>
  );
}

function MobileFlowLine({ active }: { active: boolean}) {
  return (
    <div
      aria-hidden
      className="flex flex-col items-center gap-0 py-2 lg:hidden"
    >
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="w-px origin-top bg-white/15"
          style={{ height: 20 }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={
            active ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
          }
          transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
        />
      ))}
    </div>
  );
}

export function ProblemComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [linesActive, setLinesActive] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setLinesActive(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <figure ref={ref} className="mt-20 lg:mt-24">
      <div className="relative border border-white/[0.06] bg-white/[0.01] p-4 sm:p-6 lg:p-8">
        <ConvergingLines active={linesActive} />

        <div className="relative grid gap-0 lg:grid-cols-3 lg:gap-6">
          {PROBLEM_COLUMNS.map((column, index) => (
            <div key={column.id}>
              <ComparisonColumn
                title={column.title}
                items={column.items}
                accent={column.accent}
                index={index}
              />
              {index < PROBLEM_COLUMNS.length - 1 && (
                <MobileFlowLine active={linesActive} />
              )}
            </div>
          ))}
        </div>
      </div>

      <figcaption className="mt-4 text-[10px] tracking-[0.18em] text-muted">
        FIG. 1 — COMPARISON OF SURGICAL VIDEO, MISSING KNOWLEDGE AND
        SURGICALDATAOS
      </figcaption>
    </figure>
  );
}
