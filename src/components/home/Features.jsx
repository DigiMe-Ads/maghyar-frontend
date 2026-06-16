import featuresWire   from '../../assets/features-wire.png';
import featuresCage   from '../../assets/features-cage.png';
import featuresBulb   from '../../assets/features-bulb.png';
import featuresStar   from '../../assets/features-star.png';
import featuresLiquid from '../../assets/features-liquid.png';
import featuresDial   from '../../assets/features-dial.png';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

export default function Features() {
  const { lang } = useLanguage();
  const t = translations[lang].features;

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-4 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Wireframe globe background — far left */}
      <div
        className="pointer-events-none absolute -left-48 top-102 opacity-90"
        style={{ width: 'clamp(1080px, 82vw, 820px)' }}
      >
        <img src={featuresWire} alt="" className="w-full" />
      </div>

      {/* ── Section header ── */}
      <div className="relative z-10 text-center mb-12">
        <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-3">
          {t.label}
        </p>
        <h2
          className="text-white font-normal leading-tight mb-6"
          style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)' }}
        >
          <span className="font-black">{t.headline1} </span>
          <span className="text-white/40 font-normal">{t.headline2}</span>
        </h2>
      </div>

      {/* ── Bento grid ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 grid-rows-auto gap-4 max-w-5xl mx-auto">

        {/* ── Card 1: Web Development — dark, tall left ── */}
        <div
          className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden flex flex-col justify-between p-7 min-h-[220px]"
          style={{ background: '#161616' }}
        >
          <div>
            <p className="text-white text-base font-semibold mb-1">{t.card1.title}</p>
            <p className="text-white/40 text-sm font-normal leading-relaxed">
              {t.card1.desc}
            </p>
          </div>
          <div className="flex justify-center items-end mt-4">
            <img
              src={featuresCage}
              alt="3D cage sphere"
              className="w-48 md:w-56 drop-shadow-2xl object-contain"
              style={{ maxHeight: '220px' }}
            />
          </div>
        </div>

        {/* ── Card 2: Modern & Responsive — dark, wide right ── */}
        <div
          className="lg:col-span-3 lg:row-span-2 rounded-2xl overflow-hidden relative flex flex-col justify-between p-7 min-h-[220px]"
          style={{ background: '#111' }}
        >
          <div className="flex justify-between items-start gap-4">
            {/* Text */}
            <div className="flex-1">
              <h3
                className="text-white font-black leading-tight mb-3"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
              >
                {t.card2.title}<br />
                <span className="text-white/40 font-normal">{t.card2.subtitle}</span>
              </h3>
              <p className="text-white/40 text-sm font-normal leading-relaxed mb-5 max-w-xs">
                {t.card2.desc}
              </p>
              {/* Tag pills */}
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-white text-xs font-normal border border-white/15 hover:border-white/30 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Crystal bulb */}
            <div className="flex-shrink-0 hidden sm:block">
              <img
                src={featuresBulb}
                alt="Crystal light bulb"
                className="drop-shadow-2xl object-contain"
                style={{ width: 'clamp(220px, 24vw, 300px)', maxHeight: '340px' }}
              />
            </div>
          </div>
        </div>

        {/* ── Card 3: Performance — pink/red, bottom left ── */}
        <div
          className="lg:col-span-2 rounded-2xl overflow-hidden relative flex flex-col justify-between p-6 min-h-[200px]"
          style={{ background: '#e8435a' }}
        >
          <div>
            <p className="text-white/70 text-[10px] font-semibold tracking-widest uppercase mb-2">
              {t.card3.label}
            </p>
            <h3
              className="text-white font-black leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
            >
              {t.card3.title}<br />
              <span className="text-white/50 font-normal">{t.card3.subtitle1}</span>
              <br />
              <span className="text-white/50 font-normal">{t.card3.subtitle2}</span>
            </h3>
          </div>
          {/* Arrow button */}
          <div className="absolute top-6 right-6">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          {/* Star object */}
          <div className="flex justify-end mt-3">
            <img
              src={featuresStar}
              alt="Geometric star"
              className="drop-shadow-2xl object-contain"
              style={{ width: 'clamp(100px, 12vw, 170px)' }}
            />
          </div>
        </div>

        {/* ── Card 4: Custom Web Apps — dark, bottom center ── */}
        <div
          className="lg:col-span-1 rounded-2xl overflow-hidden flex flex-col justify-between p-6 min-h-[200px]"
          style={{ background: '#111' }}
        >
          <div className="flex justify-center flex-1 items-center">
            <img
              src={featuresLiquid}
              alt="Iridescent sphere"
              className="drop-shadow-2xl object-contain"
              style={{ width: 'clamp(100px, 10vw, 160px)' }}
            />
          </div>
          <div className="mt-4">
            <p className="text-white text-sm font-semibold leading-tight">
              {t.card4.title}
            </p>
          </div>
        </div>

        {/* ── Card 5: GDPR — pink/red, bottom right ── */}
        <div
          className="lg:col-span-2 rounded-2xl overflow-hidden flex flex-col justify-between p-6 min-h-[200px]"
          style={{ background: '#e8435a' }}
        >
          <div>
            <p className="text-white/70 text-[10px] font-semibold tracking-widest uppercase mb-2">
              {t.card5.label}
            </p>
            <h3
              className="text-white font-black leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
            >
              {t.card5.title}<br />{t.card5.subtitle}
            </h3>
          </div>
          <div className="flex justify-center mt-3">
            <img
              src={featuresDial}
              alt="Dial object"
              className="drop-shadow-2xl object-contain"
              style={{ width: 'clamp(80px, 9vw, 130px)' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
