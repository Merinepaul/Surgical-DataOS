export const GRAPH_CONFIG = {
  loopMs: 11000,
  viewBox: { width: 480, height: 400 },
  stroke: "rgba(255,255,255,0.16)",
  strokeActive: "rgba(255,255,255,0.24)",
  nodeFill: "rgba(161,161,170,0.55)",
  nodeHighlight: "rgba(59,130,246,0.75)",
  labelFill: "rgba(244,244,245,0.82)",
  labelMuted: "rgba(161,161,170,0.75)",
  nodeRadius: 4,
} as const;

export type GraphNodeId =
  | "video"
  | "instrument"
  | "tissue"
  | "anatomy"
  | "phase"
  | "event"
  | "action"
  | "decision"
  | "robot";

export type GraphNode = {
  id: GraphNodeId;
  label: string;
  x: number;
  y: number;
  spawnX: number;
  spawnY: number;
  highlight?: boolean;
};

export const GRAPH_NODES: GraphNode[] = [
  {
    id: "video",
    label: "Cataract Video",
    x: 240,
    y: 52,
    spawnX: 240,
    spawnY: 52,
  },
  {
    id: "instrument",
    label: "Instrument",
    x: 92,
    y: 142,
    spawnX: 240,
    spawnY: 88,
  },
  {
    id: "tissue",
    label: "Tissue",
    x: 156,
    y: 162,
    spawnX: 240,
    spawnY: 88,
  },
  {
    id: "anatomy",
    label: "Anatomy",
    x: 240,
    y: 172,
    spawnX: 240,
    spawnY: 88,
  },
  {
    id: "phase",
    label: "Phase",
    x: 324,
    y: 162,
    spawnX: 240,
    spawnY: 88,
  },
  {
    id: "event",
    label: "Event",
    x: 388,
    y: 142,
    spawnX: 240,
    spawnY: 88,
  },
  {
    id: "action",
    label: "Action",
    x: 308,
    y: 206,
    spawnX: 240,
    spawnY: 88,
  },
  {
    id: "decision",
    label: "Decision Layer",
    x: 240,
    y: 278,
    spawnX: 240,
    spawnY: 200,
    highlight: true,
  },
  {
    id: "robot",
    label: "Robot",
    x: 240,
    y: 352,
    spawnX: 240,
    spawnY: 310,
    highlight: true,
  },
];

export const OBSERVATION_IDS: GraphNodeId[] = [
  "instrument",
  "tissue",
  "anatomy",
  "phase",
  "event",
  "action",
];

export type GraphEdge = {
  from: GraphNodeId;
  to: GraphNodeId;
  kind: "video" | "mesh" | "converge" | "output";
};

export const GRAPH_EDGES: GraphEdge[] = [
  { from: "video", to: "instrument", kind: "video" },
  { from: "video", to: "tissue", kind: "video" },
  { from: "video", to: "anatomy", kind: "video" },
  { from: "video", to: "phase", kind: "video" },
  { from: "video", to: "event", kind: "video" },
  { from: "video", to: "action", kind: "video" },
  { from: "instrument", to: "anatomy", kind: "mesh" },
  { from: "tissue", to: "anatomy", kind: "mesh" },
  { from: "anatomy", to: "phase", kind: "mesh" },
  { from: "phase", to: "event", kind: "mesh" },
  { from: "anatomy", to: "action", kind: "mesh" },
  { from: "action", to: "event", kind: "mesh" },
  { from: "instrument", to: "decision", kind: "converge" },
  { from: "tissue", to: "decision", kind: "converge" },
  { from: "anatomy", to: "decision", kind: "converge" },
  { from: "phase", to: "decision", kind: "converge" },
  { from: "event", to: "decision", kind: "converge" },
  { from: "action", to: "decision", kind: "converge" },
  { from: "decision", to: "robot", kind: "output" },
];

export const PARTICLE_EDGES: [GraphNodeId, GraphNodeId][] = [
  ["video", "anatomy"],
  ["anatomy", "decision"],
  ["decision", "robot"],
];

export function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

export function easeOut(t: number) {
  return 1 - (1 - t) ** 3;
}

/** Normalized timeline 0–1 over one loop */
export function graphTimeline(t: number) {
  return {
    video: clamp01(t / 0.06),
    observations: OBSERVATION_IDS.map((_, i) =>
      clamp01((t - (0.08 + i * 0.035)) / 0.06),
    ),
    videoEdges: OBSERVATION_IDS.map((_, i) =>
      clamp01((t - (0.1 + i * 0.03)) / 0.08),
    ),
    meshEdges: clamp01((t - 0.38) / 0.14),
    decision: clamp01((t - 0.52) / 0.1),
    convergeEdges: OBSERVATION_IDS.map((_, i) =>
      clamp01((t - (0.56 + i * 0.025)) / 0.1),
    ),
    robot: clamp01((t - 0.72) / 0.08),
    outputEdge: clamp01((t - 0.76) / 0.08),
    particles: t > 0.68 ? clamp01((t - 0.68) / 0.06) : 0,
    fadeOut: t > 0.94 ? clamp01((t - 0.94) / 0.06) : 0,
  };
}

export function getNodePosition(
  node: GraphNode,
  progress: number,
  kind: "video" | "observation" | "decision" | "robot",
) {
  if (kind === "video") {
    return { x: node.x, y: node.y, opacity: progress };
  }

  const move = easeOut(progress);
  return {
    x: node.spawnX + (node.x - node.spawnX) * move,
    y: node.spawnY + (node.y - node.spawnY) * move,
    opacity: progress,
  };
}

export function getNodeById(id: GraphNodeId) {
  const node = GRAPH_NODES.find((n) => n.id === id);
  if (!node) throw new Error(`Unknown node: ${id}`);
  return node;
}
