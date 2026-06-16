import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

const ACCESS_KEY = 'd641238d-0554-48c5-8250-97c79c7a9446';

const planPrices = [
  { priceFrom: '350,000', priceTo: '450,000', recommended: false },
  { priceFrom: '500,000', priceTo: '750,000', recommended: true },
  { priceFrom: '750,000', priceTo: null,      recommended: false },
];

const inputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.15)',
  color: 'rgba(255,255,255,0.85)',
  padding: '10px 0',
  outline: 'none',
  width: '100%',
  fontSize: '0.85rem',
  fontFamily: "'Inter', sans-serif",
};

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8435a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function QuoteDialog({ planIndex, planNameEn, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');
  const { lang } = useLanguage();
  const t = translations[lang].pricing;
  const td = t.dialog;
  const plan = t.plans[planIndex];
  const prices = planPrices[planIndex];

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Quote Request — ${planNameEn} — Magyar Digital`,
          name: form.name,
          email: form.email,
          message: `Plan: ${planNameEn}\nPrice range: HUF ${prices.priceFrom}${prices.priceTo ? ` – ${prices.priceTo}` : '+'}\nPhone: ${form.phone || 'N/A'}\n\n${form.message || 'No additional message.'}`,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8"
        style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.1)', fontFamily: "'Inter', sans-serif" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex items-center justify-center w-7 h-7 rounded-full hover:opacity-70 transition-opacity"
          style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1 }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Header */}
        <p className="text-[#e01b45] text-xs font-semibold tracking-widest uppercase mb-2 flex items-center gap-1">
          <span>+</span> {td.label.replace('+ ', '')}
        </p>
        <h3 className="text-white font-bold mb-1" style={{ fontSize: '1.25rem' }}>
          {plan.name}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', marginBottom: '1.75rem' }}>
          HUF {prices.priceFrom}{prices.priceTo ? ` – ${prices.priceTo}` : '+'} · {td.feeLabel}
        </p>

        {status === 'success' ? (
          <div className="text-center py-8">
            <p className="text-white font-semibold mb-2">{td.successTitle}</p>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.83rem' }}>{td.successBody}</p>
            <button
              onClick={onClose}
              className="mt-6 px-8 py-3 rounded-full text-white text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
              style={{ background: '#e8435a' }}
            >
              {td.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <style>{`.quote-input::placeholder { color: rgba(255,255,255,0.25); }`}</style>

            <input className="quote-input" style={inputStyle} placeholder={td.namePlaceholder}    value={form.name}    onChange={set('name')}    required />
            <input className="quote-input" style={inputStyle} type="email" placeholder={td.emailPlaceholder}   value={form.email}   onChange={set('email')}   required />
            <input className="quote-input" style={inputStyle} type="tel"   placeholder={td.phonePlaceholder}   value={form.phone}   onChange={set('phone')} />
            <textarea
              className="quote-input"
              style={{ ...inputStyle, resize: 'none', minHeight: 80, borderBottom: '1px solid rgba(255,255,255,0.15)' }}
              placeholder={td.messagePlaceholder}
              value={form.message}
              onChange={set('message')}
              rows={3}
            />

            {status === 'error' && (
              <p style={{ color: '#e8435a', fontSize: '0.78rem' }}>{td.error}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 rounded-full text-white text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: '#e8435a', letterSpacing: '0.1em' }}
            >
              {status === 'loading' ? td.sending : td.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function PriceDisplay({ from, to, feeLabel }) {
  return (
    <div className="mb-5">
      <div className="flex items-baseline gap-1 flex-wrap">
        <span className="text-white" style={{ fontSize: '0.85rem', alignSelf: 'flex-start', marginTop: 8, opacity: 0.6 }}>
          HUF
        </span>
        <span className="text-white font-black leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
          {from}{to ? ` – ${to}` : '+'}
        </span>
      </div>
      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>{feeLabel}</span>
    </div>
  );
}

function PricingCard({ planIndex, planNameEn, onQuote }) {
  const { lang } = useLanguage();
  const t = translations[lang].pricing;
  const plan = t.plans[planIndex];
  const prices = planPrices[planIndex];

  return (
    <div className="relative">
      {prices.recommended && (
        <div
          style={{
            background: 'linear-gradient(135deg, #e8435a 0%, #c0304a 100%)',
            borderRadius: '26px 26px 0 0',
            padding: '24px 24px',
            textAlign: 'center',
            color: 'white',
            fontSize: '0.88rem',
            fontWeight: 400,
            letterSpacing: '0.01em',
            position: 'relative',
            zIndex: 0,
          }}
        >
          {t.recommended}
        </div>
      )}

      <div
        className="flex flex-col p-7"
        style={{
          background: '#161616',
          borderRadius: '20px',
          marginTop: prices.recommended ? -20 : 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <PriceDisplay from={prices.priceFrom} to={prices.priceTo} feeLabel={t.oneTimeFee} />

        <div
          className="rounded-xl flex items-center justify-center mb-5"
          style={{ background: '#0f0f0f', padding: '11px 20px' }}
        >
          <span style={{ color: '#e8435a', fontSize: '0.9rem', fontWeight: 400 }}>
            {plan.name}
          </span>
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 20 }} />

        <ul className="flex flex-col gap-4 flex-1 mb-8">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="flex-shrink-0"><CheckIcon /></span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.83rem' }}>{f}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onQuote(planIndex)}
          className="w-full py-3.5 rounded-full text-white text-sm font-normal tracking-wide hover:opacity-85 transition-opacity"
          style={{ background: '#1e1e1e' }}
        >
          {t.getQuote}
        </button>
      </div>
    </div>
  );
}

const EN_PLAN_NAMES = ['Starter Website', 'Business Website', 'Custom Web / eCommerce'];

export default function PricingCards() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section
      className="w-full bg-[#0a0a0a] px-5 md:px-10 lg:px-16 py-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
        style={{ alignItems: 'end', paddingTop: 56 }}
      >
        {planPrices.map((_, i) => (
          <PricingCard key={i} planIndex={i} planNameEn={EN_PLAN_NAMES[i]} onQuote={setSelectedIndex} />
        ))}
      </div>

      {selectedIndex !== null && (
        <QuoteDialog
          planIndex={selectedIndex}
          planNameEn={EN_PLAN_NAMES[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}
