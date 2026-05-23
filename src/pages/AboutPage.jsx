import PageHero from '../components/common/PageHero';
import About from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About" />
      <About />
      <WhyChooseUs />
    </main>
  );
}
