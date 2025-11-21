'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Partners = () => {
  const partners = [
    {
      category: "Ecosystem & Chamber Partner",
      items: [
        { logo: "/acbc.jpg", name: "African Canadian Business Chamber" },
        { logo: "/bwbn.jpg", name: "Black Women Business Network" },
        { logo: "/face.jpg", name: "FACE Coalition" }
      ]
    },
    {
      category: "Community & Cultural Partners",
      items: [
        { logo: "/lerelais.jpg", name: "Relais Francophone" }
      ]
    },
    {
      category: "Funders & Institutional Allies",
      items: [
        { logo: "/bmo.jpg", name: "BMO Canada" },
        { logo: "/webc.jpg", name: "WeBC" },
        { logo: "/canher.jpg", name: "Candian Heritage" },
        { logo: "/wagec.png", name: "WAGE" },
        { logo: "/vancouv.jpg", name: "Vancouver Foundation" }
      ]
    }
  ]

  const [active, setActive] = useState(0)

  const currentItems = partners[active].items

  return (
    <div className="w-full flex flex-col items-center">

      {/* Description */}
      <p className="pt-4 pb-11 text-[#4B5564] text-center max-w-2xl">
        Building a stronger ecosystem together
      </p>

      {/* Category Buttons */}
      <div className="w-full flex xl:justify-center justify-start items-center gap-4 overflow-x-auto px-4 py-4 text-nowrap">
        {partners.map((group, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`rounded-lg whitespace-nowrap md:py-3 py-2 md:px-10 px-4 text-sm md:text-base transition 
              ${active === idx
                ? "bg-[#0F4082] text-white"
                : " text-[#4B5564]  hover:bg-[#0F4082] hover:text-white"
              }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      
     {/* Logos Section */}
<div
  className={`
    w-full bg-white rounded-xl p-10 mt-10
    grid sm:grid-cols-2 md:grid-cols-3 gap-10
    xl:flex 
    ${partners[active].items.length === 1 
      ? "xl:justify-center" 
      : "xl:justify-between"}
  `}
>
  {partners[active].items.map((item, i) => (
    <div
      key={i}
      className="flex flex-col items-center text-center gap-4 xl:w-[18%]"
    >
      <Image
        src={item.logo}
        alt={item.name}
        width={190}
        height={100}
        className="object-contain w-[160px] h-[90px] md:w-[190px] md:h-[100px]"
      />
      <p className="text-black text-sm md:text-base ">
        {item.name}
      </p>
    </div>
  ))}
</div>


    </div>
  )
}

export default Partners
