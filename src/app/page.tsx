"use client";

import React, { useState } from "react";
import SidebarProfile from "./components/SidebarProfile";
import ContentProfile from "./components/ContentProfile";
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  const [tabState, setTabState] = useState("about");

  return (
    <div>
      {/* Main Layout */}
      <div className="flex flex-col items-center w-full justify-start min-h-screen bg-cyan-400 pb-24">
        <div className="flex flex-col md:flex-row gap-4 p-4 max-w-[1200px] w-full">
          {/* SidebarProfile Section */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="w-full h-auto md:h-[500px] border-[0.5px] border-black shadow-[0_0_20px_5px_rgba(59,250,246,0.75)] rounded-4xl p-4 bg-cyan-600 shadow-2xl">
              <div className="md:sticky md:top-4">
                <SidebarProfile />
              </div>
            </div>
          </div>

          {/* ContentProfile Section */}
          <div className="w-full md:w-2/3">
            <div className="w-full h-auto border-[0.5px] border-2 border-black shadow-[0_0_20px_5px_rgba(59,250,246,0.75)] rounded-4xl bg-cyan-600 shadow-2xl">
              <ContentProfile />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="fixed bottom-0 backdrop-blur left-0 w-full z-50 border-black border-[0.5px] rounded-tr-[25px] rounded-tl-[25px] p-4 text-center bg-gradient-to-b from-cyan-900/60 to-cyan-700/40 block md:hidden">
      </div>
    </div>
  );
}