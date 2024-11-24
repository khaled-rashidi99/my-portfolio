import { FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiMui,
  SiVite,
  SiShadcnui,
} from "react-icons/si";
import SkillCard from "../Skills/SkillCard";
const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    color: "text-cyan-700",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "text-purple-600",
  },
  {
    name: "ReactJS",
    icon: <FaReact />,
    color: "text-blue-500",
  },
  {
    name: "NextJS",
    icon: <RiNextjsFill />,
    color: "text-slate-200",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    color: "text-purple-700",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "text-blue-600",
  },
  {
    name: "Material UI",
    icon: <SiMui />,
    color: "text-blue-600",
  },
  {
    name: "Shadcn UI",
    icon: <SiShadcnui />,
    color: "text-gray-400",
  },
];
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