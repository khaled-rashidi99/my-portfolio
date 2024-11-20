import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        className="contatiner min-h-[100dvh] mx-auto px-12 py-12 lg:px-24 lg:py-40"
        id="about"
      >
        <HeroSection />
      </div>
      <div className="text-white min-h-[100dvh]" id="skills">
        <SkillsSection />
      </div>
    </main>
  );
}
