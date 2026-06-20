"use client";

import { motion } from "framer-motion";

import { SectionShell } from "@/components/home/shared";
import { HOMEPAGE } from "@/lib/homepage";
import { fadeInView, fadeUp } from "@/lib/motion";

export function HomeContact() {
  const { contact } = HOMEPAGE;

  return (
    <SectionShell id="contact" bordered={false}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={fadeInView}
        variants={fadeUp}
        className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
      >
        {contact.headline}
      </motion.h2>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contact.channels.map((channel, index) => (
          <motion.a
            key={channel.label}
            href={`mailto:${channel.email}`}
            initial="hidden"
            whileInView="visible"
            viewport={fadeInView}
            variants={fadeUp}
            transition={{ delay: index * 0.05 }}
            className="group border border-border bg-white/[0.01] p-6 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.02]"
          >
            <p className="text-[14px] font-medium text-foreground transition-colors group-hover:text-accent">
              {channel.label}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">
              {channel.description}
            </p>
          </motion.a>
        ))}
      </div>
    </SectionShell>
  );
}
