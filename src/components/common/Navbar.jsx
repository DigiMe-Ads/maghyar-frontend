import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [langOpen, setLangOpen]     = useState(false);
  const langRef                     = useRef(null);
  const location                    = useLocation();
  const { lang, switchLang }        = useLanguage();
  const t                           = translations[lang].nav;

  const navLinks = [
    { label: t.home,    to: '/' },
    { label: t.about,   to: '/about' },
    { label: t.pricing, to: '/pricing' },
    { label: t.contact, to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const otherLang = lang === 'en' ? 'hu' : 'en';
  const otherLangLabel = lang === 'en' ? 'Magyar' : 'English';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: scrolled ? 'rgba(5, 10, 7, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-12 h-20">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight select-none flex-shrink-0">
          <img src={Logo} alt="Magyar Digital" className="w-32" />
        </Link>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
              style={{ color: isActive(to) ? '#ffffff' : 'rgba(255,255,255,0.6)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">

          {/* Language switcher */}
          <div ref={langRef} className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors"
              style={{
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.15)',
                background: langOpen ? 'rgba(255,255,255,0.08)' : 'transparent',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {lang.toUpperCase()}
              <svg
                width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            {langOpen && (
              <div
                className="absolute right-0 mt-2 rounded-xl overflow-hidden"
                style={{
                  background: 'rgba(15,15,15,0.98)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  minWidth: 120,
                  zIndex: 100,
                }}
              >
                {['en', 'hu'].map((l) => (
                  <button
                    key={l}
                    onClick={() => { switchLang(l); setLangOpen(false); }}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wider uppercase transition-colors text-left hover:bg-white/5"
                    style={{ color: l === lang ? '#e8435a' : 'rgba(255,255,255,0.65)' }}
                  >
                    <span className="font-bold">{l.toUpperCase()}</span>
                    <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', fontWeight: 400, textTransform: 'none' }}>
                      {l === 'en' ? 'English' : 'Magyar'}
                    </span>
                    {l === lang && (
                      <svg className="ml-auto" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e8435a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-white text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-90"
            style={{ background: '#e8435a', letterSpacing: '0.06em' }}
          >
            {t.letsTalk}
          </Link>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8"
          >
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '480px' : '0px',
          background: 'rgba(5, 10, 7, 0.98)',
          borderTop: menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium tracking-widest uppercase py-3 border-b border-white/5 transition-colors"
              style={{ color: isActive(to) ? '#ffffff' : 'rgba(255,255,255,0.6)' }}
            >
              {label}
            </Link>
          ))}

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 py-3 border-b border-white/5">
            {['en', 'hu'].map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all"
                style={{
                  background: l === lang ? '#e8435a' : 'rgba(255,255,255,0.08)',
                  color: 'white',
                  border: l === lang ? 'none' : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {lang === 'en' ? 'English' : 'Magyar'}
            </span>
          </div>

          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full text-white text-xs font-semibold tracking-widest uppercase"
            style={{ background: '#e8435a' }}
          >
            {t.letsTalk}
          </Link>
        </nav>
      </div>
    </header>
  );
}
