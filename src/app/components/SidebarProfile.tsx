"use client"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from 'react';
import { DownloadIcon } from "lucide-react";
import Image from "next/image";

export default function SidebarProfile() {
    return (
        <div className="text-white">
            <div className="flex flex-col items-center justify-between mb-4 mt-1">
                {/* upper sidebar */}
                <div className="border-b-[0.5px] border-b-white flex flex-col gap-3 w-full h-auto">
                    <div className="grid grid-cols-[40%_60%] gap-6">
                        <div className="border-[0.5px] border-white md:w-20 md:h-20 w-20 h-20 rounded-full bg-gradient-to-tr from-violet-500 to-blue-900 flex items-center justify-center shadow-lg">
                            <Image src="/TauheedPhoto.jpg" alt="Tauheed's Avatar" className="rounded-full w-full h-full object-cover" width={80} height={80} />
                        </div>
                        <div>
                            <h2 className="font-[Quicksand] font-bold text-xl">Tauheed Darekar</h2>
                            <h2 className="font-[Quicksand] font-bold text-xl">توحید</h2>
                        </div>
                    </div>
                  
                    <div className="flex justify-center flex-col">
                        <strong className="font-[Quicksand] w-full text-xl text-center">Fullstack Developer</strong>
                            <h2 className="font-[Quicksand] font-extrabold text-center text-2xl">السلام علیکم</h2>
                        <a href="/Tauheed_Resume.pdf" download className="bg-gradient-to-tr from-black to-violet-700 whitespace-nowrap cursor-pointer mb-3 w-full h-auto p-2 font-[Open_Sans] text-white rounded-full transition duration-300 hover:bg-violet-800 flex items-center justify-center">
                            Download Resume <DownloadIcon className="inline ml-2 h-5 animate-bounce mt-2" />
                        </a>
                    </div>
                </div>
                {/* lower sidebar */}
                <div className="flex flex-col mt-3 items-center gap-4 w-full p-4 bg-gradient-to-b from-black to-violet-700 rounded-xl shadow-inner">
                    <h3 className="font-[Quicksand] font-semibold text-lg text-violet-200 mb-2 text-center">Connect with me</h3>
                    <div className="flex flex-row gap-6 mb-2">
                        <a href="https://github.com/tauheed78600" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-400 transition text-2xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/tauheed-darekar/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-400 transition text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/tauheed21__" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-400 transition text-2xl">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="w-full bg-gradient-to-tr from-black to-violet-700 rounded-lg p-3 flex flex-col items-center">
                        <span className="font-[Open_Sans] text-violet-100 text-sm mb-1">Age</span>
                        <span className="font-[Quicksand] text-white font-medium">24 years old</span>
                    </div>
                    <div className="w-full bg-gradient-to-tr from-black to-violet-700 rounded-lg p-3 flex flex-col items-center">
                        <span className="font-[Open_Sans] text-violet-100 text-sm mb-1">Location</span>
                        <span className="font-[Quicksand] text-white font-medium">Pune, India</span>
                    </div>
                    <div className="w-full bg-gradient-to-tr from-black to-violet-700 rounded-lg p-3  flex flex-col items-center mt-2">
                        <span className="font-[Open_Sans] text-violet-100 text-sm mb-1">Email</span>
                        <a href="mailto:tauheeddarekar786@gmail.com" className="font-[Quicksand] text-white font-medium hover:underline sm:text-sm text-center break-all w-full">
                            tauheeddarekar786@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}