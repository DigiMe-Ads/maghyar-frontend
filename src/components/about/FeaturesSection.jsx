import { useState } from 'react';
import featuresImg from '../../assets/about/features.png';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

export default function FeaturesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { lang } = useLanguage();
  const t = translations[lang].featuresSection;

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-16 px-5 md:px-10 lg:px-16 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

        {/* ── Left column: header + image ── */}
        <div className="lg:w-1/2 flex-shrink-0 flex flex-col gap-8">
          <div>
            <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-3">
              {t.label}
            </p>
            <h2
              className="text-white leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)' }}
            >
              {t.headline1}{' '}
              <span className="font-black">{t.headline2}</span>
            </h2>
          </div>

          <img
            src={featuresImg}
            alt="Our features"
            className="w-full object-cover rounded-2xl flex-1"
            style={{ minHeight: 'clamp(240px, 32vw, 420px)', objectPosition: 'center' }}
          />
        </div>

        {/* ── Right column: FEATURES watermark + list ── */}
        <div className="flex-1 flex flex-col">
          {/* Watermark */}
          <div
            className="hidden sm:flex pointer-events-none select-none overflow-hidden items-center mb-8"
            style={{ minHeight: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            <span
              className="font-black leading-none"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.08)',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}
            >
              FEATURES
            </span>
          </div>

          {/* Feature list */}
          <div>
            {t.features.map((feature, idx) => (
              <div
                key={feature.title}
                onClick={() => setActiveIdx(idx)}
                className="cursor-pointer"
              >
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
                <div
                  className="flex items-center py-7 transition-all duration-200"
                  style={
                    idx === activeIdx
                      ? { borderLeft: '2px solid #e8435a', paddingLeft: 16 }
                      : { paddingLeft: 18 }
                  }
                >
                  {/* Title */}
                  <span
                    className="flex-shrink-0 transition-colors duration-200"
                    style={{
                      fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
                      minWidth: 170,
                      fontWeight: idx === activeIdx ? 700 : 600,
                      color: idx === activeIdx ? '#ffffff' : 'rgba(255,255,255,0.75)',
                    }}
                  >
                    {feature.title}
                  </span>

                  {/* Tags with dot separator */}
                  <div className="flex items-center gap-2 flex-wrap ml-2">
                    {feature.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="flex items-center gap-2">
                        <span
                          className="text-white/40"
                          style={{ fontSize: 'clamp(0.7rem, 1vw, 0.82rem)' }}
                        >
                          {tag}
                        </span>
                        {tIdx < feature.tags.length - 1 && (
                          <span
                            className="inline-block rounded-full flex-shrink-0"
                            style={{ width: 5, height: 5, background: '#e8435a' }}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
