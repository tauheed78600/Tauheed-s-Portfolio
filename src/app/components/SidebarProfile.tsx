"use client"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


import React from 'react';
import { useState } from 'react';

export default function SidebarProfile() {
    return (
        <div className="text-white">
            <div className="flex flex-col items-center justify-between mb-4 mt-1">
                {/* upper sidebar */}
                <div className="border-b-[0.5px] border-b-white flex flex-col gap-3 w-full h-auto">
                    <div className="grid grid-cols-[40%_60%] md:gap-4">
                        <div className="border-[0.5px] border-white md:w-20 md:h-20 w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg">
                            <img src="Tauheed_image.jpg" alt="Avatar" className="rounded-full w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="font-[Quicksand] font-bold text-xl">Tauheed</h2>
                            <strong className="font-[Quicksand] w-full text-sm">Fullstack Developer</strong>
                        </div>
                    </div>
                  
                    <div className="flex justify-center">
                        <button className="bg-gradient-to-tr from-black to-violet-700 mb-3 w-[90%] h-8 font-[Open_Sans] text-white  rounded-full transition duration-300 hover:bg-cyan-800">
                            Hello World
                        </button>
                    </div>
                </div>
                {/* lower sidebar */}
                <div className="flex flex-col mt-3 items-center gap-4 w-full p-4 bg-gradient-to-b from-black to-violet-700 rounded-xl shadow-inner">
                    <h3 className="font-[Quicksand] font-semibold text-lg text-cyan-200 mb-2 text-center">Connect with me</h3>
                    <div className="flex flex-row gap-6 mb-2">
                        <a href="https://github.com/tauheed78600" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition text-2xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/tauheed-darekar/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/tauheed" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition text-2xl">
                            <FaTwitter />
                        </a>
                    </div>
                    <div className="w-full bg-gradient-to-tr from-black to-violet-700 rounded-lg p-3 flex flex-col items-center">
                        <span className="font-[Open_Sans] text-cyan-100 text-sm mb-1">Age</span>
                        <span className="font-[Quicksand] text-white font-medium">24 years old</span>
                    </div>
                    <div className="w-full bg-gradient-to-tr from-black to-violet-700 rounded-lg p-3 flex flex-col items-center">
                        <span className="font-[Open_Sans] text-cyan-100 text-sm mb-1">Location</span>
                        <span className="font-[Quicksand] text-white font-medium">Pune, India</span>
                    </div>
                    <div className="w-full bg-gradient-to-tr from-black to-violet-700 rounded-lg p-3  flex flex-col items-center mt-2">
                        <span className="font-[Open_Sans] text-cyan-100 text-sm mb-1">Email</span>
                        <a href="mailto:tauheeddarekar786@gmail.com" className="font-[Quicksand] text-white font-medium hover:underline sm:text-sm text-center break-all w-full">
                            tauheeddarekar786@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}