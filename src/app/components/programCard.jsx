"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ProgramCard = () => {
  const cards = [
    { number: 250, suffix: "+", description: "Communities Served", text: "Across the nation" },
    { number: 1000, suffix: "+", description: "Leaders Trained", text: "Since our founding" },
    { number: 50, suffix: "+", description: "Programs Launched", text: "Across initiatives" },
    { number: 95, suffix: "%", description: "Success Rate", text: "Program completion" },
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
              flex flex-col justify-between items-center
              w-full max-w-[330px] min-h-[240px]
              py-13 px-6
              bg-[#3360A0] rounded-[16px] shadow-md
              text-center
            "
          >
            {/* Number */}
            <h1 className="text-[40px] font-bold text-[#AD8E63]">
              {inView ? <CountUp end={card.number} duration={2.5} /> : 0}
              {card.suffix}
            </h1>

            {/* Description */}
            <h2 className="text-[22px] font-semibold text-white mt-2">
              {card.description}
            </h2>

            {/* Subtext */}
            <p className="text-white/70 text-[16px] mt-1">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramCard;
