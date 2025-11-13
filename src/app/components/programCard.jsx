"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ProgramCard = () => {
  const cards = [
    { number: 3000, suffix: "+",  text: "Black entrepreneurs and professionals trained" },
    { number: 8, prefix: "~$", suffix: "M",  text: "raised for the Black entrepreneurship ecosystem" },
    { number: 5000, suffix: "+",    text: "individuals reached across BC" },
    { number: 100, suffix: "+",    text: "notable speakers featured at our events" },
  ];

  return (
    <div
      className="
        grid gap-6 mt-8 font-mont
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        justify-items-center
      "
    >
      {cards.map((card, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

        return (
          <div
            ref={ref}
            key={index}
            className="
              flex flex-col justify-start items-center
              w-full max-w-[330px] min-h-[172px]
              py-10 px-6
              bg-[#3360A0] rounded-[16px] shadow-md
              text-center
            "
          >
            {/* Number */}
            <h1 className="text-[40px] font-bold text-[#AD8E63]">
              {card.prefix}
              {inView ? <CountUp end={card.number} duration={2.5} /> : 0}
              {card.suffix}
            </h1>

            
            {/* Subtext */}
            <p className="text-white/70 text-[16px] mt-1">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramCard;
