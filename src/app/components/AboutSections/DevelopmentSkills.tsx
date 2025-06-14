"use client";
import React from 'react';
import { SiMongodb, SiMysql, SiNestjs, SiNodedotjs, SiReact, SiSpring, SiDocker, SiGit, SiPython, SiJavascript, SiHtml5 } from 'react-icons/si';

export default function DevelopmentSkills() {
    const [activeTab, setActiveTab] = React.useState('frontend');
    const skillTabs = [
        {
            label: 'Frontend',
            key: 'frontend',
            skills: [
                { name: "HTML", icon: <SiHtml5 size={40} color="#E34F26" /> },
                { name: "CSS", icon: <span className="text-4xl font-bold text-blue-400">CSS</span> },
                { name: "ReactJS", icon: <SiReact size={40} color="#61DAFB" /> },
                { name: "BootStrap", icon: <span className="text-2xl font-bold text-purple-700">B</span> },
                { name: "Tailwind CSS", icon: <span className="text-2xl font-bold text-violet-400">T</span> },
                { name: "Schadcn UI", icon: <span className="text-2xl font-bold text-gray-400">S</span> },
            ],
        },
        {
            label: 'Backend',
            key: 'backend',
            skills: [
                { name: "Spring Boot", icon: <SiSpring size={40} color="#6DB33F" /> },
                { name: "Node.js", icon: <SiNodedotjs size={40} color="#3C873A" /> },
                { name: "NestJS", icon: <SiNestjs size={40} color="#E0234E" /> },
                { name: "RESTful APIs", icon: <span className="text-2xl font-bold text-blue-500">API</span> },
                { name: "Agile/Scrum", icon: <span className="text-2xl font-bold text-green-700">A/S</span> },
                { name: "MVC", icon: <span className="text-2xl font-bold text-indigo-700">MVC</span> },
                { name: "Event Driven Architecture", icon: <span className="text-2xl font-bold text-pink-700">EDA</span> },
            ],
        },
        {
            label: 'Database',
            key: 'database',
            skills: [
                { name: "MySQL", icon: <SiMysql size={40} color="#00758F" /> },
                { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
                { name: "PostgreSQL", icon: <span className="text-2xl font-bold text-blue-700">PG</span> },
                { name: "ElasticSearch", icon: <span className="text-2xl font-bold text-violet-600">ES</span> },
            ],
        },
        {
            label: 'Cloud',
            key: 'cloud',
            skills: [
                { name: "Azure Services", icon: <span className="text-2xl font-bold text-blue-500">AZ</span> },
                { name: "CI/CD Pipelines", icon: <span className="text-2xl font-bold text-green-500">CI/CD</span> },
                { name: "Jenkins", icon: <span className="text-2xl font-bold text-gray-700">J</span> },
                { name: "Infrastructure-as-Code (Azure Bicep)", icon: <span className="text-2xl font-bold text-violet-700">IaC</span> },
            ],
        },
        {
            label: 'Version Control',
            key: 'version',
            skills: [
                { name: "Git", icon: <SiGit size={40} color="#F05032" /> },
                { name: "Github", icon: <span className="text-2xl font-bold text-black">GH</span> },
                { name: "Bitbucket", icon: <span className="text-2xl font-bold text-blue-800">BB</span> },
            ],
        },
        {
            label: 'Dev Environment',
            key: 'env',
            skills: [
                { name: "Spring Tool Suite", icon: <span className="text-2xl font-bold text-green-700">STS</span> },
                { name: "Visual Studio", icon: <span className="text-2xl font-bold text-blue-700">VS</span> },
                { name: "Android Studio", icon: <span className="text-2xl font-bold text-green-500">AS</span> },
                { name: "PyCharm", icon: <span className="text-2xl font-bold text-green-900">PC</span> },
            ],
        },
        {
            label: 'Testing',
            key: 'testing',
            skills: [
                { name: "JUnit", icon: <span className="text-2xl font-bold text-red-700">J</span> },
                { name: "Integration Testing", icon: <span className="text-2xl font-bold text-blue-700">IT</span> },
            ],
        },
    ];

    const currentSkills = skillTabs.find(tab => tab.key === activeTab)?.skills || [];

    return (
        <div className="flex w-full flex-col items-center justify-center py-10">
            <h2 className="text-3xl font-extrabold font-[Quicksand] text-center text-white mb-8">Development Skills</h2>
            <div className="flex gap-2  sm:gap-4 mb-8  flex-wrap justify-center">
                {skillTabs.map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-4 py-2 rounded-full bg-gradient-to-tr from-black to-violet-700 text-white cursor-pointer font-semibold transition-all duration-200 border-2 focus:outline-none text-sm sm:text-base ${activeTab === tab.key ? 'bg-violet-700 text-violet-500 border-violet-400 shadow-lg' : 'bg-violet-700 text-violet-900 border-violet-200 hover:bg-violet-100'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 w-full max-w-2xl">
                {currentSkills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center bg-gradient-to-bl from-black to-violet-700  justify-center p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                    >
                        <div className="mb-2">{skill.icon}</div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center text-white">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}