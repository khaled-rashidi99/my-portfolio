"use client";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { DialogTitle } from "@radix-ui/react-dialog";

interface ProjectCardButtonsProps {
  projectGit: string;
  projectDemo: string;
  projectImages: string[];
}
export default function ProjectCardButtons(
  buttonsProps: ProjectCardButtonsProps,
) {
  return (
    <div className="absolute inset-0 z-10 flex items-end justify-between p-6 font-bold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <Button
        variant={"gradient"}
        size={"icon"}
        disabled={buttonsProps.projectDemo === ""}
        className="h-10 w-10 transition-all duration-300 hover:scale-110 disabled:opacity-50"
        onClick={() => {
          window.open(`${buttonsProps.projectDemo}`, "_blank");
        }}
      >
        <FaEye />
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"gradient"}
            size={"icon"}
            className="h-10 w-10 transition-all duration-300 hover:scale-110"
          >
            <IoMdPhotos />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[70%] rounded-lg border-[3px] border-slate-300">
          <DialogTitle className="hidden">Project Images</DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
          <Carousel>
            <CarouselContent>
              {buttonsProps.projectImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img
                      src={image}
                      alt={`Project Image ${index + 1}`}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
      <Button
        variant={"gradient"}
        size={"icon"}
        className="h-10 w-10 transition-all duration-300 hover:scale-110"
        disabled={buttonsProps.projectGit === ""}
        onClick={() => {
          window.open(`${buttonsProps.projectGit}`, "_blank");
        }}
      >
        <FaGithub />
      </Button>
    </div>
  );
}
