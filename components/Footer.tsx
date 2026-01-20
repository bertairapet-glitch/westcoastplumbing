
import React from 'react';
import { ICON_MAP } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-full px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center">
            <img
              src="/logo.png"
              alt="West Coast Plumbing Services Inc"
              className="h-56 w-auto mb-6"
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
              <li><a href="#assistant" className="hover:text-blue-500 transition-colors text-base font-medium">AI Diagnostic Tool</a></li>
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
