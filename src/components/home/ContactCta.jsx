import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].contactCta.modal;
  const offerings = translations[lang].contactCta.offerings;

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl p-7 sm:p-9"
        style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(255,255,255,0.07)' }}
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.2" strokeLinecap="round">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>

        {sent ? (
          <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(109,191,103,0.15)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e01b45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg">{t.successTitle}</p>
            <p className="text-white/40 text-sm">{t.successBody}</p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-full text-white text-xs font-semibold tracking-wider uppercase transition-opacity hover:opacity-80"
              style={{ background: '#e8435a' }}
            >
              {t.close}
            </button>
          </div>
        ) : (
          <>
            <p className="text-[#e01b45] text-[10px] font-semibold tracking-widest uppercase mb-2">
              {t.label}
            </p>
            <h3 className="text-white font-bold text-xl sm:text-2xl leading-snug mb-6">
              {t.headline1}<br />
              <span className="text-white/30 font-normal">{t.headline2}</span>
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder={t.namePlaceholder}
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="flex-1 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:ring-1 focus:ring-[#e8435a]/50 transition"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                />
                <input
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="flex-1 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:ring-1 focus:ring-[#e8435a]/50 transition"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                />
              </div>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#e8435a]/50 transition appearance-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: form.service ? 'white' : 'rgba(255,255,255,0.3)',
                }}
              >
                <option value="" disabled>{t.serviceLabel}</option>
                {offerings.map((o) => (
                  <option key={o.value} value={o.value} style={{ background: '#1a1a1a', color: 'white' }}>{o.label}</option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder={t.messagePlaceholder}
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:ring-1 focus:ring-[#e8435a]/50 transition resize-none"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              />

              <button
                type="submit"
                className="w-full py-3 rounded-full text-white text-sm font-semibold tracking-wider uppercase transition-opacity hover:opacity-85"
                style={{ background: '#e8435a' }}
              >
                {t.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function ContactCta() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].contactCta;

  return (
    <>
      <section
        className="relative w-full bg-[#0a0a0a] py-16 sm:py-20 px-4 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

          <p className="text-[#e01b45] text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            {t.label}
          </p>

          <h2
            className="text-white font-bold leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
          >
            {t.headline1}{' '}
            <span className="text-[#e8435a] italic">{t.headline2}</span>
          </h2>

          <p className="text-white/40 text-sm font-normal leading-relaxed max-w-lg">
            {t.body}
          </p>

          {/* Service pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-1">
            {t.offerings.map((item) => (
              <span
                key={item.value}
                className="px-5 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => setOpen(true)}
              className="px-7 py-3 rounded-full text-white text-sm font-semibold tracking-wider uppercase transition-opacity hover:opacity-85"
              style={{ background: '#e8435a' }}
            >
              {t.cta}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-colors"
              aria-label="Contact"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
}
