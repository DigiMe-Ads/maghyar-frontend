import { useEffect, useRef } from 'react';

import heroBg   from '../../assets/hero-bg.png';
import flower3d from '../../assets/3d-flower.png';
import cubes3d  from '../../assets/3d-cubes.png';
import photo1   from '../../assets/photo-1.jpg';
import photo2   from '../../assets/photo-2.jpg';
import avatar   from '../../assets/avatar.jpg';

function useParallax(ref, strength = 0.015) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [ref, strength]);
}

export default function Hero() {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  useParallax(p1Ref, 0.018);
  useParallax(p2Ref, 0.014);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/75" />
      </div>

      {/* ── Main layout: flex column fills full height ── */}
      <div className="relative z-10 flex flex-col flex-1 min-h-screen">

        {/* Spacer for navbar */}
        <div className="h-20 flex-shrink-0" />

        {/* ── Headline block — centered, takes natural space ── */}
        <div className="relative flex-shrink-0 text-center px-4">
          <h1
            className="font-black text-white leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(3.8rem, 14.5vw, 13.5rem)' }}
          >
            <span className="block">MAGYAR</span>
            <span className="block">DIGITAL</span>
          </h1>

          {/* Photo card 1 — overlaps headline, z-20 */}
          <div
            ref={p1Ref}
            className="hidden sm:block absolute z-20 transition-transform duration-75 ease-out"
            style={{
              left: '28%',
              top: '5%',
              width: 'clamp(105px, 14vw, 155px)',
              animation: 'bounceFloat 5s ease-in-out infinite',
            }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ transform: 'rotate(-7deg)', border: '3px solid rgba(255,255,255,0.12)' }}
            >
              <img src={photo1} alt="Team collaboration" className="w-full h-auto block object-cover" />
            </div>
          </div>

          {/* Photo card 2 — overlaps headline, z-20 */}
          <div
            ref={p2Ref}
            className="hidden sm:block absolute z-20 transition-transform duration-75 ease-out"
            style={{
              right: '4%',
              top: '0%',
              width: 'clamp(105px, 14vw, 155px)',
              animation: 'tiltFloat 7s ease-in-out infinite 1s',
            }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ transform: 'rotate(9deg)', border: '3px solid rgba(255,255,255,0.12)' }}
            >
              <img src={photo2} alt="Team working" className="w-full h-auto block object-cover" />
            </div>
          </div>

          {/* 3D Flower — left of headline, z-20 */}
          <div
            className="hidden sm:block absolute z-20"
            style={{
              left: '1%',
              top: '20%',
              width: 'clamp(90px, 9vw, 155px)',
              animation: 'floatY 6s ease-in-out infinite',
            }}
          >
            <img src={flower3d} alt="" className="w-full drop-shadow-2xl" />
          </div>
        </div>

        {/* ── 3D Cubes — sits between headline and bottom row ── */}
        <div className="hidden sm:flex relative flex-shrink-0 justify-center" style={{ height: '120px' }}>
          <div
            className="absolute z-20"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              top: '-10px',
              width: 'clamp(90px, 9vw, 145px)',
              animation: 'floatY 5s ease-in-out infinite 0.6s',
            }}
          >
            <img src={cubes3d} alt="" className="w-full drop-shadow-2xl" />
          </div>
        </div>

        {/* Spacer pushes bottom row to bottom */}
        <div className="flex-1" />

        {/* ── Bottom info row — always at bottom, never overlapped ── */}
        <div className="relative z-30 flex-shrink-0 px-8 md:px-14 pb-10">
          {/* Thin top divider */}
          <div className="w-full h-px bg-white/10 mb-8" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

            {/* Left: description + avatar */}
            <div style={{ maxWidth: '380px' }}>
              <p className="text-white/50 text-sm font-normal leading-relaxed mb-5">
                We help businesses transform ideas into powerful digital solutions.
                Let's discuss your project today.
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/15 flex-shrink-0">
                  <img src={avatar} alt="Qmanda Lee" className="w-full h-full object-cover" />
                </div>

                {/* Signature + name */}
                <div className="flex flex-col">
                  <svg viewBox="0 0 120 32" className="w-28 h-8 mb-1" fill="none">
                    <path
                      d="M4 24 C12 8, 22 4, 32 18 C42 30, 50 10, 62 16 C72 22, 80 8, 92 14 C102 20, 110 10, 118 16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      opacity="0.6"
                    />
                  </svg>
                  <span className="text-white text-sm font-medium leading-tight">Qmanda Lee</span>
                  <span className="text-[#e8435a] text-xs font-normal leading-tight">CTO, Edigitaal Solutions</span>
                </div>
              </div>
            </div>

            {/* Right: 130+ stat + CTA */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex items-center gap-4">
                <span
                  className="font-black text-white"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}
                >
                  130+
                </span>
                <span className="text-white/50 text-sm font-normal leading-snug">
                  Expanding Impact in<br />25 Countries
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="px-7 py-3 rounded-full text-white text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
                  style={{ background: '#e8435a', letterSpacing: '0.06em' }}
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#"
                  aria-label="Next"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/25 hover:border-white/50 transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes bounceFloat {
          0%, 100% { transform: translateY(0px) rotate(-7deg); }
          50%       { transform: translateY(-20px) rotate(-4deg); }
        }
        @keyframes tiltFloat {
          0%, 100% { transform: translateY(0px) rotate(9deg); }
          50%       { transform: translateY(-15px) rotate(6deg); }
        }
      `}</style>
    </section>
  );
}