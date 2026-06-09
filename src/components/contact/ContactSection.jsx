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

const ACCESS_KEY = 'd641238d-0554-48c5-8250-97c79c7a9446';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', needs: '', subject: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (requestType) => {
    if (!form.name || !form.email) return;
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: form.subject || `${requestType} — Magyar Digital`,
          name: form.name,
          email: form.email,
          message: `Request type: ${requestType}\nPhone: ${form.phone || 'N/A'}\nNeeds: ${form.needs || 'N/A'}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', needs: '', subject: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
              <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-1">
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
              <div className="flex items-center gap-3">
                <p
                  className="text-white font-normal"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                >
                  +36 30 655 7566
                </p>
                <a
                  href="https://wa.me/36306557566"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-80"
                  style={{ background: '#25D366', flexShrink: 0 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L.057 23.617a.75.75 0 0 0 .921.921l5.746-1.461A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.23-1.383l-.374-.22-3.875.985.999-3.799-.242-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </a>
              </div>
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
              {status === 'success' && (
                <p className="mb-4 text-xs font-semibold" style={{ color: '#4ade80' }}>
                  Message sent! We'll be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="mb-4 text-xs font-semibold" style={{ color: '#e8435a' }}>
                  Something went wrong. Please try again.
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={status === 'loading'}
                  onClick={() => handleSubmit('Book a Free Consultation')}
                  className="px-8 py-3.5 rounded-full text-white text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: '#e8435a', letterSpacing: '0.1em' }}
                >
                  {status === 'loading' ? 'Sending…' : 'Book a Free Consultation'}
                </button>
                <button
                  type="button"
                  disabled={status === 'loading'}
                  onClick={() => handleSubmit('Request a Proposal')}
                  className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
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
