"use client";

import React, { useState } from 'react';
import About from './AboutSections/About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

export default function ContentProfile() {
    const [tabState, setTabState] = useState("about");

    return (
        <div className="text-white">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="font-[Quicksand] text-lg ml-10 whitespace-nowrap">
                    {tabState === "about" && <p className='text-3xl font-extrabold'>About Me</p>}
                    {tabState === "experience" && <p className='text-3xl font-extrabold'>Experience </p>}
                    {tabState === "projects" && <p className='text-3xl font-extrabold'>Projects </p>}
                    {tabState === "education" && <p className='text-3xl font-extrabold'>Education </p>}
                    {tabState === "contact" && <p className='text-3xl font-extrabold'>Contact </p>}
                </div>
                <div className="w-full md:w-[70%] rounded-tr-[25px] rounded-bl-[25px] bg-gray-700 flex items-center invisible md:visible justify-center shadow-lg transition-all duration-300">
                    <div className="text-cyan-200 font-[Quicksand] text-lg font-semibold flex flex-row flex-wrap p-4 gap-4 md:gap-6  w-full justify-center">
                        <button
                            onClick={() => setTabState("about")}
                            className={`cursor-pointer ${tabState === "about" ? "text-yellow-400" : ""}`}>
                            About
                        </button>
                        <button
                            onClick={() => setTabState("experience")}
                            className={`cursor-pointer ${tabState === "experience" ? "text-yellow-400" : ""}`}>
                            Experience
                        </button>
                        <button
                            onClick={() => setTabState("projects")}
                            className={`cursor-pointer ${tabState === "projects" ? "text-yellow-400" : ""}`}>
                            Projects
                        </button>
                        <button
                            onClick={() => setTabState("education")}
                            className={`cursor-pointer ${tabState === "education" ? "text-yellow-400" : ""}`}>
                            Education
                        </button>
                        <button
                            onClick={() => setTabState("contact")}
                            className={`cursor-pointer ${tabState === "contact" ? "text-yellow-400" : ""}`}>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                {tabState === "about" && <About />}
                {tabState === "experience" && <Experience />}
                {tabState === "projects" && <Projects />}
                {tabState === "education" && <Education />}
                {tabState === "contact" && <Contact />}
            </div>
                  {/* Bottom Header */}
      <div className="fixed bottom-0 backdrop-blur left-0 w-full border-black border-[0.5px] rounded-tr-[25px] rounded-tl-[25px] p-4 text-center bg-gradient-to-b from-cyan-900/60 to-cyan-700/40 block md:hidden">
        <div className="w-full md:w-[70%] rounded-tr-[25px] rounded-bl-[25px]  flex items-center justify-center shadow-lg transition-all duration-300">
          <div className="text-cyan-200 font-[Quicksand] text-lg font-semibold flex flex-row flex-wrap p-4 gap-4 md:gap-6  w-full justify-center">
            <button
              onClick={() => setTabState("about")}
              className={`cursor-pointer ${tabState === "about" ? "text-yellow-400" : ""}`}>
              About
            </button>
            <button
              onClick={() => setTabState("experience")}
              className={`cursor-pointer ${tabState === "experience" ? "text-yellow-400" : ""}`}>
              Experience
            </button>
            <button
              onClick={() => setTabState("projects")}
              className={`cursor-pointer ${tabState === "projects" ? "text-yellow-400" : ""}`}>
              Projects
            </button>
            <button
              onClick={() => setTabState("education")}
              className={`cursor-pointer ${tabState === "education" ? "text-yellow-400" : ""}`}>
              Education
            </button>
            <button
              onClick={() => setTabState("contact")}
              className={`cursor-pointer ${tabState === "contact" ? "text-yellow-400" : ""}`}>
              Contact
            </button>
          </div>
        </div>
      </div>
        </div>
    );
}