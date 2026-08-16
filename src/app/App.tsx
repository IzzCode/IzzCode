import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { SummarySection } from "./components/summary-section";
import { OverviewSection } from "./components/overview-section";
import { EducationSection } from "./components/education-section";
import { WorkExperienceSection } from "./components/work-experience-section";
import { PublicationsSection } from "./components/publications-section";
import { SkillsSection } from "./components/skills-section";
import { TimelineSection } from "./components/timeline-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <main>
        <HeroSection />
        <SummarySection />
        <OverviewSection />
        <EducationSection />
        <WorkExperienceSection />
        <PublicationsSection />
        <SkillsSection />
        <TimelineSection />
      </main>
      <Footer />
    </div>
  );
}