import React, { useEffect, useRef } from 'react';
import Heading from './Heading';

const Mission = () => {
  const missionSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (missionSectionRef.current) {
        const rect = missionSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the scroll position when the bottom of the section
        // is at the middle of the viewport
        const scrollPosition = rect.top - windowHeight / 2;

        if (scrollPosition < 0) {
          missionSectionRef.current.classList.add(
            'opacity-100',
            'translate-y-0'
          );
          missionSectionRef.current.classList.remove(
            'opacity-0',
            '-translate-y-20'
          );
        } else {
          missionSectionRef.current.classList.add(
            'opacity-0',
            '-translate-y-20'
          );
          missionSectionRef.current.classList.remove(
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
      ref={missionSectionRef}
      name='our-mission'
      className='py-20 bg-light-bg scroll-pt-24 transition-opacity transition-transform duration-500 ease-in-out opacity-0 -translate-y-20'
    >
      <div className='max-w-[1200px] mx-auto px-4'>
        <Heading title='Our Mission' center={true} />
        <div className='text-center'>
          <p className='py-7 leading-8 text-light-color'>
            Our dental practice prides itself on providing the latest dental
            facial aesthetic treatments. We provide services from a very simple
            filling to complex dental & cosmetic services. With world-class
            trained specialists, leading-edge technology, and wonderful support
            staff, we are committed to providing the best professional services.
            Dentistry is our passion; it runs in the family for over four
            decades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
