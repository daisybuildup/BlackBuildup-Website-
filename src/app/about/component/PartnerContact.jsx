'use client'
import React from 'react'
import { useState } from 'react';

const PartnerContact = ({setIsOpenProp, involve}) => {

  const [showToast, setShowToast] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      const formData = new FormData(e.target);
      const organisationname = formData.get("organisationname");
      const fullname = formData.get("fullname");
       const email = formData.get("email");
      const phone = formData.get("phone");
      const program = formData.get("program")
      const message = formData.get("message");
     
  
      //  Encode data for mailto link
      const subject = encodeURIComponent("New Inquiry from Website");
      const body = encodeURIComponent(
        `\nOrganisation-name: ${organisationname}\nfullname:${fullname}\nEmail: ${email}\nPhone: ${phone}\nProgram: ${program}\nMessage: ${message}\n from Blackbuildup website`
      );
  
      // mailto link (opens Gmail or default email app)
      window.location.href = `mailto:info@blackbuildup.com?subject=${subject}&body=${body}`;
    
  
      // Show a quick toast popup
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
     e.target.reset();
    };
  
   
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
       Partnership Application
        </h1>
        <p className=" pb-6  text-sm text-left w-[80%] sm:text-base">Fill out the form below to express your interest in partnering with us. We’ll review your application and get to you within 5 business days.</p>
       
              <form className="space-y-4"   onSubmit={handleSubmit}>
          
     <div>
            <label htmlFor='organisationname' className="block mb-1 text-left font-medium">Organisation Name*</label>
            <input
              type="text"
              name="organisationname"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
              placeholder='Enter your organisation name'
            />
          </div>


          <div>
            <label htmlFor='fullname' className="block mb-1 text-left font-medium">Contact Name*</label>
            <input
              type="text"
              name="fullname"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"

              placeholder='Enter your full name'
            />
          </div>


          <div>
            <label htmlFor='email' className="block mb-1 text-left font-medium">Email Address*</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
              placeholder='your@email.com'
            />
          </div>
          

          <div>
            <label htmlFor='phone' className="block mb-1 text-left font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
              placeholder='(555) 123-4567'
            />
          </div>
            <div>
          <label htmlFor='program' className="block mb-1 text-left font-medium">Partnership Type/</label>
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
            <label htmlFor='message' className="block mb-1 text-left font-medium">Tell Us about your partnership interests*</label>
            <textarea 
              name="message"
              placeholder= "Describe how you'd like to collaborate with us, what resources you can offer, and your organisation goals..."
              rows="3"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            ></textarea>
          </div>

         
                
               {/*  Toast notification */}
            {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg text-sm z-[1100]">
            Email draft opened successfully
              </div>
          )}

              <div className='flex gap-6'>
          <button
            type="submit"
            className="w-[80%] bg-[#0F4082] text-white py-3 rounded-2xl hover:bg-[#1051a6] cursor-pointer transition"
          
          >
            Send Application
          </button>
          <button type='button' className='border border-[#0F4082] text-[#0F4082] rounded-2xl p-3 flex-1 cursor-pointer  font-medium' onClick={()=>setIsOpenProp(false)}>Cancel</button>
          </div>
          
        </form>
  
      </div>
    </div>
  )
}

export default PartnerContact