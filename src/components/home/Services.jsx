// src/components/home/Services.jsx
import { useState } from 'react';
import servicesTeam   from '../../assets/services-team.jpg';

const services = [
  {
    id: '01',
    label: 'Fully Responsive',
    description: 'Every site we build starts from mobile and scales up — ensuring a seamless, consistent experience across all screen sizes, from smartphones to large desktops.',
    solutions: ['Fluid grid layouts', 'Touch-friendly interfaces', 'Cross-device testing', 'Adaptive breakpoints'],
  },
  {
    id: '02',
    label: 'SEO-Optimized Structure',
    description: 'We build with search engines in mind from day one — clean semantic markup, structured data, and a site architecture that makes it easy for Google to crawl and rank your content.',
    solutions: ['Semantic HTML5 markup', 'Meta & schema setup', 'Sitemap & robots.txt', 'Core Web Vitals focus'],
  },
  {
    id: '03',
    label: 'Fast Loading Performance',
    description: 'Speed is a feature. We optimize every layer — from compressed assets and lazy loading to CDN integration — so your site loads fast and keeps users engaged.',
    solutions: ['Image & asset optimization', 'Code splitting & minification', 'CDN integration', 'Lighthouse score tuning'],
  },
  {
    id: '04',
    label: 'GDPR-Compliant',
    description: 'Data privacy is built into every project, not bolted on. We implement cookie consent, secure data handling, and privacy-first practices that keep your site compliant from launch.',
    solutions: ['Cookie consent management', 'Privacy policy integration', 'Secure data handling', 'GDPR audit & compliance'],
  },
];

const stats = [
  { value: '100+',  label: 'Projects Completed' },
  { value: '250+', label: 'Clients Served' },
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
          <p className="text-[#e01b45] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
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

            {/* Dynamic description + solutions */}
            <div>
              <p className="text-white/40 text-xs sm:text-sm font-normal leading-relaxed mb-3">
                {current.description}
              </p>

              {/* Solutions pills */}
              <div className="flex flex-wrap gap-2">
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