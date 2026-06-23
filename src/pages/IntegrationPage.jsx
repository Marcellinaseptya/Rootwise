import React from 'react';
import { motion } from 'framer-motion';
import { Asterisk, Leaf, LayoutGrid, ArrowRight, ArrowUpRight, Quote, ArrowLeft } from 'lucide-react';
import tractorFieldImg from '../assets/tractor_field_1781913872706.png';
import greenhouseImg from '../assets/greenhouse.png';
import agronomyImg from '../assets/agronomy.png';
import landscapeImg from '../assets/landscape.png';
import soilHandsImg from '../assets/soil_hands_1781913896646.png';
import avatarImg from '../assets/avatar_michael_1781913917589.png';

export default function IntegrationPage() {
  const scrollRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div className="w-full bg-[#FAFAFA] min-h-screen flex flex-col items-center" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
      
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full flex flex-col items-center text-center" style={{ marginBottom: '80px', width: '85%', maxWidth: '1152px' }}
      >
        
        {/* Top Label */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex items-center gap-2" style={{ marginBottom: '24px' }}>
          <Asterisk size={18} className="text-black" />
          <span className="font-medium font-['Manrope'] text-black tracking-wide" style={{ fontSize: '15px' }}>Integration</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="font-normal font-['Geist'] text-black tracking-tight text-[40px] md:text-[64px]" style={{ lineHeight: '1.1', marginBottom: '40px', maxWidth: '1000px' }}>
          One Unified Ecosystem <br className="hidden md:block" />
          for All Your Agricultural Hardware
        </motion.h1>

        {/* Subtitle with Decorative Elements */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex items-center justify-center gap-4 md:gap-6 w-full">
          <div className="flex items-center justify-center border border-gray-300 rounded-full flex-shrink-0" style={{ width: '40px', height: '40px' }}>
            <Leaf size={18} className="text-gray-700" />
          </div>
          
          <div className="flex-1 bg-gray-200" style={{ height: '1px' }}></div>
          
          <span className="font-['Manrope'] text-gray-600 font-medium text-[14px] md:text-[16px] px-2 text-center">
            Break down data silos and connect your entire fleet
          </span>
          
          <div className="flex-1 bg-gray-200" style={{ height: '1px' }}></div>
          
          <div className="flex items-center justify-center border border-gray-300 rounded-full flex-shrink-0" style={{ width: '40px', height: '40px' }}>
            <LayoutGrid size={18} className="text-gray-700" />
          </div>
        </motion.div>

      </motion.div>

      {/* Cards Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full"
      >
        <div className="mx-auto" style={{ width: '85%', maxWidth: '1152px' }}>
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            
            {/* Card 1: Tractor */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 relative overflow-hidden flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300" style={{ borderRadius: '24px', minHeight: '280px' }}>
              <img src={tractorFieldImg} alt="Tractor spraying field" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="relative z-10 p-6">
                <div className="inline-block border border-white/30 text-white font-['Manrope'] backdrop-blur-md bg-white/10 shadow-lg" style={{ padding: '6px 16px', borderRadius: '9999px', fontSize: '13px' }}>
                  Analyze Growth
                </div>
              </div>
              
              <div className="relative z-10 p-6 mt-auto">
                <p className="text-white font-['Manrope'] font-medium leading-relaxed" style={{ fontSize: '18px', maxWidth: '320px' }}>
                  Monitor plant health with real-time imaging and AI-powered
                </p>
              </div>
            </motion.div>

            {/* Card 2: Rootwise Dark Green */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 flex flex-col justify-between relative hover:-translate-y-2 transition-transform duration-300 shadow-xl" style={{ backgroundColor: '#0E380D', borderRadius: '24px', padding: '32px', minHeight: '280px' }}>
              <div className="flex justify-between items-start mb-6">
                <span className="font-['Manrope'] text-white font-medium" style={{ fontSize: '15px' }}>With</span>
                <span className="font-['Geist'] font-bold text-white tracking-wide" style={{ fontSize: '24px' }}>ROOTWISE</span>
              </div>
              
              <div className="flex-1 flex items-center">
                <p className="font-['Manrope'] text-white leading-relaxed" style={{ fontSize: '16px', maxWidth: '280px' }}>
                  ROOTWISE helps farmers adopt modern, sustainable practices.
                </p>
              </div>

              <button className="w-full bg-white flex items-center justify-between transition-colors hover:bg-gray-100" style={{ borderRadius: '9999px', padding: '12px 12px 12px 24px', marginTop: 'auto' }}>
                <span className="font-['Manrope'] font-bold text-black" style={{ fontSize: '15px' }}>More Information</span>
                <div className="flex items-center justify-center text-white" style={{ backgroundColor: '#0E380D', width: '40px', height: '40px', borderRadius: '50%' }}>
                  <ArrowRight size={20} />
                </div>
              </button>
            </motion.div>

            {/* Card 3: Greenhouse */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 relative overflow-hidden flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300" style={{ borderRadius: '24px', minHeight: '280px' }}>
              <img src={greenhouseImg} alt="Greenhouse interior" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="relative z-10 p-6">
                <div className="inline-block border border-white/30 text-white font-['Manrope'] backdrop-blur-md bg-white/10 shadow-lg" style={{ padding: '6px 16px', borderRadius: '9999px', fontSize: '13px' }}>
                  Analyze Growth
                </div>
              </div>
              
              <div className="relative z-10 p-6 mt-auto">
                <p className="text-white font-['Manrope'] font-medium leading-relaxed" style={{ fontSize: '18px', maxWidth: '320px' }}>
                  Leverage data-driven insights to make better farming decisions
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Detailed Impact Breakdown Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full mt-24 md:mt-32"
      >
        <div className="mx-auto" style={{ width: '85%', maxWidth: '1152px' }}>
          
          {/* Header */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <h2 className="font-normal font-['Geist'] text-black tracking-tight" style={{ fontSize: '48px', lineHeight: '1.1', maxWidth: '500px' }}>
              Detailed <br className="hidden md:block" /> Impact Breakdown
            </h2>
            <p className="font-['Manrope'] text-gray-600 leading-relaxed" style={{ fontSize: '18px', maxWidth: '480px' }}>
              Reduce fertilizer and water waste by up to 30% using our AI-driven soil sensors. Spend less on inputs while maintaining soil health.
            </p>
          </motion.div>

          {/* 3-Column Content Grid */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            
            {/* Column 1: Info */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 flex flex-col justify-between pr-4 pb-8">
              <div>
                <span className="font-['Manrope'] text-black font-medium uppercase tracking-widest mb-6 block" style={{ fontSize: '15px' }}>
                  FARMERS PARTNERED
                </span>
                
                <div className="flex items-center justify-between mb-10 w-full max-w-[360px]">
                  <span className="font-['Geist'] text-black font-medium tracking-tighter" style={{ fontSize: '62px', lineHeight: '0.9' }}>500+</span>
                  <div className="flex items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0" style={{ backgroundColor: '#2BA927', width: '64px', height: '64px', borderRadius: '50%' }}>
                    <ArrowRight size={28} strokeWidth={2} />
                  </div>
                </div>
                
                <p className="font-['Manrope'] text-black leading-normal" style={{ fontSize: '16px', maxWidth: '360px' }}>
                  RootWise partners with farmers to boost productivity and sustainability, growing stronger each season.
                </p>
              </div>

              <div className="mt-16">
                <button className="flex items-center gap-4 text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#2BA927', padding: '6px 6px 6px 20px', borderRadius: '9999px', width: 'fit-content', marginBottom: '24px' }}>
                  <span className="font-['Manrope'] font-medium text-[16px]">Learn More</span>
                  <div className="bg-white text-black flex items-center justify-center rounded-full" style={{ width: '36px', height: '36px' }}>
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </div>
                </button>
                
                <p className="font-['Manrope'] text-black leading-normal" style={{ fontSize: '16px', maxWidth: '360px' }}>
                  Track planting and harvest milestones to optimize yields and manage resources.
                </p>
              </div>
            </motion.div>

            {/* Column 2: Rice Card */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 relative overflow-hidden flex flex-col justify-end hover:-translate-y-2 transition-transform duration-300 shadow-xl" style={{ borderRadius: '24px', minHeight: '480px' }}>
              <img src={agronomyImg} alt="Rice field" className="absolute inset-0 w-full h-full object-cover" />
              
              <div className="relative z-10 m-4 p-6 backdrop-blur-md bg-[#2B4B27]/40 border border-white/10" style={{ borderRadius: '20px' }}>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white flex items-center justify-center rounded-full" style={{ width: '48px', height: '48px' }}>
                    <LayoutGrid size={20} className="text-[#2B4B27]" />
                  </div>
                  <span className="text-white font-['Geist'] text-sm">01</span>
                </div>
                
                <h3 className="text-white font-['Geist'] text-xl mb-8 max-w-[200px] leading-tight">
                  RICE PRODUCTION OVERVIEW
                </h3>
                
                <div className="flex justify-between border-t border-white/20 pt-4">
                  <div>
                    <p className="text-white/70 font-['Manrope'] text-[11px] mb-1">Yield</p>
                    <p className="text-white font-['Geist'] text-[13px] font-medium">4.3M tons</p>
                  </div>
                  <div>
                    <p className="text-white/70 font-['Manrope'] text-[11px] mb-1">Practice</p>
                    <p className="text-white font-['Geist'] text-[13px] font-medium">Sustainable</p>
                  </div>
                  <div>
                    <p className="text-white/70 font-['Manrope'] text-[11px] mb-1">Demand</p>
                    <p className="text-white font-['Geist'] text-[13px] font-medium">High Global</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Corn Card */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 relative overflow-hidden flex flex-col justify-end hover:-translate-y-2 transition-transform duration-300 shadow-xl" style={{ borderRadius: '24px', minHeight: '480px' }}>
              <img src={landscapeImg} alt="Corn field" className="absolute inset-0 w-full h-full object-cover" />
              
              <div className="relative z-10 m-4 p-6 backdrop-blur-md bg-[#2B4B27]/40 border border-white/10" style={{ borderRadius: '20px' }}>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white flex items-center justify-center rounded-full" style={{ width: '48px', height: '48px' }}>
                    <Leaf size={20} className="text-[#2B4B27]" />
                  </div>
                  <span className="text-white font-['Geist'] text-sm">02</span>
                </div>
                
                <h3 className="text-white font-['Geist'] text-xl mb-8 max-w-[200px] leading-tight">
                  CORN HARVEST INSIGHTS
                </h3>
                
                <div className="flex justify-between border-t border-white/20 pt-4">
                  <div>
                    <p className="text-white/70 font-['Manrope'] text-[11px] mb-1">Growth</p>
                    <p className="text-white font-['Geist'] text-[13px] font-medium">3.8M tons</p>
                  </div>
                  <div>
                    <p className="text-white/70 font-['Manrope'] text-[11px] mb-1">Supply</p>
                    <p className="text-white font-['Geist'] text-[13px] font-medium">Strong Market</p>
                  </div>
                  <div>
                    <p className="text-white/70 font-['Manrope'] text-[11px] mb-1">Export</p>
                    <p className="text-white font-['Geist'] text-[13px] font-medium">Yearly</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Supported Manufacturers Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full mt-24 md:mt-32 pb-32"
      >
        <div className="mx-auto" style={{ width: '85%', maxWidth: '1152px' }}>
          
          {/* Header */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <h2 className="font-normal font-['Geist'] text-black tracking-tight whitespace-nowrap" style={{ fontSize: '48px', lineHeight: '1.2' }}>
              Supported <br className="hidden md:block" /> Manufacturers & Protocols
            </h2>
            <p className="font-['Manrope'] text-gray-500 leading-relaxed" style={{ fontSize: '16px', maxWidth: '380px' }}>
              Our open API and specialized drivers allow for effortless integration with industry leaders
            </p>
          </motion.div>

          {/* Scrolling Logos */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="w-full overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing pb-8"
          >
            <div className="flex items-center gap-16 md:gap-24 min-w-max px-2 select-none">
              
              {/* Logo 1 */}
              <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 0C16.166 0 11.442 4.724 11.442 10.558V22C11.442 27.834 16.166 32.558 22 32.558C27.834 32.558 32.558 27.834 32.558 22V10.558C32.558 4.724 27.834 0 22 0Z" fill="#333333"/>
                  <path d="M22 6L24.5 18H36.5L26.5 25L30 37L22 30L14 37L17.5 25L7.5 18H19.5L22 6Z" fill="white"/>
                  <circle cx="38" cy="6" r="3" fill="#333333"/>
                </svg>
                <span className="font-['Geist'] font-bold text-3xl text-[#333] tracking-tighter">Logoipsum</span>
              </div>
              
              {/* Logo 2 */}
              <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="url(#grad1)"/>
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'#888', stopOpacity:0.5}} />
                      <stop offset="100%" style={{stopColor:'#333', stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="12" x2="48" y2="12" stroke="#fff" strokeWidth="2"/>
                  <line x1="0" y1="20" x2="48" y2="20" stroke="#fff" strokeWidth="2"/>
                  <line x1="0" y1="28" x2="48" y2="28" stroke="#fff" strokeWidth="2"/>
                  <line x1="0" y1="36" x2="48" y2="36" stroke="#fff" strokeWidth="2"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-['Geist'] font-bold text-[22px] text-[#333] tracking-tight leading-none mb-1">Logoipsum</span>
                  <span className="font-serif italic text-[14px] text-[#555] tracking-wide">Brand Standard</span>
                </div>
              </div>
              
              {/* Logo 3 */}
              <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20C0 8.954 8.954 0 20 0H35V10H20C14.477 10 10 14.477 10 20C10 25.523 14.477 30 20 30H35V40H20C8.954 40 0 31.046 0 20Z" fill="#333"/>
                  <circle cx="55" cy="20" r="14" stroke="#333" strokeWidth="8"/>
                  <circle cx="95" cy="20" r="14" stroke="#333" strokeWidth="8"/>
                  <circle cx="118" cy="8" r="3" fill="#333"/>
                </svg>
              </div>

              {/* Logo 4 */}
              <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity pr-8">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 40V0M12 10C6 10 0 15 0 20C0 25 6 30 12 30M12 5C18 5 24 10 24 15C24 20 18 25 12 25" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['Manrope'] font-normal text-xl text-[#333] tracking-[0.2em] uppercase">LOGOIPSUM</span>
              </div>

            </div>
          </motion.div>
          
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full border-t border-gray-200 py-16 md:py-24 mt-8"
      >
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0" style={{ width: '85%', maxWidth: '1152px' }}>
          
          {/* Stat 1 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full md:border-r border-gray-200">
            <span className="font-normal font-['Geist'] text-black tracking-tight mb-4" style={{ fontSize: '48px', lineHeight: '1' }}>50+</span>
            <span className="font-['Manrope'] text-black font-medium" style={{ fontSize: '15px' }}>Year of Experience</span>
          </motion.div>
          
          {/* Stat 2 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full md:border-r border-gray-200">
            <span className="font-normal font-['Geist'] text-black tracking-tight mb-4" style={{ fontSize: '48px', lineHeight: '1' }}>200+</span>
            <span className="font-['Manrope'] text-black font-medium" style={{ fontSize: '15px' }}>Field in Progress</span>
          </motion.div>
          
          {/* Stat 3 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full md:border-r border-gray-200">
            <span className="font-normal font-['Geist'] text-black tracking-tight mb-4" style={{ fontSize: '48px', lineHeight: '1' }}>120,000+</span>
            <span className="font-['Manrope'] text-black font-medium" style={{ fontSize: '15px' }}>Farmer Around World</span>
          </motion.div>
          
          {/* Stat 4 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full">
            <span className="font-normal font-['Geist'] text-black tracking-tight mb-4" style={{ fontSize: '48px', lineHeight: '1' }}>$15 Billion</span>
            <span className="font-['Manrope'] text-black font-medium" style={{ fontSize: '15px' }}>Agricultural Product</span>
          </motion.div>

        </div>
      </motion.div>

      </div>
      
      {/* AI Autonomy Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="w-full bg-[#0a0a0a] flex flex-col items-center py-24 md:py-32"
      >
        <div className="w-[85%] max-w-[1152px]">
          {/* Header Row */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
            <h2 className="font-['Geist'] text-white font-normal leading-tight" style={{ fontSize: '44px', maxWidth: '800px' }}>
              Intelligent Synergy Where <br className="hidden md:block" /> Hardware Meets AI Autonomy
            </h2>
            <p className="font-['Manrope'] text-gray-400" style={{ fontSize: '16px', maxWidth: '380px', marginTop: '12px' }}>
              By integrating AI at the core of your infrastructure, we turn raw data into autonomous action
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="bg-[#4CAF50] rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center mb-8">
                <Leaf className="text-white" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-['Geist'] text-white text-3xl mb-4 tracking-tight">Plug and Play Setup</h3>
                <p className="font-['Manrope'] text-white/90 leading-relaxed text-[15px]">
                  Effortlessly onboard drones and sensors. Our AI automatically recognizes hardware signatures and configures optimal data-syncing protocols without a single line of code.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="bg-[#f2f2f2] rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-['Geist'] text-black text-3xl mb-4 tracking-tight">Edge AI</h3>
                <p className="font-['Manrope'] text-gray-500 leading-relaxed text-[15px]">
                  Our system runs complex machine learning models directly on the field (Edge Computing), allowing for instant pest detection and irrigation triggers even in total offline zones.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="bg-[#f2f2f2] rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 17L10 11L4 5M12 19H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="1" y="2" width="22" height="20" rx="4" stroke="#000" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Geist'] text-black text-3xl mb-4 tracking-tight">Predictive API</h3>
                <p className="font-['Manrope'] text-gray-500 leading-relaxed text-[15px]">
                  A gateway for developers. Beyond standard data transfer, our API provides access to our proprietary AI inference engines, allowing your custom hardware to benefit from our predictive analytics.
                </p>
              </div>
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
        className="w-full bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}
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
    </>
  );
}
