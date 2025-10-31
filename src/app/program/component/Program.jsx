
'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Modal = ({ modal, setModal }) => {
  const [showForm, setShowForm] = useState(false)
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const formData = new FormData(e.target);
    const name = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    //  Encode data for mailto link
    const subject = encodeURIComponent("New Inquiry from Website");
    const body = encodeURIComponent(
      `\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\n from CCLC website`
    );

    // ailto link (opens Gmail or default email app)
    window.location.href = `mailto:victoradesola8@gmail.com?subject=${subject}&body=${body}`;
  

    // Show a quick toast popup
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
   e.target.reset();
  };

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black/70 flex justify-center items-center z-[1000] px-6"
      onClick={() => setModal(false)} // close when clicking background
    >
      {/* ============================== */}
      {/* MAIN MODAL CONTAINER */}
      {/* ============================== */}
      <div
        className="text-[#4B5564] rounded-[12px] bg-white py-6 px-4 sm:py-8 sm:px-6 
                   w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
                   max-h-[70vh] md:max-h-[85vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* ============================== */}
        {/* DETAILS VIEW */}
        {/* ============================== */}
        {!showForm ? (
          <>
            <div className="flex items-center gap-4 justify-start">
              <Image
                src={modal.svg}
                alt={modal.title}
                width={64}
                height={64}
                className="w-[64px] h-[64px] text-black rounded-full"
              />
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-[#0F4082] font-bold text-[18px] sm:text-[28px] md:text-[32px]">
                  {modal.title}
                </h1>
                <p className="md:py-3 px-1.5 bg-[#AD8E63] text-white rounded-2xl">
                  {modal.category}
                </p>
              </div>
            </div>

            <p className="pt-4 sm:pt-6 text-sm sm:text-base">{modal.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6.5">
              <div className="flex justify-start items-center gap-3 bg-[#E6E6E6]/80 rounded-xl py-[32px] px-5">
                <Image src="/clock.svg" alt="clock" width={24} height={24} />
                <div>
                  <h2 className="text-black font-semibold text-[16px]">Duration</h2>
                  <p className="text-[#4B5564] text-[14px] mt-1">{modal.duration}</p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-3 bg-[#E6E6E6]/80 rounded-xl py-[32px] px-5">
                <Image src="/pro.svg" alt="class size" width={24} height={24} />
                <div>
                  <h2 className="text-black font-semibold text-[16px]">Class Size</h2>
                  <p className="text-[#4B5564] text-[14px] mt-1">{modal.classSize}</p>
                </div>
              </div>
            </div>

            <h2 className="text-[#0F4082] font-bold pt-4 sm:pt-6 text-[18px] sm:text-[20px] md:text-[24px]">
              Prerequisites
            </h2>
            <ul className="list-disc mt-2 sm:mt-3 marker:text-[#82510F] flex flex-col gap-2 sm:gap-3 pl-4 sm:pl-5 text-sm sm:text-base">
              {modal.prerequisites.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h1 className="text-[#0F4082] text-[16px] sm:text-[18px] md:text-[20px] mt-6 mb-3 font-bold">
              What You'll Gain
            </h1>
            {modal.achievements.map((achievement, idx) => (
              <div key={idx} className="flex gap-3 justify-start items-center pb-2">
                <Image src="/tickcircle.svg" alt="tick" width={24} height={24} />
                <p className="text-sm sm:text-base text-[#4B5564]">{achievement}</p>
              </div>
            ))}

            <div className="mt-8 sm:mt-12 py-6 px-4 sm:py-8 sm:px-6 bg-[#f2f2f2] rounded-[12px] border-l-2 border-l-[#82510F]">
              {modal.testimonials.map((review, idx) => (
                <div className="md:flex justify-start items-center gap-3.5" key={idx}>
                    {review.image === '' ?(
                        <div               
                    className="md:w-[158px] md:h-[158px] w-[100px] bg-[#0F4082] h-[100px] rounded-full"
                  ></div>
                    ):
                  (<Image
                    src={review.image}
                    alt={review.name}
                    width={128}
                    height={128}
                    className="md:w-[128px] md:h-[128px] w-[100px] h-[100px] rounded-full"
                  />)}
                  <div>
                    <h1 className="text-[16px] text-black font-semibold">{review.name}</h1>
                    <p>{` “${review.comment}”`}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 md:gap-8 pt-[32px] border-t md:flex-nowrap flex-wrap justify-between items-center border-t-[#E5E7EB] mt-8">
              <button className="bg-[#0F4082] py-3.5 text-white font-medium rounded-2xl cursor-pointer md:w-[42%] w-[45%]">
                Apply now
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#E5E7EBF6] py-3.5 text-[#0F4082] font-medium rounded-2xl cursor-pointer md:w-[42%] w-[45%]"
              >
                Get More Info
              </button>
              <button
                onClick={() => setModal(false)}
                className="border-[#0F4082] border py-3.5 text-[#0F4082] font-medium rounded-2xl cursor-pointer md:w-[16%] w-[100%]"
              >
                Close
              </button>
            </div>
          </>
        ) : (
          // ==============================
          //  INFO REQUEST FORM
          // ==============================
          <div>
            <h2 className="text-2xl font-bold text-[#0F4082] mb-6">Request More Information</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className='flex flex-col md:flex-row justify-center mt-6 items-center gap-6'>
          <div className=' md:w-[50%] w-full'>
            <label htmlFor='fullname' className="block mb-1 text-left font-medium">Full name*</label>
            <input
              type="text"
              name="fullname"
              placeholder='Enter your full name'
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>

          <div className=' md:w-[50%] w-full'>
            <label htmlFor='Email' className="block mb-1 text-left font-medium">Email*</label>
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>
       </div>

                   <div>
            <label htmlFor='phone' className="block mb-1 text-left font-medium">Phone Number (optional)</label>
            <input
              type="tel"
              name="phone"
              placeholder='Enter your phone number'
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            />
          </div>

            <div>
            <label htmlFor='message' className="block mb-1 text-left font-medium">Questions or Specific Information Needed*</label>
            <textarea 
              name="message"
              placeholder='What would you like to know about this program?'
              rows="3"
              required
              className="w-full border border-[#D9D9D9] rounded-lg p-3"
            ></textarea>
          </div>
                
               {/*  Toast notification */}
      {showToast && (
        <div className=" bg-green-600 text-white px-5 py-3 text-center rounded-lg shadow-lg text-sm animate-fade-in-out">
          Email draft opened successfully
        </div>
      )}
                   <div className="mt-5 sm:mt-10 py-6 px-4 sm:py-8 sm:px-6 bg-[#f2f2f2] rounded-[12px] ">
             <h2 className="text-[#0F4082] font-bold  text-[18px] sm:text-[20px] md:text-[24px]">What happens next?</h2>
             <p>Our program coordinator will email you detailed information, schedule options, and next steps within 24 hours.</p>                            
            </div>

            <div className="flex gap-6 justify-between items-center mt-8 border-t border-t-[#E5E7EB] pt-6">
              <button type='submit' className="bg-[#0F4082] py-3.5 text-white font-medium rounded-2xl cursor-pointer w-[50%]">
                Send Request
              </button>
        
              <button
                onClick={() => setShowForm(false)}
                className="border border-[#0F4082] py-3.5 text-[#0F4082] font-medium rounded-2xl cursor-pointer w-[50%]"
              >
                Back to Details
              </button>
            </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}


const Program = () => {
   const [program, setProgram] = useState([])
  const [category, setCategory] = useState('All Programs');
  const [modal, setModal] = useState(null);

 useEffect(() => {
    async function fetchPrograms() {
      const res = await fetch('/api/programs') // create an API route that calls getPrograms()
      const data = await res.json()
      setProgram(data)
    }
    fetchPrograms()
  }, [])
  /*const program = [
    {
      category: 'Leadership',
      title: 'Community Mentorship Program',
      subtext: 'Connect with leaders and gain guidance.',
      description:
        'Our Community Mentorship Program pair emerging leaders with experienced mentors who provide guidance, support, and real-world insights. Through structured one-on-one meetings, group workshops, and networking events, participants develop crucial leadership skills while building meaningful professional relationships.',
      svg: '/profileuser.svg',
      duration: '6 months',
      classSize: '20-25 participants',
      prerequisites: ['18+ years old', ' Commitment to program duration', ' Basic interview process'],
     achievements: [
        'Develop personal leadership style',
        'Build professional network',
        'Gain industry insights and career guidance',
        'Improve decision-making skills',
        'Access to exclusive leadership workshops',
      ],
     testimonials: [
        {
          image: '/elena.png',
          name: 'Maria Rodriguez',
          comment:
            'This program transformed how I approach leadership. The skills I gained have helped me build stronger partnerships and create real change in my neighborhood.',
        },
      ],
    },

    {
      category: 'Leadership',
      title: 'Soft Skills',
      subtext: 'Improve communication, teamwork, and adaptability',
      description:
        'Master the essential soft skills that drive career success. This comprehensive program focuses on communication, emotional intelligence, teamwork, problem-solving, and adaptability through interactive workshops, role-playing exercises, and real-world applications.',
      svg: '/messages.svg',
      duration: '8 weeks',
      classSize: '15-20 participants',
      prerequisites: ['Professional or academic background', 'Willingness to participate in group activities'],
     achievements: [
        'Enhanced verbal and written communication',
        'Improved emotional intelligence',
        'Better conflict resolution abilities',
        'Stronger teamwork and collaboration skills',
        'Increased adaptability to change',
      ],
     testimonials: [
        {
          image: '/pici.png',
          name: 'James Thompson',
          comment:
            '“The communication skills I learned transformed how I interact with colleagues and opened doors to new opportunities”',
        },
      ],
    },
    {
      category: 'Leadership',
      title: 'Financial Literacy Education',
      subtext: 'Build money management and financial relience',
      description:
        'Take control of your financial future with our comprehensive financial literacy program. Learn budgeting, investing, debt management, and wealth-building strategies through practice workshops personalized coaching sessions',
      svg: '/icondollar.svg',
      duration: '10 weeks',
      classSize: '25-30 participants',
      prerequisites: ['Basic math skills', 'Willingness to share financial goals (confidentially)'],
     achievements: [
        'Create and maintain effective budgets',
        'Understand investment principles',
        'Develop debt reduction strategies',
        'Build emergency funds and savings plans',
        'Learn retirement and long-term financial planning',
      ],
     testimonials: [
        {
          image: '/lisa.png',
          name: 'Lisa Chen',
          comment:
            '“I went from living paycheck to paycheck to having a solid financial plan growing savings account.”',
        },
      ],
    },

    {
      category: 'Technology and Innovation',
      title: 'STEM Education Program',
      subtext: 'Develop skills in science and technology.',
      description:
        'Our Community Mentorship Program pair emerging leaders with experienced mentors who provide guidance, support, and real-world insights. Through structured one-on-one meetings, group workshops, and networking events, participants develop crucial leadership skills while building meaningful professional relationships.',
      svg: '/cpu.svg',
      duration: '12 weeks',
      classSize: '12-15 participants',
      prerequisites: ['High school level math and science', 'Access to computer/internet', 'Curiosity and willingness to learn'],
     achievements: [
        'Solid foundation in STEM principles',
        'Hands-on laboratory and coding experience',
        'Critical thinking and analytical skills',
        'Understanding of scientific method',
        'Preparation for STEM career paths',
      ],
     testimonials: [
        {
          image: '/alex.png',
          name: 'Alex Johnson',
          comment: 'This program sparked my passion for technology and led me to pursue a career in software development',
        },
      ],
    },

    {
      category: 'Technology and Innovation',
      title: 'Entrepreneurship Bootcamp',
      subtext: 'Learn to launch and grow your business.',
      description:
        'Transform your business idea into reality with our insensitive entrepreneurship bootcamp. Learn business planning, market validation, funding strategies, and growth hacking techniques from successful entrepreneurs and industry experts.',
      svg: '/uirocket.svg',
      duration: '6 weeks intensive',
      classSize: '10-12 participants',
      prerequisites: ['Business idea or strong interest in entrepreneurship', 'Time commitment for intensive program'],
     achievements: [
        'Complete business plan and pitch deck',
        'Market validation and customer discovery',
        'Understanding of funding options and investor relations',
        'Digital marketing and growth strategies',
        'Network of fellow entrepreneurs and mentos',
      ],
     testimonials: [
        {
          image: '/sarah.png',
          name: 'Sarah Kim',
          comment:
            '“From idea to launch in 6 weeks - this bootcamp gave the tools and confidence to start my own company”',
        },
      ],
    },
    
    {
      category: 'Technology and Innovation',
      title: 'Digital Literacy Training',
      subtext: 'Build essential tech and online skills',
      description:
        'Master essential digital skills for today’s world. This program covers computer basics, internet safety, productivity software, social media literacy, and emerging technologies. Perfect for beginners or those looking to upgrade their digital capabilities.',
      svg: '/monitor.svg',
      duration: '4 weeks',
      classSize: '20-25 participants',
      prerequisites: ['Basic computer access', 'No prior experience required'],
     achievements: [
        'Proficiency in essential software applications',
        'Internet safety and privacy knowledge',
        'Social media and digital communication skills',
        'Basic troubleshooting and problem-solving',
        'Understanding of emerging technologies',
      ],
     testimonials: [
        {
          image: '/robert.png',
          name: 'Robert Martinez',
          comment:
            '“At 55, I thought I was too old to learn technology. This program proved me wrong and opened up new career possibilities.”',
        },
      ],
    },

    {
      category: 'Cultural Advocacy',
      title: 'Cultural Enrichment Program',
      subtext: 'Explore heritage and strengthen identity.',
      description:
        'Celebrate and strengthen cultural identity through immersive experiences, storytelling workshops, traditional arts, and community celebrations. This programs helps participants reconnect with their roots while building bridges across different cultural communities.',
      svg: '/heart.svg',
      duration: '8 weeks',
      classSize: '15-20 participants',
      prerequisites: ['Interest in cultural exploration', 'Respect for diverse backgrounds'],
     achievements: [
        'Deeper understanding of cultural heritage',
        'Skills in cultural storytelling and preservation',
        'Cross-cultural communication abilities',
        'Community event planning experience',
        'Network of culturally diverse peers',
      ],
     testimonials: [
        {
          image: '/amara.png',
          name: 'Amara Okafor',
          comment: 'This program sparked my passion for technology and led me to pursue a career in software development.',
        },
      ],
    },

    {
      category: 'Cultural Advocacy',
      title: 'Policy Change & Advocacy',
      subtext: 'Drive systemic change through policy action',
      description:
        'Learn how to create meaningful policy change at local, state, and national levels. This program covers policy analysis, advocacy strategies, coalition building, and effective communication with elected officials and stakeholders',
      svg: '/book.svg',
      duration: '10 weeks',
      classSize: '12-15 participants',
      prerequisites: ['Interest in cultural exploration','Respect for diverse backgrounds'],
     achievements: [
        'Policy analysis and research skills',
        'Advocacy campaign development',
        'Coalition building and partnership strategies',
        'Public speaking and presentation skills',
        'Direct experience with policy makers',
      ],
     testimonials: [
        {
          image: '/david.png',
          name: 'David Park',
          comment:
            '“I learned how to turn my passion for justice into concrete policy changes that benefits my entire community.”',
        },
      ],
    },{
      category: 'Cultural Advocacy',
      title: 'Community Organizing Training',
      subtext: 'Learn grassroots leadership and mobilisation',
      description:
        'Master the art and science of community organizing. Learn how to identify community issues, build coalitions, develop campaigns, and mobilize people for social change through proven organizing strategies and hands-on practice.',
      svg: '/iconcommunity.svg',
      duration: '6 weeks',
      classSize: '15-18 participants',
      prerequisites: ['Passion for community change', 'Commitment to program activities'],
     achievements: [
        'Community assessment and power mapping skills',
        'Campaign strategy development',
        'Grassroots fundraising techniques',
        'Public narrative and storytelling',
        'Leadership development and delegation',
      ],
     testimonials: [
        {
          image: '/carmen.png',
          name: 'Carmen Rodriguez',
          comment:
            '“I went from being frustrated about community problems to leading successful campaigns that created real change.”',
        },
      ],
    },
    {
      category: 'Youth Empowerment',
      title: 'Youth Leadership Academy',
      subtext: 'Cultivate leadership skills for young voices.',
      description:
        'Empower the next generation of leaders through comprehensive leadership training designed specifically for young people. Participants develop confidence, communication skills, and social impact projects while connecting with peers who share their passion for change.',
      svg: '/star.svg',
      duration: '6 months',
      classSize: '20-25 participants',
      prerequisites: ['Ages 16-24', 'Commitment to full program', 'Interest in leadership development'],
     achievements: [
        'Personal leadership style development',
        'Public speaking and presentation confidence',
        'Social impact project completion',
        'Peer mentorship and networking',
        'College and career readiness skills',
      ],
     testimonials: [
        {
          image: '/jordan.png',
          name: 'Jordan Williams',
          comment:
            'This academy gave me the confidence to run for student government and start my own nonprofit organization.',
        },
      ],
    },
    {
      category: 'Youth Empowerment',
      title: 'Youth Tech Labs',
      subtext: 'Build confidence through hands-on tech projects.',
      description:
        'Hands-on technology education that makes coding, robotics, and digital creation accessible and fun for young people. Through project-based learning, participants build real applications and devices while preparing for tech careers.',
      svg: '/mouse.svg',
      duration: '8 weeks',
      classSize: '12-15 participants',
      prerequisites: ['Ages 14-22', 'Basic computer skills', 'Curiosity about technology'],
     achievements: [
        'Programming skills in multiple langauges',
        'Completed tech projects and portfolio',
        'Understanding of emerging technologies',
        'Teamwork and problem-solving abilities',
        'Preparation for tech career paths',
      ],
     testimonials: [
        {
          image: '/maya.png',
          name: 'Maya Patel',
          comment:
            '“I never thought I could code, but now I’m creating apps and considering computer science in college.”.',
        },
      ],
    },{
      category: 'Youth Empowerment',
      title: 'Youth Advocacy Forum',
      subtext: 'Engage in community dialogue and policy influence',
      description:
        'Give young people a voice in shaping their communities through advocacy training and direct engagement with local decision-makers. Participants learn to research issues, develop policy, proposals, and present their ideas to community leaders/',
      svg: '/usertick.svg',
      duration: '6 weeks',
      classSize: '10-15 participants',
      prerequisites: ['Ages 16-25', 'Interest in social issues', 'Commitment to civic engagement'],
     achievements: [
        'Issue research and analysis skills',
        'Policy proposal development',
        'Public speaking and advocacy abilities',
        'Direct engagement with community leaders',
        'Civic engagement and voting readiness',
      ],
     testimonials: [
        {
          image: '/kai.png',
          name: 'Kai Thompson',
          comment:
            '“I presented my climate change proposal to the city council and they actually adapted parts of it into city policy.”',
        },
      ],
    },
  ]*/

  const Lists = [
    'All Programs',
    'Leadership',
    'Technology and Innovation',
    'Cultural Advocacy',
    'Youth Empowerment',
  ]

   const filteredPrograms =        category === 'All Programs' ? program
         : program.filter(prog => prog.category === category);
    

  return (
    <div className='py-[72px] bg-[#F5F6FA] md:px-16 px-6 '>
    <div className="flex   md:justify-center justify-start  items-center gap-10 overflow-x-scroll   md:overflow-hidden text-nowrap">
      {Lists.map((cat, index) => (
        <button
          key={index}
          onClick={() => setCategory(cat)}
          className={` py-2  text-xs sm:text-[10px]  lg:text-sm font-medium transition  text-nowrap
            ${category === cat ? 'border-b-[#0F4082] border-b-[2px] text-[#0F4082] font-semibold' : ' hover:text-[#0F4082] font-semibold cursor-pointer  text-[#4B5564]'}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
    <div className={`  ${ filteredPrograms.length === 0 ? 'flex justify-center items-center mt-1' : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  justify-center items-stretch mt-1'}`}>
    {filteredPrograms.length === 0 ? (
    
      <p className="text-center text-[#000000] w-[100%] bg-red-300 m-auto  mt-30  ">No programs available in this category.</p>
     
    ):(
       filteredPrograms.map((program, index) => (
        <div
  key={index}
  className="mt-10 bg-white rounded-xl border-2 flex flex-col justify-between items-center text-center max-w-[445px] min-h-[320px] border-[#E5E7EB] p-6"
>

            <Image src={program.svg} alt={program.title} width={64} height={64} className="w-[64px] h-[64px] text-black rounded-full " />
           
          <h2 className="text-2xl font-bold  text-[#4B5564] ">{program.title}</h2>
         
          <p className="text-[#4B5564] ">{program.subtext}</p>
          <button className='py-3 px-4 border border-[#0F4082] font-medium rounded-2xl cursor-pointer text-[#0F4082] hover:text-white mt-[60px] hover:bg-[#0F4082]' onClick={()=>setModal(program)}>Learn More</button>
          <p></p>
        
          </div>
   ))
    ) }
    </div>
    {modal && <Modal modal={modal} setModal={setModal} />}
    
    </div>
  )
}

export default Program
