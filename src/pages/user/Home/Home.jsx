
import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Atom, CheckCircle2, Asterisk, ArrowRight, ShoppingCart, ArrowUpRight, ArrowLeft, Link2, SquareTerminal, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

import heroImg from '../../../assets/hero-image.png';
import agronomyImg from '../../../assets/agronomy.png';
import img1 from '../../../assets/irrigation.png';
import img2 from '../../../assets/fertilizer.png';
import img3 from '../../../assets/greenhouse.png';
import img4 from '../../../assets/drone.png';
import avatarImg from '../../../assets/avatar.png';
import landscapeImg from '../../../assets/landscape.png';
import plantImg from '../../../assets/plant.png';
import ctaBg from '../../../assets/cta_bg.png';

function Hero() {
  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.08]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; 
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgX = useTransform(smoothMouseX, [-1, 1], [-10, 10]);
  const bgY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  const headingX = useTransform(smoothMouseX, [-1, 1], [-15, 15]);
  const headingY = useTransform(smoothMouseY, [-1, 1], [-15, 15]);

  const cardLeftX = useTransform(smoothMouseX, [-1, 1], [-25, 25]);
  const cardLeftY = useTransform(smoothMouseY, [-1, 1], [-25, 25]);

  const cardRightX = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const cardRightY = useTransform(smoothMouseY, [-1, 1], [-30, 30]);

  const iconsX = useTransform(smoothMouseX, [-1, 1], [-40, 40]);
  const iconsY = useTransform(smoothMouseY, [-1, 1], [-40, 40]);

  return (
    <section 
      className="relative w-full min-h-screen pt-32 flex flex-col items-center overflow-hidden bg-[#FAFAFA]"
      onMouseMove={handleMouseMove}
    >
      {/* Top half background gradient */}
      <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-gray-50 via-white to-transparent z-0"></div>

      {/* Cinematic Animation Background */}
      <CinematicRootAnimation />

      {/* Hero Content Wrapper (max-w-7xl ensures cards don't go out of frame) */}
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 mt-12">

        {/* Floating UI Cards (now positioned relative to the 7xl container, never outframe) */}
        <motion.div 
          className="hidden lg:block absolute top-[130px] xl:top-[150px] left-4 lg:left-12 xl:left-24 z-30"
          style={{ x: cardLeftX, y: cardLeftY }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: [-8, 8, -8] }}
            transition={{ 
              opacity: { duration: 1.1, delay: 0.5 },
              scale: { type: "spring", stiffness: 120, damping: 20, damping: 15, delay: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } 
            }}
            whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.12)" }}
            className="bg-white rounded-[24px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#0000000D] w-[180px] xl:w-[200px] aspect-square flex flex-col justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#1A4B38] flex items-center justify-center shrink-0">
                <Leaf size={12} strokeWidth={2.5} className="text-white" />
              </div>
              <span className="text-[13px] font-semibold text-gray-900 font-['Geist'] tracking-tight">Growth Progress</span>
            </div>
            <div className="relative w-full mt-auto flex items-end justify-center pb-2">
              {/* SVG Arc for Progress */}
              <svg viewBox="0 0 100 85" className="w-[90%] overflow-visible">
                {/* Background Track */}
                <path d="M 22.4 73.2 A 36 36 0 1 1 77.6 73.2" fill="none" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
                {/* Progress Track */}
                <path d="M 22.4 73.2 A 36 36 0 1 1 84.9 58.7" fill="none" stroke="#22A05B" strokeWidth="8" strokeLinecap="round" />
                {/* Bubble Indicator */}
                <g transform="translate(84.9, 58.7)">
                  <circle cx="0" cy="0" r="6.5" fill="#4EB74B" stroke="black" strokeWidth="1.5" />
                  <path d="M -4 -8 L 0 -2 L 4 -8 Z" fill="#000" />
                  <rect x="-18" y="-26" width="36" height="18" rx="9" fill="#000" />
                  <text x="0" y="-13.5" fill="white" fontSize="9" fontWeight="600" textAnchor="middle" style={{fontFamily: 'Geist, sans-serif'}}>90%</text>
                </g>
              </svg>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hidden lg:block absolute top-[230px] xl:top-[260px] right-4 lg:right-12 xl:right-24 z-30"
          style={{ x: cardRightX, y: cardRightY }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: [8, -8, 8] }}
            transition={{ 
              opacity: { duration: 1.1, delay: 0.7 },
              scale: { type: "spring", stiffness: 120, damping: 20, damping: 15, delay: 0.7 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } 
            }}
            whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.12)" }}
            className="bg-white rounded-[20px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#0000000D] w-[230px] xl:w-[250px] cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D1F2D9] flex items-center justify-center">
                <Leaf size={20} strokeWidth={2} className="text-[#1A4B38]" />
              </div>
              <span className="font-light text-[36px] text-black font-['Geist'] tracking-tight">100%</span>
            </div>
            <div className="w-full h-[60px] rounded-[12px] overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Farmer Plowing"
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </div>
            <p className="text-[11px] text-gray-500 font-medium font-['Manrope'] leading-relaxed pr-2">
              An Eco-Friendly Method for Enriching Soil Health
            </p>
          </motion.div>
        </motion.div>

        {/* Main Title Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="relative z-20 w-full max-w-[850px] xl:max-w-5xl mx-auto text-center mb-0"
          style={{ x: headingX, y: headingY }}
        >
          <div className="flex items-center justify-center gap-2 text-black mb-6">
            <Asterisk size={20} strokeWidth={2} />
            <span className="text-[15px] font-['Manrope'] font-medium">AI-Guided Cultivation</span>
          </div>

          <div className="relative inline-block">
            {/* Floating Stars */}
            {/* Floating Stars */}
            <motion.div 
              className="absolute -top-6 -left-16 text-[#0B3D3B]"
              style={{ x: iconsX, y: iconsY }}
            >
              <motion.div animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
                </svg>
              </motion.div>
            </motion.div>
            <motion.div 
              className="absolute top-10 -right-20 text-[#0B3D3B]"
              style={{ x: iconsX, y: iconsY }}
            >
              <motion.div animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
                </svg>
              </motion.div>
            </motion.div>

            <h1 className="text-[55px] lg:text-[65px] xl:text-[75px] font-['Geist'] font-light leading-[1.1] tracking-tight text-black mx-auto">
              Nature Meets <br className="hidden md:block" />
              with
              <span className="inline-flex items-center align-middle mx-3 gap-2">
                <span className="w-[42px] h-[42px] xl:w-[48px] xl:h-[48px] rounded-full border border-black flex items-center justify-center">
                  <Leaf className="w-5 h-5 xl:w-6 xl:h-6 text-black" strokeWidth={1} />
                </span>
                <span className="w-[42px] h-[42px] xl:w-[48px] xl:h-[48px] rounded-full border border-black flex items-center justify-center">
                  <Atom className="w-5 h-5 xl:w-6 xl:h-6 text-black" strokeWidth={1} />
                </span>
              </span>
              Intelligence
            </h1>
          </div>

          <p className="mt-8 text-[17px] text-[#475569] max-w-2xl mx-auto font-['Manrope']">
            ROOTWISE illustrates how products cater to the needs of farmers globally,
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-[#4EB74B] text-white rounded-full py-3.5 px-8 font-medium hover:bg-green-600 transition-colors cursor-pointer"
            >
              Start Grow Smarter
            </motion.button>
            <motion.button 
              whileHover="hover"
              className="w-12 h-12 rounded-full bg-[#4EB74B] flex items-center justify-center text-white hover:bg-green-600 transition-colors cursor-pointer"
              variants={{ hover: { scale: 1.03 } }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div variants={{ hover: { x: 4 } }} transition={{ type: "spring", stiffness: 300 }}>
                <ArrowRight size={20} strokeWidth={2} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* Bottom Half Image and Overlay Content */}
      <div className="relative w-full min-h-[550px] -mt-6 z-10 flex flex-col justify-end">
        <div className="relative w-full h-[550px] xl:h-[600px] overflow-hidden">
          <motion.img
            src={heroImg}
            alt="Agricultural Field"
            className="w-full h-full object-cover"
            style={{ scale: backgroundScale, x: bgX, y: bgY }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Annotations Container */}
          <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto px-4 lg:px-8">

            {/* 25 C Air Temperature */}
            <div className="absolute top-[35%] left-[32%] hidden md:block">
               <div className="absolute left-[20px] bottom-[70px] w-32 text-white">
                  <span className="block text-[22px] font-medium font-['Geist'] leading-tight drop-shadow-md">25 C</span>
                  <span className="block text-[13px] font-medium font-['Manrope'] opacity-90 drop-shadow-md">Air Temprature</span>
               </div>
               {/* Lines */}
               <svg width="20" height="75" className="absolute left-0 bottom-0 overflow-visible">
                 <path d="M 0 75 L 0 0 L 15 0" fill="none" stroke="white" strokeWidth="1.5" />
               </svg>
               {/* Dot at bottom */}
               <div className="absolute -left-[3.5px] -bottom-[3.5px] w-2 h-2 bg-white rounded-full"></div>
               <div className="absolute -left-[15px] -bottom-[4px] w-8 h-2 bg-white/40 blur-[2px] rounded-[50%]"></div>
            </div>

            {/* 100% Sunlight Pill */}
            <div className="absolute top-[45%] left-[22%] hidden md:flex items-center gap-3">
               {/* Dot with glow */}
               <div className="relative shrink-0">
                 <div className="w-3.5 h-3.5 bg-white rounded-full relative z-10"></div>
                 <div className="w-8 h-8 bg-white/30 rounded-full absolute -top-[9px] -left-[9px] animate-pulse"></div>
               </div>
               {/* Pill */}
               <div className="bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2.5 rounded-full text-white text-[13px] font-medium font-['Manrope'] shadow-lg">
                 100% Sunlight
               </div>
            </div>

            {/* 75% Soil Moisture */}
            <div className="absolute top-[50%] right-[32%] hidden md:block">
               <div className="absolute left-[35px] bottom-[55px] w-32 text-white">
                  <span className="block text-[22px] font-medium font-['Geist'] leading-tight drop-shadow-md">75%</span>
                  <span className="block text-[13px] font-medium font-['Manrope'] opacity-90 drop-shadow-md">Soil Moisture</span>
               </div>
               {/* Lines */}
               <svg width="30" height="60" className="absolute left-0 bottom-0 overflow-visible">
                 <path d="M 0 60 L 0 15 L 15 0 L 30 0" fill="none" stroke="white" strokeWidth="1.5" />
               </svg>
               {/* Dot at bottom */}
               <div className="absolute -left-[3.5px] -bottom-[3.5px] w-2 h-2 bg-white rounded-full"></div>
               <div className="absolute -left-[15px] -bottom-[4px] w-8 h-2 bg-white/40 blur-[2px] rounded-[50%]"></div>
            </div>

            {/* Bottom Text Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1 }}
              className="absolute bottom-12 left-0 w-full px-4 lg:px-12 xl:px-24 flex flex-col md:flex-row justify-between items-end md:items-end gap-6"
            >
              <h2 className="text-white text-[32px] md:text-[42px] xl:text-[48px] font-medium font-['Geist'] leading-[1.1] max-w-[400px]">
                The Journey to a <br /> Perfection.
              </h2>
              <p className="text-white text-[16px] md:text-[20px] font-medium font-['Geist'] leading-[1.3] max-w-[320px]">
                Book a products cater to the <br /> farmers globally,
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}



function Stats() {
  const stats = [
    { value: '50+', label: 'Year of Experience' },
    { value: '200+', label: 'Field in Progress' },
    { value: '120,000+', label: 'Farmer Around World' },
    { value: '$15 Billion', label: 'Agricultural Product' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1555, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 18, damping: 20 }
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:gap-y-12 lg:gap-y-0 lg:divide-x divide-gray-200"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center justify-center py-6 lg:py-0">
              <h3 className="text-[40px] lg:text-[46px] font-['Geist'] font-medium text-black leading-tight tracking-tight mb-2">
                {stat.value}
              </h3>
              <p className="text-[15px] font-['Manrope'] font-medium text-[#1A1A1A]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



function Impact() {
  return (
    <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="flex flex-col justify-start"
          >
            <h2 className="text-[42px] md:text-[52px] lg:text-[56px] font-normal font-['Geist'] leading-[1.1] tracking-tight text-black max-w-lg">
              The Impact We've <br /> Made in Agriculture
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-start max-w-xl"
          >
            <p className="text-[17px] font-medium font-['Manrope'] text-[#1A1A1A] leading-relaxed mb-6">
              At ROOTWISE, we are dedicated to transforming agriculture into a sustainable and modern industry. Our mission is to empower farmers, agribusinesses, and communities with eco-friendly solutions, advanced
            </p>
            <p className="text-[17px] font-medium font-['Manrope'] text-[#9CA3AF] leading-relaxed mb-10">
              We believe in a future where agriculture not only feeds the world but also preserves the planet for generations to come.
            </p>
            <div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4EB74B] text-white rounded-full py-2.5 pl-6 pr-2.5 flex items-center gap-4 hover:bg-green-600 transition-colors w-max cursor-pointer"
              >
                <span className="font-semibold font-['Geist'] text-[15px]">Learn More</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowRight size={16} strokeWidth={2.5} className="text-black" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



function Services() {
  const services = [
    { num: '01', title: 'Farm Management Tools', active: false },
    { num: '02', title: 'Agronomy Support', active: true },
    { num: '03', title: 'Harvest Marketing', active: false },
    { num: '04', title: 'Supply Chain Access', active: false },
  ];

  // SVG Math for Segmented Gauge
  const cx = 100;
  const cy = 100;
  const r = 70;
  const strokeWidth = 28;
  const totalSegments = 10;
  const activeSegments = 8;
  const gap = 4; // gap between segments in degrees
  const anglePerSegment = 180 / totalSegments;

  const renderSegment = (index) => {
    // 180 is left (start), sweeping clockwise to 360 (right)
    const startAngle = 180 + (index * anglePerSegment) + (gap / 2);
    const endAngle = 180 + ((index + 1) * anglePerSegment) - (gap / 2);

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);

    const isActive = index < activeSegments;
    const color = isActive ? '#4EB74B' : '#A3D9A5'; // Vibrant green vs faded green

    return (
      <motion.path
        key={index}
        d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + (index * 0.05), ease: "easeOut" }}
      />
    );
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-24">

        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8"
        >
          <div className="flex flex-col">
            <h2 className="text-[40px] md:text-[56px] font-normal font-['Geist'] leading-[1.2] tracking-tight text-black flex flex-wrap items-center gap-4">
              Smart Tools for
              <div className="w-12 h-12 rounded-full border border-[#00000020] flex items-center justify-center shrink-0">
                <ShoppingCart size={20} strokeWidth={1.5} className="text-black" />
              </div>
            </h2>
            <h2 className="text-[40px] md:text-[56px] font-normal font-['Geist'] leading-[1.2] tracking-tight text-black flex flex-wrap items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#00000020] flex items-center justify-center shrink-0">
                <Atom size={20} strokeWidth={1.5} className="text-black" />
              </div>
              Modern Farming
            </h2>
          </div>
          <p className="text-[17px] font-medium font-['Manrope'] text-[#1A1A1A] max-w-sm leading-relaxed lg:text-left mt-4 lg:mt-0">
            ROOTWISE provides tools that simplify farm planning, monitoring, and sustainable yields.
          </p>
        </motion.div>

        {/* 3 Columns Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut", staggerChildren: 0.155 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr] gap-10 xl:gap-14"
        >

          {/* Column 1: Services List */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 18, damping: 20 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-[24px] font-semibold font-['Geist'] text-black mb-6">
              Our Core Services
            </h3>
            <div className="flex flex-col justify-between flex-1">
              {services.map((srv, idx) => (
                <div key={idx} className="flex flex-col">
                  <motion.div
                    whileHover={{ scale: srv.active ? 1 : 1.02, x: srv.active ? 0 : 5 }}
                    className={`flex items-center justify-between py-3.5 xl:py-4 ${
                      srv.active ? 'bg-[#4EB74B] rounded-full px-6 text-white' : 'px-2 text-gray-500 hover:text-black cursor-pointer'
                    } transition-colors`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-[15px] font-bold ${srv.active ? 'text-white' : 'text-gray-400'}`}>
                        {srv.num}
                      </span>
                      <span className={`text-[16px] font-medium font-['Manrope'] ${srv.active ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        {srv.title}
                      </span>
                    </div>
                    {srv.active ? (
                      <ArrowUpRight size={18} className="text-white" />
                    ) : (
                      <ArrowUpRight size={18} className="text-gray-400" />
                    )}
                  </motion.div>
                  {/* Subtle Border Line */}
                  {!srv.active && idx !== services.length - 1 && (
                    <div className="w-full h-[1px] bg-[#00000010] mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Soil Moisture Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 18, damping: 20, delay: 0.2 }}
            whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
            className="bg-[#103320] rounded-[32px] p-6 xl:p-8 flex flex-col justify-between relative shadow-xl overflow-hidden h-full cursor-pointer"
          >
            <div className="flex items-center justify-between relative z-10 shrink-0">
              <h4 className="text-white text-[20px] xl:text-[22px] font-medium font-['Geist']">
                Soil Moisture Level
              </h4>
              <motion.div 
                whileHover={{ rotate: 45 }}
                className="w-10 h-10 rounded-full bg-[#4EB74B] flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors ml-2 shrink-0"
              >
                <ArrowRight size={18} className="text-white" />
              </motion.div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center relative mt-6 mb-6 min-h-0">
              {/* Gauge SVG */}
              <svg viewBox="0 0 200 110" className="w-[85%] max-w-[280px] drop-shadow-2xl h-full">
                {Array.from({length: totalSegments}).map((_, i) => renderSegment(i))}
                <motion.text 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.6 }}
                  x="100" y="95" fill="white" fontSize="36" fontWeight="500" fontFamily="Geist" textAnchor="middle"
                >
                  80%
                </motion.text>
              </svg>
            </div>

            <p className="text-[13px] font-medium font-['Manrope'] text-[#E5E7EB] leading-[1.6] relative z-10 shrink-0">
              Rootwise Helps Farmers Adopt Modern, Sustainable Practices. Solutions Connecting Farmers With Tools, Knowledge, And Sustainable Growth Worldwide.
            </p>
          </motion.div>

          {/* Column 3: Agronomy Support Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 18, damping: 20, delay: 0.4 }}
            className="flex flex-col gap-6 h-full"
          >
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-[#4EB74B] rounded-full py-3 flex items-center justify-center w-full bg-white cursor-pointer hover:bg-green-50 transition-colors shrink-0"
            >
              <span className="text-[#4EB74B] font-medium font-['Manrope'] text-[15px]">
                Agronomy Support
              </span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, damping: 20 }}
              className="flex-1 rounded-[32px] overflow-hidden shadow-lg border border-[#0000000D] min-h-0 relative cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={agronomyImg}
                alt="Agronomy Support"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}



// Temporary imports, will be replaced with generated images

function Portfolio() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-24">

        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8"
        >
          <h2 className="text-[42px] md:text-[56px] font-normal font-['Geist'] leading-[1.1] tracking-tight text-black max-w-lg">
            Cultivating a <br /> Resilient Future
          </h2>
          <p className="text-[17px] font-medium font-['Manrope'] text-[#1A1A1A] max-w-md leading-relaxed">
            Explore a curated selection of farm-fresh produce, grown with ethical practices and a deep respect for the natural harmony of the soil.
          </p>
        </motion.div>

        {/* Filter and Navigation Toolbar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 border-b border-gray-200 pb-8"
        >
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <motion.span whileHover={{ scale: 1.05 }} className="text-[17px] font-bold font-['Manrope'] text-black cursor-pointer">Organic farm</motion.span>
            <motion.span whileHover={{ scale: 1.05 }} className="text-[17px] font-medium font-['Manrope'] text-gray-400 cursor-pointer hover:text-black transition-colors">Automation farm</motion.span>
            <motion.span whileHover={{ scale: 1.05 }} className="text-[17px] font-medium font-['Manrope'] text-gray-400 cursor-pointer hover:text-black transition-colors">Bio-medical farm</motion.span>
          </div>

          <div className="flex items-center gap-5">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={scrollLeft} className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <ArrowLeft size={18} strokeWidth={2} className="text-gray-500" />
            </motion.button>
            <span className="font-bold text-[15px] font-['Geist'] tracking-wide">01/15</span>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={scrollRight} className="w-12 h-12 rounded-full bg-[#4EB74B] flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 cursor-pointer">
              <ArrowRight size={18} strokeWidth={2} className="text-white" />
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* Horizontal Scrollable Carousel */}
      {/* Placed outside inner max-w to allow scrolling to the edge, but with padding to align initially */}
      <div className="w-full pl-4 lg:pl-[calc((100vw-1280px)/2+48px)] xl:pl-[calc((100vw-1280px)/2+96px)] max-[1280px]:lg:pl-12 max-[1280px]:xl:pl-24">
        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1555, delayChildren: 0.3 }
            }
          }}
          className="flex items-end gap-6 overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-24"
        >
          {/* Card 1: Large */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }}
            className="flex flex-col min-w-[320px] md:min-w-[460px] snap-start"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold font-['Geist'] text-[16px] md:text-[18px]">01</span>
              <span className="font-medium font-['Manrope'] text-[16px] md:text-[18px]">Technology Irrigation</span>
            </div>
            <motion.div 
              whileHover="hover"
              className="relative w-full h-[320px] md:h-[380px] rounded-[32px] overflow-hidden shadow-sm cursor-pointer"
            >
              <motion.img 
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                src={img1} alt="Irrigation" className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <h3 className="text-white text-[32px] md:text-[38px] font-medium font-['Geist'] leading-[1.1]">
                  Technology <br /> Irrigation
                </h3>
                <motion.div 
                  variants={{ hover: { x: 5 } }}
                  className="bg-white rounded-full py-3 px-6 flex items-center justify-between w-max gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[14px] font-bold font-['Manrope'] text-black">Explore Problem</span>
                  <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                    <ArrowRight size={14} className="text-black" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2: Normal, text top */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }}
            className="flex flex-col min-w-[260px] md:min-w-[280px] snap-start"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold font-['Geist'] text-[16px] md:text-[18px]">02</span>
              <span className="font-medium font-['Manrope'] text-[16px] md:text-[18px]">Organic Fertilizer</span>
            </div>
            <motion.div whileHover="hover" className="relative w-full h-[300px] md:h-[360px] rounded-[32px] overflow-hidden shadow-sm cursor-pointer">
              <motion.img variants={{ hover: { scale: 1.05 } }} transition={{ duration: 0.9, ease: "easeOut" }} src={img2} alt="Fertilizer" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Card 3: Normal, text bottom */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }}
            className="flex flex-col min-w-[260px] md:min-w-[280px] snap-start"
          >
            <motion.div whileHover="hover" className="relative w-full h-[300px] md:h-[360px] rounded-[32px] overflow-hidden shadow-sm mb-5 cursor-pointer">
              <motion.img variants={{ hover: { scale: 1.05 } }} transition={{ duration: 0.9, ease: "easeOut" }} src={img3} alt="Greenhouse" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            <div className="flex items-center justify-between">
              <span className="font-bold font-['Geist'] text-[16px] md:text-[18px]">03</span>
              <span className="font-medium font-['Manrope'] text-[16px] md:text-[18px]">Smart Greenhouse</span>
            </div>
          </motion.div>

          {/* Card 4: Normal, text top */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }}
            className="flex flex-col min-w-[260px] md:min-w-[280px] snap-start"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold font-['Geist'] text-[16px] md:text-[18px]">04</span>
              <span className="font-medium font-['Manrope'] text-[16px] md:text-[18px]">Agricultural Monitoring</span>
            </div>
            <motion.div whileHover="hover" className="relative w-full h-[300px] md:h-[360px] rounded-[32px] overflow-hidden shadow-sm cursor-pointer">
              <motion.img variants={{ hover: { scale: 1.05 } }} transition={{ duration: 0.9, ease: "easeOut" }} src={img4} alt="Drone" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}



