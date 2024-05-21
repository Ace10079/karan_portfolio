import { Link } from "react-router-dom"; // Correctly import Link from next/link
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

function Navbar() {
  const socials = [
    {
      link: "", // Add appropriate link
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "", // Add appropriate link
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      link: "", // Add appropriate link
      label: "X",
      Icon: SiX,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-red-500 -rotate-2">
        Karan Ranesha
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
          >
            <social.Icon className="w-5 h-5 hover:scale-125 transition-all"/>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
