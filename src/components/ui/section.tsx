"use client";

import { motion } from "framer-motion";

import { HeroGrid } from "@/components/hero/hero-grid";
import { PAGE_MAX_WIDTH } from "@/lib/constants";
import { fadeInView, fadeUp } from "@/lib/motion";
import { cn } from "@/lib";

type SectionProps = {
  id?: string;
  label?: string;
  sectionNumber?: string;
  title?: string;
  titleId?: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
};

export function Section({
  id,
  label,
  sectionNumber,
  title,
  titleId,
  children,
  className,
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        "relative",
        bordered && "border-t border-border",
        className,
      )}
    >
      <HeroGrid />
      <div
        style={{ maxWidth: PAGE_MAX_WIDTH }}
        className="relative mx-auto px-6 py-32 lg:px-10 lg:py-40"
      >
        {(sectionNumber || label) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={fadeInView}
            variants={fadeUp}
          >
            {sectionNumber && (
              <p className="text-[11px] tracking-[0.24em] text-muted">
                {sectionNumber}
              </p>
            )}
            {label && (
              <p className="mt-1 text-[11px] font-medium tracking-[0.24em] text-accent">
                {label}
              </p>
            )}
          </motion.div>
        )}

        {title && (
          <motion.h2
            id={titleId}
            initial="hidden"
            whileInView="visible"
            viewport={fadeInView}
            variants={fadeUp}
            className="mt-8 max-w-3xl text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-[2rem]"
          >
            {title}
          </motion.h2>
        )}

        {children}
      </div>
    </section>
  );
}

export function SectionBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={fadeInView}
      variants={fadeUp}
      className={cn(
        "mt-10 max-w-[720px] space-y-6 text-[15px] leading-[1.8] text-muted",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function HighlightPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.blockquote
      initial="hidden"
      whileInView="visible"
      viewport={fadeInView}
      variants={fadeUp}
      className={cn(
        "mt-20 max-w-3xl border-l border-accent/60 pl-6 lg:mt-24",
        className,
      )}
    >
      <p className="text-[15px] leading-[1.75] text-foreground/90 sm:text-base">
        {children}
      </p>
    </motion.blockquote>
  );
}

export function ContentCard({
  title,
  description,
  index = 0,
}: {
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={fadeInView}
      variants={fadeUp}
      transition={{ delay: index * 0.06 }}
      className="border border-border bg-white/[0.01] p-6 sm:p-7"
    >
      <h3 className="text-[13px] font-medium tracking-wide text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-[14px] leading-[1.75] text-muted">{description}</p>
    </motion.article>
  );
}

export function SpecCard({
  number,
  title,
  items,
  index = 0,
}: {
  number: string;
  title: string;
  items: readonly string[];
  index?: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={fadeInView}
      variants={fadeUp}
      transition={{ delay: index * 0.06 }}
      className="border border-border bg-white/[0.01] p-6 sm:p-7"
    >
      <p className="text-[10px] tracking-[0.2em] text-muted">
        Standard {number}
      </p>
      <h3 className="mt-3 text-[13px] font-medium tracking-wide text-foreground">
        {title}
      </h3>
      <ul className="mt-5 space-y-2">
        {items.map((item) => (
          <li
            key={item.trim()}
            className="flex items-start text-[13px] leading-snug text-muted"
          >
            <span aria-hidden className="mr-2.5 mt-[9px] h-px w-2.5 shrink-0 bg-white/20" />
            {item.trim()}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
