import React from "react";
import { Button } from "./ui/moving-border";
import Title from "./Title";

function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0  lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you <br />
          <span className="underline underline-offset-8 decoration-green-500">{"I'm Karan"}</span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            " I code, animate, and solve problems... all while dominating the digital world. "
          }
        </p>
        <a href="mailto:minions10karan@gmail.com" className="inline-block">
         <Title
         text='Contact Me'
         />
        </a>
      </div>
      <div className="relative">
        <div className="w-72 h-72  space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"> </div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"> </div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="glow absolute top-[45%] right-1/2 -z-10">

          </div>
         
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
        <Button borderRadius="0.5rem" className='p-3  font-semibold'>
            <p>💼 Available for work</p>
          </Button>
        </div>
       
      </div>
    </div>
  );
}

export default Hero;
