"use client";

import {
  HighlightPanel,
  Section,
  SectionBody,
  SpecCard,
} from "@/components/ui/section";
import {
  REPRESENTATION_STANDARDS,
  STANDARDS_STATEMENT,
} from "@/lib/constants";

export function StandardsSection() {
  return (
    <Section
      id="standards"
      sectionNumber="03"
      title="Representation Standards"
      titleId="standards-heading"
    >
      <SectionBody>
        <p>
          The framework is implemented through complementary representation
          standards that transform cataract surgery into structured knowledge.
        </p>
      </SectionBody>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:gap-5">
        {REPRESENTATION_STANDARDS.map((standard, index) => (
          <SpecCard
            key={standard.number}
            number={standard.number}
            title={standard.title}
            items={standard.items}
            index={index}
          />
        ))}
      </div>

      <HighlightPanel>{STANDARDS_STATEMENT}</HighlightPanel>
    </Section>
  );
}
