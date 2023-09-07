import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import StarIcons from './StarIcons';
import { useState } from 'react';

const TeamItems = ({ TeamData }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      grabCursor={true}
      autoplay={{ delay: 2000 }}
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
            {/* Increased the scale value to 110 */}
            <img
              src={team.img}
              className='rounded-full h-48 w-48 mx-auto'
              alt=''
            />
            {/* <p className='leading-normal text-light-color py-5'>
              {team.desc}
            </p> */}
            <h3 className='capitalize text-black font-medium md:text-xl mb-1'>
              {team.name}
            </h3>
            <span className='capitalize text-light-color'>{team.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamItems;
