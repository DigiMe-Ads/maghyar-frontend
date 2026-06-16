import { useRef } from 'react';
import featuresWire from '../../assets/features-wire.png';
import photo1        from '../../assets/case-phone.jpg';
import aboutTeam    from '../../assets/case-mockup.jpg';
import servicesTeam from '../../assets/about-team.jpg';
import extraImg     from '../../assets/photo-2.jpg';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

const carouselImages = [photo1, aboutTeam, servicesTeam, extraImg];

export default function WhyChooseUs() {
  const trackRef = useRef(null);
  const { lang } = useLanguage();
  const t = translations[lang].whyChooseUs;

  return (
    <section
      className="relative h-full w-full bg-[#0a0a0a] py-20 px-4 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <div
        className="relative max-w-6xl mx-auto rounded-3xl p-8 md:p-10"
        style={{
          zIndex: 2,
          border: '1px solid rgba(190,190,200,0.14)',
          background: 'rgba(255,255,255,0.02)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset',
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-stretch relative">

          {/* ── Left: Rolling Carousel ── */}
          <div className="hidden lg:block flex-shrink-0 overflow-hidden rounded-2xl" style={{ width: 220, height: 820 }}>
            <div
              ref={trackRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                animation: 'scrollUpWCU 14s linear infinite',
              }}
            >
              {[...carouselImages, ...carouselImages].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden flex-shrink-0" style={{ width: 220, height: 140 }}>
                  <img src={src} alt="" className="w-full h-full object-cover object-center" />
                </div>
              ))}
            </div>
            <style>{`
              @keyframes scrollUpWCU {
                0%   { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
            `}</style>
          </div>

          {/* ── Right: content ── */}
          <div className="flex-1 flex flex-col justify-center relative">

            {/* Label */}
            <p className="text-xs font-bold tracking-widest uppercase mb-5 flex items-center gap-1" style={{ color: '#e8435a' }}>
              <span style={{ color: '#e8435a', fontWeight: 800, fontSize: 14 }}>+</span>
              {t.label.replace('+ ', '')}
            </p>

            {/* Heading */}
            <h2
              className="leading-tight mb-8 relative font-extrabold text-white"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', zIndex: 2 }}
            >
              {lang === 'en' ? (
                <>
                  {t.headlinePrefix}{' '}
                  <span style={{ color: '#e8435a', fontStyle: 'italic' }}>E</span>
                  <span style={{ color: '#e8435a', fontStyle: 'italic', fontWeight: 400 }}>xpertise</span>
                </>
              ) : (
                <>
                  {t.headlinePrefix}{' '}
                  <span style={{ color: '#e8435a', fontStyle: 'italic' }}>a márkák</span>
                </>
              )}
            </h2>

            {/* Feature cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative" style={{ zIndex: 2 }}>
              {/* Wire globe behind cards */}
              <div className="hidden md:block pointer-events-none absolute -bottom-16 -right-20 opacity-90" style={{ width: 720, zIndex: 0 }}>
                <img src={featuresWire} alt="" className="w-full" />
              </div>
              {t.features.map((f) => (
                <div
                  key={f.id}
                  className={`rounded-2xl p-5 flex flex-col gap-1 relative overflow-hidden${f.full ? ' sm:col-span-2' : ''}`}
                  style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <span
                    className="absolute right-3 top-2 font-black leading-none select-none"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'rgba(255,255,255,0.07)' }}
                  >
                    {f.id}
                  </span>
                  <p className="text-white text-sm font-semibold leading-tight">{f.title}</p>
                  <p className="text-sm font-semibold leading-tight mb-1" style={{ color: '#e8435a' }}>{f.subtitle}</p>
                  <p className="text-xs font-normal leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)', maxWidth: 190 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
