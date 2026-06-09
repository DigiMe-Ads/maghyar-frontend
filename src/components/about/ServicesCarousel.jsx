import { useState } from 'react';
import { Link } from 'react-router-dom';
import swirl1  from '../../assets/about-3d-swirl.png';
import liquid  from '../../assets/features-liquid.png';
import swirl2  from '../../assets/case-3d-swirl.png';
import bulb    from '../../assets/features-bulb.png';

const slides = [
  [
    {
      category: 'Corporate',
      title: 'Corporate Websites',
      description: 'We design and build professional corporate websites that reflect your brand and communicate your value — with clean architecture, fast performance, and easy content management built in from day one.',
      shape: swirl1,
    },
    {
      category: 'Campaigns',
      title: 'Landing & Campaign Pages',
      description: 'Conversion-focused landing pages built for your marketing campaigns — optimized for speed, designed to guide visitors toward a single goal, and ready to integrate with your existing ad and email workflows.',
      shape: liquid,
    },
  ],
  [
    {
      category: 'E-commerce',
      title: 'E-commerce Platforms',
      description: 'Full-featured online stores with secure checkout, product management, and seamless payment integration. We build e-commerce solutions that are intuitive for your customers and easy for your team to manage.',
      shape: swirl2,
    },
    {
      category: 'Development',
      title: 'Custom Web Applications',
      description: 'Bespoke web applications engineered around your specific business logic and workflows. Built with modern technologies, designed to scale, and maintained with long-term reliability in mind.',
      shape: bulb,
    },
  ],
];

export default function ServicesCarousel() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-16 px-5 md:px-10 lg:px-16 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Section header ── */}
      <div className="text-center mb-12">
        <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-4">
          + Our Service
        </p>
        <h2
          className="text-white font-bold leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          What We are Offering to{' '}
          <em style={{ color: '#e8435a', fontStyle: 'italic' }}>Our</em>
          <br />
          <em style={{ color: '#e8435a', fontStyle: 'italic' }}>Potential Client</em>
        </h2>
      </div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {slides[active].map((card) => (
          <div
            key={card.title}
            className="flex flex-col sm:flex-row rounded-3xl overflow-hidden"
            style={{ background: '#161616' }}
          >
            {/* Left: shape */}
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: 'clamp(120px, 22%, 200px)', minHeight: 'clamp(140px, 20vw, 200px)' }}
            >
              <img
                src={card.shape}
                alt={card.category}
                className="object-contain drop-shadow-2xl"
                style={{ width: '85%', maxHeight: '85%' }}
              />
            </div>

            {/* Right: content */}
            <div className="flex flex-col justify-between flex-1 px-6 py-7">
              <div>
                {/* Category */}
                <p
                  className="text-white/40 font-normal mb-3"
                  style={{ fontSize: 'clamp(0.72rem, 1vw, 0.82rem)' }}
                >
                  {card.category}
                </p>

                {/* Title */}
                <h3
                  className="text-white font-bold leading-snug mb-4"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
                >
                  {card.title}
                </h3>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />

                {/* Description */}
                <p
                  className="text-white/40 font-normal leading-relaxed"
                  style={{ fontSize: 'clamp(0.72rem, 1vw, 0.82rem)' }}
                >
                  {card.description}
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3 mt-5">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-full text-white text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  style={{ background: '#e8435a', fontSize: '0.78rem' }}
                >
                  Get a Quote
                </Link>
                {/* <button
                  aria-label="Arrow"
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform"
                  style={{ background: '#000' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="19" x2="19" y2="5" />
                    <polyline points="5 5 19 5 19 19" />
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Dot navigation ── */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:  i === active ? 10 : 8,
              height: i === active ? 10 : 8,
              background: i === active ? '#e8435a' : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
