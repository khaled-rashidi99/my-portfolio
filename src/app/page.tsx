import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="contatiner mx-auto px-12 py-12 lg:px-24 lg:py-24">
        <HeroSection />
      </div>
    </main>
  );
}
