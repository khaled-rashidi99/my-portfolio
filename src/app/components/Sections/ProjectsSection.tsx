import ProjectsList from "../Projects/ProjectsList";

export default function ProjectsSection() {
  return (
    <section className="my-20 flex flex-col items-center justify-center gap-10 px-4">
      <h1 className="bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-center text-5xl font-bold text-transparent hover:scale-105 hover:cursor-default">
        Projects
      </h1>
      <p className="mx-auto text-center text-lg text-slate-300">
        I have developed various projects utizilizing the latest technologies
        and frameworks, such as ReactJS, NextJS, TailwindCSS, Material UI, and
        many more. <br />
        Let&apos;s take a dive into my projects!
      </p>
      <ProjectsList />
    </section>
  );
}
