"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
const ProgramCard = () => {
  const cards = [
    { number: 250, suffix: "+", description: "Communities Served", text: "Across the nation" },
    { number: 1000, suffix: "+", description: "Leaders Trained", text: "Since our founding" },
    { number: 50, suffix: "+", description: "Program launched", text: "Across initiatives" },
    { number: 95, suffix: "%", description: "Success Rate", text: "Program completion" },
  ];

  return (
    <div className="grid font-mont gap-6 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 mt-8">
      {cards.map((card, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

        return (
          <div
            ref={ref}
            key={index}
            className="flex flex-col justify-center md:w-[330px] w-[320px] h-auto py-8 bg-[#3360A0] rounded-[16px] items-center"
          >
            <h1 className="text-[40px] text-center mt-3 font-bold text-[#AD8E63]">
              {inView ? <CountUp end={card.number} duration={2.5} /> : 0}
              {card.suffix}
            </h1>
            <h2 className="text-[24px] text-center mt-1 font-semibold text-white">
              {card.description}
            </h2>
            <p className="text-center text-white/70 text-[16px]">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramCard;
