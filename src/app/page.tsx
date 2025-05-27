import Image from "next/image";
import SidebarProfile from "./components/SidebarProfile";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full justify-around min-h-screen bg-cyan-400">
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 p-4 justify-end">
        <div className="w-[300px]">
          <div className="w-[310px] h-[500px] border-[0.5px] border-black rounded-4xl p-4 bg-cyan-500 shadow-2xl">
            <SidebarProfile/>
          </div>
        </div>
        <div>
          <div className="w-[800px] h-auto border-[0.5px] border-2 border-gray-600 rounded-4xl p-4 bg-cyan-500 shadow-2xl">
            
          </div>
        </div>
      </div>      
    </div>
  );
}