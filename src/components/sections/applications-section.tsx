"use client";

import { ContentCard, Section } from "@/components/ui/section";
import { APPLICATIONS } from "@/lib/constants";

export function ApplicationsSection() {
  return (
    <Section
      id="applications"
      sectionNumber="04"
      title="Applications"
      titleId="applications-heading"
    >
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {APPLICATIONS.map((application, index) => (
          <ContentCard
            key={application.title}
            title={application.title}
            description={application.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
