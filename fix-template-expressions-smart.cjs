#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to patch
const FILES = [
  'src/components/homepage/homepage-intro.tsx',
  'src/components/homepage/scrolled-greetings.tsx',
  'src/components/post-license.tsx',
  'src/components/timeline.tsx',
];

function patchFile(filepath) {
  const fullPath = path.resolve(filepath);
  const original = fs.readFileSync(fullPath, 'utf8');
  let modified = original;

  if (filepath.includes('homepage-intro')) {
    modified = modified.replace(
      /key={`fixed-greeting-\$\{index\}-\$\{typeof item === 'string' \? item\.slice$begin:math:text$0, 20$end:math:text$ : 'node'\}`}/g,
      'key={`fixed-greeting-${index}-${typeof item === \'string\' ? item.slice(0, 20) : String(item)}`}'
    );
  }

  if (filepath.includes('scrolled-greetings')) {
    modified = modified.replace(
      /key={`scrolled-greeting-\$\{index\}-\$\{typeof item === 'string' \? item\.slice$begin:math:text$0, 20$end:math:text$ : 'node'\}`}/g,
      'key={`scrolled-greeting-${index}-${typeof item === \'string\' ? item.slice(0, 20) : String(item)}`}'
    );
  }

  if (filepath.includes('post-license')) {
    modified = modified.replace(
      /key={`license-icon-\$\{licenseMerged\}-\$\{Icon\.name \|\| index\}`}/g,
      'key={`license-icon-${licenseMerged}-${typeof Icon.name === \'string\' ? Icon.name : String(index)}`}'
    );
  }

  if (filepath.includes('timeline')) {
    modified = modified.replace(
      /key={`timeline-\$\{news\.date\.getTime$begin:math:text$$end:math:text$\}-\$\{typeof news\.title === 'string' \? news\.title\.slice$begin:math:text$0, 20$end:math:text$ : index\}`}/g,
      'key={`timeline-${news.date.getTime()}-${typeof news.title === \'string\' ? news.title.slice(0, 20) : String(index)}`}'
    );
  }

  // Only write if changes were made
  if (modified !== original) {
    fs.writeFileSync(fullPath + '.bak', original);
    fs.writeFileSync(fullPath, modified);
    console.log(`✅ Patched: ${filepath}`);
  } else {
    console.log(`⚠️  No changes needed: ${filepath}`);
  }
}

console.log('\n🔧 Fixing template expression lint issues...\n');
FILES.forEach(patchFile);
console.log('\n🎉 Done. Backup files saved with .bak extension.\n');
