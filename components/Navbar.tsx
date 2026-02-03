import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-full px-4 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 cursor-pointer group self-start -mt-6 lg:-mt-10" onClick={() => {
            if (window.location.hash.startsWith('#service-')) {
              window.location.hash = '';
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}>
            <img
              src="/logo.png"
              alt="West Coast Plumbing Services Inc"
              className="h-32 md:h-56 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['Services', 'Photos', 'Reviews', 'Booking'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-base font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              <span className="text-pink-400 font-bold text-sm hidden lg:inline">Follow us:</span>
              <a
                href="https://www.instagram.com/westcoastplumbinginc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" />
                </svg>
              </a>
            </div>
            <a
              href="tel:7142679974"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95 text-sm"
            >
              (714) 267-9974
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 py-6 px-4 shadow-2xl">
          <div className="flex flex-col gap-4">
            {['Services', 'Photos', 'Reviews', 'Booking'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-300 hover:text-white p-2"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:7142679974"
              className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-center"
            >
              Call West Coast Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
