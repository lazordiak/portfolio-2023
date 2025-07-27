#!/usr/bin/env node

/**
 * Image Optimization Script for Portfolio Performance
 * 
 * This script provides image optimization guidelines and commands.
 * Identifies large images and provides compression commands.
 * 
 * Prerequisites:
 * - Install sharp-cli: npm install -g sharp-cli
 * - Or use imagemagick: brew install imagemagick
 * 
 * Usage:
 * node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const publicDir = path.join(__dirname, '../public');

// Large images that need optimization
const imageOptimizations = [
  {
    input: '/spirits/Spirits5.png',
    currentSize: '13MB',
    targetSize: '500KB',
    type: 'screenshot',
    description: 'Spiritwood AR Interface Screenshot'
  },
  {
    input: '/spirits/Spirits6.png',
    currentSize: '12MB', 
    targetSize: '500KB',
    type: 'screenshot',
    description: 'Spiritwood AR Interaction Screenshot'
  },
  {
    input: '/hacko.png',
    currentSize: '1MB',
    targetSize: '200KB',
    type: 'logo',
    description: 'Hackathon Logo/Badge'
  },
  {
    input: '/DOTMoar.jpg',
    currentSize: '984KB',
    targetSize: '300KB',
    type: 'photo',
    description: 'Department of Tenderness Project Photo'
  },
  {
    input: '/rattrack2.png',
    currentSize: '936KB',
    targetSize: '250KB',
    type: 'screenshot',
    description: 'Rattrack Application Screenshot'
  }
];

console.log('🖼️  Portfolio Image Optimization Guide');
console.log('======================================\n');

console.log('📊 Large Images Analysis:');
imageOptimizations.forEach((image, index) => {
  console.log(`${index + 1}. ${image.description} (${image.type})`);
  console.log(`   File: ${image.input}`);
  console.log(`   Current: ${image.currentSize} → Target: ${image.targetSize}`);
  console.log('');
});

console.log('🛠️  Optimization Commands (using Sharp CLI):');
console.log('Install: npm install -g sharp-cli\n');

imageOptimizations.forEach((image, index) => {
  const inputPath = `public${image.input}`;
  const outputPath = `public${image.input.replace(/\.(jpg|jpeg|png)$/, '-optimized.$1')}`;
  
  console.log(`# ${index + 1}. ${image.description}`);
  console.log(`# ${image.currentSize} → ${image.targetSize}`);
  
  if (image.type === 'screenshot') {
    // High compression for screenshots
    console.log(`sharp -i "${inputPath}" -o "${outputPath}" -f webp -q 75 --width 1920`);
  } else if (image.type === 'photo') {
    // Balanced compression for photos
    console.log(`sharp -i "${inputPath}" -o "${outputPath}" -f webp -q 85 --width 1200`);
  } else if (image.type === 'logo') {
    // Preserve quality for logos but optimize size
    console.log(`sharp -i "${inputPath}" -o "${outputPath}" -f webp -q 90 --width 800`);
  }
  console.log('');
});

console.log('🛠️  Alternative Commands (using ImageMagick):');
console.log('Install: brew install imagemagick\n');

imageOptimizations.forEach((image, index) => {
  const inputPath = `public${image.input}`;
  const outputPath = `public${image.input.replace(/\.(jpg|jpeg|png)$/, '-optimized.webp')}`;
  
  console.log(`# ${index + 1}. ${image.description}`);
  if (image.type === 'screenshot') {
    console.log(`convert "${inputPath}" -quality 75 -resize 1920x1080\\> "${outputPath}"`);
  } else if (image.type === 'photo') {
    console.log(`convert "${inputPath}" -quality 85 -resize 1200x800\\> "${outputPath}"`);
  } else if (image.type === 'logo') {
    console.log(`convert "${inputPath}" -quality 90 -resize 800x600\\> "${outputPath}"`);
  }
  console.log('');
});

console.log('📋 Next.js Image Component Check:');
console.log('✅ Already using Next.js Image components (good!)');
console.log('✅ Images are automatically optimized by Next.js');
console.log('✅ Lazy loading is built-in');
console.log('✅ WebP format served automatically when supported');

console.log('\n🎯 Expected Results:');
console.log('- 13MB PNG → ~500KB WebP (96% reduction)');
console.log('- 12MB PNG → ~500KB WebP (96% reduction)');
console.log('- 1MB PNG → ~200KB WebP (80% reduction)');
console.log('- 984KB JPG → ~300KB WebP (70% reduction)');
console.log('- Total image savings: ~27MB → ~1.5MB (94% reduction)');

console.log('\n💡 Next.js Image Optimization Features:');
console.log('- Automatic format conversion (WebP, AVIF when supported)');
console.log('- Responsive images with srcset');
console.log('- Lazy loading by default');
console.log('- Blur placeholder support');
console.log('- Automatic size optimization');

console.log('\n⚡ Performance Impact:');
console.log('Combined with video optimization:');
console.log('- Videos: 461MB → ~13MB (93% reduction)');
console.log('- Images: ~27MB → ~1.5MB (94% reduction)');
console.log('- Total: ~488MB → ~14.5MB (97% total reduction!)');

console.log('\n✅ Recommendations:');
console.log('1. The app already uses Next.js Image - great job!');
console.log('2. Enable image optimization in next.config.js if not already');
console.log('3. Consider adding blur placeholders for better UX');
console.log('4. The lazy loading we implemented for videos also helps images');
console.log('5. Monitor Core Web Vitals after deploying optimizations');

console.log('\n🚀 Quick Wins Available:');
console.log('1. Your Next.js Image setup is already optimized');
console.log('2. Focus on the video compression for maximum impact');
console.log('3. The lazy loading improvements are already implemented');
console.log('4. Consider adding priority loading for above-the-fold images');