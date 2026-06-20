import Logo from '../assets/logo.png';
import heroBg from '../assets/hero-bg.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import PricingCards from '../components/pricing/PricingCards';

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e8435a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function GetQuotePage() {
  const { lang, switchLang } = useLanguage();
  const t = translations[lang].adsLanding;

  return (
    <main className="w-full bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Minimal header: logo + language switcher, no nav ── */}
      <header className="w-full flex items-center justify-between px-5 md:px-10 py-7">
        <img src={Logo} alt="Magyar Digital" className="w-28" />
        <div className="flex items-center gap-1.5">
          {['en', 'hu'].map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => switchLang(l)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all"
              style={{
                background: l === lang ? '#e8435a' : 'rgba(255,255,255,0.08)',
                color: 'white',
                border: l === lang ? 'none' : '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative w-full flex items-center justify-center" style={{ minHeight: 360 }}>
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(4,8,6,0.78)' }} />

        <div className="relative z-10 text-center px-5 py-10 max-w-3xl mx-auto">
          <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-1">
            <span>+</span> {t.label.replace('+ ', '')}
          </p>
          <h1
            className="text-white font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(2.1rem, 5vw, 3.2rem)', letterSpacing: '-0.01em' }}
          >
            {t.headline}{' '}
            <span style={{ color: '#e8435a', fontStyle: 'italic' }}>{t.headlineEmphasis}</span>
          </h1>
          <p
            className="mx-auto mb-8"
            style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', maxWidth: 540, lineHeight: 1.7 }}
          >
            {t.subheading}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {t.badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckIcon />
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.83rem' }}>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing plans + quote form (Web3Forms) ── */}
      <PricingCards />

      {/* ── Minimal footer line ── */}
      <div className="w-full flex items-center justify-center px-5 pb-10">
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Magyar Digital
        </p>
      </div>
    </main>
  );
}
