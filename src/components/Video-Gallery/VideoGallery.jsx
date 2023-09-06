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
      className='py-6 md:py-10 lg:py-16 bg-white scroll-pt-10 md:scroll-pt-16 lg:scroll-pt-24 transition-opacity transition-transform duration-500 ease-in-out opacity-0 -translate-y-20'

      //   className='py-20 bg-white scroll-pt-24 transition-opacity transition-transform duration-500 ease-in-out opacity-0 -translate-y-20'
    >
      <div className='max-w-[900px] mx-auto px-4'>
        <Heading title='Video Gallery' center={true} />
        <div className='text-center'>
          <div className='relative aspect-w-16 aspect-h-9'>
            {/* Embed a YouTube video */}
            <iframe
              width='853'
              height='480'
              src='https://www.youtube.com/embed/lw7xIB0kPCo'
              title='Dental Ad Video Template (Editable)'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;

// import React, { useEffect, useRef } from 'react';
// import Heading from '../Heading';

// const VideoGallery = () => {
//   const videoGallerySectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (videoGallerySectionRef.current) {
//         const rect = videoGallerySectionRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         // Calculate the scroll position when the bottom of the section
//         // is at the middle of the viewport
//         const scrollPosition = rect.top - windowHeight / 2;

//         if (scrollPosition < 0) {
//           videoGallerySectionRef.current.classList.add(
//             'opacity-100',
//             'translate-y-0'
//           );
//           videoGallerySectionRef.current.classList.remove(
//             'opacity-0',
//             '-translate-y-20'
//           );
//         } else {
//           videoGallerySectionRef.current.classList.add(
//             'opacity-0',
//             '-translate-y-20'
//           );
//           videoGallerySectionRef.current.classList.remove(
//             'opacity-100',
//             'translate-y-0'
//           );
//         }
//       }
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       ref={videoGallerySectionRef}
//       name='video-gallery'
//       className='py-20 bg-white scroll-pt-24 transition-opacity transition-transform duration-500 ease-in-out opacity-0 -translate-y-20'
//     >
//       <div className='max-w-[1200px] mx-auto px-4'>
//         <Heading title='Video Gallery' center={true} />
//         <div className='text-center'>
//           <div className='relative overflow-hidden max-w-full'>
//             <div className='aspect-w-16 aspect-h-9'>
//               {/* Embed a YouTube video */}
//               <iframe
//                 width='853'
//                 height='480'
//                 src='https://www.youtube.com/embed/lw7xIB0kPCo'
//                 title='Dental Ad Video Template (Editable)'
//                 frameborder='0'
//                 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//                 allowfullscreen
//                 className='absolute top-0 left-0 w-full h-full'
//               ></iframe>
//             </div>
//           </div>
//           <p className='text-xl leading-8 text-gray-700 py-4'>
//             {/* Add your video gallery description here */}
//             Video description goes here.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoGallery;

// import React, { useEffect, useRef } from 'react';
// import Heading from '../Heading';

// const VideoGallery = () => {
//   const videoGallerySectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (videoGallerySectionRef.current) {
//         const rect = videoGallerySectionRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         // Calculate the scroll position when the bottom of the section
//         // is at the middle of the viewport
//         const scrollPosition = rect.top - windowHeight / 2;

//         if (scrollPosition < 0) {
//           videoGallerySectionRef.current.classList.add(
//             'opacity-100',
//             'translate-y-0'
//           );
//           videoGallerySectionRef.current.classList.remove(
//             'opacity-0',
//             '-translate-y-20'
//           );
//         } else {
//           videoGallerySectionRef.current.classList.add(
//             'opacity-0',
//             '-translate-y-20'
//           );
//           videoGallerySectionRef.current.classList.remove(
//             'opacity-100',
//             'translate-y-0'
//           );
//         }
//       }
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       ref={videoGallerySectionRef}
//       name='video-gallery'
//       className='py-6 md:py-10 lg:py-16 bg-white scroll-pt-10 md:scroll-pt-16 lg:scroll-pt-24 transition-opacity transition-transform duration-500 ease-in-out opacity-0 -translate-y-20'
//     >
//       <div className='max-w-4xl mx-auto px-4'>
//         <Heading title='Video Gallery' center={true} />
//         <div className='text-center'>
//           <div className='relative aspect-w-16 aspect-h-9 mx-auto'>
//             {/* Embed a YouTube video */}
//             <iframe
//               width='853'
//               height='480'
//               src='https://www.youtube.com/embed/lw7xIB0kPCo'
//               title='Dental Ad Video Template (Editable)'
//               frameborder='0'
//               allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//               allowfullscreen
//               className='w-full h-full'
//             ></iframe>
//           </div>
//           <p className='text-base md:text-xl lg:text-2xl leading-8 text-gray-700 py-4'>
//             {/* Add your video gallery description here */}
//             Video description goes here.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoGallery;
