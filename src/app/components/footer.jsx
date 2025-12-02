'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import {links} from '../../../data/socialLinks'

//for contact us modal
const Contact = ({setIsOpenProp}) => {

  const [showToast, setShowToast] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      const formData = new FormData(e.target);
    
      const name = formData.get("name");
       const email = formData.get("email");

      const message = formData.get("message");
     
  
      //  Encode data for mailto link
      const subject = encodeURIComponent("New Inquiry from Website");
      const body = encodeURIComponent(
        `\nname:${name}\nEmail: ${email}\nMessage: ${message}\n from Blackbuildup website`
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
      Contact Us
        </h1>
        <p className=" pb-6  text-sm text-left w-[80%] sm:text-base">Send us a message we'll get back to you as soon as possible</p>
       
              <form className="space-y-4"   onSubmit={handleSubmit}>
          
    
          <div>
            <label htmlFor='fullname' className="block mb-1 text-left font-medium"> Name*</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"

              placeholder='your name'
            />
          </div>


          <div>
            <label htmlFor='email' className="block mb-1 text-left font-medium">Email*</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
              placeholder='your@email.com'
            />
          </div>
                            
           <div>
            <label htmlFor='message' className="block mb-1 text-left font-medium">Message*</label>
            <textarea 
              name="message"
              placeholder= "How can we help you?"
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
            className="w-[100%] bg-[#0F4082] text-white py-3 rounded-2xl hover:bg-[#1051a6] cursor-pointer transition"
          
          >
            Send Message
          </button>
         
          </div>
          
        </form>
  
      </div>
    </div>
  )
}



const PrivacyPolicy = ({setIsOpenProp}) => {

    
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
      Privacy Policy
        </h1>
        <p className=" pb-6  text-sm text-left md:w-[80%] sm:text-base">Our commitment to protecting your privacy and personal information</p>
         <p className=" pb-6  text-sm text-left md:w-[90%] sm:text-base">At Black Buildup, we take your privacy seriously. We are committed to protecting your personal information and being transparent about how we collect, use and share your data.</p>
       <div className='bg-[#32609c1a] rounded-lg p-6 md:grid grid-cols-2  md:gap-10 gap-3 '>
     <div className='flex gap-1.5  items-center'>
      <Image src='/document.svg' alt='privacy' width={48} height={48}/>
      <div className='flex flex-col gap-2.5'>
      <h2 className="text-[#0F4082] font-semibold pt-2 text-xl">Full Privacy Policy Document</h2>
      <p className=" pb-6  text-sm text-left  sm:text-base">Complete details about our privacy practices</p>
      </div>
      
     </div>
      <button className='bg-white rounded-2xl border border-[#0F4082] cursor-pointer text-[#0F4082] font-medium  hover:text-white hover:bg-[#0F4082] py-3 px-3.5'><a href="/privacypolicy.pdf"  download>View PDF</a></button>
        </div>
    <p className=" pb-6  text-sm text-left  sm:text-base text-black">For questions about our privacy policy, please contact us at privacy@black.ca</p>
      </div>
    </div>
  )
}



const footer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
   
  return (
   <footer className='w-full xl:px-10 px-4 md:px-7  '>
    <div className=' grid   grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-12 mt-[70px]  justify-center items-start  text-[#4B5564]'>
       <div className=' h-auto '>
           <Image src='/bbulogo.png' alt='logo'width={144} height={74} className='md:w-[154px] md:h-[74px] w-[125px] h-[65px] object-cover'/>
         {/*<Image src='/cclclogo.svg' alt='logo'width={160} height={64} className='md:w-[160px] md:h-[60px] w-[120px] h-[50px]'/>*/}
         <p className='pt-3 h-auto'>Empowering the next generation of leaders to create positive change in their communities and beyond. Join thousands of youth making a difference across Canada</p>
        </div>
        <div className='  h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Programs</h1>
            <ul className="pt-4 flex flex-col gap-4">
            <li><Link href='/program/entrepreneurship-and-growth'>Entrepreneurship & growth</Link></li>
            <li><Link href='/program/ecosystem-amplification'>Ecosystem & Partnerships</Link></li>
            <li><Link href='/program/community-leadership-initiatives'>Communities & Leaderships</Link></li>
            </ul>
        </div>
        {/*
        <div className=' h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Resource</h1>
            <ul className="pt-4 flex flex-col gap-4">
                <li>Program Guide</li>
                <li>Application Process</li>
                <li>Mentor Network</li>
                <li>Success Stories</li>
                <li>Research & Report</li>
            </ul>
        </div>*/}
        <div className=' h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Support</h1>
            <ul className="pt-4 flex flex-col gap-4">
                <li onClick={()=>setIsOpen(true)} className='cursor-pointer'>Contact Us</li>
                {
                  isOpen && <Contact setIsOpenProp={setIsOpen}  />
                }
                <li onClick={()=>setIsPrivacyOpen(true)}  className='cursor-pointer'>Privacy Policy</li>
                {
                  isPrivacyOpen && <PrivacyPolicy setIsOpenProp={setIsPrivacyOpen}  />
                }
                {/*<li>FAQ</li>
                <li>Help Center</li>
               
                <li>Terms of Service</li>*/}
            </ul>
        </div>
        <div className=' h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Stay Connected</h1>
            <p className='pt-4'>Get updates on new programs success stories, and opportunities to make an impact</p>
            <form className='pt-4 flex relative'>
            <input type='email' placeholder='Enter your email' className='pl-2 pr-5 py-2.5 border-l border-y border-[#D1D5DB] rounded-l-lg ' />
            <button type='submit' className='text-white bg-[#AD8E63] py-2.5 md:px-3.5 px-1.5 text-sm rounded-r-lg  '>Subscribe</button>
            </form>
           
                    </div>
                    <div className=' h-auto'>
                        <h1 className='font-semibold text-[#0F4082] pt-4 text-[18px]'>Get in Touch</h1>
          <div className="flex items-center gap-3 pt-4">
  <Image src="/sms.svg" width={24} height={24} alt="sms" />
  <a
    href="mailto:info@blackbuildup.ca"
    className=" hover:underline"
  >
    info@blackbuildup.ca
  </a>
</div>


           <p className='pt-4 flex gap-3 justify-start items-center'><Image src='/call.svg' width={24} height={24} alt="sms"/>+1 778 837 3282</p>
           <p className='pt-4 flex gap-3 justify-start items-center'><Image src='/location.svg' width={24} height={24} alt="sms"/>422 Richards St, Suite 170 Vancouver, BC V6B 2Z4</p>
                    </div>
                    </div>
       
       <hr className='  bg-[#E5E7EB] h-px mt-[30px] mb-10'/>
       <div className='flex flex-wrap justify-between items-center gap-4  pb-[30px]'>
       <p className='text-[#4B5564]'>Blackbuildup 2025. All rights reserved</p>
         <div>
       {
        links.map((link,idx)=>(

            <Link key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className='inline-block mr-3'><Image src={link.img} width={36} height={36} alt={link.alt}/></Link>
        ))
       }
       </div>
       </div>
     
  </footer>
  )
}

export default footer