import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logoImg from '../assets/Logo.png';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-6xl rounded-full bg-white border border-[#0000001A] py-[14px] px-[20px] shadow-sm flex items-center justify-between">
      <div className="flex items-center pl-2">
        <Link to="/">
          <img src={logoImg} alt="Rootwise Logo" className="h-8 object-contain" />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
        <Link to="/" className={`flex items-center gap-1.5 hover:text-black transition-colors ${path === '/' ? 'text-black font-semibold' : ''}`}>
          {path === '/' && <div className="w-1.5 h-1.5 rounded-full bg-[#4EB74B]"></div>}
          <span>Home</span>
        </Link>
        <Link to="/calculator" className={`flex items-center gap-1.5 hover:text-black transition-colors ${path === '/calculator' ? 'text-black font-semibold' : ''}`}>
          {path === '/calculator' && <div className="w-1.5 h-1.5 rounded-full bg-[#4EB74B]"></div>}
          <span>Case Study</span>
        </Link>
        <Link to="/pricing" className={`flex items-center gap-1.5 hover:text-black transition-colors ${path === '/pricing' ? 'text-black font-semibold' : ''}`}>
          {path === '/pricing' && <div className="w-1.5 h-1.5 rounded-full bg-[#4EB74B]"></div>}
          <span>Pricing Plans</span>
        </Link>
        <Link to="/integration" className={`flex items-center gap-1.5 hover:text-black transition-colors ${path === '/integration' ? 'text-black font-semibold' : ''}`}>
          {path === '/integration' && <div className="w-1.5 h-1.5 rounded-full bg-[#4EB74B]"></div>}
          <span>Integration</span>
        </Link>
      </div>

      <button className="bg-[#4EB74B] text-white rounded-full py-1.5 pl-5 pr-1.5 flex items-center gap-3 hover:bg-green-600 transition-colors">
        <span className="font-medium text-[15px]">Contact Us</span>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
          <Phone size={14} className="fill-current" />
        </div>
      </button>
    </nav>
  );
}
