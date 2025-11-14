
import Link from "next/link"
import Image from "next/image";
import Header from "./components/header";
import React from "react";
import GetInvolvedSection, { ModalCardSection, CohortCardSection } from './components/HomeClient';
import ProgramCard from "./components/programCard";
import PillarCard from "./components/pillarCard";
import Footer from "./components/footer";
import Review from "./components/review";
import NationalCard from "./components/nationalCard";
import TransformativeProgram from "./components/tProgram";


export default function Home() {


const impacts = [
  {img:'/active.svg', header:'Apply Today',text:'Join our next leadership cohort'},
  {img:'/active.svg', header:'Learn & Grow',text:'Develop essential leadership skills'},
  {img:'/active.svg', header:'Create Impact',text:'Transform your community'}
]
 
 return (
    <div className="max-w-380  mx-auto  ">
    <Header/>
   
     <section className='xl:grid-cols-2 grid justify-between items-center pt-[150px] px-5 mx-auto md:mx-11 gap-5 xl:gap-[270px]'>
      <div className=' flex flex-col justify-center xl:items-start items-center '>
      <h2 className=' text-[#0F4082] md:text-[20px] text-[14px] bg-[#edf0fc] xl:text-left text-center  font-medium rounded-2xl xl:w-[411px]  px-2.5 py-2.5'>Empowering Communities Since 2020 </h2>
      <h1 className=' lg:text-[40px] text-[#AD8E63] md:w-[85%] xl:text-left text-center xl:w-full mt-4   md:mt-6 md:text-[30px]  text-[20px] font-bold'>Empowering <span className='text-[#333333]'>Black Entrepreneurs.</span> Building <span className="text-[#333333]">Resilient</span> Communities <span className="text-[#333333]">in BC and Beyond.</span></h1>
      <p className='text-[#4B5564] md:text-lg  text-base text-center w-[90%] xl:w-full xl:text-left mt-6'>As a Black-led ecosystem organization, Black Buildup advances inclusive business growth for Black-owned and Black-serving ventures across British Columbia and Western Canada. We provide culturally responsive training, mentorship, strategic partnerships, and access to capital—helping entrepreneurs thrive while fostering economic empowerment and community strength.</p>
      <div className='flex justify-center flex-wrap md:flex-nowrap xl:justify-start items-center gap-6 mt-6'>
      {/*<button className='text-white bg-[#AD8E63] hover:bg-[#a57d45] cursor-pointer py-3 px-8.5 font-medium rounded-[14px]' onClick={()=>setInvolve(true)}>Get Involved Today</button>
      {Involve &&<Cohort setIsOpenProp={()=>setInvolve(false)}
             involve={
              {header:'Get Involved',
               text:'Join our community and help creative positive change. Fill out the form below to get started.',
               textarea:'Share your interest, skills, or how you’d like to contribute...',
               programs: ['Volunteer','Become a Mentor','Partnership Opportunities','Donate/Support','Membership','Other'],
              }

             }
             /> }*/}
              <Link href='/program'><button  className='text-white bg-[#AD8E63] hover:bg-[#a57d45] cursor-pointer py-3 px-8.5 font-medium rounded-[14px]'>Explore Programs</button></Link>
             <GetInvolvedSection/>
     
      </div>
      </div>
      <div className='w-auto flex justify-center items-center'>
      <Image src='/cclchero.jpg' alt='community img' width={570} height={565} className=''/>
      </div>
     </section>
     <section className=' md:px-11 px-5  py-[72px] mt-[72px] w-full h-auto bg-[#0F4082] text-white flex flex-col justify-center items-center'>
      <h2 className='p-2.5 bg-[#F5F6FA] rounded-full font-medium text-[#0F4082]'>What we do</h2>
      <h1 className="lg:text-[40px] text-center text-[20px] md:text-[30px] font-semibold pt-6">Building Western Canada's Strongest Black Entrepreneurship Ecosystem</h1>
      <p className='text-lg mt-3.5 text-white/70 text-center md:max-w-[65%]'>Through targeted programs and deep collaboration, we address systemic barriers and create lasting economic change. Together with our consortium of partners, we've achieved:</p>
      <ProgramCard/>
      
      {/* Modal Section */}
  <ModalCardSection/>
     </section>
     <section className='md:px-11 w-full h-auto py-[72px] bg-[#ffffff] text-black flex flex-col justify-center items-center'>
      <h2 className=' py-2.5 px-2.5 bg-[#edf0fc] text-center shadow-sm text-[#0F4082] font-medium rounded-full'>Our Pillars Of Work</h2>
      <h1 className='text-[#0F4082] font-semibold lg:text-[40px] text-[30px] text-center pt-6 pb-4'>Our Four Pillars</h1>
      <p className='text-[#4B5564] text-[18px] pb-9 text-center w-[95%] lg:w-[70%] xl:w-[60%] '>Everything we do is built on these four foundational pillars that guide our mission to empower communities and shape leaders across Canada</p>
      <PillarCard/>
     </section>
     <section className='w-full h-auto text-center text-[#4B5564] flex justify-center items-center flex-col bg-[#F9FAFB] py-[72px]'>
      <h2 className='bg-[#edf0fc] text-[#0f4082] md:text-[20px] text-base rounded-full shadow-sm py-2.5 px-2.5 font-medium'>Featured Programs</h2>
      <h1 className='pt-6 pb-4 md:text-[40px] text-[30px] text-[#0F4082] text-center font-bold'>Transformative Programs</h1>
      <p className="md:w-[55%] w-[90%]">Our comprehensive programs are design to meet the diverse needs of communities and learders at every level.</p>
      <TransformativeProgram/>
     </section>

     <section className='w-full h-auto text-center text-[#4B5564] flex justify-center items-center flex-col bg-[#ffff] py-[72px]'>
       <h2 className="bg-[#edf0fc] text-[#0f4082] text-base md:text-[20px] rounded-full shadow-sm py-2.5 px-2.5 font-medium  ">Our Mission</h2>
       <h1 className='pt-6 pb-4 md:text-[40px] text-[24px]  text-[#0F4082] text-center font-bold'>Our Story, Our Mission</h1>
       <p className='lg:w-[55%] w-[90%] h-auto'>Blackbuildup was founded in 2021 to address the specific needs of Canadians while building bridges across diverse communities.</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-8 justify-center px-5">
  {/* Mission */}
  <div className="w-full max-w-[620px] h-auto py-8 px-6 text-white bg-[#0f4082]  rounded-xl">
    <h1 className="text-white font-bold text-[30px] md:text-[40px] pb-6">
      Our Mission
    </h1>
    <h2 className="text-left">
    To empower Black-led and Black-serving organizations in British Columbia through comprehensive training, strategic partnerships, and ecosystem development—driving inclusive business growth, job creation, and social change.
    </h2>
  
  </div>

  {/* Vision */}
  <div className="w-full max-w-[620px] h-auto py-8 px-6 text-white bg-[#AD8E63] rounded-xl">
    <h1 className="text-white font-bold text-[30px] md:text-[40px] pb-6">
      Our Vision
    </h1>
    <h2 className="text-left">
     A vibrant, self-sustaining Black entrepreneurship ecosystem in BC and Western Canada: innovative, interconnected, and community-driven, where every Black business has access to capital, markets, and support.
    </h2>
   
  </div>
</div>

     </section>

      <section className='w-full h-auto text-center text-[#4B5564] flex justify-center items-center flex-col bg-[#F9FAFB] py-[72px]'>
       <h2 className="bg-[#edf0fc] text-[#0f4082] md:text-[20px] rounded-full shadow-sm py-2.5 px-2.5 font-medium  ">Our Impact</h2>
       <h1 className='pt-6 pb-4 md:text-[40px] text-[30px] text-[#0F4082] text-center  font-bold'>Our National Impact</h1>
       <p className="px-5">Measuring the difference we’re making in communities across the country through data-driven insights.</p>
       <NationalCard/>
       {/*<div className='w-[90%] h-auto py-[48px] shadow-xl mt-8 bg-white rounded-[12px]'>
        <h1 className='pt-8 pb-4 md:text-[32px]  text-[20px] text-[#0F4082] text-center font-bold'>Communities We Serve</h1>
        <p className='text-[18px]'>Our programs reach communities in all 50 states</p>
        <div className="flex pt-7.5 flex-wrap justify-center items-center md:gap-[30px] px-[20px] gap-[10px] xl:gap-[70px]">
          <Image src='/pici.png' alt='person' width={128} height={128} className='rounded-full object-cover xl:w-[128px] xl:h-[128px] w-[60px] h-[60px] '/>
          <Image src='/picii.png' alt='person' width={128} height={128} className='rounded-full object-cover xl:w-[128px] xl:h-[128px] w-[60px] h-[60px] '/>
          <Image src='/piciii.png' alt='person' width={128} height={128} className='rounded-full object-cover xl:w-[128px] xl:h-[128px] w-[60px] h-[60px] '/>
          <Image src='/piciv.png' alt='person' width={128} height={128} className='rounded-full object-cover xl:w-[128px] xl:h-[128px] w-[60px] h-[60px] '/>
          <Image src='/picv.png' alt='person' width={128} height={128} className='rounded-full object-cover xl:w-[128px] xl:h-[128px] w-[60px] h-[60px] '/>
          <Image src='/picvi.png' alt='person' width={128} height={128} className='rounded-full object-cover xl:w-[128px] xl:h-[128px] w-[60px] h-[60px] '/>
        </div>
       </div>*/}
      </section>

     <section className='py-[72px] px-5 flex flex-col justify-center items-center'>
        <h2 className='text-[#0F4082] bg-[#edf0fc] rounded-full shadow-sm py-2.5 px-2.5 font-medium md:text-[20px]'>Our Mission</h2>
        <h1 className='md:text-[40px] text-[30px] text-[#0F4082] text-center font-bold pt-6 pb-4'>Voices of Change</h1>
        <p className='text-[#4B5564] text-center text-[18px]'>Hear from the leaders who are making a difference in their communities every day.</p>
        <Review/>
        <div className=' xl:w-[60%] w-[95%] bg-[#0F4082] text-center flex justify-center items-center rounded-xl mt-12 flex-col py-8 px-[52px] gap-6 h-auto'>
          <h1 className='md:text-[40px] text-white text-[30px] font-bold'>Ready to Add Your Voice?</h1>
          <h2 className='text-white/70'>Join our community of changemakers and start making the impact you’ve always envisioned</h2>
        <CohortCardSection/>
          </div>
     </section>

     <section className='py-[72px] px-[25px] flex flex-col justify-center items-center text-center  bg-[#0F4082] '>
    <h1 className='md:text-[40px] text-white text-[30px] font-bold'>Ready to Make Your Impact?</h1>
    <p className='pt-4 pb-8 text-white/70'>Your community needs leaders like you. Take the first toward creating the change you want to see in the <br/>word.</p>
    <div className='flex gap-6'>
      <button className="bg-[#E5E7EBF6] text-[#0F4082] py-3 cursor-pointer hover:bg-blue-200 px-[35px] font-medium rounded-2xl">Join Our Community</button>
      <Link href='/program'><button className="bg-[#E5E7EBF6] text-[#0F4082] py-3 cursor-pointer hover:bg-blue-200 px-[35px] font-medium rounded-2xl">Explore Programs</button></Link>
    </div>
    <div className='flex justify-center mt-14  gap-2.5 md:gap-[84px] items-start md:items-center'>
      {
        impacts.map((impact,index)=>(
          <div key={index} className='flex flex-col justify-center items-center'>
            <Image src={impact.img} alt={impact.header} width={80} height={80}/>
            <h1 className=' py-4 text-2xl text-white font-bold'>{impact.header}</h1>
            <p className='text-white/70'>{impact.text}</p>
          </div>
        ))
      }
    </div>
     </section>
     <Footer/>
    </div>
 
  );
}
