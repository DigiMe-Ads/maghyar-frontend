import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const navLinks = [
  { label: 'Home',    to: '/' },
  { label: 'About',   to: '/about' },
  // { label: 'Team',    to: '/team' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

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
          {/* <span className="text-white font-bold text-base tracking-wide">Magyar</span>
          <span className="text-white font-bold text-base tracking-wide">Digital</span> */}
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
          {/* Search */}
          {/* <button
            aria-label="Search"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button> */}

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-white text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-90"
            style={{ background: '#e8435a', letterSpacing: '0.06em' }}
          >
            Let's Talk
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
          maxHeight: menuOpen ? '400px' : '0px',
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
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full text-white text-xs font-semibold tracking-widest uppercase"
            style={{ background: '#e8435a' }}
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
