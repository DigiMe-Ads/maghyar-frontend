import photo2      from '../../assets/photo-2.jpg';
import aboutTeam   from '../../assets/about-team.jpg';
import faqShape    from '../../assets/faq-shape.png';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

export default function WhoWeAre() {
  const { lang } = useLanguage();
  const t = translations[lang].whoWeAre;

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-5 md:px-10 lg:px-16 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Iridescent bubble — top left */}
      <div
        className="hidden md:block pointer-events-none absolute -left-14 top-8 opacity-85"
        style={{ width: 'clamp(140px, 14vw, 210px)', zIndex: 1 }}
      >
        <img src={faqShape} alt="" className="w-full drop-shadow-2xl" />
      </div>

      {/* Scroll-to-top indicator */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-10 right-10 w-10 h-10 rounded-full flex items-center justify-center z-10 hover:opacity-80 transition-opacity"
        style={{ background: '#e01b45' }}
        aria-label="Scroll to top"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"/>
          <polyline points="5 12 12 5 19 12"/>
        </svg>
      </button>

      {/* ── Main layout ── */}
      <div className="flex flex-col lg:flex-row gap-14 items-center relative z-10">

        {/* ── Left: image stack ── */}
        <div className="lg:w-[46%] flex-shrink-0 relative" style={{ minHeight: 'clamp(360px, 55vw, 520px)' }}>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ width: '70%', height: 'clamp(380px, 46vw, 520px)' }}
          >
            <img src={photo2} alt="" className="w-full h-full object-cover object-center" />
          </div>

          <div
            className="absolute rounded-2xl overflow-hidden"
            style={{
              width: '56%',
              height: 'clamp(180px, 22vw, 250px)',
              bottom: 0,
              right: 0,
              border: '4px solid #0a0a0a',
            }}
          >
            <img src={aboutTeam} alt="" className="w-full h-full object-cover object-center" />
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="flex-1">

          {/* Label */}
          <p className="flex items-center gap-1 text-[#e01b45] text-xs font-bold tracking-widest uppercase mb-5">
            <span>+</span>{t.label.replace('+ ', '')}
          </p>

          {/* Heading */}
          <h2
            className="leading-tight mb-5"
            style={{ fontSize: 'clamp(1.7rem, 3.8vw, 3rem)' }}
          >
            <span className="text-white font-black">{t.headline} </span>
            <br />
            <span className="text-[#e8435a] italic font-bold">{t.headlineEmphasis}</span>
          </h2>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-7"
            style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 460 }}
          >
            {t.body}
          </p>

          {/* Quote card */}
          <div
            className="rounded-2xl p-6 mb-8"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1.5px solid #e8435a' }}
          >
            <p className="text-white text-sm leading-relaxed font-normal">
              {t.quote}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-7 py-3 rounded-full text-white text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
              style={{ background: '#e8435a', letterSpacing: '0.06em' }}
            >
              {t.discoverMore}
            </a>
            <a
              href="#"
              aria-label="Next"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
