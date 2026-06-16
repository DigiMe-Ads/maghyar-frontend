import PageHero      from '../components/common/PageHero';
import ContactSection from '../components/contact/ContactSection';

export default function ContactPage() {
  return (
    <main>
      <PageHero titleKey="contact" />
      <ContactSection />
    </main>
  );
}
