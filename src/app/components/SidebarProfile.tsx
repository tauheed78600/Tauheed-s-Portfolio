export default function SidebarProfile() {
    return (
        <div>
            <div className="flex flex-col items-center justify-between mb-4 mt-1">
                <div className="border-b-[0.5px] border-b-white flex flex-col gap-3 w-full h-[150px]">
                    <div className="flex flex-row gap-4">
                        <div className="border-[0.5px] border-white w-20 h-20 rounded-full"></div>
                        <div className="mt-3">
                            <h2 className="font-[Open_Sans] font-bold text-2xl whitespace-nowrap">Tauheed Darekar</h2>
                            <strong className="font-[Quicksand] w-full">Fullstack Developer</strong>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-cyan-600 font-[Open_Sans] text-white px-4 py-2 rounded-2xl hover:bg-cyan-700 rounded-lg shadow-[0_0_20px_5px_rgba(59,250,246,0.75)] transition duration-300">
                            Hello World
                        </button>
                    </div>
                </div>

            </div>

        </div>
        // </div>
    );
}