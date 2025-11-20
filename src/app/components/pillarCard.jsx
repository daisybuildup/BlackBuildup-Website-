"use client";

import React, { useState } from "react";
//import ModalCard from "./modalCard";
//import Image from "next/image";

const PillarCard = () => {
  //const [selectedModal, setSelectedModal] = useState(null);

  const Pillars =[ {
      img: "/emoji.svg",
      title: "Entrepreneurship & Growth",
      text: "Tailored training, mentorship, and acceleration for Black-owned businesses—from startup to export.",
      modal: {
        titleone: "Empowering Black Canadian Entrepreneurship",
        textone:
          "The overarching strategic focus of Black Buildup programs is the holistic support and development of Black Canadians across the entire entrepreneurial lifecycle, from pre-launch transition to established business growth and leadership development. This mission is achieved through a dual-pronged approach: 1. Enabling New Ventures (Start-ups): Providing the essential knowledge and resources needed to successfully transition into and launch a new business. 2. Accelerating Existing Ventures (Growth): Offering targeted support and expert guidance to enhance the performance and productivity of current small businesses. ",
        titletwo: "Key Components:",
        listone:
          "Holistic SupportEmpowering Black Canadian Business, From Launch to Legacy.",
        listtwo:
          "Growth & MentoringThe Future of Black Canadian Entrepreneurship.",
        listthree:
          "Built Here.Action-OrientedFund. Launch. Grow. Black Canadian Business Accelerated.",
        listfour:
          " Community & VisionUnlocking Black Wealth and Leadership in Canada.",
        titlethree: "Our Impact:",
        texttwo:
          "Our advocacy pillar combines strategic policy work with community organising, creating a powerful platform for systemic change and professional networking.",
      },
    },
    {
      img: "/currency.svg",
      title: "Ecosystem & Partnerships",
      text: "Collaborating with key intermediaries like ACBC, BWBN, and FACE to advance policy, capital access, and market opportunities.",
      modal: {
        titleone: "Ecosystem Amplification and Advocacy",
        textone:
          "The focus  leverages strategic alliances to dismantle systemic barriers, influence policy, and increase the flow of capital and market opportunities for Black Canadian entrepreneurs beyond what your organization can achieve independently. Shipping Black BuildUp’s role from solely a service provider to an ecosystem driver and advocate.",
        titletwo: "Key Components:",
        listone:
          "Capital Mobilization and Access :- This component ensures Black entrepreneurs can secure the necessary financing for start-up and growth, utilizing the partners' networks and resources.",
        listtwo:
          "Policy Influence and Advocacy :- This component focuses on high-level engagement to create a more equitable and supportive operating environment for Black professionals and businesses across Canada.",
        listthree:
          "Market Expansion and Networking :- This component aims to open doors for Black businesses to access larger supply chains, new markets, and robust networking opportunities.This program structure ensures that every entrepreneur and professional supported by a powerful ecosystem working on their behalf, maximizing their chances for long-term success. The focus on 'Community & Leadership' serves as the socio-cultural foundation for your entire entrepreneurial mission. It recognizes that business success is rooted in strong social capital, capable community leaders, and holistic well-being.",
        titlethree: "Our Impact:",
        texttwo:
          "Our programs pillar delivers scalable solutions that bridge skill gaps, foster innovation, and empower youth across diverse communities.",
      },
    },
    {
      img: "/campaign.svg",
      title: "Community & Leadership",
      text: "Initiatives that build social cohesion, youth capacity, and economic well-being in Black communities across BC.",
      modal: {
        titleone: "Building Social Capital and Holistic Community Resilience ",
        textone:
          "The strategic focus of this initiatives is to foster strong, interconnected, and self-determining Black communities across BC and Western Canada. This is achieved by systematically developing youth capacity and civic leadership, thereby strengthening the social cohesion and economic well-being necessary for sustained entrepreneurial activity and advocacy.",
        titletwo: "Key Components:",
        listone:
          "Youth Capacity & Empowerment (The Future Pipeline):- This component focuses on empowering the next generation by providing the skills and support needed for success, both in business and community life.",
        listtwo:
          "Social Cohesion & Well-Being (The Community Fabric) This component strengthens the internal bonds and overall health of the community, which is essential for collaborative economic well-being.",
        listthree:
          "Civic Leadership & Advocacy (The Collective Voice) This component translates individual success and community cohesion into collective power, ensuring Black voices shape the policies and systems that affect them.",
        
        titlethree: "Our Impact:",
        texttwo:
          "Our transparent approach to sharing mission, leadership, and measurable outcomes has contributed to a 350% growth in fundraising and enhanced organizational credibility.",
      },
    },
    {
      img: "/profile.svg",
      title: "Research and data",
      text: "Measure the impact of your interventions by generating, ananlyzing, and applying high-quality data specifically relevant to Black Canadian entrepreneurs in BC and Western Canada.",
      modal: {
        titleone: "Community Engagement Opportunities",
        textone:
          "Following best practices from successful community organizations, we provide clear pathways for meaningful community involvement.",
        titletwo: "Key Components:",
        listone:
          "Volunteer Opportunities: Hands-on involvement in program delivery, mentorship, and community events",
        listtwo:
          "Membership Programs: Structured engagement opportunities with exclusive benefits and networking access",
        listthree:
          "Donation/Support Options: Financial contributions to sustain and expand our impact in communities",
        listfour:
          "Contact Information: Direct access to our team, for partnership discussions and program inquiries",
        titlethree: "Our Impact:",
        texttwo:
          "Our engagement pillar ensures every community member can find meaningful ways to contribute to our mission while building valuable connections and skills.",
      },
    },
  ];


  return (
    <div
      className="
        grid gap-7 px-5 mt-8
        sm:grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
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
            rounded-[12px] border-2 border-[#E5E7EB]
          "
        >
          {/* Top content */}
          <div className="flex flex-col items-center text-center flex-grow">
            
            <h2 className="text-[#0F4082] font-bold text-[24px] mt-3">
              {pillar.title}
            </h2>
            <p className="text-[#4B5564] text-[16px] mt-3.5">{pillar.text}</p>
          </div>

          {/* Button always aligned at bottom */}
          {/*<button
            className="
              mt-6 px-6 py-3 border border-[#0F4082] text-[#0F4082]
              rounded-2xl hover:bg-[#0f4082] hover:text-white
              transition
            "
            onClick={() => setSelectedModal(pillar.modal)}
          >
            Learn more
          </button>*/}
        </div>
      ))}

      {/*{selectedModal && (
        <ModalCard
          modal={selectedModal}
          setIsOpenProp={() => setSelectedModal(null)}
        />
      )}*/}
    </div>
  );
};

export default PillarCard;
