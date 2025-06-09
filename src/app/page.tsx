"use client";

import React, { useState } from "react";
import SidebarProfile from "./components/SidebarProfile";
import ContentProfile from "./components/ContentProfile";

export default function Home() {
  const [tabState, setTabState] = useState("about");

  return (
    <div>
      <div className="flex flex-col items-center w-full justify-start min-h-screen bg-cyan-400 pb-24">
        <div className="flex flex-col md:flex-row gap-4 p-4 max-w-[1200px] w-full">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="w-full h-auto md:h-[500px] border-[0.5px] border-black shadow-[0_0_20px_5px_rgba(59,250,246,0.75)] rounded-4xl p-4 bg-cyan-600 shadow-2xl">
              <div className="md:top-4">
                <SidebarProfile />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="h-auto border-[0.5px] border-2 border-black shadow-[0_0_20px_5px_rgba(59,250,246,0.75)] rounded-4xl bg-cyan-600 shadow-2xl">
              <ContentProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}