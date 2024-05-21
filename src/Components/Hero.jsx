import React from "react";

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
          <div>
            <h1 className="text-3xl font-bold hover:text-green-400">Contact Me</h1>
            <div className="w-40 h-2 bg-green-500 rounded-full translate-x-2"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full"></div>
          </div>
        </a>
      </div>
      <div>
        <div className="w-72 h-72  space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"> </div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"> </div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
