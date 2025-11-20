import React from 'react'
import TypewriterText from '../components/TypewriterText'
import ButtonDiv from './component/ButtonDiv'
import Project from './component/Project'
const page = () => {
  
  return (
    <>
    <div className="relative xl:h-[100vh] h-[60vh] bg-[url('/pandi.jpg')] bg-cover bg-center">
       {/* Overlay */}
       <div className="absolute inset-0 bg-[#0F4082]/50"></div>
   
       {/* Content */}
       <div className="relative flex flex-col text-center px-5 items-center justify-center h-full">
         <h1 className="text-white lg:text-4xl text-[18px] md:text-2xl pb-4 font-bold">Our Projects</h1>
          <TypewriterText text={["Creating lasting impact through collaboration and innovation"]}/>
       </div>
     </div>
     <section className='bg-[#F5F6FA] py-18 px-5 md:px-16 '>
      
       <Project/>
     </section>
     <div className='bg-white py-18 text-center flex flex-col justify-center items-center px-5 md:px-16'>
      <h1 className='  pb-4 text-[#0F4082] font-bold lg:text-[40px] text-center text-[30px]'>Impact Through Collaboration</h1>
      <p className='text-[#4B5564] text-lg md:w-[90%] xl:w-[65%]'>“Together with our partners, we’ve mobilized <span className='font-semibold text-[#0F4082]'>$8 million</span> for ecosystem development, empowered <span className='font-semibold text-[#0F4082]'>3,000+ entrepreneurs,</span> and organized BC’s only <span className='font-semibold text-[#0F4082]'>Black-led Women Business Exhibit</span>”</p>
      
      <div className='grid md:grid-cols-3 gap-8  pt-12'>
      <div className='flex flex-col gap-5 justify-center items-center px-8'>
        <h1 className='font-bold text-3xl text-[#0F4082]'>$8M</h1>
         <p className='text-[#4B5564]'>Mobilised</p>
      </div>
       <div className='flex flex-col gap-5 justify-center border-x border-x-[#E5E7EB] items-center px-8'>
        <h1 className='font-bold text-3xl text-[#0F4082]'>3000+</h1>
         <p className='text-[#4B5564]'>Entrepreneurs</p>
      </div>
       <div className='flex flex-col gap-5 justify-center items-center px-8'>
        <h1 className='font-bold text-3xl text-[#0F4082]'>1st</h1>
         <p className='text-[#4B5564]'>Black-led Exhibit</p>
      </div>
      
      </div>
     </div>
     <section className='py-[72px] px-[25px] flex flex-col justify-center items-center text-center  bg-[#0F4082] '>
       <h1 className='md:text-[40px] text-white text-[30px] font-bold xl:w-[50%] pb-8'>Join us in creating educational opportunities for all</h1>
            <ButtonDiv/>
        </section>
     </>
  )
}

export default page