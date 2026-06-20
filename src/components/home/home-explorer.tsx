"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { SectionShell } from "@/components/home/shared";
import { HOMEPAGE } from "@/lib/homepage";
import { fadeInView, fadeUp } from "@/lib/motion";
import { cn } from "@/lib";

export function HomeExplorer() {
  const { explorer } = HOMEPAGE;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.5 - rect.top) / (rect.height * 0.7)),
      );
      const layer = Math.min(
        explorer.layers.length - 1,
        Math.floor(progress * explorer.layers.length),
      );
      setActiveLayer(layer);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isInView, explorer.layers.length]);

  return (
    <SectionShell id="standards" className="!py-0">
      <div ref={ref} className="py-28 lg:py-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={fadeInView}
          variants={fadeUp}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            {explorer.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            {explorer.subheading}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div className="relative aspect-video overflow-hidden border border-border bg-[#060910]">
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full border border-white/10" />
                <p className="mt-6 text-[11px] tracking-[0.18em] text-muted uppercase">
                  Cataract surgery video
                </p>
                <p className="mt-1 text-[11px] text-muted/60">Placeholder</p>
              </div>
            </div>

            {explorer.layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-700"
                style={{
                  backgroundColor:
                    index === 0
                      ? "transparent"
                      : `rgba(59, 130, 246, ${0.02 + index * 0.012})`,
                  borderColor:
                    activeLayer >= index && index > 0
                      ? "rgba(255,255,255,0.06)"
                      : "transparent",
                }}
                animate={{ opacity: activeLayer >= index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {index > 0 && activeLayer >= index && (
                  <div className="absolute left-4 top-4 border border-white/10 bg-background/80 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-[10px] tracking-[0.16em] text-foreground/80 uppercase">
                      {layer.label}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}

            <video
              className="absolute inset-0 h-full w-full object-cover opacity-0"
              muted
              playsInline
              aria-label="Cataract surgery operative video"
            />
          </div>

          <div className="flex flex-col gap-2">
            {explorer.layers.map((layer, index) => (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayer(index)}
                className={cn(
                  "border px-4 py-3 text-left transition-colors duration-200",
                  activeLayer >= index
                    ? "border-border bg-white/[0.02] text-foreground"
                    : "border-transparent text-muted/50",
                  activeLayer === index && "border-accent/30 bg-accent/[0.04]",
                )}
              >
                <span className="text-[11px] tracking-[0.14em] uppercase">
                  Layer {index + 1}
                </span>
                <p className="mt-1 text-[13px] font-medium">{layer.label}</p>
                {activeLayer === index && (
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">
                    {layer.hint}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
