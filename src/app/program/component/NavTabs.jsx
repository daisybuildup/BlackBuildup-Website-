'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavTabs = () => {
    const pathname = usePathname();
    const nav =[
        {name: 'Entrepreneurship and Growth', link: '/program/entrepreneurship-and-growth'},
        {name: 'Ecosystem Amplification', link: '/program/ecosystem-amplification'},
        {name: 'Community Leadership Initiatives', link: '/program/community-leadership-initiatives'},
       
    ]
  return (
    <div className='w-full flex  md:justify-center justify-start  items-center gap-10 overflow-x-scroll px-3 py-5  md:overflow-hidden text-nowrap'>
     {
        nav.map((item, index)=>(
<div key={index} className='text-center '>
    <Link href={item.link} className={` text-[#4B5564] hover:text-white md:py-4 py-2 xl:px-20 px-2 rounded-lg xl:text-[16px] text-sm  hover:bg-[#0F4082] ${pathname === item.link ? 'bg-[#0F4082] text-white' : 'bg-none'}`}>{item.name}</Link>
</div>
        ))
     }
    </div>
  )
}

export default NavTabs