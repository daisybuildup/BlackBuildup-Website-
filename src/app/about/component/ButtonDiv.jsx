'use client'
import  {useState} from 'react'
import React from 'react'
import PartnerContact from './PartnerContact'

const ButtonDiv = ({involve}) => {
    
    const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
          
         <button className="bg-[#0F4082] text-white py-3 mt-6 cursor-pointer hover:bg-[#0f4080] px-[35px] w-[225px] font-medium rounded-2xl" onClick={()=>setIsContactOpen(true)}>Become a Partner</button>
       
        
         {isContactOpen && <PartnerContact setIsOpenProp={setIsContactOpen} involve={involve} />}
       </>
  )
}

export default ButtonDiv