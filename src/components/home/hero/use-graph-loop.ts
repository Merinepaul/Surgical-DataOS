"use client";

import { useEffect, useState } from "react";

import { GRAPH_CONFIG } from "@/components/home/hero/hero-graph-model";

export function useGraphLoop(active = true) {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) % GRAPH_CONFIG.loopMs;
      setT(elapsed / GRAPH_CONFIG.loopMs);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active]);

  return t;
}
