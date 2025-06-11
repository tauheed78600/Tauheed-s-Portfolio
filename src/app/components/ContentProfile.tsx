"use client";

import React, { useState } from 'react';
import About from './AboutSections/About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

export default function ContentProfile() {
  const [tabState, setTabState] = useState("about");
  const pageNumber = 1;
  const [page, setPage] = useState(pageNumber);

  const handleTabClick = (tab: string, pageno:number) => {
    setTabState(tab);
    setPage(pageno);
  }

  return (
    <div className="text-white">
      <div className="flex flex-row items-center justify-between w-full ">
        <div className="font-[Quicksand] text-lg ml-10 whitespace-nowrap">
          {tabState === "about" && page === 1 && <p className='text-3xl font-extrabold'>About Me</p>}
          {tabState === "experience" && page === 2 && <p className='text-3xl font-extrabold'>Experience </p>}
          {tabState === "projects" && page === 3 && <p className='text-3xl font-extrabold'>Projects </p>}
          {tabState === "education" && page === 4 && <p className='text-3xl font-extrabold'>Education </p>}
          {tabState === "contact" && page === 5 && <p className='text-3xl font-extrabold'>Contact </p>}
        </div>
        <div className="w-full md:w-[70%] rounded-tr-[25px] rounded-bl-[25px] bg-gray-700 flex items-center invisible md:visible justify-center shadow-lg transition-all duration-300">
          <div className="text-cyan-200 font-[Quicksand] text-lg font-semibold flex flex-row flex-wrap p-4 gap-4 md:gap-6  w-full justify-center">
            <button
              onClick={()=>handleTabClick("about", 1)}
              className={`cursor-pointer ${tabState === "about" ? "text-yellow-400" : ""}`}>
              About
            </button>
            <button
              onClick={()=>handleTabClick("experience", 2)}
              className={`cursor-pointer ${tabState === "experience" ? "text-yellow-400" : ""}`}>
              Experience
            </button>
            <button
              onClick={()=>handleTabClick("projects", 3)}
              className={`cursor-pointer ${tabState === "projects" ? "text-yellow-400" : ""}`}>
              Projects
            </button>
            <button
              onClick={()=>handleTabClick("education", 4)}
              className={`cursor-pointer ${tabState === "education" ? "text-yellow-400" : ""}`}>
              Education
            </button>
            <button
              onClick={()=>handleTabClick("contact", 5)}
              className={`cursor-pointer ${tabState === "contact" ? "text-yellow-400" : ""}`}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        {tabState === "about" && page === 1 && <About />}
        {tabState === "experience" && page === 2 && <Experience />}
        {tabState === "projects" && page === 3 && <Projects />}
        {tabState === "education" && page === 4 && <Education />}
        {tabState === "contact" && page === 5 && <Contact />}
      </div>
      <div className="fixed bottom-0 backdrop-blur left-0 w-full border-black border-[0.5px] rounded-tr-[25px] rounded-tl-[25px] p-4 text-center bg-gradient-to-b from-cyan-900/60 to-cyan-700/40 block md:hidden">
        <div className="w-full md:w-[70%] rounded-tr-[25px] rounded-bl-[25px]  flex items-center justify-center shadow-lg transition-all duration-300">
          <div className="text-cyan-200 font-[Quicksand] text-lg font-semibold flex flex-row flex-wrap p-4 gap-4 md:gap-6  w-full justify-center">
            <button
              onClick={()=>handleTabClick("about", 1)}
              className={`cursor-pointer ${tabState === "about" ? "text-yellow-400" : ""}`}>
              About
            </button>
            <button
              onClick={()=>handleTabClick("experience", 2)}
              className={`cursor-pointer ${tabState === "experience" ? "text-yellow-400" : ""}`}>
              Experience
            </button>
            <button
              onClick={()=>handleTabClick("projects", 3)}
              className={`cursor-pointer ${tabState === "projects" ? "text-yellow-400" : ""}`}>
              Projects
            </button>
            <button
              onClick={()=>handleTabClick("education", 4)}
              className={`cursor-pointer ${tabState === "education" ? "text-yellow-400" : ""}`}>
              Education
            </button>
            <button
              onClick={()=>handleTabClick("contact", 5)}
              className={`cursor-pointer ${tabState === "contact" ? "text-yellow-400" : ""}`}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* This div is to ensure the footer is always at the bottom of the page */}
        <div className="h-24">
          <div className='flex justify-end p-4'>
            <button className='bg-cyan-800 w-20 p-2 h-12 cursor-pointer rounded-lg font-semibold'>Next &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}