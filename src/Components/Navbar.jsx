
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { cn } from "../utils/cn";

function Navbar({ className }) { 
  const socials = [
    {
      link: "https://www.linkedin.com/in/karan-ranesha-895428221/", 
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/Ace10079",
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      link: "https://x.com/karan693702441",
      label: "X",
      Icon: SiX,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
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
            <social.Icon className="w-5 h-5 hover:scale-125 transition-all" />
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
