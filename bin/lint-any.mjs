import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    return;
  }
  for (const file of files) {
    const filepath = path.join(dir, file);
    let stat;
    try {
      stat = fs.statSync(filepath);
    } catch (e) {
      continue;
    }
    if (stat.isDirectory()) {
      walk(filepath, callback);
    } else if (stat.isFile() && filepath.endsWith('.ts')) {
      callback(filepath);
    }
  }
}

const roots = [
  '/Users/shivaneep/google-cloud-node/packages',
  '/Users/shivaneep/google-cloud-node/core'
];

const disableComment = '/* eslint-disable @typescript-eslint/no-explicit-any */';
let violations = 0;

roots.forEach(rootDir => {
  walk(rootDir, (filepath) => {
    const content = fs.readFileSync(filepath, 'utf8');
    
    // Skip files that have the disable comment at the top
    if (content.startsWith(disableComment)) {
      return;
    }
    
    if (content.includes(': any') || content.includes('as any') || content.includes('<any>')) {
      console.error(`Violation found in ${filepath}`);
      violations++;
    }
  });
});

if (violations > 0) {
  console.error(`Found ${violations} file(s) with 'any' references.`);
  process.exit(1);
} else {
  console.log('No violations found.');
  process.exit(0);
}
