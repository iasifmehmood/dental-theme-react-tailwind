import React, { useEffect, useRef } from 'react';
import Heading from '../Heading';
import ServiceItems from './ServiceItems';
import { servicesData } from '../../data/data';

const Services = () => {
  const servicesSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesSectionRef.current) {
        const rect = servicesSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the scroll position when the bottom of the section
        // is at the middle of the viewport
        const scrollPosition = rect.top - windowHeight / 2;

        if (scrollPosition < 0) {
          servicesSectionRef.current.classList.add(
            'opacity-100',
            'translate-y-0'
          );
          servicesSectionRef.current.classList.remove(
            'opacity-0',
            '-translate-y-20'
          );
        } else {
          servicesSectionRef.current.classList.add(
            'opacity-0',
            '-translate-y-20'
          );
          servicesSectionRef.current.classList.remove(
            'opacity-100',
            'translate-y-0'
          );
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={servicesSectionRef}
      name='services'
      className='py-20 bg-light-bg scroll-pt-24 transition-opacity transition-transform duration-500 ease-in-out opacity-0 -translate-y-20'
    >
      <div className='max-w-[1200px] mx-auto px-4'>
        <Heading title=' our services' />
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {servicesData.map((item, index) => (
            <div
              key={index}
              className='hover:scale-105 transform transition-transform'
            >
              <ServiceItems item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

// import React from 'react'
// import Heading from '../Heading'
// import ServiceItems from './ServiceItems'
// import { servicesData } from '../../data/data'
// const Services = () => {
//   return (
//     <section name='services' className="py-20 bg-light-bg scroll-pt-24 ">
//       <div className="max-w-[1200px] mx-auto px-4">
//         <Heading  title=' our services'/>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {
//             servicesData.map((item, index) => (
//               <ServiceItems key={index} item={item} />
//             ))
//           }
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services
