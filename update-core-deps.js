import fs from 'fs';
import path from 'path';
import glob from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const coreLibraries = {
  "@google-cloud/common": "^7.0.0",
  "@google-cloud/projectify": "^6.0.0",
  "@google-cloud/precise-date": "^6.0.0",
  "@google-cloud/paginator": "^7.0.0",
  "@google-cloud/promisify": "^6.0.0",
  "google-auth-library": "^11.0.0",
  "google-gax": "^6.0.0",
  "google-proto-files": "^6.0.0",
  "teeny-request": "^11.0.0",
  "retry-request": "^9.0.0",
  "gcp-metadata": "^9.0.0",
  "googleapis-common": "^9.0.0",
  "@google-cloud/typeless-sample-bot": "^4.0.0"
};

const searchPatterns = [
  'packages/*/package.json',
  'packages/*/samples/package.json'
];

let updatedCount = 0;

for (const pattern of searchPatterns) {
  const files = glob.sync(pattern, { cwd: __dirname });
  
  for (const relPath of files) {
    const filePath = path.join(__dirname, relPath);
    if (!fs.existsSync(filePath)) continue;

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const pkg = JSON.parse(content);
      let modified = false;

      // 1. Update engines.node
      if (pkg.engines && pkg.engines.node) {
        if (pkg.engines.node !== '>=22') {
          pkg.engines.node = '>=22';
          modified = true;
        }
      } else {
        pkg.engines = pkg.engines || {};
        pkg.engines.node = '>=22';
        modified = true;
      }

      // 2. Update core library dependencies
      if (pkg.dependencies) {
        for (const [lib, version] of Object.entries(coreLibraries)) {
          if (pkg.dependencies[lib] && pkg.dependencies[lib] !== version) {
            pkg.dependencies[lib] = version;
            modified = true;
          }
        }
      }
      
      if (pkg.devDependencies) {
        for (const [lib, version] of Object.entries(coreLibraries)) {
          if (pkg.devDependencies[lib] && pkg.devDependencies[lib] !== version) {
            pkg.devDependencies[lib] = version;
            modified = true;
          }
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
        console.log(`Updated ${relPath}`);
        updatedCount++;
      }
    } catch (e) {
      console.error(`Error updating ${filePath}:`, e);
    }
  }
}

console.log(`Finished updating ${updatedCount} files.`);
