import React from "react";
import Title from "./Title";
import { cn } from "../utils/cn";
import DirectionAwareHover from "./ui/direction-aware-hover";
import { SiBootstrap, SiJavascript, SiReact, SiTailwindcss, SiUnity } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Calculator",
      tech: [SiReact,SiTailwindcss,SiBootstrap,SiJavascript],
      link: "",
      cover: "/calculator.png",
      background: "bg-indigo-500",
    },
    {
      title: "EduScan",
      tech: [SiReact,SiTailwindcss,SiBootstrap,SiUnity],
      link: "",
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
                <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                    <div className="space-y-5">
                  <h1 className="lg:text-2xl font-bold">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon,index)=>{
                        return <Icon className="w-8 h-8" key={index}/>
                    })}
                  </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
