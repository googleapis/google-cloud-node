import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const packagesDir = 'packages';
const items = fs.readdirSync(packagesDir);

const completedPackages = [
  'gapic-node-processing',
  'google-ads-admanager',
  'google-ads-datamanager',
  'google-ai-generativelanguage',
  'google-apps-events-subscriptions',
  'google-apps-meet',
  'google-area120-tables',
  'google-chat',
  'google-cloud-accessapproval',
  'google-cloud-advisorynotifications'
];

// Filter for directories that have a src folder and are not yet completed
const packages = items.filter(item => {
  const p = path.join(packagesDir, item);
  return fs.statSync(p).isDirectory() && 
         fs.existsSync(path.join(p, 'src')) && 
         !completedPackages.includes(item);
});

console.log(`Found ${packages.length} remaining packages to process.`);

for (const pkg of packages) {
  if (!/^[a-zA-Z0-9-_]+$/.test(pkg)) {
    console.error(`Skipping invalid package name: ${pkg}`);
    continue;
  }
  console.log(`\n========================================`);
  console.log(`Processing package: ${pkg}`);
  
  try {
    console.log(`Running ESLint...`);
    execFileSync('node', ['packages/run-eslint-root.mjs', pkg], { stdio: 'inherit' });
    
    console.log(`Baselining violations...`);
    execFileSync('node', ['packages/baseline-from-output.mjs', pkg], { stdio: 'inherit' });
    
    console.log(`Finished processing ${pkg}`);
  } catch (error) {
    console.error(`Error processing package ${pkg}:`, error.message);
  }
}
