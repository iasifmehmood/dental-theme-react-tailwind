import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TeamItems.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../assets/pic-4.jpg';
import slide_image_2 from '../../assets/pic-5.jpg';
import slide_image_3 from '../../assets/pic-6.jpg';
import slide_image_4 from '../../assets/pic-1.png';
import slide_image_5 from '../../assets/pic-2.png';
import slide_image_6 from '../../assets/pic-3.png';

function TeamItems() {
  return (
    <div className='container'>
      <h1 className='heading'>Our Team</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        mousewheel={true} // Enable mouse slide navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={slide_image_1} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt='slide_image' />
        </SwiperSlide>

        <div className='swiper-pagination'></div>
        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
      </Swiper>
    </div>
  );
}

export default TeamItems;

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
//               className='rounded-full mx-auto'
//               alt=''
//               style={{ height: '200px', width: '200px' }} // Adjust the height and width as needed
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

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './TeamItems.css';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import slide_image_1 from '../../assets/pic-4.jpg';
// import slide_image_2 from '../../assets/pic-5.jpg';
// import slide_image_3 from '../../assets/pic-6.jpg';
// import slide_image_4 from '../../assets/pic-1.png';
// import slide_image_5 from '../../assets/pic-2.png';
// import slide_image_6 from '../../assets/pic-3.png';

// function TeamItems() {
//   return (
//     <div className='container'>
//       <h1 className='heading'>Our Team</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className='swiper_container'
//       >
//         <SwiperSlide>
//           <img src={slide_image_1} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt='slide_image' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt='slide_image' />
//         </SwiperSlide>

//         <div className='swiper-pagination'></div>
//       </Swiper>
//     </div>
//   );
// }

// export default TeamItems;
