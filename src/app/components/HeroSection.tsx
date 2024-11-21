"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { FaCircleChevronRight, FaArrowDown } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="flex flex-col">
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8 place-self-center">
          <h1 className="mb-4 text-3xl font-extrabold text-white lg:text-5xl">
            <span className="bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              className="mt-2"
              sequence={[
                "Khaled AlRashidi",
                2000,
                "Tech Enthusiastic",
                2000,
                "Front-End Developer",
                2000,
                "Software Engineering Student",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 max-w-4xl text-lg text-[#ADB7BE] lg:text-xl">
            I&apos;m a Front-End Developer based in Damascus, Syria who loves to
            create user-friendly and responsive websites, with a lifelong
            passion for coding.
            <br /> I&apos;m a Software Engineering student at the Syrian Virtual
            University.
            <br />
            Feel free to contact me below!
          </p>

          <div>
            <Button
              variant={"gradient"}
              size={"xl"}
              className="w-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:opacity-80 sm:w-fit"
            >
              Let&apos;s Connect
              <FaCircleChevronRight />
            </Button>
          </div>
        </div>
        <div className="col-span-4 mt-4 place-self-center lg:mt-0">
          <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-[#181818] lg:h-[300px] lg:w-[300px]">
            <Image
              src="/images/heroImage.png"
              alt="Hero"
              width={250}
              height={250}
              // className="animate-bounce"
            />
          </div>
        </div>
      </div>
      <div className="mb-8 flex justify-center max-sm:mt-24 sm:mt-40 md:mt-40 lg:mt-64">
        <Button
          variant={"gradient"}
          className="animate-bounce"
          onClick={() => {
            document
              .getElementById("skills")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FaArrowDown />
        </Button>
      </div>
    </section>
  );
}
