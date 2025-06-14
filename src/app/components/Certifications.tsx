import { FaCertificate } from "react-icons/fa";
import Image from "next/image";
import React from 'react';

function Certifications() {
  return (
    <div className="w-full px-2 py-6 animate-fade-in">
      <div className="relative flex flex-col items-center">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-tr from-black to-violet-700 rounded-full z-0 transition-all duration-700" />

        <div className="relative flex items-start w-full mb-12 group animate-slide-left">
          <div className="flex flex-col items-center mr-8">
            <div className="bg-violet-600 p-3 rounded-full shadow-lg animate-pulse">
              <Image src="/AZ204.png" alt="Microsoft Logo" width={32} height={32} className="" />
            </div>
            <div className="flex-1 w-px bg-violet-300 transition-all duration-700"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <i className="font-[Quicksand] font-extrabold text-xl text-center mb-4">Microsoft Certified: Azure Developer Associate</i>
            <div className="border-8 border-black rounded-xl overflow-hidden shadow-2xl bg-white">
              <Image src="/AZ204.png" alt="Azure Developer Associate Certificate" width={500} height={300} className="object-contain" />
            </div>
          </div>
        </div>
        {/* HackerRank Frontend Developer */}
        <div className="relative flex items-start w-full mb-12 group animate-slide-right">
          <div className="flex flex-col items-center mr-8">
            <div className="bg-violet-600 p-3 rounded-full shadow-lg animate-pulse">
              <Image src="/Frontend.png" alt="HackerRank Logo" width={32} height={32} className="" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <i className="font-[Quicksand] font-extrabold text-xl text-center mb-4">Frontend Developer (React) - HackerRank</i>
            <div className="border-8 border-black rounded-xl overflow-hidden shadow-2xl bg-white">
              <Image src="/Frontend.png" alt="Frontend Developer Certificate" width={500} height={300} className="object-contain" />
            </div>
          </div>
        </div>
        {/* Azure Fundamentals */}
        <div className="relative flex items-start w-full mb-12 group animate-slide-left">
          <div className="flex flex-col items-center mr-8">
            <div className="bg-violet-600 p-3 rounded-full shadow-lg animate-pulse">
              <Image src="/AZ900.png" alt="Microsoft Logo" width={32} height={32} className="" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <i className="font-[Quicksand] font-extrabold text-xl text-center mb-4">Microsoft Certified: Azure Fundamentals</i>
            <div className="border-8 border-black rounded-xl overflow-hidden shadow-2xl bg-white">
              <Image src="/AZ900.png" alt="Azure Fundamentals Certificate" width={500} height={300} className="object-contain" />
            </div>
          </div>
        </div>
        {/* Artificial Intelligence A-Z 2024 */}
        <div className="relative flex items-start w-full group animate-slide-right">
          <div className="flex flex-col items-center mr-8">
            <div className="bg-violet-600 p-3 rounded-full shadow-lg animate-pulse">
              <Image src="/AI2024.jpeg" alt="AI Certification" width={32} height={32} className="" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <i className="font-[Quicksand] font-extrabold text-xl text-center mb-4">Artificial Intelligence A-Z 2024</i>
            <div className="border-8 border-black rounded-xl overflow-hidden shadow-2xl bg-white">
              <Image src="/AI2024.jpeg" alt="Artificial Intelligence A-Z 2024 Certificate" width={500} height={300} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-fade-in-up { animation: fadeInUp 1s 0.2s both; }
        .animate-slide-left { animation: slideLeft 1s cubic-bezier(.23,1.01,.32,1) both; }
        .animate-slide-right { animation: slideRight 1s cubic-bezier(.23,1.01,.32,1) both; }
        .delay-200 { animation-delay: 0.2s !important; }
        .delay-300 { animation-delay: 0.3s !important; }
        .delay-400 { animation-delay: 0.4s !important; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideLeft { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideRight { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </div>
  );
}

export default Certifications;
