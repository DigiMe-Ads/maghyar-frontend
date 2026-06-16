import { useState } from 'react';
import { Link } from 'react-router-dom';
import swirl1  from '../../assets/about-3d-swirl.png';
import liquid  from '../../assets/features-liquid.png';
import swirl2  from '../../assets/case-3d-swirl.png';
import bulb    from '../../assets/features-bulb.png';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

const slideShapes = [
  [swirl1, liquid],
  [swirl2, bulb],
];

export default function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const { lang } = useLanguage();
  const t = translations[lang].servicesCarousel;

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-16 px-5 md:px-10 lg:px-16 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Section header ── */}
      <div className="text-center mb-12">
        <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-4">
          {t.label}
        </p>
        <h2
          className="text-white font-bold leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          {t.headline1}{' '}
          <em style={{ color: '#e8435a', fontStyle: 'italic' }}>{t.headlineEmphasis1}</em>
          <br />
          <em style={{ color: '#e8435a', fontStyle: 'italic' }}>{t.headlineEmphasis2}</em>
        </h2>
      </div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {t.slides[active].map((card, idx) => (
          <div
            key={card.title}
            className="flex flex-col sm:flex-row rounded-3xl overflow-hidden"
            style={{ background: '#161616' }}
          >
            {/* Left: shape */}
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: 'clamp(120px, 22%, 200px)', minHeight: 'clamp(140px, 20vw, 200px)' }}
            >
              <img
                src={slideShapes[active][idx]}
                alt={card.category}
                className="object-contain drop-shadow-2xl"
                style={{ width: '85%', maxHeight: '85%' }}
              />
            </div>

            {/* Right: content */}
            <div className="flex flex-col justify-between flex-1 px-6 py-7">
              <div>
                <p
                  className="text-white/40 font-normal mb-3"
                  style={{ fontSize: 'clamp(0.72rem, 1vw, 0.82rem)' }}
                >
                  {card.category}
                </p>

                <h3
                  className="text-white font-bold leading-snug mb-4"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
                >
                  {card.title}
                </h3>

                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />

                <p
                  className="text-white/40 font-normal leading-relaxed"
                  style={{ fontSize: 'clamp(0.72rem, 1vw, 0.82rem)' }}
                >
                  {card.description}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-5">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-full text-white text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  style={{ background: '#e8435a', fontSize: '0.78rem' }}
                >
                  {t.getQuote}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Dot navigation ── */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {t.slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:  i === active ? 10 : 8,
              height: i === active ? 10 : 8,
              background: i === active ? '#e8435a' : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
