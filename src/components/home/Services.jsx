// src/components/home/Services.jsx
import { useState } from 'react';
import servicesTeam   from '../../assets/services-team.jpg';
import servicesAvatar from '../../assets/avatar.jpg';

const services = [
  {
    id: '01',
    label: 'Website Development',
    description: 'Modern, responsive, and high-performance websites tailored to your business objectives — built mobile-first with SEO-optimized structure and fast loading performance.',
    solutions: ['Corporate websites', 'Landing & campaign pages', 'E-commerce platforms', 'Custom web applications'],
  },
  {
    id: '02',
    label: 'UI/UX Design',
    description: 'Intuitive, conversion-focused interfaces designed around your users. We craft experiences that are both visually compelling and functionally seamless.',
    solutions: ['User research & wireframing', 'Responsive UI design', 'Prototype & usability testing', 'Design systems'],
  },
  {
    id: '03',
    label: 'Mobile App Development',
    description: 'Scalable mobile applications for iOS and Android, built to perform and grow with your business across the European market.',
    solutions: ['iOS & Android apps', 'Cross-platform development', 'App store deployment', 'Ongoing maintenance'],
  },
  {
    id: '04',
    label: 'Social Media Management',
    description: 'Strategic content and community management that builds brand authority and drives consistent engagement with your target audience.',
    solutions: ['Content strategy & creation', 'Platform management', 'Paid social campaigns', 'Analytics & reporting'],
  },
  {
    id: '05',
    label: 'Identity Design',
    description: 'Distinctive brand identities that communicate your values clearly and leave a lasting impression across every digital and physical touchpoint.',
    solutions: ['Logo & visual identity', 'Brand guidelines', 'Marketing collateral', 'Brand strategy'],
  },
];

const stats = [
  { value: '22K',  label: 'Projects Completed' },
  { value: '612K', label: 'Clients Served' },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section
      className="relative w-full bg-[#0a0a0a]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ════════════════════════════════════════
          CARD 1 — dark services card
      ════════════════════════════════════════ */}
      <div
        className="relative z-10 mx-3 sm:mx-6 md:mx-8 lg:mx-12 rounded-3xl bg-[#111] py-10 sm:py-14 px-5 sm:px-8 md:px-12"
        style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.7)' }}
      >
        {/* Section label + heading */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[#6dbf67] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            + Our Services
          </p>
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3.8vw, 2.8rem)' }}
          >
            Helping You Succeed Through{' '}
            <span className="text-white/20 font-normal italic">Digital Excellence</span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

          {/* Left: service list */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full lg:w-72 xl:w-80 flex-shrink-0">
            {services.map((svc, i) => {
              const isActive = active === i;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActive(i)}
                  className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 rounded-2xl text-left transition-all duration-300"
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
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-3"
                    style={{ background: isActive ? '#000' : 'transparent' }}
                  >
                    <svg
                      width="11" height="11" viewBox="0 0 24 24" fill="none"
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

          {/* Right: image + dynamic content */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-5 w-full">

            {/* Team image */}
            <div className="rounded-2xl overflow-hidden w-full">
              <img
                src={servicesTeam}
                alt="Team working"
                className="w-full object-cover object-center"
                style={{ height: 'clamp(160px, 26vw, 260px)' }}
              />
            </div>

            {/* Avatar + dynamic description */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                <img src={servicesAvatar} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 pt-1">
                {/* Active service description */}
                <p className="text-white/40 text-xs sm:text-sm font-normal leading-relaxed mb-3">
                  {current.description}
                </p>

                {/* Solutions pills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {current.solutions.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: 'rgba(232,67,90,0.12)',
                        color: 'rgba(232,67,90,0.85)',
                        border: '1px solid rgba(232,67,90,0.2)',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <button className="flex items-center gap-2 group">
                  <span className="text-white/60 text-[10px] sm:text-xs font-semibold tracking-widest uppercase group-hover:text-white transition-colors">
                    Learn More
                  </span>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#e8435a] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

      {/* ════════════════════════════════════════
          CARD 2 — red stats card (stacked beneath)
      ════════════════════════════════════════ */}
      <div
        className="relative z-0 mx-3 sm:mx-6 md:mx-8 lg:mx-12 rounded-3xl overflow-hidden"
        style={{
          background: '#e8435a',
          marginTop: '-2rem',
          paddingTop: '4rem',
        }}
      >
        {/* X pattern overlay */}
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

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-6 px-5 sm:px-8 md:px-12 pb-10 sm:pb-12">

          {/* Left: CTA */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full sm:max-w-xs">
            <h3
              className="text-white font-bold leading-snug"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.4rem)' }}
            >
              Ready to Build Your Digital Presence Across Europe?
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="px-5 py-2 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase hover:bg-white hover:text-black transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="#"
                aria-label="Arrow"
                className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center w-full sm:w-auto divide-x divide-white/20">
            {stats.map((s) => (
              <div
                key={s.value}
                className="flex flex-col items-center flex-1 sm:flex-initial px-6 sm:px-10 md:px-14 first:pl-0 sm:first:pl-10"
              >
                <span
                  className="font-black text-black leading-none"
                  style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
                >
                  {s.value}
                </span>
                <span className="text-black/60 text-xs sm:text-sm font-normal mt-1 text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}