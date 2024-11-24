"use client";
import { TypeAnimation } from "react-type-animation";

export default function ProjectsHero() {
  return (
    <div className="mx-auto max-w-[80%] p-4 text-center text-lg text-slate-300">
      <TypeAnimation
        sequence={[
          "Welcome to my projects page!\n\n" +
            "These are the projects that I have worked on.\n\n" +
            "I have a strong passion for coding and have always been fascinated by the world of technology.\n\n" +
            "I am always eager to learn new things and contribute to the success of others.",
        ]}
        wrapper="p"
        speed={50}
        style={{
          display: "inline-block",
          whiteSpace: "pre-line",
          lineHeight: "1.2",
        }}
        repeat={0}
        cursor={false}
      />
    </div>
  );
}
