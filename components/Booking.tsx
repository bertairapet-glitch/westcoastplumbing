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
    <section id="booking" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-full px-4 sm:px-10 lg:px-20">
        <div className="bg-blue-600 rounded-[3.5rem] p-10 md:p-20 flex flex-col lg:flex-row gap-20 items-center shadow-2xl shadow-blue-100">
          {/* Left side content */}
          <div className="lg:w-1/2 text-white">
            <h2 className="text-5xl font-extrabold mb-10 leading-tight">
              Ready to fix your plumbing?
            </h2>
            <p className="text-blue-100 text-xl mb-12 leading-relaxed max-w-xl">
              Schedule you appointment by filling out some basic information and our dispatch team will call to confirm within 15 minutes.
            </p>
          </div>

          {/* Right side form */}
          <div className="lg:w-1/2 w-full max-w-2xl">
            {submitted ? (
              <div className="bg-white p-16 rounded-[2.5rem] text-center shadow-inner">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl font-bold">
                  ✓
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
                <p className="text-slate-600 text-lg">
                  Check your phone. We'll call you at the provided number within 15 minutes to confirm details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-blue-600 font-bold text-lg hover:underline"
                >
                  Need another booking?
                </button>
              </div>
            ) : (
              <form id="request-form" onSubmit={handleBooking} className="bg-white p-10 sm:p-12 rounded-[2.5rem] shadow-2xl">
                <input type="hidden" name="access_key" value="3f732bd6-dd8a-4a53-b930-3915fa4aa9b6" />
                <input type="hidden" name="subject" value="New Plumbing Booking Request" />
                <input type="hidden" name="from_name" value="West Coast Plumbing Website" />
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg appearance-none cursor-pointer"
                    >
                      <option>Emergency Repair</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater Service</option>
                      <option>General Maintenance</option>
                      <option>Commercial Plumbing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">
                      Brief Description
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us a little about the issue..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 active:translate-y-0 text-xl tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      'Request Fast Response'
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-6 leading-relaxed">
                    By requesting a callback, you agree to our standard terms and privacy policies regarding service dispatch.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
