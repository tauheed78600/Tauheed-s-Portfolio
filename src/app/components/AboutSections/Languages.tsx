import { FaJava, FaPython, FaJs, FaCuttlefish } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Languages() {
    return (
        <div>
            <h2 className="flex justify-center items-center text-3xl font-extrabold font-[Quicksand] mt-4 mb-4">Languages</h2>
            <div className="w-full border-none h-auto bg-gradient-to-tr from-black to-violet-700 rounded-2xl shadow-xl p-6">
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex font-[Quicksand] flex-col gap-4 bg-gradient-to-tr from-black to-violet-700 rounded-xl p-6 transition-shadow duration-300">
                        <div className="flex items-center gap-2 mb-2">
                            <FaGlobeAmericas className="text-cyan-300 text-2xl animate-spin-slow" />
                            <h2 className="text-xl font-bold text-cyan-200 font-[Quicksand]">Coding Languages</h2>
                        </div>
                        <ul className="flex flex-col gap-5 mt-2">
                            <li className="flex flex-col gap-1 group transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-3">
                                    <FaJs className="text-yellow-400 text-xl group-hover:animate-bounce" />
                                    <span className="text-white font-semibold">JavaScript</span>
                                </div>
                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-violet-300 transition-all duration-500 rounded-full" style={{ width: "85%" }} />
                                </div>
                                <span className="text-xs text-white-200 font-semibold ml-auto">85%</span>
                            </li>
                            <li className="flex flex-col gap-1 group transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-3">
                                    <FaJava className="text-orange-400 text-xl group-hover:animate-bounce" />
                                    <span className="text-white font-semibold">Java</span>
                                </div>
                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-violet-300 transition-all duration-500 rounded-full" style={{ width: "80%" }} />
                                </div>
                                <span className="text-xs text-white-200 font-semibold ml-auto">80%</span>
                            </li>
                            <li className="flex flex-col gap-1 group transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-3">
                                    <FaPython className="text-yellow-300 text-xl group-hover:animate-bounce" />
                                    <span className="text-white font-semibold">Python</span>
                                </div>
                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-violet-300 transition-all duration-500 rounded-full" style={{ width: "80%" }} />
                                </div>
                                <span className="text-xs text-white-200 font-semibold ml-auto">80%</span>
                            </li>
                            <li className="flex flex-col gap-1 group transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-3">
                                    <FaCuttlefish className="text-blue-300 text-xl group-hover:animate-bounce" />
                                    <span className="text-white font-semibold">C</span>
                                </div>
                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-violet-300 transition-all duration-500 rounded-full" style={{ width: "80%" }} />
                                </div>
                                <span className="text-xs text-white-200 font-semibold ml-auto">80%</span>
                            </li>
                            <li className="flex flex-col gap-1 group transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-3">
                                    <TbBrandCSharp className="text-purple-400 text-xl group-hover:animate-bounce" />
                                    <span className="text-white font-semibold">TypeScript</span>
                                </div>
                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-violet-300 transition-all duration-500 rounded-full" style={{ width: "80%" }} />
                                </div>
                                <span className="text-xs text-white-200 font-semibold ml-auto">80%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}