function Features() {
  const features = [
    {
      title: 'Eco Friendly\nPractices',
      description: 'Sustainable farming methods that protect nature, conserve resources, and ensure healthier food',
      icon: <Leaf size={22} strokeWidth={1.5} />,
      active: true,
    },
    {
      title: 'Modern Farming\nTechnology',
      description: 'From drones to IoT sensors, we bring advanced tools that increase efficiency and boost crop productivity.',
      icon: <Link2 size={22} strokeWidth={1.5} />,
      active: false,
    },
    {
      title: 'Transparent\nData',
      description: 'Real-time monitoring and accurate crop analytics that help farmers make smarter decisions',
      icon: <SquareTerminal size={22} strokeWidth={1.5} />,
      active: false,
    }
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-24">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-8"
        >
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-normal font-['Geist'] leading-[1.1] tracking-tight text-white max-w-2xl">
            Farming Smarter, Growing <br className="hidden md:block" /> Stronger Together
          </h2>
          <p className="text-[17px] font-medium font-['Manrope'] text-[#9CA3AF] max-w-[400px] leading-relaxed">
            Agriculture is more than just planting crops it's about sustainability, innovation, and empowering communities.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.155, delayChildren: 0.3 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } }
              }}
              whileHover={{ y: -10 }}
              className={`p-10 md:p-8 xl:p-10 rounded-[32px] flex flex-col justify-between h-[420px] transition-colors duration-500 cursor-pointer ${
                item.active ? 'bg-[#4EB74B] text-white shadow-[0_20px_40px_rgba(78,183,75,0.3)]' : 'bg-[#F4F4F4] text-black hover:shadow-xl'
              }`}
            >
              <div className={`w-14 h-14 rounded-full border flex items-center justify-center shrink-0 ${
                item.active ? 'border-white/50 text-white' : 'border-[#103320]/20 text-black'
              }`}>
                {item.icon}
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-[28px] xl:text-[32px] font-medium font-['Geist'] leading-[1.1] whitespace-pre-line tracking-tight">
                  {item.title}
                </h3>
                <p className={`text-[15px] font-medium font-['Manrope'] leading-relaxed ${
                  item.active ? 'text-white' : 'text-[#6B7280]'
                }`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}



