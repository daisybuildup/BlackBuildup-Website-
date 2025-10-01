"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const NationalCard = () => {
  const cards = [
    {
      value: 75,
      suffix: "%",
      text: "increase in community engagement",
    },
    {
      value: 90,
      suffix: "%",
      text: "of participants report improved leadership skills",
    },
    {
      value: 200,
      suffix: "+",
      text: "community partnerships established",
    },
    {
      value: 2,
      prefix: "$",
      suffix: "M+",
      text: "in community investments facilitated",
    },
  ];

  return (
    <div
      className="grid font-mont gap-6  px-6 lg:px-14 xl:px-21 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-8" >
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
              flex flex-col justify-center 
              h-auto py-8 px-10 
              bg-white shadow-lg 
              rounded-[16px] items-center
            "
          >
            <h1 className="text-[40px] text-center mt-3 font-bold text-[#AD8E63]">
              {card.prefix}
              {inView ? <CountUp end={card.value} duration={2.5} /> : 0}
              {card.suffix}
            </h1>
            <p className="text-center text-black text-[16px]">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NationalCard;
