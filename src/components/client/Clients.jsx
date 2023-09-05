import React, { useState, useEffect } from 'react';
import Heading from '../Heading';
import ClientsItems from './ClientsItems';
import { clientsData } from '../../data/data';

const Clients = () => {
  // State to track whether the section is in view
  const [inView, setInView] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const section = document.getElementById('clients-section');
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
      id='clients-section'
      name='reviews'
      className={`py-20 bg-light-bg transition-opacity duration-500 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='max-w-[1200px] mx-auto px-4'>
        <Heading title='satisfied clients' />
        <ClientsItems clientsData={clientsData} />
      </div>
    </section>
  );
};

export default Clients;

// import React from "react";
// import Heading from "../Heading";
// import { clientsData } from "../../data/data";
// import ClientsItems from "./ClientsItems";
// const Clients = () => {
//   return (
//     <section name="reviews" className="py-20 bg-light-bg">
//       <div className="max-w-[1200px] mx-auto px-4">
//         <Heading title="satisfied clients" />
//         <ClientsItems clientsData={clientsData} />
//       </div>
//     </section>
//   );
// };

// export default Clients;
