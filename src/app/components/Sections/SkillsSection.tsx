import { skills } from "../../constants/skills";
import SkillCard from "../Skills/SkillCard";

export default function SkillsSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-4">
      <h1 className="bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-center text-5xl font-bold text-transparent hover:scale-105 hover:cursor-default">
        Skills
      </h1>
      <p className="text-center text-lg text-slate-300">
        Throughout my dedicated journey, I have dealt with various programming
        languages, tech stacks, and technologies. <br />
        Here are the ones that stand out:
      </p>
      <div className="mt-20 grid grid-cols-3 max-sm:gap-10 sm:gap-12 md:grid-cols-3 md:gap-12 lg:grid-cols-3 lg:gap-16 xl:grid-cols-6 xl:gap-20">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            cardName={skill.name}
            cardIcon={skill.icon}
            iconColor={skill.color}
          />
        ))}
      </div>
    </section>
  );
}
