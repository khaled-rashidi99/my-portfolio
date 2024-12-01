"use client";
import React from "react";
import { FaLinkedin, FaTelegram, FaGithub, FaEnvelope } from "react-icons/fa6";

export const links = [
  { href: "/#about", title: "About" },
  { href: "/#skills", title: "Skills" },
  { href: "/#projects", title: "Projects" },
  { href: "/#contact", title: "Contact" },
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
