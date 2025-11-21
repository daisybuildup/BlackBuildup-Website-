
import React from 'react'
import Image from 'next/image'
import Achievement from '../components/Achievement'
import Leadership from '../components/Leadership'
import TypewriterText from '../components/TypewriterText'
import ButtonDiv from './component/ButtonDiv'
//import  Review  from '../components/review'


const Page = () => {
   
//for the  collaborators
  const collaborators =[
    {svg:'/teacher.svg', text:'Universities', subtext:'Academic partnerships for research and development'},
    {svg:'/home.svg', text:'Financial Institutions', subtext:'Private sector collaboration and fund support'},
    {svg:'/nonprofit.svg', text:'Nonprofits', subtext:'Community organizations working toward shared goals'},
    {svg:'/bank.svg', text:'Government', subtext:'Public sector programs and policy initiatives'},
    
  ]

  const partners = [
    { name: 'BMO Canada', logo: '/bmo.jpg' },
    { name: 'WeBC', logo: '/webc.jpg' },
    { name: 'WAGE', logo: '/wagec.png' },
    { name: 'FACE', logo: '/face.jpg' },
    { name: 'Canadian Heritage', logo: '/canher.jpg' },
   
  ];
  return (
    <>
   <div className="relative xl:h-[100vh] h-[60vh] bg-[url('/blackgroup.jpg')] bg-cover bg-center">
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#0F4082]/50"></div>

    {/* Content */}
    <div className="relative flex flex-col text-center px-5 items-center justify-center h-full">
      <h1 className="text-white lg:text-4xl text-[18px] md:text-2xl font-bold">About Us</h1>
       <TypewriterText text={["Discover our mission, vision, impact, and leadship"]}/>
    </div>
  </div>
   <section className='bg-[#0F4082] w-full flex flex-col justify-center items-center py-10 px-5 md:px-16'>
<h1 className='text-white font-bold lg:text-[40px] text-[30px]'>Our Story</h1>
<p className='xl:max-w-[65%] pt-4 pb-11 text-white text-center'>Founded to address systemic barriers for Black entrepreneurs in BC, Black Buildup has grown into a trusted leader with deep partnerships and a strong provincial footprint. We’ve supported thousands of entrepreneurs, co-delivered major summits and exhibits like the ACBC Summits and BWBN Women's Business Exhibits, and facilitated workshops for partners from the SBCCI to the FACE Coalition. Our work has mobilized a new generation of Black entrepreneurs, professionals, and ecosystem builders.
Our Leadership</p>
  </section>
  <section className="flex justify-center md:flex-row flex-col items-center gap-6 py-18 px-6 md:px-16 bg-[#F5F6FA]">
    <div className='max-w-[650px] min-h-[250px] py-8 px-6 flex flex-col gap-6 bg-white text-[#4B5564] rounded-xl'>
      <div className='flex justify-start items-center gap-7 ' >
        <Image src='/lampon.svg' width={64} height={64} alt='dartboard.svg'/>
        <h1 className='text-[#0F4082] font-bold lg:text-[40px] text-[25px]'>Our Mission</h1>
      </div>
      <p className='md:w-[95%] w-full'>To empower Black-led and Black-serving organizations in British Columbia through comprehensive training, strategic partnerships, and ecosystem development—driving inclusive business growth, job creation, and social change.</p>
    </div>

 <div className='max-w-[650px] min-h-[250px] py-8 px-6 flex flex-col gap-6 bg-white text-[#4B5564] rounded-xl'>
      <div className='flex justify-start items-center gap-7 ' >
        <Image src='/dartboard.svg' width={64} height={64} alt='dartboard.svg'/>
        <h1 className='text-[#0F4082] font-bold lg:text-[40px] text-[25px]'>Our Vision</h1>
      </div>
      <p className='md:w-[95%] w-full'> A vibrant, self sustaining Black entrepreneurship ecosystem in BC and Western Canada: innovative, interconnected, and community-driven, where every Black business has access to capital, markets, and support.</p>
    </div>
    
  </section>

<section className='bg-[#E6E6E6]/25 w-full flex flex-col justify-center items-center py-12  px-5 md:px-16'>
   <h1 className='text-white  text-center  bg-[#0F4082] px-2.5 py-[9.5px] rounded-full'>Our Leadership</h1>
   <p className='xl:max-w-[58%] pt-4 pb-11 text-[#0F4082] font-bold lg:text-[40px] text-center text-[30px]'>A 100% Black-Identified Team Rooted in BC's Landscape</p>
<Leadership/>
</section>

<section className='bg-[#F5F6FA] w-full flex flex-col justify-center items-center py-10  px-5 md:px-16'>
    <h1 className='text-[#0F4082] font-bold text-center lg:text-[40px] text-[30px]'>Our Achievements & Credibility</h1>
       <p className='xl:max-w-[58%] pt-4 pb-11 text-[#4B5564] text-center'>These number tell the story of our commitment to creating meaningful change and empowering communities.</p>
       <Achievement/>
</section>

  <section className='bg-white w-full flex flex-col justify-center items-center py-10 px-5 md:px-16'>
<h1 className='text-[#0F4082] font-bold lg:text-[40px] text-[30px]'>Our Journey</h1>
<Image alt='journey' src='/journey.svg' width={1100} height={400} className=' w-100% h-auto mt-9'/>

  </section>

  <section className='bg-[#F5F6FA] w-full flex flex-col justify-center items-center py-18  px-5 md:px-16'>
<h1 className='text-[#0F4082] font-bold text-center lg:text-[40px] text-[30px]'>Partners & Collaborators</h1>
       <p className='xl:max-w-[58%] pt-4 pb-11 text-[#4B5564] text-center'>Collaboration drives our impact across Canada through strategic partnerships with leading universities, corporations, and nonprofits.</p>
            <div
      className="grid  gap-6  px-6 lg:px-4 xl:px-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-8" >
      {collaborators.map((collaborator, index) =>(
          <div
            key={index}
            className="
              flex flex-col justify-start 
              h-auto py-2 px-1 
              rounded-[16px] items-center
              max-w-[328px]">
              <Image src={collaborator.svg} alt={collaborator.text} width={64} height={64} />
                  
            <p className="text-center  mt-2 text-black text-[16px]">{collaborator.text}</p>
              <p className="text-center text-black text-[16px] mt-1">{collaborator.subtext}</p>
          </div>
        ))}
    </div>
      <div
  className="grid gap-6 px-6 lg:px-4 xl:px-16 
             sm:grid-cols-1 md:grid-cols-3  xl:grid-cols-5 
             pb-[35px] pt-[35px] rounded-xl bg-white mt-8"
>
  {partners.map((partner, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-between 
                 h-[140px] py-4 px-2 rounded-[16px] max-w-[203px]"
    >
      {/* Force all logos into the same sized square box */}
      <div className="w-[64px] h-[64px] flex items-center justify-center">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={64}
          height={64}
          className="object-contain max-h-[64px] max-w-[64px]"
        />
      </div>

      <p className="text-center text-black text-[16px] mt-2">
        {partner.name}
      </p>
    </div>
  ))}
</div>
<p className='text-[#4B5564] pt-12 text-center'>Interested in partnering with us? Let’s create impact together.</p>
      <ButtonDiv  
          involve={{
                        programs: [
             'Select partnership type',
             'Academic Institution',
             'Corporate Partner',
             'Nonprofit Organization',
             'Government Agency',
             'Community Organisation',
             'Other'
            ]}}/>
  </section>

   {/* <section className='bg-white w-full flex flex-col justify-center items-center pt-18 pb-13  px-5 md:px-16'>
    <h1 className='text-[#0F4082] font-bold lg:text-[40px] text-center text-[30px]'>Stories & Testimonials</h1>
    <p className='xl:max-w-[58%] pt-4 pb-11 text-[#4B5564] text-center'>Ready to make a difference? Explore career opportunities and become part of a team dedicated to empowering youth and transforming communities.</p>
   <Review />
   </section>*/}
   <section className='bg-[#0F4082] w-full flex flex-col justify-center items-center py-18  px-5 md:px-16'>
      <p className='xl:max-w-[40%] pt-4 text-white text-center'>Join us in empowering the next generation of Canadian leaders.
Together, we can build stronger communities nationwide.</p>
{/*<div className='flex justify-center md:flex-row flex-col items-center gap-6 mt-8'>
      <button className='py-3 px-16 bg-[#AD8E63] rounded-xl font-medium  cursor-pointer text-white'>Get Involved</button>
      <button className='py-3 px-16 border bg-[#E5E7EBF6] rounded-xl font-medium  cursor-pointer text-[#0F4082]'>Learn More</button>
      </div>*/}
   </section>
  </>
  )
}

export default Page