import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden ">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]   relative">
        <div className="max-w-7xl mx-20 p-5">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      <div className="max-w-7xl mx-20 p-5"><Skills/></div>
    </div>
  );
}

export default App;
