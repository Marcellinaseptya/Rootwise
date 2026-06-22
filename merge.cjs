const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Rootwise/src/components/HomePage';
const filesToMerge = [
  'Hero.jsx', 'Stats.jsx', 'Impact.jsx', 'Services.jsx', 
  'Portfolio.jsx', 'Features.jsx', 'Testimonials.jsx', 'FAQ.jsx', 'CTA.jsx'
];

let allImports = [];
let allComponents = [];

for (const file of filesToMerge) {
  const filePath = path.join(targetDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  let inImportSection = true;
  let componentLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimEnd();
    if (line.startsWith('import ')) {
      allImports.push(line);
    } else if (line.trim() === '' && inImportSection) {
      // skip
    } else {
      inImportSection = false;
      if (line.startsWith('export default function')) {
        componentLines.push(line.replace('export default function', 'function'));
      } else if (line.startsWith('export default ')) {
        componentLines.push(line.replace('export default ', ''));
      } else {
        componentLines.push(line);
      }
    }
  }
  allComponents.push(componentLines.join('\n'));
}

// Process imports
let uniqueImports = new Set();
let lucideImports = new Set();
let otherImports = [];

for (const imp of allImports) {
  if (imp.includes('import React')) continue;
  
  if (imp.includes("from 'lucide-react'") || imp.includes('from "lucide-react"')) {
    const match = imp.match(/\{([^}]+)\}/);
    if (match) {
      const items = match[1].split(',').map(s => s.trim()).filter(Boolean);
      items.forEach(item => lucideImports.add(item));
    }
  } else {
    if (!uniqueImports.has(imp)) {
      uniqueImports.add(imp);
      otherImports.push(imp);
    }
  }
}

let finalImports = ["import React, { useState, useEffect, useRef } from 'react';"];
if (lucideImports.size > 0) {
  finalImports.push(`import { ${Array.from(lucideImports).join(', ')} } from 'lucide-react';`);
}
finalImports.push(...otherImports);

const homepageFunc = `
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
`;

const finalContent = finalImports.join('\n') + '\n\n' + allComponents.join('\n\n') + '\n\n' + homepageFunc;

fs.writeFileSync(path.join(targetDir, 'Homepage.jsx'), finalContent);

// Delete old files
for (const file of filesToMerge) {
  if (fs.existsSync(path.join(targetDir, file))) {
    fs.unlinkSync(path.join(targetDir, file));
  }
}
console.log('Merged successfully.');
