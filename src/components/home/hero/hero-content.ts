export const HERO = {
  headline: "The Missing Knowledge Layer for Surgical AI",
  // Alternatives for A/B testing:
  // "Structured Knowledge for Computational Surgery"
  // "From Surgical Video to Machine-Readable Clinical Knowledge"
  subtext:
    "SurgicalDataOS converts operative video into structured computational knowledge — a representation layer for AI systems, robotics, simulation and reproducible research.",
  primaryCta: {
    label: "Explore the Knowledge Model",
    href: "#knowledge-model",
  },
  secondaryCta: {
    label: "Watch 60-second Overview",
    href: "#standards",
  },
  badges: [
    "Representation Framework",
    "Knowledge Graph",
    "Open Standard",
    "Research Platform",
  ],
  pipeline: [
    "Video",
    "Observation",
    "Knowledge Graph",
    "Reasoning",
    "Decision",
    "Robot",
  ],
} as const;
