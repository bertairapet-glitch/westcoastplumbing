
import React from 'react';
import { ICON_MAP } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-lg">
      <div className="max-w-full px-4 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center h-24">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => {
            // If we're on a service detail page, go back to home
            if (window.location.hash.startsWith('#service-')) {
              window.location.hash = '';
            } else {
              // Otherwise, scroll to top
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}>
            <img
              src="/logo.png"
              alt="West Coast Plumbing Services Inc"
              className="h-32 w-auto group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-3">
              <span className="text-pink-400 font-semibold text-sm">Follow us on Instagram</span>
              <a
                href="https://www.instagram.com/westcoastplumbinginc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center hover:scale-110 text-white transition-all cursor-pointer border border-white/20 shadow-lg"
                title="Follow us on Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Services</a>
            <a href="#reviews" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Reviews</a>
            <a href="#assistant" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">AI Help</a>
            <div className="flex items-center gap-10">
              <a href="mailto:westcoastplumbinc@gmail.com" className="text-slate-600 font-medium hover:text-blue-600 transition flex items-center gap-2 whitespace-nowrap text-base">
                {ICON_MAP.Mail}
                westcoastplumbinc@gmail.com
              </a>
              <a href="tel:7142679974" className="text-slate-900 font-black hover:text-blue-600 transition flex items-center gap-3 whitespace-nowrap text-xl">
                {ICON_MAP.PhoneCall}
                (714) 267-9974
              </a>
            </div>
            <a href="#booking" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200 whitespace-nowrap">
              Book Online
            </a>
          </div>

          <div className="md:hidden">
            <a href="tel:7142679974" className="bg-blue-600 text-white p-3 rounded-full flex items-center justify-center">
              {ICON_MAP.PhoneCall}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
