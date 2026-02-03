import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-slate-950 scroll-mt-20">
      <div className="max-w-full px-4 sm:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-6xl font-black text-white mb-6 tracking-tight italic">Our Specialized <span className="text-blue-500">Services</span></h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-semibold">
            From emergency repairs to precision installations, we offer comprehensive plumbing solutions for your home or business.
          </p>
        </div>

        {/* Keeping the 2x5 Grid Layout as requested */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={`#service-${service.id}`}
              className="group bg-slate-900/50 p-5 md:p-8 rounded-3xl shadow-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 block backdrop-blur-sm"
            >
              <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-0 min-w-0 flex-1">
                <div className="bg-blue-600/10 w-8 h-8 md:w-16 md:h-16 rounded-lg md:rounded-2xl flex items-center justify-center text-blue-400 md:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                  {React.cloneElement(ICON_MAP[service.icon] as React.ReactElement<any>, { className: "w-4 h-4 md:w-8 md:h-8" })}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs md:text-xl font-bold text-white md:mb-3 leading-snug md:leading-tight tracking-tight italic break-normal md:break-words">{service.title}</h3>
                </div>
              </div>

              <p className="hidden md:block text-slate-400 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-slate-300 transition-colors">{service.description}</p>

              {/* Desktop Details */}
              <div className="mt-4 md:mt-6 text-blue-400 font-bold text-sm flex items-center gap-1 hidden md:flex">
                Details <span>→</span>
              </div>

              {/* Mobile Learn More */}
              <div className="mt-2 text-[10px] text-blue-400 font-bold md:hidden">
                Learn More →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
