import React from 'react';
import Button from './Button';

const Home = () => {
  return (
    <section
      name="home"
      className="relative w-full bg-cover bg-left md:bg-center bg-no-repeat md:py-20"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://assets-global.website-files.com/5bbe6941856f549d0fa87728/5cc087a4d2c73017d6b09bba_WOND%20Masthead42319-transcode.mp4"
          type="video/mp4"
        />
      </video>

      <div className="max-w-[1200px] mx-auto px-4 flex items-center min-h-screen">
        <div className="md:w-2/4 text-center md:text-left relative z-9">
          <h2 className="font-semibold text-3xl md:text-5xl leading-10 text-white uppercase">
            let us brighten your smile
          </h2>
          <p className="py-5 leading-8 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            itaque, quasi aliquam alias tempora voluptatibus.
          </p>
          <Button text="make appointment" className="relative z-9" />
        </div>
      </div>
    </section>
  );
};

export default Home;
