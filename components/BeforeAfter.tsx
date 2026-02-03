import React, { useState, useRef, useEffect } from 'react';

const ComparisonSlider: React.FC<{ before: string; after: string; title: string }> = ({ before, after, title }) => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const position = ((x - rect.left) / rect.width) * 100;

        setSliderPos(Math.min(Math.max(position, 0), 100));
    };

    useEffect(() => {
        const up = () => setIsDragging(false);
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('mouseup', up);
        window.addEventListener('touchend', up);
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('mouseup', up);
            window.removeEventListener('touchend', up);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[200px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 group cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
        >
            {/* After Image (Background) */}
            <img
                src={after}
                alt={`${title} - After`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Before Image (Overlay) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
            >
                <img
                    src={before}
                    alt={`${title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none' }}
                />
            </div>

            {/* Slider Line */}
            <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] pointer-events-none z-20"
                style={{ left: `${sliderPos}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-600">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 7l-4 4m0 0l4 4m-4-4h16m0 0l-4-4m4 4l-4 4" />
                    </svg>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-1.5 md:bottom-4 left-1.5 md:left-4 bg-black/40 backdrop-blur-md text-white px-1.5 md:px-3 py-0.5 md:py-1 rounded-md md:rounded-lg text-[8px] md:text-xs font-bold uppercase tracking-widest z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                Before
            </div>
            <div className="absolute bottom-1.5 md:bottom-4 right-1.5 md:right-4 bg-blue-600/60 backdrop-blur-md text-white px-1.5 md:px-3 py-0.5 md:py-1 rounded-md md:rounded-lg text-[8px] md:text-xs font-bold uppercase tracking-widest z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                After
            </div>
        </div>
    );
};

export const BeforeAfter: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'Full Bathroom Remodel',
            before: '/images/projects/bathroom-before.jpg',
            after: '/images/projects/bathroom-after.jpg',
            description: 'Complete shower and tub restoration with custom tile work and modern plumbing.'
        },
        {
            id: 2,
            title: 'Modern Vanity Remodel',
            before: '/images/projects/bathroom-vanity-before.jpg',
            after: '/images/projects/bathroom-vanity-after.jpg',
            description: 'Full bathroom transformation featuring a luxury double vanity, marble countertops, and hexagonal tile flooring.'
        },
        {
            id: 3,
            title: 'Tankless Water Heater Installation',
            before: '/images/projects/water-heater-before.jpg',
            after: '/images/projects/water-heater-after.jpg',
            description: 'Modern tankless water heater upgrade for endless hot water and improved energy efficiency.'
        },
        {
            id: 4,
            title: 'Shower Handle Replacement',
            before: '/images/projects/shower-handle-before.jpg',
            after: '/images/projects/shower-handle-after.jpg',
            description: 'Outdated three-handle system converted to a modern, single-handle pressure-balanced valve.'
        }
    ];

    return (
        <section id="photos" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-20">
            {/* Immersive Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-32 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
                        Witness the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Transformation</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                        Slide to see how we turn plumbing problems into professional results you can see.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-16">
                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-500">
                            <ComparisonSlider
                                before={project.before}
                                after={project.after}
                                title={project.title}
                            />
                            <div className="px-2">
                                <h3 className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-2 flex items-center gap-2 md:gap-3 leading-snug">
                                    <span className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-[10px] md:text-sm font-black border border-blue-600/30 shrink-0">
                                        {project.id}
                                    </span>
                                    <span className="md:truncate break-words">{project.title}</span>
                                </h3>
                                <p className="hidden md:block text-slate-400 leading-relaxed font-medium">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center hidden lg:block">
                    <div className="inline-block p-[2px] rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-xy">
                        <div className="bg-slate-900 rounded-[2.4rem] px-12 py-10 border border-white/5">
                            <h3 className="text-3xl font-extrabold text-white mb-4">
                                Ready for Your Own Results?
                            </h3>
                            <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto">
                                Don't wait for a disaster. Upgrade your home's plumbing today with our expert team.
                            </p>
                            <a
                                href="tel:7142679974"
                                className="inline-flex items-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-white/10 shadow-2xl hover:bg-blue-50"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                (714) 267-9974
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
