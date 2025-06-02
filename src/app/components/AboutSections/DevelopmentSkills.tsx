"use client";
import React from 'react';
import { SiExpress, SiMongodb, SiMysql, SiNestjs, SiNodedotjs, SiReact, SiSpring } from 'react-icons/si';

export default function DevelopmentSkills() {
    // List of skill image filenames
    const skills = [
        "react.png",
        "mysql.png",
        "next.png",
        "node.png",
        "typescript.png",
        "npm.png",
        "docker.png",
        "python.png",
        "git.png",
        "java-script.png",
        "html.png",
    ];
    return (
        <div>
            <div>
                <h2 className="flex font-[Quicksand] justify-center items-center text-3xl font-extrabold mt-4">Development Skills</h2>
                <div className="overflow-hidden">
                    <div className="border-none w-[700px] h-auto bg-gradient-to-b from-cyan-900/90 to-cyan-700/40 rounded-2xl shadow-xl p-6">
                        <div className="relative">
                            <div className="flex flex-row flex-nowrap gap-6 animate-skill-scroll" style={{ width: 'max-content' }}>
                                {skills.concat(skills).map((img, idx) => (
                                    <img key={idx} className="h-20 w-20" src={img} alt="skill" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes skill-scroll {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0); }
                }
                .animate-skill-scroll {
                    animation: skill-scroll 30s linear infinite;
                }
            `}</style>
        </div>
    );
}