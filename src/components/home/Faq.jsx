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
    a: 'We serve technology, healthcare, finance, e-commerce, and creative industries — adapting our approach to each sector\'s unique demands and expectations.',
  },
  {
    id: '04',
    q: 'How long does it take to complete a project?',
    a: 'Timelines vary by scope. Small projects typically take 2–4 weeks; larger full-service engagements run 3–6 months.',
  },
];

function AccordionItem({ item, open, onToggle }) {
  return (
    <div
      className="rounded-2xl"
      style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
        onClick={onToggle}
      >
        <span
          className="text-sm font-semibold leading-snug"
          style={{ color: open ? '#e8435a' : 'rgba(255,255,255,0.75)' }}
        >
          {item.id}. {item.q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ border: '1px solid rgba(255,255,255,0.15)' }}
        >
          <svg
            width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke={open ? '#e8435a' : 'rgba(255,255,255,0.55)'}
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  const [openId, setOpenId] = useState('01');
  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-5 md:px-10 lg:px-36 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", overflow: 'visible', position: 'relative', zIndex: 2 }}
    >
      {/* ── Shared shape — bleeds into Team section below ── */}
      <div
        className="pointer-events-none absolute"
        style={{ right: -10, bottom: -100, width: 300, height: 300, zIndex: 20 }}
      >
        <img src={faqShape} alt="" className="w-full h-full object-contain drop-shadow-2xl" />
      </div>

      {/* ── Section header ── */}
      <div className="text-center mb-12">
        <p className="flex items-center justify-center gap-1 text-[#6dbf67] text-xs font-bold tracking-widest uppercase mb-4">
          <span className="font-extrabold">+</span>FAQS
        </p>
        <h2 className="leading-tight" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)' }}>
          <span className="text-white font-bold">Have Questions </span>
          <span className="font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>in Your Mind?</span>
          <br />
          <span className="text-[#e8435a] italic font-bold">Get </span>
          <span className="italic font-normal" style={{ color: 'rgba(232,67,90,0.2)' }}>t</span>
        </h2>
      </div>

      {/* ── Two-column accordion ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[0, 1].map(col => (
          <div key={col} className="flex flex-col gap-3">
            {faqs.map(item => (
              <AccordionItem
                key={`${col}-${item.id}`}
                item={item}
                open={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
