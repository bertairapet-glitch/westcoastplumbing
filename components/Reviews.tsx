import React, { useState, useEffect } from 'react';
import { REVIEWS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextReview = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
    }
  };

  const prevReview = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + REVIEWS.length) % REVIEWS.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getReviewIndex = (offset: number) => {
    return (currentIndex + offset + REVIEWS.length) % REVIEWS.length;
  };

  const renderReview = (reviewIndex: number, position: 'left' | 'center' | 'right') => {
    const review = REVIEWS[reviewIndex];

    return (
      <div
        key={review.id}
        className={`absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
          ${position === 'left'
            ? 'opacity-0 md:opacity-20 blur-md scale-90 -translate-x-[120%] md:-translate-x-full left-0 md:left-[25%]'
            : position === 'right'
              ? 'opacity-0 md:opacity-20 blur-md scale-90 translate-x-[120%] md:translate-x-full left-0 md:left-[41%]'
              : 'opacity-100 scale-100 z-10 translate-x-0 left-[7.5%] md:left-[33%]'
          } w-[85%] md:w-[34%]`}
      >
        <div className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10 text-left relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 mx-2 md:mx-4 shadow-2xl">
          <div className="absolute -top-10 -right-4 text-blue-500/5 text-[12rem] leading-none font-serif select-none pointer-events-none group-hover:text-blue-500/10 transition-colors">"</div>
          <div className="flex text-blue-400 mb-6 text-xl">
            {Array.from({ length: review.rating }).map((_, i) => <span key={i} className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">★</span>)}
          </div>
          <p className="text-slate-300 mb-10 relative z-10 text-lg md:text-xl leading-relaxed italic font-medium tracking-tight">"{review.text}"</p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-black text-white text-xl uppercase shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              {review.author.charAt(0)}
            </div>
            <div>
              <p className="font-black text-white text-lg tracking-tight">{review.author}</p>
              <p className="text-blue-400 text-xs font-black uppercase tracking-[0.2em]">Verified Client</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="reviews" className="py-32 bg-slate-950 scroll-mt-20 relative overflow-hidden">
      {/* Immersive Background Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-float opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[150px] animate-float-reversed opacity-50"></div>

      <div className="max-w-full px-4 sm:px-10 lg:px-20 text-center relative z-10">
        <h2 className="text-4xl sm:text-7xl font-black text-white mb-8 tracking-tighter">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Neighbors</span> Say
        </h2>
        <div className="flex items-center justify-center mb-20 gap-4">
          <div className="flex text-blue-400 text-3xl gap-1 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <div className="h-8 w-px bg-white/20 mx-2"></div>
          <span className="font-black text-slate-400 text-xl tracking-tight leading-none uppercase">4.9/5 Rating</span>
        </div>

        <div className="relative flex items-center justify-center max-w-6xl mx-auto" style={{ height: '550px' }}>
          {/* Controls */}
          <button
            onClick={prevReview}
            disabled={isAnimating}
            className="absolute left-0 z-20 p-3 md:p-5 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300 border border-white/10 disabled:opacity-20 group"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Reviews Container */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {renderReview(getReviewIndex(-1), 'left')}
            {renderReview(getReviewIndex(0), 'center')}
            {renderReview(getReviewIndex(1), 'right')}
          </div>

          <button
            onClick={nextReview}
            disabled={isAnimating}
            className="absolute right-0 z-20 p-3 md:p-5 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300 border border-white/10 disabled:opacity-20 group"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
              disabled={isAnimating}
              className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-12 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'w-3 bg-white/10 hover:bg-white/20'
                } disabled:opacity-50`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
