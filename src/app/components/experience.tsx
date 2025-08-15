import { FaCloud, FaLaptop, FaLock } from "react-icons/fa";

export default function Experience() {
    return (
        <div className="w-full px-2 py-6 animate-fade-in">
            <div className="relative flex flex-col items-center">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-tr from-black to-violet-700 rounded-full z-0 transition-all duration-700" />
                <div className="relative flex items-start w-full z-10 group animate-slide-right">
                    <div className="flex flex-col items-center mr-8">
                        <div className="bg-violet-600 p-3 rounded-full shadow-lg animate-pulse">
                            <FaLaptop className="text-white text-2xl" />
                        </div>
                    </div>
                    <div className="flex-1 rounded-2xl shadow-xl mb-12 p-6 border-l-8 border-violet-400 bg-gradient-to-tr from-black to-violet-700 hover:shadow-violet-400/30 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up delay-200">
                        <div className="flex flex-row items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-white font-[Quicksand]">Full Stack Developer, Lumega Labs</h3>
                            <span className="ml-auto text-violet-200 text-sm font-semibold">2025 July – Present • Noida, India</span>
                        </div>
                        <ul className="list-disc ml-6 text-violet-100 space-y-2 mt-2">
                            <li>
                                <span className="font-semibold text-violet-300">Backend Development::</span> Built scalable REST APIs in Node.js for real-time feature-performance reporting and optimized PostgreSQL queries and integrated NoSQL for dynamic data storage.
                            </li>
                            <li>
                                <span className="font-semibold text-violet-300">Frontend Development:</span> Developed interactive analytics dashboards in React.js with Chart.js visualizations.
                            </li>
                            <li>
                                <span className="font-semibold text-violet-300">Cloud & Deployment:</span> Deployed serverless functions using AWS Lambda and SAM for cost-efficient backend operations.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative flex items-start w-full mb-12 group animate-slide-left">
                    <div className="flex flex-col items-center mr-8">
                        <div className="bg-violet-600 p-3 rounded-full shadow-lg animate-pulse">
                            <FaCloud className="text-white text-2xl" />
                        </div>
                        <div className="flex-1 w-px bg-violet-300 transition-all duration-700"></div>
                    </div>
                    <div className="flex-1 bg-gradient-to-tr from-black to-violet-700 rounded-2xl shadow-xl p-6 border-l-8 border-violet-400 hover:scale-[1.02] hover:shadow-violet-400/30 transition-all duration-300 animate-fade-in-up">
                        <div className="flex flex-row items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-white font-[Quicksand]">Software Engineer 1, Parkar Digital</h3>
                            <span className="ml-auto text-violet-200 text-sm font-semibold">2024 Feb – 2025-Jul • Pune, India</span>
                        </div>
                        <ul className="list-disc ml-6 text-violet-100 space-y-2 mt-2">
                            <li>
                                <span className="font-semibold text-violet-300">Lazy Loading:</span> Improved content load speed, boosting session duration by <span className="text-violet-300 font-bold">30%</span>.
                            </li>
                            <li>
                                <span className="font-semibold text-violet-300">Node.js Performance:</span> Optimized APIs and load balancing for faster, scalable backend.
                            </li>
                            <li>
                                <span className="font-semibold text-violet-300">Cloud & IaC:</span> Designed Azure cloud setup and automated deployments with Bicep.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative flex items-start w-full z-10 group animate-slide-right">
                    <div className="flex flex-col items-center mr-8">
                        <div className="bg-violet-600 p-3 rounded-full shadow-lg animate-pulse">
                            <FaLock className="text-white text-2xl" />
                        </div>
                    </div>
                    <div className="flex-1 rounded-2xl shadow-xl p-6 border-l-8 border-violet-400 bg-gradient-to-tr from-black to-violet-700 hover:shadow-violet-400/30 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up delay-200">
                        <div className="flex flex-row items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-white font-[Quicksand]">SDE Intern, Thinkseed Systems</h3>
                            <span className="ml-auto text-violet-200 text-sm font-semibold">2023 Jun – 2023 Dec • BLR, India</span>
                        </div>
                        <ul className="list-disc ml-6 text-violet-100 space-y-2 mt-2">
                            <li>
                                <span className="font-semibold text-violet-300">Encryption:</span> Added secure encryption for vehicle data in Spring Boot.
                            </li>
                            <li>
                                <span className="font-semibold text-violet-300">API Optimization:</span> Reduced API response time with caching and query tuning.
                            </li>
                            <li>
                                <span className="font-semibold text-violet-300">Load Balancing:</span> Ensured high availability by distributing server traffic.
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
                .delay-200 { animation-delay: 0.2s !important; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes slideLeft { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes slideRight { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
            `}</style>
        </div>
    );
}