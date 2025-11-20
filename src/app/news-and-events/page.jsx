
import React from 'react'
import TypewriterText from '../components/TypewriterText'
import Partners from './component/Partners'
const page = () => {
  return (
    <div>
         <div className="relative xl:h-[100vh] h-[60vh] bg-[url('/news.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0F4082]/50"></div>
        
            {/* Content */}
            <div className="relative flex flex-col text-center px-5 items-center justify-center h-full">
              <h1 className="text-white lg:text-4xl text-[18px] md:text-2xl pb-4 font-bold">Collaboration is the Hear of Our Impact</h1>
               <TypewriterText text={["Our consortium model amplifies our reach and deep our impact. We with ecosystem builders, community organisations, and national allies to create a thriving environment for Black entrepreneurs in BC and beyond."]}/>
             
            </div>
            </div>
              <section className='bg-[#F1F2F5] w-full flex flex-col justify-center items-center py-10 px-5 md:px-16'>
<h1 className='text-[#0F4082] font-bold lg:text-[40px] text-[30px]'>Our Key Partners</h1>

<Partners/>
  </section>
    </div>
  )
}

export default page