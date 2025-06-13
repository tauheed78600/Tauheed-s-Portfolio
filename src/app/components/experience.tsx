import { FaCloud, FaLock } from "react-icons/fa";

export default function Experience() {
    return (
        <div className="w-full px-2 py-6 animate-fade-in">
            <div className="relative flex flex-col items-center">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/80 to-cyan-700/40 rounded-full z-0" />
                {/* Parkar Digital */}
                <div className="relative flex items-start w-full mb-12 group animate-slide-left">
                    <div className="flex flex-col items-center mr-8">
                        <div className="bg-cyan-400 p-3 rounded-full shadow-lg animate-pulse">
                            <FaCloud className="text-white text-2xl" />
                        </div>
                        <div className="flex-1 w-px bg-cyan-400/40"></div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-cyan-800/80 to-cyan-600/60 rounded-2xl shadow-xl p-6 border-l-8 border-cyan-400 hover:scale-[1.02] hover:shadow-cyan-400/30 transition-all duration-300 animate-fade-in-up">
                        <div className="flex flex-row items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-white font-[Quicksand]">Software Engineer 1, Parkar Digital</h3>
                            <span className="ml-auto text-cyan-200 text-sm font-semibold">2024 Feb – present • Pune, India</span>
                        </div>
                        <ul className="list-disc ml-6 text-cyan-100 space-y-2 mt-2">
                            <li>
                                <span className="font-semibold text-cyan-300">Lazy Loading:</span> Improved content load speed, boosting session duration by <span className="text-yellow-300 font-bold">30%</span>.
                            </li>
                            <li>
                                <span className="font-semibold text-cyan-300">Node.js Performance:</span> Optimized APIs and load balancing for faster, scalable backend.
                            </li>
                            <li>
                                <span className="font-semibold text-cyan-300">Cloud & IaC:</span> Designed Azure cloud setup and automated deployments with Bicep.
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Thinkseed Systems */}
                <div className="relative flex items-start w-full z-10 group animate-slide-right">
                    <div className="flex flex-col items-center mr-8">
                        <div className="bg-cyan-500 p-3 rounded-full shadow-lg animate-pulse">
                            <FaLock className="text-white text-2xl" />
                        </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-cyan-900/80 to-cyan-700/60 rounded-2xl shadow-xl p-6 border-l-8 border-cyan-500 hover:scale-[1.02] hover:shadow-cyan-500/30 transition-all duration-300 animate-fade-in-up delay-200">
                        <div className="flex flex-row items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-white font-[Quicksand]">Software Development Engineering Intern, Thinkseed Systems</h3>
                            <span className="ml-auto text-cyan-200 text-sm font-semibold">2023 Jun – 2023 Dec • Bangalore, India</span>
                        </div>
                        <ul className="list-disc ml-6 text-cyan-100 space-y-2 mt-2">
                            <li>
                                <span className="font-semibold text-cyan-300">Encryption:</span> Added secure encryption for vehicle data in Spring Boot.
                            </li>
                            <li>
                                <span className="font-semibold text-cyan-300">API Optimization:</span> Reduced API response time with caching and query tuning.
                            </li>
                            <li>
                                <span className="font-semibold text-cyan-300">Load Balancing:</span> Ensured high availability by distributing server traffic.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .animate-fade-in { animation: fadeIn 1s ease; }
                .animate-fade-in-up { animation: fadeInUp 1s 0.2s both; }
                .animate-slide-left { animation: slideLeft 1s cubic-bezier(.23,1.01,.32,1) both; }
                .animate-slide-right { animation: slideRight 1s cubic-bezier(.23,1.01,.32,1) both; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes slideLeft { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes slideRight { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
            `}</style>
        </div>
    );
}