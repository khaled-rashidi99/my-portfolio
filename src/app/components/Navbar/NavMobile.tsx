import React from "react";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./NavLinks";
import { links, socialLinks } from "../../constants/links";

export default function NavMobile() {
  return (
    <div className="flex animate-[fadeIn_0.3s_ease-in-out] flex-col items-center justify-center rounded-b-lg bg-gradient-to-tr from-purple-500 to-blue-500 opacity-90 lg:hidden">
      <ul className="mt-0 flex md:flex-row md:space-x-8 md:p-0">
        {links.map((link, index) => (
          <li
            key={index}
            className="animate-delay-[index*100ms] animate-[fadeIn_0.3s_ease-in-out]"
          >
            <NavLinks href={link.href} title={link.title} />
          </li>
        ))}
      </ul>
      <ul className="flex space-x-4 p-4">
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className="animate-delay-[index*100ms] animate-[fadeIn_0.3s_ease-in-out]"
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
