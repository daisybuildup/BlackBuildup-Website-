'use client'
import React from 'react'
import Link from 'next/link'
import { FaTimes } from "react-icons/fa";
import Image from 'next/image'
import { useState } from 'react';
import {links} from '../../../data/socialLinks'
import Sign from "./Sign";

const NavBar = ({handleToggleOff}) => {
const [isSignOpen, setIsSignOpen] = useState(false);
  
  return (
    <div className="fixed flex inset-0 z-1000 min-h-screen ">

      <div className="  w-[70%] flex justify-between items-left flex-col  min-h-screen bg-[#1e1c1c] z-1000">
        <div className="flex items-center justify-between py-5 px-[30px]">
             <Link href="/" onClick={handleToggleOff} >{/*<Image src="/cclclogo.svg" alt="cclc logo" width={120} height={60} className=""  />*/} <Image src='/blackbuildup.png' alt='logo'width={190} height={90} className='md:w-[190px] md:h-[90px] w-[125px] h-[60px]'/></Link>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
  <FaTimes className="text-[#ffff]" size={20} onClick={handleToggleOff}  />
</div>
          
        </div>

        <div className="flex flex-col gap-[30px] mt-[-200px] px-10">
          <Link href="/about" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">About Us</Link>
          <Link href="/program" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">Programs</Link>
          <Link href="/partnership" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">Partnership</Link>
          <Link href="/news-and-events" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">News and Events</Link>
          <p  className="text-white text-[18px] font-semibold" onClick={() => setIsSignOpen(true)}>Sign In</p>
          <Link href="/" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">Donate</Link>
        </div>

        <div className=" flex flex-col gap-2 font-semibold text-center  w-full">
          <p className="text-white text-[18px]">info@blackbuildup.ca</p>
           <div>
                 {
                  links.map((link,idx)=>(
          
                      <Link key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className='inline-block mr-3'><Image src={link.img} width={36} height={36} alt={link.alt}/></Link>
                  ))
                 }
                 </div>
        </div>
      </div>
       {/* Dark overlay */}
      <div onClick={handleToggleOff} className="bg-black/50 flex-1"></div>
{isSignOpen && <Sign setIsOpenProp={setIsSignOpen} />}
    </div>
  )
}

export default NavBar
