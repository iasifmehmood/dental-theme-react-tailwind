import React, { useEffect, useRef } from 'react';
import Heading from '../Heading';

const VideoGallery = () => {
  const videoGallerySectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoGallerySectionRef.current) {
        const rect = videoGallerySectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the scroll position when the bottom of the section
        // is at the middle of the viewport
        const scrollPosition = rect.top - windowHeight / 2;

        if (scrollPosition < 0) {
          videoGallerySectionRef.current.classList.add(
            'opacity-100',
            'translate-y-0'
          );
          videoGallerySectionRef.current.classList.remove(
            'opacity-0',
            '-translate-y-20'
          );
        } else {
          videoGallerySectionRef.current.classList.add(
            'opacity-0',
            '-translate-y-20'
          );
          videoGallerySectionRef.current.classList.remove(
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
      ref={videoGallerySectionRef}
      name='video-gallery'
      className='py-6 md:py-10 lg:py-16 bg-light-bg scroll-pt-10 md:scroll-pt-16 lg:scroll-pt-24 transition-opacity transition-transform duration-500 ease-in-out opacity-0 -translate-y-20'
    >
      <div className='max-w-[900px] mx-auto px-4'>
        <Heading title='Video Gallery' center={true} />
        <div className='text-center flex flex-wrap justify-center'>
          <div className='flex w-full md:w-1/2 lg:w-1/2 m-3'>
            {/* Original Video */}
            <div className='relative aspect-w-16 aspect-h-9'>
              {/* Embed a YouTube video */}
              {/* <iframe
                width='853'
                height='480'
                src='https://www.youtube.com/embed/lw7xIB0kPCo'
                title='Dental Ad Video Template (Editable)'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe> */}
              <video
                autoPlay
                loop
                muted
                controls
                playsInline
                className='top-0 left-0 w-full h-full object-cover'
                style={{
                  filter: 'brightness(75%)',
                }}
              >
                <source src='/dentist2.mp4' type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='flex w-full md:w-1/2 lg:w-1/2 m-3'>
            {/* New Video */}
            <div className='relative aspect-w-16 aspect-h-9'>
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className='top-0 left-0 w-full h-full object-cover'
                style={{
                  filter: 'brightness(75%)',
                }}
              >
                <source src='/dentist.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
