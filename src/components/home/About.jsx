import aboutTeam  from '../../assets/about-team.jpg';
import aboutSwirl from '../../assets/about-3d-swirl.png';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-14 sm:py-16 md:py-20 px-4 sm:px-10 md:px-16 lg:px-24"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* ── Top row: label + heading + swirl ── */}
      <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8 sm:mb-10">

        {/* Left: label + heading */}
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center gap-4 mb-4 sm:mb-5">
            <p className="text-[#e01b45] text-[10px] sm:text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
              {t.label}
            </p>
          </div>

          <h2
            className="text-white font-bold leading-tight"
            style={{ fontSize: 'clamp(1.45rem, 3.5vw, 2.75rem)' }}
          >
            {t.headlinePrefix}
            <span className="text-[#e8435a] italic font-bold">
              {t.headlineEmphasis}
            </span>
          </h2>
        </div>

        {/* 3D swirl */}
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

        {/* Main photo */}
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
        </div>

        {/* Stats panel */}
        <div className="flex flex-row lg:flex-col justify-between lg:justify-center gap-4 lg:gap-6 lg:w-52 flex-shrink-0 py-2 lg:py-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <span
              className="font-black text-[#e8435a] leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
            >
              6
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
                {t.yearLabel}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom row: body text + CTA ── */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-start">
        <div className="w-full flex flex-col justify-between gap-5 sm:gap-6 pt-0 lg:pt-2">
          <p className="text-white/40 text-sm font-normal leading-relaxed">
            {t.body}
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-white text-xs sm:text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
              style={{ background: '#e8435a', letterSpacing: '0.06em' }}
            >
              {t.discoverMore}
            </a>
            <a
              href="#"
              aria-label="Next"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-colors flex-shrink-0"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
}
