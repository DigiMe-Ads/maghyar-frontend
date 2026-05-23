// src/components/home/About.jsx
// Assets needed in src/assets/:
//   about-team.jpg         — main team photo (woman with laptop)
//   about-logo-badge.png   — circular "Welcome to our website" badge with green logo
//   about-3d-swirl.png     — iridescent chrome swirl/shell (top right)
//   about-wire-fan.png     — wireframe fan shape (bottom left, optional)

import aboutTeam      from '../../assets/about-team.jpg';
import aboutBadge     from '../../assets/about-logo-badge.png';
import aboutSwirl     from '../../assets/about-3d-swirl.png';

// Placeholder avatar URLs — replace with real imports if you have them
const avatars = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=2',
  'https://i.pravatar.cc/40?img=3',
  'https://i.pravatar.cc/40?img=4',
];

export default function About() {
  return (
    <section
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-20 px-5 md:px-10 lg:px-56"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* ── Top row: label + heading + swirl ── */}
      <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">

        {/* Left: label + heading */}
        <div className="flex-1 max-w-3xl">
          <p className="text-[#6dbf67] text-xs font-semibold tracking-widest uppercase mb-5">
            + Who We Are
          </p>
          <h2
            className="text-white font-bold leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
          >
            We Are A Creative Design Agency Helping
            Brands Grow Through
            <span className="text-[#e8435a] italic font-bold"> Strategy, Design,
            And Innovation</span>
          </h2>
        </div>

        {/* Right: 3D swirl — absolute on large, inline on small */}
        <div
          className="hidden lg:block flex-shrink-0"
          style={{ width: 'clamp(120px, 12vw, 200px)', marginTop: '-20px' }}
        >
          <img src={aboutSwirl} alt="" className="w-full drop-shadow-2xl" style={{ animation: 'floatY 6s ease-in-out infinite' }} />
        </div>
      </div>

      {/* ── Middle row: image + stats ── */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">

        {/* Main photo — with badge overlay */}
        <div className="relative flex-1 rounded-2xl overflow-hidden" style={{ minHeight: '260px' }}>
          <img
            src={aboutTeam}
            alt="Team working"
            className="w-full h-full object-cover object-center"
            style={{ maxHeight: '360px' }}
          />
          {/* Circular rotating badge */}
          <div
            className="absolute bottom-5 right-5 w-28 h-28 rounded-full overflow-hidden shadow-2xl border-4 border-white/10"
            style={{ animation: 'spinSlow 12s linear infinite' }}
          >
            <img src={aboutBadge} alt="Welcome badge" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Stats panel — right of image */}
        <div className="flex flex-col justify-center gap-4 lg:w-52 flex-shrink-0">
          {/* 16 Years */}
          <div className="flex items-center gap-3">
            <span
              className="font-black text-[#e8435a] leading-none"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              16
            </span>
            <div className="flex flex-col">
              <span className="text-white/40 text-xs font-normal leading-tight" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.1em' }}>
                Year of experience
              </span>
            </div>
          </div>

          {/* Avatars + review count */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#0a0a0a] flex-shrink-0"
                  style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: avatars.length - i }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              {/* + button */}
              <div
                className="w-9 h-9 rounded-full bg-white/10 border-2 border-[#0a0a0a] flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold"
                style={{ marginLeft: '-10px' }}
              >
                +
              </div>
            </div>
            <p className="text-white/50 text-xs font-normal text-right leading-snug">
              More Then 25k Clients<br />Reviews
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom row: quote card + body text + CTA ── */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">

        {/* Quote card */}
        <div
          className="lg:w-2/3 w-full flex-shrink-0 rounded-2xl p-7 relative"
          style={{ background: '#161616' }}
        >
          {/* Large quotation marks */}
          <span
            className="text-[#6dbf67] font-black leading-none select-none"
            style={{ fontSize: '4rem', lineHeight: 1, display: 'block', marginBottom: '8px' }}
          >
            "
          </span>
          <p className="text-white/70 text-sm font-normal leading-relaxed">
            True progress is made not in isolation, but in partnership—with those who trust us,
            challenge us, and grow with us.
          </p>
        </div>

        {/* Right: body text + CTA */}
        <div className="lg:w-2/3 w-full flex flex-col justify-between gap-6 pt-2">
          <p className="text-white/40 text-sm font-normal leading-relaxed max-w-lg">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-7 py-3 rounded-full text-white text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
              style={{ background: '#e8435a', letterSpacing: '0.06em' }}
            >
              Discover More
            </a>
            <a
              href="#"
              aria-label="Next"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}