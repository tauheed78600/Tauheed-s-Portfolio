import React from 'react'

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <div className='border h-auto bg-gradient-to-tl from-cyan-900/20 to-cyan-900/80 border-none rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-2xl transition-transform duration-300 group-hover:scale-105 flex flex-col animate-fade-in-up'>
        <img src={project.image} alt={project.title} loading="lazy" className="object-cover rounded-tl-lg rounded-tr-lg hover:opacity-80 transition duration-500 ease-in-out group-hover:scale-105 animate-fade-in" />
        <div className='p-4 flex flex-col flex-1'>
          <div className='flex-1'>
            <h2 className='text-center text-lg font-[Quicksand] font-bold animate-fade-in-up'>{project.title}</h2>
            <p className='text-sm mt-2 animate-fade-in-up'>{project.description}</p>
            <p className='text-xs mt-2 text-gray-200 animate-fade-in-up'><span className='font-bold'>Tech Stack:</span> {project.techStack}</p>
          </div>
          <div className='flex justify-center'>
            <button onClick={()=>{window.open(project.link, "_blank")}} className='mt-4 bg-cyan-500 mb-3 w-[90%] h-8 font-[Open_Sans] text-white rounded-full transition duration-300 hover:bg-cyan-600 cursor-pointer animate-fade-in-up'>View Project</button>
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
