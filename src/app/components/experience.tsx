import React from "react";

export default function Experience() {
  return (
    <div className="p-6 min-h-screen">
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cyan-500/50"></div>

        {/* Parkar Digital */}
        <div className="flex items-center justify-between mb-12">
          {/* Left Side Content */}
          <div className="w-1/2 pr-6">
            <div className="bg-cyan-800/50 p-6 rounded-3xl shadow-lg border border-cyan-500/30 hover:shadow-2xl transition-shadow">
              <div className="absolute -left-[18px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-cyan-300"></div>
              <h2 className="text-xl font-semibold text-cyan-100">Software Engineer 1</h2>
              <p className="text-cyan-300 mt-1">Parkar Digital | Pune, India</p>
              <p className="text-sm text-cyan-400 mt-1">Feb 2024 – Present</p>
              <ul className="mt-4 space-y-2 text-cyan-200 list-disc pl-6">
                <li>Orchestrated Lazy Loading principles, boosting average session duration by 30%.</li>
                <li>
                  Optimized Node.js API responses and load balancing, reducing latency and enhancing scalability.
                </li>
                <li>
                  Designed cloud architecture with Azure Bicep for Infrastructure as Code (IaC) deployments.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Placeholder */}
          <div className="w-1/2"></div>
        </div>

        {/* Thinkseed Systems */}
        <div className="flex items-center justify-between mb-12">
          {/* Left Side Placeholder */}
          <div className="w-1/2"></div>

          {/* Right Side Content */}
          <div className="w-1/2 pl-6">
            <div className="bg-cyan-800/50 p-6 rounded-3xl shadow-lg border border-cyan-500/30 hover:shadow-2xl transition-shadow">
              <div className="absolute -right-[18px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-cyan-300"></div>
              <h2 className="text-xl font-semibold text-cyan-100">Software Development Engineering Intern</h2>
              <p className="text-cyan-300 mt-1">Thinkseed Systems | Bangalore, India</p>
              <p className="text-sm text-cyan-400 mt-1">Jun 2023 – Dec 2023</p>
              <ul className="mt-4 space-y-2 text-cyan-200 list-disc pl-6">
                <li>Implemented Encryption/Decryption modules in Spring Boot for vehicle data.</li>
                <li>
                  Optimized API response time using caching, query optimization, and efficient data processing.
                </li>
                <li>
                  Implemented load balancing to ensure high availability and scalability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}