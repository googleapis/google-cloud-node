import fs from 'fs';
import path from 'path';

const packageName = process.argv[2];
if (!packageName) {
  console.error("Please provide a package name");
  process.exit(1);
}

const packagePath = path.join('packages', packageName);
const outputPath = path.join(packagePath, 'eslint-output.txt');

if (!fs.existsSync(outputPath)) {
  console.error(`Output file not found: ${outputPath}`);
  process.exit(1);
}

const content = fs.readFileSync(outputPath, 'utf8');
const lines = content.split('\n');

let currentFile = '';
const violationsPerFile = {};

for (const line of lines) {
  if (line.startsWith('/')) {
    currentFile = line.trim();
  } else if (line.match(/^\s+\d+:\d+\s+error/)) {
    // Match error message and rule ID
    // Example: "  21:14  error    Replace `...` with `...`  prettier/prettier"
    const match = line.match(/error\s+(.+?)\s+([^ ]+)$/);
    if (match) {
      const ruleId = match[2];
      if (!violationsPerFile[currentFile]) {
        violationsPerFile[currentFile] = new Set();
      }
      violationsPerFile[currentFile].add(ruleId);
    }
  }
}

for (const [file, rules] of Object.entries(violationsPerFile)) {
  if (fs.existsSync(file)) {
    const fileContent = fs.readFileSync(file, 'utf8');
    const ruleList = Array.from(rules).join(', ');
    const disableComment = `/* eslint-disable ${ruleList} */\n`;
    
    if (!fileContent.startsWith(disableComment)) {
      fs.writeFileSync(file, disableComment + fileContent);
      console.log(`Baselined ${file} with rules: ${ruleList}`);
    } else {
      console.log(`File ${file} already baselined.`);
    }
  } else {
    console.warn(`File not found: ${file}`);
  }
}
