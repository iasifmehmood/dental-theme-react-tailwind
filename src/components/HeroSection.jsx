import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section
      name='home'
      className='relative w-full bg-cover bg-left md:bg-center bg-no-repeat md:py-20'
      id='hero'
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover'
        style={{
          filter: 'brightness(75%)',
        }}
      >
        <source src='/dentist2.mp4' type='video/mp4' />
      </video>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen'>
        <div className='md:w-1/2 text-center md:text-left relative z-9 mx-auto md:mx-0'>
          <h2
            className='font-semibold text-3xl md:text-5xl leading-10 text-white uppercase drop-shadow-lg'
            // style={{
            //   textShadow: "1px 1px 2px pink",
            // }}
          >
            let us brighten your smile
          </h2>
          <p className='py-5 leading-8 text-white drop-shadow-lg'>
            Creating healthier smiles through expert care and precision.
          </p>
          <Button text='Make Appointment' className='relative z-9' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// const HeroSection = () => {
//   return (
//     <section
//       name='home'
//       className='relative w-full bg-cover bg-left md:bg-center bg-no-repeat md:py-20'
//       id='hero'
//     >
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className='absolute top-0 left-0 w-full h-full object-cover'
//         style={{
//           filter: 'brightness(75%)',
//         }}
//       >
//         <source src='/dentist2.mp4' type='video/mp4' />
//       </video>

//       <div className='max-w-[1200px] mx-auto px-4 flex items-center min-h-screen'>
//         <div className='md:w-2/4 text-center md:text-left relative z-9'>
//           <h2
//             className='font-semibold text-3xl md:text-5xl leading-10 text-white uppercase drop-shadow-lg'
//             // style={{
//             //   textShadow: "1px 1px 2px pink",
//             // }}
//           >
//             let us brighten your smile
//           </h2>
//           <p className='py-5 leading-8 text-white drop-shadow-lg'>
//             Creating healthier smiles through expert care and precision.
//           </p>
//           <Button text='Make Appointment' className='relative z-9' />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
