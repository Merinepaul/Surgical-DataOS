"use client";

import { KnowledgeModelDiagram } from "@/components/sections/knowledge-model-diagram";
import {
  ContentCard,
  HighlightPanel,
  Section,
  SectionBody,
} from "@/components/ui/section";
import {
  KNOWLEDGE_DOMAINS,
  KNOWLEDGE_MODEL_STATEMENT,
} from "@/lib/constants";

export function KnowledgeModelSection() {
  return (
    <Section
      id="knowledge-model"
      sectionNumber="02"
      title="The SurgicalDataOS Knowledge Model"
      titleId="knowledge-model-heading"
    >
      <SectionBody>
        <p>
          The SurgicalDataOS Knowledge Model separates how surgery is performed
          from how surgical knowledge is represented.
        </p>
        <p>
          Rather than describing only visible events, it represents the clinical
          relationships that influence every stage of an operation.
        </p>
      </SectionBody>

      <KnowledgeModelDiagram />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {KNOWLEDGE_DOMAINS.map((domain, index) => (
          <ContentCard
            key={domain.title}
            title={domain.title}
            description={domain.description}
            index={index}
          />
        ))}
      </div>

      <HighlightPanel>{KNOWLEDGE_MODEL_STATEMENT}</HighlightPanel>
    </Section>
  );
}
