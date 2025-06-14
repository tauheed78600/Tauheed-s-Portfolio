import React, { useState } from 'react'

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  return (
    <div>
      <div className='border h-[500px] bg-gradient-to-tr from-black to-violet-700 border-none rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-2xl transition-transform duration-300 group-hover:scale-105 flex flex-col animate-fade-in-up'>
        <div className="relative w-full h-48 flex items-center justify-center bg-gradient-to-tr from-violet-900 to-black rounded-tl-lg rounded-tr-lg">
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
            className={`object-cover rounded-tl-lg rounded-tr-lg w-full h-48 transition duration-500 ease-in-out group-hover:scale-105 animate-fade-in ${imgLoaded && !imgError ? '' : 'invisible'}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        </div>
        <div className='p-4 flex flex-col flex-1'>
          <div className='flex-1'>
            <h2 className='text-center text-lg font-[Quicksand] font-bold animate-fade-in-up'>{project.title}</h2>
            <p className='text-sm mt-2 animate-fade-in-up'>{project.description}</p>
            <p className='text-xs mt-2 text-gray-200 animate-fade-in-up'><span className='font-bold'>Tech Stack:</span> {project.techStack}</p>
          </div>
          <div className='flex justify-center'>
            <button onClick={()=>{window.open(project.link, "_blank")}} className='mt-4 bg-violet-500 mb-3 w-[90%] h-8 font-[Quicksand] font-extrabold text-white rounded-full transition duration-300 hover:bg-violet-600 cursor-pointer animate-fade-in-up'>View Project</button>
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
