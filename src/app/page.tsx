import HeroSection from "./components/Sections/HeroSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ContactSection from "./components/Sections/ContactSection";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col">
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
      <div className="container mx-auto min-h-[100dvh] text-white" id="contact">
        <ContactSection />
      </div>
      <ScrollToTop />
    </main>
  );
}
