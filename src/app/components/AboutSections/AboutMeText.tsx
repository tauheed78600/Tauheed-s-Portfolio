"use client";
import React from 'react';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export default function AboutMeText() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="font-[Quicksand]">
            <p>
                Hi, my name is <strong>Tauheed Darekar</strong>. I have completed my Master’s in <strong>Computer Science and Engineering</strong> from NIT Goa (2024) and earned my Bachelor’s degree in the same field from Trinity Academy of Engineering, Pune (2022).
                <br />I’m currently working as a <strong>Fullstack Developer</strong> at Parkar Digital, where I contribute to the design and development of scalable web applications using modern tech stacks.
                <br />I specialize in full-stack development with hands-on experience in the <strong>MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, NestJS, and TypeScript.</strong>
            </p>

            {/* Show More Button */}
            {!showMore && (
                <div className='flex flex-row justify-center text-violet-200 font-bold items-center gap-2 mt-4'>
                    <FaArrowDown className='mt-3 animate-bounce' />
                    <button
                        onClick={() => setShowMore(true)}
                        className='text-violet-200 cursor-pointer'
                    >
                        Show More
                    </button>
                    <FaArrowDown className='mt-3 animate-bounce' />
                </div>
            )}

            {/* Expanded Content */}
            {showMore && (
                <>
                    <p>
                        During my time at Parkar, I’ve worked on building robust backend services, integrating third-party APIs, managing authentication systems, and deploying applications using CI/CD pipelines. I also have experience working with cloud platforms like Azure and tools like Azure Devops, CI/CD Pipelines and Git for efficient development workflows.<br />
                        Previously, I worked as a Backend Development Intern at Thinkseed Systems in Bangalore, where I was involved in developing RESTful services using Java and the Spring Boot framework. This experience gave me a strong foundation in enterprise-level backend systems and Java-based architecture.
                        <br />Beyond work, I enjoy learning new technologies, contributing to side projects, and solving data structure and algorithm problems on platforms like LeetCode and GeeksforGeeks. I'm also active on GitHub where I regularly push code and share projects.
                    </p>
                    <div className='mb-4'>
                        <br />My <strong>TECHNICAL</strong> skill set includes:
                        <br /><strong>Languages</strong>: JavaScript, TypeScript, Java, Python
                        <br /><strong>Frameworks/Libraries</strong>: React.js, Next.js, Express.js, NestJS, Spring Boot
                        <br /><strong>Databases</strong>: MongoDB, MySQL
                        <br /><strong>Tools & Platforms</strong>: Git, Docker, Azure (Azure Cosmos DB, Azure Container Apps, Container Registry, etc), Vercel, Render
                    </div>
                    <p>
                        I’m passionate about building impactful applications and constantly strive to improve my problem-solving and development skills. I'm always open to opportunities that challenge me and help me grow as a Fullstack developer.
                    </p>
                    {/* Show Less Button */}
                    <div className='flex flex-row justify-center text-violet-200 font-bold items-center gap-2 mt-4'>
                        <FaArrowUp className='mt-3 animate-bounce' />
                        <button
                            onClick={() => setShowMore(false)}
                            className='text-violet-200 cursor-pointer'
                        >
                            Show Less
                        </button>
                        <FaArrowUp className='mt-3 animate-bounce' />
                    </div>
                </>
            )}
        </div>
    );
}