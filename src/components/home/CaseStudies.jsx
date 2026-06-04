// src/components/home/CaseStudies.jsx
// Assets needed in src/assets/:
//   case-phone.jpg      — hand holding phone mockup (project 1)
//   case-mockup.jpg     — tablet/laptop mockup on desk (project 2)
//   case-3d-swirl.png   — chrome propeller/swirl 3D object (bottom left)

import funholidays from '../../assets/fun-holidays.png';
import molecules from '../../assets/molecules.png';
import synexiseducation from '../../assets/synexis-education.png';
import caseSwirl from '../../assets/case-3d-swirl.png';

const projects = [
  {
    id: 1,
    tags: ['Website'],
    title: 'Fun Holiday',
    image: funholidays,
  },
  {
    id: 2,
    tags: ['Website'],
    title: 'Molecules',
    image: molecules,
  },
  // {
  //   id: 3,
  //   tags: ['Website'],
  //   title: 'Synexis Education',
  //   image: synexiseducation,
  // }
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
      <div className="text-center mb-12">
        <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-4">
          + Featured Project
        </p>
        <h2
          className="leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          <span className="text-white font-bold">Case Studies</span>
          <span className="text-white/30 font-normal">That Reflect</span>
          <br />
          <span className="text-[#e8435a] italic font-bold">Our Exper</span>
          <span className="text-white/20 italic font-normal">t</span>
        </h2>
      </div>

      {/* ── Project cards ── */}
      <div className="flex flex-col gap-5 max-w-4xl mx-auto relative z-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full rounded-2xl overflow-hidden group cursor-pointer"
            style={{ minHeight: 'clamp(260px, 45vw, 460px)' }}
          >
            {/* Background image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6" style={{ minHeight: '260px' }}>

              {/* Top: tag pills */}
              <div className="flex items-center gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium text-white/80"
                    style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom: title + arrow */}
              <div className="flex items-end justify-between mt-auto pt-16">
                <h3 className="text-white font-bold text-lg md:text-xl">
                  {project.title}
                </h3>

                {/* Arrow button */}
                {/* <a
                  href="#"
                  aria-label={`View ${project.title}`}
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform"
                  style={{ background: '#e8435a' }}
                >
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="5" y1="19" x2="19" y2="5" />
                    <polyline points="5 5 19 5 19 19" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        ))}
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