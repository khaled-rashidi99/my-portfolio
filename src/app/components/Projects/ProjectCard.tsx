import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import React from "react";
import ProjectCardButtons from "./ProjectCardButtons";

interface ProjectCardProps {
  cardName: string;
  cardBackground: string;
  cardDetails: string;
  cardStack: string;
  projectGit: string;
  projectDemo: string;
  projectImages: string[];
}
export default function ProjectCard(cardProps: ProjectCardProps) {
  return (
    <Card
      className="group relative flex aspect-video cursor-default items-center justify-center rounded-lg border-none text-center shadow-ring transition-all duration-700 hover:scale-95 hover:rounded-xl hover:bg-opacity-90 max-sm:h-[400px] max-sm:w-[350px] sm:h-[400px] sm:w-[500px] md:h-[400px] md:w-[600px] lg:h-[400px] lg:w-[400px] xl:h-[350px] xl:w-[570px]"
      style={{
        backgroundImage: `url(${cardProps.cardBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.8,
      }}
    >
      <CardContent>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:rounded-xl group-hover:bg-black group-hover:opacity-85" />
        <CardTitle className="absolute inset-0 z-10 mt-2 flex items-start justify-center p-4 font-serif text-4xl font-bold text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          {cardProps.cardName}
        </CardTitle>
        <CardDescription className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-sm font-bold text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          {cardProps.cardDetails}
          <br />
          <p className="mt-6 overflow-hidden rounded-xl border-[1px] border-white bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text p-2 text-transparent">
            {cardProps.cardStack}
          </p>
        </CardDescription>

        <CardFooter className="absolute inset-0 z-10 flex items-end justify-between p-6 font-bold text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <ProjectCardButtons
            projectGit={cardProps.projectGit}
            projectDemo={cardProps.projectDemo}
            projectImages={cardProps.projectImages}
          />
        </CardFooter>
      </CardContent>
    </Card>
  );
}
