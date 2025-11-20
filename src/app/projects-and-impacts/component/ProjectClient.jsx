'use client'
import React from 'react'
import { useState } from 'react'

const ProjectClient = ({projects}) => {
 

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
         
        <h2 className="text-[#0F4082] font-bold pt-6 text-[24px]">Impact</h2>
        {modal.impact.map((detail, idx) => (
          <ul key={idx} className="list-disc mt-3 marker:text-[#82510F] flex flex-col gap-3 pl-5">
            <li>{detail}</li>
          </ul>
        ))}              
      </div>
    </div>
  );
};


const [projectModal, setProjectModal] = useState(null);

  return (
    <>
       <h1 className='text-[#0F4082] md:text-[40px] text-[30px] font-bold text-left'>All Projects</h1>
      <p className='text-[#4B5564] '>{`Showing ${projects.length} projects`}</p>
    <div className='grid lg:grid-cols-2 gap-6 '>
     
       {projects.map((project, idx) => (
          <div key={idx} className='bg-white rounded-xl shadow-md my-8 p-6 flex flex-col justify-between items-start '>
            <p className='text-[#0F4082] border rounded-full border-[#E5E7EB] bg-white px-4 py-1.5 font-medium mb-5.5'>{project.category}</p>
            <h2 className='text-[#0F4082] font-bold md:text-2xl text-xl pb-2'>{project.title}</h2>   
            <p className='text-[#4B5564]  mt-1'>
              {project.timeline ? (
                <>
                  <span className='font-semibold'>Timeline:</span> {project.timeline}
                </>
              ) : null}
            </p>
            <p className='text-[#4B5564] mt-2'>{project.description}</p>
           <button className='mt-6 text-[#0F4082] font-semibold border border-[#0F4082] rounded-2xl py-3 w-full hover:bg-[#0F4082] hover:text-white cursor-pointer' onClick={()=>setProjectModal(project)}>View Details</button>
          </div>
        ))} 
        {projectModal && <PModalCard modal={projectModal} setIsOpenProp={setProjectModal} />}
    </div>
    </>
  )
}

export default ProjectClient