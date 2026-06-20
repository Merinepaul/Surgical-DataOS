"use client";

import { motion } from "framer-motion";

import { HeroNetwork } from "@/components/home/shared";
import { ButtonLink } from "@/components/ui/button";
import { HOMEPAGE } from "@/lib/homepage";
import { fadeUp } from "@/lib/motion";

export function HomeHero() {
  const { hero } = HOMEPAGE;

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <HeroNetwork />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-28 pb-20 lg:px-10 lg:pt-32">
        <motion.h1
          id="home-heading"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {hero.subheading}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <ButtonLink href={hero.primaryCta.href} variant="primary">
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
