import aboutTeam  from '../../assets/about-team.jpg';
import aboutBadge from '../../assets/about-logo-badge.png';

const members = [
  {
    name: 'Wade Warren',
    role: 'UX Designer, Research',
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    name: 'Leslie Alexander',
    role: 'UX Designer, Research',
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    name: 'Jenny Wilson',
    role: 'UX Designer, Research',
    avatar: 'https://i.pravatar.cc/80?img=9',
  },
];

const SocialBtn = ({ children }) => (
  <a
    href="#"
    className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
    style={{ border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.6)' }}
  >
    {children}
  </a>
);

export default function Team() {
  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-15 md:px-20 lg:px-36 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="flex flex-col lg:flex-row gap-10 items-start">

        {/* ── Left: heading + member list ── */}
        <div className="lg:w-[44%] flex-shrink-0">
          <p className="flex items-center gap-1 text-[#6dbf67] text-xs font-bold tracking-widest uppercase mb-4">
            <span>+</span>WHY CHOOSE US
          </p>
          <h2 className="leading-tight mb-8" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}>
            <span className="text-white font-bold">Meet Our Experienced</span>
            <br />
            <span className="text-[#e8435a] italic font-bold">Team Peop</span>
            <span className="italic font-normal" style={{ color: 'rgba(232,67,90,0.22)' }}>l</span>
          </h2>

          <div className="flex flex-col">
            {members.map((m, i) => (
              <div key={m.name}>
                <div className="flex items-center gap-5 py-5">
                  {/* Avatar */}
                  <div className="w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10">
                    <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Info + socials */}
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{m.name}</p>
                    <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>{m.role}</p>
                    <div className="flex items-center gap-2">
                      {/* Facebook */}
                      <SocialBtn>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                        </svg>
                      </SocialBtn>
                      {/* Twitter */}
                      <SocialBtn>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                      </SocialBtn>
                      {/* Instagram */}
                      <SocialBtn>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                      </SocialBtn>
                      {/* LinkedIn */}
                      <SocialBtn>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                          <rect x="2" y="9" width="4" height="12"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      </SocialBtn>
                    </div>
                  </div>
                </div>
                {i < members.length - 1 && (
                  <div style={{ height: 1, background: 'rgba(255,255,255,0.07)' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: description + photo with overlays ── */}
        <div className="flex-1 flex flex-col gap-5">
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            The point of using.
          </p>

          {/* Photo container — overflow visible so badge can peek above */}
          <div className="relative" style={{ overflow: 'visible' }}>
            <img
              src={aboutTeam}
              alt="Team working"
              className="w-full object-cover object-center rounded-2xl"
              style={{ height: 'clamp(300px, 38vw, 480px)' }}
            />

            {/* Rotating circular badge */}
            <div
              className="absolute rounded-full overflow-hidden shadow-2xl"
              style={{
                width: 96,
                height: 96,
                top: -28,
                right: 24,
                border: '4px solid #0a0a0a',
                animation: 'spinSlow 12s linear infinite',
                zIndex: 10,
              }}
            >
              <img src={aboutBadge} alt="" className="w-full h-full object-cover" />
            </div>

            {/* 200+ stat card */}
            <div
              className="absolute bottom-5 right-5 rounded-2xl p-5"
              style={{ background: '#e8435a', minWidth: 130, zIndex: 10 }}
            >
              <p
                className="text-white font-black leading-none mb-2"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
              >
                200+
              </p>
              <p className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.85)' }}>
                We have<br />completed<br />Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
