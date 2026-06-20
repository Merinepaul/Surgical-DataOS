export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const fadeUpReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const fadeInView = {
  once: true,
  margin: "-40px" as const,
};

export function motionVariants(reducedMotion: boolean) {
  return reducedMotion ? fadeUpReduced : fadeUp;
}
