const ITEM = 'DIGITAL AGENCY';
const track = Array(8).fill(ITEM);

export default function Marquee() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: '#0a0a0a', paddingBlock: '18px' }}
    >
      {/* Green centre glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 100% at 50% 50%, rgba(28,72,18,0.75) 0%, transparent 70%)',
        }}
      />

      {/* Scrolling track — duplicated for seamless loop */}
      <div
        className="flex items-center"
        style={{ animation: 'marqueeScroll 22s linear infinite', willChange: 'transform' }}
      >
        {[...track, ...track].map((label, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span
              className="text-white uppercase tracking-widest select-none"
              style={{
                fontSize: 'clamp(6.2rem, 8vw, 7rem)',
                fontWeight: 300,
                whiteSpace: 'nowrap',
                paddingInline: 'clamp(24px, 3vw, 48px)',
                letterSpacing: '0.12em',
              }}
            >
              {label}
            </span>
            {/* Red dot separator */}
            <span
              className="flex-shrink-0 rounded-full"
              style={{
                width: 10,
                height: 10,
                background: '#e8435a',
                marginInline: 4,
              }}
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
