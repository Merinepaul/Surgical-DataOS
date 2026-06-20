"use client";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components/ui/button";
import { HeroGrid } from "@/components/hero/hero-grid";
import { ScrollIndicator } from "@/components/hero/scroll-indicator";
import { PAGE_MAX_WIDTH } from "@/lib/constants";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col"
    >
      <HeroGrid />

      <div
        style={{ maxWidth: PAGE_MAX_WIDTH }}
        className="relative mx-auto flex flex-1 flex-col justify-center px-6 pt-28 pb-16 lg:px-10 lg:pt-32"
      >
        <div className="max-w-[720px]">
          <motion.h1
            id="hero-heading"
            {...fadeIn(0)}
            className="text-[2.5rem] font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem]"
          >
            SurgicalDataOS
          </motion.h1>

          <motion.p
            {...fadeIn(0.08)}
            className="mt-6 text-xl font-medium leading-snug tracking-[-0.01em] text-foreground/90 sm:text-2xl lg:max-w-[640px]"
          >
            A Framework for Structured Representation of Cataract Surgical
            Knowledge
          </motion.p>

          <motion.div
            {...fadeIn(0.16)}
            className="mt-10 max-w-[720px] space-y-6 text-[15px] leading-[1.8] text-muted sm:text-base"
          >
            <p>
              Cataract surgery is more than a sequence of instrument movements.
              Every procedure is a continuous process of observation,
              interpretation, clinical decision-making and action.
            </p>
            <p>
              The SurgicalDataOS Knowledge Model provides a structured
              representation of this knowledge, creating a foundation for
              artificial intelligence, robotic surgery, surgical simulation and
              research.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn(0.24)}
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <ButtonLink href="#knowledge-model" variant="primary">
              Explore the Framework
            </ButtonLink>
            <ButtonLink href="#knowledge-model" variant="secondary">
              View the Knowledge Model
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 flex justify-start lg:mt-24"
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}
