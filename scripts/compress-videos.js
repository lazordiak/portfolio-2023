#!/usr/bin/env node

/**
 * Video Compression Script for Portfolio Optimization
 * 
 * This script provides video compression guidelines and commands using ffmpeg.
 * Run this script to get compression commands for your large video files.
 * 
 * Prerequisites:
 * - Install ffmpeg: brew install ffmpeg (macOS) or apt install ffmpeg (Ubuntu)
 * 
 * Usage:
 * node scripts/compress-videos.js
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Video files to compress with their current sizes and target sizes
const videoOptimizations = [
  {
    input: '/spirits/SpiritVid1.mp4',
    currentSize: '68MB',
    targetSize: '5MB',
    description: 'Spiritwood AR Demo - Primary Hero Video'
  },
  {
    input: '/spirits/SpiritsVid2.mp4', 
    currentSize: '59MB',
    targetSize: '5MB',
    description: 'Spiritwood AR Interaction Demo'
  },
  {
    input: '/ForagerCut.mp4',
    currentSize: '30MB', 
    targetSize: '3MB',
    description: 'Forager VR Experience Demo'
  },
  {
    input: '/WhereUGoVid.mp4',
    currentSize: '17MB',
    targetSize: '2MB', 
    description: 'Wherever You Go VR Demo'
  }
];

console.log('🎬 Portfolio Video Compression Guide');
console.log('=====================================\n');

console.log('📊 Current Video Sizes Analysis:');
videoOptimizations.forEach((video, index) => {
  console.log(`${index + 1}. ${video.description}`);
  console.log(`   File: ${video.input}`);
  console.log(`   Current: ${video.currentSize} → Target: ${video.targetSize}`);
  console.log('');
});

console.log('🛠️  Compression Commands:');
console.log('Run these ffmpeg commands to compress your videos:\n');

videoOptimizations.forEach((video, index) => {
  const inputPath = `public${video.input}`;
  const outputPath = `public${video.input.replace('.mp4', '-compressed.mp4')}`;
  
  console.log(`# ${index + 1}. ${video.description}`);
  console.log(`# ${video.currentSize} → ${video.targetSize}`);
  
  // High-quality compression command
  console.log(`ffmpeg -i "${inputPath}" \\`);
  console.log(`  -c:v libx264 \\`);
  console.log(`  -preset medium \\`);
  console.log(`  -crf 23 \\`);
  console.log(`  -c:a aac \\`);
  console.log(`  -b:a 128k \\`);
  console.log(`  -movflags +faststart \\`);
  console.log(`  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \\`);
  console.log(`  "${outputPath}"`);
  console.log('');
});

console.log('📋 After compression, replace original files:');
videoOptimizations.forEach((video, index) => {
  const originalPath = `public${video.input}`;
  const compressedPath = `public${video.input.replace('.mp4', '-compressed.mp4')}`;
  console.log(`mv "${compressedPath}" "${originalPath}"`);
});

console.log('\n💡 Compression Settings Explained:');
console.log('- libx264: Best compatibility codec');
console.log('- preset medium: Balance between compression time and file size');  
console.log('- crf 23: High quality (lower numbers = higher quality)');
console.log('- movflags +faststart: Enables progressive loading');
console.log('- scale: Ensures consistent 1080p resolution');
console.log('- aac 128k: High-quality audio compression');

console.log('\n🎯 Expected Results:');
console.log('- 68MB → ~5MB (93% reduction)');
console.log('- 59MB → ~5MB (92% reduction)');  
console.log('- 30MB → ~3MB (90% reduction)');
console.log('- Total savings: ~189MB → ~13MB (93% total reduction)');

console.log('\n⚠️  Important Notes:');
console.log('1. Always backup original files before compression');
console.log('2. Test compressed videos to ensure quality is acceptable');
console.log('3. The lazy loading we implemented will help with performance');
console.log('4. Consider hosting very large videos on a CDN for better performance');

console.log('\n🚀 Next Steps:');
console.log('1. Run the ffmpeg commands above');
console.log('2. Test the compressed videos in your app');
console.log('3. Deploy and measure the performance improvement');
console.log('4. Consider implementing video streaming for future large files');