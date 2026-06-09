import funholidaysVideo from '../../assets/videos/funholiays.mp4';
import kickerzVideo from '../../assets/videos/kickerz.mp4';
import moleculesVideo from '../../assets/videos/molecules.mp4';
import caseSwirl from '../../assets/case-3d-swirl.png';

const projects = [
  {
    id: 1,
    tags: ['React', 'Vite', 'Tailwind CSS'],
    title: 'Fun Holidays',
    video: funholidaysVideo,
    description: 'A fast, fully responsive travel platform built with React, Vite and Tailwind CSS. Designed to immerse visitors in vibrant destinations and convert interest into bookings through a clean, intuitive interface.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 2,
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    title: 'Kickerz Cup',
    video: kickerzVideo,
    description: 'A real-time sports competition platform powered by React, Tailwind CSS and Firebase. Handles live standings, match updates and user management — all synced in real time without a page refresh.',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    id: 3,
    tags: ['WordPress', 'SEO', 'Performance'],
    title: 'Molecules',
    video: moleculesVideo,
    description: 'A polished WordPress-powered website for a scientific brand. Built with performance and SEO at its core — clean architecture, fast load times and structured content that ranks and reads well.',
    tech: ['WordPress', 'SEO Optimisation', 'Performance Tuning'],
  },
];

export default function CaseStudies() {
  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-4 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* ── 3D swirl — bottom left ── */}
      <div
        className="hidden md:block pointer-events-none absolute left-0 bottom-10 z-10"
        style={{
          width: 'clamp(100px, 10vw, 240px)',
          animation: 'floatY 6s ease-in-out infinite',
        }}
      >
        <img src={caseSwirl} alt="" className="w-full drop-shadow-2xl" />
      </div>

      {/* ── Section header ── */}
      <div className="text-center mb-16">
        <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-4">
          + Featured Project
        </p>
        <h2
          className="leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          <span className="text-white font-bold">Case Studies That Reflect</span>
          <br />
          <span className="text-[#e8435a] italic font-bold">Our Expertise</span>
        </h2>
      </div>

      {/* ── Project rows — alternating left/right layout ── */}
      <div className="flex flex-col gap-20 max-w-6xl mx-auto relative z-20">
        {projects.map((project, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <div
              key={project.id}
              className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
            >
              {/* Video side */}
              <div
                className="w-full lg:w-[66%] rounded-2xl overflow-hidden flex-shrink-0"
                style={{ height: 'clamp(220px, 38vw, 400px)' }}
              >
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Description side */}
              <div className="w-full lg:w-1/2 flex flex-col gap-5">

                {/* Project number */}
                <span
                  className="font-black leading-none select-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'rgba(255,255,255,0.06)' }}
                >
                  0{project.id}
                </span>

                {/* Title */}
                <h3
                  className="text-white font-bold leading-tight -mt-3"
                  style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)' }}
                >
                  {project.title}
                </h3>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

                {/* Description */}
                <p
                  className="text-sm font-normal leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(232,67,90,0.1)',
                        color: 'rgba(232,67,90,0.85)',
                        border: '1px solid rgba(232,67,90,0.2)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
}
