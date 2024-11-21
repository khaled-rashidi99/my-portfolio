import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        className="contatiner mx-auto min-h-[80dvh] px-12 py-12 lg:px-24 lg:py-40"
        id="about"
      >
        <HeroSection />
      </div>
      <div className="text-white" id="skills">
        <SkillsSection />
      </div>
    </main>
  );
}
