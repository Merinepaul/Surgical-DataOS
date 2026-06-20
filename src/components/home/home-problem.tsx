"use client";

import { motion } from "framer-motion";

import { SectionShell } from "@/components/home/shared";
import { HOMEPAGE } from "@/lib/homepage";
import { fadeInView, fadeUp } from "@/lib/motion";
import { cn } from "@/lib";

function ComparisonColumn({
  title,
  items,
  accent,
}: {
  title: string;
  items: readonly string[];
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "border p-8 sm:p-10",
        accent ? "border-accent/25 bg-accent/[0.02]" : "border-border bg-white/[0.01]",
      )}
    >
      <h3
        className={cn(
          "text-[11px] font-medium tracking-[0.18em]",
          accent ? "text-accent" : "text-muted",
        )}
      >
        {title}
      </h3>
      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-[15px] text-foreground/85"
          >
            <span
              aria-hidden
              className={cn(
                "h-px w-4 shrink-0",
                accent ? "bg-accent/50" : "bg-white/20",
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HomeProblem() {
  const { problem } = HOMEPAGE;

  return (
    <SectionShell id="problem">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={fadeInView}
        variants={fadeUp}
        className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
      >
        {problem.headline}
      </motion.h2>

      <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInView}
          variants={fadeUp}
        >
          <ComparisonColumn
            title={problem.left.title}
            items={problem.left.items}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInView}
          variants={fadeUp}
          transition={{ delay: 0.08 }}
        >
          <ComparisonColumn
            title={problem.right.title}
            items={problem.right.items}
            accent
          />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={fadeInView}
        variants={fadeUp}
        className="mt-20 max-w-xl"
      >
        <p className="text-lg text-foreground/90">{problem.conclusion.line1}</p>
        <p className="mt-2 text-lg text-muted">{problem.conclusion.line2}</p>
      </motion.div>
    </SectionShell>
  );
}
