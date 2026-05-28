const steps = [
  { id: '01', title: 'Discovery',        desc: 'Understanding your business, market, and goals.' },
  { id: '02', title: 'Strategy',         desc: 'Defining the digital roadmap and architecture.' },
  { id: '03', title: 'Design',           desc: 'Creating user-focused UI/UX concepts.' },
  { id: '04', title: 'Development',      desc: 'Building reliable and scalable systems.' },
  { id: '05', title: 'Testing & Launch', desc: 'Ensuring quality and smooth deployment.' },
  { id: '06', title: 'Support',          desc: 'Continuous improvement and optimization.' },
];

function StepCard({ step }) {
  return (
    <div
      className="relative rounded-2xl p-6 flex flex-col gap-3 overflow-hidden"
      style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.04)' }}
    >
      {/* Top accent line */}
      <div style={{ height: 2, width: 32, background: '#e8435a', borderRadius: 2, marginBottom: 4 }} />

      {/* Watermark number */}
      <span
        className="absolute right-4 top-2 font-black leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'rgba(255,255,255,0.05)' }}
      >
        {step.id}
      </span>

      {/* Step number pill */}
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: '#e8435a' }}
      >
        Step {step.id}
      </span>

      {/* Title */}
      <p className="text-white font-semibold leading-snug" style={{ fontSize: '1rem' }}>
        {step.title}
      </p>

      {/* Description */}
      <p
        className="text-xs font-normal leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.42)', maxWidth: 200 }}
      >
        {step.desc}
      </p>
    </div>
  );
}

export default function OurProcess() {
  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-4 sm:px-10 md:px-16 lg:px-24"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      {/* Section header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-1" style={{ color: '#5fc95a' }}>
          <span style={{ fontWeight: 800, fontSize: 14 }}>+</span> Our Process
        </p>
        <h2
          className="text-white font-extrabold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
        >
          Structured &amp; Transparent{' '}
          <span style={{ color: '#e8435a', fontStyle: 'italic' }}>W</span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontStyle: 'italic', fontWeight: 400 }}>orkflow</span>
        </h2>
        <p className="text-white/40 text-sm font-normal leading-relaxed max-w-md mx-auto">
          Every project follows the same proven six-step process — so you always know where we are and what comes next.
        </p>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
