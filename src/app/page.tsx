import type { Metadata } from "next";

import { Footer, Navbar } from "@/components";
import {
  HomeAbout,
  HomeApplications,
  HomeContact,
  HomeExplorer,
  HomeFramework,
  HomeHero,
  HomeProblem,
} from "@/components/home";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Teaching AI What Surgeons Know`,
  description:
    "A computational framework for representing surgical knowledge beyond video, enabling surgical AI, simulation and robotics.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HomeHero />
        <HomeProblem />
        <HomeFramework />
        <HomeExplorer />
        <HomeApplications />
        <HomeAbout />
        <HomeContact />
      </main>
      <Footer />
    </>
  );
}
