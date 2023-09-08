import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Contact, Footer, Navbar, VideoGallery } from './components';
import Home from './components/Home';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '') {
      setTimeout(() => {
        const id = location.hash.slice(1); // Remove the '#' character
        const targetCard = document.getElementById(id);

        if (targetCard) {
          const paddingTop = 60;
          const targetPosition = targetCard.offsetTop - paddingTop;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video-gallery' element={<VideoGallery />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// import React from 'react';
// import {
//   About,
//   Clients,
//   Contact,
//   Footer,
//   HeroSection,
//   Navbar,
//   Process,
//   Services,
//   Team,
//   Mission,
//   VideoGallery,
// } from './components';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <Mission />
//       <About />
//       <Team />
//       <Services />
//       <Process />
//       <Clients />
//       <VideoGallery />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;

// import React from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { Contact, Footer, Navbar, VideoGallery } from './components';
// import Home from './components/Home';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div>
//         <Router>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/video-gallery' element={<VideoGallery />} />
//             <Route path='/contact' element={<Contact />} />
//           </Routes>
//         </Router>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;
