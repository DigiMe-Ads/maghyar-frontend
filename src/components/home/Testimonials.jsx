import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'David Smith',
    role: 'CEO, Edigital',
    avatar: 'https://i.pravatar.cc/80?img=12',
    text: "Our systems were outdated and slowing us down. Their team came in with a clear roadmap, modernized our infrastructure and provided ongoing support that's second to none that a reader will be distracted",
  },
  {
    name: 'Sarah Johnson',
    role: 'CMO, BrandLab',
    avatar: 'https://i.pravatar.cc/80?img=5',
    text: "The design work they delivered completely transformed how our customers perceive our brand. Attention to detail, creativity, and dedication were all exceptional throughout the entire engagement.",
  },
  {
    name: 'Marcus Lee',
    role: 'Founder, LaunchPad',
    avatar: 'https://i.pravatar.cc/80?img=9',
    text: "From strategy to execution their team was incredible. They understood our vision immediately and built something we're genuinely proud to show our clients every single day.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent(prev => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-4 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Header ── */}
      <div className="text-center mb-12">
        <p className="flex items-center justify-center gap-1 text-[#6dbf67] text-xs font-bold tracking-widest uppercase mb-4">
          <span className="font-extrabold">+</span>TESTIMONIAL
        </p>
        <h2 className="leading-tight" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)' }}>
          <span className="text-white font-bold">What Clients Say </span>
          <span className="text-[#e8435a] italic font-bold">About U</span>
          <span className="italic font-normal" style={{ color: 'rgba(232,67,90,0.18)' }}>s</span>
        </h2>
      </div>

      {/* ── Card deck ── */}
      <div className="relative mx-auto" style={{ maxWidth: 680, minHeight: 300 }}>
        {testimonials.map((t, i) => {
          const isActive = i === current;
          return (
            <div
              key={t.name}
              className="absolute inset-0 flex flex-col items-center text-center"
              style={{
                zIndex: isActive ? 20 : 5,
                pointerEvents: isActive ? 'auto' : 'none',
                // Active: full size, centred
                // Inactive: shrunk and slightly sunk — gives the "rear of deck" look
                transform: isActive
                  ? 'scale(1) translateY(0px)'
                  : 'scale(0.88) translateY(18px)',
                opacity: isActive ? 1 : 0,
                // Transform completes in 480 ms; opacity on exit lags 80 ms so the
                // card is briefly visible while shrinking (the "deck shuffle" moment).
                transition: isActive
                  ? 'transform 480ms cubic-bezier(0.34,1.2,0.64,1), opacity 320ms ease'
                  : 'transform 480ms cubic-bezier(0.4,0,0.2,1), opacity 340ms 80ms ease',
              }}
            >
              {/* Closing-quote icon */}
              <div
                className="mb-5 select-none"
                style={{
                  fontSize: '4.5rem',
                  lineHeight: 1,
                  color: '#e8435a',
                  fontFamily: 'Georgia, serif',
                  marginTop: '-0.5rem',
                }}
              >
                &rdquo;
              </div>

              {/* Author */}
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-white font-bold text-sm">{t.name}</span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{t.role}</span>
              </div>

              {/* Quote text */}
              <p
                className="leading-relaxed"
                style={{
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.12rem)',
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: 580,
                }}
              >
                {t.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* ── Avatar selector ── */}
      <div className="flex items-center justify-center gap-4 mt-12">
        {testimonials.map((t, i) => {
          const isActive = i === current;
          return (
            <button
              key={t.name}
              onClick={() => setCurrent(i)}
              aria-label={`View testimonial from ${t.name}`}
              className="rounded-full overflow-hidden flex-shrink-0 transition-all duration-400"
              style={{
                width: isActive ? 62 : 48,
                height: isActive ? 62 : 48,
                border: isActive
                  ? '2px solid #e8435a'
                  : '2px solid rgba(255,255,255,0.12)',
                opacity: isActive ? 1 : 0.5,
                transition: 'width 300ms ease, height 300ms ease, border-color 300ms ease, opacity 300ms ease',
              }}
            >
              <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
