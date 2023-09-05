import React, { useState, useEffect } from 'react';
import Heading from '../Heading';
import { processData } from '../../data/data';
import ProcessItems from './ProcessItems';

const Process = () => {
  // State to track whether the section is in view
  const [inView, setInView] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const section = document.getElementById('process-section');
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the section is in view
      if (sectionTop < windowHeight * 0.7) {
        setInView(true);
      } else {
        setInView(false);
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id='process-section'
      className={`py-20 transition-opacity duration-500 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='max-w-[1200px] mx-auto px-4'>
        <Heading title='work process' />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {processData.map((item, index) => (
            <ProcessItems key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

// import { data } from "autoprefixer";
// import React from "react";
// import Heading from "../Heading";
// import { processData } from "../../data/data";
// import ProcessItems from "./ProcessItems";
// const Process = () => {
//   return (
//     <section className="py-20">
//       <div className="max-w-[1200px] mx-auto px-4">
//         <Heading title="work process" />
//         <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {processData.map((item, index) => (
//             <ProcessItems key={index} item={item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;
