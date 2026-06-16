import PageHero    from '../components/common/PageHero';
import PricingCards from '../components/pricing/PricingCards';

export default function PricingPage() {
  return (
    <main>
      <PageHero titleKey="pricing" />
      <PricingCards />
    </main>
  );
}
