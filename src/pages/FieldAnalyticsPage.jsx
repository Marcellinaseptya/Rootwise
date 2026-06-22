import React from 'react';
import { 
  MoreHorizontal,
  Cable,
  AlertTriangle,
  Leaf,
  ThermometerSun,
  FlaskConical
} from 'lucide-react';
import landscapeImg from '../assets/landscape.png';
import DashboardLayout from '../components/DashboardLayout';

export default function FieldAnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        
        {/* Top Row: Map and Select Plot */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Map Widget */}
          <div className="lg:col-span-2 relative w-full rounded-[24px] overflow-hidden shadow-sm h-full min-h-[300px]">
            <img src={landscapeImg} alt="Field Map" className="absolute inset-0 w-full h-full object-cover" />
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <polygon points="0,150 250,120 220,400 0,400" fill="rgba(76, 175, 80, 0.4)" stroke="#4CAF50" strokeWidth="2" />
              <polygon points="400,160 550,150 530,260 380,270" fill="rgba(33, 33, 33, 0.8)" stroke="#FF9800" strokeWidth="2" />
            </svg>
            <div className="absolute left-[10%] bottom-[25%] text-white font-bold text-sm tracking-wide">
              Field 3
            </div>
            <div className="absolute top-[25%] left-[45%] bg-[#0A0A0A] text-white p-4 rounded-xl shadow-xl z-10 w-[140px]">
              <h4 className="font-bold text-sm mb-2">Field 2</h4>
              <div className="flex flex-col gap-1 text-[11px] text-gray-300">
                <span>Area Size: 2 Ha</span>
                <span>Crop Type: Corn</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A0A0A] rotate-45" />
            </div>
          </div>

          {/* Select Plot/Sector */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="font-bold text-gray-900 mb-4">Select Plot/Sector</h3>
            <div className="flex flex-col gap-3">
              {/* Item 1 */}
              <div className="border border-gray-100 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                   <div className="bg-gray-100 p-1.5 rounded-lg"><Cable size={14}/></div>
                   Main Distribution Center
                </div>
                <h4 className="font-bold text-gray-900">USB-C Charging Cable</h4>
                <p className="text-[10px] text-gray-400">Avg. daily demand: 18 units - Stock left: 14 units</p>
              </div>
              {/* Item 2 (Active) */}
              <div className="rounded-xl p-4 flex flex-col gap-2" style={{ backgroundColor: '#D5EED4' }}>
                <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                   <div className="bg-white p-1.5 rounded-lg"><Cable size={14}/></div>
                   Main Distribution Center
                </div>
                <h4 className="font-bold text-gray-900">USB-C Charging Cable</h4>
                <p className="text-[10px] text-gray-400">Avg. daily demand: 18 units - Stock left: 14 units</p>
              </div>
              {/* Item 3 */}
              <div className="border border-gray-100 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                   <div className="bg-gray-100 p-1.5 rounded-lg"><Cable size={14}/></div>
                   Main Distribution Center
                </div>
                <h4 className="font-bold text-gray-900">USB-C Charging Cable</h4>
                <p className="text-[10px] text-gray-400">Avg. daily demand: 18 units - Stock left: 14 units</p>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Crop Conditions */}
          <div className="lg:col-span-2 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900">Crop Conditions</h3>
              <div className="flex items-center gap-2 text-red-500 font-semibold text-xs">
                <AlertTriangle size={14} />
                1 Issues Detected
              </div>
            </div>

            <div className="border border-gray-200 rounded-[24px] p-2 mb-4 flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-[#F9FAFB] rounded-[20px] p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#3AB038] text-white rounded-xl flex items-center justify-center">
                    <FlaskConical size={20} />
                  </div>
                  <span className="text-gray-900 text-sm font-medium">Soil pH Level: 5.8 (Field 15)</span>
                </div>
                <div className="flex gap-2 text-[10px] text-gray-500 flex-wrap">
                  <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-md">Area Size: 2 Ha</span>
                  <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-md">Crop Type: Corn</span>
                  <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-md">Growth Stage: Vegetative</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-4 py-2 pr-4">
                <div>
                  <h4 className="font-bold text-sm text-[#1B4332] mb-1">Issues</h4>
                  <p className="text-[11px] text-gray-800 leading-relaxed">Slight acidity may reduce nutrient absorption and affect crop growth performance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1B4332] mb-1">Solutions</h4>
                  <p className="text-[11px] text-gray-800 leading-relaxed">• Generate a balanced fertilizer mix based on current crop growth stage</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#3AB038] text-white py-3 rounded-[100px] font-semibold text-sm hover:bg-green-600 transition-colors">
              Add to Task
            </button>
          </div>

          {/* Right Status Cards */}
          <div className="flex flex-col gap-4">
            
            {/* Field Health Status */}
            <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 text-black flex items-center justify-center" style={{ backgroundColor: '#B8E2B7', borderRadius: '14px' }}>
                    <Leaf size={18} />
                 </div>
                 <span className="font-bold text-gray-900 text-sm">Field Health Status</span>
               </div>
               <div className="grid grid-cols-2 mt-2">
                 <div className="flex flex-col border-r border-gray-200 pr-4">
                   <span className="font-semibold text-gray-900 text-[22px] tracking-tight">High</span>
                   <span className="text-gray-400 text-[11px] mt-1">Soil Moisture Level</span>
                 </div>
                 <div className="flex flex-col pl-6">
                   <span className="font-semibold text-gray-900 text-[22px] tracking-tight">Sufficient</span>
                   <span className="text-gray-400 text-[11px] mt-1">Nutrient Status</span>
                 </div>
               </div>
            </div>

            {/* Environmental Overview */}
            <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 text-black flex items-center justify-center" style={{ backgroundColor: '#B8E2B7', borderRadius: '14px' }}>
                    <ThermometerSun size={18} />
                 </div>
                 <span className="font-bold text-gray-900 text-sm">Environmental Overview</span>
               </div>
               <div className="grid grid-cols-2 mt-2">
                 <div className="flex flex-col border-r border-gray-200 pr-4">
                   <span className="font-semibold text-gray-900 text-[22px] tracking-tight">28°C</span>
                   <span className="text-gray-400 text-[11px] mt-1">Soil Temperature</span>
                 </div>
                 <div className="flex flex-col pl-6">
                   <span className="font-semibold text-gray-900 text-[22px] tracking-tight">6.5</span>
                   <span className="text-gray-400 text-[11px] mt-1">Soil PH Level</span>
                 </div>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
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
    </DashboardLayout>
  );
}
