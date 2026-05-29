import servicesTeam from '../../assets/services-team.jpg';

export default function VideoSection() {
  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-6 px-5 md:px-10 lg:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Rounded video container ── */}
      <div
        className="relative rounded-2xl overflow-hidden mx-auto"
        style={{ maxWidth: 1100, height: 'clamp(260px, 32vw, 440px)' }}
      >
        {/* Thumbnail image */}
        <img
          src={servicesTeam}
          alt="Watch the video"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Green arc — left edge, partially off-screen */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: -55,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 160,
            height: 160,
            borderRadius: '50%',
            border: '28px solid #e01b45',
            opacity: 0.9,
            filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.5))',
          }}
        />

        {/* Dome wrapper — positions play button at its top edge */}
        <div
          className="absolute bottom-0 left-1/2"
          style={{
            transform: 'translateX(-50%)',
            width: 'clamp(280px, 52%, 580px)',
            height: '60%',
          }}
        >
          {/* Play button — centred at top of dome */}
          <button
            type="button"
            aria-label="Play video"
            className="absolute top-0 left-1/2 flex items-center justify-center rounded-full z-20 hover:scale-110 transition-transform"
            style={{
              transform: 'translate(-50%, -50%)',
              width: 52,
              height: 52,
              background: '#e8435a',
              boxShadow: '0 0 0 8px rgba(232,67,90,0.18)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </button>

          {/* Dark semi-circle dome */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'rgba(6,6,6,0.88)',
              borderRadius: '50% 50% 0 0',
            }}
          >
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(1.2rem, 2.2vw, 1.75rem)',
                marginTop: '18%',
                letterSpacing: '0.02em',
              }}
            >
              Watch The Video
            </p>
          </div>
        </div>
      </div>

      {/* Dancing Script font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');
      `}</style>
    </section>
  );
}
