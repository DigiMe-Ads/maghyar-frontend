const plans = [
  {
    price: '399',
    name: 'Starter Plan',
    features: [
      'Business Consultation',
      'Up to 10 Support Hours/Month',
      'Network Monitoring',
      'Email & Software Setup',
      'Monthly Health Reports',
    ],
  },
  {
    price: '399',
    name: 'Starter Plan',
    features: [
      'Business Consultation',
      'Up to 10 Support Hours/Month',
      'Network Monitoring',
      'Email & Software Setup',
      'Monthly Health Reports',
    ],
    recommended: true,
  },
  {
    price: '399',
    name: 'Starter Plan',
    features: [
      'Business Consultation',
      'Up to 10 Support Hours/Month',
      'Network Monitoring',
      'Email & Software Setup',
      'Monthly Health Reports',
    ],
  },
];

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8435a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function PricingCard({ plan }) {
  return (
    <div className="relative" style={{ paddingTop: plan.recommended ? 0 : 0 }}>
      {/* Recommended badge — sits just above the card */}
      {plan.recommended && (
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
          Recommended
        </div>
      )}

      {/* Card */}
      <div
        className="flex flex-col p-7"
        style={{
          background: '#161616',
          borderRadius: '20px',
          marginTop: plan.recommended ? -20 : 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Price */}
        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-white" style={{ fontSize: '1rem', alignSelf: 'flex-start', marginTop: 10 }}>$</span>
          <span
            className="text-white font-black leading-none"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 3.8rem)' }}
          >
            {plan.price}
          </span>
          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
            / Monthly
          </span>
        </div>

        {/* Plan name label */}
        <div
          className="rounded-xl flex items-center justify-center mb-5"
          style={{ background: '#0f0f0f', padding: '11px 20px' }}
        >
          <span style={{ color: '#e8435a', fontSize: '0.9rem', fontWeight: 400 }}>
            {plan.name}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 20 }} />

        {/* Features */}
        <ul className="flex flex-col gap-4 flex-1 mb-8">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="flex-shrink-0"><CheckIcon /></span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.83rem' }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          className="w-full py-3.5 rounded-full text-white text-sm font-normal tracking-wide hover:opacity-85 transition-opacity"
          style={{ background: '#1e1e1e' }}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default function PricingCards() {
  return (
    <section
      className="w-full bg-[#0a0a0a] px-5 md:px-10 lg:px-16 py-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
        style={{ alignItems: 'end' }}
      >
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>
    </section>
  );
}
