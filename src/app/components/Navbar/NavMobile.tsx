import React from "react";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./NavLinks";
import { links, socialLinks } from "./Navbar";

export default function NavMobile() {
  return (
    <div
      className="lg:hidden flex flex-col items-center justify-center bg-gradient-to-tr from-purple-500 to-blue-500 opacity-90 rounded-b-lg 
      animate-[fadeIn_0.3s_ease-in-out]"
    >
      <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
        {links.map((link, index) => (
          <li
            key={index}
            className="animate-[fadeIn_0.3s_ease-in-out] animate-delay-[index*100ms]"
          >
            <NavLinks href={link.href} title={link.title} />
          </li>
        ))}
      </ul>
      <ul className="flex space-x-4 p-4">
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className="animate-[fadeIn_0.3s_ease-in-out] animate-delay-[index*100ms]"
          >
            <SocialLinks
              href={link.href}
              icon={link.icon}
              className={link.className}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
