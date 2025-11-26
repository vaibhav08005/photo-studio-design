import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Showreel } from './components/Showreel';
import { PhotographySection } from './components/PhotographySection';
import { TravelSection } from './components/TravelSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Showreel />
        <PhotographySection />
        <TravelSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;