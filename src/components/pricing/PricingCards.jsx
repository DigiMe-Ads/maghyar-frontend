const plans = [
  {
    name: 'Starter Website',
    priceFrom: '350,000',
    priceTo: '450,000',
    features: [
      'Up to 4 fully responsive pages',
      'React SPA (Single-Page Application)',
      'Component-based architecture',
      'Mobile-first responsive design',
      'Basic SEO meta tags & Open Graph',
      'Contact form with Web3Forms',
      'Performance-optimised build (Vite)',
      'Git repository + deployment-ready',
      '3 rounds of design revisions',
      '30-day post-launch bug support',
      'Basic Lighthouse performance audit',
    ],
  },
  {
    name: 'Business Website',
    priceFrom: '500,000',
    priceTo: '750,000',
    recommended: true,
    features: [
      'Up to 8 fully responsive pages',
      'React SPA / Multi-page application',
      'Custom component architecture',
      'Mobile-first responsive design',
      'Advanced SEO & Open Graph tags',
      'Contact form + custom integrations',
      'Performance-optimised build (Vite)',
      'Git repository + deployment-ready',
      '3 rounds of design revisions',
      '60-day post-launch bug support',
      'Full Lighthouse performance audit',
    ],
  },
  {
    name: 'Custom Web / eCommerce',
    priceFrom: '750,000',
    priceTo: null,
    features: [
      'Unlimited pages & custom features',
      'React / Next.js application',
      'eCommerce & payment integration',
      'Mobile-first responsive design',
      'Full SEO & Open Graph integration',
      'Custom forms & API integrations',
      'Performance-optimised build (Vite)',
      'Git repository + deployment-ready',
      'Unlimited design revisions',
      '90-day post-launch bug support',
      'Lighthouse audit + optimisation',
    ],
  },
];

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8435a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function PriceDisplay({ from, to }) {
  return (
    <div className="mb-5">
      <div className="flex items-baseline gap-1 flex-wrap">
        <span className="text-white" style={{ fontSize: '0.85rem', alignSelf: 'flex-start', marginTop: 8, opacity: 0.6 }}>
          HUF
        </span>
        <span
          className="text-white font-black leading-none"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
        >
          {from}
          {to ? ` – ${to}` : '+'}
        </span>
      </div>
      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
        one-time project fee
      </span>
    </div>
  );
}

function PricingCard({ plan }) {
  return (
    <div className="relative">
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
        <PriceDisplay from={plan.priceFrom} to={plan.priceTo} />

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
          className="w-full py-3.5 rounded-full text-white text-sm font-normal tracking-wide hover:opacity-85 transition-opacity"
          style={{ background: '#1e1e1e' }}
        >
          Get a Quote
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
        style={{ alignItems: 'end', paddingTop: 56 }}
      >
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>
    </section>
  );
}
