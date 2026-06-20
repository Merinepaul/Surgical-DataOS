"use client";

import { ProblemComparison } from "@/components/sections/problem-comparison";
import {
  HighlightPanel,
  Section,
  SectionBody,
} from "@/components/ui/section";
import { PROBLEM_STATEMENT } from "@/lib/constants";

export function ProblemSection() {
  return (
    <Section
      id="problem"
      sectionNumber="01"
      title="Why Surgical Video Alone Is Not Enough"
      titleId="problem-heading"
    >
      <SectionBody>
        <p>
          Modern computer vision systems can identify anatomy, instruments and
          surgical phases from operative video. These capabilities describe what
          is visible during surgery but do not explicitly represent the clinical
          knowledge that guides an experienced surgeon.
        </p>
        <p>
          Every surgical action is influenced by anatomical observations,
          clinical interpretation and continuous decision-making. Without
          representing these relationships, a significant part of surgical
          knowledge remains implicit.
        </p>
        <p>
          The SurgicalDataOS Framework addresses this gap by transforming
          surgical video into structured clinical knowledge.
        </p>
      </SectionBody>

      <ProblemComparison />

      <HighlightPanel>{PROBLEM_STATEMENT}</HighlightPanel>
    </Section>
  );
}
