import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import StarIcons from './StarIcons';
import { useState } from 'react';

const ClientsItems = ({ clientsData }) => {
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
      {clientsData.map((client, index) => (
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
              src={client.img}
              className='rounded-full h-24 w-24 mx-auto'
              alt=''
            />
            <p className='leading-normal text-light-color py-5'>
              {client.desc}
            </p>
            <div className='bg-light-bg inline-block px-4 py-1 space-x-1 rounded mb-4'>
              <StarIcons type={faStar} />
              <StarIcons type={faStar} />
              <StarIcons type={faStar} />
              <StarIcons type={faStar} />
              <StarIcons type={faStarHalfStroke} />
            </div>
            <h3 className='capitalize text-black font-medium md:text-xl mb-1'>
              {client.name}
            </h3>
            <span className='capitalize text-light-color'>{client.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientsItems;
