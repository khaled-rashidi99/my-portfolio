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
import SkillCard from "./Skills/SkillCard";
const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={"8rem"} />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <FaCss3 size={"8rem"} />,
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={"7rem"} />,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={"7rem"} />,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size={"8rem"} />,
    color: "text-cyan-700",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={"8rem"} />,
    color: "text-purple-600",
  },
  {
    name: "ReactJS",
    icon: <FaReact size={"8rem"} />,
    color: "text-blue-500",
  },
  {
    name: "NextJS",
    icon: <RiNextjsFill size={"8rem"} />,
    color: "text-slate-200",
  },
  {
    name: "Vite",
    icon: <SiVite size={"7rem"} />,
    color: "text-purple-700",
  },
  {
    name: "Redux",
    icon: <SiRedux size={"7rem"} />,
    color: "text-blue-600",
  },
  {
    name: "Material UI",
    icon: <SiMui size={"7rem"} />,
    color: "text-blue-600",
  },
  {
    name: "Shadcn UI",
    icon: <SiShadcnui size={"7rem"} />,
    color: "text-gray-400",
  },
];
export default function SkillsSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-20 px-12 lg:px-24 lg:py-40">
      <h1 className="text-center text-5xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-105 hover:cursor-default">
        Skills
      </h1>
      <p className="text-slate-300 text-lg">
        Throughout my dedicated journey, I have dealt with various programming
        languages, tech stacks, and technologies. Here are the ones that stand
        out:
      </p>
      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
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
