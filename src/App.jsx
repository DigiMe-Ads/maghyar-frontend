import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar    from './components/common/Navbar';
import Footer    from './components/common/Footer';
import HomePage  from './pages/HomePage';
import AboutPage   from './pages/AboutPage';
import TeamPage    from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import GetQuotePage from './pages/GetQuotePage';
import ScrollToTop from './ui/ScrollToTop';

const STANDALONE_PATHS = ['/get-quote'];

function AppShell() {
  const { pathname } = useLocation();
  const isStandalone = STANDALONE_PATHS.includes(pathname);

  return (
    <>
      <ScrollToTop />
      {!isStandalone && <Navbar />}
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/about"     element={<AboutPage />} />
        {/* <Route path="/team"    element={<TeamPage />} /> */}
        <Route path="/contact"   element={<ContactPage />} />
        <Route path="/pricing"   element={<PricingPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
      </Routes>
      {!isStandalone && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </LanguageProvider>
  );
}
