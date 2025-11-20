'use client'
import React from 'react'
import { useState } from 'react'

const ProjectClient = () => {
    const projects = [
    {
      title: "WORBE Project", 
      category:'Partnership Initiatives', 
      timeline: "March 2024 - Present",
      description:"The WORBE Project aims at improving the representation of persons of African descent or who identify as black in the Banking, Finance and Tech sectors in Alberta and British Columbia. Increasing representation is important for sustainable growth and innovation. However, significant disparities in the representation persist for Black and racialized individuals in Alberta and British Columbia's banking and finance sectors. Underrepresentation in banking and finance can have wide range of impacts as lack of diversity stifles creativity, innovation, access and knowledge to underserved communities ultimately hindering progress and corporate growth.",
      impact: ["AB & BC sectors across provinces","Banking Finance & Tech focus areas"]
    },
  {
      title: "Canada Learning Bond", 
      category:'Education & Awareness', 
      timeline:' 2022-2023', 
      description:"The Canada Learning Bond (CLB) is a government-sponsored educational savings incentive that provides children from low-income families born from 2004 onwards with financial support for post-secondary education. The purpose of the CLB is to encourage and reinforce the importance of savings for a child's post-secondary education through a Registered Education Savings Plan (RESP). Eligible children from low-income families can receive an initial $500 and $100 for each year of eligibility until they turn 15, for a maximum total value of $2,000.",
      impact: ["$2,000 maximum bond value per child", "2004+ children born onwards eligible","$500 initial bond amount"]
    },
    {
      title: "Youth Leadership Development Program", 
      category:'Community Empowerment', 
      description:"A comprehensive leadership program connecting young people with mentors and providing skills training for community leadership.",
      impact: ["150+ youth participants enrolled", "95% program completion rate"]
    },
    {
      title: "Community Health & Wellness Initiative", 
      category:'Community Empowerment', 
      description:"Providing accessible health education, screening services, and wellness resources to improve community health outcomes.",
      impact: ["500+ families served annually", "12 health workshops conducted"]
    },
  ]

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