import React, { useState, useEffect } from 'react';
import Heading from '../Heading';
import TeamItems from './TeamItems';
import { TeamData } from '../../data/data';

const Team = () => {
  // State to track whether the section is in view
  const [inView, setInView] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const section = document.getElementById('team');
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
      id='team'
      name='team'
      className={`py-20 bg-light-bg transition-opacity duration-500 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='max-w-[1200px] mx-auto px-4'>
        {/* <Heading title='Our Team' /> */}
        <TeamItems TeamData={TeamData} />
      </div>
    </section>
  );
};

export default Team;
