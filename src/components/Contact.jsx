import React, { useEffect, useRef } from 'react';
import Heading from './Heading';

const Contact = () => {
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contactSectionRef.current) {
        const rect = contactSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the scroll position when the bottom of the section
        // is at the middle of the viewport
        const scrollPosition = rect.top - windowHeight / 2;

        if (scrollPosition < 0) {
          contactSectionRef.current.classList.add(
            'opacity-100',
            'translate-y-0'
          );
          contactSectionRef.current.classList.remove(
            'opacity-0',
            '-translate-y-20'
          );
        } else {
          contactSectionRef.current.classList.add(
            'opacity-0',
            '-translate-y-20'
          );
          contactSectionRef.current.classList.remove(
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
      ref={contactSectionRef}
      name='contact'
      className='py-20 transition-opacity transition-transform duration-500 ease-in-out opacity-0 -translate-y-20'
    >
      <div className='max-w-[1200px] mx-auto px-4'>
        <Heading title='make appointment' />
        <div className='bg-light-bg p-6 max-w-[30rem] mx-auto rounded'>
          <form action='#'>
            <div className='flex flex-col mb-4'>
              <label className='capitalize text-black mb-1'>your name :</label>
              <input
                type='text'
                name='name'
                placeholder='enter your name'
                className='w-full p-3 outline-none'
                required
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='capitalize text-black mb-1'>your email :</label>
              <input
                type='email'
                name='email'
                placeholder='enter your email'
                className='w-full p-3 outline-none'
                required
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='capitalize text-black mb-1'>
                your number :
              </label>
              <input
                type='number'
                name='number'
                placeholder='enter your number'
                className='w-full p-3 outline-none'
                required
              />
            </div>
            <div className='flex flex-col mb-6'>
              <label className='capitalize text-black mb-1'>
                appointment date :
              </label>
              <input
                type='datetime-local'
                name='date'
                placeholder='enter your name'
                className='w-full p-3 outline-none'
                required
              />
            </div>
            <input
              type='submit'
              value='Make Appointment'
              name='submit'
              className='w-full hidden lg:flex items-center justify-center text-white text-center cursor-pointer bg-blue py-4 px-12 rounded
              hover:bg-black'
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
