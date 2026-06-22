import React from 'react';
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
} from 'lucide-react';
import avatarImg from '../assets/avatar_michael_1781913917589.png';
import rootwiseLogo from '../assets/Logo.png';

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const path = location.pathname;

  const getSidebarItemClass = (itemPath) => {
    return path === itemPath 
      ? "flex items-center gap-3 bg-[#3AB038] text-white px-4 py-3 rounded-[100px] font-semibold"
      : "flex items-center gap-3 text-gray-600 hover:bg-gray-200 px-4 py-3 rounded-xl transition-colors";
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden font-['Manrope'] p-4 md:p-6 gap-4">
      
      {/* Sidebar */}
      <aside className="w-[240px] bg-[#F7F7F7] rounded-[24px] flex flex-col justify-between py-10 h-full flex-shrink-0">
        
        <div className="px-6">
          {/* Logo */}
          <div className="flex items-center mb-12">
            <img src={rootwiseLogo} alt="Rootwise Logo" className="w-[160px] h-auto object-contain" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/admin/dashboard" className={getSidebarItemClass('/admin/dashboard')}>
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/analytics" className={getSidebarItemClass('/admin/analytics')}>
              <BarChart2 size={20} />
              <span>Field Analytics</span>
            </Link>
            <Link to="/admin/ai-diagnosis" className={getSidebarItemClass('/admin/ai-diagnosis')}>
              <Stethoscope size={20} />
              <span>AI Diagnosis</span>
            </Link>
            <Link to="/admin/irrigation" className={getSidebarItemClass('/admin/irrigation')}>
              <Droplets size={20} />
              <span>Smart Irrigation</span>
            </Link>
            <Link to="/admin/weather" className={getSidebarItemClass('/admin/weather')}>
              <CloudSun size={20} />
              <span>Weather Insight</span>
            </Link>
            <Link to="/admin/inventory" className={getSidebarItemClass('/admin/inventory')}>
              <Package size={20} />
              <span>Inventory</span>
            </Link>
            <Link to="/admin/livestock" className={getSidebarItemClass('/admin/livestock')}>
              <PiggyBank size={20} />
              <span>Livestock</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden gap-4 relative">
        
        {/* Header Card */}
        <header className="flex justify-between items-center bg-[#F7F7F7] rounded-[24px] px-6 py-4 flex-shrink-0">
          <div className="relative w-full max-w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white border-0 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow shadow-sm"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative hover:bg-gray-50 transition-colors shadow-sm">
              <Bell className="text-gray-600" size={20} />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3">
              <img src={avatarImg} alt="John Michael" className="w-10 h-10 rounded-full object-cover shadow-sm" />
              <div className="hidden md:block">
                <p className="font-semibold text-sm leading-tight text-gray-900">John Michael</p>
                <p className="text-xs text-gray-500">Johnathan20@gmail.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content Grid */}
        <div className="flex-1 flex flex-col gap-4 bg-[#F7F7F7] rounded-[24px] p-6 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
