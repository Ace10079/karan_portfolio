import React from 'react';
import Title from './Title';
import { HoverEffect } from './ui/card-hover-effect';
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiBlender,
  SiUnity,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiAngular,
  SiMongodb,
  SiExpress,
  Si1Password
} from 'react-icons/si';

function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Java",
      Icon: Si1Password,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "Blender",
      Icon: SiBlender,
    },
    {
      text: "Unity",
      Icon: SiUnity,
    },
    {
      text: "TailwindCSS",
      Icon: SiTailwindcss,
    },
    {
      text: "Bootstrap",
      Icon: SiBootstrap,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "AngularJS",
      Icon: SiAngular,
    },
    {
      text: "Express.js",
      Icon: SiExpress,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    }
  ];

  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title
        text='Skills' className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect
        items={skills}
      />
    </div>
  );
}

export default Skills;
