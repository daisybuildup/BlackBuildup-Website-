'use client'

import Image from "next/image";
import Header from "./component/header";
import React from "react";
import ProgramCard from "./component/programCard";
import { useState } from "react";
import ModalCard from "./component/modalCard";
import PillarCard from "./component/pillarCard";
import Footer from "./component/footer";
import Review from "./component/review";
import NationalCard from "./component/nationalCard";
import TransformativeProgram from "./component/tProgram";

export default function Home() {
const [isOpen, setIsOpen] = useState(false);
const impacts = [
  {img:'/active.svg', header:'Apply Today',text:'Join our next leadership cohort'},
  {img:'/active.svg', header:'Learn & Grow',text:'Develop essential leadership skills'},
  {img:'/active.svg', header:'Create Impact',text:'Transform your community'}
]
 
 return (
    <div className="max-w-380  mx-auto  ">
    <Header/>
   
     <section className='xl:grid-cols-2 grid justify-between items-center pt-[150px] px-5 mx-auto md:mx-11 gap-[20px] xl:gap-[270px]'>
      <div className=' flex flex-col justify-center xl:items-start items-center '>
      <h2 className=' text-[#0F4082] md:text-[20px] text-[14px] bg-[#edf0fc] xl:text-left text-center  font-medium rounded-2xl xl:w-[411px]  px-2.5 py-2.5'>Empowering Communities Since 2020 </h2>
      <h1 className=' lg:text-[40px] text-[#AD8E63] md:w-[85%] xl:text-left text-center xl:w-full mt-4   md:mt-6 md:text-[30px]  text-[20px] font-bold'>Empowering <span className='text-[#333333]'>Communities,</span> Shaping <span className="text-[#333333]">Leaders</span></h1>
      <p className='text-[#4B5564] md:text-lg  text-base text-center w-[90%] xl:w-full xl:text-left mt-6'>We are Canada’s hub for advocacy, leadership, and innovation with Black communites</p>
      <div className='flex justify-center flex-wrap md:flex-nowrap xl:justify-start items-center gap-6 mt-6'>
      <button className='text-white bg-[#AD8E63] hover:bg-[#a57d45] cursor-pointer py-3 px-8.5 font-medium rounded-[14px]'>Get Involved Today</button>
      <button  className='text-[#0F4082] border-[#0F4082] border cursor-pointer hover:bg-[#0f4082] hover:text-white  py-3 px-10 font-medium rounded-[14px]'>Explore Programs</button>
      </div>
      </div>
      <div className='w-auto flex justify-center items-center'>
      <Image src='/cclchero.jpg' alt='community img' width={570} height={565} className=''/>
      </div>
     </section>
     <section className=' md:px-11 px-5  py-[72px] mt-[72px] w-full h-auto bg-[#0F4082] text-white flex flex-col justify-center items-center'>
      <h2 className='p-2.5 bg-[#F5F6FA] rounded-full font-medium text-[#0F4082]'>Our Mission</h2>
      <h1 className="lg:text-[40px] text-center text-[20px] md:text-[30px] font-semibold pt-6">Building Stronger Communities Through Leadership</h1>
      <p className='text-lg mt-3.5 text-white/70 text-center'>Our impact speaks for itself. Join thousands of leaders who are making a difference in their communities.</p>
      <ProgramCard/>
      <button className="mt-12 py-3 px-3.5 bg-[#AD8E63] rounded-2xl cursor-pointer hover:bg-[#a57d45]" onClick={()=>setIsOpen(true)}>Learn More About CCLC</button>
      {/* Modal Section */}
        {isOpen && <ModalCard setIsOpenProp={setIsOpen}
      modal={{titleone: "Our Organization",
        textone: "Building organizational credibility through transparency and demonstrating the professional expertise that has driven exceptional growth.",
        titletwo:'Key Components:',
        listone:'Mission & Vision: Clear organizational purpose focused on community empowerment and systemic change.',
        listtwo:'Leadership Team: Professional expertise and strategic vision under Franklin’s Bouguep’s leadership',
        listthree:'Impact Metrics: Quantifiable results demonstrating organizational effectiveness and transformation',
        listfour:'Partners & Collaborators: Strategic alliances that amplify our reach and enhance program delivery',
        titlethree:'Our Impact:',
        texttwo:'Our transparent approach to sharing mission, leadership, and measurable outcomes has contributed to a 350% growth in fundraising and enhanced organizational credibility.'
      }}
  />}
     </section>
     <section className='md:px-11 w-full h-auto py-[72px] bg-[#ffffff] text-black flex flex-col justify-center items-center'>
      <h2 className=' py-2.5 px-2.5 bg-[#edf0fc] text-center shadow-sm text-[#0F4082] font-medium rounded-full'>Our Pillars</h2>
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
       <p className='lg:w-[55%] w-[90%] h-auto'>The Canada Community and Leadership Center was founded in 2021 to address the specific needs of Canadians while building bridges across diverse communities.</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-8 justify-center px-5">
  {/* Mission */}
  <div className="w-full max-w-[620px] h-auto py-8 px-6 text-white bg-[#0f4082]  rounded-[12px]">
    <h1 className="text-white font-bold text-[30px] md:text-[40px] pb-6">
      Our Mission
    </h1>
    <h2 className="text-left">
      To develop and empower community leaders through innovative programs,
      strategic partnerships, and sustainable initiatives that create lasting
      positive change in communities worldwide.
    </h2>
    <ul className="text-left list-disc mt-3 marker:text-[#AD8E63] flex flex-col gap-3 pl-5">
      <li>Executive Coaching</li>
      <li>Team Building</li>
      <li>Strategic Planning</li>
      <li>Communication Skills</li>
    </ul>
  </div>

  {/* Vision */}
  <div className="w-full max-w-[620px] h-auto py-8 px-6 text-white bg-[#AD8E63] rounded-[12px]">
    <h1 className="text-white font-bold text-[30px] md:text-[40px] pb-6">
      Our Vision
    </h1>
    <h2 className="text-left">
      To be the catalyst for a global network of empowered communities where
      every individual has the opportunity to lead, contribute, and thrive in
      an inclusive environment.
    </h2>
    <ul className="text-left list-disc mt-3 marker:text-[#0F4082] flex flex-col gap-3 pl-5">
      <li>Global network of connected communities</li>
      <li>Accessible leadership opportunities for all</li>
      <li>Sustainable community transformation</li>
    </ul>
  </div>
</div>

     </section>

      <section className='w-full h-auto text-center text-[#4B5564] flex justify-center items-center flex-col bg-[#F9FAFB] py-[72px]'>
       <h2 className="bg-[#edf0fc] text-[#0f4082] md:text-[20px] rounded-full shadow-sm py-2.5 px-2.5 font-medium  ">Our Impact</h2>
       <h1 className='pt-6 pb-4 md:text-[40px] text-[30px] text-[#0F4082] text-center  font-bold'>Our National Impact</h1>
       <p className="px-[20px]">Measuring the difference we’re making in communities across the country through data-driven insights.</p>
       <NationalCard/>
       <div className='w-[90%] h-auto py-[48px] shadow-xl mt-8 bg-white rounded-[12px]'>
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
       </div>
      </section>

     <section className='py-[72px] px-[20px] flex flex-col justify-center items-center'>
        <h2 className='text-[#0F4082] bg-[#edf0fc] rounded-full shadow-sm py-2.5 px-2.5 font-medium md:text-[20px]'>Our Mission</h2>
        <h1 className='md:text-[40px] text-[30px] text-[#0F4082] text-center font-bold pt-6 pb-4'>Voices of Change</h1>
        <p className='text-[#4B5564] text-center text-[18px]'>Hear from the leaders who are making a difference in their communities every day.</p>
        <Review/>
        <div className=' xl:w-[60%] w-[95%] bg-[#0F4082] text-center flex justify-center items-center rounded-xl mt-[48px] flex-col py-8 px-[52px] gap-[24px] h-auto'>
          <h1 className='md:text-[40px] text-white text-[30px] font-bold'>Ready to Add Your Voice?</h1>
          <h2 className='text-white/70'>Join our community of changemakers and start making the impact you’ve always envisioned</h2>
          <button className='py-3 px-3.5 bg-[#AD8E63] hover:bg-[#a57d45] cursor-pointer font-medium rounded-[16px] h-auto'>Apply for our Next Cohort</button>
          </div>
     </section>

     <section className='py-[72px] px-[25px] flex flex-col justify-center items-center text-center  bg-[#0F4082] '>
    <h1 className='md:text-[40px] text-white text-[30px] font-bold'>Ready to Make Your Impact?</h1>
    <p className='pt-4 pb-8 text-white/70'>Your community needs leaders like you. Take the first toward creating the change you want to see in the <br/>word.</p>
    <div className='flex gap-6'>
      <button className="bg-[#E5E7EBF6] text-[#0F4082] py-3 cursor-pointer hover:bg-blue-200 px-[35px] font-medium rounded-2xl">Join Our Community</button>
      <button className="bg-[#E5E7EBF6] text-[#0F4082] py-3 cursor-pointer hover:bg-blue-200 px-[35px] font-medium rounded-2xl">Explore Programs</button>
    </div>
    <div className='flex justify-center mt-[56px]  gap-[10px] md:gap-[84px] items-start md:items-center'>
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
