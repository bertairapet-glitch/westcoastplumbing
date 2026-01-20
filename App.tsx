
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Assistant } from './components/Assistant';
import { Reviews } from './components/Reviews';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';

const App: React.FC = () => {
  const [currentService, setCurrentService] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#service-')) {
        const serviceId = hash.replace('#service-', '');
        setCurrentService(serviceId);
      } else {
        setCurrentService(null);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // If we're on a service detail page, show that instead
  if (currentService) {
    return <ServiceDetail serviceId={currentService} />;
  }

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Assistant />
        <Reviews />
        <Booking />
      </main>
      <Footer />

      {/* Floating Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] pointer-events-none">
        <a
          href="tel:7142679974"
          className="pointer-events-auto flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-3xl shadow-2xl font-bold animate-pulse hover:animate-none border-2 border-white/20"
        >
          <div className="bg-white/20 p-2.5 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          Call Emergency Pro Now
        </a>
      </div>
    </div>
  );
};

export default App;
