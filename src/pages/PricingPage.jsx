import PageHero from '../components/common/PageHero';

const plans = [
  {
    name: 'Starter',
    price: '29',
    desc: 'Perfect for small businesses and freelancers getting started.',
    features: ['5 Projects', '10GB Storage', 'Basic Analytics', 'Email Support', '1 Team Member'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '79',
    desc: 'Ideal for growing teams that need more power and flexibility.',
    features: ['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support', '10 Team Members', 'Custom Branding'],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    desc: 'For large organisations that need enterprise-grade solutions.',
    features: ['Unlimited Projects', '1TB Storage', 'Full Analytics Suite', 'Dedicated Support', 'Unlimited Members', 'Custom Integrations', 'SLA Guarantee'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6dbf67" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function PricingPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif" }}>
      <PageHero title="Pricing" />

      <section className="w-full bg-[#0a0a0a] py-20 px-5 md:px-10 lg:px-36">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-1 text-[#6dbf67] text-xs font-bold tracking-widest uppercase mb-4">
            <span>+</span>OUR PLANS
          </p>
          <h2 className="leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <span className="text-white font-bold">Simple, Transparent </span>
            <span className="text-[#e8435a] italic font-bold">Pricing</span>
          </h2>
          <p className="text-sm mt-4 mx-auto" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 440 }}>
            Choose a plan that works for your business. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: plan.highlight ? '#e8435a' : '#161616',
                border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: plan.highlight ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)' }}
              >
                {plan.name}
              </p>
              <div className="flex items-end gap-1 mb-3">
                <span
                  className="font-black leading-none"
                  style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', color: plan.highlight ? 'white' : '#e8435a' }}
                >
                  ${plan.price}
                </span>
                <span className="text-sm mb-1" style={{ color: plan.highlight ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.35)' }}>/mo</span>
              </div>
              <p className="text-xs leading-relaxed mb-6" style={{ color: plan.highlight ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.38)' }}>
                {plan.desc}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckIcon />
                    <span className="text-xs" style={{ color: plan.highlight ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.6)' }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="w-full py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-85"
                style={{
                  background: plan.highlight ? 'white' : '#e8435a',
                  color: plan.highlight ? '#e8435a' : 'white',
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
