import { FaCloud, FaLock } from "react-icons/fa";

export default function Experience() {
    return (
        <div className="w-full px-2 py-6">
            <div className="relative flex flex-col items-center">
                {/* Vertical timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/80 to-cyan-700/40 rounded-full z-0" />
                
                {/* Parkar Digital */}
                <div className="relative flex items-start w-full mb-12 z-10">
                    {/* Timeline Icon */}
                    <div className="flex flex-col items-center mr-8">
                        <div className="bg-cyan-400 p-3 rounded-full shadow-lg animate-pulse">
                            <FaCloud className="text-white text-2xl" />
                        </div>
                        <div className="flex-1 w-px bg-cyan-400/40"></div>
                    </div>
                    {/* Card */}
                    <div className="flex-1 bg-gradient-to-br from-cyan-800/80 to-cyan-600/60 rounded-2xl shadow-xl p-6 border-l-8 border-cyan-400 hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex flex-row items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-white font-[Quicksand]">Software Engineer 1, Parkar Digital</h3>
                            <span className="ml-auto text-cyan-200 text-sm font-semibold">2024 Feb – present • Pune, India</span>
                        </div>
                        <ul className="list-disc ml-6 text-cyan-100 space-y-2 mt-2">
                            <li>
                                <span className="font-semibold text-cyan-300">Lazy Loading:</span> Orchestrated the application of Lazy Loading principles, leading to a <span className="text-yellow-300 font-bold">30% increase</span> in average session duration as users experienced faster content loading, directly contributing to better user engagement and retention.
                            </li>
                            <li>
                                <span className="font-semibold text-cyan-300">Node.js Performance:</span> Improved the project's performance by optimizing API responses and load balancing, implementing efficient data handling, reducing latency and enhancing scalability.
                            </li>
                            <li>
                                <span className="font-semibold text-cyan-300">Cloud & IaC:</span> Designed cloud architecture and used <span className="text-blue-300 font-bold">Azure Bicep</span> for Infrastructure as Code (IaC) to deploy across environments.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Thinkseed Systems */}
                <div className="relative flex items-start w-full z-10">
                    {/* Timeline Icon */}
                    <div className="flex flex-col items-center mr-8">
                        <div className="bg-cyan-500 p-3 rounded-full shadow-lg animate-pulse">
                            <FaLock className="text-white text-2xl" />
                        </div>
                    </div>
                    {/* Card */}
                    <div className="flex-1 bg-gradient-to-br from-cyan-900/80 to-cyan-700/60 rounded-2xl shadow-xl p-6 border-l-8 border-cyan-500 hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex flex-row items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-white font-[Quicksand]">Software Development Engineering Intern, Thinkseed Systems</h3>
                            <span className="ml-auto text-cyan-200 text-sm font-semibold">2023 Jun – 2023 Dec • Bangalore, India</span>
                        </div>
                        <ul className="list-disc ml-6 text-cyan-100 space-y-2 mt-2">
                            <li>
                                <span className="font-semibold text-cyan-300">Encryption/Decryption:</span> Implemented Encryption/Decryption modules in the existing Spring Boot application for vehicle data using cryptographic algorithms.
                            </li>
                            <li>
                                <span className="font-semibold text-cyan-300">API Optimization:</span> Optimized the API response time by implementing caching, query optimization, and efficient data processing techniques.
                            </li>
                            <li>
                                <span className="font-semibold text-cyan-300">Load Balancing:</span> Implemented load balancing to distribute traffic evenly across servers, ensuring high availability and scalability.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}