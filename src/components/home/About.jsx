// src/components/home/About.jsx
// Assets needed in src/assets/:
//   about-team.jpg         — main team photo (woman with laptop)
//   about-logo-badge.png   — circular "Welcome to our website" badge with green logo
//   about-3d-swirl.png     — iridescent chrome swirl/shell (top right)

import aboutTeam  from '../../assets/about-team.jpg';
import aboutBadge from '../../assets/about-logo-badge.png';
import aboutSwirl from '../../assets/about-3d-swirl.png';

const avatars = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=2',
  'https://i.pravatar.cc/40?img=3',
  'https://i.pravatar.cc/40?img=4',
];

export default function About() {
  return (
    <section
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-14 sm:py-16 md:py-20 px-4 sm:px-10 md:px-16 lg:px-24"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* ── Top row: label + heading + swirl ── */}
      <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8 sm:mb-10">

        {/* Left: label + heading */}
        <div className="flex-1 max-w-3xl">
          {/* Label row — inline with heading on mobile too */}
          <div className="flex items-center gap-4 mb-4 sm:mb-5">
            <p className="text-[#6dbf67] text-[10px] sm:text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
              + Who We Are
            </p>
          </div>

          <h2
            className="text-white font-bold leading-tight"
            style={{ fontSize: 'clamp(1.45rem, 3.5vw, 2.75rem)' }}
          >
            We Are A Creative Design Agency Helping
            Brands Grow Through&nbsp;
            <span className="text-[#e8435a] italic font-bold">
              Strategy, Design,<br className="hidden sm:block" /> And Innovation
            </span>
          </h2>
        </div>

        {/* 3D swirl — absolute on large screens, hidden on small */}
        <div
          className="hidden lg:block flex-shrink-0 pointer-events-none"
          style={{ width: 'clamp(130px, 12vw, 200px)', marginTop: '-10px' }}
        >
          <img
            src={aboutSwirl}
            alt=""
            className="w-full drop-shadow-2xl"
            style={{ animation: 'floatY 6s ease-in-out infinite' }}
          />
        </div>
      </div>

      {/* ── Middle row: image + stats ── */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">

        {/* Main photo — with badge overlay */}
        <div
          className="relative flex-1 rounded-2xl overflow-hidden w-full"
          style={{ minHeight: '220px' }}
        >
          <img
            src={aboutTeam}
            alt="Team working"
            className="w-full h-full object-cover object-center"
            style={{ maxHeight: '360px', minHeight: '220px' }}
          />

          {/* Circular rotating badge — smaller on mobile */}
          <div
            className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 rounded-full overflow-hidden shadow-2xl border-4 border-white/10"
            style={{
              width: 'clamp(80px, 12vw, 112px)',
              height: 'clamp(80px, 12vw, 112px)',
              animation: 'spinSlow 12s linear infinite',
            }}
          >
            <img src={aboutBadge} alt="Welcome badge" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Stats panel */}
        <div className="flex flex-row lg:flex-col justify-between lg:justify-center gap-4 lg:gap-6 lg:w-52 flex-shrink-0 py-2 lg:py-0">

          {/* 16 Years */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span
              className="font-black text-[#e8435a] leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
            >
              16
            </span>
            <div className="flex flex-col">
              <span
                className="text-white/40 text-[10px] sm:text-xs font-normal leading-tight"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  letterSpacing: '0.1em',
                }}
              >
                Year of experience
              </span>
            </div>
          </div>

          {/* Avatars + review count */}
          <div className="flex flex-col gap-2 items-end lg:items-start">
            <div className="flex items-center">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#0a0a0a] flex-shrink-0"
                  style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: avatars.length - i }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              <div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border-2 border-[#0a0a0a] flex items-center justify-center flex-shrink-0 text-white text-xs sm:text-sm font-semibold"
                style={{ marginLeft: '-10px' }}
              >
                +
              </div>
            </div>
            <p className="text-white/50 text-[11px] sm:text-xs font-normal text-right leading-snug">
              More Then 25k Clients<br />Reviews
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom row: quote card + body text + CTA ── */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-start">

        {/* Quote card */}
        <div
          className="w-full lg:w-[55%] flex-shrink-0 rounded-2xl p-5 sm:p-7 relative"
          style={{ background: '#161616' }}
        >
          {/* Large green double-quote marks */}
          <span
            className="text-[#6dbf67] font-black leading-none select-none block mb-1 sm:mb-2"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', lineHeight: 1 }}
          >
            "
          </span>
          <p className="text-white/70 text-sm font-normal leading-relaxed">
            True progress is made not in isolation, but in partnership—with those who trust us,
            challenge us, and grow with us.
          </p>
        </div>

        {/* Right: body text + CTA */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between gap-5 sm:gap-6 pt-0 lg:pt-2">
          <p className="text-white/40 text-sm font-normal leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-white text-xs sm:text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
              style={{ background: '#e8435a', letterSpacing: '0.06em' }}
            >
              Discover More
            </a>
            <a
              href="#"
              aria-label="Next"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-colors flex-shrink-0"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Responsive layout tweaks below md */
        @media (max-width: 640px) {
          /* Stack stats vertically under the image on very small screens */
          .stats-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}