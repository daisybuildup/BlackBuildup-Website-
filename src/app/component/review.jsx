import React from 'react'
import Image from 'next/image'
const Review = () => {
    const Reviews = [
        {img:'/sarah.png', name:'Sarah Chen',  role:'Community Organiser', comment:'This program transformed how I approach leadership. The skills I gained have helped me build stronger partnerships and create real change in my neighborhood.',},
         {img:'/marcus.png', name:'Marcus Johnson',  role:'Youth Program Director', comment:'This program transformed how I approach leadership. The skills I gained have helped me build stronger partnerships and create real change in my neighborhood.',},
          {img:'/elena.png', name:'Elena Rodriguez',  role:'Small Business Owner', comment:'Through this program, I learned to see my business as a community asset. We’ve since created jobs and partnerships that strengthen our entire distinct.',},
            {img:'/elena.png', name:'Elena Rodriguez',  role:'Small Business Owner', comment:'Through this program, I learned to see my business as a community asset. We’ve since created jobs and partnerships that strengthen our entire distinct.',},
              {img:'/elena.png', name:'Elena Rodriguez',  role:'Small Business Owner', comment:'Through this program, I learned to see my business as a community asset. We’ve since created jobs and partnerships that strengthen our entire distinct.',}
    ]
  return (
    <div className='relative w-auto mt-[60px] grid gap-6  justify-center sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3'>
       {
        Reviews.slice(0,3).map((review,index)=>(
             <div key={index} className='w-auto relative flex justify-center items-center h-[430px]'>
           <div  className=" w-[330px] md:w-[459px] px-6 border-2 bg-[#F9FAFB] relative border-[#E5E7EB] text-[#4B5564] rounded-xl pt-[80px] h-auto pb-8" >
             <Image src={review.img} alt={review.name} width={128} height={128}  className='rounded-full  absolute -top-15 left-0 right-0 z-50 bottom-0 mx-auto object-cover w-[128px] h-[128px] '/>
            <h1 className='font-bold text-black text-[22px] text-center'>{review.name}</h1>
            <h2 className="pt-4 text-center">{review.role}</h2>
            <p className='text-[16px] pt-2 text-center'>{review.comment}</p>
           </div>
         </div>
        ))}
    </div>
  )
}

export default Review