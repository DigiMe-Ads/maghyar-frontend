import funholidaysVideo from '../../assets/videos/funholiays.mp4';
import kickerzVideo from '../../assets/videos/kickerz.mp4';
import moleculesVideo from '../../assets/videos/molecules.mp4';
import caseSwirl from '../../assets/case-3d-swirl.png';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

const projectBase = [
  {
    id: 1,
    tags: ['React', 'Vite', 'Tailwind CSS'],
    title: 'Fun Holidays',
    video: funholidaysVideo,
    tech: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 2,
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    title: 'Kickerz Cup',
    video: kickerzVideo,
    tech: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    id: 3,
    tags: ['WordPress', 'SEO', 'Performance'],
    title: 'Molecule',
    video: moleculesVideo,
    tech: ['WordPress', 'SEO Optimisation', 'Performance Tuning'],
  },
];

export default function CaseStudies() {
  const { lang } = useLanguage();
  const t = translations[lang].caseStudies;

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-4 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* ── 3D swirl — bottom left ── */}
      <div
        className="hidden md:block pointer-events-none absolute left-0 bottom-10 z-10"
        style={{ width: 'clamp(100px, 10vw, 240px)', animation: 'floatY 6s ease-in-out infinite' }}
      >
        <img src={caseSwirl} alt="" className="w-full drop-shadow-2xl" />
      </div>

      {/* ── Section header ── */}
      <div className="text-center mb-16">
        <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-4">
          {t.label}
        </p>
        <h2
          className="leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          <span className="text-white font-bold">{t.headline1}</span>
          <br />
          <span className="text-[#e8435a] italic font-bold">{t.headline2}</span>
        </h2>
      </div>

      {/* ── Project rows ── */}
      <div className="flex flex-col gap-20 max-w-6xl mx-auto relative z-20">
        {projectBase.map((project, idx) => {
          const isReversed = idx % 2 !== 0;
          const desc = t.projects[idx]?.description || '';
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
                <span
                  className="font-black leading-none select-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'rgba(255,255,255,0.06)' }}
                >
                  0{project.id}
                </span>

                <h3
                  className="text-white font-bold leading-tight -mt-3"
                  style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)' }}
                >
                  {project.title}
                </h3>

                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

                <p
                  className="text-sm font-normal leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(232,67,90,0.1)',
                        color: 'rgba(232,67,90,0.85)',
                        border: '1px solid rgba(232,67,90,0.2)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
}