export function Testimonials() {
  const cx = 100;
  const cy = 100;
  const r = 70;
  const strokeWidth = 28;
  const totalSegments = 12;
  const activeSegments = 9;
  const gap = 4;
  const anglePerSegment = 180 / totalSegments;

  const renderSegment = (index) => {
    const startAngle = 180 + (index * anglePerSegment) + (gap / 2);
    const endAngle = 180 + ((index + 1) * anglePerSegment) - (gap / 2);

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);

    const isActive = index < activeSegments;
    const color = isActive ? '#0A2D19' : '#BCE4C1'; // Dark green vs light green
    return (
      <motion.path
        key={index}
        d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + (index * 0.05), ease: "easeOut" }}
      />
    );
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-24">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6"
        >
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-normal font-['Geist'] leading-[1.1] tracking-tight text-black">
            What our users say
          </h2>

          <div className="flex items-center gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-[#F5F5F5] flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <ArrowLeft size={20} strokeWidth={1.5} className="text-gray-500" />
              </div>
              <span className="font-bold text-[15px] font-['Geist'] tracking-wide uppercase">Previous</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 cursor-pointer group">
              <span className="font-bold text-[15px] font-['Geist'] tracking-wide uppercase">Next</span>
              <div className="w-14 h-14 rounded-full bg-[#4EB74B] flex items-center justify-center group-hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20">
                <ArrowRight size={20} strokeWidth={1.5} className="text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
          className="w-full h-[1px] bg-gray-200 mb-16"
        ></motion.div>

        {/* Top Content: Quote and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-8 lg:gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 70, damping: 18, damping: 20 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-[26px] md:text-[30px] lg:text-[35px] font-medium font-['Geist'] leading-[1.4] text-black mb-10 tracking-tight whitespace-nowrap overflow-visible">
              “Using ROOTWISE transformed our farm’s efficiency <br className="hidden md:block" /> and improved yields. Growth made simple.”
            </h3>
            <div className="flex items-center gap-4">
              <img src={avatarImg} alt="David Farmer" className="w-16 h-16 rounded-full object-cover bg-gray-200" />
              <span className="font-bold text-[20px] font-['Geist'] text-black tracking-tight">David Farmer</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 70, damping: 18, damping: 20, delay: 0.2 }}
            className="relative flex justify-end items-center"
          >
            <div className="relative w-full max-w-[280px]">
              {/* Massive Quote Icon */}
              <div className="absolute -top-6 -left-8 z-10 text-black hidden sm:block scale-75">
                <svg width="80" height="60" viewBox="0 0 100 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 0C43.2843 0 50 6.71573 50 15V45C50 64.33 34.33 80 15 80H10V60H15C23.2843 60 30 53.2843 30 45V30H10C4.47715 30 0 25.5228 0 20V10C0 4.47715 4.47715 0 10 0H35ZM85 0C93.2843 0 100 6.71573 100 15V45C100 64.33 84.33 80 65 80H60V60H65C73.2843 60 80 53.2843 80 45V30H60C54.4771 30 50 25.5228 50 20V10C50 4.47715 54.4771 0 60 0H85Z" />
                </svg>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="w-full h-[160px] rounded-[20px] rounded-tr-[32px] rounded-bl-[32px] overflow-hidden cursor-pointer">
                <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} src={landscapeImg} alt="Field" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Content: 2 Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.155, delayChildren: 0.3 }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6"
        >

          {/* Productivity Card */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            className="bg-[#F5F5F5] rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[260px] cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-[15px] font-bold font-['Geist'] text-black tracking-wide uppercase">Farm Productivity Rate</span>
              <motion.div whileHover={{ rotate: 45 }} className="w-12 h-12 rounded-full bg-[#103320] flex items-center justify-center cursor-pointer hover:bg-black transition-colors shrink-0">
                <ArrowRight size={20} className="text-white" />
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-auto">
              <div className="relative w-full max-w-[220px] shrink-0">
                <svg viewBox="0 0 200 110" className="w-full drop-shadow-sm">
                  {Array.from({length: totalSegments}).map((_, i) => renderSegment(i))}
                  <motion.text 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.8 }}
                    x="100" y="95" fill="black" fontSize="42" fontWeight="500" fontFamily="Geist" textAnchor="middle"
                  >
                    80%
                  </motion.text>
                </svg>
              </div>
              <p className="text-[16px] font-medium font-['Manrope'] text-[#1A1A1A] leading-relaxed">
                From drones to IoT sensors, we bring advanced tools that increase efficiency and boost crop productivity.
              </p>
            </div>
          </motion.div>

          {/* Rootwise Info Card */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16,51,32,0.3)" }}
            className="bg-[#103320] rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[260px] cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-[15px] font-medium font-['Manrope'] text-white">With</span>
              <span className="text-[24px] font-medium font-['Geist'] text-white tracking-widest uppercase">ROOTWISE</span>
            </div>

            <p className="text-[17px] font-medium font-['Manrope'] text-white/90 leading-relaxed max-w-sm mb-8 mt-auto">
              ROOTWISE helps farmers adopt modern, sustainable practices.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-white rounded-full py-2.5 px-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors mt-auto group">
              <span className="text-[15px] font-bold font-['Manrope'] text-black">More Information</span>
              <div className="w-10 h-10 rounded-full bg-[#103320] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight size={18} className="text-white" />
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}



