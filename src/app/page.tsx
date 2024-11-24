import HeroSection from "./components/Sections/HeroSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import SkillsSection from "./components/Sections/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col gap-10">
      <div className="container mx-auto min-h-[100dvh]" id="about">
        <HeroSection />
      </div>
      <div className="container mx-auto min-h-[100dvh] text-white" id="skills">
        <SkillsSection />
      </div>
      <div
        className="container mx-auto min-h-[100dvh] text-white"
        id="projects"
      >
        <ProjectsSection />
      </div>
    </main>
  );
}
