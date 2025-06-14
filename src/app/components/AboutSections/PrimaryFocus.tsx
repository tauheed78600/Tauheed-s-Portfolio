import Image from "next/image";

export default function PrimaryFocus() {
    return (
        <div>
            <div className='flex justify-center flex-col text-3xl font-[Quicksand] font-extrabold mt-4 items-center h-full w-full p-2'>
                <h2>Primary Focus</h2>
            </div>
            <div className="grid grid-cols-1 font-[Quicksand] md:grid-cols-2 gap-4 p-4">
                <div className="border-none group grid grid-cols-[20%_80%] rounded-2xl p-4 bg-gradient-to-tr from-black to-violet-700 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-violet-400">
                    <div>
                        <Image className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" src="icon-dev.svg" alt="Web Design & Development Icon" width={48} height={48} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Web Design & Development</h2>
                        <p className="text-gray-200">
                            Creating attractive, easy-to-use websites that work well for businesses and individuals online.
                        </p>
                    </div>
                </div>
                <div className="border-none group grid grid-cols-[20%_80%] rounded-2xl p-4 bg-gradient-to-tr from-black to-violet-700 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-violet-400">
                    <div>
                        <Image className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" src="icon-frameworks.svg" alt="Full-Stack Solutions Icon" width={48} height={48} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Full-Stack Solutions</h2>
                        <p className="text-gray-200">
                            Developing scalable web applications using JavaScript Frameworks, SQL Databases, C# and PHP.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 font-[Quicksand] md:grid-cols-2 gap-4 p-4">
                <div className="border-none group grid grid-cols-[20%_80%] rounded-2xl p-4 bg-gradient-to-tr from-black to-violet-700 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-violet-400">
                    <div>
                        <Image className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" src="icon-app.svg" alt="Mobile Apps Icon" width={48} height={48} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Mobile Apps</h2>
                        <p className="text-gray-200">
                            Creating and developing engaging mobile apps for iOS and Android devices.
                        </p>
                    </div>
                </div>
                <div className="border-none group grid grid-cols-[20%_80%] rounded-2xl p-4 bg-gradient-to-tr from-black to-violet-700 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-violet-400">
                    <div>
                        <Image className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" src="/cloudImage.png" alt="Deployments Icon" width={48} height={48} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Deployments</h2>
                        <p className="text-gray-200">
                            Deploying applications on cloud platforms like AWS, Azure, and DigitalOcean for high availability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}