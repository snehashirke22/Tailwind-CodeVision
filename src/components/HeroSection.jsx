import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-0 lg:mt-10">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Codevision AI-Powered Tools for
                <span className='bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'>  Next Generation </span> Developers
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Boost your coding with CodeVision — a platform to streamline development and foster collaboration. From web apps to AI solutions, we provide the tools to fuel your innovation.

            </p>
            <div className="flex justify-center my-5 md:my-10 flex-col md:flex-row">
                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:from-orange-400 hover:to-orange-600 transition-colors duration-300'>Start for free</a>
                <a href="#" className='py-3 px-4 mx-3 my-3 md:my-0 rounded-md border hover:bg-[rgba(255,255,255,0.1)] hover:border-neutral-400 transition-all"'>Documentation</a>

            </div>
            <div className="flex mt-10 justify-center flex-col md:flex-row">
                <video autoPlay loop muted className='rounded-lg md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag
                </video>
                <video autoPlay loop muted className='rounded-lg md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>
        </div>
    )
}

export default HeroSection