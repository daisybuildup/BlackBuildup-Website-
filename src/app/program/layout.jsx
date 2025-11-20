import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import NavTabs from './component/NavTabs'
import TypewriterText from '../components/TypewriterText'
import ButtonDiv from './component/ButtonDiv'

export const metadata = {
  title: "Programs | Blackbuildup",
  description: "Blackbuildup program page",
};

const layout = ({children}) => {
  return (
    <div className=' max-w-380 mx-auto min-h-screen'>
        <Header/>
          <div className="relative xl:h-[100vh] h-[75vh] bg-[url('/blackbuildprogram.jpg')] bg-cover bg-center">
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#0F4082]/50"></div>

    {/* Content */}
    <div className="relative flex flex-col text-center px-5 items-center justify-center h-full">
      <h1 className="text-white lg:text-4xl text-[18px] md:text-2xl font-bold mt-15 md:pb-4 pb-2 md:w-[55%] text-center" >Culturally-Responsive Programs for BC's Black Entrepreneurs</h1>
      <TypewriterText  text={['We empower Black entrepreneurs in BC to launch and scale sustainable businesses. Our programs—delivered with partners like ESDC, WAGE, and BCIT—provide the mentorship, tools, and networks to drive real economic growth.']}/>
    </div>
    
  </div>
  <div className='bg-[#F1F1F1]'>
  <h1 className=' text-[#0F4082] font-bold md:text-5xl  text-[30px] text-center pt-[70px] pb-8'>Our Pillars</h1>
  <NavTabs/>
     {children}
     </div>
     <section className='py-[72px] px-[25px] flex flex-col justify-center items-center text-center  bg-[#0F4082] '>
       <h1 className='md:text-[40px] text-white text-[30px] font-bold'>Ready to Make Your Impact?</h1>
       <p className='pt-4 pb-8 text-white/70'>Your community needs leaders like you. Take the first toward creating the change you want to see in the <br/>word.</p>
      
      <ButtonDiv/>
        </section>

     <Footer/>
    </div>
  )
}

export default layout


