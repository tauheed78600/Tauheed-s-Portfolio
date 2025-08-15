"use client"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from 'react';
import { DownloadIcon } from "lucide-react";
import Image from "next/image";

export default function SidebarProfile() {
    return (
        <div className="text-white">
            <div className="flex flex-col items-center justify-between mb-4 mt-1">
                {/* upper sidebar */}
                <div className="border-b border-white/50 w-full py-4 px-2 flex flex-col gap-3">
                    {/* Profile Row */}
                    <div className="flex items-start gap-3 w-full">
                        {/* Avatar - Responsive sizing */}
                        <div className="border border-white/50 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-violet-500 to-blue-900 flex-shrink-0 overflow-hidden shadow-lg">
                            <Image
                                src="/TauheedPhoto.jpg"
                                alt="Tauheed's Avatar"
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div> 

                        {/* Name Section - Now with text overflow handling */}
                        <div className="flex-grow min-w-0 space-y-1">
                            <h2 className="font-[Quicksand] font-bold text-lg sm:text-xl truncate">
                                Tauheed
                            </h2>
                            <h2 className="font-[Quicksand] font-bold text-lg sm:text-xl truncate">
                                توحید
                            </h2>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col items-center gap-2 w-full px-1">
                        <strong className="font-[Quicksand] text-lg sm:text-xl text-center w-full truncate">
                            Fullstack Developer
                        </strong>
                        <h2 className="font-[Quicksand] font-extrabold text-xl sm:text-2xl text-center w-full">
                            السلام علیکم
                        </h2>

                        {/* Download Button */}
                        <a
                            href="/Tauheed_Resume.pdf"
                            download
                            className="
        bg-gradient-to-tr from-black to-violet-700 
        text-white font-[Open_Sans] text-sm sm:text-base
        rounded-full 
        w-full max-w-xs
        py-2 px-4
        flex items-center justify-center
        transition-all duration-300 
        hover:bg-violet-800
        mt-2
      "
                        >
                            Download Resume
                            <DownloadIcon className="ml-2 h-4 sm:h-5 animate-bounce" />
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