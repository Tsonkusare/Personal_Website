"use client";
import React from 'react'
import { Link } from 'react-scroll/modules'


const HomePage = () => {
  return (
    <section id='home'>
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div>

        </div>
        <div className='text-center items-center md:mt-2 md:w-3/5'>
          <h1 className='font-outline-2 font-bold text-4xl mt-6 ml-6 md:text-7xl md:mt-0'>Hi, I'm Tarang!</h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            I'm a{" "}
            <span className='font-semibold text-color1'>
              Undergraduate Student{" "}
            </span>
            at University of North Carolina in Charlotte. I am majoring in{" "}
            <span className='font-semibold text-color1'>
              Computer Science{" "}
            </span>
            with a concentration of{" "} 
            <span className='font-semibold text-color1'>
            AI, Gaming and Robotics.{" "}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomePage