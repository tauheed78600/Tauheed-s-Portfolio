"use client";

import React from 'react';
import AboutMeText from './AboutMeText';
import PrimaryFocus from './PrimaryFocus';
import Languages from './Languages';
import DevelopmentSkills from './DevelopmentSkills';
import Strengths from '../Strengths';


export default function About() {
    return (
        <div className='flex justify-center flex-col items-center h-full w-full p-2 animate-fade-in'>
            <div className='border-none w-[95%] rounded-2xl p-4 bg-gradient-to-tr from-black to-violet-700 shadow-md animate-fade-in-up'>
                <AboutMeText />
            </div>
            <div className='animate-fade-in-up' style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                <PrimaryFocus/>
            </div>
            <div className='border-none w-[95%] p-4 animate-fade-in-up' style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <Languages />
            </div>
            <div className='animate-fade-in-up' style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <DevelopmentSkills/>
            </div>
            <div className='animate-fade-in-up' style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <Strengths/>
            </div>
            <style jsx>{`
                .animate-fade-in { animation: fadeIn 1s ease; }
                .animate-fade-in-up { animation: fadeInUp 0.8s both; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    )
}