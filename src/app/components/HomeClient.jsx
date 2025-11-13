'use client'
import { useState } from 'react'
import Cohort from "../components/cohort";
import ModalCard from "../components/modalCard";

export default function GetInvolvedSection() {
  const [isInvolveOpen, setIsInvolveOpen] = useState(false)

  return (
    <div>
      <button
        className="text-[#0F4082] border-[#0F4082] border cursor-pointer hover:bg-[#0f4082] hover:text-white  py-3 px-10 font-medium rounded-[14px]"
        onClick={() => setIsInvolveOpen(true)}
      >
        Partner With Us
      </button>

      {isInvolveOpen && (
        <Cohort
          setIsOpenProp={() => setIsInvolveOpen(false)}
          involve={{
            header: 'Get Involved',
            text: 'Join our community and help create positive change. Fill out the form below to get started.',
            textarea: 'Share your interest, skills, or how you’d like to contribute...',
            programs: [
              'Volunteer',
              'Become a Mentor',
              'Partnership Opportunities',
              'Donate/Support',
              'Membership',
              'Other',
            ],
          }}
        />
      )}
    </div>
  )
}

//  Another section using ModalCard 
export function ModalCardSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <button className="mt-12 py-3 px-3.5 bg-[#AD8E63] rounded-2xl cursor-pointer hover:bg-[#a57d45]" onClick={()=>setIsModalOpen(true)}>Learn More About Blackbuildup</button>
      {/* Modal Section */}
        {isModalOpen && <ModalCard setIsOpenProp={setIsModalOpen}
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
    </div>
  )
}

//  Another section using CohortCard 
export function CohortCardSection() {
  const [Cohorts, setCohorts]  = useState(false)
  return (
<>
  <button className='py-3 px-3.5 bg-[#AD8E63] hover:bg-[#a57d45] cursor-pointer font-medium rounded-[16px] h-auto' onClick={()=>setCohorts(true)}>Apply for our Next Cohort</button>
          {
             Cohorts && <Cohort setIsOpenProp={()=>setCohorts(false)}
             involve={
              {header:'Apply for Our Next Cohort',
               text:'Take the first step toward becoming a community leader. Complete the application below',
               textarea:'Share your interest, skills, or how you’d like to contribute...',
               programs: ['Select a program','Leadership Development', 'Youth Empowerment', 'Entrepreneurship', 'Community Advocacy'],
              }

             }
             />
           } 
           </>
        )
    }