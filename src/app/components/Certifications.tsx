import Image from "next/image";
import React, { useState } from 'react';

function Certifications() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full px-2 py-6 animate-fade-in">
      <div className="relative flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-tr from-black to-violet-700 rounded-full z-0 transition-all duration-700" />

        <div className="relative flex items-start w-full mb-12 group animate-slide-left">
          <div className="flex flex-col items-center mr-8">
            <div className="bg-violet-600 p-3 rounded-full shadow-lg animate-pulse">
              <Image src="/AZ204.png" alt="Microsoft Logo" width={32} height={32} className="" />
            </div>
            <div className="flex-1 w-px bg-violet-300 transition-all duration-700"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <i className="font-[Quicksand] font-extrabold text-2xl mb-4">Microsoft Certified: Azure Developer Associate</i>
            <div className="relative w-full max-w-[500px] aspect-[5/3] flex items-center justify-center bg-gradient-to-tr from-violet-900 to-black">
              {(!imgLoaded || imgError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-tr from-violet-900 to-black animate-pulse z-10">
                  <svg className="w-12 h-12 text-violet-400 mb-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  <span className="text-violet-200 font-semibold text-sm">Loading image...</span>
                </div>
              )}
              <Image
                src="/AZ204.png"
                alt="Azure Developer Associate Certificate"
                fill
                className={`object-contain transition duration-500 ease-in-out ${imgLoaded && !imgError ? 'z-20' : 'invisible'}`}
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 500px"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                priority
              />
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
            <i className="font-[Quicksand] font-extrabold text-2xl mb-4">Frontend Developer (React) - HackerRank</i>
            <div className="relative w-full max-w-[500px] aspect-[5/3] flex items-center justify-center bg-gradient-to-tr from-violet-900 to-black">
              {(!imgLoaded || imgError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-tr from-violet-900 to-black animate-pulse z-10">
                  <svg className="w-12 h-12 text-violet-400 mb-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  <span className="text-violet-200 font-semibold text-sm">Loading image...</span>
                </div>
              )}
              <Image
                src="/Frontend.png"
                alt="Frontend Developer Certificate"
                fill
                className={`object-contain transition duration-500 ease-in-out ${imgLoaded && !imgError ? 'z-20' : 'invisible'}`}
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 500px"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                priority
              />
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
            <i className="font-[Quicksand] font-extrabold text-2xl mb-4">Microsoft Certified: Azure Fundamentals</i>
            <div className="relative w-full max-w-[500px] aspect-[5/3] flex items-center justify-center bg-gradient-to-tr from-violet-900 to-black">
              {(!imgLoaded || imgError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-tr from-violet-900 to-black animate-pulse z-10">
                  <svg className="w-12 h-12 text-violet-400 mb-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  <span className="text-violet-200 font-semibold text-sm">Loading image...</span>
                </div>
              )}
              <Image
                src="/AZ900.png"
                alt="Azure Fundamentals Certificate"
                fill
                className={`object-contain transition duration-500 ease-in-out ${imgLoaded && !imgError ? 'z-20' : 'invisible'}`}
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 500px"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                priority
              />
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
            <i className="font-[Quicksand] font-extrabold text-2xl mb-4">Artificial Intelligence A-Z 2024</i>
            <div className="relative w-full max-w-[500px] aspect-[5/3] flex items-center justify-center bg-gradient-to-tr from-violet-900 to-black">
              {(!imgLoaded || imgError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-tr from-violet-900 to-black animate-pulse z-10">
                  <svg className="w-12 h-12 text-violet-400 mb-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  <span className="text-violet-200 font-semibold text-sm">Loading image...</span>
                </div>
              )}
              <Image
                src="/AI2024.jpeg"
                alt="Artificial Intelligence A-Z 2024 Certificate"
                fill
                className={`object-contain transition duration-500 ease-in-out ${imgLoaded && !imgError ? 'z-20' : 'invisible'}`}
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 500px"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                priority
              />
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
