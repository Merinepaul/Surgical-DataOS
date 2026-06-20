"use client";

import { motion } from "framer-motion";

import { PAGE_MAX_WIDTH } from "@/lib/constants";
import { cn } from "@/lib";

const nodes = [
  { x: 12, y: 18 },
  { x: 28, y: 32 },
  { x: 45, y: 15 },
  { x: 58, y: 38 },
  { x: 72, y: 22 },
  { x: 85, y: 45 },
  { x: 38, y: 55 },
  { x: 62, y: 62 },
  { x: 78, y: 72 },
  { x: 22, y: 68 },
  { x: 50, y: 78 },
  { x: 88, y: 28 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [7, 10],
  [4, 11],
  [11, 5],
];

export function HeroNetwork() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {edges.map(([from, to], i) => {
          const a = nodes[from];
          const b = nodes[to];
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2.5,
                delay: 0.4 + i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          );
        })}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="0.6"
            className={cn(i > 7 && "fill-accent/60")}
            fill={i > 7 ? undefined : "rgba(255,255,255,0.25)"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2 + i * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]" />
    </div>
  );
}

export function SectionShell({
  id,
  children,
  className,
  bordered = true,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(bordered && "border-t border-border", className)}
    >
      <div
        style={{ maxWidth: PAGE_MAX_WIDTH }}
        className="mx-auto px-6 py-28 lg:px-10 lg:py-36"
      >
        {children}
      </div>
    </section>
  );
}
