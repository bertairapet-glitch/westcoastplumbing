
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-blue-50 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="max-w-full px-4 sm:px-10 lg:px-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Our Plumbing Services</h2>
          <p className="mt-6 text-xl text-slate-600">
            Professional plumbing services for Burbank and surrounding Los Angeles County areas. Emergency repairs, water heaters, and leak detection available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 group hover:-translate-y-2 hover:border-blue-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                <div className="group-hover:text-white transition-colors duration-300 text-blue-600 group-hover:scale-110 transform">
                  {ICON_MAP[service.icon]}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                {service.description}
              </p>
              <a href={`#service-${service.id}`} className="flex items-center text-blue-600 font-bold text-sm cursor-pointer hover:gap-2 transition-all group-hover:text-blue-700">
                <span className="bg-blue-50 group-hover:bg-blue-100 px-3 py-1 rounded-full transition-colors">Learn more</span>
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