export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does ROOTWISE integrate AI?",
      answer: "At ROOTWISE, we leverage cutting-edge AI to power automation, cybersecurity, and data analytics. Our AI-driven systems adapt in real-time, ensuring seamless performance"
    },
    {
      question: "What makes ROOTWISE different from other?",
      answer: "ROOTWISE offers unparalleled integration with existing farm equipment and uses proprietary satellite imagery analysis to give you precise, actionable insights that other platforms miss."
    },
    {
      question: "How can I collaborate with ROOTWISE?",
      answer: "We are always looking for forward-thinking agricultural partners. You can reach out to our partnership team via the contact form to discuss pilot programs and integrations."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 dedicated support for all our enterprise clients, including on-site training, remote troubleshooting, and continuous software updates."
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 xl:px-24">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8"
        >
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-normal font-['Geist'] leading-[1.1] tracking-tight text-black max-w-xl">
            Frequently <br /> Asked Questions
          </h2>
          <div className="lg:pt-4">
            <p className="text-[16px] font-medium font-['Manrope'] text-gray-500 max-w-sm leading-relaxed">
              Curious about ROOTWISE? We've got the answers. Explore our most common inquiries about our futuristic technologies
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">

          {/* Left Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.155 } }
            }}
            className="flex flex-col"
          >
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 70, damping: 18 } } }} className="w-full h-[280px] md:h-[320px] rounded-[32px] overflow-hidden mb-12">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src={plantImg} alt="Planting" className="w-full h-full object-cover cursor-pointer" />
            </motion.div>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-[16px] font-medium font-['Manrope'] text-black/80 max-w-sm leading-relaxed mb-12">
              Curious about ROOTWISE ? We've got the answers. Explore our most common inquiries about our futuristic technologies
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-8">
              {['01', '02', '03', '04'].map((num, i) => (
                <motion.span
                  key={num}
                  whileHover={{ y: -3 }}
                  className={`text-[16px] font-bold font-['Geist'] cursor-pointer transition-colors ${
                    i === 0 ? 'text-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {num}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1555, delayChildren: 0.3 } }
            }}
            className="flex flex-col gap-4"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } } }}
                  whileHover={{ x: -5, backgroundColor: "#EFEFEF" }}
                  className="w-full bg-[#F5F5F5] rounded-[24px] p-6 md:p-8 cursor-pointer transition-all duration-300"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[17px] font-medium font-['Geist'] text-black">
                      {faq.question}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-black">
                      <ChevronDown size={20} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? 24 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[15px] font-medium font-['Manrope'] text-[#1A1A1A] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}


function CTA() {
  return (
    <section className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="absolute inset-0 z-0"
      >
        <img src={ctaBg} alt="Farm background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </motion.div>

      {/* Floating tags */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 w-full max-w-7xl mx-auto px-8 lg:px-12 xl:px-24 flex justify-between items-center z-10 text-white/80 text-[15px] font-medium font-['Manrope']"
      >
        <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>Organic Farming</motion.span>
        <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="hidden md:block">Hydroponics</motion.span>
        <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="hidden lg:block">Hydroponics</motion.span>
        <motion.span animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="hidden sm:block">Farm Management</motion.span>
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.1, delay: 0.2, type: "spring" }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-3xl mt-12"
      >
        <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-normal font-['Geist'] leading-[1.1] text-white mb-10 tracking-tight drop-shadow-lg">
          Join the Agricultural <br className="hidden md:block" /> Revolution Today!
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-[52px] rounded-full px-6 text-[15px] font-medium font-['Manrope'] text-black bg-white outline-none placeholder:text-gray-500 shadow-xl focus:ring-4 focus:ring-green-500/30 transition-all"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-[52px] px-6 rounded-full bg-[#4EB74B] hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-xl cursor-pointer"
          >
            <span className="text-white font-bold text-[15px] font-['Manrope']">Subscribe</span>
            <ArrowUpRight size={18} strokeWidth={2.5} className="text-white" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}



