import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Clock, Star, Phone, ArrowRight, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageSrc, setImageSrc] = useState('/hero-action.png');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setImageSrc('/hero-desktop-original.png');
      } else {
        setImageSrc('/hero-action.png');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-0 lg:pt-48 lg:pb-40 bg-[#020617] overflow-hidden border-b-2 border-slate-800/50">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]"></div>
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-[1920px] mx-auto pl-4 sm:pl-12 lg:pl-[144px] pr-4 sm:pr-12 lg:pr-[96px] relative z-10">
        <div className="lg:flex lg:items-center lg:gap-32">
          {/* Content Left */}
          <div className="lg:w-[45%] text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 uppercase tracking-widest leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              24/7 Emergency Service Available
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              24/7 Emergency Plumbing <br />
              <span className="text-blue-500 italic">in Burbank, CA</span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
              Fast, reliable plumbing services for Burbank and surrounding Los Angeles County areas. Water heaters, leak detection, and emergency repairs available anytime.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 mb-20">
              <a
                href="#booking"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 text-xl font-bold rounded-2xl transition-all shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:scale-[1.03] active:scale-95"
              >
                <Calendar size={22} />
                Book Now →
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-10 py-5 text-xl font-bold rounded-2xl border border-white/10 transition-all hover:scale-[1.03] active:scale-95 backdrop-blur-sm"
              >
                View Services →
              </a>
            </div>

            {/* Features Row */}
            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <ShieldCheck size={20} />
                  <span className="text-xs font-bold text-slate-300">Licensed & Insured</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <Clock size={20} />
                  <span className="text-xs font-bold text-slate-300">On-Time Arrival</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <Star size={20} />
                  <span className="text-xs font-bold text-slate-300">5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Right */}
          <div ref={containerRef} className="lg:w-[55%] mt-24 lg:mt-0 relative flex justify-end -mx-4 lg:mx-0 lg:mb-0">
            <div
              className="relative scale-110 lg:transform lg:rotate-3 lg:scale-110 xl:scale-135 2xl:scale-150 origin-center lg:transition-transform lg:duration-75 lg:ease-out"
            >
              <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-2xl opacity-60 hidden lg:block"></div>

              <img
                src={imageSrc}
                alt="Modern Plumbing Excellence"
                className="relative rounded-none lg:rounded-[2rem] shadow-none lg:shadow-2xl w-full h-auto object-cover border-0 lg:border border-white/10"
              />

              {/* Verified Review Card - Middle Ground Size */}
              <div className="absolute -bottom-10 -left-10 bg-white shadow-lg p-3.5 rounded-2xl max-w-[180px] border border-slate-100 hidden xl:block transform -rotate-6 transition-transform hover:rotate-0 duration-500">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-2 text-[8.5px] font-black bg-emerald-50 text-emerald-600 rounded-lg uppercase tracking-widest border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Verified Review
                </div>
                <p className="text-[10.5px] text-slate-600 italic leading-snug font-semibold mb-3">
                  "Fast response when my water heater failed. They were here within hours and had it running again."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[9px]">MR</div>
                  <div className="text-[10.5px] font-bold text-slate-900">— Mike R., Burbank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
