"use client";

import React, { useState } from "react";
import ModalCard from "./modalCard";
import Image from "next/image";

const PillarCard = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const Pillars = [
    {
      img: "/emoji.svg",
      title: "Advocacy",
      text: "Drive equity, policy change, and community leadership.",
      modal: { /* ...same as before... */ },
    },
    {
      img: "/currency.svg",
      title: "Programs",
      text: "Build skills through mentorship, technology, and culture.",
      modal: { /* ...same as before... */ },
    },
    {
      img: "/campaign.svg",
      title: "About Us",
      text: "Learn our mission, vision, impact, and leadership.",
      modal: { /* ...same as before... */ },
    },
    {
      img: "/profile.svg",
      title: "Get Involved",
      text: "Volunteer, donate, or join to create change.",
      modal: { /* ...same as before... */ },
    },
  ];

  return (
    <div
      className="
        grid gap-7 px-5 mt-8
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        justify-items-center
      "
    >
      {Pillars.map((pillar, index) => (
        <div
          key={index}
          className="
            flex flex-col justify-between items-center
            w-full max-w-[330px] h-full
            px-6 py-8
            rounded-[12px] border-2 border-[#AD8E63]
          "
        >
          {/* Top content */}
          <div className="flex flex-col items-center text-center flex-grow">
            <Image src={pillar.img} alt={pillar.title} width={56} height={56} />
            <h2 className="text-[#474765] font-bold text-[24px] mt-3">
              {pillar.title}
            </h2>
            <p className="text-[#4B5564] text-[16px] mt-3.5">{pillar.text}</p>
          </div>

          {/* Button always aligned at bottom */}
          <button
            className="
              mt-6 px-6 py-3 border border-[#0F4082] text-[#0F4082]
              rounded-2xl hover:bg-[#0f4082] hover:text-white
              transition
            "
            onClick={() => setSelectedModal(pillar.modal)}
          >
            Learn more
          </button>
        </div>
      ))}

      {selectedModal && (
        <ModalCard
          modal={selectedModal}
          setIsOpenProp={() => setSelectedModal(null)}
        />
      )}
    </div>
  );
};

export default PillarCard;
