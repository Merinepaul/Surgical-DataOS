export const HOMEPAGE = {
  hero: {
    headline: "The Missing Knowledge Layer for Surgical AI",
    subheading:
      "SurgicalDataOS converts operative video into structured computational knowledge for AI, robotics, simulation and research.",
    primaryCta: { label: "Explore the Knowledge Model", href: "#knowledge-model" },
    secondaryCta: {
      label: "Watch 60-second Overview",
      href: "#standards",
    },
  },
  problem: {
    headline: "Why Video Alone Is Not Enough",
    left: {
      title: "Current Surgical AI",
      items: ["Video", "Pixels", "Instrument detection", "Phase recognition"],
    },
    right: {
      title: "SurgicalDataOS",
      items: ["Observation", "Interpretation", "Decision", "Action"],
    },
    conclusion: {
      line1: "Video records what happened.",
      line2: "Knowledge explains why it happened.",
    },
  },
  framework: {
    headline: "The SurgicalDataOS Framework",
    nodes: [
      {
        id: "procedure",
        label: "Procedure",
        description:
          "The complete cataract operation as a structured clinical process.",
      },
      {
        id: "phase",
        label: "Phase",
        description:
          "Major stages of surgery with defined clinical boundaries and transitions.",
      },
      {
        id: "step",
        label: "Step",
        description:
          "Discrete actions within a phase, linked to intent and context.",
      },
      {
        id: "observation",
        label: "Observation",
        description:
          "What the surgeon perceives — anatomy, instruments and operative field.",
      },
      {
        id: "interpretation",
        label: "Interpretation",
        description:
          "Clinical meaning assigned to observations during the procedure.",
      },
      {
        id: "decision",
        label: "Decision",
        description:
          "Choices made in response to interpretation and evolving context.",
      },
      {
        id: "action",
        label: "Action",
        description:
          "Instrument movements and interventions executed as clinical acts.",
      },
      {
        id: "event",
        label: "Event",
        description:
          "Findings, responses and state changes that alter the operative course.",
      },
      {
        id: "outcome",
        label: "Outcome",
        description:
          "The result of actions and events within the structured procedure.",
      },
    ],
  },
  explorer: {
    headline: "Surgical Knowledge Explorer",
    subheading:
      "Progressive representation of clinical knowledge layered over operative video.",
    layers: [
      {
        id: "instrument",
        label: "Instrument",
        hint: "Instrument identity, position and interaction with tissue.",
      },
      {
        id: "anatomy",
        label: "Anatomy",
        hint: "Ocular structures, tissue state and spatial relationships.",
      },
      {
        id: "procedure",
        label: "Procedure",
        hint: "Procedural phase, step sequence and temporal progression.",
      },
      {
        id: "observation",
        label: "Observation",
        hint: "Perceptual inputs that inform intraoperative assessment.",
      },
      {
        id: "decision",
        label: "Decision",
        hint: "Clinical reasoning that determines subsequent action.",
      },
      {
        id: "knowledge",
        label: "Machine-readable knowledge",
        hint: "Structured representation suitable for AI, simulation and research.",
      },
    ],
  },
  applications: {
    headline: "Applications",
    items: [
      {
        title: "Artificial Intelligence",
        description:
          "Structured surgical knowledge enables clinically meaningful training data for computer vision and multimodal AI.",
        icon: "brain" as const,
      },
      {
        title: "Robotic Surgery",
        description:
          "Knowledge representation supports intelligent assistance and future autonomous surgical systems.",
        icon: "bot" as const,
      },
      {
        title: "Surgical Simulation",
        description:
          "Simulation environments that incorporate procedural execution and clinical reasoning.",
        icon: "monitor" as const,
      },
      {
        title: "Surgical Education",
        description:
          "Teaching surgical reasoning alongside technical skill through structured knowledge.",
        icon: "graduation-cap" as const,
      },
      {
        title: "Research",
        description:
          "A common representation framework supporting reproducible ophthalmic research.",
        icon: "microscope" as const,
      },
      {
        title: "Structured Annotation",
        description:
          "Annotation workflows grounded in clinical relationships rather than pixel-level labels alone.",
        icon: "layers" as const,
      },
    ],
  },
  about: {
    headline: "Why SurgicalDataOS?",
    body: "Surgical video captures what occurs during an operation but not the clinical reasoning that governs it. SurgicalDataOS was developed to represent that reasoning — observation, interpretation, decision and action — as structured, machine-readable knowledge for artificial intelligence, robotics, simulation and research.",
  },
  contact: {
    headline: "Contact",
    channels: [
      {
        label: "Collaborate",
        description: "Partnerships with clinical and research institutions.",
        email: "collaborate@surgicaldataos.com",
      },
      {
        label: "Research",
        description: "Academic collaboration and framework evaluation.",
        email: "research@surgicaldataos.com",
      },
      {
        label: "Industry",
        description: "Robotics, device and technology partnerships.",
        email: "industry@surgicaldataos.com",
      },
      {
        label: "General Enquiries",
        description: "All other correspondence.",
        email: "contact@surgicaldataos.com",
      },
    ],
  },
} as const;
