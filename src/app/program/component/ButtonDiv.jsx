'use client'
import  {useState} from 'react'
import React from 'react'
import VolunteerModal from './VolunteerModal'
import ContactModal from './ContactModal'

const ButtonDiv = () => {
    const  [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
    <div className='flex flex-wrap justify-center items-center gap-6'>
         <button className="bg-[#AD8E63] text-white py-3 cursor-pointer  px-[35px] w-[225px] font-medium rounded-2xl">Join a Program</button>
         <button className="bg-[#E5E7EBF6] text-[#0F4082] py-3 cursor-pointer hover:bg-blue-200 px-[35px] w-[225px] font-medium rounded-2xl" onClick={()=>setIsOpen(true)}>Volunteer</button>
         <button className="bg-[#E5E7EBF6] text-[#0F4082] py-3 cursor-pointer hover:bg-blue-200 px-[35px] w-[225px] font-medium rounded-2xl" onClick={()=>setIsContactOpen(true)}>Contact Us</button>
       </div>
         {isOpen && <VolunteerModal setIsOpenProp={setIsOpen}/>}
         {isContactOpen && <ContactModal setIsOpenProp={setIsContactOpen}/>}
       </>
  )
}

export default ButtonDiv