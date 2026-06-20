"use client";

import { motion } from "framer-motion";

import { HERO } from "@/components/home/hero/hero-content";

const STAGGER = 0.12;
const LINE_Y = [36, 96, 156, 216, 276, 336];
const CX = 120;

function PipelineNode({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  const cy = LINE_Y[index];

  return (
    <g>
      <motion.circle
        cx={CX}
        cy={cy}
        r={14}
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={1}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: index * STAGGER }}
      />
      <motion.circle
        cx={CX}
        cy={cy}
        r={3}
        fill="rgba(255,255,255,0.85)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.75] }}
        transition={{
          duration: 0.45,
          delay: index * STAGGER + 0.08,
        }}
      />
      <motion.text
        x={CX + 28}
        y={cy + 4}
        fill="rgba(244,244,245,0.88)"
        fontSize={11}
        fontFamily="var(--font-inter), system-ui, sans-serif"
        letterSpacing="0.04em"
        initial={{ opacity: 0, x: CX + 20 }}
        animate={{ opacity: 1, x: CX + 28 }}
        transition={{ duration: 0.45, delay: index * STAGGER + 0.05 }}
      >
        {label}
      </motion.text>
    </g>
  );
}

function PipelineConnector({ index }: { index: number }) {
  const y1 = LINE_Y[index] + 14;
  const y2 = LINE_Y[index + 1] - 14;

  return (
    <motion.line
      x1={CX}
      y1={y1}
      x2={CX}
      y2={y2}
      stroke="rgba(255,255,255,0.14)"
      strokeWidth={1}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: index * STAGGER + STAGGER * 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    />
  );
}

export function HeroPipeline() {
  return (
    <figure
      className="w-full max-w-md lg:max-w-none"
      aria-label="SurgicalDataOS knowledge pipeline from video to robot"
    >
      <svg
        viewBox="0 0 240 372"
        className="mx-auto h-auto w-full max-w-[280px] lg:max-w-none"
        role="img"
      >
        {HERO.pipeline.slice(0, -1).map((_, index) => (
          <PipelineConnector key={`line-${index}`} index={index} />
        ))}
        {HERO.pipeline.map((label, index) => (
          <PipelineNode key={label} label={label} index={index} />
        ))}
      </svg>
      <figcaption className="sr-only">
        Pipeline: Video, Observation, Knowledge Graph, Reasoning, Decision,
        Robot
      </figcaption>
    </figure>
  );
}
