import PageHero        from '../components/common/PageHero';
import WhoWeAre       from '../components/about/WhoWeAre';
import FeaturesSection   from '../components/about/FeaturesSection';
import ServicesCarousel from '../components/about/ServicesCarousel';

export default function AboutPage() {
  return (
    <main>
      <PageHero titleKey="about" />
      <WhoWeAre />
      <FeaturesSection />
      <ServicesCarousel />
    </main>
  );
}
