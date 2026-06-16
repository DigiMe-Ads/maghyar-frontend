import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar    from './components/common/Navbar';
import Footer    from './components/common/Footer';
import HomePage  from './pages/HomePage';
import AboutPage   from './pages/AboutPage';
import TeamPage    from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import ScrollToTop from './ui/ScrollToTop';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/about"   element={<AboutPage />} />
          {/* <Route path="/team"    element={<TeamPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}