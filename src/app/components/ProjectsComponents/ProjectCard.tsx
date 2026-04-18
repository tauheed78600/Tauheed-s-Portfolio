/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { SiReact, SiVite, SiNestjs, SiMysql, SiMongodb, SiExpress, SiNodedotjs, SiOpenai, SiPython, SiTailwindcss, SiNextdotjs, SiJavascript } from 'react-icons/si'
import { FaChartBar, FaBrain } from 'react-icons/fa'

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string;
}

function getTechIcon(tech: string): React.ReactNode {
  const techName = tech.trim();
  const iconMap: { [key: string]: React.ReactNode } = {
    'React': <SiReact className="text-cyan-400" />,
    'Vite': <SiVite className="text-purple-400" />,
    'NestJS': <SiNestjs className="text-red-400" />,
    'MySQL': <SiMysql className="text-blue-400" />,
    'MongoDB': <SiMongodb className="text-green-500" />,
    'Express.js': <SiExpress className="text-gray-400" />,
    'Node.js': <SiNodedotjs className="text-green-600" />,
    'OpenAI': <SiOpenai className="text-gray-300" />,
    'Chart.js': <FaChartBar className="text-orange-400" />,
    'Python': <SiPython className="text-blue-500" />,
    'Machine Learning': <FaBrain className="text-indigo-400" />,
    'NLP': <FaBrain className="text-indigo-400" />,
    'JWT': <SiJavascript className="text-yellow-400" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
    'Next.js': <SiNextdotjs className="text-gray-700 dark:text-white" />,
    'JavaScript': <SiJavascript className="text-yellow-400" />,
    'React Hook Form': <SiReact className="text-cyan-400" />,
    'Adjusted Rand Index': <FaBrain className="text-indigo-400" />,
    'Jaccard Index': <FaBrain className="text-indigo-400" />,
    'Naive Bayes': <FaBrain className="text-indigo-400" />,
    'Decision Tree': <FaBrain className="text-indigo-400" />,
    'Random Forest': <FaBrain className="text-indigo-400" />,
    'Telegram Bot API': <SiNodedotjs className="text-green-600" />,
  };

  return iconMap[techName] || null;
}

function ProjectCard({ project }: { project: Project }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  return (
    <div>
      <div className='border h-[500px] bg-gradient-to-tr from-black to-violet-700 border-none rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-2xl transition-transform duration-300 group-hover:scale-105 flex flex-col animate-fade-in-up'>
        <div className="relative w-full h-40 flex items-center justify-center bg-gradient-to-tr from-violet-900 to-black rounded-tl-lg rounded-tr-lg">
          {(!imgLoaded || imgError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-tr from-violet-900 to-black rounded-tl-lg rounded-tr-lg animate-pulse">
              <svg className="w-12 h-12 text-violet-400 mb-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
              <span className="text-violet-200 font-semibold text-sm">Loading image...</span>
            </div>
          )}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={`object-cover rounded-tl-lg rounded-tr-lg w-full h-40 transition duration-500 ease-in-out group-hover:scale-105 animate-fade-in ${imgLoaded && !imgError ? '' : 'invisible'}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        </div>
        <div className='p-4 flex flex-col flex-1 justify-between overflow-hidden'>
          <div className='overflow-y-auto'>
            <h2 className='text-center text-lg font-[Quicksand] font-bold animate-fade-in-up line-clamp-2'>{project.title}</h2>
            <p className='text-sm mt-2 animate-fade-in-up line-clamp-3'>{project.description}</p>
            <div className='mt-3 animate-fade-in-up'>
              <p className='text-xs text-gray-200 font-bold mb-2'>Tech Stack:</p>
              <div className='flex flex-wrap gap-2 max-h-24 overflow-y-auto'>
                {project.techStack.split(',').map((tech, index) => (
                  <div key={index} className='flex items-center gap-1 bg-violet-900/50 px-2 py-1 rounded-full hover:bg-violet-800/70 transition duration-200 flex-shrink-0' title={tech.trim()}>
                    <span className='text-lg'>{getTechIcon(tech)}</span>
                    <span className='text-xs text-violet-100 whitespace-nowrap'>{tech.trim()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-4 flex-shrink-0'>
            <button onClick={()=>{window.open(project.link, "_blank")}} className='bg-violet-500 w-[90%] h-8 font-[Quicksand] font-extrabold text-white rounded-full transition duration-300 hover:bg-violet-600 cursor-pointer animate-fade-in-up'>View Project</button>
          </div>
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

export default ProjectCard
