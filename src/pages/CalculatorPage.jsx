import React from 'react';
import { motion } from 'framer-motion';
import { Sun, ArrowRight, ChevronDown, Minus, Plus, ArrowLeft, Quote } from 'lucide-react';
import calculatorImg from '../assets/calculator.png';
import tractorFieldImg from '../assets/tractor_field_1781913872706.png';
import soilHandsImg from '../assets/soil_hands_1781913896646.png';
import avatarImg from '../assets/avatar_michael_1781913917589.png';

export default function CalculatorPage() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col items-center" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
      <div 
        className="relative overflow-hidden"
        style={{ 
          width: '95%', 
          maxWidth: '1280px',
          minHeight: '440px',
          borderRadius: '32px'
        }}
      >
        {/* Background Image */}
        <img 
          src={calculatorImg} 
          alt="Case Study Calculator" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}></div>
        
        {/* Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex items-center gap-2" style={{ marginBottom: '20px' }}>
            <Sun size={18} className="text-white" />
            <span className="font-medium font-['Manrope'] text-white tracking-wide" style={{ fontSize: '14px' }}>Case Study</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="font-normal font-['Geist'] text-white tracking-tight" style={{ fontSize: '56px', lineHeight: '1.1', marginBottom: '20px' }}>
            Quantify <br className="hidden md:block" />
            Your Growth
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="font-medium font-['Manrope'] leading-relaxed" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', maxWidth: '700px', marginBottom: '32px' }}>
            See how our precision farming system transforms your operational costs into measurable <br className="hidden md:block" />
            profit. Enter your farm's data below to get a personalized financial projection.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-white text-black font-semibold font-['Manrope'] transition-colors hover:bg-gray-100" style={{ borderRadius: '9999px', padding: '14px 28px', fontSize: '14px' }}>
              Start Grow Smarter
            </button>
            <button className="bg-white flex items-center justify-center text-black transition-colors hover:bg-gray-100" style={{ borderRadius: '9999px', width: '48px', height: '48px' }}>
              <ArrowRight size={18} strokeWidth={2} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Calculator Section */}
      <div className="w-full" style={{ marginTop: '140px', marginBottom: '120px' }}>
        <div className="mx-auto" style={{ width: '85%', maxWidth: '1152px' }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch"
          >
            {/* Left Column */}
            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-['Geist'] text-black tracking-tight" style={{ fontSize: '48px', lineHeight: '1.1', marginBottom: '24px' }}>
                  Cultivating a <br />
                  Resilient Future
                </h2>
                <p className="font-['Manrope']" style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginBottom: '40px', maxWidth: '480px' }}>
                  Explore a curated selection of farm-fresh produce, grown with ethical practices and a deep respect for the natural harmony of the soil.
                </p>
              </div>

              {/* Result Card */}
              <div className="flex flex-col justify-center" style={{ backgroundColor: '#0E380D', borderRadius: '24px', padding: '40px', flex: 1, marginTop: 'auto' }}>
                <h3 className="font-['Geist'] text-white font-bold" style={{ fontSize: '32px', marginBottom: '32px' }}>Result</h3>
                
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                    <span className="font-['Manrope']" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>Estimated Annual Savings</span>
                    <span className="font-['Geist'] font-semibold text-white" style={{ fontSize: '18px' }}>$80.45</span>
                  </div>
                  
                  <div className="flex justify-between items-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                    <span className="font-['Manrope']" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>Yield Increase Potential</span>
                    <span className="font-['Geist'] font-semibold text-white" style={{ fontSize: '18px' }}>+15% to 25%</span>
                  </div>
                  
                  <div className="flex justify-between items-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                    <span className="font-['Manrope']" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>Estimated Break-Even Point</span>
                    <span className="font-['Geist'] font-semibold text-white" style={{ fontSize: '18px' }}>14 Months</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-['Manrope'] font-bold text-white" style={{ fontSize: '16px' }}>Total ROI (3 Years)</span>
                    <span className="font-['Geist'] font-bold text-white" style={{ fontSize: '24px' }}>240%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1">
              <div className="flex flex-col justify-center" style={{ backgroundColor: '#F9F9F9', borderRadius: '24px', padding: '40px', height: '100%' }}>
                <h3 className="font-['Geist'] font-bold text-black" style={{ fontSize: '24px', marginBottom: '32px' }}>
                  Enter your farm's data below
                </h3>

                <div className="flex flex-col gap-6">
                  {/* Row 1 */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="font-['Manrope'] font-semibold text-black" style={{ fontSize: '15px' }}>Farm Size</label>
                      <input 
                        type="text" 
                        placeholder="Total Hectares/Acres" 
                        className="w-full outline-none font-['Manrope']" 
                        style={{ backgroundColor: '#F3F4F3', borderRadius: '9999px', padding: '16px 24px', fontSize: '14px', color: '#333' }}
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="font-['Manrope'] font-semibold text-black" style={{ fontSize: '15px' }}>Crop Type</label>
                      <div className="relative">
                        <select 
                          className="w-full appearance-none outline-none font-['Manrope'] cursor-pointer" 
                          style={{ backgroundColor: '#F3F4F3', borderRadius: '9999px', padding: '16px 24px', fontSize: '14px', color: '#666' }}
                        >
                          <option>Corn</option>
                          <option>Wheat</option>
                          <option>Soybeans</option>
                        </select>
                        <ChevronDown size={20} color="#666" className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="font-['Manrope'] font-semibold text-black" style={{ fontSize: '15px' }}>Current Annual Fertilizer Cost</label>
                      <input 
                        type="text" 
                        placeholder="Currency Amount" 
                        className="w-full outline-none font-['Manrope']" 
                        style={{ backgroundColor: '#F3F4F3', borderRadius: '9999px', padding: '16px 24px', fontSize: '14px', color: '#333' }}
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="font-['Manrope'] font-semibold text-black" style={{ fontSize: '15px' }}>Average Annual Yield</label>
                      <div className="flex items-center justify-between" style={{ backgroundColor: '#F3F4F3', borderRadius: '9999px', padding: '10px 20px' }}>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Minus size={18} color="#000" />
                        </button>
                        <span className="font-['Manrope'] text-[#666] font-medium" style={{ fontSize: '14px' }}>01</span>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Plus size={18} color="#000" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['Manrope'] font-semibold text-black" style={{ fontSize: '15px' }}>Current Annual Water Consumption Cost</label>
                    <input 
                      type="text" 
                      placeholder="Currency Amount" 
                      className="w-full outline-none font-['Manrope']" 
                      style={{ backgroundColor: '#F3F4F3', borderRadius: '9999px', padding: '16px 24px', fontSize: '14px', color: '#333' }}
                    />
                  </div>

                  {/* Button */}
                  <button 
                    className="w-full font-['Manrope'] font-semibold text-white transition-colors hover:bg-green-600 mt-2"
                    style={{ backgroundColor: '#4EB74B', borderRadius: '9999px', padding: '18px 24px', fontSize: '15px' }}
                  >
                    Calculate
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Detailed Impact Breakdown Section */}
      <div className="w-full bg-white" style={{ paddingBottom: '80px' }}>
        <div className="mx-auto" style={{ width: '85%', maxWidth: '1152px' }}>
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8" style={{ marginBottom: '64px' }}>
            <h2 className="font-['Geist'] text-black tracking-tight flex-1" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              Detailed <br />
              Impact Breakdown
            </h2>
            <p className="font-['Manrope'] flex-1" style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '500px' }}>
              Reduce fertilizer and water waste by up to 30% using our AI-driven soil sensors. Spend less on inputs while maintaining soil health.
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300" style={{ backgroundColor: '#F6F6F6', borderRadius: '24px', padding: '40px', minHeight: '380px' }}>
              <div>
                <span className="font-['Geist'] text-black" style={{ fontSize: '40px', lineHeight: '1', display: 'block', marginBottom: '16px' }}>01.</span>
                <h3 className="font-['Geist'] font-bold text-black" style={{ fontSize: '20px', marginBottom: '24px' }}>Resource Optimization</h3>
                <p className="font-['Manrope']" style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                  Reduce fertilizer and water waste by up to 30% using our AI-driven soil sensors. Spend less on inputs while maintaining soil health.
                </p>
              </div>
              <div className="flex justify-end mt-8">
                <button className="flex items-center justify-center text-white transition-colors hover:bg-green-900" style={{ backgroundColor: '#0E380D', width: '48px', height: '48px', borderRadius: '50%' }}>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300" style={{ backgroundColor: '#F6F6F6', borderRadius: '24px', padding: '40px', minHeight: '380px' }}>
              <div>
                <span className="font-['Geist'] text-black" style={{ fontSize: '40px', lineHeight: '1', display: 'block', marginBottom: '16px' }}>02.</span>
                <h3 className="font-['Geist'] font-bold text-black" style={{ fontSize: '20px', marginBottom: '24px' }}>Operational Efficiency</h3>
                <p className="font-['Manrope']" style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                  Save hundreds of manual labor hours through automated monitoring and early pest detection alerts sent directly to your dashboard.
                </p>
              </div>
              <div className="flex justify-end mt-8">
                <button className="flex items-center justify-center text-white transition-colors hover:bg-green-900" style={{ backgroundColor: '#0E380D', width: '48px', height: '48px', borderRadius: '50%' }}>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300" style={{ backgroundColor: '#F6F6F6', borderRadius: '24px', padding: '40px', minHeight: '380px' }}>
              <div>
                <span className="font-['Geist'] text-black" style={{ fontSize: '40px', lineHeight: '1', display: 'block', marginBottom: '16px' }}>03.</span>
                <h3 className="font-['Geist'] font-bold text-black" style={{ fontSize: '20px', marginBottom: '24px' }}>Yield Enhancement</h3>
                <p className="font-['Manrope']" style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                  Precision irrigation and nutrient delivery ensure your crops reach their full genetic potential, resulting in higher quality and heavier harvests.
                </p>
              </div>
              <div className="flex justify-end mt-8">
                <button className="flex items-center justify-center text-white transition-colors hover:bg-green-900" style={{ backgroundColor: '#0E380D', width: '48px', height: '48px', borderRadius: '50%' }}>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Metrics Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full bg-white" style={{ marginBottom: '80px' }}
      >
        <div className="mx-auto" style={{ width: '85%', maxWidth: '1152px', borderTop: '1px solid #EAEAEA', borderBottom: '1px solid #EAEAEA', padding: '48px 0' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12">
            
            {/* Metric 1 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col items-center justify-center lg:border-r border-gray-200" style={{ padding: '0 10px' }}>
              <span className="font-['Geist'] text-black tracking-tight whitespace-nowrap" style={{ fontSize: '45px', lineHeight: '1.2', marginBottom: '16px' }}>50+</span>
              <span className="font-['Manrope'] font-medium text-center" style={{ fontSize: '15px', color: '#111' }}>Year of Experience</span>
            </motion.div>

            {/* Metric 2 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col items-center justify-center lg:border-r border-gray-200" style={{ padding: '0 10px' }}>
              <span className="font-['Geist'] text-black tracking-tight whitespace-nowrap" style={{ fontSize: '45px', lineHeight: '1.2', marginBottom: '16px' }}>200+</span>
              <span className="font-['Manrope'] font-medium text-center" style={{ fontSize: '15px', color: '#111' }}>Field in Progress</span>
            </motion.div>

            {/* Metric 3 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col items-center justify-center lg:border-r border-gray-200" style={{ padding: '0 10px' }}>
              <span className="font-['Geist'] text-black tracking-tight whitespace-nowrap" style={{ fontSize: '45px', lineHeight: '1.2', marginBottom: '16px' }}>120,000+</span>
              <span className="font-['Manrope'] font-medium text-center" style={{ fontSize: '15px', color: '#111' }}>Farmer Around World</span>
            </motion.div>

            {/* Metric 4 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col items-center justify-center" style={{ padding: '0 10px' }}>
              <span className="font-['Geist'] text-black tracking-tight whitespace-nowrap" style={{ fontSize: '45px', lineHeight: '1.2', marginBottom: '16px' }}>$15 Billion</span>
              <span className="font-['Manrope'] font-medium text-center" style={{ fontSize: '15px', color: '#111' }}>Agricultural Product</span>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Real Results Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full bg-white" style={{ paddingBottom: '120px' }}
      >
        <div className="mx-auto" style={{ width: '85%', maxWidth: '1152px' }}>
          
          {/* Header */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="font-['Geist'] text-black tracking-tight flex-1" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              Real Results from <br />
              the Field
            </h2>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-3 font-['Geist'] font-bold text-black transition-opacity hover:opacity-70" style={{ fontSize: '15px' }}>
                <div className="flex items-center justify-center bg-[#F4F4F4] rounded-full" style={{ width: '48px', height: '48px' }}>
                  <ArrowLeft size={20} />
                </div>
                PREVIOUS
              </button>
              <button className="flex items-center gap-3 font-['Geist'] font-bold text-black transition-opacity hover:opacity-70" style={{ fontSize: '15px' }}>
                NEXT
                <div className="flex items-center justify-center text-white rounded-full" style={{ width: '48px', height: '48px', backgroundColor: '#4EB74B' }}>
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="w-full bg-gray-200 origin-left" style={{ height: '1px', margin: '48px 0' }}></motion.div>

          {/* Grid Content */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Left Column (Images) */}
            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col gap-6" style={{ flex: '0 0 32%' }}>
              <div className="relative w-full overflow-hidden flex-1" style={{ borderRadius: '24px', minHeight: '200px' }}>
                <img src={tractorFieldImg} alt="Tractor" className="absolute inset-0 w-full h-full object-cover" />
                <Quote size={48} className="absolute top-6 left-6 text-white fill-white" />
              </div>
              <div className="relative w-full overflow-hidden flex-1" style={{ borderRadius: '24px', minHeight: '200px' }}>
                <img src={soilHandsImg} alt="Soil" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Right Column (Testimonial & Cards) */}
            <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col gap-6" style={{ flex: '1' }}>
              
              {/* Testimonial */}
              <div className="flex flex-col justify-center bg-white" style={{ flex: 1, padding: '16px 32px' }}>
                <Quote size={32} className="text-black fill-black mb-4" />
                <p className="font-['Manrope'] font-semibold text-black leading-relaxed" style={{ fontSize: '18px', maxWidth: '600px', marginBottom: '24px' }}>
                  Working with ROOTWISE was a pleasure. Their team was professional and our project was on time.
                </p>
                <div className="flex items-center gap-4">
                  <img src={avatarImg} alt="Michael Setiawan" className="rounded-full object-cover" style={{ width: '48px', height: '48px' }} />
                  <div>
                    <h4 className="font-['Geist'] font-bold text-black" style={{ fontSize: '16px' }}>Michael Setiawan</h4>
                    <p className="font-['Manrope']" style={{ fontSize: '14px', color: '#999' }}>Founder Fieldaytilen</p>
                  </div>
                </div>
              </div>

              {/* Bottom Cards Row */}
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* Productivity Card */}
                <div className="flex-1 flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: '#F4F4F4', borderRadius: '24px', padding: '24px' }}>
                  <h3 className="font-['Geist'] font-bold text-black" style={{ fontSize: '16px', marginBottom: '24px', zIndex: 10 }}>FARM PRODUCTIVITY RATE</h3>
                  <button className="absolute top-6 right-6 flex items-center justify-center text-white z-10 transition-colors hover:bg-green-900" style={{ backgroundColor: '#0E380D', width: '32px', height: '32px', borderRadius: '50%' }}>
                    <ArrowRight size={16} />
                  </button>
                  
                  <div className="flex items-end gap-6 mt-auto relative z-10">
                    <div className="relative" style={{ width: '130px', height: '65px' }}>
                      <svg viewBox="0 0 100 50" className="w-full h-full">
                        <path 
                          d="M 12 50 A 38 38 0 0 1 88 50" 
                          fill="none" 
                          stroke="#B7E4B6" 
                          strokeWidth="24" 
                          strokeLinecap="butt" 
                          strokeDasharray="6.5 2" 
                          pathLength="100" 
                        />
                        <path 
                          d="M 12 50 A 38 38 0 0 1 88 50" 
                          fill="none" 
                          stroke="#0E380D" 
                          strokeWidth="24" 
                          strokeLinecap="butt" 
                          strokeDasharray="6.5 2 6.5 2 6.5 2 6.5 2 6.5 2 6.5 2 6.5 2 6.5 100" 
                          pathLength="100" 
                        />
                      </svg>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 font-['Geist'] text-black" style={{ fontSize: '26px', fontWeight: '500', lineHeight: '1', letterSpacing: '-0.02em', paddingBottom: '2px' }}>80%</span>
                    </div>
                    <p className="font-['Manrope'] flex-1" style={{ fontSize: '13px', color: '#111', lineHeight: '1.5', fontWeight: 500 }}>
                      From drones to IoT sensors, we bring advanced tools that increase efficiency and boost crop productivity.
                    </p>
                  </div>
                </div>

                {/* With Rootwise Card */}
                <div className="flex-1 flex flex-col justify-between relative" style={{ backgroundColor: '#0E380D', borderRadius: '24px', padding: '24px' }}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-['Manrope'] text-white font-medium" style={{ fontSize: '14px' }}>With</span>
                    <span className="font-['Geist'] font-bold text-white" style={{ fontSize: '20px' }}>ROOTWISE</span>
                  </div>
                  <p className="font-['Manrope'] text-white" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                    ROOTWISE Helps Farmers Adopt Modern, Sustainable Practices.
                  </p>
                  <button className="w-full bg-white flex items-center justify-between transition-colors hover:bg-gray-100" style={{ borderRadius: '9999px', padding: '12px 12px 12px 24px' }}>
                    <span className="font-['Manrope'] font-bold text-black" style={{ fontSize: '13px' }}>More Information</span>
                    <div className="flex items-center justify-center text-white" style={{ backgroundColor: '#0E380D', width: '32px', height: '32px', borderRadius: '50%' }}>
                      <ArrowRight size={16} />
                    </div>
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
