import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import streamJson from 'stream-json';
import StreamArray from 'stream-json/streamers/StreamArray.js';

const { parser } = streamJson;
const { streamArray } = StreamArray;

const packageName = process.argv[2];
if (!packageName) {
  console.error("Please provide a package name");
  process.exit(1);
}

const packagePath = path.join('packages', packageName);
const outputPath = path.join(packagePath, 'eslint-output.json');

if (!fs.existsSync(outputPath)) {
  console.error(`Output file not found: ${outputPath}`);
  process.exit(1);
}

async function processFiles() {
  const fileStream = fs.createReadStream(outputPath);
  const jsonStream = fileStream.pipe(parser()).pipe(streamArray());

  for await (const { value: result } of jsonStream) {
    const file = result.filePath;
    const messages = result.messages;

    if (!messages || messages.length === 0) continue;

    const rules = new Set();
    for (const msg of messages) {
      if (msg.ruleId) {
        rules.add(msg.ruleId);
      }
    }

    if (rules.size === 0) continue;

    if (fs.existsSync(file)) {
      const ruleList = Array.from(rules).sort().join(', ');
      const content = fs.readFileSync(file, 'utf8');
      
      // Check if already baselined
      const baselineMarker = `/* eslint-disable ${ruleList} */`;
      if (content.includes(baselineMarker)) {
        console.log(`File ${file} already baselined.`);
        continue;
      }

      let updatedContent;
      if (content.startsWith('#!')) {
        const lines = content.split('\n');
        // Insert comment after the shebang line
        lines.splice(1, 0, baselineMarker);
        updatedContent = lines.join('\n');
      } else {
        updatedContent = baselineMarker + '\n' + content;
      }

      fs.writeFileSync(file, updatedContent);
      console.log(`Baselined ${file} with rules: ${ruleList}`);
    } else {
      console.warn(`File not found: ${file}`);
    }
  }
}

await processFiles();
