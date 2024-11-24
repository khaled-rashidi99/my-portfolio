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

export const skills = [
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