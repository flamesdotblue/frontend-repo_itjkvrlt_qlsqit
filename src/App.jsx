import React from 'react';
import HeroBanner from './components/HeroBanner';
import EventsSection from './components/EventsSection';
import ObjectExplorer from './components/ObjectExplorer';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#0a0114] to-black text-white">
      <HeroBanner />
      <main>
        <EventsSection />
        <ObjectExplorer />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
