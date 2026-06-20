"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SectionShell } from "@/components/home/shared";
import { HOMEPAGE } from "@/lib/homepage";
import { fadeInView, fadeUp } from "@/lib/motion";
import { cn } from "@/lib";

function FlowConnector() {
  return <div aria-hidden className="mx-auto h-8 w-px bg-white/10" />;
}

export function HomeFramework() {
  const { framework } = HOMEPAGE;
  const [selected, setSelected] = useState<string>(framework.nodes[0].id);

  const active = framework.nodes.find((n) => n.id === selected);

  return (
    <SectionShell id="knowledge-model">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={fadeInView}
        variants={fadeUp}
        className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
      >
        {framework.headline}
      </motion.h2>

      <div className="mt-20 grid gap-16 lg:grid-cols-[280px_1fr] lg:gap-24">
        <div className="flex flex-col items-center">
          {framework.nodes.map((node, index) => (
            <div key={node.id} className="flex w-full flex-col items-center">
              <motion.button
                type="button"
                initial="hidden"
                whileInView="visible"
                viewport={fadeInView}
                variants={fadeUp}
                transition={{ delay: index * 0.04 }}
                onClick={() => setSelected(node.id)}
                onMouseEnter={() => setSelected(node.id)}
                className={cn(
                  "w-full border px-4 py-2.5 text-center text-[13px] transition-colors duration-200",
                  selected === node.id
                    ? "border-accent/40 bg-accent/[0.06] text-foreground"
                    : "border-border bg-white/[0.01] text-muted hover:border-white/15 hover:text-foreground/80",
                )}
              >
                {node.label}
              </motion.button>
              {index < framework.nodes.length - 1 && <FlowConnector />}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active?.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="max-w-md"
            >
              <p className="text-[11px] tracking-[0.2em] text-accent">
                {active?.label}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {active?.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionShell>
  );
}
