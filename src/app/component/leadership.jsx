'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import {Teams} from '../../../data/team'

const Leadership = () => {
     const [SelectedCard, setSelectedCard] = useState(null);
   
  return (
    <div className='grid xl:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 justify-center px-6 lg:px-16 py-10'>
        {
            Teams.map((leader, index) => (
                <div className='flex py-8 max-w-[443px] px-6 flex-col justify-between items-center text-center bg-[#F9FAFB] border-2 border-[#E5E7EB] rounded-[12px] ' key={index}>
                    <div className='rounded-full  border-4 border-[#AD8E63] '>
                     <Image
  src={leader.image}
  alt={leader.name}
  width={127}
  height={127}
  className="rounded-full object-cover w-[127px] h-[127px]"
  quality={100}
/>

                    </div>
                    <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-black font-bold text-[24px] pt-6'>{leader.name}</h1>
                    <h2 className='bg-[#AD8E63] rounded-2xl font-medium text-[14px] py-4 text-white mt-3 px-1.5'>{leader.role}</h2>
                    <p className='text-[#4B5564] pt-6 text-[16px]'>{leader.about}</p>
                    </div>
                    <button className='text-[#0F4082] font-semibold text-[16px] py-3 mt-[64px] rounded-[16px] border text-center border-[#0F4082] cursor-pointer hover:bg-[#0F4082] hover:text-white w-full ' onClick={()=>setSelectedCard(leader)}>Learn More</button>
                   
                </div>
                
            ))}
             {SelectedCard && (
                        <div
      className="fixed  inset-0 w-full h-full bg-black/70 flex justify-center items-center z-[1000] px-6"
      onClick={() => setSelectedCard(null)} // click background to close
    >
      {/* Modal content */}
      <div
        className="text-[#4B5564] rounded-[12px] bg-white py-6 px-4 sm:py-8 sm:px-6 
                   w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
                   max-h-[70vh] md:max-h-[85vh] overflow-y-auto scrollbar-hide
                   "
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
       <div className='flex  md:justify-start justify-center md:flex-row  flex-col items-center gap-4  '>
       <div className='rounded-full  border-4 border-[#AD8E63] '>
                      <Image src={SelectedCard.image} alt={SelectedCard.name} width={127} height={127} quality={100} className="rounded-full w-[127px] h-[127px]  object-cover " />
                    </div>
                    <div className='flex flex-col justify-center md:items-start items-center'>
                        <h2 className="text-[#0F4082] font-bold pt-4 sm:pt-6 text-[18px] sm:text-[20px] md:text-[24px]">{SelectedCard.name} </h2>
                     <h2 className='bg-[#AD8E63] rounded-2xl font-medium text-[14px] py-3 text-white w-auto mt-3 px-1.5'>{SelectedCard.role}</h2>
                    </div>
                  <div>

                  </div>
       </div>
        <p className="pt-4 sm:pt-6 text-sm sm:text-base md:max-w-[95%] w-full md:text-left text-center">{SelectedCard.subtext}</p>
     </div>
    </div>
                    )}
            </div>
  )
}

export default Leadership