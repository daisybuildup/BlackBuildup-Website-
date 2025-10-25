'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LeadershipClient({ teams }) {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="grid xl:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 justify-center px-6 lg:px-16 py-10">
      {teams.map((leader, index) => (
        <div
          key={index}
          className="flex py-8 max-w-[443px] px-6 flex-col justify-between items-center text-center bg-[#F9FAFB] border-2 border-[#E5E7EB] rounded-[12px]"
        >
          <div className="rounded-full border-4 border-[#AD8E63]">
            {leader.image ? (
              <Image
                src={leader.image}
                alt={leader.name}
                width={127}
                height={127}
                className="rounded-full object-cover w-[127px] h-[127px]"
              />
            ) : (
              <div className="w-[127px] h-[127px] bg-gray-200 rounded-full" />
            )}
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-2 justify-center items-center pt-6">
              <h1 className="text-black font-bold text-[20px]">{leader.name}</h1>
              {leader.linkedin && (
                <Link href={leader.linkedin} target="_blank">
                  <Image src="/linkedinbl.svg" width={24} height={24} alt="linkedin" />
                </Link>
              )}
            </div>
            <h2 className="bg-[#AD8E63] rounded-2xl font-medium text-[14px] py-2.5 text-white mt-3 px-1.5">
              {leader.role}
            </h2>
            <p className="text-[#4B5564] pt-6 text-[16px]">{leader.about}</p>
          </div>

          <button
            onClick={() => setSelectedCard(leader)}
            className="text-[#0F4082] font-semibold text-[16px] py-3 mt-[64px] rounded-[16px] border text-center border-[#0F4082] hover:bg-[#0F4082] hover:text-white w-full"
          >
            Learn More
          </button>
        </div>
      ))}

      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000] px-6"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-[12px] py-6 px-4 sm:py-8 sm:px-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex md:justify-start justify-center md:flex-row flex-col items-center gap-4">
              
               <div className="rounded-full border-4 border-[#AD8E63]">
            {selectedCard.image ? (
              <Image
                src={selectedCard.image}
                alt={selectedCard.name}
                width={127}
                height={127}
                className="rounded-full object-cover w-[127px] h-[127px]"
              />
            ) : (
              <div className="w-[127px] h-[127px] bg-gray-200 rounded-full" />
            )}
          </div>
              <div className="flex flex-col justify-center md:items-start items-center">
                <div className='flex justify-center items-center gap-2'>
                <h2 className="text-[#0F4082] font-bold text-[20px]">{selectedCard.name}</h2>
                {selectedCard.linkedin && (
                <Link href={selectedCard.linkedin} target="_blank">
                  <Image src="/linkedinbl.svg" width={24} height={24} alt="linkedin" />
                </Link>
              )}
              </div>
                <h2 className="bg-[#AD8E63] rounded-2xl font-medium text-[14px] py-3 text-white mt-3 px-1.5">
                  {selectedCard.role}
                </h2>
              </div>
            </div>
            <p className="pt-4 text-sm text-center text-[#4B5564] md:text-left">{selectedCard.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}
