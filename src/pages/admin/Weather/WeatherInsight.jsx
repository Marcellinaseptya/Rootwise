import React from 'react';
import { 
  CloudSun, 
  MapPin, 
  MoreVertical, 
  CloudLightning, 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind 
} from 'lucide-react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import landscapeImg from '../../../assets/landscape.png';

export default function WeatherInsightPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 pb-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Featured Weather Card */}
          <div className="lg:col-span-2 relative bg-gray-200 rounded-[24px] overflow-hidden min-h-[320px] shadow-sm">
            <img src={landscapeImg} alt="Landscape" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-y-6 left-6 w-[320px] bg-white rounded-[24px] p-7 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-gray-900 text-xl mb-1">It's Weather</h3>
                <p className="text-[13px] text-gray-500">How Is The Weather Today ?</p>
                
                <div className="flex items-center gap-4 mt-8">
                  <CloudSun size={72} strokeWidth={1.5} className="text-yellow-400 drop-shadow-md" />
                  <div>
                    <div className="font-bold text-[44px] text-gray-900 leading-none font-['Geist'] mb-1">32 °C</div>
                    <div className="text-[15px] text-gray-500 font-medium mt-2">Sunny Cloudy</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2.5 mt-8">
                <div className="bg-[#4EB74B] text-white flex-1 rounded-[16px] py-4 px-1 flex flex-col items-center justify-center gap-2">
                  <span className="text-[12px] font-medium opacity-90">Presure</span>
                  <span className="font-semibold text-[15px]">900mb</span>
                </div>
                <div className="bg-[#F7F7F7] text-gray-900 flex-1 rounded-[16px] py-4 px-1 flex flex-col items-center justify-center gap-2">
                  <span className="text-[12px] font-medium text-gray-500">Visibility</span>
                  <span className="font-semibold text-[15px]">5.2 km</span>
                </div>
                <div className="bg-[#F7F7F7] text-gray-900 flex-1 rounded-[16px] py-4 px-1 flex flex-col items-center justify-center gap-2">
                  <span className="text-[12px] font-medium text-gray-500">Humandity</span>
                  <span className="font-semibold text-[15px]">67%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sunrise and Sunset Card */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col gap-4 justify-between">
            <h3 className="font-extrabold text-gray-900 text-[15px] mb-2">Sunrise and Sunset</h3>
            
            {/* Los Angeles Block */}
            <div className="bg-[#F7F7F7] rounded-[20px] p-5 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} className="text-[#3AB038]" />
                  <span className="font-bold text-gray-900 text-[15px]">Los Angeles</span>
                </div>
                <MoreVertical size={18} className="text-gray-600 cursor-pointer" />
              </div>
              <div className="flex justify-between items-center pr-2">
                <div className="flex items-center gap-3">
                  <CloudLightning size={32} className="text-blue-300" />
                  <div>
                    <div className="font-bold text-gray-900 text-base mb-0.5">05:56</div>
                    <div className="text-[11px] text-gray-400">Sunrise</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CloudLightning size={32} className="text-blue-300" />
                  <div>
                    <div className="font-bold text-gray-900 text-base mb-0.5">18:22</div>
                    <div className="text-[11px] text-gray-400">Sunset</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tokyo Block */}
            <div className="bg-[#F7F7F7] rounded-[20px] p-5 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} className="text-[#3AB038]" />
                  <span className="font-bold text-gray-900 text-[15px]">Tokyo</span>
                </div>
                <MoreVertical size={18} className="text-gray-600 cursor-pointer" />
              </div>
              <div className="flex justify-between items-center pr-2">
                <div className="flex items-center gap-3">
                  <CloudLightning size={32} className="text-blue-300" />
                  <div>
                    <div className="font-bold text-gray-900 text-base mb-0.5">07:15</div>
                    <div className="text-[11px] text-gray-400">Sunrise</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CloudSun size={32} className="text-yellow-400" />
                  <div>
                    <div className="font-bold text-gray-900 text-base mb-0.5">18:32</div>
                    <div className="text-[11px] text-gray-400">Sunset</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-[300px]">
          
          {/* Weather Prediction */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-extrabold text-gray-900 text-lg">Weather Prediction</h3>
              <span className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">See All</span>
            </div>
            <div className="flex flex-col gap-0 flex-1 justify-between">
              
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <div className="flex items-center gap-5">
                  <Cloud size={48} strokeWidth={1.5} className="text-gray-300 drop-shadow-sm" />
                  <div>
                    <div className="font-bold text-gray-900 text-base mb-1">Cloudy</div>
                    <div className="text-xs text-gray-400">Nov 23</div>
                  </div>
                </div>
                <div className="font-semibold text-gray-900 text-sm">26°C / 32 °C</div>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <div className="flex items-center gap-5">
                  <Sun size={48} strokeWidth={1.5} className="text-yellow-400 drop-shadow-sm" />
                  <div>
                    <div className="font-bold text-gray-900 text-base mb-1">Sunny</div>
                    <div className="text-xs text-gray-400">Nov 22</div>
                  </div>
                </div>
                <div className="font-semibold text-gray-900 text-sm">32°C / 10 °C</div>
              </div>

              <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-5">
                  <Sun size={48} strokeWidth={1.5} className="text-yellow-400 drop-shadow-sm" />
                  <div>
                    <div className="font-bold text-gray-900 text-base mb-1">Sunny</div>
                    <div className="text-xs text-gray-400">Nov 22</div>
                  </div>
                </div>
                <div className="font-semibold text-gray-900 text-sm">32°C / 10 °C</div>
              </div>

            </div>
          </div>

          {/* Temperature Chart */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-extrabold text-gray-900 text-lg max-w-[200px] leading-snug">How about the<br/>temperature today?</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-xl bg-[#3AB038] text-white flex items-center justify-center shadow-md">
                  <CloudRain size={20} />
                </button>
                <button className="w-10 h-10 rounded-xl border border-gray-200 text-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Wind size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative mt-6 h-[220px]">
              
              {/* Vertical Grid Lines */}
              <div className="absolute top-8 bottom-8 left-0 right-0 grid grid-cols-4 z-0">
                <div className="flex justify-center"><div className="w-px h-full bg-gray-100"></div></div>
                <div className="flex justify-center"><div className="w-px h-full bg-gray-100"></div></div>
                <div className="flex justify-center"><div className="w-px h-full bg-gray-100"></div></div>
                <div className="flex justify-center"><div className="w-px h-full bg-gray-100"></div></div>
              </div>

              {/* Top Icons */}
              <div className="absolute top-0 left-0 right-0 grid grid-cols-4 z-10 items-center">
                <div className="flex justify-center"><div className="bg-white p-3 rounded-full shadow-sm border border-gray-50"><Sun size={24} className="text-yellow-400" /></div></div>
                <div className="flex justify-center"><div className="bg-white p-3 rounded-full shadow-sm border border-gray-50"><CloudRain size={24} className="text-blue-300" /></div></div>
                <div className="flex justify-center"><div className="bg-[#3AB038] p-4 rounded-full shadow-lg -mt-2"><CloudRain size={32} strokeWidth={1.5} className="text-white" /></div></div>
                <div className="flex justify-center"><div className="bg-white p-3 rounded-full shadow-sm border border-gray-50"><Cloud size={24} className="text-gray-300" /></div></div>
              </div>

              {/* SVG Line */}
              <div className="absolute top-14 left-0 right-0 h-32 z-10">
                 <svg className="w-full h-full overflow-visible drop-shadow-md" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,50 C5,60 8,60 12.5,60 C25,60 25,30 37.5,30 C50,30 50,40 62.5,40 C75,40 80,70 87.5,70 C95,70 98,80 100,80" fill="none" stroke="#3AB038" strokeWidth="3.5" strokeLinecap="round" />
                    <circle cx="12.5" cy="60" r="4" fill="#3AB038" />
                    <circle cx="37.5" cy="30" r="4" fill="#3AB038" />
                    <circle cx="62.5" cy="40" r="4" fill="#3AB038" />
                    <circle cx="87.5" cy="70" r="4" fill="#3AB038" />
                 </svg>
              </div>

              {/* Bottom Labels */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 z-10">
                <div className="flex justify-center">
                  <div className="text-center bg-white/80 py-1 px-4">
                    <div className="font-bold text-gray-900 text-base mb-1">32°</div>
                    <div className="text-[11px] text-gray-500">Morning</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-center bg-white/80 py-1 px-4">
                    <div className="font-bold text-gray-900 text-base mb-1">38°</div>
                    <div className="text-[11px] text-gray-500">Afternoon</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-center bg-white/80 py-1 px-4">
                    <div className="font-bold text-[#3AB038] text-base mb-1">36°</div>
                    <div className="text-[11px] text-[#3AB038] font-medium">Evening</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-center bg-white/80 py-1 px-4">
                    <div className="font-bold text-gray-900 text-base mb-1">30°</div>
                    <div className="text-[11px] text-gray-500">Night</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
