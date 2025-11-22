import React from 'react'
import Image from 'next/image'
import { getReviews } from '../../../lib/api';
export const revalidate = 60;

const Review = async () => {
  const Reviews = await getReviews()
    return (
    <div className='relative w-auto mt-[60px] grid gap-5 px-4 justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>
      {Reviews.slice(0, 3).map((review, index) => (
        <div key={index} className='w-auto relative flex justify-center items-center h-[430px]'>
          <div className="w-[330px] md:w-[459px] px-6 border-2 bg-[#F9FAFB] relative border-[#E5E7EB] text-[#4B5564] rounded-xl pt-[110px] h-auto pb-8">
            <Image
              src={review.image}
              alt={review.name}
              width={128}
              height={128}
              className='rounded-full absolute -top-[60px] left-0 right-0 mx-auto object-cover w-[128px] h-[128px]'
            />
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
