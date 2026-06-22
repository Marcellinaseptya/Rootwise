import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/HomePage/Homepage';
import PricingPage from './pages/PricingPage';
import CalculatorPage from './pages/CalculatorPage';
import IntegrationPage from './pages/IntegrationPage';
import FieldAnalyticsPage from './pages/FieldAnalyticsPage';
import DashboardPage from './pages/DashboardPage';
import AiDiagnosisPage from './pages/AiDiagnosisPage';
import SmartIrrigationPage from './pages/SmartIrrigationPage';
import WeatherInsightPage from './pages/WeatherInsightPage';
import InventoryPage from './pages/InventoryPage';
import LivestockPage from './pages/LivestockPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/admin');

  return (
    <div className={`min-h-screen ${isDashboard ? 'bg-[#F7F7F7]' : 'bg-white'}`}>
      {!isDashboard && <Navbar />}
      <main>
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
    </div>
  );
}

export default App;


