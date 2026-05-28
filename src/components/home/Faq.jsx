import { useState } from 'react';
import faqShape from '../../assets/faq-shape.png';

const faqs = [
  {
    id: '01',
    q: 'What services does your digital agency offer?',
    a: 'Implementation typically involves planning, customization or configuration, testing, training, and deployment. It may vary depending on the complexity and scope of the solution.',
  },
  {
    id: '02',
    q: 'How do you approach a new project?',
    a: 'We begin every project with a discovery phase to understand your goals, audience, and constraints, then build a tailored strategy and execute iteratively with full transparency.',
  },
  {
    id: '03',
    q: 'What industries do you specialize in?',
    a: "We serve technology, healthcare, finance, e-commerce, and creative industries — adapting our approach to each sector's unique demands and expectations.",
  },
  {
    id: '04',
    q: 'How long does it take to complete a project?',
    a: 'Timelines vary by scope. Small projects typically take 2–4 weeks; larger full-service engagements run 3–6 months.',
  },
];

/* Each column tracks its own open item independently */
function AccordionColumn({ items, openId, onToggle }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl transition-all duration-300"
            style={{
              background: '#161616',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              onClick={() => onToggle(item.id)}
            >
              <span
                className="text-sm font-semibold leading-snug"
                style={{ color: open ? '#e8435a' : 'rgba(255,255,255,0.75)' }}
              >
                {item.id}. {item.q}
              </span>
              {/* Chevron icon — rotates when open */}
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={open ? '#e8435a' : 'rgba(255,255,255,0.55)'}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            {/* Answer — smooth height transition via max-height */}
            <div
              style={{
                maxHeight: open ? '200px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}
            >
              <p
                className="px-5 pb-5 text-xs leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Faq() {
  /* Two independent states — one per column */
  const [leftOpen,  setLeftOpen]  = useState('01');
  const [rightOpen, setRightOpen] = useState('01');

  const toggleLeft  = (id) => setLeftOpen(prev  => prev  === id ? null : id);
  const toggleRight = (id) => setRightOpen(prev => prev === id ? null : id);

  const col1 = faqs.slice(0, 2); // 01, 02
  const col2 = faqs.slice(2, 4); // 03, 04

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-16 sm:py-20 px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 overflow-visible"
      style={{ fontFamily: "'Inter', sans-serif", zIndex: 2 }}
    >
      {/* ── Decorative shape — bleeds into section below ── */}
      <div
        className="pointer-events-none absolute"
        style={{ right: -10, bottom: -100, width: 260, height: 260, zIndex: 20 }}
      >
        <img
          src={faqShape}
          alt=""
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      {/* ── Section header ── */}
      <div className="text-center mb-10 sm:mb-14">
        <p className="flex items-center justify-center gap-1 text-[#6dbf67] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4">
          <span className="font-extrabold">+</span>FAQS
        </p>

        <h2
          className="leading-tight"
          style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.2rem)' }}
        >
          <span className="text-white font-bold">Have Questions </span>
          <span className="font-normal text-white/50">in Your Mind?</span>
          <br />
          {/* "Get It" — red bold + faded ghost letter matching the image */}
          <span className="text-[#e8435a] italic font-bold">Get </span>
          <span
            className="italic font-normal"
            style={{ color: 'rgba(232,67,90,0.18)', fontSize: '1em' }}
          >
            It
          </span>
        </h2>
      </div>

      {/* ── Two independent accordion columns ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Left column — items 01 & 02 */}
        <AccordionColumn
          items={col1}
          openId={leftOpen}
          onToggle={toggleLeft}
        />
        {/* Right column — items 03 & 04, but display IDs match left (01, 02) */}
        <AccordionColumn
          items={col2}
          openId={rightOpen}
          onToggle={toggleRight}
        />
      </div>
    </section>
  );
}