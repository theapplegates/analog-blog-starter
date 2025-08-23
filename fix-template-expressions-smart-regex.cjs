#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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

  let changed = false;

  // Wrap non-string fallback in fixed-greeting key
  modified = modified.replace(
    /key={`fixed-greeting-\$\{index\}-\$\{typeof item === 'string' \? item\.slice$begin:math:text$0, ?20$end:math:text$ : ([^}]+)\}`}/g,
    (_, fallback) => {
      changed = true;
      return `key={\`fixed-greeting-\${index}-\${typeof item === 'string' ? item.slice(0, 20) : String(${fallback})}\`}`;
    }
  );

  // Wrap non-string fallback in scrolled-greeting key
  modified = modified.replace(
    /key={`scrolled-greeting-\$\{index\}-\$\{typeof item === 'string' \? item\.slice$begin:math:text$0, ?20$end:math:text$ : ([^}]+)\}`}/g,
    (_, fallback) => {
      changed = true;
      return `key={\`scrolled-greeting-\${index}-\${typeof item === 'string' ? item.slice(0, 20) : String(${fallback})}\`}`;
    }
  );

  // Handle Icon.name || index in post-license.tsx
  modified = modified.replace(
    /key={`license-icon-\$\{licenseMerged\}-\$\{([^}]+)\}`}/g,
    (_, expr) => {
      changed = true;
      return `key={\`license-icon-\${licenseMerged}-\${typeof ${expr.split('||')[0].trim()} === 'string' ? ${expr.split('||')[0].trim()} : String(${expr})}\`}`;
    }
  );

  // Handle timeline key
  modified = modified.replace(
    /key={`timeline-\$\{news\.date\.getTime$begin:math:text$$end:math:text$\}-\$\{typeof news\.title === 'string' \? news\.title\.slice$begin:math:text$0, ?20$end:math:text$ : ([^}]+)\}`}/g,
    (_, fallback) => {
      changed = true;
      return `key={\`timeline-\${news.date.getTime()}-\${typeof news.title === 'string' ? news.title.slice(0, 20) : String(${fallback})}\`}`;
    }
  );

  if (changed) {
    fs.writeFileSync(fullPath + '.bak', original);
    fs.writeFileSync(fullPath, modified);
    console.log(`✅ Patched: ${filepath}`);
  } else {
    console.log(`⚠️  No changes needed: ${filepath}`);
  }
}

console.log('\n🔧 Regex-powered smart fix for ESLint template expression errors\n');
FILES.forEach(patchFile);
console.log('\n🎉 Done. Any changed files were backed up with `.bak` extension.\n');
