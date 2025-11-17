
import TypewriterText from '../components/TypewriterText'
import React from 'react'

import Program  from './component/Program'
import ButtonDiv from './component/ButtonDiv'
const Page = () => {

  
  return (
    <>
   <div className="relative md:h-[80vh] h-[60vh] bg-[url('/programbg.jpg')] bg-cover bg-center">
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#0F4082]/50"></div>

    {/* Content */}
    <div className="relative flex flex-col text-center px-5 items-center justify-center h-full">
      <h1 className="text-white md:text-4xl text-[20px] font-bold pb-4 md:w-[55%] text-center" >Culturally-Responsive Programs for BC's Black Entrepreneurs</h1>
      <TypewriterText  text={['We empower Black entrepreneurs in BC to launch and scale sustainable businesses. Our programs—delivered with partners like ESDC, WAGE, and BCIT—provide the mentorship, tools, and networks to drive real economic growth.']}/>
    </div>
    
  </div>
   <Program/>
    <section className='py-[72px] px-[25px] flex flex-col justify-center items-center text-center  bg-[#0F4082] '>
       <h1 className='md:text-[40px] text-white text-[30px] font-bold'>Ready to Make Your Impact?</h1>
       <p className='pt-4 pb-8 text-white/70'>Your community needs leaders like you. Take the first toward creating the change you want to see in the <br/>word.</p>
      
      <ButtonDiv/>
        </section>

   
   </>
  )
}

export default Page