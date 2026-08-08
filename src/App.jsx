import React from 'react';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'; // <--- MAKE SURE THIS IMPORT EXISTS AND SPELLING IS EXACT

function App() {
  return (
    <div className="relative min-h-screen bg-[#FCFAF8]">
      <Hero />
      <Work />
      <About />
      <Skills />
      <Contact />
      <Footer /> {/* <--- MAKE SURE THIS CLOSING TAG EXISTS AT THE BOTTOM */}
    </div>
  );
}

export default App;