import PageHero        from '../components/common/PageHero';
import WhoWeAre       from '../components/about/WhoWeAre';
import VideoSection   from '../components/about/VideoSection';
import FeaturesSection   from '../components/about/FeaturesSection';
import ServicesCarousel from '../components/about/ServicesCarousel';

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About" />
      <WhoWeAre />
      <VideoSection />
      <FeaturesSection />
      <ServicesCarousel />
    </main>
  );
}
