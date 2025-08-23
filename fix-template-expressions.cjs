#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// All files to patch
const FILES = [
  'src/components/homepage/homepage-intro.tsx',
  'src/components/homepage/scrolled-greetings.tsx',
  'src/components/post-license.tsx',
  'src/components/timeline.tsx',
];

function patchFile(filepath) {
  const fullPath = path.resolve(filepath);
  const original = fs.readFileSync(fullPath, 'utf-8');
  let modified = original;

  if (filepath.includes('homepage-intro')) {
    modified = modified.replace(
      /item\.slice\(0, 20\)/g,
      'String(item.slice(0, 20))'
    );
  }

  if (filepath.includes('scrolled-greetings')) {
    modified = modified.replace(
      /item\.slice\(0, 20\)/g,
      'String(item.slice(0, 20))'
    );
  }

  if (filepath.includes('post-license')) {
    modified = modified.replace(
      /license-icon-\$\{licenseMerged\}-\$\{Icon\.name \|\| index\}/g,
      'license-icon-${String(licenseMerged)}-${String(Icon.name || index)}'
    );
  }

  if (filepath.includes('timeline')) {
    modified = modified.replace(
      /timeline-\$\{news\.date\.getTime\(\)\}-\$\{typeof news\.title === 'string' \? news\.title\.slice\(0, 20\) : index\}/g,
      'timeline-${String(news.date.getTime())}-${typeof news.title === \'string\' ? String(news.title.slice(0, 20)) : String(index)}'
    );
  }

  // Backup original file
  fs.writeFileSync(fullPath + '.bak', original);
  // Write modified version
  fs.writeFileSync(fullPath, modified);

  console.log(`✅ Patched: ${filepath}`);
}

console.log('\n🔧 Fixing template expression lint errors...\n');
FILES.forEach(patchFile);
console.log('\n🎉 All done. Original files backed up as .bak.\n');
