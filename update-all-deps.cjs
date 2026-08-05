const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const dirsToScan = ['packages', 'core', 'handwritten'];
const excludeDirs = [
  path.join('core', 'packages', 'gaxios'),
  path.join('handwritten', 'firestore'),
  path.join('handwritten', 'spanner'),
  path.join('handwritten', 'storage')
];
const excludeDependencyNames = [
  'gaxios',
  '@google-cloud/firestore',
  '@google-cloud/spanner',
  '@google-cloud/storage'
];

let targetLibraries = {}; // Map package name to its directory path
let packageFilesToUpdate = []; // List of all package.json files we'll modify

function scanDirForPackages(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  // Check if current directory should be excluded
  if (excludeDirs.some(ex => dirPath === ex || dirPath.startsWith(ex + path.sep))) {
    return;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    // Check exclusion again for the full path
    if (excludeDirs.some(ex => fullPath === ex || fullPath.startsWith(ex + path.sep))) {
      continue;
    }

    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules') {
        scanDirForPackages(fullPath);
      }
    } else if (entry.name === 'package.json') {
      const pkgRaw = fs.readFileSync(fullPath, 'utf8');
      const pkg = JSON.parse(pkgRaw);
      
      packageFilesToUpdate.push(fullPath);

      // Only add to targetLibraries if it's not a sample package (samples typically set private:true and we don't publish them as dependencies)
      if (pkg.name && !pkg.private) {
        // Also avoid adding if it's one of the excluded names, just in case
        if (!excludeDependencyNames.includes(pkg.name)) {
          targetLibraries[pkg.name] = fullPath;
        }
      }
    }
  }
}

// 1. Scan and collect all package.json files and the libraries we want to fetch latest versions for
for (const dir of dirsToScan) {
  scanDirForPackages(dir);
}

console.log(`Found ${Object.keys(targetLibraries).length} target libraries to bump.`);
console.log(`Found ${packageFilesToUpdate.length} package.json files to update.`);

// 2. Fetch latest versions from npm
const latestVersions = {};
for (const lib of Object.keys(targetLibraries)) {
  try {
    const version = cp.execSync(`npm show ${lib} version`, { encoding: 'utf8' }).trim();
    if (version) {
      latestVersions[lib] = `^${version}`;
      console.log(`Latest version for ${lib} is ^${version}`);
    }
  } catch (err) {
    // some libraries might not be published yet, ignore
  }
}

// 3. Update the package.json files
let filesUpdatedCount = 0;
for (const file of packageFilesToUpdate) {
  const pkgRaw = fs.readFileSync(file, 'utf8');
  const pkg = JSON.parse(pkgRaw);
  let changed = false;

  // Bump engines.node
  if (pkg.engines && pkg.engines.node && pkg.engines.node !== '>=22') {
    pkg.engines.node = '>=22';
    changed = true;
  }

  // Update dependencies
  for (const depsKey of ['dependencies', 'devDependencies']) {
    if (pkg[depsKey]) {
      for (const [dep, currentVer] of Object.entries(pkg[depsKey])) {
        // If it's one of the excluded dependencies, do NOT bump
        if (excludeDependencyNames.includes(dep)) {
          continue;
        }
        
        // If we found a newer version for this package
        if (latestVersions[dep] && currentVer !== latestVersions[dep]) {
          pkg[depsKey][dep] = latestVersions[dep];
          changed = true;
        }
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n');
    filesUpdatedCount++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Finished updating ${filesUpdatedCount} files.`);
