'use client'
import  {useState} from 'react'
import React from 'react'
import VolunteerModal from './VolunteerModal'


const ButtonDiv = () => {
    const  [isOpen, setIsOpen] = useState(false);
   
  return (
    <>
    <div className='flex flex-wrap justify-center items-center gap-6'>
       
         <button className="bg-[#E5E7EBF6] text-[#0F4082] py-3 cursor-pointer hover:bg-blue-200 px-[35px] w-[225px] font-medium rounded-2xl" onClick={()=>setIsOpen(true)}>Volunteer</button>
        
       </div>
         {isOpen && <VolunteerModal setIsOpenProp={setIsOpen}/>}
         
       </>
  )
}

export default ButtonDiv