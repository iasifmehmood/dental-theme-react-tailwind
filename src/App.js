import React from 'react';
import {
  About,
  Clients,
  Contact,
  Footer,
  Home,
  Navbar,
  Process,
  Services,
  Team,
  Mission,
  VideoGallery,
} from './components';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Mission />
      <About />
      <Team />
      <Services />
      <Process />
      <Clients />
      <VideoGallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
