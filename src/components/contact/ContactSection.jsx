import { useState } from 'react';
import featuresWire from '../../assets/features-wire.png';

const inputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.12)',
  color: 'rgba(255,255,255,0.75)',
  padding: '10px 0',
  outline: 'none',
  width: '100%',
  fontSize: '0.83rem',
  fontFamily: "'Inter', sans-serif",
};

const placeholderColor = `
  input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
`;

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', needs: '', subject: '',
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section
      className="w-full bg-[#0a0a0a] py-16 px-5 md:px-10 lg:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{placeholderColor}</style>

      {/* ── Outer card ── */}
      <div
        className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
        style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex flex-col lg:flex-row gap-10 p-6 sm:p-10 md:p-14">

          {/* ── Left: heading + contact info ── */}
          <div className="lg:w-[40%] flex-shrink-0 flex flex-col justify-between relative min-h-[260px]">

            {/* Faint wire background */}
            <img
              src={featuresWire}
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute"
              style={{
                width: '140%',
                left: '-30%',
                top: '10%',
                opacity: 0.04,
                filter: 'grayscale(1)',
              }}
            />

            {/* Top: label + heading */}
            <div className="relative z-10">
              <p className="text-[#6dbf67] text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-1">
                <span>+</span> GET IN TOUCH
              </p>
              <h2
                className="text-white font-bold leading-snug"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)' }}
              >
                We help businesses
                <br />
                transform ideas into{' '}
                <span style={{ color: '#e8435a', fontStyle: 'italic', fontWeight: 700 }}>
                  powerful digital
                  <br />
                  solutions
                </span>
              </h2>
              <p className="mt-4 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                Let's discuss your project today.
              </p>
            </div>

            {/* Bottom: contact info */}
            <div className="relative z-10 mt-10 lg:mt-0">
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginBottom: 4 }}>
                sales@magyardigital.com
              </p>
              <p
                className="text-white font-normal"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
              >
                +36 30 655 7566
              </p>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="flex-1 flex flex-col justify-between gap-8">

            {/* 2 × 2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
              <input
                style={inputStyle}
                placeholder="Your full name"
                value={form.name}
                onChange={set('name')}
              />
              <input
                style={inputStyle}
                type="email"
                placeholder="Your email Address"
                value={form.email}
                onChange={set('email')}
              />
              <input
                style={inputStyle}
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={set('phone')}
              />
              <input
                style={inputStyle}
                placeholder="What are your needs"
                value={form.needs}
                onChange={set('needs')}
              />
            </div>

            {/* Subject — full width */}
            <input
              style={inputStyle}
              placeholder="your-subject"
              value={form.subject}
              onChange={set('subject')}
            />

            {/* Submit */}
            <div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="px-8 py-3.5 rounded-full text-white text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
                  style={{ background: '#e8435a', letterSpacing: '0.1em' }}
                >
                  Book a Free Consultation
                </button>
                <button
                  type="button"
                  className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}
                >
                  Request a Proposal
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
