"use client";
import React from 'react';
import { SiExpress, SiMongodb, SiMysql, SiNestjs, SiNodedotjs, SiReact, SiSpring, SiDocker, SiGit, SiPython, SiJavascript, SiHtml5 } from 'react-icons/si';

export default function DevelopmentSkills() {
    const skills = [
        { name: "React", icon: <SiReact size={40} color="#61DAFB" /> },
        { name: "Node.js", icon: <SiNodedotjs size={40} color="#3C873A" /> },
        { name: "MySQL", icon: <SiMysql size={40} color="#00758F" /> },
        { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
        { name: "NestJS", icon: <SiNestjs size={40} color="#E0234E" /> },
        { name: "Express", icon: <SiExpress size={40} color="#000000" /> },
        { name: "Spring", icon: <SiSpring size={40} color="#6DB33F" /> },
        { name: "Docker", icon: <SiDocker size={40} color="#2496ED" /> },
        { name: "Python", icon: <SiPython size={40} color="#3776AB" /> },
        { name: "Git", icon: <SiGit size={40} color="#F05032" /> },
        { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
        { name: "HTML", icon: <SiHtml5 size={40} color="#E34F26" /> },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-10">
            {/* Title */}
            <h2 className="text-3xl font-extrabold font-[Quicksand] text-center  text-white mb-8">Development Skills</h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5  md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">
                {skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center bg-gradient-to-b from-cyan-900/60 to-cyan-700/40 justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                    >
                        {/* Icon */}
                        <div className="mb-2">{skill.icon}</div>
                        {/* Skill Name */}
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}