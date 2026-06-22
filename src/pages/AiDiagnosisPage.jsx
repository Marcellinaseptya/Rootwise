import React from 'react';
import { 
  MoreHorizontal,
  X,
  Sun,
  Droplets,
  ThermometerSun,
  Leaf,
  CloudSun,
  Wind
} from 'lucide-react';
import landscapeImg from '../assets/landscape.png';
import tractorImg from '../assets/tractor_field_1781913872706.png';
import soilHandsImg from '../assets/soil_hands_1781913896646.png';
import plantImg from '../assets/plant.png';
import DashboardLayout from '../components/DashboardLayout';

export default function AiDiagnosisPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 h-full">
        
        {/* Top Section: Map Overlay */}
        <div className="relative w-full rounded-[24px] overflow-hidden shadow-sm flex-shrink-0 flex justify-between items-center p-6 lg:px-12">
          
          {/* Background Map */}
          <img src={landscapeImg} alt="Field Map Background" className="absolute inset-0 w-full h-full object-cover" />
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            {/* Dark green overlay for some fields */}
            <polygon points="0,150 250,120 220,400 0,400" fill="rgba(76, 175, 80, 0.2)" stroke="#4CAF50" strokeWidth="1" />
            <polygon points="400,160 550,150 530,260 380,270" fill="rgba(33, 33, 33, 0.4)" stroke="#FF9800" strokeWidth="1" />
          </svg>

          {/* Left Popup: Field Details */}
          <div className="relative bg-[#0A0A0A] text-white w-[260px] rounded-[20px] p-5 shadow-2xl z-10 flex flex-col gap-4 ml-4 md:ml-12 lg:ml-16">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-sm">Field 8 - Corn</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">12.6 ha • Last update 07:45</p>
              </div>
              <button className="text-gray-400 hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div>
              <div className="flex justify-between items-center text-[11px] mb-2">
                <span className="text-gray-400">Crop Stress Index</span>
                <span className="font-bold">39 <span className="font-normal text-gray-400">(Medium)</span></span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 relative">
                <div className="absolute left-0 top-0 h-full bg-[#3AB038] rounded-full w-[39%]"></div>
                <div className="absolute left-[39%] top-1/2 -translate-y-1/2 -ml-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-2">
              <div className="flex items-start gap-1.5">
                <Sun size={14} className="text-gray-400 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-xs">68%</span>
                  <span className="text-[9px] text-gray-400">Soil Moisture</span>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <Droplets size={14} className="text-gray-400 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-xs">68%</span>
                  <span className="text-[9px] text-gray-400">Water Supply</span>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <ThermometerSun size={14} className="text-gray-400 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-xs">68%</span>
                  <span className="text-[9px] text-gray-400">Temperature</span>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <Leaf size={14} className="text-gray-400 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-xs">68%</span>
                  <span className="text-[9px] text-gray-400">Soil pH</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#3AB038] hover:bg-green-600 text-white font-semibold py-2.5 rounded-full text-xs transition-colors mt-1">
              Watering
            </button>
          </div>

          {/* Right Cards Overlay */}
          <div className="relative flex flex-col gap-4 w-[380px] z-10">
            
            {/* Row 1: Farm Overview & Weather */}
            <div className="flex gap-4">
              <div className="flex-1 bg-white rounded-[24px] p-5 shadow-lg border border-gray-100 flex flex-col justify-between">
                <h4 className="font-bold text-gray-900 text-sm mb-4">Farm Overview</h4>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-medium text-[28px] leading-none text-gray-900 font-['Geist'] mb-1">112.2</div>
                    <div className="text-[10px] text-gray-400">Hectares</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] text-gray-500 font-medium">Crop</span>
                      <span className="font-bold text-sm text-gray-900">4</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] text-gray-500 font-medium">Harvest</span>
                      <span className="font-bold text-sm text-gray-900">2</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-[24px] p-5 shadow-lg border border-gray-100 flex flex-col justify-between">
                <h4 className="font-bold text-gray-900 text-sm mb-4">Weather</h4>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-medium text-[28px] leading-none text-gray-900 font-['Geist'] mb-1">18°C</div>
                    <div className="text-[10px] text-gray-400">Party Cloudy</div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-end">
                    <div className="flex items-center gap-1">
                      <Droplets size={10} className="text-gray-400" />
                      <span className="text-[10px] font-bold text-gray-700">68%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wind size={10} className="text-gray-400" />
                      <span className="text-[10px] font-bold text-gray-700">15km/h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: AI Insight */}
            <div className="bg-white rounded-[24px] p-5 shadow-lg border border-gray-100 flex flex-col">
              <h4 className="font-extrabold text-gray-900 text-sm mb-4">AI Insight</h4>
              <div className="flex gap-2 mb-4">
                <img src={tractorImg} alt="Insight 1" className="flex-1 h-[70px] w-1/3 object-cover rounded-lg" />
                <img src={soilHandsImg} alt="Insight 2" className="flex-1 h-[70px] w-1/3 object-cover rounded-lg" />
                <img src={plantImg} alt="Insight 3" className="flex-1 h-[70px] w-1/3 object-cover rounded-lg" />
              </div>
              <p className="text-[10px] text-black leading-relaxed text-justify">
                Slight acidity may reduce nutrient absorption and affect crop growth performance. Slight acidity may reduce nutrient absorption and affect crop growth performance. Slight acidity may reduce nutrient absorption and affect crop growth performance.
              </p>
            </div>

            {/* Row 3: Crop Stress & Irrigation */}
            <div className="flex gap-4">
              <div className="flex-1 bg-white rounded-[24px] p-4 shadow-lg border border-gray-100 flex flex-col justify-between">
                <h4 className="font-medium text-gray-900 text-[11px] mb-1">Crop Stress Index</h4>
                <div className="font-bold text-2xl text-gray-900 leading-none mb-1">44.7</div>
                <div className="text-[11px] text-gray-400 mb-2">Medium</div>
                
                <div className="w-full bg-[#2D2D2D] rounded-full h-3 relative mb-2">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#DCEEC8] to-[#8DC63F] rounded-full w-[44.7%] shadow-sm flex items-center px-1.5">
                     <div className="w-1.5 h-1.5 bg-white rounded-full opacity-90"></div>
                  </div>
                </div>
                
                <div className="text-[10px] text-gray-500">Medium stress detected in field</div>
              </div>

              <div className="flex-1 bg-white rounded-[24px] p-4 shadow-lg border border-gray-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 text-[11px] mb-1">Irrigation Windows</h4>
                  <div className="font-bold text-2xl text-gray-900 leading-none mb-1">05.30 AM</div>
                  <div className="text-[11px] text-gray-400">Optimal Irrigation</div>
                </div>
                
                {/* Decorative mini chart */}
                <div className="mt-2">
                  <svg className="w-full h-[50px]" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <line x1="0" y1="5" x2="100" y2="5" stroke="#F3F4F6" strokeWidth="0.8" strokeDasharray="3,3" />
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#F3F4F6" strokeWidth="0.8" strokeDasharray="3,3" />
                    
                    <path d="M0,22 L12,22 L22,7 L42,7 L52,22 L67,22 L77,7 L100,7" fill="none" stroke="#4B5563" strokeWidth="1.2" strokeLinejoin="round" />
                    <path d="M0,15 L15,15 L22,28 L32,28 L38,15 L50,15 L58,28 L65,28 L72,10 L82,10 L90,25 L100,25" fill="none" stroke="#8DC63F" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Field Activity Log */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex-shrink-0">
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
