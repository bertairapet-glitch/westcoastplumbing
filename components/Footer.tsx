
import React from 'react';
import { ICON_MAP } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-full px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-6 md:gap-12">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center">
            <img
              src="/logo.png"
              alt="West Coast Plumbing Services Inc"
              className="h-56 w-auto mb-2 md:mb-6"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide w-full text-center md:text-left">Our Speciality</h4>
            <div className="space-y-4 w-full flex flex-col items-center md:items-start">
              <p className="text-slate-300 font-semibold text-base">Licensed CA Plumber #1113541</p>
              <a
                href="https://www.yelp.com/biz/west-coast-plumbing-burbank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 group hover:scale-105 transition-transform"
              >
                <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold group-hover:bg-red-700 transition-colors">YELP</div>
                <div className="flex text-red-500">
                  {'★★★★★'.split('').map((s, i) => <span key={i} className="text-lg">{s}</span>)}
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Support</h4>
            <ul className="space-y-5">
              <li><a href="tel:7142679974" className="hover:text-blue-500 transition-colors text-base font-medium text-blue-400">Emergency Dispatch</a></li>
              <li><a href="#photos" className="hover:text-blue-500 transition-colors text-base font-medium">Photos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Region</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Burbank, CA
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Glendale
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Pasadena
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Los Angeles County
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile-only Instagram Link */}
        <div className="md:hidden flex flex-col items-center mt-12 mb-8">
          <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Follow Us</h4>
          <a
            href="https://www.instagram.com/westcoastplumbinginc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl active:scale-95 border-2 border-white/10"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" />
            </svg>
            Follow on Instagram
          </a>
        </div>

        <div className="mt-2 pt-2 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 font-medium tracking-wide">© 2026 West Coast Plumbing. Serving Burbank and Los Angeles County.</p>
          <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-sm shadow-green-400"></span>
            <span className="text-slate-300 font-bold text-xs uppercase tracking-widest">Service Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