export default function Homepage() {
  return (
    <>
      <Hero />
      <Stats />
      <Impact />
      <Services />
      <Portfolio />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}



function CinematicRootAnimation() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-90">
      <svg viewBox="0 0 1000 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="emerald-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="root-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#0B5C32" stopOpacity="0" />
            <stop offset="50%" stopColor="#0B5C32" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4EB74B" stopOpacity="1" />
          </linearGradient>
        </defs>


        {/* Neural Nodes Blinking */}
        {[
          { cx: 500, cy: 400, r: 8, delay: 0 },
          { cx: 100, cy: 250, r: 6, delay: 1 },
          { cx: 900, cy: 250, r: 6, delay: 2 },
          { cx: 50, cy: 0, r: 5, delay: 3 },
          { cx: 950, cy: 0, r: 5, delay: 4 },
          { cx: 500, cy: 0, r: 5, delay: 5 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#D1F2D9"
            filter="url(#emerald-glow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 8,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Inner intense pulse for nodes */}
        {[
          { cx: 500, cy: 400, r: 4, delay: 0 },
          { cx: 100, cy: 250, r: 3, delay: 1 },
          { cx: 900, cy: 250, r: 3, delay: 2 },
        ].map((node, i) => (
          <motion.circle
            key={`inner-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#ffffff"
            filter="url(#strong-glow)"
            animate={{ scale: [1, 1.2, 1], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 8,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Information Pulses / Particles Flowing */}
        <motion.path
          d="M 500 800 C 480 650, 520 500, 500 400 C 350 350, 200 400, 100 250
             M 500 800 C 480 650, 520 500, 500 400 C 650 350, 800 400, 900 250
             M 500 800 C 480 650, 520 500, 500 400 C 450 200, 550 100, 500 0"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="4 196"
          animate={{ strokeDashoffset: [200, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          filter="url(#emerald-glow)"
          style={{ opacity: 0.7 }}
        />
      </svg>
    </div>
  );
}
