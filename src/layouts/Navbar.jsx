import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/Logo.png';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%] max-w-6xl rounded-full bg-white border border-[#0000001A] py-3 md:py-[14px] px-4 md:px-[20px] shadow-sm flex items-center justify-between">
        <div className="flex items-center pl-2">
          <Link to="/">
            <img src={logoImg} alt="Rootwise Logo" className="h-6 md:h-8 object-contain" />
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">
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

        <div className="hidden lg:flex">
          <button className="bg-[#4EB74B] text-white rounded-full py-1.5 pl-5 pr-1.5 flex items-center gap-3 hover:bg-green-600 transition-colors">
            <span className="font-medium text-[15px]">Contact Us</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
              <Phone size={14} className="fill-current" />
            </div>
          </button>
        </div>

        <button 
          className="lg:hidden p-2 text-gray-700 hover:text-black cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-3xl shadow-xl border border-gray-100 z-40 p-6 flex flex-col gap-6 lg:hidden"
          >
            <div className="flex flex-col gap-4 text-[16px] font-medium text-gray-700">
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className={`pb-2 border-b border-gray-100 ${path === '/' ? 'text-black font-semibold' : ''}`}>Home</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/calculator" className={`pb-2 border-b border-gray-100 ${path === '/calculator' ? 'text-black font-semibold' : ''}`}>Case Study</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/pricing" className={`pb-2 border-b border-gray-100 ${path === '/pricing' ? 'text-black font-semibold' : ''}`}>Pricing Plans</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/integration" className={`pb-2 border-b border-gray-100 ${path === '/integration' ? 'text-black font-semibold' : ''}`}>Integration</Link>
            </div>
            <button className="bg-[#4EB74B] text-white rounded-full py-3 px-6 flex items-center justify-center gap-3 hover:bg-green-600 w-full transition-colors mt-2 cursor-pointer">
              <span className="font-medium">Contact Us</span>
              <Phone size={16} className="fill-current" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
