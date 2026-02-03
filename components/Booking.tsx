import React, { useState } from 'react';

export const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        console.error('❌ Web3Forms error:', result);
        alert(
          'There was an error sending your request. Please try again or call us directly at (714) 267-9974.'
        );
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      alert(
        'There was an error sending your request. Please try again or call us directly at (714) 267-9974.'
      );
    }

    setIsLoading(false);
  };

  return (
    <section id="booking" className="py-32 bg-slate-950 relative overflow-hidden scroll-mt-20">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[150px] animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left side content */}
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-black uppercase tracking-widest mb-8 border border-blue-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Dispatching Now in Burbank
            </div>
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Restore</span> Your Comfort?
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-xl font-medium">
              Start your booking here. Our concierge dispatch team will contact you within 15 minutes to confirm every detail.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-black text-white mb-1">15min</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Response Time</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white mb-1">24/7</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Availability</p>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="lg:w-1/2 w-full max-w-2xl">
            <div className="relative group">
              {/* Glow effect Backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-slate-900 border border-white/5 p-8 sm:p-12 rounded-[3rem] shadow-2xl">
                {submitted ? (
                  <div className="py-20 text-center animate-fade-in">
                    <div className="w-24 h-24 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4">Request Sent!</h3>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed">
                      Sit tight. We'll call you at the provided number within 15 minutes to confirm.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-12 bg-white/5 hover:bg-white/10 text-blue-400 font-bold px-8 py-4 rounded-2xl transition-all border border-blue-500/20"
                    >
                      Need another booking?
                    </button>
                  </div>
                ) : (
                  <form id="request-form" onSubmit={handleBooking} className="space-y-8">
                    <input type="hidden" name="access_key" value="3f732bd6-dd8a-4a53-b930-3915fa4aa9b6" />
                    <input type="hidden" name="subject" value="New Plumbing Booking Request" />
                    <input type="hidden" name="from_name" value="West Coast Plumbing Website" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Contact Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Your Name"
                          className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all text-white placeholder:text-slate-600 font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Live Phone</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="(555) 000-0000"
                          className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all text-white placeholder:text-slate-600 font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Select Service Category</label>
                      <div className="relative">
                        <select
                          name="service"
                          className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white font-medium appearance-none cursor-pointer"
                        >
                          <option>Emergency Repair</option>
                          <option>Drain Cleaning</option>
                          <option>Water Heater Service</option>
                          <option>General Maintenance</option>
                          <option>Commercial Plumbing</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Tell us what happened</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="e.g. Toilet is overflowing or water heater is leaking..."
                        className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-white placeholder:text-slate-600 font-medium resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black py-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-xl"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Response</span>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-slate-600 mt-4 leading-relaxed font-bold uppercase tracking-widest italic">
                      Secured Form • Priority Support Enabled • Burbank Dispatch Active
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
