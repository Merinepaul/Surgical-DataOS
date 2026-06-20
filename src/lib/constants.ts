export const PAGE_MAX_WIDTH = "1400px";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "The Problem", href: "#problem" },
  { label: "Knowledge Model", href: "#knowledge-model" },
  { label: "Representation Standards", href: "#standards" },
  { label: "Applications", href: "#applications" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const PROBLEM_COLUMNS = [
  {
    id: "video",
    title: "SURGICAL VIDEO",
    items: [
      "Visible Anatomy",
      "Instrument Movement",
      "Procedural Sequence",
      "Timing",
    ],
    accent: false,
  },
  {
    id: "missing",
    title: "MISSING KNOWLEDGE",
    items: [
      "Clinical Interpretation",
      "Decision Making",
      "Context",
      "Intent",
    ],
    accent: false,
  },
  {
    id: "framework",
    title: "SURGICALDATAOS",
    items: [
      "Structured Knowledge",
      "Clinical Relationships",
      "Knowledge Model",
      "Validated Dataset",
    ],
    accent: true,
  },
] as const;

export const PROBLEM_STATEMENT =
  "A surgical video records events. SurgicalDataOS represents the knowledge that gives those events clinical meaning.";

export const KNOWLEDGE_DOMAINS = [
  {
    title: "Anatomy",
    description:
      "Represents ocular structures, tissue characteristics and anatomical state throughout surgery.",
  },
  {
    title: "Instruments",
    description:
      "Represents instrument identity, surgical function, activity and interaction with anatomy.",
  },
  {
    title: "Procedure",
    description:
      "Represents procedural stages, transitions and temporal progression.",
  },
  {
    title: "Clinical Events",
    description:
      "Represents findings, complications, surgical responses and evolving clinical context.",
  },
] as const;

export const KNOWLEDGE_MODEL_STATEMENT =
  "The SurgicalDataOS Knowledge Model represents not only what occurred during surgery, but also the clinical context in which it occurred.";

export const REPRESENTATION_STANDARDS = [
  {
    number: "01",
    title: "Anatomical Representation",
    items: [
      "Identity",
      "State",
      "Tissue Characteristics",
      "Spatial Relationships",
    ],
  },
  {
    number: "02",
    title: "Instrument Representation",
    items: [
      "Identity",
      "Function",
      "Activity",
      "Instrument–Anatomy Interaction",
      "Operational State",
    ],
  },
  {
    number: "03",
    title: "Procedural Representation",
    items: [
      "Surgical Stages",
      "Procedural States",
      "Stage Transitions",
      "Planned Variations",
      "Unplanned Events",
    ],
  },
  {
    number: "04",
    title: "Clinical Event Representation",
    items: [
      "Pre-existing Conditions",
      "Intraoperative Findings",
      "Complications",
      "Surgical Responses",
      "Event Relationships",
    ],
  },
] as const;

export const STANDARDS_STATEMENT =
  "Together these standards form a unified knowledge model supporting consistent datasets for AI, robotics, simulation and research.";

export const APPLICATIONS = [
  {
    title: "Artificial Intelligence",
    description:
      "Clinically meaningful datasets for computer vision, multimodal AI and surgical reasoning.",
  },
  {
    title: "Robotics Cataract Surgery",
    description:
      "Knowledge representation supporting intelligent assistance and future autonomous surgical systems.",
  },
  {
    title: "Simulation",
    description:
      "Simulation environments incorporating both procedural execution and clinical reasoning.",
  },
  {
    title: "Surgical Education",
    description:
      "Teaching surgical reasoning alongside technical skill.",
  },
  {
    title: "Research",
    description:
      "A common representation framework supporting reproducible ophthalmic research.",
  },
] as const;
