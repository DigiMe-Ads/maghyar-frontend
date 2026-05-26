import PageHero      from '../components/common/PageHero';
import WhoWeAre     from '../components/about/WhoWeAre';
import VideoSection from '../components/about/VideoSection';

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About" />
      <WhoWeAre />
      <VideoSection />
    </main>
  );
}
