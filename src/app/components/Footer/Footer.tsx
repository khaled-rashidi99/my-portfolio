"use client";
import React from "react";
import Link from "next/link";
import { links, socialLinks } from "../../constants/links";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="border-t-2 border-gray-300/20 py-8 opacity-90">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-2xl font-semibold text-white transition-all duration-300 hover:scale-95 hover:opacity-90"
              >
                Khaled AlRashidi
              </Link>
              <p className="mt-4 text-sm text-gray-200">
                Front-End Developer passionate about creating innovative web
                solutions and delivering exceptional user experiences.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-200 transition-all duration-300 hover:text-blue-400 hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="mt-4 flex space-x-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={link.className}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-300/20 pt-8 text-center">
            <p className="text-sm text-gray-200">
              Made with ❤️ <br /> © {new Date().getFullYear()} Khaled
              AlRashidi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
