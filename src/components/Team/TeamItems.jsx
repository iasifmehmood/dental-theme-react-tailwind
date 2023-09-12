// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import { Autoplay, Navigation } from 'swiper'; // Import the Navigation module
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState } from 'react';

// const TeamItems = ({ TeamData }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Swiper
//       modules={[Autoplay, Navigation]} // Add Navigation module
//       spaceBetween={20}
//       slidesPerView={3}
//       loop={true}
//       grabCursor={true}
//       autoplay={{ delay: 2000 }}
//       navigation={{
//         // Add navigation settings
//         nextEl: '.swiper-button-next', // Class name for next button
//         prevEl: '.swiper-button-prev', // Class name for previous button
//       }}
//       breakpoints={{
//         0: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         991: {
//           slidesPerView: 3,
//           spaceBetween: 20,
//         },
//       }}
//     >
//       {TeamData.map((team, index) => (
//         <SwiperSlide key={index}>
//           <div
//             className={`bg-white rounded p-4 text-center shadow-lg transform transition-transform hover:scale-110 hover:duration-500 ${
//               isHovered ? 'm-3' : 'm-3'
//             }`}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <img
//               src={team.img}
//               className='rounded-full h-48 w-48 mx-auto'
//               alt=''
//             />
//             <h3 className='capitalize text-black font-medium md:text-xl mb-1'>
//               {team.name}
//             </h3>
//             <span className='capitalize text-light-color'>{team.title}</span>
//           </div>
//         </SwiperSlide>
//       ))}
//       <div className='swiper-button-next'></div> {/* Next button */}
//       <div className='swiper-button-prev'></div> {/* Previous button */}
//     </Swiper>
//   );
// };

// export default TeamItems;

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper'; // Import the Navigation module
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

const TeamItems = ({ TeamData }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Swiper
      modules={[Autoplay, Navigation]} // Add Navigation module
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      grabCursor={true}
      autoplay={{ delay: 2000 }}
      navigation={{
        // Add navigation settings
        nextEl: '.swiper-button-next', // Class name for next button
        prevEl: '.swiper-button-prev', // Class name for previous button
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {TeamData.map((team, index) => (
        <SwiperSlide key={index}>
          <div
            className={`bg-white rounded p-4 text-center shadow-lg transform transition-transform hover:scale-110 hover:duration-500 ${
              isHovered ? 'm-3' : 'm-3'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={team.img}
              className='rounded-full mx-auto'
              alt=''
              style={{ height: '200px', width: '200px' }} // Adjust the height and width as needed
            />
            <h3 className='capitalize text-black font-medium md:text-xl mb-1'>
              {team.name}
            </h3>
            <span className='capitalize text-light-color'>{team.title}</span>
          </div>
        </SwiperSlide>
      ))}
      <div className='swiper-button-next'></div> {/* Next button */}
      <div className='swiper-button-prev'></div> {/* Previous button */}
    </Swiper>
  );
};

export default TeamItems;
