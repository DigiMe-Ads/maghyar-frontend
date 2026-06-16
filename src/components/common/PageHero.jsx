import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero-bg.png';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

export default function PageHero({ titleKey }) {
  const { lang } = useLanguage();
  const t = translations[lang].pageHero;
  const title = t[titleKey] || titleKey;

  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{ minHeight: 300, paddingTop: 80, fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(4,8,6,0.72)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5">
        <h1
          className="text-white font-light leading-tight mb-4"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', letterSpacing: '-0.01em' }}
        >
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
          <Link to="/" className="hover:text-white transition-colors duration-200">
            {t.home}
          </Link>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span style={{ color: 'rgba(255,255,255,0.8)' }}>{title}</span>
        </div>
      </div>
    </section>
  );
}
