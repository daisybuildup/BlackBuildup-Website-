'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
const Page = () => {

  
  return (
    <>
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
  <div className="flex justify-center md:flex-row flex-col items-center gap-6 py-18 px-6 md:px-16 bg-[#F5F6FA]">
    <div className='max-w-[650px] py-8 px-6 flex flex-col gap-6 bg-white text-[#4B5564] rounded-xl'>
      <div className='flex justify-start items-center gap-7 ' >
        <Image src='/lampon.svg' width={64} height={64} alt='dartboard.svg'/>
        <h1 className='text-[#0F4082] font-bold lg:text-[40px] text-[25px]'>Our Mission</h1>
      </div>
      <p className='md:w-[95%] w-full'>Empower Canadian youth through innovative programs, meaningful mentorship, and sustainable career pathways that build stronger communities nationwide.</p>
    </div>

 <div className='max-w-[650px] py-8 px-6 flex flex-col gap-6 bg-white text-[#4B5564] rounded-xl'>
      <div className='flex justify-start items-center gap-7 ' >
        <Image src='/dartboard.svg' width={64} height={64} alt='dartboard.svg'/>
        <h1 className='text-[#0F4082] font-bold lg:text-[40px] text-[25px]'>Our Vision</h1>
      </div>
      <p className='md:w-[95%] w-full'>In Canada where every young person has access to transformative opportunities, creating a generation of empowered leaders driving positive change.</p>
    </div>
  </div>
  <div className='bg-white w-full flex flex-col justify-center items-center py-10 px-5 md:px-16'>
<h1 className='text-[#0F4082] font-bold lg:text-[40px] text-[30px]'>Our Journey</h1>
<Image alt='journey' src='/journey.svg' width={1100} height={400} className=' w-100% h-auto mt-9'/>
  </div>
  </>
  )
}

export default Page