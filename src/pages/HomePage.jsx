import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import About from '../components/home/About';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Faq from '../components/home/Faq';
import Team from '../components/home/Team';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';
import Blog from '../components/home/Blog';
import Marquee from '../components/home/Marquee';
import ContactCta from '../components/home/ContactCta';
import CaseStudies from '../components/home/CaseStudies';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Services />
<CaseStudies />
      <WhyChooseUs />
      {/* <Faq />
      <Team />
      <Benefits />
      <Testimonials />
      <Blog /> */}
      <ContactCta />
      <Marquee />
    </main>
  );
}