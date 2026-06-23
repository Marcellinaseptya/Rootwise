import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/user/Home/Home';
import PricingPage from './pages/user/Pricing/Pricing';
import CalculatorPage from './pages/user/Calculator/Calculator';
import IntegrationPage from './pages/user/Integration/Integration';
import FieldAnalyticsPage from './pages/admin/Analytics/Analytics';
import DashboardPage from './pages/admin/Dashboard/Dashboard';
import AiDiagnosisPage from './pages/admin/AiDiagnosis/AiDiagnosis';
import SmartIrrigationPage from './pages/admin/Irrigation/SmartIrrigation';
import WeatherInsightPage from './pages/admin/Weather/WeatherInsight';
import InventoryPage from './pages/admin/Inventory/Inventory';
import LivestockPage from './pages/admin/Livestock/Livestock';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/admin');
  const [loading, setLoading] = useState(true);

  // Check if it's the initial load
  useEffect(() => {
    // Optionally check if we've shown it this session
    // const hasShownSplash = sessionStorage.getItem('hasShownSplash');
    // if (hasShownSplash) { setLoading(false); return; }
    
    // The splash screen component handles its own timing and will call finishLoading
  }, []);

  const finishLoading = () => {
    setLoading(false);
    // sessionStorage.setItem('hasShownSplash', 'true');
  };

  return (
    <div className={`min-h-screen ${isDashboard ? 'bg-[#F7F7F7]' : 'bg-white'}`}>
      <AnimatePresence>
        {loading && <SplashScreen finishLoading={finishLoading} />}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col min-h-screen"
        >
          {!isDashboard && <Navbar />}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/integration" element={<IntegrationPage />} />
              <Route path="/admin" element={<DashboardPage />} />
              <Route path="/admin/dashboard" element={<DashboardPage />} />
              <Route path="/admin/analytics" element={<FieldAnalyticsPage />} />
              <Route path="/admin/ai-diagnosis" element={<AiDiagnosisPage />} />
              <Route path="/admin/irrigation" element={<SmartIrrigationPage />} />
              <Route path="/admin/weather" element={<WeatherInsightPage />} />
              <Route path="/admin/inventory" element={<InventoryPage />} />
              <Route path="/admin/livestock" element={<LivestockPage />} />
            </Routes>
          </main>
          {!isDashboard && <Footer />}
        </motion.div>
      )}
    </div>
  );
}

export default App;


