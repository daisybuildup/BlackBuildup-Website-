'use client'
import React from 'react'
import Link from 'next/link'
import { FaTimes } from "react-icons/fa";
import Image from 'next/image'
import {links} from '../../../data/socialLinks'

const NavBar = ({handleToggleOff}) => {
  
  return (
    <div className="fixed flex inset-0 z-[1000] min-h-screen ">

      <div className="  w-[70%] flex justify-between items-left flex-col  min-h-screen bg-[#1e1c1c] z-[1000]">
        <div className="flex items-center justify-between py-[20px] px-[30px]">
             <Link href="/about" onClick={handleToggleOff} ><Image src="/cclclogo.svg" alt="cclc logo" width={120} height={60} className=""  /></Link>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#fff]/20">
  <FaTimes className="text-[#ffff]" size={20} onClick={handleToggleOff}  />
</div>
          
        </div>

        <div className="flex flex-col gap-[30px] mt-[-200px] px-[40px]">
          <Link href="/about" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">About</Link>
          <Link href="/program" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">Programs</Link>
          <Link href="/advocacy" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">Advocacy</Link>
          <Link href="/contact" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">Contact</Link>
          <Link href="/" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">Get Involved</Link>
          <Link href="/" onClick={handleToggleOff} className="text-white text-[18px] font-semibold">Donate</Link>
        </div>

        <div className=" flex flex-col gap-2 font-semibold text-center  w-full">
          <p className="text-white text-[18px]">hello@youthlead.ca</p>
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

    </div>
  )
}

export default NavBar
