'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Page = () => {

  
  return (
   <div className="relative md:h-[70vh] h-[60vh] bg-[url('/about.jpg')] bg-cover bg-center">
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#0F4082]/50"></div>

    {/* Content */}
    <div className="relative flex flex-col text-center px-5 items-center justify-center h-full">
      <h1 className="text-white md:text-4xl text-[30px] font-bold">About Us</h1>
      <p className='text-white md:text-[18px]'><Typewriter
        words={['Discover our mission, vision, impact, and leadship']}
        loop={1} // only once
        cursor={false} // no blinking cursor
        typeSpeed={40}
        deleteSpeed={0}
        delaySpeed={1000}
      /></p>
    </div>
  </div>
  )
}

export default Page