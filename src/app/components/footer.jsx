import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Email from "./email"

import {links} from '../../../data/socialLinks'

const footer = () => {
   
  return (
   <footer className='w-full xl:px-10 px-4 md:px-7  '>
    <div className=' grid   grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-12 mt-[70px]  justify-center items-start  text-[#4B5564]'>
       <div className=' h-auto '>
           <Image src='/blackbuildup.png' alt='logo'width={144} height={74} className='md:w-[144px] md:h-[64px] w-[120px] h-[60px] object-cover'/>
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
                <li>Contact Us</li>
                <li>Privacy Policy</li>
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