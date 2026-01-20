
import React from 'react';
import { ICON_MAP } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-32">
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      <div className="max-w-full px-4 sm:px-10 lg:px-20 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-8 lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              24/7 Emergency Service Available
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-tight">
              24/7 Emergency Plumbing <br />
              <span className="text-blue-600">in Burbank, CA</span>
            </h1>
            <p className="mt-8 text-xl text-slate-600 leading-8 max-w-2xl sm:mx-auto lg:mx-0">
              Fast, reliable plumbing services for Burbank and surrounding Los Angeles County areas. Water heaters, leak detection, and emergency repairs available anytime.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-6">
              <a href="#booking" className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                <span className="mr-2">📅</span>
                Call Now
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#services" className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-700 bg-white rounded-xl hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto mt-4 sm:mt-0 border-2 border-slate-200 hover:border-blue-300 hover:text-blue-700 shadow-lg hover:shadow-xl">
                <span className="mr-2">🔧</span>
                View Services
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-100 pt-10">
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-blue-600 mb-3">{ICON_MAP.ShieldCheck}</div>
                <span className="text-sm font-bold text-slate-900">Licensed & Insured</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-blue-600 mb-3">{ICON_MAP.Clock}</div>
                <span className="text-sm font-bold text-slate-900">On-Time Arrival</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-blue-600 mb-3">{ICON_MAP.ThumbsUp}</div>
                <span className="text-sm font-bold text-slate-900">5-Star Rated</span>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-4 relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 transform lg:rotate-3">
              <img
                src="/hero-action.png"
                alt="West Coast Plumbing Expert at Work"
                className="w-full h-auto object-cover aspect-square object-top"
              />
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px] hidden xl:block -rotate-3">
              <div className="bg-green-100 text-green-700 text-xs font-bold uppercase rounded-md px-3 py-1 mb-3 inline-block">Verified Review</div>
              <p className="text-sm text-slate-600 italic leading-relaxed">"Fast response when my water heater failed. They were here within hours and had it running again."</p>
              <p className="text-xs font-bold mt-3 text-slate-900">— Mike R., Burbank</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
