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
      <div className='max-w-6xl mx-auto px-4'>
        <Heading title='Video Gallery' center={true} />
        <div className='text-center'>
          <div className='relative overflow-hidden max-w-full'>
            <div className='aspect-w-16 aspect-h-9'>
              {/* Embed a YouTube video */}
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/lw7xIB0kPCo'
                title='Dental Ad Video Template (Editable)'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
