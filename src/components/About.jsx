import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import AboutImg from '../assets/about-img.jpg';

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={aboutSectionRef}
      name='about'
      className={`py-20 scroll-pt-24 transition-opacity transition-transform duration-500 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
      }`}
    >
      <div className='max-w-[1300px] mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='text-center md:text-left'>
            <span className='text-blue text-lg md:text-4xl '> About Us</span>
            {/* <h2 className='text-3xl md:text-4xl leading-10 text-black pt-2'>
              True Healthcare For Your Family
            </h2> */}
            <p className='py-7 leading-8 text-light-color'>
              At our practice, we prioritize your family's health and
              well-being. Our team is committed to providing top-quality dental
              care and personalized solutions for all your oral health needs.
              Experience the difference with us today!
            </p>
            <Button text='Make Appointment' className='w-fit' />
          </div>
          <div>
            <img src={AboutImg} className='w-full h-fit' alt='about us' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
