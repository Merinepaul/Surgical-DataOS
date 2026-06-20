"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib";

const TOTAL_DURATION = 2.4;
const NODE_COUNT = 16;
const STAGGER = TOTAL_DURATION / NODE_COUNT;

function Connector() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scaleY: 0 },
        visible: {
          opacity: 1,
          scaleY: 1,
          transition: { duration: 0.2 },
        },
      }}
      className="w-px origin-top bg-white/15"
      style={{ height: 18 }}
    />
  );
}

function Node({
  children,
  accent = false,
  compact = false,
  muted = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
  compact?: boolean;
  muted?: boolean;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.25 },
        },
      }}
      className={cn(
        "border px-3 py-1.5 text-center",
        compact ? "text-[10px]" : "text-[11px]",
        accent
          ? "border-blue-500/40 text-blue-400"
          : muted
            ? "border-white/8 text-muted"
            : "border-white/12 text-foreground/80",
      )}
    >
      {children}
    </motion.div>
  );
}

export function KnowledgeModelDiagram() {
  return (
    <figure className="mt-20 lg:mt-24">
      <div
        aria-label="SurgicalDataOS Knowledge Model diagram"
        role="img"
        className="flex justify-center border border-white/[0.06] bg-white/[0.01] px-4 py-10 sm:px-8 sm:py-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: STAGGER,
                delayChildren: 0.1,
              },
            },
          }}
          className="flex flex-col items-center"
        >
          <Node accent>Cataract Surgery</Node>
          <Connector />
          <Node>Observation</Node>
          <Connector />
          <Node>Interpretation</Node>
          <Connector />
          <Node>Decision</Node>
          <Connector />
          <Node>Action</Node>
          <Connector />
          <Node muted>Represented Through</Node>
          <Connector />

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            <Node compact>Anatomy</Node>
            <Node compact>Instruments</Node>
            <Node compact>Procedure</Node>
            <Node compact>Clinical Events</Node>
          </div>

          <Connector />
          <Node accent>Structured Knowledge Model</Node>
          <Connector />
          <Node accent>Validated Knowledge Dataset</Node>
          <Connector />

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            <Node compact>Artificial Intelligence</Node>
            <Node compact>Robotics</Node>
            <Node compact>Simulation</Node>
            <Node compact>Research</Node>
          </div>
        </motion.div>
      </div>
      <figcaption className="mt-4 text-[10px] tracking-[0.18em] text-muted">
        FIG. 2 — THE SURGICALDATAOS KNOWLEDGE MODEL
      </figcaption>
    </figure>
  );
}
