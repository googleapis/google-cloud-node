const fs = require('fs');
const path = require('path');

const dirsToScan = ['packages', 'core', 'handwritten'];
// Directories to exclude entirely from any modifications
const excludeDirNames = ['gaxios', 'firestore', 'spanner', 'storage', 'google-cloud-firestore', 'google-cloud-spanner', 'google-cloud-storage'];
// Dependency names that should not be bumped anywhere
const excludeDepNames = ['gaxios', '@google-cloud/firestore', '@google-cloud/spanner', '@google-cloud/storage'];

function isExcluded(dirPath) {
  const parts = dirPath.split(path.sep);
  return parts.some(p => excludeDirNames.includes(p));
}

let targetLibraries = {};
let packageFilesToUpdate = [];

function scanDirForPackages(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  if (isExcluded(dirPath)) return;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (isExcluded(fullPath)) continue;

    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules') {
        scanDirForPackages(fullPath);
      }
    } else if (entry.name === 'package.json') {
      try {
        const pkg = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        packageFilesToUpdate.push(fullPath);
        if (pkg.name && !excludeDepNames.includes(pkg.name)) {
          targetLibraries[pkg.name] = pkg.version;
        }
      } catch (err) {
        console.error(`Error parsing ${fullPath}`);
      }
    }
  }
}

for (const dir of dirsToScan) {
  scanDirForPackages(dir);
}

const latestVersions = {};
for (const [lib, version] of Object.entries(targetLibraries)) {
  latestVersions[lib] = `^${version}`;
}

let count = 0;
for (const file of packageFilesToUpdate) {
  const pkg = JSON.parse(fs.readFileSync(file, 'utf8'));
  let changed = false;

  if (pkg.engines && pkg.engines.node && pkg.engines.node !== '>=22') {
    pkg.engines.node = '>=22';
    changed = true;
  }

  for (const depsKey of ['dependencies', 'devDependencies']) {
    if (pkg[depsKey]) {
      for (const [dep, currentVer] of Object.entries(pkg[depsKey])) {
        if (excludeDepNames.includes(dep)) continue;
        
        // Skip file references (e.g. ./file.tgz, file:../file)
        if (!currentVer.startsWith('^') && !currentVer.startsWith('~')) {
          continue;
        }

        if (latestVersions[dep] && currentVer !== latestVersions[dep]) {
          pkg[depsKey][dep] = latestVersions[dep];
          changed = true;
        }
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n');
    count++;
  }
}
console.log(`Updated ${count} files.`);
