'use client'

import React, { useState } from 'react'
import ModalCard from './modalCard';
import Image from 'next/image';

const PillarCard = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const Pillars = [
    {
      img: '/emoji.svg',
      title: 'Advocacy',
      text: 'Drive equity, policy change, and community leadership.',
      modal: {
        titleone: "Advocacy & Thought Leadership",
        textone: "Position Black Buildup as a thought leader, effectively combining advocacy with professional networking to drive systemic change.",
        titletwo: "Key Components:",
        listone: "Policy Change Initiatives: Research and advocacy for policies that remove barriers to advancement.",
        listtwo: "Systemic Barrier Removal: Targeted efforts to dismantle institutional obstacles facing communities.",
        listthree: "Community Organizing: Grassroots mobilization to amplify voices and create collective action",
        listfour: "Thought Leadership Platform: Establishing expertise and influence in policy discussions and community development",
        titlethree: "Our Impact:",
        texttwo: "Our advocacy pillar combines strategic strategic policy work with community organising, creating powerful platform for systemic change and proffessional networking.",
      },
    },
    {
      img: '/currency.svg',
      title: 'Programs',
      text: 'Build skills through mentorship, technology, and culture.',
      modal: {
        titleone: "Strategic Program Portfolio",
        textone: "Three core program areas designed to address critical career advancement needs and economic opportunities in the digital economy.",
        titletwo: "Key Components:",
        listone: "Leadership & Professional Development: Community-based mentorship, soft skills development, and financial literacy education for young professionals and career changers",
        listtwo: "Innovation & Technology: STEM and entrepreneurship programs, digital literacy and technology skills for students and tech professionals",
        listthree: "Cultural Leadership & Advocacy: Cultural enrichment, identity development, and policy change training for community advocates and cultural leaders",
        listfour: "Youth Empowerment: Cross-cutting theme integrated across all program areas to ensure comprehensive youth development",
        titlethree: "Our Impact:",
        texttwo: "Our advocacy pillar combines strategic strategic policy work with community organising, creating powerful platform for systemic change and proffessional networking.",
      },
    },
    {
      img: '/campaign.svg',
      title: 'About Us',
      text: 'Learn our mission, vision, impact, and leadership.',
      modal: {
        titleone: "Our Organization",
        textone: "Building organizational credibility through transparency and demonstrating the professional expertise that has driven exceptional growth.",
        titletwo: "Key Components:",
        listone: "Mission & Vision: Clear organizational purpose focused on community empowerment and systemic change.",
        listtwo: "Leadership Team: Professional expertise and strategic vision under Franklin’s Bouguep’s leadership",
        listthree: "Impact Metrics: Quantifiable results demonstrating organizational effectiveness and transformation",
        listfour: "Partners & Collaborators: Strategic alliances that amplify our reach and enhance program delivery",
        titlethree: "Our Impact:",
        texttwo: "Our transparent approach to sharing mission, leadership, and measurable outcomes has contributed to a 350% growth in fundraising and enhanced organizational credibility.",
      },
    },
    {
      img: '/profile.svg',
      title: 'Get Involved',
      text: 'Volunteer, donate, or join to create change.',
      modal: {
        titleone: "Community Engagement Opportunities",
        textone: "Following best practices from successful community organizations, we provided clear pathways for meaningful community involvement.",
        titletwo: "Key Components:",
        listone: "Volunteer Opportunities: Hands-on involvement in program delivery, mentorship, and community events",
        listtwo: "Membership Programs: Structured engagement opportunities with exclusive benefits and networking access",
        listthree: "Donation/Support Options: Financial contributions to sustain and expand our impact in communities",
        listfour: "Contact Information: Direct access to our team, for partnership discussions and program inquiries",
        titlethree: "Our Impact:",
        texttwo: "Our engagement pillar ensures every community member can find meaningful ways to contribute to our mission while building valuable connections and skills.",
      },
    },
  ];

  return (
    <div className=' font-mont grid gap-6 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4'>
      {Pillars.map((pillar, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center md:w-[338px] w-[328px] h-auto px-6 rounded-[12px] py-8 border-2 border-[#AD8E63]"
        >
          <Image src={pillar.img} alt={pillar.title} width={56} height={56} />
          <h2 className="text-[#252528] font-bold text-[24px] mt-3">{pillar.title}</h2>
          <p className="text-[#4B5564] text-[16px] text-center mt-3.5">{pillar.text}</p>
          <button
            className="mt-6 px-22 py-3 border-[#0F4082] border text-[#0F4082] rounded-2xl hover:bg-[#0f4082] hover:text-white" 
            onClick={() => setSelectedModal(pillar.modal)}
          >
            Learn more
          </button>
        </div>
      ))}

      {/* Show Modal only if a pillar was selected */}
      {selectedModal && (
        <ModalCard modal={selectedModal} setIsOpenProp={() => setSelectedModal(null)} />
      )}
    </div>
  )
}

export default PillarCard;
