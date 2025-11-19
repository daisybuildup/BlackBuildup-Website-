'use client'
import React from 'react'
import { useState } from 'react'

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
           <h1 className='text-[#0F4082] font-bold md:text-3xl text-2xl'>{modal.title}</h1>
           <p className=' pt-6'>{modal.subtext}</p>
            <p className='text-left text-[#0F4082] text-[20px] font-bold  pt-6 '>Program Components:</p>   
        <ul className='list-disc marker:text-[#82510F] flex flex-col gap-3 pl-5   py-4'>     
            {modal.components?.map((component, idx) => (
                <li key={idx} className='text-[#4B5564]  text-base '>{component}</li>
            ))}                             
        </ul> 
            <div className="mt-4 sm:mt-10 py-6 px-4 sm:py-8 sm:px-6 bg-[#0F4082]/10 rounded-[12px] ">
            <p className="  text-sm sm:text-base ">{modal.description}</p>                           
            </div>
                  
            <div className="flex gap-2 md:gap-8  justify-between items-center border-t-[#E5E7EB] mt-8">
                         <button
                onClick={() => setModal(false)}
                className="border-[#0F4082] border py-3.5 text-[#0F4082] font-medium rounded-2xl cursor-pointer  w-[50%]"
              >
                Cancel
              </button>
              <button className="bg-[#0F4082] py-3.5 text-white font-medium rounded-2xl cursor-pointer w-[50%] "  onClick={() => setShowForm(true)}>
                Apply now
              </button>
                 
            </div>
          </>
        ) : (
          // ==============================
          //  INFO REQUEST FORM
          // ==============================
          <div>
            <h2 className="text-2xl font-bold text-[#0F4082] mb-6">Apply for this Program</h2>

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
            <label htmlFor='message' className="block mb-1 text-left font-medium">Program you are applying for*</label>
            <textarea 
              name="message"
              placeholder='What program are you applying for?'
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
                Submit
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


const EntrepreneurshipClient = ({entrepreneurship}) => {
   

const [isEntrepreneurship, setIsEntrepreneurship] = useState(null);

  return (
    <div className='w-full grid md:grid-cols-2 gap-6   pb-10 ' >
        {entrepreneurship.map((item, index) => (
            <div key={index} className='2xl:min-w-[600px] flex flex-col justify-between items-left bg-white border border-[#E5E7EB] rounded-xl px-5  ' >
      <h1 className='text-left text-[#0F4082] font-bold xl:text-2xl text-xl pt-8 '>{item.title}</h1>
      <h2 className='text-left text-[#4B5564] text-base pt-2 '>{item.goal}</h2>            
        <p className='text-left text-black text-lg font-semibold  pt-6 '>Program Components</p>   
        <ul className='list-disc marker:text-[#4B5564] flex flex-col gap-3 pl-5   py-4'>     
            {item.subcomponents.map((component, idx) => (
                <li key={idx} className='text-[#4B5564]  text-base '>{component}</li>
            ))}                             
        </ul>
        <button className='text-center w-full bg-[#0F4082] cursor-pointer hover:bg-[#0a3676] rounded-2xl mb-5 py-3 text-white font-medium ' onClick={()=>setIsEntrepreneurship(item)}>Learn More</button>   
            </div>
        ))}
        
        {isEntrepreneurship && <Modal modal={isEntrepreneurship} setModal={setIsEntrepreneurship} />}
    </div>
  )
}

export default EntrepreneurshipClient


