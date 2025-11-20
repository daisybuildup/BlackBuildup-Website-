'use client'
import React from 'react'
import { useState } from 'react'

const FeaturedProjectClient = ({featuredproject}) => {
 

  // Modal component
const PModalCard = ({ modal, setIsOpenProp }) => {
  return (
    <div
      className="fixed font-mont inset-0 mx-auto w-full min-h-screen bg-black/70 flex justify-center px-6 items-center z-[1000]"
      onClick={() => setIsOpenProp(null)} // close on background click
    >
      {/* Modal content */}
      <div
        className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
                   max-h-[70vh] md:max-h-[85vh] overflow-y-auto scrollbar-hide text-[#4B5564] text-left rounded-[12px] bg-white py-8 px-6"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h1 className="text-[#0F4082] font-bold text-[32px]">{modal.title}</h1>
        <p className="pt-6">{modal.description}</p>
         <h2 className="text-[#0F4082] font-bold pt-6 text-[24px]">
             
              {modal.timeline ? (
                <>
                  Timeline <br/> <span className='font-normal text-base text-[#4B5564]'>{modal.timeline}</span>
                </>
              ) : null}
               </h2>
            <h1 className="text-[#0F4082] font-bold text-[24px] pt-6">Key Highlights</h1>
             {modal.highlight.map((detail, idx) => (
          <ul key={idx} className="list-disc mt-3 marker:text-[#82510F] flex flex-col gap-3 pl-5">
            <li>{detail}</li>
          </ul>
        ))}    
       
                 
        <h2 className="text-[#0F4082] font-bold pt-6 text-[24px]">Impact</h2>
         <p className='mt-3'>{modal.impact}</p>     
      </div>
    </div>
  );
};


const [projectModal, setProjectModal] = useState(null);
  return (
    <>
          <div className='flex flex-col justify-center items-center gap-6 '>
     
       {featuredproject.map((project, idx) => (
          <div key={idx} className=' my-8 p-6 flex flex-col  justify-between items-start '>
            <h1 className='bg-[#AD8E63] py-3 px-1.5  text-white rounded-2xl font-medium'>{project.tag}</h1>
              <h2 className='text-[#0F4082] font-bold md:text-[40px]  text-xl py-3'>{project.title}</h2>  
              <p className='text-[#4B5564]'>{project.subtitle}</p> 
              <p className='text-[#4B5564] mt-7 lg:w-[90%] w-full'>{project.description}</p>
            <p className='text-[#4B5564]  pt-3'>
              {project.timeline ? (
                <>
                  <span className='font-semibold'>Timeline:</span> {project.timeline}
                </>
              ) : null}
            </p>
            <div className='grid xl:grid-cols-3 gap-6 w-full mt-6 '>
            {
            project.stats.map((stat, index) => (
              <div key={index} className='flex flex-col items-center border-2 rounded-2xl py-8 px-2 border-[#E5E7EB] gap-4 mt-4'>
                <img src={stat.icon} alt={stat.label} width={40} height={40} /> 
                
                  <h3 className='text-[#0F4082] font-bold md:text-[40px] text-[20px] '>{stat.value}</h3>
                  <p className='text-[#4B5564]'>{stat.label}</p>
                
              </div>
            ))
          }
          </div>
           <button className='mt-6 text-white font-semibold bg-[#0F4082]  rounded-2xl py-3 mx-auto  hover:bg-[#0a3976] w-[90%] md:w-[20%] cursor-pointer' onClick={()=>setProjectModal(project)}>Read More</button>
          </div>
        ))} 
        {projectModal && <PModalCard modal={projectModal} setIsOpenProp={setProjectModal} />}
    </div>
    </>
  )
}

export default FeaturedProjectClient