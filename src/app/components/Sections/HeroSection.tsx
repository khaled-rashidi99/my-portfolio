"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";
import { FaCircleChevronRight, FaArrowDown, FaDownload } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="flex flex-col py-20">
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-12 lg:py-20">
        <div className="col-span-8 place-self-center px-8">
          <h1 className="mb-4 font-extrabold text-white max-sm:text-xl sm:text-3xl xl:text-5xl">
            <span className="bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              className="mt-2"
              sequence={[
                "Khaled AlRashidi",
                1950,
                "Tech Enthusiastic",
                1950,
                "Front-End Developer",
                1950,
                "Software Engineering Student",
                1950,
              ]}
              wrapper="span"
              speed={30}
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

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant={"gradient"}
              size={"xl"}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:px-10 hover:opacity-80 sm:w-fit"
            >
              Let&apos;s Connect
              <FaCircleChevronRight />
            </Button>
            <Button
              variant={"gradient"}
              size={"xl"}
              className="w-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:px-10 hover:opacity-80 sm:w-fit"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1_VQ2OHKqhkTyRKPXE6ICaCFngBhvLQPu"
                download="Khaled_AlRashidi_Resume.pdf"
              >
                Download CV
              </a>
              <FaDownload />
            </Button>
          </div>
        </div>
        <div className="col-span-4 mt-12 place-self-center lg:mt-0">
          <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-[#181818] lg:h-[300px] lg:w-[300px]">
            <Image
              src="/images/heroImage.png"
              alt="Hero"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          variant={"gradient"}
          className="my-20 h-10 w-10 animate-bounce"
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
