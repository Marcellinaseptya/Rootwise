import React from 'react';
import { 
  Activity, 
  Zap, 
  Factory, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Bell, 
  Droplets, 
  FileText,
  ThermometerSun,
  Power
} from 'lucide-react';
import DashboardLayout from '../../../layouts/DashboardLayout';

export default function SmartIrrigationPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 h-full pb-6">
        
        {/* Top Row Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-shrink-0">
          
          {/* Stat 1 */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D5EED4] text-[#1B4332] rounded-xl flex items-center justify-center">
                <Activity size={20} />
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

          {/* Stat 2 */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D5EED4] text-[#1B4332] rounded-xl flex items-center justify-center">
                <Zap size={20} />
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

          {/* Stat 3 */}
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D5EED4] text-[#1B4332] rounded-xl flex items-center justify-center">
                <Factory size={20} />
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

        {/* Main Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {/* Live Metrics */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 h-[220px] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-gray-900">Live Metrics</h3>
                <MoreHorizontal size={20} className="text-gray-400" />
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="text-sm">
                  <span className="text-gray-500">Target:</span> <span className="font-bold text-gray-900">65%</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-500">Current:</span> <span className="font-bold text-gray-900">42</span>
                </div>
                <div className="bg-green-50 text-green-600 px-2 py-0.5 rounded-md text-[9px] font-bold">
                  Moisture Level
                </div>
              </div>

              {/* Segmented Bar */}
              <div className="flex gap-1 h-3 mb-4">
                <div className="flex-1 bg-[#165514] rounded-l-full"></div>
                <div className="flex-1 bg-[#4EB74B]"></div>
                <div className="flex-1 bg-[#95D493] rounded-r-full"></div>
              </div>

              {/* Metric Details */}
              <div className="grid grid-cols-2 gap-y-3">
                <div className="flex items-center text-[10px]">
                  <div className="w-1.5 h-1.5 bg-[#165514] rounded-full mr-2"></div>
                  <span className="font-bold text-gray-900 w-[60px]">1,850 Liters</span>
                  <span className="text-gray-400">Daily Usage</span>
                </div>
                <div className="flex items-center text-[10px]">
                  <div className="w-1.5 h-1.5 bg-[#4EB74B] rounded-full mr-2"></div>
                  <span className="font-bold text-gray-900 w-[40px]">45 PSI</span>
                  <span className="text-gray-400">Water Pressure</span>
                </div>
                <div className="flex items-center text-[10px]">
                  <div className="w-1.5 h-1.5 bg-[#95D493] rounded-full mr-2"></div>
                  <span className="font-bold text-gray-900 w-[60px]">12.5 L/Min</span>
                  <span className="text-gray-400">Flow Rate</span>
                </div>
              </div>
            </div>

            {/* Employee Distribution */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-extrabold text-gray-900">Employee Distribution</h3>
                <MoreHorizontal size={20} className="text-gray-400" />
              </div>
              
              <div className="flex justify-center relative my-4">
                {/* SVG Donut Chart */}
                <svg width="180" height="180" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#165514" strokeWidth="7" strokeLinecap="round" strokeDasharray="144.85 251.3" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#4EB74B" strokeWidth="7" strokeLinecap="round" strokeDasharray="39.29 251.3" transform="rotate(140.4 50 50)" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#95D493" strokeWidth="7" strokeLinecap="round" strokeDasharray="19.18 251.3" transform="rotate(219.6 50 50)" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center">
                  <span className="font-medium text-4xl text-gray-900 leading-none mb-1 font-['Geist']">88</span>
                  <span className="text-[11px] text-gray-500 w-20 leading-tight">Total Employees</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#165514] rounded-full mr-2"></div>
                    <span className="text-gray-700 font-medium">In-house Team</span>
                  </div>
                  <span className="text-gray-900 text-[13px]">64%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#4EB74B] rounded-full mr-2"></div>
                    <span className="text-gray-700 font-medium">Part-time Support</span>
                  </div>
                  <span className="text-gray-900 text-[13px]">22%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#95D493] rounded-full mr-2"></div>
                    <span className="text-gray-700 font-medium">Outsourced Talent</span>
                  </div>
                  <span className="text-gray-900 text-[13px]">13%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {/* Fertigation Unit */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 h-[220px] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-gray-900">Fertigation Unit</h3>
                <div className="bg-green-50 text-green-600 px-2 py-1 rounded-md text-[10px] font-bold">Ready</div>
              </div>
              
              {/* Line Chart */}
              <div className="w-full flex-1 relative mt-2">
                <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[10px] text-gray-400">
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>
                
                <div className="absolute left-10 right-0 top-0 bottom-6">
                  {/* SVG Line Chart */}
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="fertGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3AB038" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#3AB038" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,50 C20,60 30,50 50,30 C60,20 80,25 100,40 L100,100 L0,100 Z" fill="url(#fertGradient)" />
                    <path d="M0,50 C20,60 30,50 50,30 C60,20 80,25 100,40" fill="none" stroke="#3AB038" strokeWidth="2" />
                    {/* Tooltip Line */}
                    <line x1="60" y1="24" x2="60" y2="100" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3,3" />
                  </svg>
                  {/* Tooltip Box */}
                  <div className="absolute top-[5%] left-[60%] -translate-x-1/2 bg-[#0A0A0A] text-white text-[9px] font-medium px-3 py-1.5 rounded-full z-10 whitespace-nowrap shadow-md">
                    12.5 L/min
                  </div>
                </div>

                <div className="absolute left-10 right-0 bottom-0 flex justify-between text-[9px] text-gray-400">
                  <span>1.5 <span className="text-[7px]">mS/cm</span></span>
                  <span>2.5 <span className="text-[7px]">mS/cm</span></span>
                  <span>2.5 <span className="text-[7px]">mS/cm</span></span>
                  <span>2.5 <span className="text-[7px]">mS/cm</span></span>
                  <span>8 <span className="text-[7px]">mS/cm</span></span>
                </div>
              </div>
            </div>

            {/* Control Panel */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between">
              <h3 className="font-extrabold text-gray-900 mb-6">Control Panel</h3>
              
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">Main Pump</span>
                  <div className="w-10 h-6 bg-[#D5EED4] rounded-full p-1 flex justify-end cursor-pointer">
                    <div className="w-4 h-4 bg-[#3AB038] rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">Valve Sector A</span>
                  <div className="w-10 h-6 bg-[#D5EED4] rounded-full p-1 flex justify-end cursor-pointer">
                    <div className="w-4 h-4 bg-[#3AB038] rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">Valve Sector B</span>
                  <div className="w-10 h-6 bg-gray-200 rounded-full p-1 flex justify-start cursor-pointer">
                    <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#0A0A0A] hover:bg-black text-white text-[10px] font-medium py-3 rounded-full transition-colors mt-auto">
                Emergency System Shut-off
              </button>
            </div>

            {/* Environmental Overview */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#D5EED4] text-[#1B4332] rounded-xl flex items-center justify-center">
                  <ThermometerSun size={16} />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm">Environmental Overview</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border-r-[3px] border-gray-200 pr-2">
                  <div className="font-bold text-xl text-gray-900 mb-1">28°C</div>
                  <div className="text-[10px] text-gray-400">Soil Temperature</div>
                </div>
                <div className="pl-2">
                  <div className="font-bold text-xl text-gray-900 mb-1">6.5</div>
                  <div className="text-[10px] text-gray-400">Soil PH Level</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            
            {/* Calendar */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <button className="text-gray-400 hover:text-gray-600"><ChevronLeft size={16} /></button>
                <h3 className="font-bold text-gray-900 text-[13px]">Maret 2026</h3>
                <button className="text-gray-400 hover:text-gray-600"><ChevronRight size={16} /></button>
              </div>
              
              <div className="grid grid-cols-7 gap-y-4 text-center mt-2">
                <div className="text-[10px] text-gray-400 mb-2">Sun</div>
                <div className="text-[10px] text-gray-400 mb-2">Mon</div>
                <div className="text-[10px] text-gray-400 mb-2">Tue</div>
                <div className="text-[10px] text-gray-400 mb-2">Wed</div>
                <div className="text-[10px] text-gray-400 mb-2">Thu</div>
                <div className="text-[10px] text-gray-400 mb-2">Fri</div>
                <div className="text-[10px] text-gray-400 mb-2">Sat</div>
                
                <div className="text-xs text-gray-800">01</div>
                <div className="text-xs text-gray-800">02</div>
                <div className="text-xs text-gray-800">03</div>
                <div className="text-xs text-gray-800">04</div>
                <div className="text-xs text-gray-800">05</div>
                <div className="text-xs text-gray-800">06</div>
                <div className="text-xs text-gray-800">07</div>
                
                <div className="text-xs text-gray-800">08</div>
                <div className="text-xs text-gray-800">09</div>
                <div className="text-xs text-gray-800">10</div>
                <div className="relative">
                  <div className="w-6 h-6 bg-[#3AB038] text-white rounded-full flex items-center justify-center text-xs font-bold mx-auto -mt-1 shadow-sm">11</div>
                </div>
                <div className="text-xs text-gray-800">12</div>
                <div className="text-xs text-gray-800">13</div>
                <div className="text-xs text-gray-800">14</div>
                
                <div className="text-xs text-gray-800">15</div>
                <div className="text-xs text-gray-800">16</div>
                <div className="text-xs text-gray-800">17</div>
                <div className="text-xs text-gray-800">18</div>
                <div className="text-xs text-gray-800">19</div>
                <div className="text-xs text-gray-800">20</div>
                <div className="text-xs text-gray-800">21</div>

                <div className="text-xs text-gray-800">22</div>
                <div className="text-xs text-gray-800">23</div>
                <div className="text-xs text-gray-800">24</div>
                <div className="text-xs text-gray-800">25</div>
                <div className="text-xs text-gray-800">26</div>
                <div className="text-xs text-gray-800">27</div>
                <div className="text-xs text-gray-800">28</div>

                <div className="text-xs text-gray-800">29</div>
                <div className="text-xs text-gray-800">30</div>
                <div className="text-xs text-gray-800">31</div>
              </div>
            </div>

            {/* Irrigation Schedule */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex-1 flex flex-col">
              <h3 className="font-extrabold text-gray-900 mb-1">Irrigation Schedule</h3>
              <div className="text-[11px] text-gray-400 mb-6">Upcoming Schedules</div>
              
              <div className="bg-[#F9FAFB] rounded-xl p-5 flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-gray-500" />
                  <span className="font-bold text-sm text-gray-900">05:00 AM - <span className="font-normal text-gray-500">Sector A</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <Bell size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Duration: 25 Mins</span>
                </div>
                <div className="flex items-center gap-3">
                  <Droplets size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">450 Liters</span>
                </div>
                <div className="flex items-start gap-3">
                  <FileText size={16} className="text-gray-500 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-900 font-medium">Reasoning</span>
                    <p className="text-[10px] text-gray-400 mt-1 whitespace-nowrap">Low soil moisture (35%) & no rain</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#3AB038] hover:bg-green-600 text-white font-semibold py-3 rounded-full text-sm transition-colors mt-auto">
                Change Schedule
              </button>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
