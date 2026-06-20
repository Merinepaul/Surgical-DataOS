"use client";

import { motion } from "framer-motion";

import { Section, SectionBody } from "@/components/ui/section";
import { fadeInView, fadeUp } from "@/lib/motion";

export function AboutSection() {
  return (
    <Section
      id="about"
      sectionNumber="05"
      title="About"
      titleId="about-heading"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={fadeInView}
        variants={fadeUp}
        className="mt-12 max-w-xl border border-border bg-white/[0.01] p-8 sm:p-10"
      >
        <p className="text-lg font-medium tracking-tight text-foreground">
          Dr Merine Paul
        </p>
        <p className="mt-2 text-[13px] tracking-wide text-muted">
          Ophthalmic Surgeon
        </p>
        <p className="mt-1 text-[13px] tracking-wide text-muted">
          Founder of SurgicalDataOS
        </p>
      </motion.div>

      <SectionBody className="mt-12">
        <p>
          SurgicalDataOS originated from the observation that surgical videos
          capture what a surgeon does but not the clinical reasoning that guides
          those actions.
        </p>
        <p>
          The project aims to develop a structured representation of cataract
          surgical knowledge for artificial intelligence, robotic surgery,
          simulation and research.
        </p>
      </SectionBody>
    </Section>
  );
}
