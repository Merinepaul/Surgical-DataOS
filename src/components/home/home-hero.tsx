"use client";

import { motion } from "framer-motion";

import { HeroBadges } from "@/components/home/hero/hero-badges";
import { HERO } from "@/components/home/hero/hero-content";
import { HeroKnowledgeGraph } from "@/components/home/hero/hero-knowledge-graph";
import { ButtonLink } from "@/components/ui/button";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.05]"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <line x1="18" y1="28" x2="42" y2="22" stroke="rgba(255,255,255,0.5)" strokeWidth="0.08" />
        <line x1="42" y1="22" x2="68" y2="34" stroke="rgba(255,255,255,0.5)" strokeWidth="0.08" />
        <line x1="68" y1="34" x2="54" y2="58" stroke="rgba(255,255,255,0.5)" strokeWidth="0.08" />
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

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-32 lg:px-10 lg:py-36">
        <div className="grid items-center gap-20 lg:grid-cols-[42%_58%] lg:gap-16 xl:gap-20">
          <div className="max-w-md lg:pt-4">
            <motion.h1
              id="home-heading"
              {...fade(0)}
              className="text-[2rem] font-semibold leading-[1.14] tracking-[-0.028em] text-white sm:text-[2.35rem] lg:text-[2.65rem]"
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              {...fade(0.08)}
              className="mt-10 max-w-[440px] text-[15px] leading-[1.72] text-zinc-300/95 sm:text-[16px] sm:leading-[1.78]"
            >
              {HERO.subtext}
            </motion.p>

            <motion.div
              {...fade(0.16)}
              className="mt-12 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
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
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex min-h-[360px] items-center justify-center lg:min-h-[420px] lg:justify-end"
          >
            <HeroKnowledgeGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
