import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Bell,
  LayoutDashboard,
  BarChart2,
  Stethoscope,
  Droplets,
  CloudSun,
  Package,
  PiggyBank,
  Menu,
  X
} from 'lucide-react';
import avatarImg from '../assets/avatar_michael_1781913917589.png';
import rootwiseLogo from '../assets/Logo.png';

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const path = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getSidebarItemClass = (itemPath) => {
    return path === itemPath 
      ? "flex items-center gap-3 bg-[#3AB038] text-white px-4 py-3 rounded-[100px] font-semibold"
      : "flex items-center gap-3 text-gray-600 hover:bg-gray-200 px-4 py-3 rounded-xl transition-colors";
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden font-['Manrope'] p-3 md:p-6 gap-4 relative">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-3 md:inset-y-6 left-3 md:left-6 z-50 w-[240px] bg-[#F7F7F7] rounded-[24px] flex flex-col justify-between py-10 h-[calc(100vh-24px)] md:h-[calc(100vh-48px)] flex-shrink-0 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[120%] lg:translate-x-0'}`}
      >
        
        <div className="px-6 relative">
          {/* Close Button for Mobile */}
          <button 
            className="absolute top-0 right-4 lg:hidden text-gray-500 hover:text-black"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>

          {/* Logo */}
          <div className="flex items-center mb-12">
            <img src={rootwiseLogo} alt="Rootwise Logo" className="w-[140px] md:w-[160px] h-auto object-contain" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 text-sm">
            <Link onClick={() => setIsSidebarOpen(false)} to="/admin/dashboard" className={getSidebarItemClass('/admin/dashboard')}>
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link onClick={() => setIsSidebarOpen(false)} to="/admin/analytics" className={getSidebarItemClass('/admin/analytics')}>
              <BarChart2 size={20} />
              <span>Field Analytics</span>
            </Link>
            <Link onClick={() => setIsSidebarOpen(false)} to="/admin/ai-diagnosis" className={getSidebarItemClass('/admin/ai-diagnosis')}>
              <Stethoscope size={20} />
              <span>AI Diagnosis</span>
            </Link>
            <Link onClick={() => setIsSidebarOpen(false)} to="/admin/irrigation" className={getSidebarItemClass('/admin/irrigation')}>
              <Droplets size={20} />
              <span>Smart Irrigation</span>
            </Link>
            <Link onClick={() => setIsSidebarOpen(false)} to="/admin/weather" className={getSidebarItemClass('/admin/weather')}>
              <CloudSun size={20} />
              <span>Weather Insight</span>
            </Link>
            <Link onClick={() => setIsSidebarOpen(false)} to="/admin/inventory" className={getSidebarItemClass('/admin/inventory')}>
              <Package size={20} />
              <span>Inventory</span>
            </Link>
            <Link onClick={() => setIsSidebarOpen(false)} to="/admin/livestock" className={getSidebarItemClass('/admin/livestock')}>
              <PiggyBank size={20} />
              <span>Livestock</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden gap-4 relative">
        
        {/* Header Card */}
        <header className="flex justify-between items-center bg-[#F7F7F7] rounded-[24px] px-4 md:px-6 py-4 flex-shrink-0">
          <div className="flex items-center gap-3 w-full max-w-[400px]">
            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-black bg-white rounded-full shadow-sm"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white border-0 rounded-full py-2.5 md:py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow shadow-sm text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4 ml-2">
            <button className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center relative hover:bg-gray-50 transition-colors shadow-sm">
              <Bell className="text-gray-600" size={18} />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3">
              <img src={avatarImg} alt="John Michael" className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover shadow-sm" />
              <div className="hidden lg:block">
                <p className="font-semibold text-sm leading-tight text-gray-900">John Michael</p>
                <p className="text-xs text-gray-500">Johnathan20@gmail.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content Grid */}
        <div className="flex-1 flex flex-col gap-4 bg-[#F7F7F7] rounded-[24px] p-4 md:p-6 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}
