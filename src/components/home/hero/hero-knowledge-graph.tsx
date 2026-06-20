"use client";

import { motion } from "framer-motion";

import {
  GRAPH_CONFIG,
  GRAPH_EDGES,
  GRAPH_NODES,
  OBSERVATION_IDS,
  PARTICLE_EDGES,
  getNodePosition,
  graphTimeline,
  type GraphNode,
} from "@/components/home/hero/hero-graph-model";
import { useGraphLoop } from "@/components/home/hero/use-graph-loop";
import { useReducedMotion } from "@/hooks";

function GraphEdgeLine({
  x1,
  y1,
  x2,
  y2,
  progress,
  highlight,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  progress: number;
  highlight?: boolean;
}) {
  if (progress <= 0) return null;

  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={highlight ? GRAPH_CONFIG.strokeActive : GRAPH_CONFIG.stroke}
      strokeWidth={1}
      strokeDasharray={`${progress * 1000} 1000`}
      opacity={0.35 + progress * 0.55}
    />
  );
}

function GraphNodeVisual({
  node,
  x,
  y,
  opacity,
  labelOpacity,
}: {
  node: GraphNode;
  x: number;
  y: number;
  opacity: number;
  labelOpacity: number;
}) {
  if (opacity <= 0) return null;

  const fill = node.highlight
    ? GRAPH_CONFIG.nodeHighlight
    : GRAPH_CONFIG.nodeFill;

  return (
    <g opacity={opacity}>
      <circle cx={x} cy={y} r={GRAPH_CONFIG.nodeRadius} fill={fill} />
      {node.highlight && (
        <circle
          cx={x}
          cy={y}
          r={GRAPH_CONFIG.nodeRadius + 6}
          fill="none"
          stroke="rgba(59,130,246,0.15)"
          strokeWidth={1}
        />
      )}
      <text
        x={x}
        y={y + 18}
        textAnchor="middle"
        fill={node.highlight ? GRAPH_CONFIG.labelFill : GRAPH_CONFIG.labelMuted}
        fontSize={10}
        fontFamily="var(--font-inter), system-ui, sans-serif"
        letterSpacing="0.06em"
        opacity={labelOpacity}
      >
        {node.label}
      </text>
    </g>
  );
}

function GraphParticle({
  x1,
  y1,
  x2,
  y2,
  offset,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  offset: number;
}) {
  const cx = x1 + (x2 - x1) * offset;
  const cy = y1 + (y2 - y1) * offset;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={1.5}
      fill="rgba(255,255,255,0.45)"
      opacity={0.7}
    />
  );
}

export function HeroKnowledgeGraph() {
  const reducedMotion = useReducedMotion();
  const t = useGraphLoop(!reducedMotion);
  const timeline = graphTimeline(reducedMotion ? 0.82 : t);
  const masterOpacity = 1 - timeline.fadeOut * 0.85;

  const nodeMap = new Map(
    GRAPH_NODES.map((node) => {
      if (node.id === "video") {
        const pos = getNodePosition(node, timeline.video, "video");
        return [node.id, { ...node, ...pos, labelOpacity: timeline.video }];
      }
      if (OBSERVATION_IDS.includes(node.id)) {
        const idx = OBSERVATION_IDS.indexOf(node.id);
        const progress = timeline.observations[idx] ?? 0;
        const pos = getNodePosition(node, progress, "observation");
        return [node.id, { ...node, ...pos, labelOpacity: progress }];
      }
      if (node.id === "decision") {
        const pos = getNodePosition(node, timeline.decision, "decision");
        return [node.id, { ...node, ...pos, labelOpacity: timeline.decision }];
      }
      if (node.id === "robot") {
        const pos = getNodePosition(node, timeline.robot, "robot");
        return [node.id, { ...node, ...pos, labelOpacity: timeline.robot }];
      }
      return [node.id, { ...node, x: node.x, y: node.y, opacity: 0, labelOpacity: 0 }];
    }),
  );

  const resolve = (id: (typeof GRAPH_NODES)[number]["id"]) => nodeMap.get(id)!;

  return (
    <figure
      className="relative w-full"
      aria-label="Animated knowledge graph converting cataract video into structured surgical knowledge"
    >
      <svg
        viewBox={`0 0 ${GRAPH_CONFIG.viewBox.width} ${GRAPH_CONFIG.viewBox.height}`}
        className="mx-auto h-auto w-full max-w-[520px] lg:max-w-none"
        role="img"
        opacity={masterOpacity}
      >
        {GRAPH_EDGES.map((edge) => {
          const from = resolve(edge.from);
          const to = resolve(edge.to);

          let progress = 0;
          if (edge.kind === "video") {
            const idx = OBSERVATION_IDS.indexOf(edge.to);
            progress = timeline.videoEdges[idx] ?? 0;
          } else if (edge.kind === "mesh") {
            progress = timeline.meshEdges;
          } else if (edge.kind === "converge") {
            const idx = OBSERVATION_IDS.indexOf(edge.from);
            progress = timeline.convergeEdges[idx] ?? 0;
          } else {
            progress = timeline.outputEdge;
          }

          return (
            <GraphEdgeLine
              key={`${edge.from}-${edge.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              progress={progress}
              highlight={edge.kind === "output"}
            />
          );
        })}

        {timeline.particles > 0 &&
          PARTICLE_EDGES.map(([fromId, toId], i) => {
            const fromPos = resolve(fromId);
            const toPos = resolve(toId);
            const phase = (t * 3 + i * 0.22) % 1;

            return (
              <GraphParticle
                key={`${fromId}-${toId}`}
                x1={fromPos.x}
                y1={fromPos.y}
                x2={toPos.x}
                y2={toPos.y}
                offset={phase}
              />
            );
          })}

        {GRAPH_NODES.map((node) => {
          const visual = resolve(node.id);
          return (
            <GraphNodeVisual
              key={node.id}
              node={node}
              x={visual.x}
              y={visual.y}
              opacity={visual.opacity}
              labelOpacity={visual.labelOpacity}
            />
          );
        })}
      </svg>
      <figcaption className="sr-only">
        Knowledge graph: cataract video observations converge through a decision
        layer to robotic execution.
      </figcaption>
    </figure>
  );
}
