"use client";

import { motion } from "framer-motion";

import { HeroBadges } from "@/components/home/hero/hero-badges";
import { HERO } from "@/components/home/hero/hero-content";
import { HeroPipeline } from "@/components/home/hero/hero-pipeline";
import { ButtonLink } from "@/components/ui/button";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.18]"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {[
          [20, 30, 45, 25],
          [45, 25, 70, 35],
          [70, 35, 55, 55],
          [55, 55, 30, 50],
          [30, 50, 60, 65],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={0.12}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
          />
        ))}
      </svg>
    </div>
  );
}

export function HomeHero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-28 lg:px-10 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[45%_55%] lg:gap-12 xl:gap-20">
          <div className="max-w-xl">
            <motion.h1
              id="home-heading"
              {...fade(0)}
              className="text-[2.15rem] font-semibold leading-[1.12] tracking-[-0.025em] text-white sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              {...fade(0.1)}
              className="mt-8 max-w-[520px] text-[16px] leading-[1.75] text-zinc-300 sm:text-[17px] sm:leading-[1.8]"
            >
              {HERO.subtext}
            </motion.p>

            <motion.div
              {...fade(0.2)}
              className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <ButtonLink
                href={HERO.primaryCta.href}
                variant="primary"
                className="w-full sm:w-auto"
              >
                {HERO.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={HERO.secondaryCta.href}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {HERO.secondaryCta.label}
              </ButtonLink>
            </motion.div>

            <HeroBadges />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <HeroPipeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
