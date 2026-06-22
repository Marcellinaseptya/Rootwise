import React from 'react';
import { 
  Leaf,
  BarChart2,
  MapPin,
  MoreHorizontal,
  Sun,
  ChevronDown
} from 'lucide-react';
import landscapeImg from '../assets/landscape.png';
import DashboardLayout from '../components/DashboardLayout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
          
          {/* Top KPI Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* KPI 1 */}
            <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
                  <BarChart2 size={20} />
                </div>
                <span className="font-bold text-gray-900">Average Load Efficiency</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex items-baseline gap-1">
                  <span className="font-['Geist'] text-4xl font-normal tracking-tight text-black">88.4</span>
                  <span className="text-gray-500 text-sm font-medium">%</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">+14.4%</span>
                  <span className="text-[11px] text-gray-400">+1.2% From Daily Target</span>
                </div>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
                  <Leaf size={20} />
                </div>
                <span className="font-bold text-gray-900">Renewable Ratio</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex items-baseline gap-1">
                  <span className="font-['Geist'] text-4xl font-normal tracking-tight text-black">76.5</span>
                  <span className="text-gray-500 text-sm font-medium">%</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs font-bold">↓ -5.2%</span>
                  <span className="text-[11px] text-gray-400">Solar Vs Grid Consumption</span>
                </div>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
                  <Sun size={20} />
                </div>
                <span className="font-bold text-gray-900">Total Energy Generated</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex items-baseline gap-1">
                  <span className="font-['Geist'] text-4xl font-normal tracking-tight text-black">312</span>
                  <span className="text-gray-500 text-sm font-medium">kWh</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">↑ +11.4%</span>
                  <span className="text-[11px] text-gray-400">+8.3% From Last Month</span>
                </div>
              </div>
            </div>

          </div>

          {/* Main Content Grid (Map + Right Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            {/* Left Column (Map & Table) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              
              {/* Map Widget */}
              <div className="relative w-full rounded-[24px] overflow-hidden shadow-sm flex-1 min-h-[300px]">
                <img src={landscapeImg} alt="Field Map" className="absolute inset-0 w-full h-full object-cover" />
                
                {/* SVG Overlays for Fields */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  {/* Field 3 Polygon */}
                  <polygon points="0,150 250,120 220,400 0,400" fill="rgba(76, 175, 80, 0.4)" stroke="#4CAF50" strokeWidth="2" />
                  
                  {/* Field 2 Polygon (Active) */}
                  <polygon points="400,160 550,150 530,260 380,270" fill="rgba(139, 195, 74, 0.5)" stroke="#FF9800" strokeWidth="2" />
                </svg>

                {/* Field 3 Label */}
                <div className="absolute left-[10%] bottom-[25%] text-white font-bold text-sm tracking-wide">
                  Field 3
                </div>

                {/* Field 2 Tooltip */}
                <div className="absolute top-[35%] left-[45%] bg-black/90 backdrop-blur-md text-white p-4 rounded-xl shadow-xl z-10 w-[140px]">
                  <h4 className="font-bold text-sm mb-2">Field 2</h4>
                  <div className="flex flex-col gap-1 text-[11px] text-gray-300">
                    <span>Area Size: 2 Ha</span>
                    <span>Crop Type: Corn</span>
                  </div>
                  {/* Pointer arrow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/90 rotate-45" />
                </div>
              </div>

              {/* Activity Log Table */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">Field Activity Log</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#F9FAFB] text-gray-700 font-semibold">
                      <tr>
                        <th className="px-4 py-3 rounded-l-xl">Date</th>
                        <th className="px-4 py-3">Location</th>
                        <th className="px-4 py-3">Details</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3 rounded-r-xl">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-4 text-gray-600">26 Jul 2027</td>
                        <td className="px-4 py-4 font-medium text-gray-900">Irrigation Applied</td>
                        <td className="px-4 py-4 text-gray-600">North Field A</td>
                        <td className="px-4 py-4 text-gray-600">12-05-2024</td>
                        <td className="px-4 py-4">
                          <span className="text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs font-semibold">Completed</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-gray-600">27 Jul 2027</td>
                        <td className="px-4 py-4 font-medium text-gray-900">Fertilizer Added</td>
                        <td className="px-4 py-4 text-gray-600">East Plot B</td>
                        <td className="px-4 py-4 text-gray-600">12-05-2024</td>
                        <td className="px-4 py-4">
                          <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md text-xs font-semibold">In Progress</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column (Widgets) */}
            <div className="flex flex-col gap-4">
              
              {/* Weather Widget */}
              <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-gray-900" />
                  <span className="font-bold text-gray-900">Central Valley, California</span>
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-['Geist'] text-4xl font-bold tracking-tight text-black">+18°C</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 mb-1">Humidity</span>
                    <span className="font-bold text-xs text-gray-900">40%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 mb-1">Precipitation</span>
                    <span className="font-bold text-xs text-gray-900">5.1 Ml</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 mb-1">Pressure</span>
                    <span className="font-bold text-xs text-gray-900">450 HPa</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 mb-1">Wind</span>
                    <span className="font-bold text-xs text-gray-900">23 M/S</span>
                  </div>
                </div>
              </div>

              {/* Engagement Tasks */}
              <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Engagement Tasks</h3>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="bg-[#F9FAFB] rounded-xl p-2.5 flex gap-3 items-center">
                    <span className="text-gray-400 font-semibold text-sm">01.</span>
                    <span className="text-sm font-medium text-gray-800">Review Employee Feedback</span>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-xl p-2.5 flex gap-3 items-center">
                    <span className="text-gray-400 font-semibold text-sm">02.</span>
                    <span className="text-sm font-medium text-gray-800">Plan Team Engagement Activity</span>
                  </div>
                </div>
                <button className="w-full bg-[#3AB038] text-white py-2.5 rounded-full font-semibold text-sm hover:bg-green-600 transition-colors">
                  View All Task
                </button>
              </div>

              {/* Power Efficiency Chart */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900">Power Efficiency</h3>
                  <button className="border border-gray-200 rounded-full px-3 py-1 flex items-center gap-2 text-xs font-medium text-gray-600">
                    Week <ChevronDown size={12} />
                  </button>
                </div>
                
                {/* Legend */}
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#333]" />
                    <span className="text-[10px] text-gray-500 font-medium">Renewable</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                    <span className="text-[10px] text-gray-500 font-medium">Stored</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#E0E0E0]" />
                    <span className="text-[10px] text-gray-500 font-medium">Backup</span>
                  </div>
                </div>

                {/* Chart Container */}
                <div className="flex items-end justify-between h-[120px] gap-2">
                  
                  {/* Mo */}
                  <div className="flex-1 flex flex-col justify-end gap-1 items-center">
                    <div className="w-full bg-[#E0E0E0] rounded-sm" style={{ height: '30%' }} />
                    <div className="w-full bg-[#4CAF50] rounded-sm" style={{ height: '40%' }} />
                    <div className="w-full bg-[#333] rounded-sm" style={{ height: '20%' }} />
                    <span className="text-[10px] text-gray-400 mt-2 font-medium">Mo</span>
                  </div>

                  {/* Tu */}
                  <div className="flex-1 flex flex-col justify-end gap-1 items-center">
                    <div className="w-full bg-[#E0E0E0] rounded-sm" style={{ height: '20%' }} />
                    <div className="w-full bg-[#333] rounded-sm" style={{ height: '30%' }} />
                    <span className="text-[10px] text-gray-400 mt-2 font-medium">Tu</span>
                  </div>

                  {/* We */}
                  <div className="flex-1 flex flex-col justify-end gap-1 items-center">
                    <div className="w-full bg-[#4CAF50] rounded-sm" style={{ height: '50%' }} />
                    <div className="w-full bg-[#333] rounded-sm" style={{ height: '25%' }} />
                    <span className="text-[10px] text-gray-400 mt-2 font-medium">We</span>
                  </div>

                  {/* Th */}
                  <div className="flex-1 flex flex-col justify-end gap-1 items-center">
                    <div className="w-full bg-[#E0E0E0] rounded-sm" style={{ height: '15%' }} />
                    <div className="w-full bg-[#4CAF50] rounded-sm" style={{ height: '20%' }} />
                    <div className="w-full bg-[#333] rounded-sm" style={{ height: '25%' }} />
                    <span className="text-[10px] text-gray-400 mt-2 font-medium">Th</span>
                  </div>

                  {/* Fr */}
                  <div className="flex-1 flex flex-col justify-end gap-1 items-center">
                    <div className="w-full bg-[#E0E0E0] rounded-sm" style={{ height: '20%' }} />
                    <div className="w-full bg-[#4CAF50] rounded-sm" style={{ height: '30%' }} />
                    <div className="w-full bg-[#333] rounded-sm" style={{ height: '20%' }} />
                    <span className="text-[10px] text-gray-400 mt-2 font-medium">Fr</span>
                  </div>

                  {/* Sa */}
                  <div className="flex-1 flex flex-col justify-end gap-1 items-center">
                    <div className="w-full bg-[#E0E0E0] rounded-sm" style={{ height: '40%' }} />
                    <div className="w-full bg-[#4CAF50] rounded-sm" style={{ height: '25%' }} />
                    <div className="w-full bg-[#333] rounded-sm" style={{ height: '10%' }} />
                    <span className="text-[10px] text-gray-400 mt-2 font-medium">Sa</span>
                  </div>

                  {/* Su */}
                  <div className="flex-1 flex flex-col justify-end gap-1 items-center">
                    <div className="w-full bg-[#4CAF50] rounded-sm" style={{ height: '20%' }} />
                    <div className="w-full bg-[#333] rounded-sm" style={{ height: '40%' }} />
                    <span className="text-[10px] text-gray-400 mt-2 font-medium">Su</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
          
    </DashboardLayout>
  );
}
