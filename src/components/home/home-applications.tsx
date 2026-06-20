"use client";

import {
  Bot,
  Brain,
  GraduationCap,
  Layers,
  Microscope,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";

import { SectionShell } from "@/components/home/shared";
import { HOMEPAGE } from "@/lib/homepage";
import { fadeInView, fadeUp } from "@/lib/motion";

const iconMap = {
  brain: Brain,
  bot: Bot,
  monitor: Monitor,
  "graduation-cap": GraduationCap,
  microscope: Microscope,
  layers: Layers,
} as const;

export function HomeApplications() {
  const { applications } = HOMEPAGE;

  return (
    <SectionShell id="applications">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={fadeInView}
        variants={fadeUp}
        className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
      >
        {applications.headline}
      </motion.h2>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {applications.items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={fadeInView}
              variants={fadeUp}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="group border border-border bg-white/[0.01] p-7 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.02]"
            >
              <Icon
                className="h-5 w-5 text-muted transition-colors duration-300 group-hover:text-accent/80"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-5 text-[15px] font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
