"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AchievementCard = () => {
  const cards = [
    {
        img: '/trendup.svg',    
        value: 350,
      suffix: "%",
      subtext:'Year-over-year increase',
      text: "Communities Served",
    },
    {
        img: '/puser.svg',    
        value: 12550,
      suffix: "+",
      subtext:'Year-over-year increase',
      text: "Youth Empowered",
    },
    {
        img: '/award.svg',    
        value: 150,
      suffix: "+",
      subtext:'Universities, corporations. nonprofits',
      text: "Partnerships Established",
    },
    {
        img: '/flagcanada.svg',    
        value: 8,
      suffix: "",
      subtext:'Coast to coast impact',
      text: "Provinces Served",
    },
  ];

  return (
    <div
      className="grid  gap-6  px-6 lg:px-4 xl:px-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-8" >
      {cards.map((card, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.3,
        });

        return (
          <div
            ref={ref}
            key={index}
            className="
              flex flex-col justify-start 
              h-auto py-8 px-10 
              bg-white shadow-lg 
              rounded-[16px] items-center
              max-w-[328px]
            "
          >
            <Image src={card.img} alt={card.text} width={64} height={64} />
            <h1 className="text-[40px] text-center mt-6 font-bold text-[#0F4082]">
              {card.prefix}
              {inView ? <CountUp end={card.value} duration={2.5} /> : 0}
              {card.suffix}
            </h1>
            <p className="text-center font-bold text-black text-[16px]">{card.text}</p>
              <p className="text-center text-black text-[16px] mt-1">{card.subtext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AchievementCard;
