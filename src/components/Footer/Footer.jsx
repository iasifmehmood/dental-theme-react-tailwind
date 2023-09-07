import React, { useState, useEffect } from 'react';
import FooterItems from './FooterItems';
// react scroll
import { Link } from 'react-scroll';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { footerData } from '../../data/data';

export const Footer = () => {
  const [showArrowButton, setShowArrowButton] = useState(false);

  // Function to toggle the arrow button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowArrowButton(true);
    } else {
      setShowArrowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className='pt-20 bg-light-bg relative'>
      <div className='max-w-[1200px] mx-auto px-4'>
        {showArrowButton && (
          <Link
            className='fixed bottom-10 right-5 cursor-pointer' // Use 'fixed' for a floating effect
            to='home'
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className='text-white bg-blue rounded-full h-6 w-6 p-2 hover:bg-black'
            ></FontAwesomeIcon>
          </Link>
        )}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {footerData.map((item, index) => (
            <FooterItems key={index} item={item} />
          ))}
        </div>
        <div className='text-center py-5 border-t border-[#0000001a] mt-6'>
          <p>
            Developed by <span className='text-blue'>First Stop Dental</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
