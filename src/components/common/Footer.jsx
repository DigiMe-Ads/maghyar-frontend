import { useState } from 'react';
import footerShape from '../../assets/footer-shape.png';

const companyLinks = ['About', 'Our Mission', 'Our Blogs', 'Help Center', 'Contact Us'];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer
      className="w-full bg-[#0a0a0a] px-5 md:px-10 lg:px-16 pt-4 pb-8"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Rounded container ── */}
      <div
        className="w-full rounded-2xl px-8 md:px-12 py-10"
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

          {/* ── Col 1: Tagline + email ── */}
          <div className="lg:w-[42%] flex-shrink-0">
            <h3
              className="text-white font-normal leading-snug mb-6"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', maxWidth: 360 }}
            >
              Smart investing starts here.{' '}
              Let's grow together—
              <span className="font-semibold" style={{ color: '#e8435a' }}>starting today!</span>
            </h3>

            {/* Email input */}
            <div
              className="relative flex items-center mb-6"
              style={{ maxWidth: 380 }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your Email address"
                className="w-full text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 50,
                  padding: '13px 56px 13px 20px',
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: "'Inter', sans-serif",
                }}
              />
              <button
                type="button"
                className="absolute right-2 flex items-center justify-center rounded-full flex-shrink-0 hover:opacity-85 transition-opacity"
                style={{ width: 36, height: 36, background: '#e8435a' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', maxWidth: 380 }} />
          </div>

          {/* ── Col 2: 3D shape ── */}
          <div className="lg:w-[18%] flex justify-center items-center flex-shrink-0 py-2">
            <img
              src={footerShape}
              alt=""
              className="drop-shadow-2xl"
              style={{
                width: 'clamp(120px, 14vw, 190px)',
                animation: 'floatY 6s ease-in-out infinite',
              }}
            />
          </div>

          {/* ── Vertical divider ── */}
          <div
            className="hidden lg:block flex-shrink-0 self-stretch"
            style={{ width: 1, background: 'rgba(255,255,255,0.08)', marginInline: 16 }}
          />

          {/* ── Col 3: Company + Contact ── */}
          <div className="flex-1 flex flex-col sm:flex-row gap-10 lg:pl-8">

            {/* Company */}
            <div className="flex-1">
              <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
              <ul className="flex flex-col gap-3">
                {companyLinks.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: 'rgba(255,255,255,0.45)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex-1">
              <h4 className="text-white font-semibold text-sm mb-5">Contact</h4>
              <ul className="flex flex-col gap-3">
                {[
                  '+629 555-0129',
                  'demo@example.com',
                  '1901 Thornridge Cir. Shiloh, Hawaii 81063',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-sm leading-snug"
                    style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 200 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} DigiMe Ads. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a
                key={item}
                href="#"
                className="text-xs hover:text-white/60 transition-colors"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        input::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </footer>
  );
}
