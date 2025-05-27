"use client"

import React from 'react';
import { useState } from 'react';

import Image from "next/image";
import SidebarProfile from "./components/SidebarProfile";
import ContentProfile from "./components/ContentProfile";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full justify-around min-h-screen bg-cyan-400">
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 p-4 justify-end">
        <div className="w-[300px]">
          <div className="w-[310px] h-[500px] border-[0.5px] border-black shadow-[0_0_20px_5px_rgba(59,250,246,0.75)] rounded-4xl p-4 bg-cyan-600 shadow-2xl">
            <SidebarProfile />
          </div>
        </div>
        <div>
          <div className="w-[800px] h-auto border-[0.5px] border-2 border-black shadow-[0_0_20px_5px_rgba(59,250,246,0.75)] rounded-4xl bg-cyan-600 shadow-2xl">
            <ContentProfile/>
          </div>
        </div>
      </div>      
    </div>
  );
}