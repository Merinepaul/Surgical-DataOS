import { Footer, HeroSection, Navbar } from "@/components";
import { AboutSection } from "@/components/sections/about-section";
import { ApplicationsSection } from "@/components/sections/applications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { KnowledgeModelSection } from "@/components/sections/knowledge-model-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { StandardsSection } from "@/components/sections/standards-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <KnowledgeModelSection />
        <StandardsSection />
        <ApplicationsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
