'use client'
import React from 'react'
import { useState } from 'react';

const Cohort = ({setIsOpenProp,involve}) => {
   
  return (
    
   <div
      className="fixed  inset-0 w-full h-full bg-black/70 flex justify-center items-center z-[1000] px-6"
      onClick={() => setIsOpenProp(false)} // click background to close
    >
      {/* Modal content */}
      <div
        className="text-[#4B5564] rounded-[12px] bg-white py-6 px-4 sm:py-8 sm:px-6 
                   w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
                   max-h-[70vh] md:max-h-[85vh] overflow-y-auto scrollbar-hide
                   "
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h1 className="text-[#0F4082] text-left font-bold text-[24px] sm:text-[28px] md:text-[32px]">
          {involve.header}
        </h1>
        <p className="pt-4 sm:pt-6 text-sm text-left w-[80%] sm:text-base">{involve.text}</p>
              <form className="space-y-4">
          
     <div className='flex justify-center mt-6 items-center gap-6'>
          <div className=' w-[50%]'>
            <label htmlFor='firstname' className="block mb-1 text-left font-medium">First Name*</label>
            <input
              type="text"
              name="firstname"
              placeholder='Enter your first name'
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>

          <div className=' w-[50%]'>
            <label htmlFor='lastName' className="block mb-1 text-left font-medium">Last Name*</label>
            <input
              type="text"
              name="lastname"
              placeholder='Enter your last name'
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>
       </div>


          <div>
            <label htmlFor='email' className="block mb-1 text-left font-medium">Email*</label>
            <input
              type="email"
              name="email"
              placeholder='your.email@example.com'
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>

          <div>
            <label htmlFor='phone' className="block mb-1 text-left font-medium">Phone Number (optional)</label>
            <input
              type="tel"
              name="phone"
              placeholder='(555) 123-4567'
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>

          <div>
            <label htmlFor='program' className="block mb-1 text-left font-medium">How would you like to get involved?*</label>
            <select
              name="program"
              required
              className="w-full border-[#D9D9D9] border rounded-lg p-3"
            >
             {
                involve.programs.map((program,idx)=>(
                    <option value={program} key={idx}>{program}</option>
                ))
             }
            </select>
          </div>

          <div>
            <label htmlFor='message' className="block mb-1 text-left font-medium">Tell us more*</label>
            <textarea 
              name="message"
              placeholder={involve.textarea}
              rows="3"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            ></textarea>
          </div>
              <div className='flex gap-6'>
          <button
            type="submit"
            className="w-[80%] bg-[#0F4082] text-white py-3 rounded-2xl hover:bg-[#1051a6] cursor-pointer transition"
          >
            Submit
          </button>
          <button type='button' className='border border-[#0F4082] text-[#0F4082] rounded-2xl p-3 flex-1 cursor-pointer  font-medium' onClick={()=>setIsOpenProp(false)}>Cancel</button>
          </div>

        </form>
  
      </div>
    </div>
  )
}

export default Cohort