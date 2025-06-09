import React from 'react'

function Strengths() {
    return (
        <div>
            <div className='text-center mb-6 text-white'>
                <h2 className='text-3xl font-extrabold font-[Quicksand] text-white mb-4'>My Strengths</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                <div className='bg-gradient-to-b from-cyan-700/60 to-cyan-900/40 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
                    <h3 className='text-sm font-semibold mb-2'>Problem Solving</h3>
                    <p className='text-sm'>I excel at breaking down complex problems into manageable parts and finding effective solutions.</p>
                </div>
                <div className='bg-gradient-to-b from-cyan-700/60 to-cyan-900/40 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
                    <h3 className='text-sm font-semibold mb-2'>Creative Code</h3>
                    <p className='text-sm'>With great attention to detail, I build projects that are both visually stunning and flawlessly functional.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                <div className='bg-gradient-to-b from-cyan-900/10 to-cyan-900/60 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
                    <h3 className='text-sm font-semibold mb-2'>Future Focused</h3>
                    <p className='text-sm'>I leverage emerging technologies like Web3 and AI to build innovative, future-proof solutions.</p>
                </div>
                <div className='bg-gradient-to-b from-cyan-700/60 to-cyan-900/40 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
                    <h3 className='text-sm font-semibold mb-2'>Global Fluency</h3>
                    <p className='text-sm'>Speaking four languages allows me to connect with global clients and perfectly capture their vision.</p>
                </div>
            </div>
        </div>
    )
}

export default Strengths
