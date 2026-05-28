import featuresCage from '../../assets/features-cage.png';
import featuresDial  from '../../assets/features-dial.png';
import aboutSwirl    from '../../assets/about-3d-swirl.png';

const avatars = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=2',
  'https://i.pravatar.cc/40?img=3',
];

const logos = [
  {
    name: 'Minest',
    sub: 'Automation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
      </svg>
    ),
  },
  {
    name: 'Success',
    sub: 'Good People',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    name: 'Carriest',
    sub: 'Slogan Here',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    name: 'Minest',
    sub: 'Automation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
      </svg>
    ),
  },
  {
    name: 'Marketing',
    sub: 'Agency Slogan',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 19h20L12 2z"/><line x1="12" y1="10" x2="12" y2="14"/>
      </svg>
    ),
  },
];

const gridBg = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)',
  backgroundSize: '36px 36px',
};

export default function Benefits() {
  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-4 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Section header ── */}
      <div className="text-center mb-12">
        <p className="flex items-center justify-center gap-1 text-[#6dbf67] text-xs font-bold tracking-widest uppercase mb-4">
          <span className="font-extrabold">+</span>OUR PROCESS
        </p>
        <h2 className="leading-tight" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)' }}>
          <span className="text-white font-bold">Structured &amp; Transparent </span>
          <span className="font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>Work</span>
          <br />
          <span className="text-[#e8435a] italic font-bold">Flow</span>
          <span className="italic font-normal" style={{ color: 'rgba(232,67,90,0.2)' }}>We Follow</span>
        </h2>
      </div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Card 1 — tall left, spans 2 rows */}
        <div
          className="lg:row-span-2 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
          style={{ background: '#161616', minHeight: 400 }}
        >
          <div>
            <h3 className="text-white font-bold text-base mb-2">We Follow a Structured Process</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 220 }}>
              Every project follows the same proven workflow — so you always know where we are and what comes next.
            </p>
          </div>

          {/* Green radial glow */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0"
            style={{
              height: '55%',
              background: 'radial-gradient(ellipse at 50% 110%, rgba(50,160,50,0.22) 0%, transparent 62%)',
            }}
          />

          {/* 3D object */}
          <div className="flex justify-center items-end mt-auto pt-8 relative z-10">
            <img
              src={featuresCage}
              alt=""
              className="drop-shadow-2xl object-contain"
              style={{ width: 'clamp(160px, 18vw, 230px)' }}
            />
          </div>
        </div>

        {/* Card 2 — Discovery */}
        <div
          className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
          style={{ background: '#161616', minHeight: 280, ...gridBg }}
        >
          <p
            className="font-black leading-none"
            style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)', color: '#e8435a' }}
          >
            01
          </p>
          <div className="flex justify-center items-center flex-1 py-4">
            <img
              src={featuresDial}
              alt=""
              className="drop-shadow-xl object-contain"
              style={{ width: 'clamp(90px, 10vw, 148px)' }}
            />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-1">Discovery</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Understanding your business, market, and goals.
            </p>
          </div>
        </div>

        {/* Card 3 — Strategy */}
        <div
          className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
          style={{ background: '#161616', minHeight: 280, ...gridBg }}
        >
          <p
            className="font-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#e8435a' }}
          >
            02
          </p>
          <div className="flex justify-center items-center flex-1 py-4">
            <img
              src={aboutSwirl}
              alt=""
              className="drop-shadow-xl object-contain"
              style={{ width: 'clamp(90px, 10vw, 148px)' }}
            />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-1">Strategy</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Defining the digital roadmap and architecture.
            </p>
          </div>
        </div>

        {/* Card 4 — remaining steps, wide bottom */}
        <div
          className="lg:col-span-2 rounded-2xl px-6 py-5 flex items-center justify-between gap-6"
          style={{ background: '#161616' }}
        >
          <div>
            <h3 className="text-white font-semibold text-sm mb-2">Design → Development → Testing &amp; Launch → Support</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              From UI/UX concepts through to scalable builds, quality assurance, deployment, and ongoing optimisation.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Stacked avatars */}
            <div className="flex items-center">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#161616] flex-shrink-0"
                  style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: avatars.length - i }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="font-bold text-sm" style={{ color: '#e8435a' }}>6 Steps</span>
          </div>
        </div>
      </div>

      {/* ── Logo strip ── */}
      <div className="mt-14 flex items-center justify-between flex-wrap gap-y-6 gap-x-4">
        {logos.map((l, i) => (
          <div
            key={i}
            className="flex items-center gap-2 transition-opacity"
            style={{ opacity: 0.35 }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              {l.icon}
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-tight">{l.name}</p>
              <p
                className="text-[9px] font-normal uppercase tracking-wider leading-tight"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {l.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
