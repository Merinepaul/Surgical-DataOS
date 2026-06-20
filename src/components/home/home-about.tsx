"use client";

import { motion } from "framer-motion";

import { SectionShell } from "@/components/home/shared";
import { HOMEPAGE } from "@/lib/homepage";
import { fadeInView, fadeUp } from "@/lib/motion";

export function HomeAbout() {
  const { about } = HOMEPAGE;

  return (
    <SectionShell id="about">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={fadeInView}
        variants={fadeUp}
        className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
      >
        {about.headline}
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={fadeInView}
        variants={fadeUp}
        className="mt-10 max-w-2xl text-[16px] leading-[1.85] text-muted"
      >
        {about.body}
      </motion.p>
    </SectionShell>
  );
}
