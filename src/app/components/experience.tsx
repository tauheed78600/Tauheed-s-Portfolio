import { FaCloud, FaLock } from "react-icons/fa";

export default function Experience() {
    return (
        <div className="w-full px-2 py-6">
            <div className="relative flex flex-col items-center">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/80 to-cyan-700/40 rounded-full z-0" />
                
                <div className="relative flex items-start w-full mb-12 ">
                    <div className="flex flex-col items-center mr-8">
                        <div className="bg-cyan-400 p-3 rounded-full shadow-lg animate-pulse">
                            <FaCloud className="text-white text-2xl" />
                        </div>
                        <div className="flex-1 w-px bg-cyan-400/40"></div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-cyan-800/80 to-cyan-600/60 rounded-2xl shadow-xl p-6 border-l-8 border-cyan-400 hover:scale-[1.02] transition-transform duration-300">
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

                <div className="relative flex items-start w-full z-10">
                    <div className="flex flex-col items-center mr-8">
                        <div className="bg-cyan-500 p-3 rounded-full shadow-lg animate-pulse">
                            <FaLock className="text-white text-2xl" />
                        </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-cyan-900/80 to-cyan-700/60 rounded-2xl shadow-xl p-6 border-l-8 border-cyan-500 hover:scale-[1.02] transition-transform duration-300">
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
        </div>
    );
}