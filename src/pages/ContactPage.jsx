import { useState } from 'react';
import PageHero from '../components/common/PageHero';

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.37 9.5 19.79 19.79 0 01.28 4.83 2 2 0 012.27 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+629 555-0129',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'demo@example.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Address',
    value: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: '13px 16px',
    color: 'rgba(255,255,255,0.85)',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.875rem',
    outline: 'none',
    width: '100%',
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif" }}>
      <PageHero title="Contact" />

      <section className="w-full bg-[#0a0a0a] py-20 px-5 md:px-10 lg:px-36">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left: info */}
          <div className="lg:w-[38%] flex-shrink-0">
            <p className="flex items-center gap-1 text-[#6dbf67] text-xs font-bold tracking-widest uppercase mb-4">
              <span>+</span>GET IN TOUCH
            </p>
            <h2 className="text-white font-bold leading-tight mb-6" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
              Let's Start a <span className="text-[#e8435a] italic">Conversation</span>
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 340 }}>
              Have a project in mind or just want to say hello? Fill out the form and we'll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)', color: '#e8435a' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold mb-0.5">{item.label}</p>
                    <p className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="flex-1 rounded-2xl p-8"
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Full Name</label>
                <input style={inputStyle} placeholder="John Doe" value={form.name} onChange={set('name')} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Email Address</label>
                <input style={inputStyle} type="email" placeholder="john@example.com" value={form.email} onChange={set('email')} />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Subject</label>
              <input style={inputStyle} placeholder="How can we help?" value={form.subject} onChange={set('subject')} />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Message</label>
              <textarea
                rows={5}
                style={{ ...inputStyle, resize: 'none' }}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={set('message')}
              />
            </div>
            <button
              type="button"
              className="w-full py-3.5 rounded-full text-white text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
              style={{ background: '#e8435a' }}
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
