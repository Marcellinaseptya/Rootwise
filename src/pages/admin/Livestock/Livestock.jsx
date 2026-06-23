import React, { useState } from 'react';
import { 
  Sparkles, Wind, SunDim, PlusCircle, ArrowUpCircle, 
  ChevronDown, MoreVertical, Maximize2, User, PiggyBank, HandCoins 
} from 'lucide-react';
import DashboardLayout from '../../../layouts/DashboardLayout';

export default function LivestockPage() {
  
  const gainers = [
    { stock: 'NVDA', nameColor: 'bg-[#4EB74B]', price: '$520.40', change: '+8.2%', marketCap: '$1.2T', sector: 'Semiconductors' },
    { stock: 'TSLA', nameColor: 'bg-red-500', price: '$205.30', change: '+6.5%', marketCap: '$650B', sector: 'Automotive' },
    { stock: 'AAPL', nameColor: 'bg-gray-900', price: '$180.50', change: '+4.9%', marketCap: '$2.8T', sector: 'Technology' },
    { stock: 'SHOP', nameColor: 'bg-[#4EB74B]', price: '$76.20', change: '+3.5%', marketCap: '$110B', sector: 'E-Commerce' },
    { stock: 'MSFT', nameColor: 'bg-orange-500', price: '$410.75', change: '+3.2%', marketCap: '$3.1T', sector: 'Software' },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 pb-6">
        
        {/* Top Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-shrink-0">
          
          {/* Average Load Efficiency */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D5EED4] text-[#1B4332] rounded-xl flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <span className="font-extrabold text-gray-900 text-sm">Average Load Efficiency</span>
            </div>
            <div className="flex justify-between items-end mb-2">
              <div className="font-medium text-[32px] text-gray-900 leading-none font-['Geist']">
                88.4 <span className="text-base font-normal text-gray-500">%</span>
              </div>
              <div className="bg-[#C4E7DC] text-[#1B4332] px-2 py-1 rounded-[12px] text-[11px] font-bold flex items-center gap-1">
                ↑ +14.4%
              </div>
            </div>
            <div className="text-[10px] text-gray-400 text-right mt-1">+1.2% From Daily Target</div>
          </div>

          {/* Renewable Ratio */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D5EED4] text-[#1B4332] rounded-xl flex items-center justify-center">
                <Wind size={20} />
              </div>
              <span className="font-extrabold text-gray-900 text-sm">Renewable Ratio</span>
            </div>
            <div className="flex justify-between items-end mb-2">
              <div className="font-medium text-[32px] text-gray-900 leading-none font-['Geist']">
                76.5 <span className="text-base font-normal text-gray-500">%</span>
              </div>
              <div className="bg-[#FFCFD1] text-red-500 px-2 py-1 rounded-[12px] text-[11px] font-bold flex items-center gap-1">
                ↓ -5.2%
              </div>
            </div>
            <div className="text-[10px] text-gray-400 text-right mt-1">Solar Vs Grid Consumption</div>
          </div>

          {/* Total Energy Generated */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D5EED4] text-[#1B4332] rounded-xl flex items-center justify-center">
                <SunDim size={20} />
              </div>
              <span className="font-extrabold text-gray-900 text-sm">Total Energy Generated</span>
            </div>
            <div className="flex justify-between items-end mb-2">
              <div className="font-medium text-[32px] text-gray-900 leading-none font-['Geist']">
                312 <span className="text-base font-normal text-gray-500">kWh</span>
              </div>
              <div className="bg-[#C4E7DC] text-[#1B4332] px-2 py-1 rounded-[12px] text-[11px] font-bold flex items-center gap-1">
                ↑ +11.4%
              </div>
            </div>
            <div className="text-[10px] text-gray-400 text-right mt-1">+8.3% From Last Month</div>
          </div>

        </div>

        {/* Middle Dashboard Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Portfolio Value */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4" style={{ color: '#212529' }}>
                <PiggyBank size={18} />
                <h3 className="font-semibold text-lg">Portfolio Value</h3>
              </div>
              <div className="flex items-baseline gap-3 mb-6 mt-6">
                <div className="font-medium text-[24px] text-[#212529] leading-none font-['Inter']">$125,670.32</div>
                <div className="text-[#3AB038] font-medium text-xs">+3.2% Today</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex justify-center items-center gap-2 py-3 rounded-xl border border-gray-200 text-gray-800 font-medium text-sm hover:bg-gray-50 transition-colors">
                  <PlusCircle size={16} className="text-gray-700" /> Deposit
                </button>
                <button className="flex justify-center items-center gap-2 py-3 rounded-xl bg-[#4EB74B] text-white font-medium text-sm hover:bg-[#43a040] transition-colors shadow-sm shadow-[#4EB74B]/20">
                  <ArrowUpCircle size={16} /> Withdraw
                </button>
              </div>
            </div>

            {/* Assets Allocation */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-6" style={{ color: '#212529' }}>
                <HandCoins size={18} />
                <h3 className="font-semibold text-lg">Assets Allocation</h3>
              </div>
              
              <div className="flex items-center gap-8 flex-1">
                {/* Donut Chart */}
                <div className="relative w-[130px] h-[130px] flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="rotate-[-90deg] w-full h-full drop-shadow-sm">
                    {/* Stocks: 60% */}
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#4EB74B" strokeWidth="24" strokeDasharray="132 220" />
                    {/* Crypto: 15% */}
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#1D711A" strokeWidth="24" strokeDasharray="33 220" strokeDashoffset="-132" />
                    {/* ETFs: 15% */}
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#72C66F" strokeWidth="24" strokeDasharray="33 220" strokeDashoffset="-165" />
                    {/* Bonds: 10% */}
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#E7F3FF" strokeWidth="24" strokeDasharray="22 220" strokeDashoffset="-198" />
                    <circle cx="50" cy="50" r="23" fill="white" />
                  </svg>
                </div>

                {/* Legend */}
                <div className="flex flex-col justify-center gap-4 flex-1">
                  <div className="flex items-center justify-between text-[13px] font-semibold">
                    <div className="flex items-center gap-3"><div className="w-3.5 h-3.5 rounded-[4px] shadow-sm bg-[#4EB74B]"></div><span className="text-gray-500 font-medium">Stocks</span></div>
                    <span className="text-[#212529]">60%</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px] font-semibold">
                    <div className="flex items-center gap-3"><div className="w-3.5 h-3.5 rounded-[4px] shadow-sm bg-[#1D711A]"></div><span className="text-gray-500 font-medium">Crypto</span></div>
                    <span className="text-[#212529]">15%</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px] font-semibold">
                    <div className="flex items-center gap-3"><div className="w-3.5 h-3.5 rounded-[4px] shadow-sm bg-[#72C66F]"></div><span className="text-gray-500 font-medium">ETFs</span></div>
                    <span className="text-[#212529]">15%</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px] font-semibold">
                    <div className="flex items-center gap-3"><div className="w-3.5 h-3.5 rounded-[4px] shadow-sm bg-[#E7F3FF]"></div><span className="text-gray-500 font-medium">Bonds</span></div>
                    <span className="text-[#212529]">10%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Portfolio Performance Chart) */}
          <div className="lg:col-span-8 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-semibold text-[#212529] text-xl">Portfolio Performance</h3>
                <p className="text-[13px] text-gray-500 mt-1">Stay updated on your portfolio.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-gray-50 p-1 rounded-xl">
                  <div className="flex items-center text-[12px] font-medium text-gray-400">
                    <span className="cursor-pointer hover:text-gray-900 px-3.5 py-1.5 rounded-lg transition-colors">1D</span>
                    <span className="cursor-pointer hover:text-gray-900 px-3.5 py-1.5 rounded-lg transition-colors">7D</span>
                    <span className="cursor-pointer hover:text-gray-900 px-3.5 py-1.5 rounded-lg transition-colors">1M</span>
                    <span className="cursor-pointer hover:text-gray-900 px-3.5 py-1.5 rounded-lg transition-colors">6M</span>
                    <span className="cursor-pointer hover:text-gray-900 px-3.5 py-1.5 rounded-lg transition-colors">YTD</span>
                    <span className="cursor-pointer text-gray-900 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] px-3.5 py-1.5 rounded-lg">1Y</span>
                    <span className="cursor-pointer hover:text-gray-900 px-3.5 py-1.5 rounded-lg transition-colors">5Y</span>
                    <span className="cursor-pointer hover:text-gray-900 px-3.5 py-1.5 rounded-lg transition-colors">ALL</span>
                  </div>
                </div>
                <button className="p-1.5 hover:bg-gray-50 rounded-lg text-gray-400 border border-gray-100 shadow-sm bg-white">
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>

            {/* Mock Chart Area */}
            <div className="flex-1 relative mt-2 min-h-[260px] ml-12 pb-8">
              
              {/* Tooltip Overlay */}
              <div className="absolute top-[28%] left-[22%] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-4 z-30 w-[190px] ml-4">
                <div className="text-[13px] font-medium text-gray-500 mb-2">March 2025</div>
                <div className="border-l-2 border-[#4EB74B] pl-3 flex flex-col gap-1.5">
                  <div className="flex items-center text-[13px]">
                    <span className="text-[#212529] font-medium w-[70px]">Portfolio:</span>
                    <span className="font-bold text-[#212529]">$122,000</span>
                  </div>
                  <div className="flex items-center text-[13px]">
                    <span className="text-[#212529] font-medium w-[70px]">S&P 500:</span>
                    <span className="font-bold text-[#4EB74B]">+1.2%</span>
                  </div>
                </div>
              </div>

              {/* Tooltip Line and Point */}
              <div className="absolute top-[38%] bottom-8 left-[22%] w-px border-l-2 border-[#4EB74B] border-dashed z-20"></div>
              <div className="absolute top-[38%] left-[22%] w-[14px] h-[14px] bg-white border-[2.5px] border-[#4EB74B] rounded-full z-40 -translate-x-1/2 -translate-y-1/2"></div>

              {/* Y Axis Grid */}
              <div className="absolute top-0 bottom-8 left-0 right-0 flex flex-col justify-between z-0">
                {[150, 130, 120, 80, 40, 0].map((val) => (
                  <div key={val} className="relative w-full border-t border-gray-100 border-dashed h-0 flex items-center">
                    <span className="absolute right-full pr-4 text-[13px] text-gray-500 font-medium">${val === 0 ? '0' : `${val}k`}</span>
                  </div>
                ))}
              </div>

              {/* X Axis Grid (Vertical Lines) */}
              <div className="absolute top-0 bottom-8 left-0 right-0 flex justify-between z-0 px-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-full border-l border-gray-100 border-dashed w-0"></div>
                ))}
              </div>

              {/* SVG Area Chart */}
              <div className="absolute top-0 bottom-8 left-0 right-0 z-10 overflow-hidden">
                <svg viewBox="0 0 800 220" className="w-full h-full" preserveAspectRatio="none">
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4EB74B" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#4EB74B" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill */}
                  <path 
                    d="M 0 100 L 20 96 L 40 101 L 60 97 L 80 104 L 100 98 L 120 102 L 140 99 L 160 103 L 180 97 L 200 95 L 220 98 L 240 101 L 260 96 L 280 94 L 300 97 L 320 95 L 340 99 L 360 101 L 380 95 L 400 93 L 420 98 L 440 96 L 460 94 L 480 99 L 500 97 L 520 95 L 540 93 L 560 94 L 580 91 L 600 94 L 620 92 L 640 95 L 660 91 L 680 93 L 700 90 L 720 94 L 740 89 L 760 92 L 780 88 L 800 84 L 800 220 L 0 220 Z" 
                    fill="url(#colorValue)" 
                  />
                  {/* Line stroke */}
                  <path 
                    d="M 0 100 L 20 96 L 40 101 L 60 97 L 80 104 L 100 98 L 120 102 L 140 99 L 160 103 L 180 97 L 200 95 L 220 98 L 240 101 L 260 96 L 280 94 L 300 97 L 320 95 L 340 99 L 360 101 L 380 95 L 400 93 L 420 98 L 440 96 L 460 94 L 480 99 L 500 97 L 520 95 L 540 93 L 560 94 L 580 91 L 600 94 L 620 92 L 640 95 L 660 91 L 680 93 L 700 90 L 720 94 L 740 89 L 760 92 L 780 88 L 800 84" 
                    fill="none" 
                    stroke="#4EB74B" 
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              {/* X Axis */}
              <div className="absolute bottom-0 left-0 right-0 h-8 flex justify-between items-end pb-1 text-[13px] font-medium text-gray-500 z-0 px-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Top Gainers Table */}
          <div className="lg:col-span-7 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-center mb-6" style={{ color: '#212529' }}>
              <div>
                <h3 className="font-extrabold text-lg">Top Gainers</h3>
                <p className="text-xs text-gray-500 mt-1">Shows stocks with the largest price gains in the selected period.</p>
              </div>
              <div className="flex items-center bg-gray-50 p-1 rounded-xl">
                <button className="px-4 py-1.5 bg-white shadow-sm rounded-lg text-xs font-bold text-gray-900 transition-colors">Gainers</button>
                <button className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Losers</button>
              </div>
            </div>
            
            <div className="w-full overflow-x-auto flex-1">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAFAFA] rounded-xl text-gray-500 font-semibold text-[11px]">
                  <tr>
                    <th className="py-3 px-4 text-left rounded-l-[8px] whitespace-nowrap">Stock</th>
                    <th className="py-3 px-4 text-left whitespace-nowrap">Price</th>
                    <th className="py-3 px-4 text-left whitespace-nowrap">% Change</th>
                    <th className="py-3 px-4 text-left whitespace-nowrap">Market Cap</th>
                    <th className="py-3 px-4 text-left rounded-r-[8px] whitespace-nowrap">Sector</th>
                  </tr>
                </thead>
                <tbody>
                  {gainers.map((g, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-gray-900 text-xs flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${g.nameColor}`}></div>
                        {g.stock}
                      </td>
                      <td className="py-4 px-4 font-bold text-gray-900 text-xs">{g.price}</td>
                      <td className="py-4 px-4 font-bold text-[#3AB038] text-xs">{g.change}</td>
                      <td className="py-4 px-4 font-bold text-gray-900 text-xs">{g.marketCap}</td>
                      <td className="py-4 px-4 font-semibold text-gray-600 text-xs">{g.sector}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Demographic Overview */}
          <div className="lg:col-span-5 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-xl text-[#212529]">Demographic Overview</h3>
                <p className="text-sm text-gray-500 mt-1">Customer composition by age</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-gray-50">
                  <span className="text-sm text-gray-600">Age</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <MoreVertical size={20} className="text-gray-400 cursor-pointer ml-1" />
              </div>
            </div>

            <div className="flex-1 flex flex-col border border-gray-200 rounded-[20px] p-5 shadow-sm mb-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
                Age Range
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="w-16 text-sm font-medium text-[#212529]">18 - 24</span>
                  <div className="flex-1 h-6">
                    <div className="h-full bg-[#4EB74B] w-[80%] rounded-full"></div>
                  </div>
                  <span className="w-10 text-right text-sm font-bold text-[#212529]">50%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-16 text-sm font-medium text-[#212529]">25 - 34</span>
                  <div className="flex-1 h-6">
                    <div className="h-full bg-[#4EB74B] w-[45%] rounded-full"></div>
                  </div>
                  <span className="w-10 text-right text-sm font-bold text-[#212529]">25%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-16 text-sm font-medium text-[#212529]">35 - 44</span>
                  <div className="flex-1 h-6">
                    <div className="h-full bg-[#4EB74B] w-[30%] rounded-full"></div>
                  </div>
                  <span className="w-10 text-right text-sm font-bold text-[#212529]">15%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-16 text-sm font-medium text-[#212529]">45 +</span>
                  <div className="flex-1 h-6">
                    <div className="h-full bg-[#4EB74B] w-[20%] rounded-full"></div>
                  </div>
                  <span className="w-10 text-right text-sm font-bold text-[#212529]">10%</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end mt-auto pt-2 px-2">
              <div>
                <div className="text-[13px] text-[#212529] mb-2">Total User</div>
                <div className="text-xl font-bold text-[#212529] leading-none font-['Inter']">54,999</div>
              </div>
              <div>
                <div className="text-[13px] text-[#212529] mb-2">Average Age</div>
                <div className="text-xl font-bold text-[#212529] leading-none font-['Inter']">30,5 <span className="text-base font-normal">years</span></div>
              </div>
              <div>
                <div className="text-[13px] text-[#212529] mb-2">New User <span className="text-gray-400">(30d)</span></div>
                <div className="text-xl font-bold text-[#212529] leading-none font-['Inter']">+1302</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
