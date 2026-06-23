import React from 'react';
import { motion } from 'framer-motion';

export default function CinematicRootAnimation() {
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
