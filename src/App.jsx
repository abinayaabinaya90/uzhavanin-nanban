import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppDownloadModal from './components/AppDownloadModal';

// Pages
import HomePage from './pages/HomePage';
import CropDetectionPage from './pages/CropDetectionPage';
import WeatherPage from './pages/WeatherPage';
import SchemesPage from './pages/SchemesPage';
import AiAssistantPage from './pages/AiAssistantPage';
import PlantSnapPage from './pages/PlantSnapPage';
import MarketplacePage from './pages/MarketplacePage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#faf9f5] text-stone-800 font-sans selection:bg-agri-200 selection:text-agri-950">
          {/* Top Sticky Header */}
          <Navbar onOpenDownload={() => setIsDownloadOpen(true)} />

          {/* Page Routing */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage onOpenDownload={() => setIsDownloadOpen(true)} />} />
              <Route path="/crop-detection" element={<CropDetectionPage onOpenDownload={() => setIsDownloadOpen(true)} />} />
              <Route path="/weather" element={<WeatherPage onOpenDownload={() => setIsDownloadOpen(true)} />} />
              <Route path="/schemes" element={<SchemesPage onOpenDownload={() => setIsDownloadOpen(true)} />} />
              <Route path="/ai-assistant" element={<AiAssistantPage onOpenDownload={() => setIsDownloadOpen(true)} />} />
              <Route path="/plant-snap" element={<PlantSnapPage onOpenDownload={() => setIsDownloadOpen(true)} />} />
              <Route path="/marketplace" element={<MarketplacePage onOpenDownload={() => setIsDownloadOpen(true)} />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback to Home */}
              <Route path="*" element={<HomePage onOpenDownload={() => setIsDownloadOpen(true)} />} />
            </Routes>
          </main>

          {/* Shared Footer */}
          <Footer onOpenDownload={() => setIsDownloadOpen(true)} />

          {/* Global App Download Modal */}
          <AppDownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
