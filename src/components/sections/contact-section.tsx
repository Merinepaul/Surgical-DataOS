"use client";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components/ui/button";
import { HeroGrid } from "@/components/hero/hero-grid";
import { PAGE_MAX_WIDTH } from "@/lib/constants";
import { fadeInView, fadeUp } from "@/lib/motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-border"
    >
      <HeroGrid />
      <div
        style={{ maxWidth: PAGE_MAX_WIDTH }}
        className="relative mx-auto px-6 py-32 lg:px-10 lg:py-40"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInView}
          variants={fadeUp}
        >
          <p className="text-[11px] tracking-[0.24em] text-muted">06</p>
        </motion.div>

        <motion.h2
          id="contact-heading"
          initial="hidden"
          whileInView="visible"
          viewport={fadeInView}
          variants={fadeUp}
          className="mt-8 max-w-3xl text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-[2rem]"
        >
          Contact
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={fadeInView}
          variants={fadeUp}
          className="mt-10 max-w-[720px] text-[15px] leading-[1.8] text-muted"
        >
          Interested in collaboration?
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={fadeInView}
          variants={fadeUp}
          className="mt-6 max-w-[720px] text-[15px] leading-[1.8] text-muted"
        >
          We welcome discussions with ophthalmologists, AI researchers, robotics
          companies, academic Institutions and industry partners interested in
          advancing structured surgical knowledge.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInView}
          variants={fadeUp}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <ButtonLink href="mailto:contact@surgicaldataos.com" variant="primary">
            Contact
          </ButtonLink>
          <ButtonLink href="#overview" variant="secondary">
            Download Framework Overview
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
