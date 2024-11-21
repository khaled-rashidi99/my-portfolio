"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { NavLinks, SocialLinks } from "./NavLinks";
import {
  FaLinkedin,
  FaTelegram,
  FaGithub,
  FaEnvelope,
  FaBars,
} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Button } from "../ui/button";
import NavMobile from "./NavMobile";

export const links = [
  { href: "#about", title: "About" },
  { href: "#skills", title: "Skills" },
  { href: "/projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

export const socialLinks = [
  {
    href: "https://github.com/khaled-rashidi99",
    title: "Github",
    icon: <FaGithub size={30} />,
    className:
      "text-white hover:text-slate-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3",
  },
  {
    href: "https://www.linkedin.com/in/khaled-al-rashidi/",
    title: "Linkedin",
    icon: <FaLinkedin size={30} />,
    className:
      "text-white hover:text-blue-800 transition-all duration-300 transform hover:scale-110 hover:rotate-3",
  },
  {
    href: "https://t.me/KhaledAlRashidi",
    title: "Telegram",
    icon: <FaTelegram size={30} />,
    className:
      "text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3",
  },
  {
    href: "mailto:khaled.rashidi99@outlook.com",
    title: "Email",
    icon: <FaEnvelope size={30} />,
    className:
      "text-white hover:text-cyan-800 transition-all duration-300 transform hover:scale-110 hover:rotate-3",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="mx-auto flex flex-wrap items-center justify-between bg-gradient-to-br from-purple-500 to-blue-500 py-6 opacity-90 max-sm:px-10 sm:px-12 md:px-12 lg:rounded-b-lg lg:px-12">
        <Link
          href="/"
          className="text-2xl font-semibold text-white transition-all duration-300 hover:scale-95 hover:opacity-90 md:text-3xl"
        >
          Khaled AlRashidi
        </Link>
        <div className="mobile-menu block lg:hidden">
          {isOpen ? (
            <Button
              size={"icon"}
              variant={"transparent"}
              onClick={() => setIsOpen(false)}
              className="border"
            >
              <IoMdClose />
            </Button>
          ) : (
            <Button
              size={"icon"}
              variant={"transparent"}
              onClick={() => setIsOpen(true)}
              className="border"
            >
              <FaBars />
            </Button>
          )}
        </div>
        <div className="menu hidden lg:block lg:w-auto">
          <ul className="mt-0 flex p-4 lg:flex-row lg:space-x-8 lg:p-0">
            {links.map((link, index) => (
              <li key={index}>
                <NavLinks href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="menu hidden lg:block lg:w-auto">
          <ul className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <SocialLinks
                  href={link.href}
                  icon={link.icon}
                  className={link.className}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && <NavMobile />}
    </nav>
  );
}
