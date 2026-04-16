import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

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

let results;
try {
  const content = fs.readFileSync(outputPath, 'utf8');
  results = JSON.parse(content);
} catch (e) {
  console.error(`Error parsing JSON from ${outputPath}:`, e);
  process.exit(1);
}

async function processFiles() {
  for (const result of results) {
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
      const ruleList = Array.from(rules).join(', ');
      const disableComment = `/* eslint-disable ${ruleList} */\n`;

      const fd = fs.openSync(file, 'r');
      const buffer = Buffer.alloc(disableComment.length);
      fs.readSync(fd, buffer, 0, disableComment.length, 0);
      fs.closeSync(fd);
      const firstPart = buffer.toString('utf8');

      if (firstPart !== disableComment) {
        const tempFile = `${file}.tmp`;
        const writeStream = fs.createWriteStream(tempFile);
        const readStream = fs.createReadStream(file);

        writeStream.write(disableComment);
        
        try {
          await pipeline(readStream, writeStream);
          fs.renameSync(tempFile, file);
          console.log(`Baselined ${file} with rules: ${ruleList}`);
        } catch (err) {
          console.error(`Error piping streams for ${file}:`, err);
          if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        }
      } else {
        console.log(`File ${file} already baselined.`);
      }
    } else {
      console.warn(`File not found: ${file}`);
    }
  }
}

await processFiles();
