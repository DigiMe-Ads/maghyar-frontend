const members = [
  { name: 'Darrell Steward',  role: 'Digital Marketer', photo: 'https://i.pravatar.cc/400?img=11' },
  { name: 'Ronald Richards',  role: 'Link Builder',     photo: 'https://i.pravatar.cc/400?img=1',  featured: true },
  { name: 'Leslie Alexander', role: 'Developer',        photo: 'https://i.pravatar.cc/400?img=57' },
  { name: 'Leslie Alexander', role: 'Developer',        photo: 'https://i.pravatar.cc/400?img=57' },
  { name: 'Darrell Steward',  role: 'Digital Marketer', photo: 'https://i.pravatar.cc/400?img=11' },
  { name: 'Ronald Richards',  role: 'Link Builder',     photo: 'https://i.pravatar.cc/400?img=1'  },
];

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

function MemberCard({ member }) {
  const featured = !!member.featured;
  const accentBorder = featured ? 'rgba(255,255,255,0.55)' : '#e8435a';

  return (
    <div
      className="relative rounded-3xl overflow-hidden flex-shrink-0"
      style={{
        background: featured ? '#e8435a' : '#161616',
        height: 'clamp(260px, 30vw, 370px)',
      }}
    >
      {/* ── Top row: name info + arrow ── */}
      <div className="relative z-10 flex items-start justify-between px-5 pt-5">
        <div style={{ borderLeft: `2px solid ${accentBorder}`, paddingLeft: 10 }}>
          <p className="text-white font-semibold leading-tight" style={{ fontSize: '0.88rem' }}>
            {member.name}
          </p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {member.role}
          </p>
        </div>

        <button
          aria-label="View profile"
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform"
          style={{ background: 'rgba(0,0,0,0.35)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </button>
      </div>

      {/* ── Photo fills from below the header to the bottom ── */}
      <div className="absolute inset-x-0 bottom-0" style={{ top: '22%' }}>
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />

        {/* Social icons — featured card only */}
        {featured && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
            {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
              <button
                key={i}
                aria-label="Social"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                style={{ background: 'rgba(0,0,0,0.55)' }}
              >
                <Icon />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeamGrid() {
  return (
    <section
      className="w-full bg-[#0a0a0a] py-14 px-5 md:px-10 lg:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        className="grid gap-5 max-w-6xl mx-auto"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {members.map((member, i) => (
          <MemberCard key={i} member={member} />
        ))}
      </div>
    </section>
  );
}
