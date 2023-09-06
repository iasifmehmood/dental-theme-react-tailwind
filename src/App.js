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
} from './components';
import Mission from './components/Mission';
import VideoGallery from './components/Video-Gallery/VideoGallery';

// import { Navbar, Home, About, Services, Process, Clients, Contact, Footer } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Mission />
      <About />
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
