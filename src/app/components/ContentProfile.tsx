"use client";

import React, { useState } from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

export default function ContentProfile() {
    const [tabState, setTabState] = useState("about");

    return (
        <div className="">
            <div className="flex flex-row items-center justify-between w-full mb-4">
                <div className="font-[Quicksand] text-lg ml-10 mt-5">
                    {tabState === "about" && <p className='text-3xl font-extrabold'>About Me</p>}
                    {tabState === "experience" && <p className='text-3xl font-extrabold'>Experience </p>}
                    {tabState === "projects" && <p className='text-3xl font-extrabold'>Projects </p>}
                    {tabState === "education" && <p className='text-3xl font-extrabold'>Education </p>}
                    {tabState === "skills" && <p className='text-3xl font-extrabold'>Skills </p>}
                    {tabState === "contact" && <p className='text-3xl font-extrabold'>Contact </p>}
                </div>
                <div className="h-16 w-[70%] rounded-tr-[25px] rounded-bl-[25px] bg-gray-700 flex items-center justify-center shadow-lg">
                    <div className="text-cyan-200 font-[Quicksand] text-lg font-semibold flex flex-row gap-6">
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
                            onClick={() => setTabState("skills")}
                            className={`cursor-pointer ${tabState === "skills" ? "text-yellow-400" : ""}`}>
                            Skills
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
                {tabState === "skills" && <Skills />}
                {tabState === "contact" && <Contact />}
            </div>
        </div>
    );
}