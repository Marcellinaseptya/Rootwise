import React, { useState } from 'react';
import { Sun, Leaf, Atom, Check } from 'lucide-react';
import { Testimonials, FAQ } from '../components/HomePage/Homepage';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      <div className="w-full pt-44 pb-20 bg-white relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#E8F3E9] to-transparent rounded-full blur-[100px] opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-24 flex flex-col items-center relative z-10">
        
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-6">
          <Sun size={20} className="text-black" />
          <span className="text-[16px] font-medium font-['Manrope'] text-black tracking-wide">Pricing Plans</span>
        </div>

        {/* Title */}
        <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-normal font-['Geist'] text-black text-center leading-[1.05] tracking-tight mb-6">
          <span className="block mb-1 md:mb-2">Choose Your</span>
          <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4">
            <span>Nature</span>
            <div className="flex items-center gap-2">
              <div className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full border-[1.5px] border-black flex items-center justify-center">
                <Leaf size={24} strokeWidth={1.2} className="md:w-[28px] md:h-[28px] transform -rotate-[20deg]" />
              </div>
              <div className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full border-[1.5px] border-black flex items-center justify-center">
                <Atom size={24} strokeWidth={1.2} className="md:w-[28px] md:h-[28px]" />
              </div>
            </div>
            <span>Intelligence</span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] md:text-[17px] font-medium font-['Manrope'] text-gray-600 text-center max-w-2xl mb-12 tracking-wide">
          ROOTWISE illustrates how products cater to the needs of farmers globally,
        </p>

        {/* Toggle */}
        <div className="flex items-center p-[5px] rounded-full border border-gray-200 bg-white mb-20 w-[360px] max-w-full justify-between shadow-sm">
          <button 
            onClick={() => setIsAnnual(true)}
            className={`flex-1 h-[48px] rounded-full flex items-center justify-center gap-2 transition-all ${isAnnual ? 'bg-[#165514] text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
          >
            <span className="font-semibold text-[15px] font-['Manrope']">Annual</span>
            {isAnnual && (
              <span className="px-3 py-[2px] rounded-full border border-white/40 text-[11px] font-medium tracking-wide">20% Off</span>
            )}
          </button>
          <button 
            onClick={() => setIsAnnual(false)}
            className={`flex-1 h-[48px] rounded-full flex items-center justify-center transition-all ${!isAnnual ? 'bg-[#165514] text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
          >
            <span className="font-semibold text-[15px] font-['Manrope']">Monthly</span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          
          {/* Basic Plan */}
          <div className="bg-[#F8F9FA] rounded-[32px] p-8 lg:p-10 flex flex-col">
            <h3 className="text-[24px] font-bold font-['Geist'] text-black mb-4">Basic</h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-[56px] font-normal font-['Geist'] leading-none text-black">${isAnnual ? '15' : '19'}</span>
              <span className="text-[14px] font-medium font-['Manrope'] text-gray-500 mb-2">/Month</span>
            </div>
            <p className="text-[14px] font-normal font-['Manrope'] text-gray-600 mb-8 h-10">
              Perfect for small farm owners and beginners
            </p>
            
            <div className="flex flex-col gap-5 flex-1">
              <h4 className="text-[15px] font-bold font-['Manrope'] text-black">Features</h4>
              <ul className="flex flex-col gap-4 text-[14px] font-medium font-['Manrope'] text-gray-600">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Up To 5 Hectares Land Monitoring</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Real-Time Weather Alerts</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Basic Soil Health Analysis</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Community Forum Access</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Dedicated Phone Support</li>
              </ul>

              <h4 className="text-[15px] font-bold font-['Manrope'] text-black mt-4">Priority Support</h4>
              <ul className="flex flex-col gap-4 text-[14px] font-medium font-['Manrope'] text-gray-600">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Email Support</li>
              </ul>
            </div>

            <button className="w-full h-[56px] rounded-full bg-[#4EB74B] hover:bg-green-600 transition-colors text-white font-bold text-[16px] font-['Manrope'] mt-10">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#165514] rounded-[32px] p-8 lg:p-10 flex flex-col relative transform lg:-translate-y-4 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[24px] font-bold font-['Geist'] text-white">Pro</h3>
              <span className="bg-white text-[#165514] text-[12px] font-bold px-3 py-1 rounded-full">Most Popular</span>
            </div>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-[56px] font-normal font-['Geist'] leading-none text-white">${isAnnual ? '45' : '55'}</span>
              <span className="text-[14px] font-medium font-['Manrope'] text-white/80 mb-2">/Month</span>
            </div>
            <p className="text-[14px] font-normal font-['Manrope'] text-white/80 mb-8 h-10">
              Perfect for growing commercial farms
            </p>
            
            <div className="flex flex-col gap-5 flex-1">
              <h4 className="text-[15px] font-bold font-['Manrope'] text-white">Features</h4>
              <ul className="flex flex-col gap-4 text-[14px] font-medium font-['Manrope'] text-white/90">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Up To 50 Hectares Land Monitoring</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Satellite Imagery (Weekly Updates)</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> AI Pest & Disease Detection</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Irrigation Automation Integration</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Yield Prediction Analytics</li>
              </ul>

              <h4 className="text-[15px] font-bold font-['Manrope'] text-white mt-4">Priority Support</h4>
              <ul className="flex flex-col gap-4 text-[14px] font-medium font-['Manrope'] text-white/90">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> 24/7 Priority Chat & Email</li>
              </ul>
            </div>

            <button className="w-full h-[56px] rounded-full bg-white hover:bg-gray-100 transition-colors text-[#165514] font-bold text-[16px] font-['Manrope'] mt-10">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#F8F9FA] rounded-[32px] p-8 lg:p-10 flex flex-col">
            <h3 className="text-[24px] font-bold font-['Geist'] text-black mb-4">Premium</h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-[56px] font-normal font-['Geist'] leading-none text-black">${isAnnual ? '99' : '119'}</span>
              <span className="text-[14px] font-medium font-['Manrope'] text-gray-500 mb-2">/Month</span>
            </div>
            <p className="text-[14px] font-normal font-['Manrope'] text-gray-600 mb-8 h-10">
              Complete solution for large-scale enterprises
            </p>
            
            <div className="flex flex-col gap-5 flex-1">
              <h4 className="text-[15px] font-bold font-['Manrope'] text-black">Features</h4>
              <ul className="flex flex-col gap-4 text-[14px] font-medium font-['Manrope'] text-gray-600">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Unlimited Land Monitoring</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Daily High-Res Satellite Data</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Advanced Drone Mapping Integration</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Multi-User Fleet Management</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Supply Chain & Logistics Tools</li>
              </ul>

              <h4 className="text-[15px] font-bold font-['Manrope'] text-black mt-4">Priority Support</h4>
              <ul className="flex flex-col gap-4 text-[14px] font-medium font-['Manrope'] text-gray-600">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#4EB74B] mt-0.5 shrink-0" /> Dedicated Account Manager</li>
              </ul>
            </div>

            <button className="w-full h-[56px] rounded-full bg-[#4EB74B] hover:bg-green-600 transition-colors text-white font-bold text-[16px] font-['Manrope'] mt-10">
              Get Started
            </button>
          </div>

        </div>
      </div>
      </div>
      <Testimonials />
      <FAQ />
    </>
  );
}
