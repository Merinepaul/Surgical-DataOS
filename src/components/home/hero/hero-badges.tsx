"use client";

import { motion } from "framer-motion";

import { HERO } from "@/components/home/hero/hero-content";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function HeroBadges() {
  return (
    <motion.ul
      {...fade(0.35)}
      className="mt-10 flex flex-wrap gap-2"
      aria-label="Platform characteristics"
    >
      {HERO.badges.map((badge) => (
        <li key={badge}>
          <span className="inline-block border border-white/15 px-2.5 py-1 text-[10px] tracking-[0.12em] text-zinc-400 uppercase">
            {badge}
          </span>
        </li>
      ))}
    </motion.ul>
  );
}
