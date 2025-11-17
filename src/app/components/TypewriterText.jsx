// typewriter effect imported from react library is clientside renderonly and it can not be used in a serverver component
"use client";
import { Typewriter } from 'react-simple-typewriter';

 const TypewriterText = ({text}) => {
  return (
     <p className='text-white md:text-[18px] md:w-[62%] w-[90%]'><Typewriter
        words={text}
        loop={1} // only once
        cursor={false} // no blinking cursor
        typeSpeed={40}
        deleteSpeed={0}
        delaySpeed={1000}
      /></p>
  );
}
export default TypewriterText