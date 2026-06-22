import React from 'react';
import { 
  Sparkles, 
  Wind, 
  SunDim,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  ChevronDown,
  TrendingUp
} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

// Try to import images, fallback to placeholders if they fail
import riceImg from '../assets/rice_product_1782114824857.png';
import cornImg from '../assets/corn_product_1782114835010.png';
import cabbageImg from '../assets/cabbage_product_1782114845806.png';
import tomatoImg from '../assets/tomato_product_1782114858018.png';

export default function InventoryPage() {
  
  const salesData = [
    { day: 'Mon', revenue: 34000, sales: 21000 },
    { day: 'Tue', revenue: 16000, sales: 12000 },
    { day: 'Wed', revenue: 33000, sales: 23000 },
    { day: 'Thu', revenue: 16000, sales: 8000, active: true },
    { day: 'Fri', revenue: 33000, sales: 14000 },
    { day: 'Sat', revenue: 20000, sales: 12000 },
    { day: 'Sun', revenue: 44000, sales: 30000 },
  ];
  const maxVal = 50000;

  const products = [
    { name: 'Rice', subtitle: 'Grain', stock: '4,200 kg', type: 'Food', condition: 'Premium', date: 'Premium', trend: '40%', rating: 'Top Product', img: riceImg, ratingColor: 'text-blue-600', ratingBg: 'bg-blue-50' },
    { name: 'Organic Corn', subtitle: 'Organic', stock: '$85', type: '3.3x', condition: 'Sealed', date: 'Sealed', trend: '26%', rating: 'Mid Product', img: cornImg, ratingColor: 'text-orange-500', ratingBg: 'bg-orange-50' },
    { name: 'Cabbage', subtitle: 'Fresh', stock: '$105', type: '1.3x', condition: 'Fresh', date: 'Fresh', trend: '16%', rating: 'Low Product', img: cabbageImg, ratingColor: 'text-red-500', ratingBg: 'bg-red-50' },
    { name: 'Tomato', subtitle: 'Fresh', stock: '$80', type: '0.8x', condition: '1.1%', date: '1.1%', trend: '12%', rating: 'Low Product', img: tomatoImg, ratingColor: 'text-red-500', ratingBg: 'bg-red-50' },
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

        {/* Middle Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Sales Summary Bar Chart */}
          <div className="lg:col-span-3 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-extrabold text-gray-900 text-xl">Sales Summary</h3>
                <p className="text-sm text-gray-500 mt-1">Daily revenue performance</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-gray-600 font-medium">Last 7 days</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <MoreVertical size={20} className="text-gray-400 cursor-pointer" />
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-8 mb-6 text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-[4px] bg-[#FF8A00]"></div>
                <span>Total Revenue</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-[4px] bg-[#F2F2F2]"></div>
                <span>Total Sales</span>
              </div>
            </div>

            <div className="flex-1 relative min-h-[160px] ml-12 mt-2 mr-4">
              {/* Y-Axis Labels & Grid Lines */}
              <div className="absolute top-0 bottom-8 left-0 right-0 flex flex-col justify-between z-0">
                {[50, 40, 30, 20, 10].map((val) => (
                  <div key={val} className="relative w-full border-t border-gray-100 border-dashed h-0 flex items-center">
                    <span className="absolute right-full pr-4 text-sm text-gray-400 font-medium">${val}k</span>
                  </div>
                ))}
              </div>

              {/* Bars */}
              <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between items-end z-10 pb-2">
                {salesData.map((d, i) => (
                  <div key={i} className="flex flex-col items-center group relative h-full flex-1 justify-end">
                    
                    {d.day === 'Wed' && (
                      <div className="absolute top-2 lg:top-4 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 p-4 z-30 w-[140px] lg:w-[160px] pointer-events-none translate-x-8 lg:translate-x-12">
                        <div className="text-xs font-semibold text-gray-900 mb-3 text-left">12 January 2026</div>
                        <div className="flex justify-between items-center text-xs mb-2">
                          <div className="flex items-center gap-2 text-gray-500"><div className="w-2 h-2 rounded-full bg-[#FF8A00]"></div>Revenue</div>
                          <span className="font-bold text-gray-900">$2800</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <div className="flex items-center gap-2 text-gray-500"><div className="w-2 h-2 rounded-full bg-[#E5E7EB]"></div>Sales</div>
                          <span className="font-bold text-gray-900">$1200</span>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-1 md:gap-2 items-end h-[120px] w-full justify-center px-1">
                      <div 
                        className="w-1/2 max-w-[34px] bg-[#4EB74B] rounded-[8px] hover:brightness-110 transition-all cursor-pointer" 
                        style={{ height: `${(d.revenue / maxVal) * 100}%` }}
                      ></div>
                      <div 
                        className="w-1/2 max-w-[34px] bg-[#F2F2F2] rounded-[8px] hover:brightness-95 transition-all cursor-pointer" 
                        style={{ height: `${(d.sales / maxVal) * 100}%` }}
                      ></div>
                    </div>
                    
                    <span className="text-sm font-medium text-gray-400 absolute -bottom-8">{d.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ads Campaign Donut Chart */}
          <div className="lg:col-span-2 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-extrabold text-gray-900 text-xl">Ads Campaign</h3>
                <p className="text-sm text-gray-500 mt-1">Cost Ads Details</p>
              </div>
              <MoreVertical size={20} className="text-gray-400 cursor-pointer" />
            </div>

            <div className="flex-1 flex justify-center items-center relative py-4">
              <svg width="130" height="130" viewBox="0 0 100 100" className="rotate-[90deg]">
                {/* Meta: 42.5% */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#4EB74B" strokeWidth="30" strokeDasharray="134 314" />
                {/* Google: 25.5% */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#72C66F" strokeWidth="30" strokeDasharray="80 314" strokeDashoffset="-134" />
                {/* Tiktok: 10.6% */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#D5EED4" strokeWidth="30" strokeDasharray="33 314" strokeDashoffset="-214" />
                {/* Other: 21.3% */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#248D21" strokeWidth="30" strokeDasharray="67 314" strokeDashoffset="-247" />
                
                {/* Inner White Circle to make it a donut */}
                <circle cx="50" cy="50" r="20" fill="white" />
              </svg>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] pointer-events-none">
                <span className="absolute top-2 left-4 text-[11px] font-semibold text-gray-400">Google</span>
                <span className="absolute bottom-6 left-2 text-[11px] font-semibold text-gray-400">Meta</span>
                <span className="absolute top-1/4 right-0 text-[11px] font-semibold text-gray-400">Tiktok</span>
                <span className="absolute bottom-6 right-2 text-[11px] font-semibold text-gray-400">Other</span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between text-[12px] text-gray-400 font-medium border-b border-gray-50 pb-2 mb-3">
                <span>Platform</span>
                <span className="w-16 text-center">View</span>
                <span className="w-16 text-right">Cost</span>
              </div>
              <div className="flex flex-col gap-3 text-sm font-semibold text-gray-900">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Google</span>
                  <span className="w-16 text-center">12K</span>
                  <span className="w-16 text-right">$140</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Meta</span>
                  <span className="w-16 text-center">20K</span>
                  <span className="w-16 text-right">$210</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Tiktok</span>
                  <span className="w-16 text-center">5K</span>
                  <span className="w-16 text-right">$40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Other</span>
                  <span className="w-16 text-center">10K</span>
                  <span className="w-16 text-right">$80</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Table Row */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-extrabold text-gray-900 text-lg">Sales Performance</h3>
              <p className="text-xs text-gray-500 mt-1">Detail Sales Executive Summary</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 bg-[#F3F4F6] rounded-[100px] px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors">
                <span className="text-xs text-gray-700 font-medium">This Week</span>
                <ChevronDown size={14} className="text-gray-500" />
              </div>
              <div className="flex items-center gap-2 bg-[#F3F4F6] rounded-[100px] px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors">
                <span className="text-xs text-gray-700 font-medium">Sort by</span>
                <ChevronDown size={14} className="text-gray-500" />
              </div>
              <div className="flex items-center gap-2 bg-[#F3F4F6] rounded-[100px] px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors">
                <span className="text-xs text-gray-700 font-medium">Category</span>
                <ChevronDown size={14} className="text-gray-500" />
              </div>
              <MoreVertical size={20} className="text-gray-400 ml-2 mt-2 cursor-pointer" />
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#FAFAFA] rounded-xl text-gray-500 font-semibold text-sm">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold rounded-l-[12px] whitespace-nowrap">Product</th>
                  <th className="py-4 px-6 text-left font-semibold whitespace-nowrap">Stock Level</th>
                  <th className="py-4 px-6 text-left font-semibold whitespace-nowrap">Type</th>
                  <th className="py-4 px-6 text-left font-semibold whitespace-nowrap">Condition</th>
                  <th className="py-4 px-6 text-left font-semibold whitespace-nowrap">Harvest Date</th>
                  <th className="py-4 px-6 text-left font-semibold whitespace-nowrap">Trend</th>
                  <th className="py-4 px-6 text-center font-semibold rounded-r-[12px] whitespace-nowrap">Rating</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={p.img} alt={p.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{p.name}</div>
                          <div className="text-[11px] text-gray-400">{p.subtitle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-600 text-[13px]">{p.stock}</td>
                    <td className="px-6 py-4 font-semibold text-gray-600 text-[13px]">{p.type}</td>
                    <td className="px-6 py-4 font-semibold text-gray-600 text-[13px]">{p.condition}</td>
                    <td className="px-6 py-4 font-semibold text-gray-600 text-[13px]">{p.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-[#3AB038] font-bold text-xs bg-[#E5F5ED] w-max px-2 py-1 rounded-full">
                        <TrendingUp size={12} />
                        {p.trend}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold ${p.ratingBg} ${p.ratingColor}`}>
                        {p.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
