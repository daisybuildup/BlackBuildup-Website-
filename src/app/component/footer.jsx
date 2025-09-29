import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Email from "../component/email"

import {links} from '../../../data/socialLinks'

const footer = () => {
   
  return (
   <footer className='w-full xl:px-10 px-4 md:px-7  '>
    <div className=' grid   grid-cols-1  md:grid-cols-2 lg:grid-col-3 2xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-12 mt-[70px]  justify-center items-start  text-[#4B5564]'>
       <div className=' h-auto '>
         <Image src='/cclclogo.svg' alt='logo' width={188} height={64}/>
         <p className='pt-6 h-auto'>Empowering the next generation of leaders to create positive change in their communities and beyond. Join thousands of youth making a difference across Canada</p>
        </div>
        <div className='  h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Programs</h1>
            <ul className="pt-4 flex flex-col gap-4">
            <li>Leadership Development</li>
            <li>Innovation Lab</li>
            <li>Cultural Exchange</li>
            <li>Youth Empowerment</li>
            <li>Social Enterprise</li>
            </ul>
        </div>
        <div className=' h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Resource</h1>
            <ul className="pt-4 flex flex-col gap-4">
                <li>Program Guide</li>
                <li>Application Process</li>
                <li>Mentor Network</li>
                <li>Success Stories</li>
                <li>Research & Report</li>
            </ul>
        </div>
        <div className=' h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Support</h1>
            <ul className="pt-4 flex flex-col gap-4">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
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
           <p className='pt-4 flex gap-[12px] justify-start items-center'><Image src='/sms.svg' width={24} height={24}  alt="sms"/>hello@youthlead.ca</p>
           <p className='pt-4 flex gap-[12px] justify-start items-center'><Image src='/call.svg' width={24} height={24} alt="sms"/>1-800-YOUTH-LEAD</p>
           <p className='pt-4 flex gap-[12px] justify-start items-center'><Image src='/location.svg' width={24} height={24} alt="sms"/>Offices across Canada</p>
                    </div>
                    </div>
       
       <hr className='  bg-[#E5E7EB] h-[1px] mt-[30px] mb-[40px]'/>
       <div className='flex flex-wrap justify-between items-center gap-4  pb-[30px]'>
       <p className='text-[#4B5564]'>© 2025 YouthLead. All rights reserved. Empowering youth since 2020.</p>
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