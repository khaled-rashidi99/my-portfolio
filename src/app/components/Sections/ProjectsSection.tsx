import Link from "next/link";
import { Button } from "../ui/button";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Card } from "../ui/card";

export default function ProjectsSection() {
  return (
    <section className="my-20 flex flex-col items-center justify-center gap-10 px-4">
      <h1 className="bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-center text-5xl font-bold text-transparent hover:scale-105 hover:cursor-default">
        Projects
      </h1>
      <p className="mx-auto text-center text-lg text-slate-300">
        I have developed various projects utizilizing the latest technologies
        and frameworks, such as ReactJS, NextJS, TailwindCSS, Material UI, and
        many more.
      </p>
      <p className="mx-auto text-center text-lg text-slate-300">
        Let&apos;s take a dive into my projects!
      </p>
      <div className="mx-10 my-16 transition-all duration-300 hover:scale-105 hover:opacity-80">
        <Link
          href={"/projects"}
          className="flex flex-row items-center justify-center transition-all duration-300 max-sm:gap-6 hover:max-sm:gap-8 sm:gap-10 hover:sm:gap-14 hover:md:gap-16"
        >
          <Card
            className="rounded-full bg-no-repeat max-sm:h-32 max-sm:w-32 sm:h-44 sm:w-44 md:h-52 md:w-52"
            style={{
              backgroundImage: `url(/images/coding-img.jpeg)`,
              backgroundSize: "cover",
            }}
          ></Card>

          <Button variant={"gradient"} size={"xl"} className="px-6 py-3">
            View Projects
            <BsArrowUpRightCircle />
          </Button>
        </Link>
      </div>
    </section>
  );
}
