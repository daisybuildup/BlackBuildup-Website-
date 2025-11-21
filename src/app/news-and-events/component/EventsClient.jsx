import React from 'react'
import Link from 'next/link'

const EventsClient = () => {
    const events = [
    { title: "African Canadian Business Summit 2024", date: "March 2024", image:'/eventone.jpg', link:'/', description: "A landmark gathering of Black entrepreneurs, business leaders, and ecosystem partners focused on advancing economic opportunities and building sustainable businesses across British Columbia." },
    { title: "African Canadian Business Summit 2024", date: "March 2024", image:'/eventtwo.jpg', link:'/', description: "BC’s only Black-led Women Business Exhibit showcasing innovative entrepreneurs, fostering connections, and celebrating the achievements of Black women in business" },
    { title: "FACE Coalition Workshops", date: "Ongoing 2024-2025", image:'/eventthree.jpg', link:'/', description: "Interactive workshop series providing practical skills, mentorship, and resources to help Black entrepreneurs navigate business challenges and accelerate growth." }, 
    { title: "SBCCI Grant Writing Session", date: "Quarterly 2024", image:'/eventfour.jpg', link:'/', description: "Comprehensive grant writing workshop equipping entrepreneurs with the knowledge and tools to successfully secure funding for their business and initiatives." },  
    ]
  return (
    < >
    <div className="w-full grid md:grid-cols-2 gap-6">
        {
        events.map((event, index) => (
          <div key={index} className="max-w-2xl mx-auto bg-white rounded-lg border-2 border-[#E5E7EB] overflow-hidden mb-8">
            <img src={event.image} alt={event.title} className="w-full h-54 object-cover"/>
            <div className="p-6"> 
              <p className="text-[#82510F] mb-4">{event.date}</p>                                          
                <h2 className="text-2xl font-bold text-[#0F4082] mb-2">{event.title}</h2>   
                <p className="text-[#4B5564] mb-4">{event.description}</p>
                <Link href={event.link} className="text-[#0F4082]  hover:underline">View Details <img src='/arrowrightt.svg' alt='arrow' className='inline-block' /> </Link>
            </div>
          </div>
        ))
    }
    </div>
    </>
  )
}

export default EventsClient