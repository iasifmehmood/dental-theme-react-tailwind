import React from 'react';
import {
  About,
  Clients,
  HeroSection,
  Process,
  Services,
  Team,
  Mission,
} from './index';

function Home() {
  return (
    <>
      <HeroSection />
      <Mission />
      <About />
      <Team />
      <Services />
      <Process />
      <Clients />
    </>
  );
}

export default Home;
