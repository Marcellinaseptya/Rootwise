import React from 'react';
import footerImg from '../assets/Footer.png';
import logoImg from '../assets/Logo.png';
import calculatorImg from '../assets/calculator.png';

export default function Footer() {
  return (
    <>
      {/* Call to Action Section */}
      <div className="relative w-full" style={{ minHeight: '600px' }}>
        <img 
          src={calculatorImg} 
          alt="High-Yield Journey" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          
          {/* Top Row */}
          <div className="absolute top-16 left-0 right-0 hidden md:flex justify-between items-center" style={{ padding: '0 10%' }}>
            <span className="text-white font-['Manrope']" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>Organic Farming</span>
            <span className="text-white font-['Manrope']" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>Hydroponics</span>
            <span className="text-white font-['Manrope']" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>Hydroponics</span>
            <span className="text-white font-['Manrope']" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>Farm Management</span>
          </div>

          <h2 className="font-['Geist'] text-white font-normal" style={{ fontSize: '56px', lineHeight: '1.1', marginBottom: '40px', maxWidth: '800px', letterSpacing: '-0.02em' }}>
            Ready to Start Your <br/>
            High-Yield Journey?
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="text-white font-semibold font-['Manrope'] transition-colors hover:bg-green-600" style={{ backgroundColor: '#4EB74B', borderRadius: '9999px', padding: '16px 32px', fontSize: '15px' }}>
              Download Detailed Report
            </button>
            <button className="bg-white text-black font-semibold font-['Manrope'] transition-colors hover:bg-gray-100" style={{ borderRadius: '9999px', padding: '16px 32px', fontSize: '15px' }}>
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full bg-black pt-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-24">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-12 gap-16 lg:gap-12">
          
          {/* Logo and Socials */}
          <div className="flex flex-col gap-10">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logoImg} alt="ROOTWISE" className="h-8 md:h-10 object-contain invert hue-rotate-180" />
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[18px] font-medium font-['Geist'] text-white">Page</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-medium font-['Manrope'] text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Study</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing Plans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integration</a></li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[18px] font-medium font-['Geist'] text-white">Services</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-medium font-['Manrope'] text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Smart Farming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainable Crops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Supply Chain</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[18px] font-medium font-['Geist'] text-white">Resources</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-medium font-['Manrope'] text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Articles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepapers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[18px] font-medium font-['Geist'] text-white">Impact</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-medium font-['Manrope'] text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Farmers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Water Saved</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Land Covered</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Global Reach</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-800 mb-5"></div>

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] font-medium font-['Manrope'] text-gray-400 mb-6">
          <p>© 2026 ROOTWISE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
        
      </div>

      {/* Bottom Image */}
      <div className="w-full flex justify-center -mb-2">
        <img src={footerImg} alt="Rootwise Large Logo" className="w-full max-w-[1920px] object-cover" />
      </div>
    </footer>
    </>
  );
}
