import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import AboutImg from "../assets/about-img.jpg";

const About = () => {
  const aboutSectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    if (aboutSectionRef.current) {
      const rect = aboutSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the scroll position when the bottom of the section
      // is at the middle of the viewport
      const scrollPosition = rect.top - windowHeight / 2;

      if (scrollPosition < 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={aboutSectionRef}
      name="about"
      className={`py-20 scroll-pt-24 transition-opacity transition-transform duration-500 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img src={AboutImg} className="w-full h-fit" alt="about us" />
          </div>
          <div className="text-center md:text-left">
            <span className="text-blue text-lg"> About Us</span>
            <h2 className="text-3xl md:text-4xl leading-10 text-black pt-2">
              True Healthcare For Your Family
            </h2>
            <p className="py-7 leading-8 text-light-color">
              Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
              Laboriosam Cupiditate Vero In Provident Ducimus. Totam Quas Labore
              Mollitia Cum Nisi, Sint, Expedita Rem Error Ipsa, Nesciunt Ab
              Provident. Aperiam, Officiis!
            </p>
            <Button text="Make Appointment" className="w-fit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import React, { useEffect, useRef } from 'react';
// import Button from './Button';
// import AboutImg from '../assets/about-img.jpg';

// const About = () => {
//   const aboutSectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (aboutSectionRef.current) {
//         const rect = aboutSectionRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         // Calculate the scroll position when the bottom of the section
//         // is at the middle of the viewport
//         const scrollPosition = rect.top - windowHeight / 2;

//         if (scrollPosition < 0) {
//           aboutSectionRef.current.classList.add('about-section-visible');
//         } else {
//           aboutSectionRef.current.classList.remove('about-section-visible');
//         }
//       }
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section ref={aboutSectionRef} name='about' className='py-20 about-section'>
//       <div className='max-w-[1200px] mx-auto px-4'>
//         <div className='grid md:grid-cols-2 gap-10'>
//           <div>
//             <img src={AboutImg} className='w-full' alt='about us' />
//           </div>
//           <div className='text-center md:text-left'>
//             <span className='text-blue text-lg'> About Us</span>
//             <h2 className='text-3xl md:text-4xl leading-10 text-black pt-2'>
//               True Healthcare For Your Family
//             </h2>
//             <p className='py-5 leading-8 text-light-color'>
//               Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
//               Laboriosam Cupiditate Vero In Provident Ducimus. Totam Quas Labore
//               Mollitia Cum Nisi, Sint, Expedita Rem Error Ipsa, Nesciunt Ab
//               Provident. Aperiam, Officiis!
//             </p>
//             <Button text='make appointment' />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from 'react';
// import Button from './Button';
// import AboutImg from '../assets/about-img.jpg';
// const About = () => {
//   return (
//     <section name='about' className='py-20'>
// <div className='max-w-[1200px] mx-auto px-4'>
//   <div className='grid md:grid-cols-2 gap-10'>
//     <div>
//       <img src={AboutImg} className='w-full' alt='about us' />
//     </div>
//     <div className='text-center md:text-left'>
//       <span className='text-blue text-lg'> About Us</span>
//       <h2 className='text-3xl md:text-4xl leading-10 text-black pt-2'>
//         True Healthcare For Your Family
//       </h2>
//       <p className='py-5 leading-8 text-light-color'>
//         Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
//         Laboriosam Cupiditate Vero In Provident Ducimus. Totam Quas Labore
//         Mollitia Cum Nisi, Sint, Expedita Rem Error Ipsa, Nesciunt Ab
//         Provident. Aperiam, Officiis!
//       </p>
//       <Button text='make appointment' />
//     </div>
//   </div>
// </div>
//     </section>
//   );
// };

// export default About;
