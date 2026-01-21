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

  // Reset animation flag after transition
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
        className={`absolute transition-all duration-700 ease-out 
          ${position === 'left'
            ? 'opacity-0 md:opacity-40 blur-sm scale-90 -translate-x-[120%] md:-translate-x-full left-0 md:left-[25%]'
            : position === 'right'
              ? 'opacity-0 md:opacity-40 blur-sm scale-90 translate-x-[120%] md:translate-x-full left-0 md:left-[41%]'
              : 'opacity-100 scale-100 z-10 translate-x-0 left-[7.5%] md:left-[33%]'
          } w-[85%] md:w-[34%]`}
      >
        <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-left relative overflow-hidden group hover:shadow-xl transition-shadow mx-2 md:mx-4">
          <div className="absolute top-8 right-10 text-slate-100 text-6xl md:text-8xl leading-none font-serif select-none group-hover:text-blue-50 transition-colors">"</div>
          <div className="flex text-yellow-400 mb-4 md:mb-6 text-lg md:text-xl">
            {Array.from({ length: review.rating }).map((_, i) => <span key={i}>★</span>)}
          </div>
          <p className="text-slate-600 mb-6 md:mb-8 relative z-10 text-base md:text-lg leading-relaxed italic">{review.text}</p>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-white text-lg md:text-xl uppercase shadow-lg shadow-blue-200">
              {review.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-slate-900 text-base md:text-lg">{review.author}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-blue-50 to-indigo-50 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="max-w-full px-4 sm:px-10 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">We are honored to have won our consumers' trust.</h2>
        <div className="flex justify-center mb-16">
          <div className="flex text-yellow-400 text-2xl gap-1">
            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <span className="ml-4 font-bold text-slate-600 text-xl">4.9/5 Average Rating</span>
        </div>

        <div className="relative flex items-center justify-center max-w-6xl mx-auto" style={{ height: '500px' }}>
          {/* Left Arrow */}
          <button
            onClick={prevReview}
            disabled={isAnimating}
            className="absolute left-4 z-20 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>

          {/* Reviews Container */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {renderReview(getReviewIndex(-1), 'left')}
            {renderReview(getReviewIndex(0), 'center')}
            {renderReview(getReviewIndex(1), 'right')}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextReview}
            disabled={isAnimating}
            className="absolute right-4 z-20 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        {/* Review Indicators */}
        <div className="flex justify-center gap-2 mt-8">
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
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                } disabled:opacity-50`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
