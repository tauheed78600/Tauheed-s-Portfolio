"use client";

import React, { useState } from "react";
import SidebarProfile from "./components/SidebarProfile";
import ContentProfile from "./components/ContentProfile";

export default function Home() {
  const [tabState, setTabState] = useState("about");

  return (
    <div>
      <div className="flex flex-col items-center w-full justify-start min-h-screen bg-gradient-to-b from-black to-violet-700 pb-24">
        <div className="flex flex-col md:flex-row gap-6 p-4 max-w-[1200px] w-full">
          <div className="w-full md:w-1/4 flex-shrink-0 h-auto">
            <div className="w-full md:w-[20vw] md:min-w-[200px] md:max-w-[350px] flex-shrink-0 h-auto md:fixed md:top-4">
              <div className="w-auto h-auto border-[0.5px] border-black rounded-4xl p-4 bg-gradient-to-tr from-black to-violet-700 shadow-2xl">
                <SidebarProfile />
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="h-auto border-[0.5px] border-2 border-black rounded-4xl bg-gradient-to-tr from-black to-violet-700 shadow-2xl">
              <ContentProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}