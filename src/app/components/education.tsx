import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

export default function Education() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[350px] p-2 sm:p-4 md:p-6 rounded-3xl animate-fade-in">
            <div className="relative w-full max-w-2xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-cyan-400 to-yellow-400 rounded-full -translate-x-1/2 -z-10 md:z-0 transition-all duration-700" />
                <div className="relative flex flex-col md:flex-row md:justify-start items-center mb-10 md:mb-16 group animate-slide-left">
                    <div className="flex flex-col items-center w-0 md:w-auto z-10 my-4 md:my-0 mr-0 md:mr-8">
                        <div className="bg-yellow-400 p-3 rounded-full shadow-lg animate-pulse">
                            <FaGraduationCap className="text-cyan-900 text-2xl" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-16 flex justify-end md:justify-end">
                        <div className="bg-gradient-to-tl from-cyan-900/20 to-cyan-900/80 border-none rounded-2xl shadow-xl p-4 sm:p-6 w-full max-w-md hover:scale-[1.04] hover:shadow-yellow-400/30 transition-all duration-300 z-10 animate-fade-in-up">
                            <h3 className="text-xl sm:text-2xl font-bold text-white font-[Quicksand]">M.Tech Computer Science</h3>
                            <p className="text-cyan-200 font-semibold mt-1">National Institute of Technology, Goa</p>
                            <span className="inline-block text-xs text-yellow-300 font-bold mt-2 bg-cyan-800 px-3 py-1 rounded-full shadow">08/2022 – 06/2024</span>
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-gray-300 text-sm font-semibold">CGPA:</span>
                                <span className="text-yellow-200 text-base font-bold">7.55</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block w-1/2" />
                </div>
                <div className="relative flex flex-col md:flex-row md:justify-end items-center group mb-10 md:mb-16 animate-slide-right">
                    <div className="hidden md:flex flex-col items-center w-0 md:w-auto z-10 my-4 md:my-0 mr-0 md:mr-8">
                        <div className="bg-cyan-400 p-3 rounded-full shadow-lg animate-pulse">
                            <FaUniversity className="text-cyan-900 text-2xl" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 flex justify-end md:justify-start">
                        <div className="bg-gradient-to-tl from-cyan-900/20 to-cyan-900/80 border-none rounded-2xl shadow-xl p-4 sm:p-6 w-full max-w-md hover:scale-[1.04] hover:shadow-cyan-400/30 transition-all duration-300 z-10 animate-fade-in-up delay-200">
                            <h3 className="text-xl sm:text-2xl font-bold text-white font-[Quicksand]">B.E. Computer Science</h3>
                            <p className="text-cyan-200 font-semibold mt-1">KJEI's Trinity Academy of Engineering, Pune</p>
                            <span className="inline-block text-xs text-cyan-200 font-bold mt-2 bg-cyan-800 px-3 py-1 rounded-full shadow">08/2018 – 06/2022</span>
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-gray-300 text-sm font-semibold">CGPA:</span>
                                <span className="text-yellow-200 text-base font-bold">8.56</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col md:flex-row md:justify-start items-center mb-10 md:mb-16 group animate-slide-left">
                    <div className="flex flex-col items-center w-0 md:w-auto z-10 my-4 md:my-0 mr-0 md:mr-8">
                        <div className="bg-yellow-400 p-3 rounded-full shadow-lg animate-pulse">
                            <FaSchool className="text-cyan-900 text-2xl" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-16 flex justify-end md:justify-end">
                        <div className="bg-gradient-to-tl from-cyan-900/20 to-cyan-900/80 border-none rounded-2xl shadow-xl p-4 sm:p-6 w-full max-w-md hover:scale-[1.04] hover:shadow-yellow-400/30 transition-all duration-300 z-10 animate-fade-in-up delay-300">
                            <h3 className="text-xl sm:text-2xl font-bold text-white font-[Quicksand]">12th HSC</h3>
                            <p className="text-cyan-200 font-semibold mt-1">SV Union Junior College</p>
                            <span className="inline-block text-xs text-yellow-300 font-bold mt-2 bg-cyan-800 px-3 py-1 rounded-full shadow">2016 – 2018</span>
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-gray-300 text-sm font-semibold">Percentage:</span>
                                <span className="text-yellow-200 text-base font-bold">78.62%</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block w-1/2" />
                </div>
                <div className="relative flex flex-col md:flex-row md:justify-end items-center group animate-slide-right">
                    <div className="hidden md:flex flex-col items-center w-0 md:w-auto z-10 my-4 md:my-0 mr-0 md:mr-8">
                        <div className="bg-cyan-400 p-3 rounded-full shadow-lg animate-pulse">
                            <FaSchool className="text-cyan-900 text-2xl" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 flex justify-end md:justify-start">
                        <div className="bg-gradient-to-tl from-cyan-900/20 to-cyan-900/80 border-none rounded-2xl shadow-xl p-4 sm:p-6 w-full max-w-md hover:scale-[1.04] hover:shadow-cyan-400/30 transition-all duration-300 z-10 animate-fade-in-up delay-400">
                            <h3 className="text-xl sm:text-2xl font-bold text-white font-[Quicksand]">10th SSC</h3>
                            <p className="text-cyan-200 font-semibold mt-1">SV Union High School</p>
                            <span className="inline-block text-xs text-cyan-200 font-bold mt-2 bg-cyan-800 px-3 py-1 rounded-full shadow">2015 – 2016</span>
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-gray-300 text-sm font-semibold">Percentage:</span>
                                <span className="text-yellow-200 text-base font-bold">87.60%</span>
                            </div>
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