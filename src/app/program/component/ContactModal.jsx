'use client'
import React from 'react'
import { useState } from 'react';

const ContactModal = ({setIsOpenProp}) => {

  const [showToast, setShowToast] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      const formData = new FormData(e.target);
      const fullname = formData.get("fullname");
       const email = formData.get("email");
      const phone = formData.get("phone");
      const title = formData.get("subject")
      const message = formData.get("message");
     
  
      //  Encode data for mailto link
      const subject = encodeURIComponent("New Inquiry from Website");
      const body = encodeURIComponent(
        `\nFullname: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${title}\nMessage: ${message}\n from CCLC website`
      );
  
      // mailto link (opens Gmail or default email app)
      window.location.href = `mailto:victoradesola8@gmail.com?subject=${subject}&body=${body}`;
    
  
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
        Contact Us
        </h1>
        <p className=" pb-6  text-sm text-left w-[80%] sm:text-base">Have questions? We’d love to hear from you</p>
       
              <form className="space-y-4"   onSubmit={handleSubmit}>
          
     <div>
            <label htmlFor='fullname' className="block mb-1 text-left font-medium">Full Name*</label>
            <input
              type="text"
              name="fullname"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>


          <div>
            <label htmlFor='email' className="block mb-1 text-left font-medium">Email Address*</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>
          

          <div>
            <label htmlFor='phone' className="block mb-1 text-left font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>

          <div>
            <label htmlFor='subject' className="block mb-1 text-left font-medium">Subject</label>
            <textarea 
              name="subject"
              placeholder='What is your message about?'
              rows="3"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            ></textarea>
          </div>

           <div>
            <label htmlFor='message' className="block mb-1 text-left font-medium">Message*</label>
            <textarea 
              name="message"
              placeholder='How can we help you??'
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
            Submit
          </button>
          <button type='button' className='border border-[#0F4082] text-[#0F4082] rounded-2xl p-3 flex-1 cursor-pointer  font-medium' onClick={()=>setIsOpenProp(false)}>Cancel</button>
          </div>
          
        </form>
  
      </div>
    </div>
  )
}

export default ContactModal