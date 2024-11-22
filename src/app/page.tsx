import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-sm:gap-44">
      <div
        className="contatiner mx-auto my-10 h-[calc(100dvh-84px)] px-12 py-12 lg:px-24 lg:py-40"
        id="about"
      >
        <HeroSection />
      </div>
      <div
        className="container mx-auto h-screen text-white max-sm:my-20 sm:my-16 md:my-14"
        id="skills"
      >
        <SkillsSection />
      </div>
    </main>
  );
}
