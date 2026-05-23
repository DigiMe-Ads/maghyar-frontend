// src/components/home/Services.jsx
// Assets needed in src/assets/:
//   services-team.jpg    — team working at screen (right panel image)
//   services-avatar.jpg  — small circular avatar below the image

import { useState } from 'react';
import servicesTeam   from '../../assets/services-team.jpg';
import servicesAvatar from '../../assets/avatar.jpg';

const services = [
  { id: '01', label: 'Web Designing' },
  { id: '02', label: 'Product Design' },
  { id: '03', label: 'Motion Graphics' },
  { id: '04', label: 'Identity Design' },
  { id: '05', label: 'UI/UX Design' },
];

const stats = [
  { value: '22K', label: 'Projects Completed' },
  { value: '612K', label: 'Visited conference' },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative w-full bg-[#0a0a0a] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Main dark card ── */}
      <div className="mx-4 md:mx-8 lg:mx-12 rounded-3xl overflow-hidden bg-[#111] py-16 px-10 md:px-22 mb-0">

        {/* Section label + heading */}
        <div className="text-center mb-12">
          <p className="text-[#6dbf67] text-xs font-semibold tracking-widest uppercase mb-4">
            + Our Service
          </p>
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Helping You Succeed Through{' '}
            <span className="text-white/20 font-normal">Creative</span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left: service accordion list */}
          <div className="flex flex-col gap-3 lg:w-80 flex-shrink-0 w-full">
            {services.map((svc, i) => {
              const isActive = active === i;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActive(i)}
                  className="w-full flex items-center justify-between px-5 py-4 rounded-2xl text-left transition-all duration-300"
                  style={{
                    background: isActive ? '#e8435a' : 'rgba(255,255,255,0.05)',
                    border: isActive ? 'none' : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span
                    className="text-sm font-medium tracking-wide"
                    style={{
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {svc.id}.{svc.label}
                  </span>
                  {/* Arrow icon */}
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-3"
                    style={{ background: isActive ? '#000' : 'transparent' }}
                  >
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke={isActive ? '#fff' : 'rgba(255,255,255,0.4)'}
                      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <line x1="5" y1="19" x2="19" y2="5" />
                      <polyline points="5 5 19 5 19 19" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: image + description */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Team image */}
            <div className="rounded-2xl overflow-hidden w-full" style={{ maxHeight: '280px' }}>
              <img
                src={servicesTeam}
                alt="Team working"
                className="w-full h-full object-cover object-center"
                style={{ minHeight: '200px', maxHeight: '280px' }}
              />
            </div>

            {/* Avatar + description + read more */}
            <div className="flex items-start gap-4">
              {/* Circular avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                <img src={servicesAvatar} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1">
                <p className="text-white/40 text-sm font-normal leading-relaxed mb-3">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its using Ipsum
                  is that it has a more-or-less normal.
                </p>
                <button className="flex items-center gap-2 group">
                  <span className="text-white/60 text-xs font-semibold tracking-widest uppercase group-hover:text-white transition-colors">
                    Read More
                  </span>
                  <span className="w-5 h-5 rounded-full bg-[#e8435a] flex items-center justify-center">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats banner — pink/red ── */}
      <div
        className="relative mx-4 md:mx-8 lg:mx-12 rounded-3xl overflow-hidden mt-0"
        style={{ background: '#e8435a' }}
      >
        {/* Subtle X pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="xpat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="60" y2="60" stroke="white" strokeWidth="1" />
                <line x1="60" y1="0" x2="0" y2="60" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#xpat)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 md:px-12 py-12">

          {/* Left: CTA text + button */}
          <div className="flex flex-col gap-5 max-w-xs">
            <h3
              className="text-white font-bold leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}
            >
              Ready to Transform Your Brand with Creative Design Solutions?
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold tracking-wider uppercase hover:bg-white hover:text-black transition-colors"
              >
                Read More
              </a>
              <a
                href="#"
                aria-label="Arrow"
                className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-0 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.value} className="flex flex-col items-center px-10 md:px-16">
                <span
                  className="font-black text-black leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
                >
                  {s.value}
                </span>
                <span className="text-black/60 text-sm font-normal mt-1">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}