"use client";

import React from 'react';
import AboutMeText from './AboutMeText';
import PrimaryFocus from './PrimaryFocus';
import Languages from './Languages';
import DevelopmentSkills from './DevelopmentSkills';


export default function About() {
    return (
        <div className='flex justify-center flex-col items-center h-full w-full p-2'>
            <div className='border-none w-[95%] rounded-2xl p-4 bg-gradient-to-b from-cyan-900/90 to-cyan-700/40 shadow-md'>
                <AboutMeText />
            </div>
            <div>
                <PrimaryFocus/>
            </div>
            <div className='border-none w-[95%] p-4'>
                <Languages />
            </div>
            <div>
                <DevelopmentSkills/>
            </div>
        </div>
    )
}