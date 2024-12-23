import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projects";
export default function ProjectsList() {
  return (
    <div className="container mx-auto my-20 grid grid-cols-1 place-items-center gap-20 lg:grid-cols-2 xl:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          cardName={project.cardName}
          cardBackground={project.cardBackground}
          cardDetails={project.cardDetails}
          cardStack={project.cardStack}
          projectGit={project.projectGit}
          projectDemo={project.projectDemo}
          projectImages={project.projectImages}
        />
      ))}
    </div>
  );
}
