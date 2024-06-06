import React from "react";
import Title from "./Title";
import { cn } from "../utils/cn";
import DirectionAwareHover from "./ui/direction-aware-hover";
import {
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiUnity,
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Calculator",
      tech: [SiReact, SiTailwindcss, SiBootstrap, SiJavascript],
      link: "https://karancalculator.netlify.app/",
      cover: "/calculator.png",
      background: "bg-indigo-500",
    },
    {
      title: "EduScan",
      tech: [SiReact, SiTailwindcss, SiBootstrap, SiUnity],
      link: "https://ace10079.github.io/EduScan/",
      cover: "/eduscan.png",
      background: "bg-green-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-2">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <a href={project.link} key={index}>
              <div className={cn("p-1 lg:p-5 round-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="lg:text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </a>
          );
        })}
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-2xl font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-5 ring-1 ring-white/10 ">
            <span>Show More</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
    </div>
  );
}

export default Projects;
