import React from 'react';
import { lazy, Suspense } from 'react';
import {
  About,
  Clients,
  HeroSection,
  Process,
  Services,
  Team,
  Mission,
} from './index';
// const Clients = lazy(() => import('./Team/Team'));

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
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Clients />
      </Suspense> */}
    </>
  );
}

export default Home;
