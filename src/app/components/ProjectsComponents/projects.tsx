import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {

    const [projects, setProjects] = useState([])

    const projectsData = [
        {
            title: "Resumatic: The AI Resume Builder Website",
            description: "AI-powered resume builder with React, Vite, NestJS, and MySQL. Uses ML/NLP to optimize resumes for ATS and job descriptions.",
            image: "/AIResume.png",
            link: "https://github.com/tauheed78600/AI-Resume-Builder",
            techStack: "React, Vite, NestJS, MySQL, Machine Learning, NLP"
        },
        {
            title: "Dynamic Form Builder",
            description: "Custom form builder using React Hook Form for easy design and validation.",
            image: "/DynamicForm.png",
            link: "https://github.com/tauheed78600/Dynamic-Form-Builder",
            techStack: "React, React Hook Form, JavaScript"
        },
        {
            title: "Expense Tracker Website",
            description: "Full-stack MERN app with user auth and Chart.js for expense insights.",
            image: "/expense.png",
            link: "https://github.com/tauheed78600/Expense-Tracker-Website",
            techStack: "MongoDB, Express.js, React, Node.js, Chart.js"
        },
        {
            title: "NCVI Clustering Validity Index",
            description: "Novel metric for evaluating clustering quality using ARI and Jaccard Index.",
            image: "/cluster.png",
            link: "https://github.com/tauheed78600/NCVI-Clustering-Validity-Index",
            techStack: "Python, Machine Learning, Jaccard Index, Adjusted Rand Index"
        },
        {
            title: "AI Chatbot inspired by ChatGPT",
            description: "Custom AI chatbot using MERN stack and OpenAI, with secure user message storage.",
            image: "/AIChatbot.png",
            link: "This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and OpenAI. Its a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted. Its a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.",
            techStack: "MongoDB, Express.js, React, Node.js, OpenAI, JWT"
        },
        {
            title: "My Portfolio Website",
            description: "Personal portfolio built with modern web tech.",
            image: "Portfolio.png",
            link: "https://github.com/tauheed78600/Tauheed-s-Portfolio",
            techStack: "Next.js, React, Tailwind CSS"
        },
        {
            title: "A Telegram bot for Weather Updates using NestJS",
            description: "Telegram bot for daily weather updates, built with NestJS and admin panel.",
            image: "telegrambot.png",
            link: "https://github.com/tauheed78600/A-Telegram-bot-for-Weather-Updates-using-NestJS",
            techStack: "NestJS, Telegram Bot API, Node.js"
        },
        {
            title: "Disease Prediction based on Early Symptoms",
            description: "ML-based system to predict diseases from symptoms using various algorithms.",
            image: "Disease.png",
            link: "https://github.com/tauheed78600/Disease-Prediction-based-on-Early-Symptoms",
            techStack: "Python, Naive Bayes, Decision Tree, Random Forest"
        }
    ]


    return (
        <div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 animate-fade-in">
                    {projectsData.map((project, index) => (
                        <div key={index} className="transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .animate-fade-in { animation: fadeIn 1s ease; }
                .animate-fade-in-up { animation: fadeInUp 0.8s both; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    )
}